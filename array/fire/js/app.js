//var i:number;
var canvas = document.getElementById("mycanvas");
var context = canvas.getContext("2d");
var smoke = new Smoke(canvas, context, 250, 0, 20);
///
//
//
smoke.color = "red";
runsmoke();
function runsmoke() {
    smoke.start();
    window.requestAnimationFrame(runsmoke);
}
//# sourceMappingURL=app.js.map