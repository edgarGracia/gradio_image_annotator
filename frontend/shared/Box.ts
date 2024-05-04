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
    color: string;
    alpha: number;
    isDragging: boolean;
    isResizing: boolean;
    isSelected: boolean;
    offsetMouseX: number;
    offsetMouseY: number;
    resizeHandleSize: number;
    resizingHandleIndex: number;
    minSize: number;
    renderCallBack: () => void;
    canvasXmin: number;
    canvasYmin: number;
    canvasXmax: number;
    canvasYmax: number;
    scaleFactor: number;
    resizeHandles: {
        xmin: number;
        ymin: number;
        xmax: number;
        ymax: number;
    }[];

    constructor(
        renderCallBack: () => void,
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
        scaleFactor: number = 1
    ) {
        this.renderCallBack = renderCallBack;
        this.canvasXmin = canvasXmin;
        this.canvasYmin = canvasYmin;
        this.canvasXmax = canvasXmax;
        this.canvasYmax = canvasYmax;
        this.scaleFactor = scaleFactor;
        this.label = label;
        this.isDragging = false;
        this.xmin = xmin;
        this.ymin = ymin;
        this.xmax = xmax;
        this.ymax = ymax;
        this.isResizing = false;
        this.isSelected = false;
        this.offsetMouseX = 0;
        this.offsetMouseY = 0;
        this.resizeHandleSize = 8;
        this.updateHandles();
        this.resizingHandleIndex = -1;
        this.minSize = minSize;
        this.color = color;
        this.alpha = alpha;
    }

    toJSON() {
        return {
            label: this.label,
            xmin: this.xmin,
            ymin: this.ymin,
            xmax: this.xmax,
            ymax: this.ymax,
            color: this.color,
            scaleFactor: this.scaleFactor,
        };
    }

    setSelected(selected: boolean): void{
        this.isSelected = selected;
    }

    setScaleFactor(scaleFactor: number) {
        let scale = scaleFactor / this.scaleFactor;
        this.xmin = Math.round(this.xmin * scale);
        this.ymin = Math.round(this.ymin * scale);
        this.xmax = Math.round(this.xmax * scale);
        this.ymax = Math.round(this.ymax * scale);
        this.updateHandles();
        this.scaleFactor = scaleFactor;
    }

    updateHandles(): void {
        const halfSize = this.resizeHandleSize / 2;
        this.resizeHandles = [
            {
                xmin: this.xmin - halfSize,
                ymin: this.ymin - halfSize,
                xmax: this.xmin + halfSize,
                ymax: this.ymin + halfSize,
            },
            {
                xmin: this.xmax - halfSize,
                ymin: this.ymin - halfSize,
                xmax: this.xmax + halfSize,
                ymax: this.ymin + halfSize,
            },
            {
                xmin: this.xmax - halfSize,
                ymin: this.ymax - halfSize,
                xmax: this.xmax + halfSize,
                ymax: this.ymax + halfSize,
            },
            {
                xmin: this.xmin - halfSize,
                ymin: this.ymax - halfSize,
                xmax: this.xmin + halfSize,
                ymax: this.ymax + halfSize,
            },
        ];
    }

    getWidth(): number {
        return this.xmax - this.xmin;
    }

    getHeight(): number {
        return this.ymax - this.ymin;
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

    render(ctx: CanvasRenderingContext2D): void {
        let xmin: number, ymin: number;

        // Render the box and border
        ctx.beginPath();
        [xmin, ymin] = this.toCanvasCoordinates(this.xmin, this.ymin);
        ctx.rect(xmin, ymin, this.getWidth(), this.getHeight());
        ctx.fillStyle = setAlpha(this.color, this.alpha);
        ctx.fill();
        if (this.isSelected) {
            ctx.lineWidth = 4;
        } else {
            ctx.lineWidth = 2;
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
        this.offsetMouseX = event.clientX - this.xmin;
        this.offsetMouseY = event.clientY - this.ymin;
        document.addEventListener("mousemove", this.handleDrag);
        document.addEventListener("mouseup", this.stopDrag);
    }

    stopDrag = (): void => {
        this.isDragging = false;
        document.removeEventListener("mousemove", this.handleDrag);
        document.removeEventListener("mouseup", this.stopDrag);
    };

    handleDrag = (event: MouseEvent): void => {
        if (this.isDragging) {
            let deltaX = event.clientX - this.offsetMouseX - this.xmin;
            let deltaY = event.clientY - this.offsetMouseY - this.ymin;
            const canvasW = this.canvasXmax - this.canvasXmin;
            const canvasH = this.canvasYmax - this.canvasYmin;
            deltaX = clamp(deltaX, -this.xmin, canvasW-this.xmax);
            deltaY = clamp(deltaY, -this.ymin, canvasH-this.ymax);
            this.xmin += deltaX;
            this.ymin += deltaY;
            this.xmax += deltaX;
            this.ymax += deltaY;
            this.updateHandles();
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

    startResize(handleIndex: number, event: MouseEvent): void {
        this.resizingHandleIndex = handleIndex;
        this.isResizing = true;
        this.offsetMouseX = event.clientX - this.resizeHandles[handleIndex].xmin;
        this.offsetMouseY = event.clientY - this.resizeHandles[handleIndex].ymin;
        document.addEventListener("mousemove", this.handleResize);
        document.addEventListener("mouseup", this.stopResize);
    }

    handleResize = (event: MouseEvent): void => {
        if (this.isResizing) {
            const mouseX = event.clientX;
            const mouseY = event.clientY;
            const deltaX = mouseX - this.resizeHandles[this.resizingHandleIndex].xmin - this.offsetMouseX;
            const deltaY = mouseY - this.resizeHandles[this.resizingHandleIndex].ymin - this.offsetMouseY;
            const canvasW = this.canvasXmax - this.canvasXmin;
            const canvasH = this.canvasYmax - this.canvasYmin;
            switch (this.resizingHandleIndex) {
                case 0: // Top-left handle
                    this.xmin += deltaX;
                    this.ymin += deltaY;
                    this.xmin = clamp(this.xmin, 0, this.xmax - this.minSize);
                    this.ymin = clamp(this.ymin, 0, this.ymax - this.minSize);
                    break;
                case 1: // Top-right handle
                    this.xmax += deltaX;
                    this.ymin += deltaY;
                    this.xmax = clamp(this.xmax, this.xmin + this.minSize, canvasW);
                    this.ymin = clamp(this.ymin, 0, this.ymax - this.minSize);
                    break;
                case 2: // Bottom-right handle
                    this.xmax += deltaX;
                    this.ymax += deltaY;
                    this.xmax = clamp(this.xmax, this.xmin + this.minSize, canvasW);
                    this.ymax = clamp(this.ymax, this.ymin + this.minSize, canvasH);
                    break;
                case 3: // Bottom-left handle
                    this.xmin += deltaX;
                    this.ymax += deltaY;
                    this.xmin = clamp(this.xmin, 0, this.xmax - this.minSize);
                    this.ymax = clamp(this.ymax, this.ymin + this.minSize, canvasH);
                    break;
            }
            // Update the resize handles
            this.updateHandles();
            this.renderCallBack();
        }
    };

    stopResize = (): void => {
        this.isResizing = false;
        document.removeEventListener("mousemove", this.handleResize);
        document.removeEventListener("mouseup", this.stopResize);
    };
}
