const canvas = (document.getElementById("canvas_activity1"));
const context = canvas.getContext("2d");
const rect = canvas.getBoundingClientRect();
var lscale;
var scene = new Scene();
var scene1 = new Scene();
// var circle = new Chemistry.Circle(400, 200, 50, canvas);
window.onload = function () {
    canvas_size();
    canvas_mapping();
    canvas_border();
    scene.draw();
    //activity1();
    //   dashboard();
    //   dashboard_buttons();
    //   fixed_container();
};
window.onresize = function () {
    canvas_size();
    canvas_mapping();
    canvas_border();
    scene.draw();
    //   dashboard();
    //   dashboard_buttons();
};
function canvas_size() {
    canvas.width = window.innerWidth;
    canvas.height = (canvas.width * 1080.0) / 1920;
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
    context.scale(1, -1);
}
//# sourceMappingURL=canvas_size.js.map