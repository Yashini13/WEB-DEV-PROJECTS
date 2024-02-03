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
        constructor() {
            this._dragable = true;
            this.move_x = false;
            this.revolve = false;
        }
        set stpt(pt) {
            if (this._dragable) {
                this._stpt = pt;
            }
        }
        get stpt() {
            return (this._stpt);
        }
        get draggable() {
            return (this._dragable);
        }
        draw() { }
        calculate() { }
        get area() {
            return (0);
        }
        isinside(point) {
            let dx = (this._stpt.x - point.x) * lscale;
            let dy = (this._stpt.y - point.y) * lscale;
            let r = Math.pow(dx * dx + dy * dy, 0.5);
            if (r < 50) {
                return (true);
            }
            else {
                return (false);
            }
        }
        lock() {
            this._dragable = false;
        }
        triangle_area(pt1, pt2, pt3) {
            return (0);
        }
        //change_value(){}
        set_connection(geo) { }
        random(max, min) {
            return (Math.random() * (max - min) + min);
        }
    }
    Chemistry.Geometry = Geometry;
    class Circle extends Geometry {
        constructor(stpt, radius, canvas) {
            super();
            this.value = 43;
            this.color = "white";
            this.connected = false;
            this.stpt = stpt;
            this.radius = radius;
            this.canvas = canvas;
            this.context = this.canvas.getContext('2d');
        }
        draw() {
            this.context.beginPath();
            this.context.arc(this.stpt.x * lscale, this.stpt.y * lscale, this.radius * lscale, 0, 2 * Math.PI, false);
            this.context.fillStyle = this.color;
            this.context.fill();
            this.context.lineWidth = 1;
            this.context.stroke();
            let text = new Text(this.value.toString(), this.stpt, this.canvas);
            text.textalignment = "center";
            text.draw();
            if (this.connected) {
                this.draw_connection();
            }
        }
        isinside(point) {
            let dx = (this.stpt.x - point.x) * lscale;
            let dy = (this.stpt.y - point.y) * lscale;
            let r = Math.pow(dx * dx + dy * dy, 0.5);
            if (r <= this.radius) {
                return (true);
            }
            else {
                return (false);
            }
        }
        /*change_value(){
            
            
            if(this.value==0){
                this.value=1;
                this.color="green";
            }
            else if(this.value==1){
                this.value=0;
                this.color="red";
            }
        }*/
        set_connection(geo) {
            this.objconnected = geo;
            this.connected = true;
        }
        draw_connection() {
            this.context.beginPath();
            this.context.moveTo(this.stpt.x * lscale, this.stpt.y * lscale);
            this.context.lineTo(this.objconnected.stpt.x * lscale, this.objconnected.stpt.y * lscale);
            this.context.stroke();
            //this.objconnected.color=this.color;
            //this.objconnected.value=this.value;
        }
    }
    Chemistry.Circle = Circle;
    class Circle1 extends Geometry {
        constructor(stpt, radius, canvas) {
            super();
            this.value = 10;
            this.color = "white";
            this.connected = false;
            this.stpt = stpt;
            this.radius = radius;
            this.canvas = canvas;
            this.context = this.canvas.getContext('2d');
        }
        draw() {
            this.context.beginPath();
            this.context.arc(this.stpt.x * lscale, this.stpt.y * lscale, this.radius * lscale, 0, 2 * Math.PI, false);
            this.context.fillStyle = this.color;
            this.context.fill();
            this.context.lineWidth = 1;
            this.context.stroke();
            let text = new Text(this.value.toString(), this.stpt, this.canvas);
            text.textalignment = "center";
            text.draw();
            if (this.connected) {
                this.draw_connection();
            }
        }
        isinside(point) {
            let dx = (this.stpt.x - point.x) * lscale;
            let dy = (this.stpt.y - point.y) * lscale;
            let r = Math.pow(dx * dx + dy * dy, 0.5);
            if (r <= this.radius) {
                return (true);
            }
            else {
                return (false);
            }
        }
        /*change_value(){
            
            
            if(this.value==0){
                this.value=1;
                this.color="green";
            }
            else if(this.value==1){
                this.value=0;
                this.color="red";
            }
        }*/
        set_connection(geo) {
            this.objconnected = geo;
            this.connected = true;
        }
        draw_connection() {
            this.context.beginPath();
            this.context.moveTo(this.stpt.x * lscale, this.stpt.y * lscale);
            this.context.lineTo(this.objconnected.stpt.x * lscale, this.objconnected.stpt.y * lscale);
            this.context.stroke();
            //this.objconnected.color=this.color;
            //this.objconnected.value=this.value;
        }
    }
    Chemistry.Circle1 = Circle1;
    class Circle2 extends Geometry {
        constructor(stpt, radius, canvas) {
            super();
            this.value = 12;
            this.color = "white";
            this.connected = false;
            this.stpt = stpt;
            this.radius = radius;
            this.canvas = canvas;
            this.context = this.canvas.getContext('2d');
        }
        draw() {
            this.context.beginPath();
            this.context.arc(this.stpt.x * lscale, this.stpt.y * lscale, this.radius * lscale, 0, 2 * Math.PI, false);
            this.context.fillStyle = this.color;
            this.context.fill();
            this.context.lineWidth = 1;
            this.context.stroke();
            let text = new Text(this.value.toString(), this.stpt, this.canvas);
            text.textalignment = "center";
            text.draw();
            if (this.connected) {
                this.draw_connection();
            }
        }
        isinside(point) {
            let dx = (this.stpt.x - point.x) * lscale;
            let dy = (this.stpt.y - point.y) * lscale;
            let r = Math.pow(dx * dx + dy * dy, 0.5);
            if (r <= this.radius) {
                return (true);
            }
            else {
                return (false);
            }
        }
        /*change_value(){
            
            
            if(this.value==0){
                this.value=1;
                this.color="green";
            }
            else if(this.value==1){
                this.value=0;
                this.color="red";
            }
        }*/
        set_connection(geo) {
            this.objconnected = geo;
            this.connected = true;
        }
        draw_connection() {
            this.context.beginPath();
            this.context.moveTo(this.stpt.x * lscale, this.stpt.y * lscale);
            this.context.lineTo(this.objconnected.stpt.x * lscale, this.objconnected.stpt.y * lscale);
            this.context.stroke();
            //this.objconnected.color=this.color;
            //this.objconnected.value=this.value;
        }
    }
    Chemistry.Circle2 = Circle2;
    class Circle3 extends Geometry {
        constructor(stpt, radius, canvas) {
            super();
            this.value = 34;
            this.color = "white";
            this.connected = false;
            this.stpt = stpt;
            this.radius = radius;
            this.canvas = canvas;
            this.context = this.canvas.getContext('2d');
        }
        draw() {
            this.context.beginPath();
            this.context.arc(this.stpt.x * lscale, this.stpt.y * lscale, this.radius * lscale, 0, 2 * Math.PI, false);
            this.context.fillStyle = this.color;
            this.context.fill();
            this.context.lineWidth = 1;
            this.context.stroke();
            let text = new Text(this.value.toString(), this.stpt, this.canvas);
            text.textalignment = "center";
            text.draw();
            if (this.connected) {
                this.draw_connection();
            }
        }
        isinside(point) {
            let dx = (this.stpt.x - point.x) * lscale;
            let dy = (this.stpt.y - point.y) * lscale;
            let r = Math.pow(dx * dx + dy * dy, 0.5);
            if (r <= this.radius) {
                return (true);
            }
            else {
                return (false);
            }
        }
        /*change_value(){
            
            
            if(this.value==0){
                this.value=1;
                this.color="green";
            }
            else if(this.value==1){
                this.value=0;
                this.color="red";
            }
        }*/
        set_connection(geo) {
            this.objconnected = geo;
            this.connected = true;
        }
        draw_connection() {
            this.context.beginPath();
            this.context.moveTo(this.stpt.x * lscale, this.stpt.y * lscale);
            this.context.lineTo(this.objconnected.stpt.x * lscale, this.objconnected.stpt.y * lscale);
            this.context.stroke();
            //this.objconnected.color=this.color;
            //this.objconnected.value=this.value;
        }
    }
    Chemistry.Circle3 = Circle3;
    class Circle4 extends Geometry {
        constructor(stpt, radius, canvas) {
            super();
            this.value = 50;
            this.color = "white";
            this.connected = false;
            this.stpt = stpt;
            this.radius = radius;
            this.canvas = canvas;
            this.context = this.canvas.getContext('2d');
        }
        draw() {
            this.context.beginPath();
            this.context.arc(this.stpt.x * lscale, this.stpt.y * lscale, this.radius * lscale, 0, 2 * Math.PI, false);
            this.context.fillStyle = this.color;
            this.context.fill();
            this.context.lineWidth = 1;
            this.context.stroke();
            let text = new Text(this.value.toString(), this.stpt, this.canvas);
            text.textalignment = "center";
            text.draw();
            if (this.connected) {
                this.draw_connection();
            }
        }
        isinside(point) {
            let dx = (this.stpt.x - point.x) * lscale;
            let dy = (this.stpt.y - point.y) * lscale;
            let r = Math.pow(dx * dx + dy * dy, 0.5);
            if (r <= this.radius) {
                return (true);
            }
            else {
                return (false);
            }
        }
        /*change_value(){
            
            
            if(this.value==0){
                this.value=1;
                this.color="green";
            }
            else if(this.value==1){
                this.value=0;
                this.color="red";
            }
        }*/
        set_connection(geo) {
            this.objconnected = geo;
            this.connected = true;
        }
        draw_connection() {
            this.context.beginPath();
            this.context.moveTo(this.stpt.x * lscale, this.stpt.y * lscale);
            this.context.lineTo(this.objconnected.stpt.x * lscale, this.objconnected.stpt.y * lscale);
            this.context.stroke();
            //this.objconnected.color=this.color;
            //this.objconnected.value=this.value;
        }
    }
    Chemistry.Circle4 = Circle4;
    class Text {
        constructor(text, stpt, canvas) {
            this.font = "20px Arial";
            this.color = "black";
            this.angle = 0;
            this.textalignment = "left";
            this.stpt = stpt;
            this.canvas = canvas;
            this.context = this.canvas.getContext("2d");
            this.text = text;
        }
        draw() {
            this.context.font = this.font;
            this.context.fillStyle = this.color;
            this.context.textAlign = this.textalignment;
            this.context.save();
            this.context.translate(this.stpt.x * lscale, this.stpt.y * lscale);
            this.context.rotate(this.angle * Math.PI / 180);
            this.context.scale(1, -1);
            this.context.fillText(this.text, 0, 0);
            this.context.restore();
        }
    }
    Chemistry.Text = Text;
})(Chemistry || (Chemistry = {}));
//# sourceMappingURL=geometry.js.map