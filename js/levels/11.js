//all of this sprite setup lives here because it changes from level to level.
//When it's time to add more levels, we'll move the functions to a level.js file
//and turn each level/area into its own setup function
//which we call when it's time.

//TODO: Don't do this, multiple objects will use the same sprite object. Bad.
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

//TODO: Put things other than mushrooms in blocks

//build THE GROUND
putFloor(0, 69);
putFloor(71, 86);
putFloor(89, 153);
putFloor(155, 212);

//build scenery
putCloud(7, 3);
putBigHill(0,12);
putThreeBush(11, 12);
putSmallHill(16, 12);
putCloud(19, 2);
putBush(23, 12);
putThreeCloud(27, 3)
putTwoCloud(36, 2);
putTwoBush(41, 12);
putBigHill(48, 12);
putCloud(56, 3);
putThreeBush(59, 12);
putSmallHill(64, 12);
putCloud(67, 2);
putBush(71, 12);
putThreeCloud(75, 3);
putCloud(87, 2);
putTwoBush(89, 12);
putBigHill(96, 12);
putCloud(103, 2);
putThreeBush(106, 12);
putSmallHill(111, 12);
putBush(118, 12);
putThreeCloud(123, 3);
putTwoCloud(132, 2);
putTwoBush(137, 12);
putBigHill(144, 12);
putCloud(152, 3);
putSmallHill(160, 12);
putCloud(163, 2);
putBush(167, 12);
putThreeCloud(171, 3);
putTwoCloud(180, 2);
putBigHill(192, 12);
putCloud(200, 3);

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

function putFloor(start, end) {
  for (var i = start; i < end; i++) {
    statics[13][i] = new Mario.Floor([16*i,208], floorSprite);
    statics[14][i] = new Mario.Floor([16*i,224], floorSprite);
  }
}

function putGoomba(x, y) {
  enemies.push(new Mario.Goomba([16*x, 16*y], new Mario.Sprite('sprites/enemy.png', [0, 16], [16,16], 3, [0,1]), enemies.length));
}

function putWall(x, y, height) {
  //y is the bottom of the wall in this case.
  for (var i = y-height; i < y; i++) {
    statics[i][x] = new Mario.Floor([16*x, 16*i], wallSprite)
  }
}

function putPipe(x, y, height) {
  for (var i = y - height; i < y; i++) {
    if (i === y - height) {
      statics[i][x] = new Mario.Floor([16*x, 16*i], pipeLEndSprite);
      statics[i][x+1] = new Mario.Floor([16*x+16, 16*i], pipeREndSprite);
    } else {
      statics[i][x] = new Mario.Floor([16*x, 16*i], pipeLMidSprite);
      statics[i][x+1] = new Mario.Floor([16*x+16, 16*i], pipeRMidSprite);
    }
  }
}

function putCloud(x, y) {
  scenery[y][x] = new Mario.Prop([x*16, y*16], cloudSprite);
}

//TODO: Figure out a way to sync up the flashing animation on these.
function putQBlock(x, y, item) {
  blocks[y][x] = new Mario.Block( {
    pos: [x*16, y*16],
    item: item,
    sprite: new Mario.Sprite('sprites/tiles.png', [384, 0], [16,16], 8, [0,0,0,0,1,2,1]),
    usedSprite: ublockSprite
  });
}

function putBrick(x,y,item) {
  blocks[y][x] = new Mario.Block({
    pos: [x*16, y*16],
    item: item,
    sprite: brickSprite,
    bounceSprite: brickBounceSprite,
    usedSprite: ublockSprite
  })
}

function putBigHill(x, y) {
  var px = x*16, py = y*16;
  scenery[y][x] = new Mario.Prop([px, py], hillSprites[0]);
  scenery[y][x+1] = new Mario.Prop([px+16, py], hillSprites[3]);
  scenery[y-1][x+1] = new Mario.Prop([px+16, py-16], hillSprites[0]);
  scenery[y][x+2] = new Mario.Prop([px+32, py], hillSprites[4]);
  scenery[y-1][x+2] = new Mario.Prop([px+32, py-16], hillSprites[3]);
  scenery[y-2][x+2] = new Mario.Prop([px+32, py-32], hillSprites[1]);
  scenery[y][x+3] = new Mario.Prop([px+48, py], hillSprites[5]);
  scenery[y-1][x+3] = new Mario.Prop([px+48, py-16], hillSprites[2]);
  scenery[y][x+4] = new Mario.Prop([px+64, py], hillSprites[2]);
}

function putBush(x, y) {
  scenery[y][x] = new Mario.Prop([x*16, y*16], bushSprite);
}

function putThreeBush(x,y) {
  px = x*16, py = y*16
  scenery[y][x] = new Mario.Prop([px, py], bushSprites[0]);
  scenery[y][x+1] = new Mario.Prop([px+16, py], bushSprites[1]);
  scenery[y][x+2] = new Mario.Prop([px+32, py], bushSprites[1]);
  scenery[y][x+3] = new Mario.Prop([px+48, py], bushSprites[1]);
  scenery[y][x+4] = new Mario.Prop([px+64, py], bushSprites[2]);
}

function putTwoBush(x,y) {
  px = x*16, py = y*16
  scenery[y][x] = new Mario.Prop([px, py], bushSprites[0]);
  scenery[y][x+1] = new Mario.Prop([px+16, py], bushSprites[1]);
  scenery[y][x+2] = new Mario.Prop([px+32, py], bushSprites[1]);
  scenery[y][x+3] = new Mario.Prop([px+48, py], bushSprites[2]);
}

function putSmallHill(x, y) {
  var px = x*16, py = y*16;
  scenery[y][x] = new Mario.Prop([px, py], hillSprites[0]);
  scenery[y][x+1] = new Mario.Prop([px+16, py], hillSprites[3]);
  scenery[y-1][x+1] = new Mario.Prop([px+16, py-16], hillSprites[1]);
  scenery[y][x+2] = new Mario.Prop([px+32, py], hillSprites[2]);
}

function putTwoCloud(x,y) {
  px = x*16, py = y*16
  scenery[y][x] = new Mario.Prop([px, py], cloudSprites[0]);
  scenery[y][x+1] = new Mario.Prop([px+16, py], cloudSprites[1]);
  scenery[y][x+2] = new Mario.Prop([px+32, py], cloudSprites[1]);
  scenery[y][x+3] = new Mario.Prop([px+48, py], cloudSprites[2]);
}

function putThreeCloud(x,y) {
  px = x*16, py = y*16
  scenery[y][x] = new Mario.Prop([px, py], cloudSprites[0]);
  scenery[y][x+1] = new Mario.Prop([px+16, py], cloudSprites[1]);
  scenery[y][x+2] = new Mario.Prop([px+32, py], cloudSprites[1]);
  scenery[y][x+3] = new Mario.Prop([px+48, py], cloudSprites[1]);
  scenery[y][x+4] = new Mario.Prop([px+64, py], cloudSprites[2]);
}
