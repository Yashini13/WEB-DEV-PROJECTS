// Constants and Variables 
let inputDir = {x:0 , y:0};
const move_Sound = new Audio ("move.mp3");
const eat_Sound = new Audio ("food.mp3");
const out_Sound = new Audio ("gameover.mp3");
let speed = 5;
let lastPaintTime =0 ;
let snake_arr = [{x:13,y:13}];
food = {x:10,y:12};
let score = 0;


//GAME FUNCTIONS

function main(ctime){
 window.requestAnimationFrame(main);    
if((ctime-lastPaintTime)/1000 < 1/speed)
{
    return;
}
lastPaintTime= ctime;
gameEngine();
}

function collide(snake){
    // If you collide to yourself
    for(let i =1; i<snake_arr.length;i++)
    {
        if(snake[i].x=== snake[0].x && snake[i].y === snake[0].y)
        {
            return true;
        }
    }
  
    // If you collide to wall

    if(snake[0].x>=18 || snake[0].x <= 0 || snake[0].y >= 18 || snake[0].y <= 0)
    {
         return true;
    }


    return false;

}
function gameEngine()
{
    // Part 1 ---> Updating Snake Food
     
    if(collide(snake_arr))
    {
        out_Sound.play();
        inputDir = {x: 0, y:0};
        alert("GAME OVER :( Try Again Press ctrl+r to refresh");
        snake_arr = [{x:13, y:13}];
        score=0;
    }
    // If you have eaten the food , regenerate the food
    if(snake_arr[0].y===food.y && snake_arr[0].x===food.x)
    { 
      eat_Sound.play();
       score+=1;

    if(score>hiscoreval)
    {
        hiscoreval = score;
        localStorage.setItem("hiscore",JSON.stringify(hiscoreval))
        HighScore.innerHTML="Heightest Score: "+ hiscoreval;      
    }

    scorebox.innerHTML = "Score: " + score; 

    snake_arr.unshift({x: snake_arr[0].x + inputDir.x , y: snake_arr[0].y+ inputDir.y});
    let a = 2, b=16;
    food = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(a + (b-a)* Math.random())}
    }

    //Move the snake

    for(let i= snake_arr.length-2;i >=0 ; i--)
    {
        snake_arr[i+1]={...snake_arr[i]}
    }

    snake_arr[0].x+=inputDir.x;
    snake_arr[0].y+=inputDir.y;


    // Part 2 ----> Diaplay / Render snake and food

    // display snake

    playArea.innerHTML = "";
    snake_arr.forEach((e, index)=> {
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
    
        if (index === 0) {
            snakeElement.classList.add('head');
        } else {
            snakeElement.classList.add('snake');
        }
            playArea.appendChild(snakeElement);
        });
 
      // display food;

      foodElement = document.createElement('div');
      foodElement.style.gridRowStart = food.y;
      foodElement.style.gridColumnStart = food.x;
      foodElement.classList.add('food');
      playArea.appendChild(foodElement);

   

}

// Main logic

let hiscore = localStorage.getItem("hiscore");

if (hiscore === null) {
    hiscoreval = 0;
    localStorage.setItem("hiscore", JSON.stringify(hiscoreval))
} else {
    hiscoreval = JSON.parse(hiscore);
    HighScore.innerHTML = "Hiscore: " + hiscore;
}
window.requestAnimationFrame(main);
window.addEventListener('keydown' , e=>{
    inputDir= {x:0,y:1};
    switch (e.key) {
        case "ArrowUp":
            console.log("Arrowup");
            inputDir.x=0;
            inputDir.y=-1;
        break;
        case "ArrowDown":
            console.log("ArrowDown");
            inputDir.x=0;
            inputDir.y=1;
        break;    
        case "ArrowLeft":
            console.log("ArrowLeft");
            inputDir.x=-1;
            inputDir.y=0;
        break;
        case "ArrowRight":
                console.log("ArrowRight");
                inputDir.x=1;
                inputDir.y=0;
        break;            
        
        default:
            break;
    }
})