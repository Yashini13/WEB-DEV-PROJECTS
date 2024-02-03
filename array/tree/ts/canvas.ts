const canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("canvas_activity");
const context: CanvasRenderingContext2D = canvas.getContext("2d");
const rect = canvas.getBoundingClientRect();
var lscale: number;
var scene = new Scene();
var scene1 = new Scene();
window.onload = function () {
    //canvas size
    canvas_size();
    //canvas mapping
    canvas_mapping();
    //draw border or rectangle
    scene.draw(); 
    //draw all scene -> canvas and drawing the canvas
    
    //canvas_border();
    dashboard();
    dashboard_buttons();
    fixed_container();
    
    //draw all the input element

}

window.onresize = function () {
    //canvas size
    canvas_size();
    //canvas mapping
    canvas_mapping();
    //draw border or rectangle
    scene.draw();
    //canvas_border();
    
    dashboard();
    dashboard_buttons();
    
    //draw all scene -> canvas and drawing the canvas
    //draw all the input element

}

function canvas_size() {
    canvas.width = window.innerWidth * 0.97;
    canvas.height = canvas.width * 1080.0 / 1920 * 0.65;
    lscale = canvas.width / 1920.0;
}

function canvas_border() {
    context.beginPath();
    context.rect(0, 0, canvas.width, canvas.height);
    context.lineWidth = 4;
    context.stroke();
}

function canvas_mapping() {
    context.translate(0, canvas.height);
    context.scale(1, -1)

}
const m1:HTMLInputElement=<HTMLInputElement>document.getElementById("m1");
m1.style.left=`${rect.x+10}px`;
m1.style.top=`${rect.y+10}px`;
canvas.addEventListener("mousemove",mousemove);
canvas.addEventListener("click",mouseclick);
canvas.addEventListener("mousedown",mousedown);
canvas.addEventListener("mouseup",mouseup);
canvas.addEventListener("touchmove",touchmove);
var drag=false;
function mousemove(e:MouseEvent){
    if(drag && geo=="Drag"){
        let x=Math.round((e.clientX-rect.x)/lscale);
    let y=Math.round((canvas.height- (e.clientY-rect.y))/lscale);
    m1.value=`${x},${y}`;
    drag_geo(x,y);
    }   
}
function mouseclick(e:MouseEvent){
    let x=Math.round((e.clientX-rect.x)/lscale);
    let y=Math.round((canvas.height- (e.clientY-rect.y))/lscale);
    m1.value=`${x},${y}`;
    //let stpt=new Chemistry.Point(x,y);
    /*if(geo=="Square"){
        draw_square(x,y);
    }
    else if(geo=="Flask"){
        draw_flask(x,y);
    }
    else if(geo=="Pentagon"){
        draw_pentagon(x,y);
    }
    else if(geo=="Color"){
        change_color(x,y);
    }
    else if(geo=="Bracket"){
        draw_bracket(x,y);
    }*/
    if(geo=="Circle"){
        draw_circle(x,y);
    }
    else if(geo=="Circle1"){
        draw_circle1(x,y);
    }
    else if(geo=="Circle2"){
        draw_circle2(x,y);
    }
    else if(geo=="Circle3"){
        draw_circle3(x,y);
    }
    else if(geo=="Circle4"){
        draw_circle4(x,y);
    }
    /*else if(geo=="Change_value"){
        change_value(x,y);
    }*/
    else if(geo=="Connect"){
        set_connection(x,y);
    }
    /*else if(geo=="Move"){
        move_geo(x,y);
    }*/
}
function mousedown(e:MouseEvent){
    //let x=Math.round((e.clientX-rect.x)/lscale);
    //let y=Math.round((canvas.height- (e.clientY-rect.y))/lscale);
    //m1.value=`${x},${y}`;
    drag=true;
}
function mouseup(e:MouseEvent){
    //let x=Math.round((e.clientX-rect.x)/lscale);
    //let y=Math.round((canvas.height- (e.clientY-rect.y))/lscale);
    //m1.value=`${x},${y}`;
    drag=false;
}
function touchmove(e:TouchEvent){
    if( geo=="Drag"){
        let x=Math.round((e.touches[0].clientX-rect.x)/lscale);
    let y=Math.round((canvas.height- (e.touches[0].clientY-rect.y))/lscale);
    m1.value=`${x},${y}`;
    drag_geo(x,y);
    } 
}
function fixed_container(){
    let c1=new Chemistry.Geometry();
    c1.stpt=new Chemistry.Point(canvas.width/(2*lscale)-200,canvas.height/(2*lscale)+100);
    c1.name="circle1";
    scene1.add(c1);
    let c2=new Chemistry.Geometry();
    c2.stpt=new Chemistry.Point(canvas.width/(2*lscale)+200,canvas.height/(2*lscale)+100);
    c2.name="circle4";
    scene1.add(c2);
    let c3=new Chemistry.Geometry();
    c3.stpt=new Chemistry.Point(canvas.width/(2*lscale),canvas.height/(2*lscale)+250);
    c3.name="circle";
    scene1.add(c3);
    let c4=new Chemistry.Geometry();
    c4.stpt=new Chemistry.Point(canvas.width/(2*lscale)-100,canvas.height/(2*lscale)-80);
    c4.name="circle2";
    scene1.add(c4);
    let c5=new Chemistry.Geometry();
    c5.stpt=new Chemistry.Point(canvas.width/(2*lscale),canvas.height/(2*lscale)-250);
    c5.name="circle3";
    scene1.add(c5);
}
