var ball;
var ballpos,pos,database;

function setup(){
    createCanvas(500,500);
    database=firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    ballpos=database.ref("Ball/Position");
    ballpos.on("value",readpos,showerror);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
     writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref("Ball/Position").set({
     x:ball.x+x,y:ball.y+y
    });
    
}

function readpos(data){
    pos=data.val();
    ball.x=pos.x;
    ball.y=pos.y;
}

function showerror(){
    console.log(error);
}