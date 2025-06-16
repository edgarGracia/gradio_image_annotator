
import gradio as gr
from app import demo as app
import os

_docs = {'image_annotator': {'description': 'Creates a component to annotate images with bounding boxes. The bounding boxes can be created and edited by the user or be passed by code.\nIt is also possible to predefine a set of valid classes and colors.', 'members': {'__init__': {'value': {'type': 'dict | None', 'default': 'None', 'description': "A dict or None. The dictionary must contain a key 'image' with either an URL to an image, a numpy image or a PIL image. Optionally it may contain a key 'boxes' with a list of boxes. Each box must be a dict wit the keys: 'xmin', 'ymin', 'xmax' and 'ymax' with the absolute image coordinates of the box. Optionally can also include the keys 'label' and 'color' describing the label and color of the box. Color must be a tuple of RGB values (e.g. `(255,255,255)`). Optionally can also include the keys 'orientation' with a integer between 0 and 3, describing the number of times the image is rotated by 90 degrees in frontend, the rotation is clockwise."}, 'boxes_alpha': {'type': 'float | None', 'default': 'None', 'description': 'Opacity of the bounding boxes 0 and 1.'}, 'label_list': {'type': 'list[str] | None', 'default': 'None', 'description': 'List of valid labels.'}, 'label_colors': {'type': 'list[str] | None', 'default': 'None', 'description': 'Optional list of colors for each label when `label_list` is used. Colors must be a tuple of RGB values (e.g. `(255,255,255)`).'}, 'box_min_size': {'type': 'int | None', 'default': 'None', 'description': 'Minimum valid bounding box size.'}, 'handle_size': {'type': 'int | None', 'default': 'None', 'description': 'Size of the bounding box resize handles.'}, 'box_thickness': {'type': 'int | None', 'default': 'None', 'description': 'Thickness of the bounding box outline.'}, 'box_selected_thickness': {'type': 'int | None', 'default': 'None', 'description': 'Thickness of the bounding box outline when it is selected.'}, 'disable_edit_boxes': {'type': 'bool | None', 'default': 'None', 'description': 'Disables the ability to set and edit the label and color of the boxes.'}, 'single_box': {'type': 'bool', 'default': 'False', 'description': 'If True, at most one box can be drawn.'}, 'height': {'type': 'int | str | None', 'default': 'None', 'description': 'The height of the displayed image, specified in pixels if a number is passed, or in CSS units if a string is passed.'}, 'width': {'type': 'int | str | None', 'default': 'None', 'description': 'The width of the displayed image, specified in pixels if a number is passed, or in CSS units if a string is passed.'}, 'image_mode': {'type': '"1"\n    | "L"\n    | "P"\n    | "RGB"\n    | "RGBA"\n    | "CMYK"\n    | "YCbCr"\n    | "LAB"\n    | "HSV"\n    | "I"\n    | "F"', 'default': '"RGB"', 'description': '"RGB" if color, or "L" if black and white. See https://pillow.readthedocs.io/en/stable/handbook/concepts.html for other supported image modes and their meaning.'}, 'sources': {'type': 'list["upload" | "webcam" | "clipboard"] | None', 'default': '["upload", "webcam", "clipboard"]', 'description': 'List of sources for the image. "upload" creates a box where user can drop an image file, "webcam" allows user to take snapshot from their webcam, "clipboard" allows users to paste an image from the clipboard. If None, defaults to ["upload", "webcam", "clipboard"].'}, 'image_type': {'type': '"numpy" | "pil" | "filepath"', 'default': '"numpy"', 'description': 'The format the image is converted before being passed into the prediction function. "numpy" converts the image to a numpy array with shape (height, width, 3) and values from 0 to 255, "pil" converts the image to a PIL image object, "filepath" passes a str path to a temporary file containing the image. If the image is SVG, the `type` is ignored and the filepath of the SVG is returned.'}, 'label': {'type': 'str | None', 'default': 'None', 'description': 'The label for this component. Appears above the component and is also used as the header if there are a table of examples for this component. If None and used in a `gr.Interface`, the label will be the name of the parameter this component is assigned to.'}, 'container': {'type': 'bool', 'default': 'True', 'description': 'If True, will place the component in a container - providing some extra padding around the border.'}, 'scale': {'type': 'int | None', 'default': 'None', 'description': 'relative size compared to adjacent Components. For example if Components A and B are in a Row, and A has scale=2, and B has scale=1, A will be twice as wide as B. Should be an integer. scale applies in Rows, and to top-level Components in Blocks where fill_height=True.'}, 'min_width': {'type': 'int', 'default': '160', 'description': 'minimum pixel width, will wrap if not sufficient screen space to satisfy this value. If a certain scale value results in this Component being narrower than min_width, the min_width parameter will be respected first.'}, 'interactive': {'type': 'bool | None', 'default': 'True', 'description': 'if True, will allow users to upload and annotate an image; if False, can only be used to display annotated images.'}, 'visible': {'type': 'bool', 'default': 'True', 'description': 'If False, component will be hidden.'}, 'elem_id': {'type': 'str | None', 'default': 'None', 'description': 'An optional string that is assigned as the id of this component in the HTML DOM. Can be used for targeting CSS styles.'}, 'elem_classes': {'type': 'list[str] | str | None', 'default': 'None', 'description': 'An optional list of strings that are assigned as the classes of this component in the HTML DOM. Can be used for targeting CSS styles.'}, 'render': {'type': 'bool', 'default': 'True', 'description': 'If False, component will not render be rendered in the Blocks context. Should be used if the intention is to assign event listeners now but render the component later.'}, 'show_label': {'type': 'bool | None', 'default': 'None', 'description': 'if True, will display label.'}, 'show_download_button': {'type': 'bool', 'default': 'True', 'description': 'If True, will show a button to download the image.'}, 'show_share_button': {'type': 'bool | None', 'default': 'None', 'description': 'If True, will show a share icon in the corner of the component that allows user to share outputs to Hugging Face Spaces Discussions. If False, icon does not appear. If set to None (default behavior), then the icon appears if this Gradio app is launched on Spaces, but not otherwise.'}, 'show_clear_button': {'type': 'bool | None', 'default': 'True', 'description': 'If True, will show a button to clear the current image.'}, 'show_remove_button': {'type': 'bool | None', 'default': 'None', 'description': 'If True, will show a button to remove the selected bounding box.'}, 'handles_cursor': {'type': 'bool | None', 'default': 'True', 'description': 'If True, the cursor will change when hovering over box handles in drag mode. Can be CPU-intensive.'}, 'use_default_label': {'type': 'bool | None', 'default': 'False', 'description': 'If True, the first item in label_list will be used as the default label when creating boxes.'}}, 'postprocess': {'value': {'type': 'AnnotatedImageValue | None', 'description': 'A dict with an image and an optional list of boxes or None.'}}, 'preprocess': {'return': {'type': 'AnnotatedImageValue | None', 'description': 'A dict with the image and boxes or None.'}, 'value': None}}, 'events': {'clear': {'type': None, 'default': None, 'description': 'This listener is triggered when the user clears the image_annotator using the clear button for the component.'}, 'change': {'type': None, 'default': None, 'description': 'Triggered when the value of the image_annotator changes either because of user input (e.g. a user types in a textbox) OR because of a function update (e.g. an image receives a value from the output of an event trigger). See `.input()` for a listener that is only triggered by user input.'}, 'upload': {'type': None, 'default': None, 'description': 'This listener is triggered when the user uploads a file into the image_annotator.'}}}, '__meta__': {'additional_interfaces': {'AnnotatedImageValue': {'source': 'class AnnotatedImageValue(TypedDict):\n    image: Optional[np.ndarray | PIL.Image.Image | str]\n    boxes: Optional[List[dict]]\n    orientation: Optional[int]'}}, 'user_fn_refs': {'image_annotator': ['AnnotatedImageValue']}}}

abs_path = os.path.join(os.path.dirname(__file__), "css.css")

with gr.Blocks(
    css=abs_path,
    theme=gr.themes.Default(
        font_mono=[
            gr.themes.GoogleFont("Inconsolata"),
            "monospace",
        ],
    ),
) as demo:
    gr.Markdown(
"""
# `gradio_image_annotation`

<div style="display: flex; gap: 7px;">
<a href="https://pypi.org/project/gradio_image_annotation/" target="_blank"><img alt="PyPI - Version" src="https://img.shields.io/pypi/v/gradio_image_annotation"></a>  
</div>

A Gradio component that can be used to annotate images with bounding boxes.
""", elem_classes=["md-custom"], header_links=True)
    app.render()
    gr.Markdown(
"""
## Installation

```bash
pip install gradio_image_annotation
```

## Usage

```python
import gradio as gr
from gradio_image_annotation import image_annotator
import numpy as np


example_annotation = {
    "image": "https://gradio-builds.s3.amazonaws.com/demo-files/base.png",
    "boxes": [
        {
            "xmin": 636,
            "ymin": 575,
            "xmax": 801,
            "ymax": 697,
            "label": "Vehicle",
            "color": (255, 0, 0)
        },
        {
            "xmin": 360,
            "ymin": 615,
            "xmax": 386,
            "ymax": 702,
            "label": "Person",
            "color": (0, 255, 0)
        }
    ]
}

examples_crop = [
    {
        "image": "https://raw.githubusercontent.com/gradio-app/gradio/main/guides/assets/logo.png",
        "boxes": [
            {
                "xmin": 30,
                "ymin": 70,
                "xmax": 530,
                "ymax": 500,
                "color": (100, 200, 255),
            }
        ],
    },
    {
        "image": "https://gradio-builds.s3.amazonaws.com/demo-files/base.png",
        "boxes": [
            {
                "xmin": 636,
                "ymin": 575,
                "xmax": 801,
                "ymax": 697,
                "color": (255, 0, 0),
            },
        ],
    },
]


def crop(annotations):
    if angle := annotations.get("orientation", None):
        annotations["image"] = np.rot90(annotations["image"], k=-angle)
    if annotations["boxes"]:
        box = annotations["boxes"][0]
        return annotations["image"][
            box["ymin"]:box["ymax"],
            box["xmin"]:box["xmax"]
        ]
    return None


def get_boxes_json(annotations):
    return annotations["boxes"]


with gr.Blocks() as demo:
    with gr.Tab("Object annotation", id="tab_object_annotation"):
        annotator = image_annotator(
            example_annotation,
            label_list=["Person", "Vehicle"],
            label_colors=[(0, 255, 0), (255, 0, 0)],
        )
        button_get = gr.Button("Get bounding boxes")
        json_boxes = gr.JSON()
        button_get.click(get_boxes_json, annotator, json_boxes)

    with gr.Tab("Crop", id="tab_crop"):
        with gr.Row():
            annotator_crop = image_annotator(
                examples_crop[0],
                image_type="numpy",
                disable_edit_boxes=True,
                single_box=True,
            )
            image_crop = gr.Image()
        button_crop = gr.Button("Crop")
        button_crop.click(crop, annotator_crop, image_crop)

        gr.Examples(examples_crop, annotator_crop)

if __name__ == "__main__":
    demo.launch()

```
""", elem_classes=["md-custom"], header_links=True)


    gr.Markdown("""
## `image_annotator`

### Initialization
""", elem_classes=["md-custom"], header_links=True)

    gr.ParamViewer(value=_docs["image_annotator"]["members"]["__init__"], linkify=['AnnotatedImageValue'])


    gr.Markdown("### Events")
    gr.ParamViewer(value=_docs["image_annotator"]["events"], linkify=['Event'])




    gr.Markdown("""

### User function

The impact on the users predict function varies depending on whether the component is used as an input or output for an event (or both).

- When used as an Input, the component only impacts the input signature of the user function.
- When used as an output, the component only impacts the return signature of the user function.

The code snippet below is accurate in cases where the component is used as both an input and an output.

- **As input:** Is passed, a dict with the image and boxes or None.
- **As output:** Should return, a dict with an image and an optional list of boxes or None.

 ```python
def predict(
    value: AnnotatedImageValue | None
) -> AnnotatedImageValue | None:
    return value
```
""", elem_classes=["md-custom", "image_annotator-user-fn"], header_links=True)




    code_AnnotatedImageValue = gr.Markdown("""
## `AnnotatedImageValue`
```python
class AnnotatedImageValue(TypedDict):
    image: Optional[np.ndarray | PIL.Image.Image | str]
    boxes: Optional[List[dict]]
    orientation: Optional[int]
```""", elem_classes=["md-custom", "AnnotatedImageValue"], header_links=True)

    demo.load(None, js=r"""function() {
    const refs = {
            AnnotatedImageValue: [], };
    const user_fn_refs = {
          image_annotator: ['AnnotatedImageValue'], };
    requestAnimationFrame(() => {

        Object.entries(user_fn_refs).forEach(([key, refs]) => {
            if (refs.length > 0) {
                const el = document.querySelector(`.${key}-user-fn`);
                if (!el) return;
                refs.forEach(ref => {
                    el.innerHTML = el.innerHTML.replace(
                        new RegExp("\\b"+ref+"\\b", "g"),
                        `<a href="#h-${ref.toLowerCase()}">${ref}</a>`
                    );
                })
            }
        })

        Object.entries(refs).forEach(([key, refs]) => {
            if (refs.length > 0) {
                const el = document.querySelector(`.${key}`);
                if (!el) return;
                refs.forEach(ref => {
                    el.innerHTML = el.innerHTML.replace(
                        new RegExp("\\b"+ref+"\\b", "g"),
                        `<a href="#h-${ref.toLowerCase()}">${ref}</a>`
                    );
                })
            }
        })
    })
}

""")

demo.launch()
