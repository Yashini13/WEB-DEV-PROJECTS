var canvas =null;
var gl=null;
var bFullscreen=false;
var canvas_origin_width;
var canvas_origin_height;

// Javascript source code
function main()
{
  
 	 //code
 	 canvas=document.getElementById("SJ");
  	if(!canvas)
    	  console.log("obtaining canvas failed\n");
  	else
    	  console.log("Obtaining canvas successfully");

  	//drawText("Hello World");
	canvas_origin_width= canvas.width;
	canvas_origin_height= canvas.height;

	//Initialize
	initialize();

	//resize
        resize();

	//Display
	 display();

  	//event handeling
  	window.addEventListener("keydown",keyDown,false);
  	window.addEventListener("click",mouseDown,false);
	window.addEventListener("resize",resize, false);
}

function initialize()
{
	gl=canvas.getContext("webgl2");
	if(!gl)
	 console.log("obtaining WbGL context failed\n");
	else
	  console.log("obtaining WebGL2 succeeded\n");

	gl.viewportWidth=canvas.width;
	gl.viewportHeight=canvas.height;

	//clear the screen by blue color
	gl.clearColor(0.0,0.0,1.0, 1.0);
}

function display()
{
	//code
	gl.clear(gl.COLOR_BUFFER_BIT);
	
	//double buffering emulation
	requestAnimationFrame(display,canvas);  //This is our Game loop
}

function resize()
{
  	if(bFullscreen==true)
	{
	  canvas.width= window.innerWidth;
	  canvas.height= window.innerHeight;
	}
	else
	{
	  canvas.width= canvas_origin_width;
	  canvas.height= canvas_origin_height;
        }
	gl.viewport(0,0, canvas.width, canvas.height);
}

//
function drawText(text)
{
   	var str="Hello";
   	context.font="48px sans-serif";
   	context.fillStyle="white";
   	context.textAllign="center";
   	context.textBaseline="middle";
   	context.fillText(str,canvas.width/2,canvas.height/2);  
}


function toggleFullscreen()
{
    var fullscreen_element=document.fullscreenElement || 
                           document.mozFullScreenElement ||
                           document.webkitFullscreenElement ||
                           document.msFullscreenElement ||
                           null;

    if(fullscreen_element == null)
    {
        if(canvas.requestFullscreen) 
		canvas.requestFullscreen();
        else if(canvas.mozRequestFullScreen)
                canvas.mozRequestFullScreen(); 
	else if(canvas.webkitRequestFullscreen)
		canvas.webkitRequestFullscreen();
	else if(canvas.msRequestFullscreen)
		canvas.msRequestFullscreen();

	bFullscreen=true;
    }
    else
    {
	 if(document.exitFullscreen) 
		document.exitFullscreen();
         else if(document.mozExitFullScreen)
                document.mozExitFullScreen(); 
	 else if(document.webkitExitFullscreen)
		document.webkitExitFullscreen();
	 else if(document.msExitFullscreen)
		document.msExitFullscreen();

	 bFullscreen=false;
    }

}

 

//keyboardhandler
function keyDown()
{
    //code
    switch(event.keyCode)
    {
       case 70:
       case 101:
       toggleFullscreen();
       break;
    }
        
  
}
//mousedownhandler
function mouseDown()
{
   //code
   //alert("a mouse button is clicked");
}