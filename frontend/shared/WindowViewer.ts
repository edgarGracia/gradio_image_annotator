const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max)

export default class WindowViewer {
    scale: number;
    offsetX: number;
    offsetY: number;
    canvasWidth: number;
    canvasHeight: number;
    imageWidth: number;
    imageHeight: number;
    imageRotatedWidth: number;
    imageRotatedHeight: number;
    isDragging: boolean;
    startDragX: number;
    startDragY: number;
    orientation: number;
    renderCallBack: () => void;
    pointersCache: Map<number, PointerEvent>;
    getCanvas: () => HTMLCanvasElement | null;

    constructor(
        renderCallBack: () => void,
        pointersCache: Map<number, PointerEvent>,
        getCanvas: () => HTMLCanvasElement | null = () => null,
    ) {
        this.renderCallBack = renderCallBack;
        this.pointersCache = pointersCache;
        this.getCanvas = getCanvas;
        this.scale = 1.0;
        this.offsetX = 0;
        this.offsetY = 0;
        this.canvasWidth = 0;
        this.canvasHeight = 0;
        this.imageWidth = 0;
        this.imageHeight = 0;
        this.imageRotatedWidth = 0;
        this.imageRotatedHeight = 0;
        this.isDragging = false;
        this.startDragX = 0;
        this.startDragY = 0;
        this.orientation = 0;
    }
    // Convert client (CSS pixel) coordinates to canvas coordinates
    toCanvasPoint(clientX: number, clientY: number): [number, number] {
        const canvas = this.getCanvas();
        if (canvas === null) {
            return [clientX, clientY];
        }
        const rect = canvas.getBoundingClientRect();
        const scaleX = rect.width > 0 ? canvas.width / rect.width : 1;
        const scaleY = rect.height > 0 ? canvas.height / rect.height : 1;
        return [(clientX - rect.left) * scaleX, (clientY - rect.top) * scaleY];
    }

    startDrag(event: MouseEvent): void {
        this.isDragging = true;
        [this.startDragX, this.startDragY] = this.toCanvasPoint(event.clientX, event.clientY);

        document.addEventListener("pointermove", this.handleDrag);
        document.addEventListener("pointerup", this.stopDrag);
    }

    stopDrag = (): void => {
        if (this.pointersCache.size === 0) {
            this.isDragging = false;
            document.removeEventListener("pointermove", this.handleDrag);
            document.removeEventListener("pointerup", this.stopDrag);
        } else if (this.pointersCache.size === 1) {
            this.isDragging = true;
            const pointer = this.pointersCache.values().next().value;
            [this.startDragX, this.startDragY] = this.toCanvasPoint(pointer.clientX, pointer.clientY);
        }
    };

    handleDrag = (event: MouseEvent): void => {
        if (this.isDragging && this.pointersCache.size === 1) {
            const [pointerX, pointerY] = this.toCanvasPoint(event.clientX, event.clientY);

            if (this.scale == 1.0){
                this.offsetX = (this.canvasWidth - this.imageWidth) / 2;
                this.offsetY = 0;
                this.renderCallBack();
                return;
            }

            let deltaX = pointerX - this.startDragX;
            let deltaY = pointerY - this.startDragY;

            if (this.imageWidth * this.scale > this.canvasWidth){
                deltaX = clamp(deltaX, this.canvasWidth-this.offsetX-(this.imageWidth*this.scale), -this.offsetX);
            } else {
                deltaX = clamp(deltaX, -this.offsetX, this.canvasWidth-this.offsetX-(this.imageWidth*this.scale));
            }

            if (this.imageHeight * this.scale > this.canvasHeight){
                deltaY = clamp(deltaY, this.canvasHeight-this.offsetY-(this.imageHeight*this.scale), -this.offsetY);
            } else {
                deltaY = clamp(deltaY, -this.offsetY, this.canvasHeight-this.offsetY-(this.imageHeight*this.scale));
            }

            this.offsetX += deltaX;
            this.offsetY += deltaY;
            this.startDragX = pointerX;
            this.startDragY = pointerY;
            this.renderCallBack();
        }
    };

    setRotatedImage(image: HTMLImageElement | null): void {
        if (image !== null) {
            if (this.orientation == 0 || this.orientation == 2) {
                this.imageRotatedWidth = image.width;
                this.imageRotatedHeight = image.height;
            } else { // (this.orientation == 1 || this.orientation == 3)
                this.imageRotatedWidth = image.height;
                this.imageRotatedHeight = image.width;
            }
        }
    }

    resize(width: number, height: number, offsetX: number=0, offsetY: number=0): void {
        if (this.canvasWidth == width && this.canvasHeight == height) return;
        this.canvasWidth = width;
        this.canvasHeight = height;

        this.scale = 1.0;
        this.offsetX = offsetX;
        this.offsetY = offsetY;
    }
}
