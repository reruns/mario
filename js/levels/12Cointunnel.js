var onetwoCointunnel = Mario.onetwoCointunnel = function() {
  level = new Mario.Level({
    playerPos: [24,16],
    loader: Mario.onetwoCointunnel,
    background: "#000000",
    scrolling: false,
    coinSprite: function() {
      return new Mario.Sprite('sprites/items.png', [0,96],[16,16], 6,[0,0,0,0,1,2,1]);
    },
    floorSprite:  new Mario.Sprite('sprites/tiles.png', [0,32],[16,16],0),
    wallSprite: new Mario.Sprite('sprites/tiles.png', [32, 32],[16,16],0),
    brickSprite: new Mario.Sprite('sprites/tiles.png', [16, 0], [16,16], 0),
    brickBounceSprite: new Mario.Sprite('sprites/tiles.png',[32,0],[16,16],0),
    ublockSprite: new Mario.Sprite('sprites/tiles.png', [48, 0], [16,16],0),
    pipeLMidSprite: new Mario.Sprite('sprites/tiles.png', [0, 144], [16,16], 0),
    pipeRMidSprite: new Mario.Sprite('sprites/tiles.png', [16, 144], [16,16], 0),
    pipeLEndSprite: new Mario.Sprite('sprites/tiles.png', [0, 128], [16,16], 0),
    pipeREndSprite: new Mario.Sprite('sprites/tiles.png', [16, 128], [16,16], 0),
    pipeUpMid: new Mario.Sprite('sprites/tiles.png', [0, 144], [32,16], 0),
    pipeSideMid: new Mario.Sprite('sprites/tiles.png', [48, 128], [16,32], 0),
    pipeLeft: new Mario.Sprite('sprites/tiles.png', [32, 128], [16,32], 0),
    pipeTop: new Mario.Sprite('sprites/tiles.png', [0, 128], [32,16], 0),

    LPipeSprites:[
      new Mario.Sprite('sprites/tiles.png', [32,128],[16,16],0),
      new Mario.Sprite('sprites/tiles.png', [32,144],[16,16],0),
      new Mario.Sprite('sprites/tiles.png', [48,128],[16,16],0),
      new Mario.Sprite('sprites/tiles.png', [48,144],[16,16],0),
      new Mario.Sprite('sprites/tiles.png', [64,128],[16,16],0),
      new Mario.Sprite('sprites/tiles.png', [64,144],[16,16],0),
    ]

  });

  player.pos[0] = level.playerPos[0];
  player.pos[1] = level.playerPos[1];
  vX = 0;
  level.putFloor(0,16);
  level.putWall(0,13,11);
  level.putWall(3,10,1);
  level.putWall(4,10,1);
  level.putWall(5,10,1);
  level.putWall(6,10,1);
  level.putWall(7,10,1);
  level.putWall(8,10,1);
  level.putWall(9,10,1);
  level.putWall(10,10,1);
  level.putWall(11,10,1);
  level.putWall(12,10,1);
  level.putWall(13,10,1);
  level.putWall(14,10,1);
  level.putWall(13,9,1);
  level.putWall(14,9,1);
  level.putWall(13,8,1);
  level.putWall(14,8,1);
  level.putWall(13,7,1);
  level.putWall(14,7,1);
  level.putWall(13,11,1);
  level.putWall(14,11,1);
  walls = [3,4,5,6,7,8,9,10,11,12,13,14];

  walls.forEach(function(loc){
    level.putWall(loc,6,4);
  });

  coins = [[3,12], [4,12], [5,12], [6,12], [7,12],
          [8,12], [9,12], [10,12], [11,12],  [4,8],
          [5,8], [6,8], [7,8], [8,8], [9,8], [10,8], [11,8]];
  coins.forEach(function(pos){
    level.putCoin(pos[0],pos[1]);
  });

  level.putPipe(15,13,11);


    //level.putLeftPipe(13,11);
    level.putRealPipe(13 , 11 ,2, "RIGHT", function() {
      Mario.onetwotunnel.call();
      player.pos = [1848, 177]
      player.pipe("UP", function() {;});
    });




  music.overworld.pause();
  music.underground.currentTime = 0;
  music.underground.play();
};
