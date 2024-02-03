class Geometry {
    constructor() { }
    draw() { }
    ;
    calculate() { }
    ;
}
class circle extends Geometry {
    constructor(x, y, radius, canvas) {
        super();
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');
    }
    draw() {
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        this.context.lineWidth = 1;
        this.context.stroke();
    }
}
class Square extends Geometry {
    constructor(x, y, length, canvas) {
        super();
        this.x = x;
        this.y = y;
        this.length = length;
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');
    }
    calculate() {
        this.x1 = this.x - this.length / 2;
        this.y1 = this.y - this.length / 2;
        this.x2 = this.x + this.length / 2;
        this.y2 = this.y - this.length / 2;
        this.x3 = this.x + this.length / 2;
        this.y3 = this.y + this.length / 2;
        this.x4 = this.x - this.length / 2;
        this.y4 = this.y + this.length / 2;
    }
    draw() {
        this.calculate();
        this.context.beginPath();
        this.context.moveTo(this.x1, this.y1);
        this.context.lineTo(this.x2, this.y2);
        this.context.lineTo(this.x3, this.y3);
        this.context.lineTo(this.x4, this.y4);
        this.context.closePath();
        this.context.lineWidth = 1;
        this.context.stroke();
    }
}
//# sourceMappingURL=geometry.js.map