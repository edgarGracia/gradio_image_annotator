
# `gradio_image_annotation`
<a href="https://pypi.org/project/gradio_image_annotation/" target="_blank"><img alt="PyPI - Version" src="https://img.shields.io/pypi/v/gradio_image_annotation"></a>  

A Gradio component that can be used to annotate images with bounding boxes.

## Installation

```bash
pip install gradio_image_annotation
```

## Usage

```python
import gradio as gr
from gradio_image_annotation import image_annotator


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

example_crop = {
    "image": "https://raw.githubusercontent.com/gradio-app/gradio/main/guides/assets/logo.png",
    "boxes": [
        {
            "xmin": 30,
            "ymin": 70,
            "xmax": 530,
            "ymax": 500,
            "color": (100, 200, 255)
        }
    ]
}


def crop(annotations):
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
    with gr.Tab("Object annotation"):
        annotator = image_annotator(
            example_annotation,
            label_list=["Person", "Vehicle"],
            label_colors=[(0, 255, 0), (255, 0, 0)],
        )
        button_get = gr.Button("Get bounding boxes")
        json_boxes = gr.JSON()
        button_get.click(get_boxes_json, annotator, json_boxes)

    with gr.Tab("Crop"):
        with gr.Row():
            annotator_crop = image_annotator(
                example_crop,
                image_type="numpy",
                disable_edit_boxes=True
            )
            image_crop = gr.Image()
        button_crop = gr.Button("Crop")
        button_crop.click(crop, annotator_crop, image_crop)


if __name__ == "__main__":
    demo.launch()

```

## `image_annotator`

### Initialization

<table>
<thead>
<tr>
<th align="left">name</th>
<th align="left" style="width: 25%;">type</th>
<th align="left">default</th>
<th align="left">description</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left"><code>value</code></td>
<td align="left" style="width: 25%;">

```python
dict | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">A dict or None. The dictionary must contain a key 'image' with either an URL to an image, a numpy image or a PIL image. Optionally it may contain a key 'boxes' with a list of boxes. Each box must be a dict wit the keys: 'xmin', 'ymin', 'xmax' and 'ymax' with the absolute image coordinates of the box. Optionally can also include the keys 'label' and 'color' describing the label and color of the box. Color must be a tuple of RGB values (e.g. `(255,255,255)`).</td>
</tr>

<tr>
<td align="left"><code>boxes_alpha</code></td>
<td align="left" style="width: 25%;">

```python
float | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">Opacity of the bounding boxes 0 and 1.</td>
</tr>

<tr>
<td align="left"><code>label_list</code></td>
<td align="left" style="width: 25%;">

```python
list[str] | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">List of valid labels.</td>
</tr>

<tr>
<td align="left"><code>label_colors</code></td>
<td align="left" style="width: 25%;">

```python
list[str] | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">Optional list of colors for each label when `label_list` is used. Colors must be a tuple of RGB values (e.g. `(255,255,255)`).</td>
</tr>

<tr>
<td align="left"><code>box_min_size</code></td>
<td align="left" style="width: 25%;">

```python
int | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">Minimum valid bounding box size.</td>
</tr>

<tr>
<td align="left"><code>handle_size</code></td>
<td align="left" style="width: 25%;">

```python
int | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">Size of the bounding box resize handles.</td>
</tr>

<tr>
<td align="left"><code>box_thickness</code></td>
<td align="left" style="width: 25%;">

```python
int | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">Thickness of the bounding box outline.</td>
</tr>

<tr>
<td align="left"><code>box_selected_thickness</code></td>
<td align="left" style="width: 25%;">

```python
int | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">Thickness of the bounding box outline when it is selected.</td>
</tr>

<tr>
<td align="left"><code>disable_edit_boxes</code></td>
<td align="left" style="width: 25%;">

```python
bool | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">Disables the ability to set and edit the label and color of the boxes.</td>
</tr>

<tr>
<td align="left"><code>height</code></td>
<td align="left" style="width: 25%;">

```python
int | str | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">The height of the displayed image, specified in pixels if a number is passed, or in CSS units if a string is passed.</td>
</tr>

<tr>
<td align="left"><code>width</code></td>
<td align="left" style="width: 25%;">

```python
int | str | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">The width of the displayed image, specified in pixels if a number is passed, or in CSS units if a string is passed.</td>
</tr>

<tr>
<td align="left"><code>image_mode</code></td>
<td align="left" style="width: 25%;">

```python
"1"
    | "L"
    | "P"
    | "RGB"
    | "RGBA"
    | "CMYK"
    | "YCbCr"
    | "LAB"
    | "HSV"
    | "I"
    | "F"
```

</td>
<td align="left"><code>"RGB"</code></td>
<td align="left">"RGB" if color, or "L" if black and white. See https://pillow.readthedocs.io/en/stable/handbook/concepts.html for other supported image modes and their meaning.</td>
</tr>

<tr>
<td align="left"><code>sources</code></td>
<td align="left" style="width: 25%;">

```python
list["upload" | "clipboard"] | None
```

</td>
<td align="left"><code>["upload", "clipboard"]</code></td>
<td align="left">List of sources for the image. "upload" creates a box where user can drop an image file, "clipboard" allows users to paste an image from the clipboard. If None, defaults to ["upload", "clipboard"].</td>
</tr>

<tr>
<td align="left"><code>image_type</code></td>
<td align="left" style="width: 25%;">

```python
"numpy" | "pil" | "filepath"
```

</td>
<td align="left"><code>"numpy"</code></td>
<td align="left">The format the image is converted before being passed into the prediction function. "numpy" converts the image to a numpy array with shape (height, width, 3) and values from 0 to 255, "pil" converts the image to a PIL image object, "filepath" passes a str path to a temporary file containing the image. If the image is SVG, the `type` is ignored and the filepath of the SVG is returned.</td>
</tr>

<tr>
<td align="left"><code>label</code></td>
<td align="left" style="width: 25%;">

```python
str | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">The label for this component. Appears above the component and is also used as the header if there are a table of examples for this component. If None and used in a `gr.Interface`, the label will be the name of the parameter this component is assigned to.</td>
</tr>

<tr>
<td align="left"><code>container</code></td>
<td align="left" style="width: 25%;">

```python
bool
```

</td>
<td align="left"><code>True</code></td>
<td align="left">If True, will place the component in a container - providing some extra padding around the border.</td>
</tr>

<tr>
<td align="left"><code>scale</code></td>
<td align="left" style="width: 25%;">

```python
int | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">relative size compared to adjacent Components. For example if Components A and B are in a Row, and A has scale=2, and B has scale=1, A will be twice as wide as B. Should be an integer. scale applies in Rows, and to top-level Components in Blocks where fill_height=True.</td>
</tr>

<tr>
<td align="left"><code>min_width</code></td>
<td align="left" style="width: 25%;">

```python
int
```

</td>
<td align="left"><code>160</code></td>
<td align="left">minimum pixel width, will wrap if not sufficient screen space to satisfy this value. If a certain scale value results in this Component being narrower than min_width, the min_width parameter will be respected first.</td>
</tr>

<tr>
<td align="left"><code>interactive</code></td>
<td align="left" style="width: 25%;">

```python
bool | None
```

</td>
<td align="left"><code>True</code></td>
<td align="left">if True, will allow users to upload and annotate an image; if False, can only be used to display annotated images.</td>
</tr>

<tr>
<td align="left"><code>visible</code></td>
<td align="left" style="width: 25%;">

```python
bool
```

</td>
<td align="left"><code>True</code></td>
<td align="left">If False, component will be hidden.</td>
</tr>

<tr>
<td align="left"><code>elem_id</code></td>
<td align="left" style="width: 25%;">

```python
str | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">An optional string that is assigned as the id of this component in the HTML DOM. Can be used for targeting CSS styles.</td>
</tr>

<tr>
<td align="left"><code>elem_classes</code></td>
<td align="left" style="width: 25%;">

```python
list[str] | str | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">An optional list of strings that are assigned as the classes of this component in the HTML DOM. Can be used for targeting CSS styles.</td>
</tr>

<tr>
<td align="left"><code>render</code></td>
<td align="left" style="width: 25%;">

```python
bool
```

</td>
<td align="left"><code>True</code></td>
<td align="left">If False, component will not render be rendered in the Blocks context. Should be used if the intention is to assign event listeners now but render the component later.</td>
</tr>

<tr>
<td align="left"><code>show_label</code></td>
<td align="left" style="width: 25%;">

```python
bool | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">if True, will display label.</td>
</tr>

<tr>
<td align="left"><code>show_download_button</code></td>
<td align="left" style="width: 25%;">

```python
bool
```

</td>
<td align="left"><code>True</code></td>
<td align="left">If True, will show a button to download the image.</td>
</tr>

<tr>
<td align="left"><code>show_share_button</code></td>
<td align="left" style="width: 25%;">

```python
bool | None
```

</td>
<td align="left"><code>None</code></td>
<td align="left">If True, will show a share icon in the corner of the component that allows user to share outputs to Hugging Face Spaces Discussions. If False, icon does not appear. If set to None (default behavior), then the icon appears if this Gradio app is launched on Spaces, but not otherwise.</td>
</tr>

<tr>
<td align="left"><code>show_clear_button</code></td>
<td align="left" style="width: 25%;">

```python
bool | None
```

</td>
<td align="left"><code>True</code></td>
<td align="left">If True, will show a clear button.</td>
</tr>
</tbody></table>


### Events

| name | description |
|:-----|:------------|
| `clear` | This listener is triggered when the user clears the image_annotator using the X button for the component. |
| `change` | Triggered when the value of the image_annotator changes either because of user input (e.g. a user types in a textbox) OR because of a function update (e.g. an image receives a value from the output of an event trigger). See `.input()` for a listener that is only triggered by user input. |
| `upload` | This listener is triggered when the user uploads a file into the image_annotator. |



### User function

The impact on the users predict function varies depending on whether the component is used as an input or output for an event (or both).

- When used as an Input, the component only impacts the input signature of the user function.
- When used as an output, the component only impacts the return signature of the user function.

The code snippet below is accurate in cases where the component is used as both an input and an output.

- **As output:** Is passed, a dict with the image and boxes or None.
- **As input:** Should return, a dict with an image and an optional list of boxes or None.

 ```python
 def predict(
     value: dict | None
 ) -> dict | None:
     return value
 ```
 
