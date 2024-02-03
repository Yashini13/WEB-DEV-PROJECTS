const div_dashboard: HTMLDivElement= <HTMLDivElement>document.getElementById("dashboard");
const div_panel: HTMLDivElement= <HTMLDivElement>document.getElementById("panel");
function activity1(){
    var stpt=new Chemistry.Point(400,400);
    var mycircle=new Chemistry.circle(stpt,50,canvas);
    scene.add(mycircle);

    var stpt=new Chemistry.Point(600,200);
    var ellipse=new Chemistry.Ellipse(stpt,100,60,canvas);
    scene.add(ellipse);

    var stpt=new Chemistry.Point(700,400);
    var sqr=new Chemistry.Polygon(stpt,75,5,canvas);
    sqr.stang=45;
    scene.add(sqr);
    
    var stpt= new Chemistry.Point(500,100);
    var tri =new Chemistry.Polygon(stpt,100,3,canvas)
    tri.stang=45;
    scene.add(tri);
        //var mysqr=new Chemistry.Square(stpt,100,canvas);
    //scene.add(mysqr);
}

function dashboard(){ 
div_dashboard.style.left=`${canvas.width-185}px`
div_dashboard.style.top=`${rect.y+10}px`
div_panel.style.left=`${canvas.width-185}px`
div_panel.style.top=`${rect.y+35}px`
div_panel.style.width="180px";
}

function dashboard_button(){   
    div_dashboard.innerHTML=`<input type="button" value="Polygon" onclick="show_polygon_panel();" style="width:60px">`;
    div_dashboard.innerHTML+=`<input type="button" value="Ellipse" onclick="show_ellipse_panel();" style="width:60px">`;
    div_dashboard.innerHTML+=`<input type="button" value="circle" onclick="show_circle_panel();" style="width:60px">`;
}

function show_polygon_panel(){
    div_panel.innerHTML=`<p style="width:60px;display:inline-block"> Start pt</p>
                          <input type="text" id="stptx" style="width:45px">
                          <input type="text" id="stpty" style="width:45px">
                          <p style="width:100px;display: inline-block"> No of side:</p>
                          <input type="text" id="n" style="width:50px">
                          <p style="width:100px;display: inline-block"> lenght:</p>
                          <input type="text" id="l" style="width:50px"> 
                          <p style="width:100px;display: inline-block"> Name:</p>
                          <input type="text" id="name" style="width:50px">
                          <p style="width:100px;display: inline-block"> Start angle:</p>
                          <input type="text" id="stang" style="width:50px">
                          <input type="button" value= "Draw" onclick="draw_polygon();" style="width:100px">
                          <input type="button" value= "Area" onclick="area_geometry();" style="width:100px">
                          <br><p style ="width:45px;display: inline-block">Area</p>
                           <input type="text" id ="area" style="width:100px">`;

}

function draw_polygon(){
    var stptx=<HTMLInputElement>document.getElementById("stptx");
    var stpty=<HTMLInputElement>document.getElementById("stpty");
    var l=<HTMLInputElement>document.getElementById("l");
    var n=<HTMLInputElement>document.getElementById("n");
    var name=<HTMLInputElement>document.getElementById("name");
    var stang=<HTMLInputElement>document.getElementById("stang");
    var stpt=new Chemistry.Point(parseInt(stptx.value),parseInt(stpty.value));
    var sqr=new Chemistry.Polygon(stpt,parseInt(l.value),parseInt(n.value),canvas);
    sqr.name=name.value;
    sqr.stang=parseInt(stang.value);
    scene.add(sqr);
}

function area_geometry(){
    var name=<HTMLInputElement>document.getElementById("name");
    var area=<HTMLInputElement>document.getElementById("area");
    area.value=`${scene.area(name.value)}`;
}


function show_circle_panel(){
    div_panel.innerHTML=`<p style="width:60px;display:inline-block"> Start pt</p>
                          <input type="text" id="stptx" style="width:45px">
                          <input type="text" id="stpty" style="width:45px">
                          <p style="width:100px;display: inline-block"> radius:</p>
                          <input type="text" id="radius" style="width:50px"> 
                          <p style="width:100px;display: inline-block"> Name:</p>
                          <input type="text" id="name" style="width:50px">
                         
                          <input type="button" value= "Draw" onclick="draw_circle();" style="width:100px">
                          <input type="button" value= "Area" onclick="area_geometry();" style="width:100px">
                          <br><p style ="width:45px;display: inline-block">Area</p>
                           <input type="text" id ="area" style="width:100px">`;

}
function draw_circle(){
    var stptx=<HTMLInputElement>document.getElementById("stptx");
    var stpty=<HTMLInputElement>document.getElementById("stpty");
    var radius=<HTMLInputElement>document.getElementById("radius");
    
    var name=<HTMLInputElement>document.getElementById("name");
   // var stang=<HTMLInputElement>document.getElementById("stang");
    var stpt=new Chemistry.Point(parseInt(stptx.value),parseInt(stpty.value));
    var mycircle=new Chemistry.circle(stpt,parseInt(radius.value),canvas);
    mycircle.name=name.value;
    //mycircle.stang=parseInt(stang.value);
    scene.add(mycircle);
}

