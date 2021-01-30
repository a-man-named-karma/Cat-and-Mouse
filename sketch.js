var mouse, mouse2, mouse3, mouse4;
var cat, cat2, cat3, cat4;
var catImage, mouseImage, parkImage;
var funnyCatImage, funnyMouseImage;
var PLAY, END;
var gameState = PLAY;

function preload() {
    mouseImage = loadImage("images/mouse1.png")
    catImage = loadImage("images/cat1.png");
    funnyMouseImage = loadImage("images/mouse4.png");
    funnyCatImage = loadImage("images/cat4.png");
    parkImage = loadImage("images/garden.png");
    mouse2 = loadImage("images/mouse2.png");
    cat2 = loadImage("images/cat2.png");
    mouse3 = loadImage("images/mouse3.png");
    cat3 = loadImage("images/cat3.png");
    mouse4 =loadImage("images/mouse4.png");
    cat4 = loadImage("images/cat4.png");
}

function setup(){
    createCanvas(1000,800);
    cat = createSprite(900,700);
    mouse = createSprite(100,700);
    cat.addImage("cat",catImage);
    mouse.addImage("mouse",mouseImage);
    cat.scale = 0.1;
    mouse.scale = 0.1;
}

function draw() {
    if(gameState === PLAY){
        background(parkImage);
        keyPressed();
        if(cat.isTouching(mouse)){
            cat.addImage("cat", funnyCatImage);
            mouse.addImage("mouse", funnyMouseImage);
            cat.velocityX = 0;
        }
    }

    drawSprites();
}


function keyPressed(){
    
    background(255);
    if(keyDown(LEFT_ARROW)){
        cat.velocityX = -5;
    }
}
