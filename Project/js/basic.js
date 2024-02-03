/*class WaterSample {
    private alkalinity: number; // The alkalinity of the water sample
  
    constructor(alkalinity: number) {
      this.alkalinity = alkalinity;
    }
  
    getAlkalinity(): number {
      return this.alkalinity;
    }
  
    addAcid(amount: number): void {
      this.alkalinity -= amount;
      if (this.alkalinity < 0) {
        this.alkalinity = 0;
      }
    }
  }
  
  class Experiment {
    private waterSample: WaterSample;
  
    constructor(alkalinity: number) {
      this.waterSample = new WaterSample(alkalinity);
    }
  
    getWaterSample(): WaterSample {
      return this.waterSample;
    }
  
    addAcid(amount: number): void {
      this.waterSample.addAcid(amount);
    }
  }
  
  // Example usage:
  
  const myExperiment = new Experiment(100);
  console.log(myExperiment.getWaterSample().getAlkalinity()); // Output: 100
  
  myExperiment.addAcid(50);
  console.log(myExperiment.getWaterSample().getAlkalinity()); // Output: 50
  
  myExperiment.addAcid(100);
  console.log(myExperiment.getWaterSample().getAlkalinity()); // Output: 0
  
*/
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
            this._draggable = true;
            this.move_x = false;
            this.revolve = false;
        }
        set stpt(pt) {
            if (this._draggable) {
                this._stpt = pt;
            }
        }
        get stpt() {
            return (this._stpt);
        }
        get draggable() {
            return (this._draggable);
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
            this._draggable = false;
        }
        triangle_area(pt1, pt2, pt3) {
            return (0);
        }
        change_value() { }
        ;
        set_connection(geo) { }
        ;
        random(max, min) {
            return (Math.random() * (max - min) + min);
        }
    }
    Chemistry.Geometry = Geometry;
    var lscale;
    const canvas = document.getElementById("canvas_activity1");
    const context = canvas.getContext("2d");
    class Tank extends Geometry {
        constructor(stpt, height, width, canvas) {
            super();
            this.fill_anim = false;
            // stpt:Point;
            this.fill_height = 0;
            this.canvas = canvas;
            this.height = height;
            this.width = width;
            this.stpt = stpt;
        }
        fill() {
            this.fill_height++;
            this.fill_check();
        }
        fill_check() {
            if (this.fill_height >= this.height) {
                this.fill_height = 0;
            }
        }
        draw() {
            if (this.fill_anim) {
                this.fill();
            }
            //For Water
            context.beginPath();
            context.rect((this.stpt.x - this.width / 2) * lscale, (this.stpt.y - this.height / 2) * lscale, this.width * lscale, this.fill_height * lscale);
            context.fillStyle = "aqua";
            context.strokeStyle = "aqua";
            context.lineWidth = 1;
            context.fill();
            context.stroke();
            //For Tank
            context.beginPath();
            context.rect((this.stpt.x - this.width / 2) * lscale, (this.stpt.y - this.height / 2) * lscale, this.width * lscale, this.height * lscale);
            context.strokeStyle = "black";
            context.lineWidth = 2;
            context.stroke();
        }
    }
    Chemistry.Tank = Tank;
})(Chemistry || (Chemistry = {}));
//# sourceMappingURL=basic.js.map