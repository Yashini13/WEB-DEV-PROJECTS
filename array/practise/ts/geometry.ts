namespace Chemistry{
        export class Point{
            x:number;
            y:number;
            constructor(x:number,y:number)
            {
                this.x=x;
                this.y=y;
            }
        }
            export class Geometry{
                name:string;
                constructor(){}
                    draw(){}
                    protected calculate(){}
                    get area():number{
                        return(0);
                    }
                    isinside(point:Point):Boolean{
                        return(false);
                    }
                    protected triangle_area(pt1:Point,pt2:Point,pt3:Point){
                        return (0);
                        
                    }
                
                }
            export class circle extends Geometry{
                    x:number;
                    y:number;
                    stpt:Point;
                    l:number;
                    radius:number;
                    stang:number=0;
                    n:number;
                    points:Point[]=[];
                    canvas:HTMLCanvasElement;
                    context:CanvasRenderingContext2D;
                    constructor(stpt:Point ,radius:number,canvas:HTMLCanvasElement){
                        super();
                        this.stpt=stpt;
                         this.points=[];
                        this.radius=radius;
                        this.canvas=canvas;
                        this.context=this.canvas.getContext('2d');
                    }
                    protected calculate(): void {
                        this.points=[];
                        let ang=0;
                        for(let ang=0;ang<360;ang++){
                            let ang1=ang*Math.PI/180;
                            ang+=ang1;
                        }
                    }

                draw(): void {
                    this.calculate();
                    this.context.beginPath();                     
                    this.context.arc(this.stpt.x*lscale, this.stpt.y*lscale,this.radius*lscale,0,2*Math.PI,false);                     
                    this.context.lineWidth=1; 
                    this.context.fillStyle="purple";                   
                     this.context.stroke();
                }

                    get area():number{
                        let a=0;
                        for(let i=0;i<this.points.length-1;i++){
                            a+=this.points[i].x*this.points[i+1].y-this.points[i+1].x*this.points[i].y;
                        }
                        a+=this.points[this.points.length-1].x*this.points[0].y-this.points[0].x*this.points[this.points.length-1].y;
                        a=a/2;
                        a=3.14*this.radius*this.radius*lscale;
                        return(a); 
                }}
            
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
    
            export class Ellipse extends Geometry{
                    stpt:Point;
                    points:Point[]=[];
                    a:number;
                    b:number;
                    canvas:HTMLCanvasElement;
                    context:CanvasRenderingContext2D;
                    constructor(stpt:Point,major_length:number,minor_length:number,canvas:HTMLCanvasElement){
                        super();
                        this.stpt=stpt;
                        this.a=major_length/2;
                        this.b=minor_length/2;
                        this.canvas=canvas;
                        this.context=this.canvas.getContext("2d");
                        this.points=[];
                    }
                    protected calculate(): void {
                        this.points=[];
                        for(let ang=0;ang<360;ang++){
                            let ang1=ang*Math.PI/180;;
                            let x=this.stpt.x*lscale+this.a*lscale*Math.cos(ang1);
                            let y=this.stpt.y*lscale+this.b*lscale*Math.sin(ang1);
                            //let radius=this.stpt.radius*lscale;
                            this.points.push(new Point(x,y));
                        
                        }
                    }
                    draw(): void{
                        this.calculate();
                        this.context.beginPath();
                        this.context.moveTo(this.points[0].x,this.points[0].y);
                        for(let i=1;i<this.points.length;i++){
                            this.context.lineTo(this.points[i].x,this.points[i].y);
                        }
                        this.context.lineWidth=1;
                        this.context.fillStyle="blue";
                        this.context.closePath();
                        this.context.fill();
                        this.context.stroke();
                    }
            }
    
            export class Polygon extends Geometry{
                stpt:Point;
                points:Point[]=[];
                l:number;
                n:number;
                stang:number=0;                   /// HERE TOO
                canvas:HTMLCanvasElement;
                context:CanvasRenderingContext2D;
                constructor(stpt:Point,l:number,n:number,canvas:HTMLCanvasElement){
                    super();
                    this.stpt=stpt;
                    this.l=l;
                    this.n=n;
                    this.canvas=canvas;
                    this.context=this.canvas.getContext("2d");
                    this.points=[];
                }
                protected calculate(): void {
                    this.points=[];
                    let angbet=360.0/this.n;
                    let ang=0;
                    for(let ang=0;ang<360;ang++){
                        let ang1=ang*Math.PI/180;
                        let x=this.stpt.x*lscale+this.l*lscale*Math.cos(ang1);
                        let y=this.stpt.y*lscale+this.l*lscale*Math.sin(ang1);
                        this.points.push(new Point(x,y));
                        ang+=angbet;
                    
                    }
                }
                draw(): void{
                    this.calculate();
                    this.context.beginPath();
                    this.context.moveTo(this.points[0].x,this.points[0].y);
                    for(let i=1;i<this.points.length;i++){
                        this.context.lineTo(this.points[i].x,this.points[i].y);
                    }
                    this.context.lineWidth=1;
                    this.context.fillStyle="red";
                    this.context.closePath();
                    this.context.fill();
                    this.context.stroke();
                }
                
                    get area():number{
                        let a=0;
                        for(let i=0;i<this.points.length-1;i++){
                            a+=this.points[i].x*this.points[i+1].y-this.points[i+1].x*this.points[i].y;
                        }
                        a+=this.points[this.points.length-1].x*this.points[0].y-this.points[0].x*this.points[this.points.length-1].y;
                        a=a/2;
                        return(a);
                }
                isinside(point:Point):boolean{
                    point.x=point.x*lscale;
                    point.y=point.y*lscale;
                    let a=0;
                    for(let i=0;i<this.points.length-1;i++){
                        a+=this.triangle_area(point,this.points[i],this.points[i+1]);
                    }
                    a+=this.triangle_area(point,this.points[this.points.length-1],this.points[0])
                    if(Math.abs(this.area-a)<0.000001)
                    {
                        return(true);
                    }
                    else{
                        return(false);
                    }
                   
                }
                protected triangle_area(pt1:Point,pt2:Point,pt3:Point):number{
                    let a=0;
                    a+=pt1.x*pt2.y-pt2.x*pt1.y;
                    a+=pt2.x*pt3.y-pt3.x*pt2.y;
                    a+=pt3.x*pt1.y-pt1.x*pt3.y;
                    return (Math.abs(a/2));
                }  
        }
         export class L_bracket extends Geometry{
            points:Point[]=[];
            stpt:Point;
            canvas:HTMLCanvasElement;
            context:CanvasRenderingContext2D;
            path:Path2D;
         }
         
        }
    
       