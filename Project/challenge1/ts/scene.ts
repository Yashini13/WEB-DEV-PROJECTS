class Scene {
  container: { prac: Chemistry.Practical }[] = [];
  constructor() {
    this.container = [];
  }
  add(practical: Chemistry.Practical) {
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
