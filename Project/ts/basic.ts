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
          color:string;
        //  stpt:Point;
          private _stpt:Point;
          private _draggable:boolean=true;
          value:number;
          move_x:boolean=false;
          revolve:boolean=false;
          constructor(){}
          set stpt(pt:Point){
           if(this._draggable){
              this._stpt=pt;
              }      
          }
          get stpt(){
              return(this._stpt);
          }
          get draggable():boolean{
              return(this._draggable);
          }
              draw(){}
              protected calculate(){}
              get area():number{
                  return(0);
              }
              isinside(point:Point):Boolean{
                let dx=(this._stpt.x-point.x)*lscale; 
                let dy=(this._stpt.y-point.y)*lscale; 
                let r=Math.pow(dx*dx+dy*dy,0.5);
                  if(r<50){
                      return(true);
                  }
                  else
                  {
                      return(false);
                  } 
                  
              }
              lock(){
                  this._draggable=false;
              }
              protected triangle_area(pt1:Point,pt2:Point,pt3:Point){
                  return (0);
              }
              change_value(){};
              set_connection(geo:Geometry){};
              protected random(max:number,min:number){
                  return(Math.random()*(max-min)+min);
              }
            }
            var lscale:number;
            const canvas:HTMLCanvasElement=<HTMLCanvasElement>document.getElementById("canvas_activity1");
const context:CanvasRenderingContext2D=canvas.getContext("2d")
export class Tank extends Geometry{
  canvas:HTMLCanvasElement;
  fill_anim:boolean=false;
  height:number;
  width:number;
 // stpt:Point;
  fill_height:number=0;
  constructor(stpt:Point,height:number,width:number,canvas:HTMLCanvasElement){
      super();
      this.canvas=canvas;
      this.height=height;
      this.width=width;
      this.stpt=stpt;
  }
  fill(){
      this.fill_height++;
      this.fill_check();
  }
  fill_check(){
      if(this.fill_height>=this.height){
          this.fill_height=0;
      }
  }
  draw(): void {
      if(this.fill_anim){
          this.fill();
      }
      //For Water
      context.beginPath();
      context.rect((this.stpt.x-this.width/2)*lscale,(this.stpt.y-this.height/2)*lscale,this.width*lscale,this.fill_height*lscale);
      context.fillStyle="aqua";
      context.strokeStyle="aqua";
      context.lineWidth=1;
      context.fill();
      context.stroke();
      //For Tank
      context.beginPath();
      context.rect((this.stpt.x-this.width/2)*lscale,(this.stpt.y-this.height/2)*lscale,this.width*lscale,this.height*lscale);
      context.strokeStyle="black";
      context.lineWidth=2;
      context.stroke();
  }
 }}