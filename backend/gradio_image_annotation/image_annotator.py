from __future__ import annotations

import re
import warnings
from pathlib import Path
from typing import Any, List, Optional, Literal, TypedDict, cast

import numpy as np
import PIL.Image
from PIL import ImageOps

from gradio import image_utils, utils
from gradio.components.base import Component
from gradio.data_classes import FileData, GradioModel
from gradio.events import Events

PIL.Image.init()  # fixes https://github.com/gradio-app/gradio/issues/2843


class AnnotatedImageData(GradioModel):
    image: FileData
    boxes: List[dict] = []
    orientation: int = 0


class AnnotatedImageValue(TypedDict):
    image: Optional[np.ndarray | PIL.Image.Image | str]
    boxes: Optional[List[dict]]
    orientation: Optional[int]


def rgb2hex(r,g,b):
    def clip(x):
        return max(min(x, 255), 0)
    return "#{:02x}{:02x}{:02x}".format(clip(r),clip(g),clip(b))


class image_annotator(Component):
    """
    Creates a component to annotate images with bounding boxes. The bounding boxes can be created and edited by the user or be passed by code.
    It is also possible to predefine a set of valid classes and colors.
    """

    EVENTS = [
        Events.clear,
        Events.change,
        Events.upload,
    ]

    data_model = AnnotatedImageData

    def __init__(
        self,
        value: dict | None = None,
        *,
        boxes_alpha: float | None = None,
        label_list: list[str] | None = None,
        label_colors: list[str] | None = None,
        box_min_size: int | None = None,
        handle_size: int | None = None,
        box_thickness: int | None = None,
        box_selected_thickness: int | None = None,
        disable_edit_boxes: bool | None = None,
        single_box: bool = False,
        height: int | str | None = None,
        width: int | str | None = None,
        image_mode: Literal[
            "1", "L", "P", "RGB", "RGBA", "CMYK", "YCbCr", "LAB", "HSV", "I", "F"
        ] = "RGB",
        sources: list[Literal["upload", "webcam", "clipboard"]] | None = [
            "upload",
            "webcam",
            "clipboard",
        ],
        image_type: Literal["numpy", "pil", "filepath"] = "numpy",
        label: str | None = None,
        container: bool = True,
        scale: int | None = None,
        min_width: int = 160,
        interactive: bool | None = True,
        visible: bool = True,
        elem_id: str | None = None,
        elem_classes: list[str] | str | None = None,
        render: bool = True,
        show_label: bool | None = None,
        show_download_button: bool = True,
        show_share_button: bool | None = None,
        show_clear_button: bool | None = True,
        show_remove_button: bool | None = None,
        handles_cursor: bool | None = True,
        use_default_label: bool | None = False,
    ):
        """
        Parameters:
            value: A dict or None. The dictionary must contain a key 'image' with either an URL to an image, a numpy image or a PIL image. Optionally it may contain a key 'boxes' with a list of boxes. Each box must be a dict wit the keys: 'xmin', 'ymin', 'xmax' and 'ymax' with the absolute image coordinates of the box. Optionally can also include the keys 'label' and 'color' describing the label and color of the box. Color must be a tuple of RGB values (e.g. `(255,255,255)`). Optionally can also include the keys 'orientation' with a integer between 0 and 3, describing the number of times the image is rotated by 90 degrees in frontend, the rotation is clockwise.
            boxes_alpha: Opacity of the bounding boxes 0 and 1.
            label_list: List of valid labels.
            label_colors: Optional list of colors for each label when `label_list` is used. Colors must be a tuple of RGB values (e.g. `(255,255,255)`).
            box_min_size: Minimum valid bounding box size.
            handle_size: Size of the bounding box resize handles.
            box_thickness: Thickness of the bounding box outline.
            box_selected_thickness: Thickness of the bounding box outline when it is selected.
            disable_edit_boxes: Disables the ability to set and edit the label and color of the boxes.
            single_box: If True, at most one box can be drawn.
            height: The height of the displayed image, specified in pixels if a number is passed, or in CSS units if a string is passed.
            width: The width of the displayed image, specified in pixels if a number is passed, or in CSS units if a string is passed.
            image_mode: "RGB" if color, or "L" if black and white. See https://pillow.readthedocs.io/en/stable/handbook/concepts.html for other supported image modes and their meaning.
            sources: List of sources for the image. "upload" creates a box where user can drop an image file, "webcam" allows user to take snapshot from their webcam, "clipboard" allows users to paste an image from the clipboard. If None, defaults to ["upload", "webcam", "clipboard"].
            image_type: The format the image is converted before being passed into the prediction function. "numpy" converts the image to a numpy array with shape (height, width, 3) and values from 0 to 255, "pil" converts the image to a PIL image object, "filepath" passes a str path to a temporary file containing the image. If the image is SVG, the `type` is ignored and the filepath of the SVG is returned.
            label: The label for this component. Appears above the component and is also used as the header if there are a table of examples for this component. If None and used in a `gr.Interface`, the label will be the name of the parameter this component is assigned to.
            container: If True, will place the component in a container - providing some extra padding around the border.
            scale: relative size compared to adjacent Components. For example if Components A and B are in a Row, and A has scale=2, and B has scale=1, A will be twice as wide as B. Should be an integer. scale applies in Rows, and to top-level Components in Blocks where fill_height=True.
            min_width: minimum pixel width, will wrap if not sufficient screen space to satisfy this value. If a certain scale value results in this Component being narrower than min_width, the min_width parameter will be respected first.
            interactive: if True, will allow users to upload and annotate an image; if False, can only be used to display annotated images.
            visible: If False, component will be hidden.
            elem_id: An optional string that is assigned as the id of this component in the HTML DOM. Can be used for targeting CSS styles.
            elem_classes: An optional list of strings that are assigned as the classes of this component in the HTML DOM. Can be used for targeting CSS styles.
            render: If False, component will not render be rendered in the Blocks context. Should be used if the intention is to assign event listeners now but render the component later.
            show_label: if True, will display label.
            show_download_button: If True, will show a button to download the image.
            show_share_button: If True, will show a share icon in the corner of the component that allows user to share outputs to Hugging Face Spaces Discussions. If False, icon does not appear. If set to None (default behavior), then the icon appears if this Gradio app is launched on Spaces, but not otherwise.
            show_clear_button: If True, will show a button to clear the current image.
            show_remove_button: If True, will show a button to remove the selected bounding box.
            handles_cursor: If True, the cursor will change when hovering over box handles in drag mode. Can be CPU-intensive.
            use_default_label: If True, the first item in label_list will be used as the default label when creating boxes.
        """

        valid_types = ["numpy", "pil", "filepath"]
        if image_type not in valid_types:
            raise ValueError(
                f"Invalid value for parameter `type`: {type}. Please choose from one of: {valid_types}"
            )
        self.image_type = image_type
        self.height = height
        self.width = width
        self.image_mode = image_mode
        
        self.sources = sources
        valid_sources = ["upload", "clipboard", "webcam", None]
        if isinstance(sources, str):
            self.sources = [sources]
        if self.sources is None:
            self.sources = []
        if self.sources is not None:
            for source in self.sources:
                if source not in valid_sources:
                    raise ValueError(
                        f"`sources` must a list consisting of elements in {valid_sources}"
                    )
        
        self.show_download_button = show_download_button
        self.show_share_button = (
            (utils.get_space() is not None)
            if show_share_button is None
            else show_share_button
        )
        self.show_clear_button = show_clear_button
        self.show_remove_button = show_remove_button
        self.handles_cursor = handles_cursor
        self.use_default_label = use_default_label

        self.boxes_alpha = boxes_alpha
        self.box_min_size = box_min_size
        self.handle_size = handle_size
        self.box_thickness = box_thickness
        self.box_selected_thickness = box_selected_thickness
        self.disable_edit_boxes = disable_edit_boxes
        self.single_box = single_box
        if label_list:
            self.label_list = [(l, i) for i, l in enumerate(label_list)]
        else:
            self.label_list = None
        
        # Parse colors
        self.label_colors = label_colors
        if self.label_colors:
            if (not isinstance(self.label_colors, list)
                or self.label_list is None
                or len(self.label_colors) != len(self.label_list)):
                raise ValueError("``label_colors`` must be a list with the "
                                 "same length as ``label_list``")
            for i, color in enumerate(self.label_colors):
                if isinstance(color, str):
                    if len(color) != 7 or color[0] != "#":
                        raise ValueError(f"Invalid color value {color}")
                elif isinstance(color, (list, tuple)):
                    self.label_colors[i] = rgb2hex(*color)

        super().__init__(
            label=label,
            every=None,
            show_label=show_label,
            container=container,
            scale=scale,
            min_width=min_width,
            interactive=interactive,
            visible=visible,
            elem_id=elem_id,
            elem_classes=elem_classes,
            render=render,
            value=value,
        )

    def preprocess_image(self, image: FileData | None) -> str | None:
        if image is None:
            return None
        file_path = Path(image.path)
        if image.orig_name:
            p = Path(image.orig_name)
            name = p.stem
            suffix = p.suffix.replace(".", "")
            if suffix in ["jpg", "jpeg"]:
                suffix = "jpeg"
        else:
            name = "image"
            suffix = "png"

        if suffix.lower() == "svg":
            return str(file_path)
        
        im = PIL.Image.open(file_path)
        exif = im.getexif()
        # 274 is the code for image rotation and 1 means "correct orientation"
        if exif.get(274, 1) != 1 and hasattr(ImageOps, "exif_transpose"):
            try:
                im = ImageOps.exif_transpose(im)
            except Exception:
                warnings.warn(
                    f"Failed to transpose image {file_path} based on EXIF data."
                )
        with warnings.catch_warnings():
            warnings.simplefilter("ignore")
            im = im.convert(self.image_mode)
        return image_utils.format_image(
            im,
            cast(Literal["numpy", "pil", "filepath"], self.image_type),
            self.GRADIO_CACHE,
            name=name,
            format=suffix,
        )

    def preprocess_boxes(self, boxes: List[dict] | None) -> list:
        parsed_boxes = []
        for box in boxes:
            new_box = {}
            new_box["label"] = box.get("label", "")
            new_box["color"] = (0,0,0)
            if "color" in box:
                match = re.match(r'rgb\((\d+), (\d+), (\d+)\)', box["color"])
                if match:
                    new_box["color"] = tuple(int(match.group(i)) for i in range(1, 4))
            scale_factor = box.get("scaleFactor", 1)
            new_box["xmin"] = round(box["xmin"] / scale_factor)
            new_box["ymin"] = round(box["ymin"] / scale_factor)
            new_box["xmax"] = round(box["xmax"] / scale_factor)
            new_box["ymax"] = round(box["ymax"] / scale_factor)
            parsed_boxes.append(new_box)
        return parsed_boxes

    def preprocess(self, payload: AnnotatedImageData | None) -> AnnotatedImageValue | None:
        """
        Parameters:
            payload: an AnnotatedImageData object.
        Returns:
            A dict with the image and boxes or None.
        """
        if payload is None:
            return None
        
        ret_value = {
            "image": self.preprocess_image(payload.image),
            "boxes": self.preprocess_boxes(payload.boxes),
            "orientation": payload.orientation,
        }
        return ret_value

    def postprocess(self, value: AnnotatedImageValue | None) -> AnnotatedImageData | None:
        """
        Parameters:
            value: A dict with an image and an optional list of boxes or None.
        Returns:
            Returns an AnnotatedImageData object.
        """
        # Check value
        if value is None:
            return None
        if not isinstance(value, dict):
            raise ValueError(f"``value`` must be a dict. Got {type(value)}")
    
        # Check and get boxes
        boxes = value.setdefault("boxes", [])
        if boxes:
            if not isinstance(value["boxes"], (list, tuple)):
                raise ValueError(f"'boxes' must be a list of dicts. Got "
                                 f"{type(value['boxes'])}")
            for box in value["boxes"]:
                if (not isinstance(box, dict)
                    or not set(box.keys()).issubset({"label", "xmin", "ymin", "xmax", "ymax", "color"})
                    or not set(box.keys()).issuperset({"xmin", "ymin", "xmax", "ymax"})
                    ):
                    raise ValueError("Box must be a dict with the following "
                                     "keys: 'xmin', 'ymin', 'xmax', 'ymax', "
                                     f"['label', 'color']'. Got {box}")

        # Check and parse image
        image = value.setdefault("image", None)
        if image is not None:
            if isinstance(image, str) and image.lower().endswith(".svg"):
                image = FileData(path=image, orig_name=Path(image).name)
            else:
                saved = image_utils.save_image(image, self.GRADIO_CACHE)
                orig_name = Path(saved).name if Path(saved).exists() else None
                image = FileData(path=saved, orig_name=orig_name)
        else:
            raise ValueError(f"An image must be provided. Got {value}")
        
        orientation = value.setdefault("orientation", 0)
        if orientation is None:
            orientation = 0

        return AnnotatedImageData(image=image, boxes=boxes, orientation=orientation)

    def process_example(self, value: dict | None) -> FileData | None:
        if value is None:
            return None
        if not isinstance(value, dict):
            raise ValueError(f"``value`` must be a dict. Got {type(value)}")

        image = value.setdefault("image", None)
        if image is not None:
            if isinstance(image, str) and image.lower().endswith(".svg"):
                image = FileData(path=image, orig_name=Path(image).name)
            else:
                saved = image_utils.save_image(image, self.GRADIO_CACHE)
                orig_name = Path(saved).name if Path(saved).exists() else None
                image = FileData(path=saved, orig_name=orig_name)
        else:
            raise ValueError(f"An image must be provided. Got {value}")

        return image

    def example_inputs(self) -> Any:
        return {
            "image": "https://raw.githubusercontent.com/gradio-app/gradio/main/guides/assets/logo.png",
            "boxes": [
                {
                    "xmin": 30,
                    "ymin": 70,
                    "xmax": 530,
                    "ymax": 500,
                    "label": "Gradio",
                    "color": (250,185,0),
                }
            ]
        }
