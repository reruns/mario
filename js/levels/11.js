//all of this sprite setup lives here because it changes from level to level.
//When it's time to add more levels, we'll move the functions to a level.js file
//and turn each level/area into its own setup function
//which we call when it's time.

var oneone = Mario.oneone = function() {
  var floorSprite = new Mario.Sprite('sprites/tiles.png', [0,0],[16,16],0);
  var cloudSprite = new Mario.Sprite('sprites/tiles.png', [0,320],[48,32],0);
  var wallSprite = new Mario.Sprite('sprites/tiles.png', [0, 16],[16,16],0);
  var brickSprite = new Mario.Sprite('sprites/tiles.png', [16, 0], [16,16], 0);
  var brickBounceSprite = new Mario.Sprite('sprites/tiles.png',[32,0],[16,16],0);
  var ublockSprite = new Mario.Sprite('sprites/tiles.png', [48, 0], [16,16],0);
  var superShroomSprite = new Mario.Sprite('sprites/items.png', [0,0], [16,16], 0);

  //TODO: Make pipes their own type of object, change this.
  var pipeLEndSprite = new Mario.Sprite('sprites/tiles.png', [0, 128], [16,16], 0);
  var pipeREndSprite = new Mario.Sprite('sprites/tiles.png', [16, 128], [16,16], 0);
  var pipeLMidSprite = new Mario.Sprite('sprites/tiles.png', [0, 144], [16,16], 0);
  var pipeRMidSprite = new Mario.Sprite('sprites/tiles.png', [16, 144], [16,16], 0);

  var cloudSprites = [
    new Mario.Sprite('sprites/tiles.png', [0,320],[16,32],0),
    new Mario.Sprite('sprites/tiles.png', [16,320],[16,32],0),
    new Mario.Sprite('sprites/tiles.png', [32,320],[16,32],0)
  ]
  var hillSprites = [
    new Mario.Sprite('sprites/tiles.png', [128,128],[16,16],0),
    new Mario.Sprite('sprites/tiles.png', [144,128],[16,16],0),
    new Mario.Sprite('sprites/tiles.png', [160,128],[16,16],0),
    new Mario.Sprite('sprites/tiles.png', [128,144],[16,16],0),
    new Mario.Sprite('sprites/tiles.png', [144,144],[16,16],0),
    new Mario.Sprite('sprites/tiles.png', [160,144],[16,16],0)]

  var bushSprite = new Mario.Sprite('sprites/tiles.png', [176, 144], [48, 16], 0);
  var bushSprites = [
    new Mario.Sprite('sprites/tiles.png', [176,144], [16,16],0),
    new Mario.Sprite('sprites/tiles.png', [192,144], [16,16],0),
    new Mario.Sprite('sprites/tiles.png', [208,144], [16,16],0)]
  var statics = [];
  var scenery = [];
  var blocks = [];
  var enemies = [];
  var items = [];

  for (var i = 0; i < 15; i++) {
    statics[i] = [];
    scenery[i] = [];
    blocks[i] = [];
  }

  ground = [[0,69],[71,86],[89,153],[155,212]];

  //TODO: Put things other than mushrooms in blocks

  //build THE GROUND
  ground.forEach(function(loc) {
    putFloor(loc[0],loc[1]);
  })

  //build scenery
  clouds = [[7,3],[19, 2],[56, 3],[67, 2],[87, 2],[103, 2],[152, 3],[163, 2],[200, 3]];
  clouds.forEach(function(cloud){
    putCloud(cloud[0],cloud[1]);
  })

  twoClouds = [[36,2],[132,2],[180,2]];
  twoClouds.forEach(function(cloud){
    putTwoCloud(cloud[0],cloud[1]);
  })

  threeClouds = [[27,3],[75,3],[123,3],[171,3]];
  threeClouds.forEach(function(cloud){
    putThreeCloud(cloud[0],cloud[1]);
  })

  bHills = [0,48,89,144,192]
  bHills.forEach(function(hill) {
    putBigHill(hill, 12);
  })

  sHills = [16,64,111,160];
  sHills.forEach(function(hill) {
    putSmallHill(hill, 12);
  })

  bushes = [23,71,118,167];
  bushes.forEach(function(bush) {
    putBush(bush, 12);
  })

  twoBushes = [41,89,137];
  twoBushes.forEach(function(bush) {
    putTwoBush(bush, 12);
  })

  threeBushes = [11,59,106];
  threeBushes.forEach(function(bush) {
    putThreeBush(bush, 12);
  });

  //interactable terrain
  putQBlock(16, 9, null);
  putBrick(20, 9, null);
  putQBlock(21, 9, new Mario.Mushroom([336, 144], superShroomSprite));
  putBrick(22, 9, null);
  putQBlock(22, 5, null);
  putQBlock(23, 9, null);
  putBrick(24, 9, null);
  putPipe(28, 13, 2);
  putPipe(38, 13, 3);
  putPipe(46, 13, 4);
  putPipe(57, 13, 4);
  putBrick(77, 9, null);
  putQBlock(78, 9, new Mario.Mushroom([1248, 144], superShroomSprite));
  putBrick(79, 9, null);
  putBrick(80, 5, null);
  putBrick(81, 5, null);
  putBrick(82, 5, null);
  putBrick(83, 5, null);
  putBrick(84, 5, null);
  putBrick(85, 5, null);
  putBrick(86, 5, null);
  putBrick(87, 5, null);
  putBrick(91, 5, null);
  putBrick(92, 5, null);
  putBrick(93, 5, null);
  putQBlock(94, 5, null);
  putBrick(94, 9, null);
  putBrick(100, 9, null);
  putBrick(101, 9, null);
  putQBlock(105, 9, null);
  putQBlock(108, 9, null);
  putQBlock(108, 5, null);
  putQBlock(111, 9, null);
  putBrick(117, 9, null);
  putBrick(120, 5, null);
  putBrick(121, 5, null);
  putBrick(122, 5, null);
  putBrick(123, 5, null);
  putBrick(128, 5, null);
  putQBlock(129, 5, null);
  putBrick(129, 9, null);
  putQBlock(130, 5, null);
  putBrick(130, 9, null);
  putBrick(131, 5, null);
  putWall(134, 13, 1);
  putWall(135, 13, 2);
  putWall(136, 13, 3);
  putWall(137, 13, 4);
  putWall(140, 13, 4);
  putWall(141, 13, 3);
  putWall(142, 13, 2);
  putWall(143, 13, 1);
  putWall(148, 13, 1);
  putWall(149, 13, 2);
  putWall(150, 13, 3);
  putWall(151, 13, 4);
  putWall(152, 13, 4);
  putWall(155, 13, 4);
  putWall(156, 13, 3);
  putWall(157, 13, 2);
  putWall(158, 13, 1);
  putPipe(163, 13, 2);
  putBrick(168, 9, null);
  putBrick(169, 9, null);
  putQBlock(170, 9, null);
  putBrick(171, 9, null);
  putPipe(179, 13, 2);
  putWall(181, 13, 1);
  putWall(182, 13, 2);
  putWall(183, 13, 3);
  putWall(184, 13, 4);
  putWall(185, 13, 5);
  putWall(186, 13, 6);
  putWall(187, 13, 7);
  putWall(188, 13, 8);
  putWall(189, 13, 8);

  //and enemies
  putGoomba(22, 12);
  putGoomba(40, 12);
  putGoomba(50, 12);
  putGoomba(51, 12);
  putGoomba(82, 4);
  putGoomba(84, 4);
  putGoomba(100, 12);
  putGoomba(102, 12);
  putGoomba(114, 12);
  putGoomba(115, 12);
  putGoomba(122, 12);
  putGoomba(123, 12);
  putGoomba(125, 12);
  putGoomba(126, 12);
  putGoomba(170, 12);
  putGoomba(171, 12);
}
