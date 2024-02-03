var Chemistry;
(function (Chemistry) {
    class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
    }
    Chemistry.Point = Point;
    class Practical {
        draw() { }
        calculate() { }
    }
    Chemistry.Practical = Practical;
    class flask extends Practical {
        constructor(image, stpt, canvas) {
            super();
            this.dx = 225;
            this.dy = 190;
            this.stang = 0;
            this.img = image;
            this.canvas = canvas;
            this.context = this.canvas.getContext("2d");
            this.stpt = stpt;
        }
        draw() {
            let flask = new Chemistry.flask(img, new Chemistry.Point(this.x, this.y), canvas);
            // scene.add(flask);
        }
        isinside(point) {
            point.x = point.x * lscale;
            point.y = point.y * lscale;
            if (point.x > this.stpt.x * lscale - (this.dx / 2) * lscale &&
                point.x < this.stpt.x * lscale + (this.dx / 2) * lscale) {
                if (point.y > this.stpt.y * lscale - (this.dy / 2) * lscale &&
                    point.y < this.stpt.y * lscale + (this.dy / 2) * lscale) {
                    return true;
                }
            }
            else {
                return false;
            }
        }
    }
    Chemistry.flask = flask;
    class Circle extends Practical {
        constructor(x, y, radius, canvas) {
            super();
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.canvas = canvas;
            this.context = canvas.getContext("2d");
        }
        draw() {
            this.context.beginPath();
            this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
            this.context.lineWidth = 1;
            this.context.stroke();
        }
    }
    Chemistry.Circle = Circle;
})(Chemistry || (Chemistry = {}));
//# sourceMappingURL=main.js.map