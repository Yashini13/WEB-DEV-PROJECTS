class Scene {
    constructor() {
        this.container = [];
        this.container = [];
    }
    add(practical) {
        this.container.push({ prac: practical });
        this.draw();
    }
    draw() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < this.container.length; i++) {
            this.container[i].prac.draw();
        }
        canvas_border();
    }
}
//# sourceMappingURL=scene.js.map