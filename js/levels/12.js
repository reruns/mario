var onetwo = Mario.onetwo = function() {
  //The things that need to be passed in are basically just dependent on what
  //tileset we're in, so it makes more sense to just make one variable for that, so
  //TODO: put as much of this in the Level object definition as possible.
  level = new Mario.Level({
    levelNumber: 1,
    playerPos: [35,192],
    loader: Mario.onetwo,
    background: "#7974FF",
    scrolling: true,
    invincibility: [144, 192, 240],
    exit: 204,
    floorSprite:  new Mario.Sprite('sprites/tiles.png', [0,0],[16,16],0),
    cloudSprite:  new Mario.Sprite('sprites/tiles.png', [0,320],[48,32],0),
    wallSprite: new Mario.Sprite('sprites/tiles.png', [0, 16],[16,16],0),

    houseRoofSprite: new Mario.Sprite('sprites/tiles.png', [176, 00],[16,16],0),
    houseRoofTopSprite: new Mario.Sprite('sprites/tiles.png', [176, 16],[16,16],0),
    houseSprite: new Mario.Sprite('sprites/tiles.png', [208, 00],[16,16],0),
    houseLeftWindowSprite: new Mario.Sprite('sprites/tiles.png', [192, 00],[16,16],0),
    houseRightWindowSprite: new Mario.Sprite('sprites/tiles.png', [224, 00],[16,16],0),
    houseDoorTopSprite: new Mario.Sprite('sprites/tiles.png', [192, 16],[16,16],0),
    houseDoorBottomSprite: new Mario.Sprite('sprites/tiles.png', [208, 16],[16,16],0),


    LPipeSprites:[
      new Mario.Sprite('sprites/tiles.png', [32,128],[16,16],0),
      new Mario.Sprite('sprites/tiles.png', [32,144],[16,16],0),
      new Mario.Sprite('sprites/tiles.png', [48,128],[16,16],0),
      new Mario.Sprite('sprites/tiles.png', [48,144],[16,16],0),
      new Mario.Sprite('sprites/tiles.png', [64,128],[16,16],0),
      new Mario.Sprite('sprites/tiles.png', [64,144],[16,16],0),
    ],
    

    brickSprite: new Mario.Sprite('sprites/tiles.png', [16, 0], [16,16], 0),
    brickBounceSprite: new Mario.Sprite('sprites/tiles.png',[32,0],[16,16],0),
    rubbleSprite: function () {
      return new Mario.Sprite('sprites/items.png', [64,0], [8,8], 3, [0,1])
    },
    ublockSprite: new Mario.Sprite('sprites/tiles.png', [48, 0], [16,16],0),
    superShroomSprite: new Mario.Sprite('sprites/items.png', [0,0], [16,16], 0),
    fireFlowerSprite: new Mario.Sprite('sprites/items.png', [0,32], [16,16], 20, [0,1,2,3]),
    starSprite: new Mario.Sprite('sprites/items.png', [0,48], [16,16], 20, [0,1,2,3]),
    pipeLEndSprite: new Mario.Sprite('sprites/tiles.png', [0, 128], [16,16], 0),
    pipeREndSprite: new Mario.Sprite('sprites/tiles.png', [16, 128], [16,16], 0),
    pipeLMidSprite: new Mario.Sprite('sprites/tiles.png', [0, 144], [16,16], 0),
    pipeRMidSprite: new Mario.Sprite('sprites/tiles.png', [16, 144], [16,16], 0),

    pipeUpMid: new Mario.Sprite('sprites/tiles.png', [0, 144], [32,16], 0),
    pipeSideMid: new Mario.Sprite('sprites/tiles.png', [48, 128], [16,32], 0),
    pipeLeft: new Mario.Sprite('sprites/tiles.png', [32, 128], [16,32], 0),
    pipeTop: new Mario.Sprite('sprites/tiles.png', [0, 128], [32,16], 0),
    qblockSprite: new Mario.Sprite('sprites/tiles.png', [384, 0], [16,16], 8, [0,0,0,0,1,2,1]),
    bcoinSprite: function() {
      return new Mario.Sprite('sprites/items.png', [0,112],[16,16], 20,[0,1,2,3]);
    },
    cloudSprites:[
      new Mario.Sprite('sprites/tiles.png', [0,320],[16,32],0),
      new Mario.Sprite('sprites/tiles.png', [16,320],[16,32],0),
      new Mario.Sprite('sprites/tiles.png', [32,320],[16,32],0)
    ],
    hillSprites: [
      new Mario.Sprite('sprites/tiles.png', [128,128],[16,16],0),
      new Mario.Sprite('sprites/tiles.png', [144,128],[16,16],0),
      new Mario.Sprite('sprites/tiles.png', [160,128],[16,16],0),
      new Mario.Sprite('sprites/tiles.png', [128,144],[16,16],0),
      new Mario.Sprite('sprites/tiles.png', [144,144],[16,16],0),
      new Mario.Sprite('sprites/tiles.png', [160,144],[16,16],0)
    ],
    bushSprite: new Mario.Sprite('sprites/tiles.png', [176, 144], [48, 16], 0),
    bushSprites: [
     new Mario.Sprite('sprites/tiles.png', [176,144], [16,16],0),
     new Mario.Sprite('sprites/tiles.png', [192,144], [16,16],0),
     new Mario.Sprite('sprites/tiles.png', [208,144], [16,16],0)],
   goombaSprite: function() {
     return new Mario.Sprite('sprites/enemy.png', [0, 16], [16,16], 3, [0,1]);
   },
   koopaSprite: function() {
     return new Mario.Sprite('sprites/enemy.png', [96,0], [16,32], 2, [0,1]);
   },
   flagPoleSprites: [
     new Mario.Sprite('sprites/tiles.png', [256, 128], [16,16], 0),
     new Mario.Sprite('sprites/tiles.png', [256, 144], [16,16], 0),
     new Mario.Sprite('sprites/items.png', [128, 32], [16,16], 0)
   ]
 });
  ground = [[0,16]];
  player.pos[0] = level.playerPos[0];
  player.pos[1] = level.playerPos[1];
  vX = 0;

  //build THE GROUND
  ground.forEach(function(loc) {
    level.putFloor(loc[0],loc[1]);
  });

  //build scenery
  clouds = [[9,7]];
  clouds.forEach(function(cloud){
    level.putCloud(cloud[0],cloud[1]);
  });

  twoClouds = [[3,3]];
  twoClouds.forEach(function(cloud){
    level.putTwoCloud(cloud[0],cloud[1]);
  });

  //interactable terrain
  

  level.buildHouse(0, 11);
  level.buildHouse(0, 12);
  level.buildHouse(1, 11);
  level.buildHouse(1, 12);
  level.buildHouse(3, 11);
  level.buildHouse(3, 12);
  level.buildHouse(4, 11);
  level.buildHouse(4, 12);
  level.buildHouseDoorBottom (2, 12);
  level.buildHouseDoorTop (2, 11);
  level.buildHouseRoof(0, 10);
  level.buildhouseRoofTop(1, 10);
  level.buildhouseRoofTop(2, 10);
  level.buildhouseRoofTop(3, 10);
  level.buildHouseRoof(4, 10);
  level.buildHouseLeftWindow (1, 9);
  level.buildHouseRoof(1, 8);
  level.buildHouseRoof(2, 8);
  level.buildHouseRoof(3, 8);
  level.buildHouseRightWindow (3, 9);
  level.buildHouse(2, 9);


  level.putPipe(12, 13, 4);

  
  //level.putLeftPipe(10, 11, 4);

 

  level.putRealPipe(10 , 11 ,3,"RIGHT", function() {
    Mario.onetwotunnel.call();
    player.pos = [42,0]
    player.pipe("DOWN", function() {;});
  });
  
  

  music.underground.pause();
  // music.overworld.currentTime = 0;
  music.overworld.play();
};



function levelIsComplete() {
  return player.pos[0] >= 198 * 16; 
}
