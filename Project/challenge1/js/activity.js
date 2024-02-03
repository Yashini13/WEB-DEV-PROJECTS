const div_dashboard = (document.getElementById("dashboard"));
var mycircle = new Chemistry.Circle(400, 200, 100, canvas);
scene.add(mycircle);
const div_panel = (document.getElementById("panel"));
function dashboard() {
    div_dashboard.style.left = `${canvas.width - 185}px`;
    div_dashboard.style.top = `${rect.y + 10}px`;
    div_panel.style.left = `${canvas.width - 185}px`;
    div_panel.style.top = `${rect.y + 35}px`;
    div_panel.style.width = "1080";
}
function dashboard_buttons() {
    div_dashboard.innerHTML = `<input type="button" value="Square" onclick="flask_click();"style="width:60px">`;
}
var img = new Image();
img.src = "./images/tripod.png";
var geo;
function flask_click() {
    geo = "Flask";
}
function draw_flask(x, y) {
    let flask = new Chemistry.flask(img, new Chemistry.Point(x, y), canvas);
    scene.add(flask);
}
//# sourceMappingURL=activity.js.map