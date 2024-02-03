var geometry;
(function (geometry) {
    class particle {
        constructor(context) {
            this.alpha = Math.random();
            this.context = context;
            this.vx = 10 * Math.random();
            this.vy = 5;
            this.color = "#33bbff"; //"#3385FB";
            this.radius = 6 * Math.random();
            this.x = Math.random() * 1600 + 20;
            this.y = Math.random() * 400 + 40;
            if (this.y + this.radius >= 400) {
                this.y += this.radius;
            }
            if (this.y - this.radius < 40) {
                this.y += this.radius;
            }
            this.yconst = this.y;
        }
        draw() {
            this.update();
            this.context.save();
            this.context.beginPath();
            this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
            this.context.fillStyle = this.color;
            this.context.fill();
            this.context.strokeStyle = this.color;
            this.context.lineWidth = 1;
            //this.alpha; 
            //Math.random();
            this.context.stroke();
            this.context.restore();
        }
        update() {
            if (this.x > 1620) {
                this.x = 0;
            }
            this.x += this.vx;
        }
    }
    geometry.particle = particle;
})(geometry || (geometry = {}));
//# sourceMappingURL=framework.js.map