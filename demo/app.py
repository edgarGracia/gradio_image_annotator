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
