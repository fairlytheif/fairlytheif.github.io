window.onload = function(){
    addEventListener('keydown',keyPush);
    setInterval(game, 1000/60);
}
let
canvas = document.getElementById('gameC'),
ctx = canvas.getContext('2d'),
gameStarted = false,
pPosX = ~~(canvas.width),
pPosY = ~~(canvas.height),
playerWidth = playerHeight = 17,
appleWidth = appleHeight = 17,
apples = [],
texter = 0,
tail = 20,
trail = [],
score = 0,
failed = false,
eated = false,
direction,
appls = false,
appleEated = 1,
newApple ={
    x: ~~(Math.random() * canvas.width /3),
    y: ~~(Math.random() * canvas.height /3),
    color: "red"
},
secondApples ={
    x: ~~(Math.random() * canvas.width),
    y: ~~(Math.random() * canvas.height),
    color: "red"
},
thirdApples ={
    x: ~~(Math.random() * canvas.width),
    y: ~~(Math.random() * canvas.height),
    color: "red"
},
speed = baseSpeed = 0;
setSpeed(999)
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

//////////////////!!!!!!!!!!!!! 295x
function keyPush(key){
    gameStarted = true;

    if(direction !== "right" && key.keyCode == 37 || direction !== "right" && key.keyCode == 65)
    {direction = "left";

    console.log(direction)} 
    else if(direction !== "down" && key.keyCode == 38 || direction !== "down" && key.keyCode == 87)
    {direction = "up"; 

    console.log(direction)} 
    else if(direction !== "left" && key.keyCode == 39 || direction !== "left" && key.keyCode == 68)
    {direction = "right";

    console.log(direction) 
}
    else if(direction !== "up" && key.keyCode == 40 || direction !== "up" && key.keyCode == 83)
    {direction = "down"; 

    console.log(direction)} 
}
function dir(){
    if(direction == "left"){
        pPosX = pPosX -2 - speed;
    }
    else if(direction == "right"){
        pPosX = pPosX +2 + speed;
    }
    else if(direction == "up"){
        pPosY = pPosY -2 - speed;
    }
    else if(direction == "down"){
        pPosY = pPosY +2 + speed;
    }
}
/////////////!!!!!!!!!!!!!!!!!!

function game(){
    ctx.imageSmoothingEnabled = false;
    returnSnake()
    ctx.fillStyle = "black";
    ctx.fillRect(0,0, canvas.width, canvas.height);
    gameStart();


    
}

function snake(){
    returnSnake()
    if(failed == false){
        ctx.fillStyle = 'lime';
    }
    else{
        ctx.fillStyle = "red";
    }
    for(let i = 0; i < trail.length; i++ )
    {
      ctx.fillRect(trail[i].x, trail[i].y, playerWidth, playerHeight)
      if(trail[i].x == pPosX && trail[i].y == pPosY){
          ctx.fillStyle = "red";
          failed = true;
          if(failed == true){
            setInterval(trailShifter, 10)
            appleEated = 1;
            score = 0;
            
          }
            else if(failed == false){
                clearInterval(trailShifter)
            }
      }
    }
    trail.push({x: pPosX, y: pPosY, color: ctx.fillStyle})
    if( trail.length > tail + score )
  {
    trail.shift();
  }
}
function trailShifter(){
    if(trail.length >= tail + score && failed == true){
        trail.shift()
        clearInterval(game)
        clearInterval(snake)
        speed = 0;
    }
    else{
        clearInterval(trailShifter)
        failed = false;
    }
}

function MathPosition(object){
    object.x = ~~(Math.random() * canvas.width);
    object.y = ~~(Math.random() * canvas.height);

}
function ScoreTexter(){
    let scoreText = document.getElementById("scoreText");
    scoreText.innerHTML = "score:" + "" + score ;
}
function spawnApple(){

           
                                                            ///  x: ~~(Math.random() * canvas.width),
                                                      /// y: ~~(Math.random() * canvas.height),                 
                                                             /// color: 'red'

    if(appls == false){
            ctx.fillStyle = newApple.color;
        ctx.fillRect(newApple.x, newApple.y, appleWidth, appleHeight);
        appls == true
    };
   if(appleEated > 2 && eated == false){
    ctx.fillStyle = secondApples.color;
    ctx.fillRect(secondApples.x, secondApples.y, appleWidth, appleHeight);
     };
     if(appleEated > 17 && eated == false){
        ctx.fillStyle = thirdApples.color;
        ctx.fillRect(thirdApples.x, thirdApples.y, appleWidth, appleHeight);
         };
     if(pPosX < (newApple.x + playerWidth)
     && pPosX + playerWidth > newApple.x
     && pPosY < (newApple.y + playerHeight)
     && pPosY + playerHeight > newApple.y){
        appleEated +=1;
       score += 7;
       ScoreTexter()
       speed += .1;
       appls = false;
       newApple.x = ~~(Math.random() * canvas.width);
       newApple.y = ~~(Math.random() * canvas.height);
    }
    if(pPosX < (secondApples.x + playerWidth)
    && pPosX + playerWidth > secondApples.x
    && pPosY < (secondApples.y + playerHeight)
    && pPosY + playerHeight > secondApples.y){
        appleEated +=1;
       score += 7;
       ScoreTexter()
       speed += .1;
       secondApples.x = ~~(Math.random() * canvas.width);
       secondApples.y = ~~(Math.random() * canvas.height);
    }if(pPosX < (thirdApples.x + playerWidth)
    && pPosX + playerWidth > thirdApples.x
    && pPosY < (thirdApples.y + playerHeight)
    && pPosY + playerHeight > thirdApples.y){
        appleEated +=1;
       score += 7;
       ScoreTexter()
        speed += .1;
       thirdApples.x = ~~(Math.random() * canvas.width);
       thirdApples.y = ~~(Math.random() * canvas.height);
    }
};

function gameStart(){
    if(gameStarted == true){
        if(appls == false){
            spawnApple()
        }
        snake();
        dir();
        ///spawnApple();
        if(texter == 0){
            let gameText = document.getElementById("game_text");
            gameText.innerHTML = "Game Started";
            gameText.style.color = "#" + "ff1300";
        setTimeout(gameTexter, 1000);
        }
    }
}
function gameTexter(){
    let gameText = document.getElementById("game_text");
    gameText.style.color = "#" + "fff";
    setTimeout(() => gameText.style.color = "#" + "ff1300", 500)
    setTimeout(() => gameText.style.color = "#" + "fff", 2000)
    texter = 1;
}

function setSpeed(speed){
    setInterval(game,speed)
    console.log("speed:" + speed)
}
function returnSnake(){
    if( pPosX > canvas.width )
    {pPosX = 0;}

  if( pPosX + playerWidth < 0 )
    {pPosX = canvas.width;}

  if( pPosY + playerHeight < 0 )
    {pPosY = canvas.height;}

  if( pPosY > canvas.height )
    {pPosY = 0;}
}
