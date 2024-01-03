var onetwo = Mario.onetwo = function() {
  level = new Mario.Level({
    levelNumber: 2,
    playerPos: [56,192],
    loader: Mario.onetwo,
    background: "#000000",
    scrolling: true,
    invincibility: [144, 192, 240],
    exit: 204,
    floorSprite:  new Mario.Sprite('sprites/tiles.png', [0,32],[16,16],0),
    cloudSprite:  new Mario.Sprite('sprites/tiles.png', [0,352],[48,32],0),
    wallSprite: new Mario.Sprite('sprites/tiles.png', [0, 48],[16,16],0),
    brickSprite: new Mario.Sprite('sprites/tiles.png', [32, 32], [16,16], 0),
    brickBounceSprite: new Mario.Sprite('sprites/tiles.png',[32,32],[16,16],0),
    rubbleSprite: function () {
      return new Mario.Sprite('sprites/items.png', [64,0], [8,8], 3, [0,1])
    },
    ublockSprite: new Mario.Sprite('sprites/tiles.png', [48,32], [16,16],0),
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
    coinSprite: function() {
      return new Mario.Sprite('sprites/items.png', [0,96],[16,16], 6,[0,0,0,0,1,2,1]);
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
  ground = [[0,80],[83,120],[122, 124], [126,138], [145, 153], [160, 212]];
  player.pos[0] = level.playerPos[0];
  player.pos[1] = level.playerPos[1];
  vX = 0;

  //build THE GROUND
  ground.forEach(function(loc) {
    level.putFloor(loc[0],loc[1]);
  });

  level.putBrick(0, 2, null );
  level.putBrick(0, 3, null );
  level.putBrick(0, 4, null );
  level.putBrick(0, 5, null );
  level.putBrick(0, 6, null );
  level.putBrick(0, 7, null );
  level.putBrick(0, 8, null );
  level.putBrick(0, 9, null );
  level.putBrick(0, 10, null );
  level.putBrick(0, 11, null );
  level.putBrick(0, 12, null );

  //Build ceiling 
  for (let x = 6; x <= 138; x++) {
    level.putBrick(x, 2, null);
  }
  level.putQBlock(10, 9, new Mario.Mushroom([160, 144]));
  level.putQBlock(11, 9, new Mario.Bcoin([175, 144]));
  level.putQBlock(12, 9, new Mario.Bcoin([190, 144]));
  level.putQBlock(13, 9, new Mario.Bcoin([205, 144]));
  level.putQBlock(14, 9, new Mario.Bcoin([220, 144]));
  level.putWall(17, 13, 1);
  level.putWall(19, 13, 2);
  level.putWall(21, 13, 3);
  level.putWall(23, 13, 4);
  level.putWall(25, 13, 4);
  level.putWall(27, 13, 3);
  level.putBrick(29, 8, new Mario.Bcoin([465, 80]) );
  level.putWall(31, 13, 3);
  level.putWall(33, 13, 2);
  level.putBrick(39, 9, null );
  level.putBrick(39, 8, null );
  level.putBrick(39, 7, null );
  level.putBrick(40, 9, null );
  level.putBrick(41, 9, null );
  level.putBrick(41, 8, null );
  level.putBrick(41, 7, null );
  level.putBrick(42, 7, null );
  level.putBrick(43, 7, null );
  level.putBrick(44, 9, null );
  level.putBrick(44, 8, null );
  level.putBrick(44, 7, null );
  level.putBrick(45, 9, null );
  level.putBrick(46, 9, null );
  level.putBrick(46, 8, null );
  level.putBrick(46, 7, new Mario.Star([745, 80]) );
  coins = [[40, 8], [41, 5], [42, 5], [43, 5], [44, 5], [45, 8], [58, 8], [59, 8], [60, 8], [61, 8], [68, 8], [84, 5], [85, 5], [86, 5], [87, 5], [88, 5], [89, 5]];
  coins.forEach(function(pos){
  level.putCoin(pos[0],pos[1]);
  });
  level.putBrick(54, 3, null );
  level.putBrick(54, 4, null );
  level.putBrick(55, 3, null );
  level.putBrick(55, 4, null );
  level.putBrick(52, 5, null );
  level.putBrick(52, 6, null );
  level.putBrick(52, 7, null );
  level.putBrick(52, 8, null );
  level.putBrick(52, 9, null );
  level.putBrick(53, 5, null );
  level.putBrick(53, 6, null );
  level.putBrick(53, 7, null );
  level.putBrick(53, 8, null );
  level.putBrick(53, 9, null );
  level.putBrick(54, 9, null );
  level.putBrick(54, 10, null );
  level.putBrick(54, 11, null );
  level.putBrick(55, 9, null );
  level.putBrick(55, 10, null );
  level.putBrick(55, 11, null );
  level.putBrick(58, 3, null );
  level.putBrick(58, 4, null );
  level.putBrick(59, 3, null );
  level.putBrick(59, 4, null );
  level.putBrick(60, 3, null );
  level.putBrick(60, 4, null );
  level.putBrick(61, 3, null );
  level.putBrick(61, 4, null );
  level.putBrick(62, 3, null );
  level.putBrick(62, 4, null );
  level.putBrick(62, 5, null );
  level.putBrick(62, 6, null );
  level.putBrick(62, 7, null );
  level.putBrick(62, 8, null );
  level.putBrick(62, 9, null );
  level.putBrick(63, 3, null );
  level.putBrick(63, 4, null );
  level.putBrick(63, 5, null );
  level.putBrick(63, 6, null );
  level.putBrick(63, 7, null );
  level.putBrick(63, 8, null );
  level.putBrick(63, 9, null );
  level.putBrick(62, 9, null );
  level.putBrick(61, 9, null );
  level.putBrick(60, 9, null );
  level.putBrick(59, 9, null );
  level.putBrick(58, 9, null );
  level.putBrick(66, 3, null);
  level.putBrick(66, 4, null);
  level.putBrick(67, 3, null);
  level.putBrick(67, 4, null);
  level.putBrick(68, 3, null);
  level.putBrick(68, 4, null);
  level.putBrick(69, 3, null);
  level.putBrick(69, 4, null);
  level.putBrick(67, 5, null);
  level.putBrick(67, 6, null);
  level.putBrick(67, 7, null);
  level.putBrick(67, 8, null);
  level.putBrick(67, 9, null);
  level.putBrick(68, 9, null);
  level.putBrick(69, 9, null);
  level.putBrick(69, 8, Mario.Mushroom([1120, 144]) );
  level.putBrick(72, 9, null);
  level.putBrick(72, 8, null);
  level.putBrick(72, 7, null);
  level.putBrick(72, 6, null);
  level.putBrick(72, 5, null);
  level.putBrick(73, 9, null);
  level.putBrick(73, 8, null);
  level.putBrick(73, 7, null);
  level.putBrick(73, 6, null);
  level.putBrick(73, 5, null);
  level.putBrick(76, 9, null);
  level.putBrick(77, 9, null);
  level.putBrick(78, 9, null);
  level.putBrick(79, 9, null);
  level.putBrick(76, 3, null);
  level.putBrick(76, 4, null);
  level.putBrick(77, 3, null);
  level.putBrick(77, 4, null);
  level.putBrick(78, 3, null);
  level.putBrick(78, 4, null);
  level.putBrick(79, 3, null);
  level.putBrick(79, 4, null);
  level.putBrick(84, 7, null);
  level.putBrick(84, 8, null);
  level.putBrick(85, 7, null);
  level.putBrick(85, 8, null);
  level.putBrick(86, 7, null);
  level.putBrick(86, 8, null);
  level.putBrick(87, 7, null);
  level.putBrick(87, 8, null);
  level.putBrick(88, 7, null);
  level.putBrick(88, 8, null);
  level.putBrick(89, 7, null);
  level.putBrick(89, 8, null);
  level.putRealPipe(103, 10, 3, "DOWN", Mario.oneonetunnel);
  level.putPipe(109, 13, 4);
  level.putPipe(115, 13, 2);
  level.putBrick(122, 10, null);
  level.putBrick(122, 11, null);
  level.putBrick(122, 12, null);
  level.putBrick(123, 10, null);
  level.putBrick(123, 11, null);
  level.putBrick(123, 12, null);
  level.putWall(133, 13, 1);
  level.putWall(134, 13, 2);
  level.putWall(135, 13, 3);
  level.putWall(136, 13, 4);
  level.putWall(137, 13, 4);
  level.putBrick(145, 8, null);
  level.putBrick(146, 8, null);
  level.putBrick(147, 8, null);
  level.putBrick(148, 8, null);
  level.putBrick(149, 8, null);
  level.putBrick(150, 8, null);
  level.putBrick(160, 13, null);
  level.putBrick(160, 12, null);
  level.putBrick(161, 13, null);
  level.putBrick(161, 12, null);
  level.putBrick(162, 13, null);
  level.putBrick(162, 12, null);
  level.putBrick(163, 13, null);
  level.putBrick(163, 12, null);
  level.putBrick(164, 13, null);
  level.putBrick(164, 12, null);
  level.putBrick(165, 13, null);
  level.putBrick(165, 12, null);
  level.putBrick(166, 13, null);
  level.putBrick(166, 12, null);

  level.putFlagpole(198);

  //Add enemies
  level.putGoomba(14, 12);
  level.putGoomba(15.01, 12);
  level.putGoomba(29, 12);
  level.putKoopa(46, 11);
  level.putKoopa(47, 11);
  level.putKoopa(60, 11);
  level.putGoomba(68, 12);
  level.putGoomba(74, 12);
  level.putGoomba(78, 6);
  level.putGoomba(80, 6);
  level.putGoomba(96, 6);
  level.putGoomba(98, 6);
  level.putGoomba(100, 6);

  music.underground.pause();
  // music.overworld.currentTime = 0;
  music.overworld.play();
};

