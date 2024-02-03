namespace Chemistry {
  export class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }
  }
  export class Practical {
    name: string;
    stpt: Point;
    draw() {}
    protected calculate() {}
  }

  export class flask extends Practical {
    img: CanvasImageSource;
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    dx = 225;
    dy = 190;
    x: number;
    y: number;
    stang: number = 0;
    vx: number;
    constructor(
      image: CanvasImageSource,
      stpt: Point,
      canvas: HTMLCanvasElement
    ) {
      super();
      this.img = image;
      this.canvas = canvas;
      this.context = this.canvas.getContext("2d");
      this.stpt = stpt;
    }
    draw(): void {
      let flask = new Chemistry.flask(
        img,
        new Chemistry.Point(this.x, this.y),
        canvas
      );
      // scene.add(flask);
    }
    isinside(point: Point): boolean {
      point.x = point.x * lscale;
      point.y = point.y * lscale;

      if (
        point.x > this.stpt.x * lscale - (this.dx / 2) * lscale &&
        point.x < this.stpt.x * lscale + (this.dx / 2) * lscale
      ) {
        if (
          point.y > this.stpt.y * lscale - (this.dy / 2) * lscale &&
          point.y < this.stpt.y * lscale + (this.dy / 2) * lscale
        ) {
          return true;
        }
      } else {
        return false;
      }
    }
  }
  export class Circle extends Practical {
    x: number;
    y: number;
    radius: number;
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    constructor(
      x: number,
      y: number,
      radius: number,
      canvas: HTMLCanvasElement
    ) {
      super();
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.canvas = canvas;
      this.context = canvas.getContext("2d");
    }
    draw(): void {
      this.context.beginPath();
      this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
      this.context.lineWidth = 1;
      this.context.stroke();
    }
  }
  export class L_bracket extends Practical {
   
      points:Point[]=[];
      
      canvas:HTMLCanvasElement;
      context:CanvasRenderingContext2D;
      path:Path2D;
      color:string="orange"
      constructor(stpt:Point,canvas:HTMLCanvasElement){
          super();
          this.stpt=stpt;
          this.canvas=canvas;
          this.context=this.canvas.getContext('2d');
      }
      protected calculate(): void {
          this.points=[];
          this.points.push(new Point((this.stpt.x-20)*lscale,(this.stpt.y-20)*lscale));
          this.points.push(new Point((this.stpt.x+40)*lscale,(this.stpt.y-20+120)*lscale));
          this.points.push(new Point((this.stpt.x+20+50)*lscale,(this.stpt.y-20+120)*lscale));
          
          this.points.push(new Point((this.stpt.x+20+50)*lscale,(this.stpt.y-20+120)*lscale));
        
          this.points.push(new Point((this.stpt.x+20+50)*lscale,(this.stpt.y+40+60)*lscale));
          this.points.push(new Point((this.stpt.x-20+100)*lscale,(this.stpt.y+40+60)*lscale));
          this.points.push(new Point((this.stpt.x+40+100)*lscale,(this.stpt.y-20)*lscale));
          this.points.push(new Point((this.stpt.x-20)*lscale,(this.stpt.y-20)*lscale));
      }
      draw(): void {
          this.calculate();
          this.path=new Path2D();
          this.path.moveTo(this.points[0].x,this.points[0].y);
          for(let i=1;i<this.points.length;i++){
              this.path.lineTo(this.points[i].x,this.points[i].y)
          }
          this.context.beginPath();
          this.context.strokeStyle="black";
          this.context.fillStyle =this.color;
          this.context.fill(this.path);
          this.context.stroke(this.path);
      }
      isinside(point: Point): boolean{
          point.x = point.x * lscale;
          point.y = point.y * lscale;
          this.context.save();
          this.context.translate(0,this.canvas.height);
          this.context.scale(1,-1);
          if(this.context.isPointInPath(this.path,point.x,point.y)){
              this.context.restore();
              return(true);
          }
          else{
              this.context.restore();
              return(false);
          }
      }
    }
     
 /*export class Circle extends Practical {
    x: number;
    y: number;
    radius: number;
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    constructor(
      x: number,
      y: number,
      radius: number,
      canvas: HTMLCanvasElement
    ) {
      super();
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.canvas = canvas;
      this.context = canvas.getContext("2d");
    }
    draw(): void {
      this.context.beginPath();
      this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
      this.context.lineWidth = 1;
      this.context.stroke();
    }
  }*/
}
