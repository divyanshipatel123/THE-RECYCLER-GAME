 /* THIS CLASS CONTAINS ALL THE INFORMATION AND STRUCTURE OF EVERY SCENE 
 LIKE HOW TO SPAW THE DIFFERENT OBSTACLE AND GARBAGE ACCORDING TO DIFFERENT SCENE
 THERE WILL BE THREE FUNCTION FOR EVERY SCENE  */
 

 function createVillageScene(){
    //the village scene and its component
    path.addImage('path' , pathImg1);
     spawnBioWaste(60);
     spawnNonBioWaste(100);
     spawnEWaste(200);

     spawnvillageObs(40);
     distanceCovered = -5000;
    
 }

 function createCityScene(){
     // add any city road image
     path.addImage('path' , pathImg2);
     path.scale = 1.5;
      //spawning wastes
      spawnBioWaste(95);
      spawnNonBioWaste(60);
      spawnEWaste(60);
      //spawning obstacles
      spawncityObs(80);
      distanceCovered = -8000;
    
 }


 function createInsdrialArea(){
    // add any city road image
    path.addImage('path',pathImg3);
     //spawning wastes
     spawnBioWaste(150);
     spawnNonBioWaste(100);
     spawnEWaste(60);
     //spawning obstacles
     spawncityObs(80);
     distanceCovered = -8500   
}