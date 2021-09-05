/*this class contains all the function for different game states like start play etc telling how 
the game state will be changing and ahow eacj level should appear in the game (according to the level and gamestate)*/

class Game{
    constructor(){   
     this.playButton = createButton(" PLAY ");
     this.play = createButton(' NEXT LEVEL');
     this.play.hide();
     this.restartLevel = createButton('RESTART');
     this.restartLevel.hide();
    }

 start(){
     textSize(40);
     fill('green');
     text('THE RECYCLER GAME' , displayWidth/2 - 650 , displayHeight/2 - 400 );
   //background(this.homescreenImg);
   textSize(25);
   fill('black');
   text('HOW TO PLAY : ',displayWidth/2 - 700, displayHeight/2 - 200 );
   text('USE ARROW KEYS TO MOVE UP , RIGHT AND LEFT ',displayWidth/2 - 700, displayHeight/2 - 150 );
   text('YOU HAVE TO COLLECT THE GARBAGE AND SEGREGATE THEM TO THE CATEGORY OF BIO , NON BIO  , AND E WASTE: ',displayWidth/2 - 700, displayHeight/2 - 100 );
   text('TO COLLECT GARBAGE TOUCH, AND PRESS B IF YOU THINK IT IS  BIO - DEGRADABLE WASTE' ,displayWidth/2 - 700 , displayHeight/2 - 50 );
   text('PRESS N FOR NON BIO WASTE AND V FOR E WASTE' ,displayWidth/2 - 700 , displayHeight/2  );
   fill('red');
   text('(if you will press wrong key one life will be reduced out of the three lives and if all three lives are gone you will loose the game )' ,displayWidth/2 - 700 , displayHeight/2 + 50);
   
   this.playButton.position(displayWidth/2 , displayHeight/2 + 150);
   this.playButton.style('color : green');
   this.playButton.style('width', '100px');
   this.playButton.style('height', '50px')

   this.playButton.mousePressed(()=>{
    gameState = 1;
    this.playButton.hide();
    LEVEL = 1;
    warning1 = 2;
       
   })
      

 }
 Play(){

   //if level and gamestate is one then create village scene
   if(LEVEL === 1 && gameState === 1 && levelCompleted === false){
     textSize(20);
     fill('lightGreen');
     text('Bio Waste Collected  : ' + bioScore ,  camera.position.x + 450, runner.y - 400);
     fill('lightPink');
     text('Non Bio Waste Collected  : ' + nonBioScore , camera.position.x + 450 ,  runner.y  - 350);
     fill('lightBlue');
     text('E Waste Collected  : ' + eWasteScore ,  camera.position.x + 450 ,  runner.y  - 300);
     fill('red');
     text('W A R N I N G : ' + warning1,  camera.position.x - 650, runner.y - 400);
     fill('white');
     text('LIVES LEFT : ' + lives ,  camera.position.x - 650, runner.y - 350);
     textSize(25);
     fill('white');
     text('Level :  '+ LEVEL + ' Village Area' , camera.position.x - 50, runner.y - 400);

     createVillageScene();
     
   }
    
   //if level is 2 and gamestate is one then create city scene
   if(LEVEL === 2 && gameState === 1 && levelCompleted === false){
     textSize(20);
     fill('lightGreen');
     text('Bio Waste Collected  : ' + bioScore ,  camera.position.x + 450, runner.y - 400);
     fill('lightPink');
     text('Non Bio Waste Collected  : ' + nonBioScore , camera.position.x + 450 ,  runner.y  - 350);
     fill('lightBlue');
     text('E Waste Collected  : ' + eWasteScore ,  camera.position.x + 450 ,  runner.y  - 300);
     fill('red');
     text('W A R N I N G : ' + warning1,  camera.position.x - 650, runner.y - 400);
     fill('white');
     text('LIVES LEFT : ' + lives ,  camera.position.x - 650, runner.y - 350);
     textSize(25);
     fill('white');
     text('Level :  '+ LEVEL + '  City Area' , camera.position.x - 50, runner.y - 400);
     
     createCityScene();
   }
    
 
   //if level is 3 and gamestate is one then create industrial area scene
   if(LEVEL === 3 && gameState === 1 && levelCompleted === false){
          
     textSize(20);
     fill('lightGreen');
     text('Bio Waste Collected  : ' + bioScore ,  camera.position.x + 450, runner.y - 400);
     fill('lightPink');
     text('Non Bio Waste Collected  : ' + nonBioScore , camera.position.x + 450 ,  runner.y  - 350);
     fill('lightBlue');
     text('E Waste Collected  : ' + eWasteScore ,  camera.position.x + 450 ,  runner.y  - 300);
     fill('red');
     text('W A R N I N G : ' + warning1,  camera.position.x - 650, runner.y - 400);
     fill('white');
     text('LIVES LEFT : ' + lives ,  camera.position.x - 650, runner.y - 350);
     textSize(25);
     fill('white');
     text('Level :  '+ LEVEL + '  Industrial Area' , camera.position.x - 50, runner.y - 400);

     createInsdrialArea();
     
   }


  }
  playLevel(){
    if(LEVEL ===1 ||LEVEL === 2 || LEVEL ===3 && gameState === 0 && levelCompleted === true){
      obstacleGrp.destroyEach();
      if(bioScore >= 20 && nonBioScore>= 20 && eWasteScore >= 20 || bioScore >= 20 && nonBioScore>= 15 && eWasteScore >= 5 && LEVEL === 2 && gameState === 0){
        this.showMessage();
      }else if(bioScore >= 5 || nonBioScore>= 5 || eWasteScore >= 5){
        textSize(30);
        fill('black');
        text('YAY!! you did it, you have completed the level', displayWidth/2 - 200 , displayHeight/2 -150 );
        fill('brown');
        text('Hmm , I see you you did well , ', displayWidth/2 - 200, displayHeight/2 - 100);
        fill('red');
        text('"BUT" you can always do better. Keep up the good work', displayWidth/2 - 200, displayHeight/2 - 50 );
       }else if(bioScore===0  && nonBioScore ===0 && eWasteScore===0){
        textSize(30);
        fill('black');
        text('No garbage from your side ??', displayWidth/2 - 700 , displayHeight/2 -150 );
        fill('brown')
        text('"Press B to collect the biodegradable garbage press N for the non- biodegradable waste and V for the E-WASTE"', displayWidth/2 - 700, displayHeight/2 - 100);
        fill('red')
        text('Collect the garbage to help in the cleaning of the environment. GOOD LUCK!!', displayWidth/2 - 700, displayHeight/2 - 50 );
       }
      this.play.position(displayWidth/2 , displayHeight/2);
      this.play.style('color : green');
      this.play.show();
      if(nonBioScore >0 || bioScore > 0 ||eWasteScore >0){
        win.play();
       }
      this.play.mousePressed(()=>{
        obstacleGrp.destroyEach();
        gameState = 1;
        runner.y  = 732;
        this.play.hide();
        levelCompleted=false;
         bioScore = 0;
         nonBioScore = 0;
         eWasteScore = 0;  
       })

    
    }

 }

 end(){
  
   console.log('HELLO WORLD' + '  gamestate' + gameState + ' level ' + LEVEL + '  ,levelcomp var ' + levelCompleted);
    if(LEVEL === 4 && gameState === 0 && levelCompleted === true && bioScore===0  && nonBioScore ===0 && eWasteScore===0){
       textSize(25);
       fill('red');
       text('You have not collected any garbage ?', displayWidth/2 - 350 , displayHeight/2-300   );
       fill('black')
       text( 'Hmm , lets try one more time. PRESS RESTART and Try Again ', displayWidth/2 -350 , displayHeight/2 -250 );
       text('You can always try to do better , Try Again and Learn something New !!', displayWidth/2 - 350  , displayHeight/2  -200);
    }else if(bioScore >0  || nonBioScore > 0 || eWasteScore > 0){
        textSize(25);
        fill('black')
    text('YOU DID IT!! YOU HAVE LEARNT HOW TO RECYCLE ', displayWidth/2 - 300 , displayHeight/2-300   );
    text( 'YOU HAVE TURNED THE WASTE TO RESOURSEFULL AND CREATIVE THINGS ', displayWidth/2 -300 , displayHeight/2 -250 );
    text('NOW TELL YOUR FIENDS ABOUT WHAT YOU HAVE LEARNT ', displayWidth/2 - 300  , displayHeight/2  -200);
    fill(rgb(1 , 68 , 33))
    text('RECYCLE AND HELP TO SAVE THE PLANET!!', displayWidth/2 - 300 , displayHeight/2 + -50);
        
     win.play();
    }
   
   
     
    this.restartGame();
 }

 restartGame(){

  camera.position.y = displayHeight/2;
  
  this.restartLevel.position(displayWidth/2,  displayHeight/2 + 50);
  this.restartLevel.style('color : green');
  this.restartLevel.show();
  this.restartLevel.mousePressed(()=>{this.restart()});

 }
 restart(){
  lives = 3;
  warning1 = 2;
  this.restartLevel.hide();
  runner.y = 732;
  gameState = 1 ;
  levelCompleted = false;
  camera.position.y = runner.y;
  camera.position.x = displayWidth/2;
  LEVEL = 1;
  obstacleGrp.destroyEach();
  bioWasteGroup.destroyEach();
  nonBioWasteGroup.destroyEach();
  eWasteGroup.destroyEach();
  bioScore = 0;
  nonBioScore = 0;
  eWasteScore = 0;
  
 }

 showMessage(){

  switch(LEVEL){

     case 2: fill('black');
             textSize(27)
             text('YAY you did it you have completed level one ', displayWidth/2 -250 , displayHeight/2 - 150 );
             text( 'THERE IS MORE TO LEARN ', displayWidth/2 - 250 , displayHeight/2 - 100 );
             text('Recycling is the way to be resourcefull', displayWidth/2 -250 , displayHeight/2  - 50);
             break;
    case 3: fill('black');
            textSize(27)
            text('You are doing an amazing job way to the second level is open', displayWidth/2 - 250 , displayHeight/2  - 150);
            text('GO AND RECYCLE ', displayWidth/2 - 250 , displayHeight/2 - 100);
            text('Recycling turns things into other things. Which is like MAGIC', displayWidth/2 - 250 , displayHeight/2 - 50);
             break;
          
  }
 

 }

}


















