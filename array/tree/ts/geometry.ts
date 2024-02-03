namespace Chemistry {
    export class Point {
        x: number;
        y: number;
        constructor(x: number, y: number) {
            this.x = x;
            this.y = y;
        }
    }

    export class Geometry {
        name: string;
        color:string;
        private _stpt:Point;
        private _dragable:boolean=true;
        value:number;
        move_x:boolean=false;
        revolve:boolean=false;
        constructor() { }
        set stpt(pt:Point){
            if(this._dragable){
                this._stpt=pt;
            }
        }
        get stpt(){
            return(this._stpt);
        }
        get draggable():boolean{
            return(this._dragable);
        }
        draw() { }
        protected calculate() { }
        get area(): number {
            return (0);
        }
        isinside(point: Point): boolean {
            let dx=(this._stpt.x-point.x)*lscale;
            let dy=(this._stpt.y-point.y)*lscale;
            let r=Math.pow(dx*dx+dy*dy,0.5);
            if(r<50){
                return(true);
            }
            else{
                return (false);

            }
            
        }
        lock(){
            this._dragable=false;
        }
        protected triangle_area(pt1: Point, pt2: Point, pt3: Point): number {
            return (0);
        }
        //change_value(){}
        set_connection(geo:Geometry){}
        protected random(max:number,min:number):number{
            return(Math.random()*(max-min)+min);
        }
    }

    export class Circle extends Geometry {
        
        radius: number;
        canvas: HTMLCanvasElement;
        context: CanvasRenderingContext2D;
        value:number=43;
        color:string="white";
        objconnected:Geometry;
        connected:boolean=false;
        constructor(stpt: Point, radius: number, canvas: HTMLCanvasElement) {
            super();
            this.stpt = stpt;
            this.radius = radius;
            this.canvas = canvas;
            this.context = this.canvas.getContext('2d');
        }
        
        draw(): void {
            this.context.beginPath();
            this.context.arc(this.stpt.x*lscale,this.stpt.y*lscale,this.radius*lscale,0,2*Math.PI,false);
            this.context.fillStyle=this.color;
            this.context.fill();
            this.context.lineWidth=1;
            this.context.stroke();
            let text=new Text(this.value.toString(),this.stpt,this.canvas);
            text.textalignment="center";
            text.draw();
            if(this.connected){
                this.draw_connection();
            }
        }
        isinside(point: Point): boolean {
            let dx=(this.stpt.x-point.x)*lscale;
            let dy=(this.stpt.y-point.y)*lscale;
            let r=Math.pow(dx*dx+dy*dy, 0.5);
            if(r<=this.radius){
                return(true);
            }
            else{
                return(false);
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
        set_connection(geo:Geometry){
            this.objconnected=geo;
            this.connected=true;
        }
        draw_connection(){
            this.context.beginPath();
            this.context.moveTo(this.stpt.x*lscale,this.stpt.y*lscale);
            this.context.lineTo(this.objconnected.stpt.x*lscale,this.objconnected.stpt.y*lscale);
            this.context.stroke();
            //this.objconnected.color=this.color;
            //this.objconnected.value=this.value;
        }

    }
    export class Circle1 extends Geometry {
        
        radius: number;
        canvas: HTMLCanvasElement;
        context: CanvasRenderingContext2D;
        value:number=10;
        color:string="white";
        objconnected:Geometry;
        connected:boolean=false;
        constructor(stpt: Point, radius: number, canvas: HTMLCanvasElement) {
            super();
            this.stpt = stpt;
            this.radius = radius;
            this.canvas = canvas;
            this.context = this.canvas.getContext('2d');
        }
        
        draw(): void {
            this.context.beginPath();
            this.context.arc(this.stpt.x*lscale,this.stpt.y*lscale,this.radius*lscale,0,2*Math.PI,false);
            this.context.fillStyle=this.color;
            this.context.fill();
            this.context.lineWidth=1;
            this.context.stroke();
            let text=new Text(this.value.toString(),this.stpt,this.canvas);
            text.textalignment="center";
            text.draw();
            if(this.connected){
                this.draw_connection();
            }
        }
        isinside(point: Point): boolean {
            let dx=(this.stpt.x-point.x)*lscale;
            let dy=(this.stpt.y-point.y)*lscale;
            let r=Math.pow(dx*dx+dy*dy, 0.5);
            if(r<=this.radius){
                return(true);
            }
            else{
                return(false);
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
        set_connection(geo:Geometry){
            this.objconnected=geo;
            this.connected=true;
        }
        draw_connection(){
            this.context.beginPath();
            this.context.moveTo(this.stpt.x*lscale,this.stpt.y*lscale);
            this.context.lineTo(this.objconnected.stpt.x*lscale,this.objconnected.stpt.y*lscale);
            this.context.stroke();
            //this.objconnected.color=this.color;
            //this.objconnected.value=this.value;
        }

    }
    export class Circle2 extends Geometry {
        
        radius: number;
        canvas: HTMLCanvasElement;
        context: CanvasRenderingContext2D;
        value:number=12;
        color:string="white";
        objconnected:Geometry;
        connected:boolean=false;
        constructor(stpt: Point, radius: number, canvas: HTMLCanvasElement) {
            super();
            this.stpt = stpt;
            this.radius = radius;
            this.canvas = canvas;
            this.context = this.canvas.getContext('2d');
        }
        
        draw(): void {
            this.context.beginPath();
            this.context.arc(this.stpt.x*lscale,this.stpt.y*lscale,this.radius*lscale,0,2*Math.PI,false);
            this.context.fillStyle=this.color;
            this.context.fill();
            this.context.lineWidth=1;
            this.context.stroke();
            let text=new Text(this.value.toString(),this.stpt,this.canvas);
            text.textalignment="center";
            text.draw();
            if(this.connected){
                this.draw_connection();
            }
        }
        isinside(point: Point): boolean {
            let dx=(this.stpt.x-point.x)*lscale;
            let dy=(this.stpt.y-point.y)*lscale;
            let r=Math.pow(dx*dx+dy*dy, 0.5);
            if(r<=this.radius){
                return(true);
            }
            else{
                return(false);
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
        set_connection(geo:Geometry){
            this.objconnected=geo;
            this.connected=true;
        }
        draw_connection(){
            this.context.beginPath();
            this.context.moveTo(this.stpt.x*lscale,this.stpt.y*lscale);
            this.context.lineTo(this.objconnected.stpt.x*lscale,this.objconnected.stpt.y*lscale);
            this.context.stroke();
            //this.objconnected.color=this.color;
            //this.objconnected.value=this.value;
        }

    }
    export class Circle3 extends Geometry {
        
        radius: number;
        canvas: HTMLCanvasElement;
        context: CanvasRenderingContext2D;
        value:number=34;
        color:string="white";
        objconnected:Geometry;
        connected:boolean=false;
        constructor(stpt: Point, radius: number, canvas: HTMLCanvasElement) {
            super();
            this.stpt = stpt;
            this.radius = radius;
            this.canvas = canvas;
            this.context = this.canvas.getContext('2d');
        }
        
        draw(): void {
            this.context.beginPath();
            this.context.arc(this.stpt.x*lscale,this.stpt.y*lscale,this.radius*lscale,0,2*Math.PI,false);
            this.context.fillStyle=this.color;
            this.context.fill();
            this.context.lineWidth=1;
            this.context.stroke();
            let text=new Text(this.value.toString(),this.stpt,this.canvas);
            text.textalignment="center";
            text.draw();
            if(this.connected){
                this.draw_connection();
            }
        }
        isinside(point: Point): boolean {
            let dx=(this.stpt.x-point.x)*lscale;
            let dy=(this.stpt.y-point.y)*lscale;
            let r=Math.pow(dx*dx+dy*dy, 0.5);
            if(r<=this.radius){
                return(true);
            }
            else{
                return(false);
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
        set_connection(geo:Geometry){
            this.objconnected=geo;
            this.connected=true;
        }
        draw_connection(){
            this.context.beginPath();
            this.context.moveTo(this.stpt.x*lscale,this.stpt.y*lscale);
            this.context.lineTo(this.objconnected.stpt.x*lscale,this.objconnected.stpt.y*lscale);
            this.context.stroke();
            //this.objconnected.color=this.color;
            //this.objconnected.value=this.value;
        }

    }
    export class Circle4 extends Geometry {
        
        radius: number;
        canvas: HTMLCanvasElement;
        context: CanvasRenderingContext2D;
        value:number=50;
        color:string="white";
        objconnected:Geometry;
        connected:boolean=false;
        constructor(stpt: Point, radius: number, canvas: HTMLCanvasElement) {
            super();
            this.stpt = stpt;
            this.radius = radius;
            this.canvas = canvas;
            this.context = this.canvas.getContext('2d');
        }
        
        draw(): void {
            this.context.beginPath();
            this.context.arc(this.stpt.x*lscale,this.stpt.y*lscale,this.radius*lscale,0,2*Math.PI,false);
            this.context.fillStyle=this.color;
            this.context.fill();
            this.context.lineWidth=1;
            this.context.stroke();
            let text=new Text(this.value.toString(),this.stpt,this.canvas);
            text.textalignment="center";
            text.draw();
            if(this.connected){
                this.draw_connection();
            }
        }
        isinside(point: Point): boolean {
            let dx=(this.stpt.x-point.x)*lscale;
            let dy=(this.stpt.y-point.y)*lscale;
            let r=Math.pow(dx*dx+dy*dy, 0.5);
            if(r<=this.radius){
                return(true);
            }
            else{
                return(false);
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
        set_connection(geo:Geometry){
            this.objconnected=geo;
            this.connected=true;
        }
        draw_connection(){
            this.context.beginPath();
            this.context.moveTo(this.stpt.x*lscale,this.stpt.y*lscale);
            this.context.lineTo(this.objconnected.stpt.x*lscale,this.objconnected.stpt.y*lscale);
            this.context.stroke();
            //this.objconnected.color=this.color;
            //this.objconnected.value=this.value;
        }

    }
    export class Text{
        font="20px Arial";
        color="black";
        angle=0;
        textalignment:CanvasTextAlign="left";
        stpt:Point;
        text:string;
        canvas:HTMLCanvasElement;
        context:CanvasRenderingContext2D;
        constructor(text:string,stpt:Point,canvas:HTMLCanvasElement){
            this.stpt=stpt;
            this.canvas=canvas;
            this.context=this.canvas.getContext("2d");
            this.text=text;
        }
        draw(): void{
            this.context.font=this.font;
            this.context.fillStyle=this.color;
            this.context.textAlign=this.textalignment;
            this.context.save();
            this.context.translate(this.stpt.x*lscale,this.stpt.y*lscale);
            this.context.rotate(this.angle*Math.PI/180);
            this.context.scale(1,-1);
            this.context.fillText(this.text,0,0);
            this.context.restore();

        }
    }
}