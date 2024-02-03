namespace Chemistry {
    export class Point{
        x:number;
        y:number;
        constructor(x:number,y:number){
           this.x=x;
           this.y=y;
        }
    }
    export class Geometry{
        constructor(){}
            draw(){}
            protected calculate(){}
        
        }
        export class Circle extends Geometry{
            stpt:Point
            radius:number;
            canvas:HTMLCanvasElement;
            context:CanvasRenderingContext2D;
            constructor(stpt:Point ,radius:number,canvas:HTMLCanvasElement){
                super();
                this.stpt=stpt;
                this.radius=radius;
                this.canvas=canvas;
                this.context=this.canvas.getContext('2d');
            }
        draw(): void {
            this.context.beginPath();
            this.context.arc(this.stpt.x*lscale, this.stpt.y*lscale,this.radius*lscale,0,2*Math.PI,false);
            this.context.lineWidth=1;
            this.context.stroke();
            }
        }
    
        export class Square extends Geometry{
            stpt:Point;
            length:number;
            canvas:HTMLCanvasElement;
            context:CanvasRenderingContext2D;
            p1:Point;
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
    }
    }


