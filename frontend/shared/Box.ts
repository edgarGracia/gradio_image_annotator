import WindowViewer from "./WindowViewer";
const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max)


function setAlpha(rgbColor: string, alpha: number) {
    if (rgbColor.startsWith('rgba')) {
        return rgbColor.replace(/[\d.]+$/, alpha.toString());
    }
    const matches = rgbColor.match(/\d+/g);
    if (!matches || matches.length !== 3) {
        return `rgba(50, 50, 50, ${alpha})`;
    }
    const [r, g, b] = matches;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}


export default class Box {
    label: string;
    xmin: number;
    ymin: number;
    xmax: number;
    ymax: number;
    _xmin: number;
    _ymin: number;
    _xmax: number;
    _ymax: number;
    color: string;
    alpha: number;
    isDragging: boolean;
    isResizing: boolean;
    isSelected: boolean;
    isCreating: boolean;
    offsetMouseX: number;
    offsetMouseY: number;
    resizeHandleSize: number;
    resizingHandleIndex: number;
    minSize: number;
    renderCallBack: () => void;
    onFinishCreation: () => void;
    canvasXmin: number;
    canvasYmin: number;
    canvasXmax: number;
    canvasYmax: number;
    scaleFactor: number;
    thickness: number;
    selectedThickness: number;
    creatingAnchorX: string;
    creatingAnchorY: string;
    resizeHandles: {
        xmin: number;
        ymin: number;
        xmax: number;
        ymax: number;
        cursor: string;
    }[];
    canvasWindow: WindowViewer;
    pointersCache: Map<number, PointerEvent>;

    constructor(
        renderCallBack: () => void,
        onFinishCreation: () => void,
        canvasWindow: WindowViewer,
        pointersCache: Map<number, PointerEvent>,
        canvasXmin: number,
        canvasYmin: number,
        canvasXmax: number,
        canvasYmax: number,
        label: string,
        xmin: number,
        ymin: number,
        xmax: number,
        ymax: number,
        color: string = "rgb(255, 255, 255)",
        alpha: number = 0.5,
        minSize: number = 25,
        handleSize: number = 8,
        thickness: number = 2,
        selectedThickness: number = 4,
        scaleFactor: number = 1,
    ) {
        this.renderCallBack = renderCallBack;
        this.onFinishCreation = onFinishCreation;
        this.canvasWindow = canvasWindow;
        this.pointersCache = pointersCache;
        this.canvasXmin = canvasXmin;
        this.canvasYmin = canvasYmin;
        this.canvasXmax = canvasXmax;
        this.canvasYmax = canvasYmax;
        this.scaleFactor = scaleFactor;
        this.label = label;
        this.isDragging = false;
        this.isCreating = false;
        this._xmin = xmin;
        this._ymin = ymin;
        this._xmax = xmax;
        this._ymax = ymax;
        this.xmin = this._xmin * this.canvasWindow.scale;
        this.ymin = this._ymin * this.canvasWindow.scale;
        this.xmax = this._xmax * this.canvasWindow.scale;
        this.ymax = this._ymax * this.canvasWindow.scale;
        this.isResizing = false;
        this.isSelected = false;
        this.offsetMouseX = 0;
        this.offsetMouseY = 0;
        this.resizeHandleSize = handleSize;
        this.thickness = thickness;
        this.selectedThickness = selectedThickness;
        this.updateHandles();
        this.resizingHandleIndex = -1;
        this.minSize = minSize;
        this.color = color;
        this.alpha = alpha;
        this.creatingAnchorX = "xmin";
        this.creatingAnchorY = "ymin";
    }

    toJSON() {
        return {
            label: this.label,
            xmin: this._xmin,
            ymin: this._ymin,
            xmax: this._xmax,
            ymax: this._ymax,
            color: this.color,
            scaleFactor: this.scaleFactor,
        };
    }

    setSelected(selected: boolean): void{
        this.isSelected = selected;
    }

    setScaleFactor(scaleFactor: number) {
        let scale = scaleFactor / this.scaleFactor;
        this._xmin = Math.round(this._xmin * scale);
        this._ymin = Math.round(this._ymin * scale);
        this._xmax = Math.round(this._xmax * scale);
        this._ymax = Math.round(this._ymax * scale);
        this.applyUserScale();
        // this.updateHandles();
        this.scaleFactor = scaleFactor;
    }

    updateHandles(): void {
        const halfSize = this.resizeHandleSize / 2;
        const width = this.getWidth();
        const height = this.getHeight();
        this.resizeHandles = [
            {
                // Top left
                xmin: this.xmin - halfSize,
                ymin: this.ymin - halfSize,
                xmax: this.xmin + halfSize,
                ymax: this.ymin + halfSize,
                cursor: "nwse-resize",
            },
            {
                // Top right
                xmin: this.xmax - halfSize,
                ymin: this.ymin - halfSize,
                xmax: this.xmax + halfSize,
                ymax: this.ymin + halfSize,
                cursor: "nesw-resize",
            },
            {
                // Bottom right
                xmin: this.xmax - halfSize,
                ymin: this.ymax - halfSize,
                xmax: this.xmax + halfSize,
                ymax: this.ymax + halfSize,
                cursor: "nwse-resize",
            },
            {
                // Bottom left
                xmin: this.xmin - halfSize,
                ymin: this.ymax - halfSize,
                xmax: this.xmin + halfSize,
                ymax: this.ymax + halfSize,
                cursor: "nesw-resize",
            },
            {
                // Top center
                xmin: this.xmin + (width / 2) - halfSize,
                ymin: this.ymin - halfSize,
                xmax: this.xmin + (width / 2) + halfSize,
                ymax: this.ymin + halfSize,
                cursor: "ns-resize",
            },
            {
                // Right center
                xmin: this.xmax - halfSize,
                ymin: this.ymin + (height / 2) - halfSize,
                xmax: this.xmax + halfSize,
                ymax: this.ymin + (height / 2) + halfSize,
                cursor: "ew-resize",
            },
            {
                // Bottom center
                xmin: this.xmin + (width / 2) - halfSize,
                ymin: this.ymax - halfSize,
                xmax: this.xmin + (width / 2) + halfSize,
                ymax: this.ymax + halfSize,
                cursor: "ns-resize",
            },
            {
                // Left center
                xmin: this.xmin - halfSize,
                ymin: this.ymin + (height / 2) - halfSize,
                xmax: this.xmin + halfSize,
                ymax: this.ymin + (height / 2) + halfSize,
                cursor: "ew-resize",
            },
        ];
    }

    getWidth(): number {
        return this.xmax - this.xmin;
    }

    getHeight(): number {
        return this.ymax - this.ymin;
    }

    getArea(): number {
        return this.getWidth() * this.getHeight();
    }

    toCanvasCoordinates(x: number, y: number): [number, number] {
        x = x + this.canvasXmin;
        y = y + this.canvasYmin;
        return [x, y];
    }

    toBoxCoordinates(x: number, y: number): [number, number] {
        x = x - this.canvasXmin;
        y = y - this.canvasYmin;
        return [x, y];
    }

    applyUserScale(): void {
        this.xmin = this._xmin * this.canvasWindow.scale;
        this.ymin = this._ymin * this.canvasWindow.scale;
        this.xmax = this._xmax * this.canvasWindow.scale;
        this.ymax = this._ymax * this.canvasWindow.scale;
        this.updateHandles();
    }

    updateOffset(): void {
        this.canvasXmin = this.canvasWindow.offsetX;
        this.canvasYmin = this.canvasWindow.offsetY;
        this.canvasXmax = this.canvasWindow.offsetX + this.canvasWindow.imageWidth * this.canvasWindow.scale;
        this.canvasYmax = this.canvasWindow.offsetY + this.canvasWindow.imageHeight * this.canvasWindow.scale;
        this.applyUserScale();
    }
    render(ctx: CanvasRenderingContext2D): void {
        let xmin: number, ymin: number;

        this.updateOffset()
        // Render the box and border
        ctx.beginPath();
        [xmin, ymin] = this.toCanvasCoordinates(this.xmin, this.ymin);
        ctx.rect(xmin, ymin, this.getWidth(), this.getHeight());
        ctx.fillStyle = setAlpha(this.color, this.alpha);
        ctx.fill();
        if (this.isSelected) {
            ctx.lineWidth = this.selectedThickness;
        } else {
            ctx.lineWidth = this.thickness;
        }
        ctx.strokeStyle = setAlpha(this.color, 1);
        
        ctx.stroke();
        ctx.closePath();

        // Render the label and background
        if (this.label !== null && this.label.trim() !== ""){
            if (this.isSelected) {
                ctx.font = "bold 14px Arial";
            } else {
                ctx.font = "12px Arial";
            }
            const labelWidth = ctx.measureText(this.label).width + 10;
            const labelHeight = 20;
            let labelX = this.xmin;
            let labelY = this.ymin - labelHeight;
            ctx.fillStyle = "white";
            [labelX, labelY] = this.toCanvasCoordinates(labelX, labelY);
            ctx.fillRect(labelX, labelY, labelWidth, labelHeight);
            ctx.lineWidth = 1;
            ctx.strokeStyle = "black";
            ctx.strokeRect(labelX, labelY, labelWidth, labelHeight);
            ctx.fillStyle = "black";
            ctx.fillText(this.label, labelX + 5, labelY + 15);
        }

        // Render the handles
        ctx.fillStyle = setAlpha(this.color, 1);
        for (const handle of this.resizeHandles) {
            [xmin, ymin] = this.toCanvasCoordinates(handle.xmin, handle.ymin);
            ctx.fillRect(
                xmin,
                ymin,
                handle.xmax - handle.xmin,
                handle.ymax - handle.ymin,
            );
        }
    }

    startDrag(event: MouseEvent): void {
        this.isDragging = true;
        this.offsetMouseX = event.clientX - this._xmin * this.canvasWindow.scale;
        this.offsetMouseY = event.clientY - this._ymin * this.canvasWindow.scale;
        document.addEventListener("pointermove", this.handleDrag);
        document.addEventListener("pointerup", this.stopDrag);
    }

    stopDrag = (): void => {
        this.isDragging = false;
        document.removeEventListener("pointermove", this.handleDrag);
        document.removeEventListener("pointerup", this.stopDrag);
    };

    handleDrag = (event: MouseEvent): void => {
        if (this.isDragging && this.pointersCache.size === 1) {
            let deltaX = (event.clientX - this.offsetMouseX) / this.canvasWindow.scale - this._xmin;
            let deltaY = (event.clientY - this.offsetMouseY) / this.canvasWindow.scale - this._ymin;

            const canvasW = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale;
            const canvasH = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
            deltaX = clamp(deltaX, -this._xmin, canvasW-this._xmax);
            deltaY = clamp(deltaY, -this._ymin, canvasH-this._ymax);
            this._xmin += deltaX;
            this._ymin += deltaY;
            this._xmax += deltaX;
            this._ymax += deltaY;

            this.applyUserScale();
            // this.updateHandles();
            this.renderCallBack();
        }
    };

    isPointInsideBox(x: number, y: number): boolean {
        [x, y] = this.toBoxCoordinates(x, y);
        return (
            x >= this.xmin &&
            x <= this.xmax &&
            y >= this.ymin &&
            y <= this.ymax
        );
    }

    indexOfPointInsideHandle(x: number, y: number): number {
        [x, y] = this.toBoxCoordinates(x, y);
        for (let i = 0; i < this.resizeHandles.length; i++) {
            const handle = this.resizeHandles[i];
            if (
                x >= handle.xmin &&
                x <= handle.xmax &&
                y >= handle.ymin &&
                y <= handle.ymax
            ) {
                this.resizingHandleIndex = i;
                return i;
            }
        }
        return -1;
    }

    startCreating(event: MouseEvent, canvasX: number, canvasY: number): void {
        this.isCreating = true;
        this.offsetMouseX = canvasX;
        this.offsetMouseY = canvasY;
        document.addEventListener("pointermove", this.handleCreating);
        document.addEventListener("pointerup", this.stopCreating);
    }

    handleCreating = (event: MouseEvent): void => {
        if (this.isCreating && this.pointersCache.size === 1) {
            let [x, y] = this.toBoxCoordinates(event.clientX, event.clientY);
            x = (x - this.offsetMouseX) / this.canvasWindow.scale;
            y = (y - this.offsetMouseY) / this.canvasWindow.scale;

            if (x > this._xmax) {
                if (this.creatingAnchorX == "xmax") {
                    this._xmin = this._xmax;
                }
                this._xmax = x;
                this.creatingAnchorX = "xmin";
            } else if (x > this._xmin && x < this._xmax && this.creatingAnchorX == "xmin") {
                this._xmax = x;
            } else if (x > this._xmin && x < this._xmax && this.creatingAnchorX == "xmax") {
                this._xmin = x;
            } else if (x < this._xmin) {
                if (this.creatingAnchorX == "xmin") {
                    this._xmax = this._xmin;
                }
                this._xmin = x;
                this.creatingAnchorX = "xmax";
            }

            if (y > this._ymax) {
                if (this.creatingAnchorY == "ymax") {
                    this._ymin = this._ymax;
                }
                this._ymax = y;
                this.creatingAnchorY = "ymin";
            } else if (y > this._ymin && y < this._ymax && this.creatingAnchorY == "ymin") {
                this._ymax = y;
            } else if (y > this._ymin && y < this._ymax && this.creatingAnchorY == "ymax") {
                this._ymin = y;
            } else if (y < this._ymin) {
                if (this.creatingAnchorY == "ymin") {
                    this._ymax = this._ymin;
                }
                this._ymin = y;
                this.creatingAnchorY = "ymax";
            }
            this.applyUserScale();
            // this.updateHandles();
            this.renderCallBack();
        }
    }
    
    stopCreating = (event: MouseEvent): void => {
        this.isCreating = false;
        document.removeEventListener("pointermove", this.handleCreating);
        document.removeEventListener("pointerup", this.stopCreating);

        if (this.getArea() > 0) {
            const canvasW = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale;
            const canvasH = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
            this._xmin = clamp(this._xmin, 0, canvasW - this.minSize);
            this._ymin = clamp(this._ymin, 0, canvasH - this.minSize);
            this._xmax = clamp(this._xmax, this.minSize, canvasW);
            this._ymax = clamp(this._ymax, this.minSize, canvasH);

            if (this.minSize > 0) {
                if (this.getWidth() / this.canvasWindow.scale < this.minSize) {
                    if (this.creatingAnchorX == "xmin") {
                        this._xmax = this._xmin + this.minSize;
                    } else {
                        this._xmin = this._xmax - this.minSize;
                    }
                }
                if (this.getHeight() / this.canvasWindow.scale < this.minSize) {
                    if (this.creatingAnchorY == "ymin") {
                        this._ymax = this._ymin + this.minSize;
                    } else {
                        this._ymin = this._ymax - this.minSize;
                    }
                }
                if (this._xmax > canvasW) {
                    this._xmin -= this._xmax - canvasW;
                    this._xmax = canvasW;
                } else if (this._xmin < 0) {
                    this._xmax -= this._xmin;
                    this._xmin = 0;
                }
                if (this._ymax > canvasH) {
                    this._ymin -= this._ymax - canvasH;
                    this._ymax = canvasH;
                } else if (this._ymin < 0) {
                    this._ymax -= this._ymin;
                    this._ymin = 0;
                }
            }
            this.applyUserScale();
            // this.updateHandles();
            this.renderCallBack();
        }
        this.onFinishCreation();
    }

    startResize(handleIndex: number, event: MouseEvent): void {
        this.resizingHandleIndex = handleIndex;
        this.isResizing = true;
        this.offsetMouseX = event.clientX - this.resizeHandles[handleIndex].xmin;
        this.offsetMouseY = event.clientY - this.resizeHandles[handleIndex].ymin;
        document.addEventListener("pointermove", this.handleResize);
        document.addEventListener("pointerup", this.stopResize);
    }

    handleResize = (event: MouseEvent): void => {
        if (this.isResizing && this.pointersCache.size === 1) {
            const mouseX = event.clientX;
            const mouseY = event.clientY;
            const deltaX = (mouseX - this.offsetMouseX - this.resizeHandles[this.resizingHandleIndex].xmin) / this.canvasWindow.scale;
            const deltaY = (mouseY - this.offsetMouseY - this.resizeHandles[this.resizingHandleIndex].ymin) / this.canvasWindow.scale;
            const canvasW = (this.canvasXmax - this.canvasXmin) / this.canvasWindow.scale;
            const canvasH = (this.canvasYmax - this.canvasYmin) / this.canvasWindow.scale;
            switch (this.resizingHandleIndex) {
                case 0: // Top-left handle
                    this._xmin += deltaX;
                    this._ymin += deltaY;
                    this._xmin = clamp(this._xmin, 0, this._xmax - this.minSize);
                    this._ymin = clamp(this._ymin, 0, this._ymax - this.minSize);
                    break;
                case 1: // Top-right handle
                    this._xmax += deltaX;
                    this._ymin += deltaY;
                    this._xmax = clamp(this._xmax, this._xmin + this.minSize, canvasW);
                    this._ymin = clamp(this._ymin, 0, this._ymax - this.minSize);
                    break;
                case 2: // Bottom-right handle
                    this._xmax += deltaX;
                    this._ymax += deltaY;
                    this._xmax = clamp(this._xmax, this._xmin + this.minSize, canvasW);
                    this._ymax = clamp(this._ymax, this._ymin + this.minSize, canvasH);
                    break;
                case 3: // Bottom-left handle
                    this._xmin += deltaX;
                    this._ymax += deltaY;
                    this._xmin = clamp(this._xmin, 0, this._xmax - this.minSize);
                    this._ymax = clamp(this._ymax, this._ymin + this.minSize, canvasH);
                    break;
                case 4: // Top center handle
                    this._ymin += deltaY;
                    this._ymin = clamp(this._ymin, 0, this._ymax - this.minSize);
                    break;
                case 5: // Right center handle
                    this._xmax += deltaX;
                    this._xmax = clamp(this._xmax, this._xmin + this.minSize, canvasW);
                    break;
                case 6: // Bottom center handle
                    this._ymax += deltaY;
                    this._ymax = clamp(this._ymax, this._ymin + this.minSize, canvasH);
                    break;
                case 7: // Left center handle
                    this._xmin += deltaX;
                    this._xmin = clamp(this._xmin, 0, this._xmax - this.minSize);
                    break;
            }

            // Update the resize handles
            this.applyUserScale();
            // this.updateHandles();
            this.renderCallBack();
        }
    };

    stopResize = (): void => {
        this.isResizing = false;
        document.removeEventListener("pointermove", this.handleResize);
        document.removeEventListener("pointerup", this.stopResize);
    };

    onRotate(op: number): void {
        const [_xmin, _xmax, _ymin, _ymax] = [this._xmin, this._xmax, this._ymin, this._ymax];
        switch (op) {
            case 1:
                this._xmin = this.canvasWindow.imageWidth - _ymax;
                this._xmax = this.canvasWindow.imageWidth - _ymin;
                this._ymin = _xmin;
                this._ymax = _xmax;
                break;
            case -1:
                this._xmin = _ymin;
                this._xmax = _ymax;
                this._ymin = this.canvasWindow.imageHeight - _xmax;
                this._ymax = this.canvasWindow.imageHeight - _xmin;
                break;
        }
        this.applyUserScale();
    }
}
