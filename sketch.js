//maze variables
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21,b22,b23,b24,b25,b26,b27,b28,b29,b30;
var h1,b2,h3,h4;
var Bgrp,hgrp;
var backgroundimg;
var cat, catimg,catimg2,pmimg;
var ht1,ht2,ht3,htimg;
var over,overimg;
var food,bowlimg,fishimg,milkimg;
var bowl,bowl1,bowl2,fish,fish1,fish2,milk,milk1,milk2;
var dog,dogimg,dogbackimg;
var bone,bone1,bone2,boneimg;
var cereal,cereal1,cerealimg;
var poison,poisonimg;
var cookie,cookie1,cookieimg;
var win,winimg;
var kg1,kg2,kgimg,kgimg2;
var ms,msimg,ms1,msimg1;
var L1,L1img;
var sb1,sb1img,sb2,sb2img;
var pointaddsound,pointlostsound,gosound,winl1sound,finishsound;
var Score=0;
var lives=3;

function preload(){
  startimg=loadImage("start.jpg")
  backgroundimg=loadImage("background.jpg")
  catimg=loadImage("cat.jpg")
  catimg2=loadImage("catback.png")
  pmimg=loadImage("pm.png")
  htimg=loadImage("heart.png")
  overimg=loadImage("gameover.jpg")
  bowlimg=loadImage("bowl.png")
  fishimg=loadImage("fish.png")
  milkimg=loadImage("milk.png")
  dogimg=loadImage("Doggy.png");
  dogbackimg=loadImage("dog.png")
  boneimg=loadImage("bone.png")
  cerealimg=loadImage("cereal.png");
  poisonimg=loadImage("ps.png");
  cookieimg=loadImage("cookie.png");
  winimg=loadImage("win.png");
  sb1img=loadImage("SB1.png");
  sb2img=loadImage("SB2.png");
  kgimg=loadImage("KG1.png");
  kgimg2=loadImage("KG2.png");
  msimg=loadImage("minscore1.png");
  msimg1=loadImage("ms2.png")
  L1img=loadImage("abcimg.png");
  pointaddsound=loadSound("point.wav");
  pointlostsound=loadSound("lost.wav");
  gosound=loadSound("GO.wav");
  winl1sound=loadSound("winL1.wav")
  finishsound=loadSound("finish.wav")
}

function setup(){
    createCanvas(1350,610);
  
     Bgrp=new Group()
     hgrp=new Group()

     //edgesprites
  p1=createSprite(220,300,1,100)
  p1.shapeColor="yellow"
  p2=createSprite(1200,300,1,100)
  p2.shapeColor="yellow"
  B1=createSprite(675,5,1350,10)
  B1.shapeColor="yellow"
  B2=createSprite(675,605,1350,10)
  B2.shapeColor="yellow"
  B3=createSprite(5,305,10,610);
  B3.shapeColor="yellow"
  B4=createSprite(1345,305,10,610)
  B4.shapeColor="yellow"
  //creating maze blocks
  b1= createSprite(65,250,300,15)
  b1.shapeColor="red"
  b2= createSprite(65,350,300,15)
  b2.shapeColor="blue"
  b3= createSprite(220,129,15,257)
  b3.shapeColor="green"
  b4= createSprite(330,80,15,175)
  b4.shapeColor="blue"
  b5=createSprite(220,480,15,275)
  b5.shapeColor="red"
  b6=createSprite(330,580,15,100)
  b6.shapeColor="purple"
  b7=createSprite(525,530,405,15)
  b7.shapeColor="green"
  b8=createSprite(730,488,15,100)
  b8.shapeColor="blue"
  b9= createSprite(470,425,300,15)
  b9.shapeColor="green"
  b10=createSprite(328,400,15,60)
  b10.shapeColor="red"
  b11=createSprite(430,370,220,15)
  b11.shapeColor="purple"
  b12=createSprite(535,300,15,150)
  b12.shapeColor="blue"
  b13=createSprite(383,170,120,15)
  b13.shapeColor="red"
  b14=createSprite(400,225,15,100)
  b14.shapeColor="green"
  b15=createSprite(620,295,15,275)
  b15.shapeColor="blue"
  b16=createSprite(560,50,15,100)
  b16.shapeColor="green"
  b17=createSprite(798,431,150,15)
  b17.shapeColor="purple"
  b18=createSprite(700,10,15,50)
  b18.shapeColor="purple"
  b19=createSprite(720,150,15,130)
  b19.shapeColor="blue"
  b20=createSprite(795,220,165,15)
  b20.shapeColor="red"
  b21=createSprite(875,278,15,130)
  b21.shapeColor="green"
  b22=createSprite(700,320,150,15)
  b22.shapeColor="red"
  b23=createSprite(768,338,15,25)
  b23.shapeColor="green"
  b24=createSprite(900,300,40,15)
  b24.shapeColor="red"
  b25=createSprite(1300,250,200,15)
  b25.shapeColor="red"
  b26=createSprite(1200,125,15,264)
  b26.shapeColor="purple"
  b27=createSprite(1010,300,50,15)
  b27.shapeColor="red"
  b28=createSprite(1030,222,15,170)
  b28.shapeColor="green"
  b29=createSprite(937,140,200,15)
  b29.shapeColor="blue"
  b30=createSprite(1300,350,300,15)
  b30.shapeColor="green"
  b31=createSprite(1158,370,15,30)
  b31.shapeColor="red"
  b32=createSprite(880,473,15,100)
  b32.shapeColor="green"
  b33=createSprite(1081,392,170,15)
  b33.shapeColor="blue"
  b34=createSprite(990,510,15,250)
  b34.shapeColor="purple"
  b35=createSprite(932,520,118,15)
  b35.shapeColor="red"
  b36=createSprite(1170,160,40,15)
  b36.shapeColor="blue"
  b37=createSprite(1020,50,350,15)
  b37.shapeColor="red"

  //win
  win=createSprite(665,300,30,30);
  win.addImage(winimg);
  win.scale=0.5;
  win.visible=false;

  //cat sprite
  cat=createSprite(90,300,20,20)
  cat.addImage(catimg);
  cat.scale=0.14;

  //humans
  h1=createSprite(490,200,20,20);
  h1.velocityY=4
  h1.velocityX=2
  h1.addImage(pmimg);
  h1.scale=0.13;
  h2=createSprite(280,500,20,20)
  h2.velocityX=1;
  h2.velocityY=5;
  h2.addImage(pmimg);
  h2.scale=0.13;
  h3=createSprite(675,263,20,20);
  h3.velocityY=3;
  h3.velocityX=5
  h3.addImage(pmimg);
  h3.scale=0.11;
  h3.visible=false;
  h4=createSprite(952,118,20,20);
  h4.velocityX=4;
  h4.velocityY=6; 
  h4.addImage(pmimg);
  h4.scale=0.13;

  //food
  bowl=createSprite(570,395,10,10);
  bowl.addImage(bowlimg);
  bowl.scale=0.07;
  bowl1=createSprite(240,570,10,10);
  bowl1.addImage(bowlimg);
  bowl1.scale=0.07;
  bowl2=createSprite(977,173,10,10);
  bowl2.addImage(bowlimg);
  bowl2.scale=0.07;
  fish=createSprite(490,160,10,10);
  fish.addImage(fishimg);
  fish.scale=0.07;
  fish1=createSprite(650,360,10,10);
  fish1.addImage(fishimg);
  fish1.scale=0.07;
  fish2=createSprite(915,490,10,10);
  fish2.addImage(fishimg);
  fish2.scale=0.07;
  milk=createSprite(476,456,10,10);
  milk.addImage(milkimg);
  milk.scale=0.05;
  milk1=createSprite(766,40,10,10);
  milk1.addImage(milkimg);
  milk1.scale=0.06; 
  milk2=createSprite(1140,100,10,10);
  milk2.addImage(milkimg);
  milk2.scale=0.06;

  sb1=createSprite(1272,125,200,230);
  sb1.addImage(sb1img);
  sb1.scale=1;

  sb2=createSprite(1272,125,200,230);
  sb2.addImage(sb2img);
  sb2.scale=1;
  sb2.visible=false;

  ht1=createSprite(1070,500,20,20);
  ht1.addImage(htimg);
  ht1.scale=0.1
  ht2=createSprite(1150,500,20,20);
  ht2.addImage(htimg);
  ht2.scale=0.1
  ht3=createSprite(1230,500,20,20);
  ht3.addImage(htimg);
  ht3.scale=0.1

  dog=createSprite(55,305,10,10);
  dog.addImage(dogimg);
  dog.scale=0.2;
  dog.visible=false; 
  
  //game over image
  over=createSprite(700,300)
  over.addImage(overimg)
  over.scale=0.5
  over.visible=false;

  //dogfood
  bone=createSprite(250,52,10,10);
  bone.addImage(boneimg);
  bone.scale=0.08;
  bone.visible=false;
  bone1=createSprite(418,343,10,10);
  bone1.addImage(boneimg);
  bone1.scale=0.08;
  bone1.visible=false;
  bone2=createSprite(983,108,10,10);
  bone2.addImage(boneimg);
  bone2.scale=0.08;
  bone2.visible=false;
  cereal=createSprite(530,510,10,10);
  cereal.addImage(cerealimg);
  cereal.scale=0.04;
  cereal.visible=false;
  cereal1=createSprite(643,265,10,10);
  cereal1.addImage(cerealimg);
  cereal1.scale=0.04;
  cereal1.visible=false;
  cookie=createSprite(1000,335,10,10);
  cookie.addImage(cookieimg);
  cookie.scale=0.15;
  cookie.visible=false;
  cookie1=createSprite(1155,190,10);
  cookie1.addImage(cookieimg);
  cookie1.scale=0.15;
  cookie1.visible=false;
  cookie2=createSprite(295,570,10,10);
  cookie2.addImage(cookieimg);
  cookie2.scale=0.15;
  cookie2.visible=false;
  poison=createSprite(895,240,10,10);
  poison.addImage(poisonimg);
  poison.scale=0.12;
  poison.visible=false;
  poison1=createSprite(425,207,10,10);
  poison1.addImage(poisonimg);
  poison1.scale=0.12;
  poison1.visible=false;
  poison2=createSprite(843,240,10,10);
  poison2.addImage(poisonimg);
  poison2.scale=0.12;
  poison2.visible=false;

  //keyguide
  kg1=createSprite(100,500,10,10);
  kg1.addImage(kgimg);

  kg2=createSprite(100,500,10,10);
  kg2.addImage(kgimg2);
  kg2.visible=false;

  ms=createSprite(110,122,10,10);
  ms.addImage(msimg);

  ms1=createSprite(110,122,10,10);
  ms1.addImage(msimg1);
  ms1.visible=false;

  L1=createSprite(700,300,10,10);
  L1.addImage(L1img);
  //L1.scale=1.7
  L1.width=1300;
  L1.visible=false;

}
function draw(){
    background(backgroundimg)
    textSize(30)
    fill("Blue")
    textFont('Arabic');
    text("Score : "+Score,70,60)
    textFont('fontBold');
    textStyle(BOLDITALIC);
    fill("red")
    text("Key Guide",60,386)

    heartLives();
   collide();
   collide2();
   scoreIncrease();
   scoreIncrease2();

    //adding and bouncing off
  Bgrp.add(B1);
  Bgrp.add(B2);
  Bgrp.add(B3);
  Bgrp.add(B4);
  Bgrp.add(b1);
  Bgrp.add(b2);
  Bgrp.add(b3);
  Bgrp.add(b4);
  Bgrp.add(b5);
  Bgrp.add(b6);
  Bgrp.add(b7);
  Bgrp.add(b8);
  Bgrp.add(b9);
  Bgrp.add(b10);
  Bgrp.add(b11);
  Bgrp.add(b12);
  Bgrp.add(b13);
  Bgrp.add(b14);
  Bgrp.add(b15);
  Bgrp.add(b16);
  Bgrp.add(b17);
  Bgrp.add(b18);
  Bgrp.add(b19);
  Bgrp.add(b20);
  Bgrp.add(b21);
  Bgrp.add(b22);
  Bgrp.add(b23)
  Bgrp.add(b24)
  Bgrp.add(b25)
  Bgrp.add(b26)
  Bgrp.add(b27)
  Bgrp.add(b28)
  Bgrp.add(b29)
  Bgrp.add(b30)
  Bgrp.add(b31)
  Bgrp.add(b32)
  Bgrp.add(b33)
  Bgrp.add(b34)
  Bgrp.add(b35)
  Bgrp.add(b36)
  Bgrp.add(b37)
  hgrp.add(h1);
  hgrp.add(h2);
  hgrp.add(h3);
  hgrp.add(h4);
  cat.bounceOff(Bgrp);
  dog.bounceOff(Bgrp);
  hgrp.bounceOff(Bgrp);
  hgrp.bounceOff(p1);
  hgrp.bounceOff(p2);

 //dog movement
 if(keyDown(RIGHT_ARROW)){
    cat.x=cat.x+5
    cat.addImage(catimg);
    }
  if(keyDown(UP_ARROW)){
    cat.y=cat.y-4
  }
  if(keyDown(DOWN_ARROW)){
    cat.y=cat.y+4
  }
  if(keyDown(LEFT_ARROW)){
    cat.x=cat.x-4
    cat.addImage(catimg2)
  }

  if(dog.isTouching(p2) && Score>110){
    dog.visible=false;
    bone1.destroy();
    bone.destroy();
    bone2.destroy();
    cereal.destroy();
    cereal1.destroy();
    poison.destroy();
    poison1.destroy();
    poison2.destroy();
    cookie.destroy();
    cookie1.destroy();
    cookie2.destroy();
    ht1.destroy();
    ht2.destroy();
    ht3.destroy();
    h1.destroy();
    h2.destroy();
    h3.destroy();
    h4.destroy();
    kg1.destroy();
    kg2.destroy();
    win.visible=true;
    ms.destroy();
    ms1.destroy();
    finishsound.play();
  }
  
  if(cat.isTouching(p2) && Score>559){
  cat.destroy();
  bowl.destroy();
  bowl1.destroy()
  bowl2.destroy();
  milk.destroy();
  milk1.destroy();
  milk2.destroy();
  fish.destroy();
  fish1.destroy();
  fish2.destroy();
  h2.visible=true;
  bone.visible=true;
  bone1.visible=true;
  bone2.visible=true;
  cereal.visible=true;
  cereal1.visible=true;
  cookie.visible=true;
  cookie1.visible=true;
  cookie2.visible=true;
  poison.visible=true;
  poison1.visible=true;
  poison2.visible=true;
  dog.visible=true;
  h3.visible=true;
  sb1.visible=false;
  sb2.visible=true;
  kg1.visible=false;
  kg2.visible=true;
  ms.visible=false;
  ms1.visible=true;
  L1.visible=true;
  winl1sound.play();
  Score=0;
  lives=3;
  }
 
  if(keyDown(68)){
    dog.x=dog.x+5
    dog.addImage(dogimg);
    }
  if(keyDown(87)){
    dog.y=dog.y-3
  }
  if(keyDown(83)){
    dog.y=dog.y+4
  }
  if(keyDown(65)){
    dog.x=dog.x-4
    dog.addImage(dogbackimg);
  }

  if(mousePressedOver(L1)){
    L1.destroy();
    pointaddsound.play();
  }
 drawSprites();
}

function heartLives() {
  if(lives===3){
    ht1.visible=true;
    ht2.visible=true;
    ht3.visible=true;
  }
    if (lives == 2) {
      ht1.visible = false;
    }
    if (lives == 1) {
      ht2.visible = false;
    }
    if (lives == 0) {
      ht3.visible = false;
      h1.visible = false;
      h2.visible = false;
      h3.visible = false;
      h4.visible = false;
      cat.destroy();
      dog.destroy();
      over.visible=true;
     
    }
  }

  function collide(){
    if(cat.isTouching(hgrp)){
      lives=lives-1;
      cat.x=90;
      cat.y=300;
      pointlostsound.play();

    }
  }

  function collide2(){
    if(dog.isTouching(hgrp)){
      lives=lives-1;
      dog.x=90;
      dog.y=300;
      pointlostsound.play();

    }
  }

  function scoreIncrease(){

    if(cat.isTouching(bowl)){
      bowl.destroy();
      Score+=35;
      pointaddsound.play();
  }
  if(cat.isTouching(bowl1)){
    bowl1.destroy();
    Score+=35;
    pointaddsound.play();
}
  if(cat.isTouching(bowl2)){
  bowl2.destroy()
  Score+=35;
  pointaddsound.play();
}
if(cat.isTouching(milk)){
  milk.destroy();
  Score+=75;
  pointaddsound.play();
}
if(cat.isTouching(milk1)){
  milk1.destroy();
  Score+=75;
  pointaddsound.play();
}
if(cat.isTouching(milk2)){
  milk2.destroy();
  Score+=75;
  pointaddsound.play();
}
if(cat.isTouching(fish)){
  fish.destroy();
  Score+=150;
  pointaddsound.play();
}
if(cat.isTouching(fish1)){
  fish1.destroy();
  Score+=150;
  pointaddsound.play();
}
if(cat.isTouching(fish2)){
  fish2.destroy();
  Score+=150;
  pointaddsound.play();
}
  }

  function scoreIncrease2(){
    if(dog.isTouching(bone)){
      bone.destroy();
      Score=Score+70;
      pointaddsound.play();
    }
    if(dog.isTouching(bone1)){
      bone1.destroy();
      Score=Score+70;
      pointaddsound.play();
    }
    if(dog.isTouching(bone2)){
      bone2.destroy();
      Score=Score+70;
      pointaddsound.play();
    }
    if(dog.isTouching(cereal)){
      cereal.destroy();
      Score=Score+140;
      pointaddsound.play();
    }
    if(dog.isTouching(cereal1)){
      cereal1.destroy();
      Score=Score+140;
      pointaddsound.play();
    }
    if(dog.isTouching(cookie)){
      cookie.destroy();
      Score=Score+50;
      pointaddsound.play();
    }
    if(dog.isTouching(cookie1)){
      cookie1.destroy();
      Score=Score+50;
      pointaddsound.play();
    }
    if(dog.isTouching(cookie2)){
      cookie2.destroy();
      Score=Score+50;
      pointaddsound.play();
    }
    if(dog.isTouching(poison)){
      poison.destroy();
      Score=Score-50;
      pointlostsound.play();
    }
    if(dog.isTouching(poison1)){
      poison1.destroy();
      Score=Score-50;
      pointlostsound.play();
    }
    if(dog.isTouching(poison2)){
      poison2.destroy();
      Score=Score-50;
      pointlostsound.play();
    }
  }

  