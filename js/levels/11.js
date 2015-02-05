//all of this sprite setup lives here because it changes from level to level.
//When it's time to add more levels, we'll move the functions to a level.js file
//and turn each level/area into its own setup function
//which we call when it's time.

var oneone = Mario.oneone = function() {
  level = new Mario.Level({
    playerPos: [56,192],
    loader: Mario.oneone,
    floorSprite:  new Mario.Sprite('sprites/tiles.png', [0,0],[16,16],0),
    cloudSprite:  new Mario.Sprite('sprites/tiles.png', [0,320],[48,32],0),
    wallSprite: new Mario.Sprite('sprites/tiles.png', [0, 16],[16,16],0),
    brickSprite: new Mario.Sprite('sprites/tiles.png', [16, 0], [16,16], 0),
    brickBounceSprite: new Mario.Sprite('sprites/tiles.png',[32,0],[16,16],0),
    ublockSprite: new Mario.Sprite('sprites/tiles.png', [48, 0], [16,16],0),
    superShroomSprite: new Mario.Sprite('sprites/items.png', [0,0], [16,16], 0),
    pipeLEndSprite: new Mario.Sprite('sprites/tiles.png', [0, 128], [16,16], 0),
    pipeREndSprite: new Mario.Sprite('sprites/tiles.png', [16, 128], [16,16], 0),
    pipeLMidSprite: new Mario.Sprite('sprites/tiles.png', [0, 144], [16,16], 0),
    pipeRMidSprite: new Mario.Sprite('sprites/tiles.png', [16, 144], [16,16], 0),
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
     new Mario.Sprite('sprites/tiles.png', [208,144], [16,16],0)]
  })
  ground = [[0,69],[71,86],[89,153],[155,212]];

  //TODO: Put things other than mushrooms in blocks
  player = new Mario.Player([56,192]);

  //build THE GROUND
  ground.forEach(function(loc) {
    level.putFloor(loc[0],loc[1]);
  })

  //build scenery
  clouds = [[7,3],[19, 2],[56, 3],[67, 2],[87, 2],[103, 2],[152, 3],[163, 2],[200, 3]];
  clouds.forEach(function(cloud){
    level.putCloud(cloud[0],cloud[1]);
  })

  twoClouds = [[36,2],[132,2],[180,2]];
  twoClouds.forEach(function(cloud){
    level.putTwoCloud(cloud[0],cloud[1]);
  })

  threeClouds = [[27,3],[75,3],[123,3],[171,3]];
  threeClouds.forEach(function(cloud){
    level.putThreeCloud(cloud[0],cloud[1]);
  })

  bHills = [0,48,96,144,192]
  bHills.forEach(function(hill) {
    level.putBigHill(hill, 12);
  })

  sHills = [16,64,111,160];
  sHills.forEach(function(hill) {
    level.putSmallHill(hill, 12);
  })

  bushes = [23,71,118,167];
  bushes.forEach(function(bush) {
    level.putBush(bush, 12);
  })

  twoBushes = [41,89,137];
  twoBushes.forEach(function(bush) {
    level.putTwoBush(bush, 12);
  })

  threeBushes = [11,59,106];
  threeBushes.forEach(function(bush) {
    level.putThreeBush(bush, 12);
  });

  //interactable terrain
  level.putQBlock(16, 9, null);
  level.putBrick(20, 9, null);
  level.putQBlock(21, 9, new Mario.Mushroom([336, 144], level.superShroomSprite, level.items.length));
  level.putBrick(22, 9, null);
  level.putQBlock(22, 5, null);
  level.putQBlock(23, 9, null);
  level.putBrick(24, 9, null);
  level.putPipe(28, 13, 2);
  level.putPipe(38, 13, 3);
  level.putPipe(46, 13, 4);
  level.putPipe(57, 13, 4);
  level.putBrick(77, 9, null);
  level.putQBlock(78, 9, new Mario.Mushroom([1248, 144], level.superShroomSprite, level.items.length));
  level.putBrick(79, 9, null);
  level.putBrick(80, 5, null);
  level.putBrick(81, 5, null);
  level.putBrick(82, 5, null);
  level.putBrick(83, 5, null);
  level.putBrick(84, 5, null);
  level.putBrick(85, 5, null);
  level.putBrick(86, 5, null);
  level.putBrick(87, 5, null);
  level.putBrick(91, 5, null);
  level.putBrick(92, 5, null);
  level.putBrick(93, 5, null);
  level.putQBlock(94, 5, null);
  level.putBrick(94, 9, null);
  level.putBrick(100, 9, null);
  level.putBrick(101, 9, null);
  level.putQBlock(105, 9, null);
  level.putQBlock(108, 9, null);
  level.putQBlock(108, 5, null);
  level.putQBlock(111, 9, null);
  level.putBrick(117, 9, null);
  level.putBrick(120, 5, null);
  level.putBrick(121, 5, null);
  level.putBrick(122, 5, null);
  level.putBrick(123, 5, null);
  level.putBrick(128, 5, null);
  level.putQBlock(129, 5, null);
  level.putBrick(129, 9, null);
  level.putQBlock(130, 5, null);
  level.putBrick(130, 9, null);
  level.putBrick(131, 5, null);
  level.putWall(134, 13, 1);
  level.putWall(135, 13, 2);
  level.putWall(136, 13, 3);
  level.putWall(137, 13, 4);
  level.putWall(140, 13, 4);
  level.putWall(141, 13, 3);
  level.putWall(142, 13, 2);
  level.putWall(143, 13, 1);
  level.putWall(148, 13, 1);
  level.putWall(149, 13, 2);
  level.putWall(150, 13, 3);
  level.putWall(151, 13, 4);
  level.putWall(152, 13, 4);
  level.putWall(155, 13, 4);
  level.putWall(156, 13, 3);
  level.putWall(157, 13, 2);
  level.putWall(158, 13, 1);
  level.putPipe(163, 13, 2);
  level.putBrick(168, 9, null);
  level.putBrick(169, 9, null);
  level.putQBlock(170, 9, null);
  level.putBrick(171, 9, null);
  level.putPipe(179, 13, 2);
  level.putWall(181, 13, 1);
  level.putWall(182, 13, 2);
  level.putWall(183, 13, 3);
  level.putWall(184, 13, 4);
  level.putWall(185, 13, 5);
  level.putWall(186, 13, 6);
  level.putWall(187, 13, 7);
  level.putWall(188, 13, 8);
  level.putWall(189, 13, 8);

  //and enemies
  level.putGoomba(22, 12);
  level.putGoomba(40, 12);
  level.putGoomba(50, 12);
  level.putGoomba(51, 12);
  level.putGoomba(82, 4);
  level.putGoomba(84, 4);
  level.putGoomba(100, 12);
  level.putGoomba(102, 12);
  level.putGoomba(114, 12);
  level.putGoomba(115, 12);
  level.putGoomba(122, 12);
  level.putGoomba(123, 12);
  level.putGoomba(125, 12);
  level.putGoomba(126, 12);
  level.putGoomba(170, 12);
  level.putGoomba(171, 12);
}
