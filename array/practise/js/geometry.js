var Chemistry;
(function (Chemistry) {
    class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
    }
    Chemistry.Point = Point;
    class Geometry {
        constructor() { }
        draw() { }
        calculate() { }
        get area() {
            return (0);
        }
        isinside(point) {
            return (false);
        }
        triangle_area(pt1, pt2, pt3) {
            return (0);
        }
    }
    Chemistry.Geometry = Geometry;
    class circle extends Geometry {
        constructor(stpt, radius, canvas) {
            super();
            this.stang = 0;
            this.points = [];
            this.stpt = stpt;
            this.points = [];
            this.radius = radius;
            this.canvas = canvas;
            this.context = this.canvas.getContext('2d');
        }
        calculate() {
            this.points = [];
            let ang = 0;
            for (let ang = 0; ang < 360; ang++) {
                let ang1 = ang * Math.PI / 180;
                ang += ang1;
            }
        }
        draw() {
            this.calculate();
            this.context.beginPath();
            this.context.arc(this.stpt.x * lscale, this.stpt.y * lscale, this.radius * lscale, 0, 2 * Math.PI, false);
            this.context.lineWidth = 1;
            this.context.fillStyle = "purple";
            this.context.stroke();
        }
        get area() {
            let a = 0;
            for (let i = 0; i < this.points.length - 1; i++) {
                a += this.points[i].x * this.points[i + 1].y - this.points[i + 1].x * this.points[i].y;
            }
            a += this.points[this.points.length - 1].x * this.points[0].y - this.points[0].x * this.points[this.points.length - 1].y;
            a = a / 2;
            a = 3.14 * this.radius * this.radius * lscale;
            return (a);
        }
    }
    Chemistry.circle = circle;
    /*export class Square extends Geometry{
        stpt:Point;
        length:number;
        canvas:HTMLCanvasElement;
        context:CanvasRenderingContext2D;
        p1:Point
        p2:Point;
        p3:Point;
        p4:Point;
        constructor(stpt:Point,length:number,canvas:HTMLCanvasElement){
            super();
            this.stpt=stpt;
            this.length=length;
            this.canvas=canvas;
            this.context=this.canvas.getContext('2d');
        
    }
    protected calculate(): void {
        this.p1=new Point(this.stpt.x*lscale-this.length/2*lscale,this.stpt.y*lscale-this.length/2*lscale);
        this.p2=new Point(this.stpt.x*lscale+this.length/2*lscale,this.stpt.y*lscale-this.length/2*lscale);
        this.p3=new Point(this.stpt.x*lscale+this.length/2*lscale,this.stpt.y*lscale+this.length/2*lscale);
        this.p4=new Point(this.stpt.x*lscale-this.length/2*lscale,this.stpt.y*lscale+this.length/2*lscale);
    }
    draw(): void {
        this.calculate();
        this.context.beginPath();
        this.context.moveTo(this.p1.x,this.p1.y);
        this.context.lineTo(this.p2.x,this.p2.y);
        this.context.lineTo(this.p3.x,this.p3.y);
        this.context.lineTo(this.p4.x,this.p4.y);
        this.context.closePath();
        this.context.lineWidth=1;
        this.context.stroke();
    }
}*/
    class Ellipse extends Geometry {
        constructor(stpt, major_length, minor_length, canvas) {
            super();
            this.points = [];
            this.stpt = stpt;
            this.a = major_length / 2;
            this.b = minor_length / 2;
            this.canvas = canvas;
            this.context = this.canvas.getContext("2d");
            this.points = [];
        }
        calculate() {
            this.points = [];
            for (let ang = 0; ang < 360; ang++) {
                let ang1 = ang * Math.PI / 180;
                ;
                let x = this.stpt.x * lscale + this.a * lscale * Math.cos(ang1);
                let y = this.stpt.y * lscale + this.b * lscale * Math.sin(ang1);
                //let radius=this.stpt.radius*lscale;
                this.points.push(new Point(x, y));
            }
        }
        draw() {
            this.calculate();
            this.context.beginPath();
            this.context.moveTo(this.points[0].x, this.points[0].y);
            for (let i = 1; i < this.points.length; i++) {
                this.context.lineTo(this.points[i].x, this.points[i].y);
            }
            this.context.lineWidth = 1;
            this.context.fillStyle = "blue";
            this.context.closePath();
            this.context.fill();
            this.context.stroke();
        }
    }
    Chemistry.Ellipse = Ellipse;
    class Polygon extends Geometry {
        constructor(stpt, l, n, canvas) {
            super();
            this.points = [];
            this.stang = 0; /// HERE TOO
            this.stpt = stpt;
            this.l = l;
            this.n = n;
            this.canvas = canvas;
            this.context = this.canvas.getContext("2d");
            this.points = [];
        }
        calculate() {
            this.points = [];
            let angbet = 360.0 / this.n;
            let ang = 0;
            for (let ang = 0; ang < 360; ang++) {
                let ang1 = ang * Math.PI / 180;
                let x = this.stpt.x * lscale + this.l * lscale * Math.cos(ang1);
                let y = this.stpt.y * lscale + this.l * lscale * Math.sin(ang1);
                this.points.push(new Point(x, y));
                ang += angbet;
            }
        }
        draw() {
            this.calculate();
            this.context.beginPath();
            this.context.moveTo(this.points[0].x, this.points[0].y);
            for (let i = 1; i < this.points.length; i++) {
                this.context.lineTo(this.points[i].x, this.points[i].y);
            }
            this.context.lineWidth = 1;
            this.context.fillStyle = "red";
            this.context.closePath();
            this.context.fill();
            this.context.stroke();
        }
        get area() {
            let a = 0;
            for (let i = 0; i < this.points.length - 1; i++) {
                a += this.points[i].x * this.points[i + 1].y - this.points[i + 1].x * this.points[i].y;
            }
            a += this.points[this.points.length - 1].x * this.points[0].y - this.points[0].x * this.points[this.points.length - 1].y;
            a = a / 2;
            return (a);
        }
        isinside(point) {
            point.x = point.x * lscale;
            point.y = point.y * lscale;
            let a = 0;
            for (let i = 0; i < this.points.length - 1; i++) {
                a += this.triangle_area(point, this.points[i], this.points[i + 1]);
            }
            a += this.triangle_area(point, this.points[this.points.length - 1], this.points[0]);
            if (Math.abs(this.area - a) < 0.000001) {
                return (true);
            }
            else {
                return (false);
            }
        }
        triangle_area(pt1, pt2, pt3) {
            let a = 0;
            a += pt1.x * pt2.y - pt2.x * pt1.y;
            a += pt2.x * pt3.y - pt3.x * pt2.y;
            a += pt3.x * pt1.y - pt1.x * pt3.y;
            return (Math.abs(a / 2));
        }
    }
    Chemistry.Polygon = Polygon;
})(Chemistry || (Chemistry = {}));
//# sourceMappingURL=geometry.js.map