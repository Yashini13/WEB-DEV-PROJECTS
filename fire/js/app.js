var canvas = document.getElementById("mycanvas");
var context = canvas.getContext("2d");
var smoke = new Smoke(canvas, context, 250, 0, 20);
/*smoke.radiusmax=15;
smoke.radiusmin=3;
smoke.vxrange=1;
smoke.vymax=5;
smoke.vymin=1;*/
smoke.color = "red";
runsmoke();
function runsmoke() {
    smoke.start();
    window.requestAnimationFrame(runsmoke);
}
//# sourceMappingURL=app.js.map