
//three waste Category groups this will check which group garbage belongs to
var bioWasteGroup;
var nonBioWasteGroup;
var eWasteGroup;

// group for the garbage
var obstacleGrp;


//all three kinds of waste ( variable for spawning )
var bioW , nonBioW , eW;

// all the obstacle foer every scene ( variable for spawning them )
var villageObs , cityObs , industryObs;

// loading biowasteImg
var rand ;
var rand2; 
var  restartLevel = null;

//the three path img for path sprite because will keep changing
var  pathImg1, pathImg2 , pathImg3 ; 

//the image that will come at the play button scene
var homescreenImg;
 
var warningSign, warningImg; 
var liveWarning  ,liveWarningImg;

// the player variable 
var runner , runnerImg; 

//path variable
var path;

//gameState lives and warning variable 
var gameState = 0 ;
var lives = 3 ;
var  warning1 = 2 ;
var game ;

var bioScore  = 0;
var nonBioScore = 0;
var eWasteScore = 0;

//level variable. This will increment after every level so according to this and gameState we can change the level
var LEVEL = 0;
 var levelCompleted = false;

//distance variable craeting
 var distanceCovered = 600;


 // declaring variable for images of the garbages 
 var bio1Img  , bio2Img , bio3Img , bio4Img , bio5Img , bio6Img;
 var non1Img , non2Img , non3Img , no41Img , non5Img , non6Img;
 var eWImg1 , eWImg2 ,eWImg3 ,eWImg4 ,eWImg5 ,eWImg6;

 // declaring images for village images 
 var  villageObs1 ,villageObs2, villageObs3 , villageObs4, villageObs5 , villageObs6;
 var cityObs1 , cityObs2, cityObs3, cityObs4 , cityObs5  , cityObs6;

 //declaring variables for sounds
 var checkpoint , win , lose  , lostGame;

function preload()
{
	//home page img
	homescreenImg = loadImage('homeScreen.jpg');

	//the three path img
	pathImg1 = loadImage('Villageground.jpg');
    pathImg2 = loadImage('road1.png');
	pathImg3 = loadImage('road2.jpg');

	//runner img
    runnerImg = loadAnimation('Runner-1.png','Runner-2.png');

   //warnings
	liveWarningImg = loadImage('warninSingForLives.jpg');
	warningImg = loadImage('warninOnTouchingObs.jpg');
 





////////	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  ////////////

	// loading images of bio waste
	bio1Img = loadImage('wasteImages/bioWasteImages/apple.png');
	bio2Img = loadImage('wasteImages/bioWasteImages/avacado.png')
	bio3Img = loadImage('wasteImages/bioWasteImages/banana.png')
	bio4Img = loadImage('wasteImages/bioWasteImages/capsicum.png')
	bio5Img = loadImage('wasteImages/bioWasteImages/onion.png')
	bio6Img = loadImage('wasteImages/bioWasteImages/brinjal.png')
	
   
	//loading images foe non bio waste
	non1Img = loadImage('wasteImages/nonBioWasteImage/bottle.png');
	non2Img = loadImage('wasteImages/nonBioWasteImage/can.png');
	non3Img = loadImage('wasteImages/nonBioWasteImage/chips.png');
	non4Img = loadImage('wasteImages/nonBioWasteImage/cup.png');
	non5Img = loadImage('wasteImages/nonBioWasteImage/plasticBag.png');
	non6Img = loadImage('wasteImages/nonBioWasteImage/pvc.png');
   
   // loading e waste images 
	eWImg1 = loadImage('wasteImages/eWasteImages/battery.png');
	eWImg2 = loadImage('wasteImages/eWasteImages/bulb.png');
	eWImg3 = loadImage('wasteImages/eWasteImages/cd.png');
	eWImg4 = loadImage('wasteImages/eWasteImages/circuit.png');
	eWImg5 = loadImage('wasteImages/eWasteImages/computer.png');
	eWImg6 = loadImage('wasteImages/eWasteImages/plug.png');
	
   //loading the village obstacle images 
	villageObs1 = loadImage('obstacles/village/bark.png');
	villageObs2 = loadImage('obstacles/village/cow.png');
	villageObs3 = loadImage('obstacles/village/hayStack.png');
	villageObs4 = loadImage('obstacles/village/hoe.png');
	villageObs5 = loadImage('obstacles/village/rock.png');
	villageObs6 = loadImage('obstacles/village/tree.png');
   
	//loading the city obstacle images
	cityObs1 = loadImage('obstacles/city/car final.png');
	cityObs2 = loadImage('obstacles/city/car5.png');
	cityObs3 = loadImage('obstacles/city/cement.png');
	cityObs4 = loadImage('obstacles/city/truck.png');
	cityObs5 = loadImage('obstacles/city/truck2.png');

	//loading sound for the game
	checkpoint = new Audio('checkpoint.mp3');
	win = new Audio('applause2.wav');
	lose = new Audio('loose.wav');
	lostGame = new Audio('lostGame2.wav');

}

function setup() {
	createCanvas(displayWidth, displayHeight);

    game = new Game(); 

	//Create the Bodies Here.
    
	// craeting the groups
	bioWasteGroup = new Group();
    nonBioWasteGroup = new Group();
    eWasteGroup = new Group();

	obstacleGrp = new Group();

	//creating path sprite
    path  = createSprite(displayWidth/2 , -displayHeight*2.9, displayWidth , displayHeight*5);
    //creating the player sprite
	runner = createSprite(displayWidth/2 , displayHeight/2 + 300 , 650 , 30 , 80);
	runner.addAnimation('boyRunning',runnerImg);
	runner.scale = 0.15;
	//runner.debug = true;
	runner.setCollider('circle' ,0 ,0 ,300)

    camera.position.y = displayHeight/2;
	camera.position.x = displayWidth/2;

	// creating garbage groups
	bioWasteGroup = new Group();
    nonBioWasteGroup = new Group();
    eWasteGroup = new Group();
    
  
}


function draw() {
  rectMode(CENTER);
  background(homescreenImg);
 

 //console.log("THE SPEED OF THE RUNNER  " + runner.y);
 //console.log('the camera position ' + camera.position.y)
 
  if(runner.y  <= distanceCovered && gameState === 1){
	LEVEL++;
	levelCompleted = true;
	gameState = 0;
 }
  
  if(gameState === 0 && LEVEL  === 0){
	  game.start();
  } 

   
  if(gameState === 1){
	drawSprites();
	game.Play();	
	sysytemUI();
	camera.position.y = runner.y;
	camera.position.x = displayWidth/2;
	collectingGarbage();
 } 
  console.log(' the lenth of the obstcale group array ' + obstacleGrp.length)
  if(gameState === 0 && LEVEL !==0 && levelCompleted === true){
	  camera.position.y = displayHeight/2;
	  game.playLevel();
  }
 
  if(LEVEL > 3  && gameState === 0 && levelCompleted === true ){
	 runner.y  = 732;
	 console.log('GAME ENDED YOU WON')
	 game.end();
	 if(nonBioScore >0 || bioScore > 0 ||eWasteScore >0){
		win.play();
	 }
		 
  } 
  
  for (var i = 0; i < obstacleGrp.length; i++) {
	if (obstacleGrp.get(i).isTouching(runner) && gameState === 1 ) {
		console.log('the runner is hitting a obstacle'  + obstacleGrp.get(i))
		console.log('warnings before warning reduced   ' + warning1+ '   and the level ' + LEVEL +'   and the gameState  ' + gameState)
		obstacleGrp.get(i).destroy();
		warning1 = warning1 - 1;
		warningSign = createSprite(camera.position.x, camera.position.y - 200, 250 , 100);
        warningSign.addImage('sign' , warningImg);
        warningSign.scale = 0.25;
		warningSign.visible = true;
	    warningSign.lifetime = 100;
		lose.play();
		
	}
 }
   
  

  if(lives === 0 || warning1 === 0 && gameState === 1){	 
	 lostGame.play();	
	 gameState = 0;
	 camera.position.y = displayHeight/2;
	 game.restartGame();
	 
  }

}
	  
function sysytemUI(){
	if(keyDown(UP_ARROW) || keyDown('W')){
		runner.y = runner.y - 10;
	}
	if(keyDown(RIGHT_ARROW) || keyDown('D')){
		runner.x = runner.x + 10;
	}
	if(keyDown(LEFT_ARROW) || keyDown('A')){
		runner.x = runner.x - 10;
	}
	
}

function collectingGarbage(){
	
 for (var i = 0; i < bioWasteGroup.length; i++) {
                            
	if (bioWasteGroup.get(i).isTouching(runner) && keyWentDown('B')) {
		bioWasteGroup.get(i).destroy();
		bioScore = bioScore + 5;
		checkpoint.play();
		
	}
	else if(bioWasteGroup.get(i).isTouching(runner) && (keyWentDown('N')||keyWentDown('E'))){
		liveWarning = createSprite(camera.position.x - 100 ,camera.position.y  - 100, 250 , 100);
        liveWarning.addImage('sign2', liveWarningImg);
        liveWarning.scale = 0.24;
        liveWarning.visible = true;
        liveWarning.lifetime=100;
		lose.play();
		lives = lives - 1;
	}
}

for (var i = 0; i < nonBioWasteGroup.length; i++) {
                            
	if (nonBioWasteGroup.get(i).isTouching(runner) && keyWentDown('N')) {
		nonBioWasteGroup.get(i).destroy();
		nonBioScore = nonBioScore + 5;
		checkpoint.play()
		
	}
	else if(nonBioWasteGroup.get(i).isTouching(runner) && (keyWentDown('B')||keyWentDown('E'))){
		liveWarning = createSprite(camera.position.x - 100 ,camera.position.y  - 100, 250 , 100);
        liveWarning.addImage('sign2', liveWarningImg);
        liveWarning.scale = 0.24;
        liveWarning.visible = true;
        liveWarning.lifetime=100;
		lose.play();
		lives = lives - 1;
	}
}

for (var i = 0; i < eWasteGroup.length; i++) {
                            
	if (eWasteGroup.get(i).isTouching(runner) && keyWentDown('V')) {
		eWasteGroup.get(i).destroy();
		eWasteScore = eWasteScore + 5
		checkpoint.play()
		
	}
	else if(eWasteGroup.get(i).isTouching(runner) && (keyWentDown('N')||keyWentDown('B'))){
		liveWarning = createSprite(camera.position.x - 100 ,camera.position.y  - 100, 250 , 100);
        liveWarning.addImage('sign2', liveWarningImg);
        liveWarning.scale = 0.24;
        liveWarning.visible = true;
        liveWarning.lifetime=100;
		lose.play();
		lives = lives - 1;
	}
}

}

