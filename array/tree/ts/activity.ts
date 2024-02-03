const div_dashboard: HTMLDivElement = <HTMLDivElement>document.getElementById("dashboard");
const div_panel: HTMLDivElement = <HTMLDivElement>document.getElementById("panel");
/*function activity1() {
    var stpt = new Chemistry.Point(400, 400);
    var mycircle = new Chemistry.Circle(stpt, 50, canvas);
    scene.add(mycircle);
    var stpt = new Chemistry.Point(600, 200);
    var ellipse = new Chemistry.Elipse(stpt, 150, 90, canvas);
    scene.add(ellipse);
    var stpt = new Chemistry.Point(700, 400);
    var sqr = new Chemistry.Polygon(stpt, 75, 4, canvas);
    sqr.stang = 45;
    scene.add(sqr);
    //var mysqr = new Chemistry.Square(stpt, 100, canvas);
    //scene.add(mysqr);    

    var stpt = new Chemistry.Point(600, 200);
    var bracket = new Chemistry.L_bracket(stpt, canvas);
    scene.add(bracket);

}*/
function dashboard() {
    div_dashboard.style.left = `${canvas.width - 185}px`
    div_dashboard.style.top = `${rect.y + 10}px`
    //div_panel.style.left = `${canvas.width - 185}px`
    //div_panel.style.top = `${rect.y + 35}px`
    //div_panel.style.width = "180px";
}
function dashboard_buttons() {
    div_dashboard.innerHTML += `<input type="button" value="Drag" onclick="drag_click();" style="width:60px">`;
    div_dashboard.innerHTML += `<input type="button" value="43" onclick="circle_click();" style="width:60px">`;
    div_dashboard.innerHTML += `<input type="button" value="10" onclick="circle1_click();" style="width:60px">`;
    div_dashboard.innerHTML += `<input type="button" value="12" onclick="circle2_click();" style="width:60px">`;
    div_dashboard.innerHTML += `<input type="button" value="34" onclick="circle3_click();" style="width:60px">`;
    div_dashboard.innerHTML += `<input type="button" value="50" onclick="circle4_click();" style="width:60px">`;



    div_dashboard.innerHTML += `<input type="button" value="Set connection" onclick="connect_click();" style="width:60px">`;
    //div_dashboard.innerHTML += `<input type="button" value="Move All" onclick="move_all_x();" style="width:60px">`;
    //div_dashboard.innerHTML += `<input type="button" value="Move" onclick="move_click();" style="width:60px">`;
}
/*function show_polygon_panel() {
    div_panel.innerHTML = `<p style="width:60px;display: inline-block">Start pt</p>
                            <input type="text" id="stptx" style="width:45px">
                            <input type="text" id="stpty" style="width:45px">
                            <p style="width:100px;display: inline-block">No of side:</p>
                            <input type="text" id="n" style="width:50px">
                            <p style="width:100px;display: inline-block">length:</p>
                            <input type="text" id="l" style="width:50px">
                            <p style="width:100px;display: inline-block">Name:</p>
                            <input type="text" id="name" style="width:50px">
                            <p style="width:100px;display: inline-block">Start angle:</p>
                            <input type="text" id="stang" style="width:50px">
                            <input type="button" value="Draw" onclick="draw_polygon();" style="width:50px">
                            <input type="button" value="Area" onclick="area_geometry();" style="width:50px">
                            <br><p style="width:45px;display: inline-block">Area</p>
                            <input type="text" id="area" style="width:100px">`;
}
function draw_polygon() {
    var stptx = <HTMLInputElement>document.getElementById("stptx");
    var stpty = <HTMLInputElement>document.getElementById("stpty");
    var l = <HTMLInputElement>document.getElementById("l");
    var n = <HTMLInputElement>document.getElementById("n");
    var name = <HTMLInputElement>document.getElementById("name");
    var stang = <HTMLInputElement>document.getElementById("stang");
    var stpt = new Chemistry.Point(parseInt(stptx.value), parseInt(stpty.value));
    var sqr = new Chemistry.Polygon(stpt, parseInt(l.value), parseInt(n.value), canvas);
    sqr.name = name.value;
    sqr.stang = parseInt(stang.value);
    scene.add(sqr);
}
function show_ellipse_panel() {
    div_panel.innerHTML = `<p style="width:60px;display: inline-block">Start pt</p>
                            <input type="text" id="stptx" style="width:45px">
                            <input type="text" id="stpty" style="width:45px">
                            <p style="width:100px;display: inline-block">Major:</p>
                            <input type="text" id="a" style="width:50px">
                            <p style="width:100px;display: inline-block">Minor:</p>
                            <input type="text" id="b" style="width:50px">
                            <p style="width:100px;display: inline-block">Name:</p>
                            <input type="text" id="name" style="width:50px">
                            <input type="button" value="Draw" onclick="draw_ellipse();" style="width:50px">
                            <input type="button" value="Area" onclick="area_geometry();" style="width:50px">
                            <br><p style="width:45px;display: inline-block">Area</p>
                            <input type="text" id="area" style="width:100px">`;
}
function draw_ellipse() {
    var stptx = <HTMLInputElement>document.getElementById("stptx");
    var stpty = <HTMLInputElement>document.getElementById("stpty");
    var a = <HTMLInputElement>document.getElementById("a");
    var b = <HTMLInputElement>document.getElementById("b");
    var name = <HTMLInputElement>document.getElementById("name");
    var stpt = new Chemistry.Point(parseInt(stptx.value), parseInt(stpty.value));
    var ellipse = new Chemistry.Elipse(stpt, parseInt(a.value), parseInt(b.value), canvas);
    ellipse.name = name.value;
    scene.add(ellipse);
}
function show_circle_panel() {
    div_panel.innerHTML = `<p style="width:60px;display: inline-block">centre pt</p>
                            <input type="text" id="stptx" style="width:45px">
                            <input type="text" id="stpty" style="width:45px">
                            <p style="width:100px;display: inline-block">Radius:</p>
                            <input type="text" id="radius" style="width:50px">
                            <p style="width:100px;display: inline-block">Name:</p>
                            <input type="text" id="name" style="width:50px">
                            <input type="button" value="Draw" onclick="draw_circle();" style="width:50px">
                            <input type="button" value="Area" onclick="area_geometry();" style="width:50px">
                            <br><p style="width:45px;display: inline-block">Area</p>
                            <input type="text" id="area" style="width:100px">`;
}*/
/*function draw_circle() {
    var stptx = <HTMLInputElement>document.getElementById("stptx");
    var stpty = <HTMLInputElement>document.getElementById("stpty");
    var radius = <HTMLInputElement>document.getElementById("radius");
    var name = <HTMLInputElement>document.getElementById("name");
    var stpt = new Chemistry.Point(parseInt(stptx.value), parseInt(stpty.value));
    var circle = new Chemistry.Circle(stpt, parseInt(radius.value),canvas);
    circle.name = name.value;
    scene.add(circle);
}
function area_geometry() {
    var name = <HTMLInputElement>document.getElementById("name");
    var area = <HTMLInputElement>document.getElementById("area");
    area.value = `${scene.area(name.value)}`;
}
var img=new Image();
img.src="./images/download.png";*/

/*function test_mapping(){
    context.fillStyle="red";
    context.fillRect(50,50,100,50);
    context.save();
    context.translate(100,100);
    context.rotate(45*Math.PI/180);
    context.fillRect(50,50,100,50);
    context.restore();    
}
function test_transformation(){
    context.fillStyle="red";
    context.fillRect(50,50,100,50);
    context.save();
    context.translate(50,50);
    context.rotate(45*Math.PI/180);
    context.translate(-50,-50);
    context.fillRect(50,50,100,50);
    context.restore();   
}*/

/*function draw_square(x:number,y:number){
    let sq=new Chemistry.Polygon(new Chemistry.Point(x,y),100,4,canvas);
    sq.name="square";
    scene.add(sq);
}

function draw_flask(x:number,y:number){
    let flask=new Chemistry.Flask(img,new Chemistry.Point(x,y),canvas);
    flask.name="flask";
    scene.add(flask);
}
function draw_pentagon(x:number,y:number){
    let sq=new Chemistry.Polygon(new Chemistry.Point(x,y),100,5,canvas);
    sq.name="pentagon"
    scene.add(sq);
}
function draw_bracket(x:number,y:number){
    let sq=new Chemistry.L_bracket(new Chemistry.Point(x,y),canvas);
    sq.name="bracket";
    scene.add(sq);
}*/
function draw_circle(x:number,y:number){
    let sq=new Chemistry.Circle(new Chemistry.Point(x,y),50,canvas);
    sq.name="circle";
    scene.add(sq);
}
function draw_circle1(x:number,y:number){
    let sq=new Chemistry.Circle1(new Chemistry.Point(x,y),50,canvas);
    sq.name="circle1";
    scene.add(sq);
}
function draw_circle2(x:number,y:number){
    let sq=new Chemistry.Circle2(new Chemistry.Point(x,y),50,canvas);
    sq.name="circle2";
    scene.add(sq);
}
function draw_circle3(x:number,y:number){
    let sq=new Chemistry.Circle3(new Chemistry.Point(x,y),50,canvas);
    sq.name="circle3";
    scene.add(sq);
}
function draw_circle4(x:number,y:number){
    let sq=new Chemistry.Circle4(new Chemistry.Point(x,y),50,canvas);
    sq.name="circle4";
    scene.add(sq);
}
/*function change_color(x:number,y:number){
    for(let i=0;i<scene.container.length;i++){
        if(scene.container[i].geo.isinside(new Chemistry.Point(x,y))){
            scene.container[i].geo.color="green"
            scene.draw();
            break;
        }
    }
}*/
var anim:boolean=false;
var timer1;
/*function move_all_x(){
    for(let i=0;i<scene.container.length;i++){
        
            scene.container[i].geo.move_x=true;
            
            
        
    }
    anim=false;
    timer1=setInterval(deferred_frame,100);
    
}
function deferred_frame(){
    anim=true;
    redraw_scene();
    clearInterval(timer1);
}*/
/*function rotate_polygon(){
    for(let i=0;i<scene.container.length;i++){
        
        scene.container[i].geo.revolve=true;
            
    }
    anim=false;
    timer1=setInterval(deferred_frame,100);
}*/
function drag_geo(x:number,y:number){
    for(let i=0;i<scene.container.length;i++){
        if(scene.container[i].geo.isinside(new Chemistry.Point(x,y)) && scene.container[i].geo.draggable){
            scene.container[i].geo.stpt=new Chemistry.Point(x,y);
            assemble(scene.container[i].geo);
            scene.draw();
            break;
        }
    }
}
/*function change_value(x:number,y:number){
    for(let i=0;i<scene.container.length;i++){
        if(scene.container[i].geo.isinside(new Chemistry.Point(x,y))){
            scene.container[i].geo.change_value();
            scene.draw();
            break;
        }
    }
}*/
/*function move_geo(x:number,y:number){
    for(let i=0;i<scene.container.length;i++){
        if(scene.container[i].geo.isinside(new Chemistry.Point(x,y))){
            scene.container[i].geo.move_x=true;
            break;
        }
    }
    anim=false;
    timer1=setInterval(deferred_frame,100);
}*/
let storei=-1;
let start1=0;
function set_connection(x:number,y:number){
    for(let i=0;i<scene.container.length;i++){
        if(scene.container[i].geo.isinside(new Chemistry.Point(x,y))){
            if(start1==0){
                storei=i;
                start1=1;
                console.log(i)
            }
            else if(start1==1){
                scene.container[storei].geo.set_connection(scene.container[i].geo);
                start1=0;
                storei=-1;
                console.log(i)
            }
            scene.draw();
            break;
        }
    }
}
function assemble(obj:Chemistry.Geometry){
    for(let i=0;i<scene1.container.length;i++){
        if(scene1.container[i].geo.isinside(new Chemistry.Point(obj.stpt.x,obj.stpt.y)) && scene1.container[i].geo.name==obj.name){
            obj.stpt=scene1.container[i].geo.stpt;
            obj.lock();
            break;
        }
    }

}
var geo:string;
/*function square_click(){
    geo="Square";
}
function flask_click(){
    geo="Flask";
    
}
function pentagon_click(){
    geo="Pentagon";
}
function change_color_click(){
    geo="Color";
}*/
function drag_click(){
    geo="Drag";
}
/*function bracket_click(){
    geo="Bracket";
}
function change_value_click(){
    geo="Change_value";
}*/
function circle_click(){
    geo="Circle";
    
}
function circle1_click(){
    geo="Circle1";
    
}
function circle2_click(){
    geo="Circle2";
    
}
function circle3_click(){
    geo="Circle3";
    
}
function circle4_click(){
    geo="Circle4";
    
}
function connect_click(){
    geo="Connect";
}
/*function move_click(){
    geo="Move";
}*/
function redraw_scene(){
    scene.draw();
    if(anim){
        window.requestAnimationFrame(redraw_scene); 
    }
}