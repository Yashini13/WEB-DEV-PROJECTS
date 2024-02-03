const canvas:HTMLCanvasElement=<HTMLCanvasElement>document.getElementById("canvas_activity1");
const context:CanvasRenderingContext2D=canvas.getContext("2d");
const rect=canvas.getBoundingClientRect();
var lscale:number;
var scene =new Scene();
window.onload=function(){
    //canvas size
     canvas_size();
    // canvas mapping
    canvas_mapping();
    // draw border or rectangle
    scene.draw();
    canvas_border();
     //draw the sence -> canvas and drawing the canvas
     
    //draw all geometries 
    // draw all the input elements 
    
}

window.onresize=function(){
    //canvas size
    canvas_size();
    // canvas mapping
    canvas_mapping();
    // draw border or rectangle
    scene.draw();
    canvas_border();
     //draw the sence -> canvas and drawing the canvas
    //draw all geometries 
    // draw all the input elements 
    
}

function canvas_size(){
    canvas.width=window.innerWidth*0.97;
    canvas.height=canvas.width*1080.0/1920*0.65;
    lscale=canvas.width/1920.0;
}

function canvas_border(){
 context.beginPath();
 context.rect(0,0,canvas.width,canvas.height);
 context.lineWidth=4;
 context.stroke();
}

function canvas_mapping()
{
    context.translate(0,canvas.height);
    context.scale(1,-1);

}