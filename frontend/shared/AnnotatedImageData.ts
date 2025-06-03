import type { FileData } from "@gradio/client";
import Box from "./Box";

export default class AnnotatedImageData {
    image: FileData;
    boxes: Box[] = [];
    orientation: number = 0;
}
