var floorSprite = new Mario.Sprite('sprites/tiles.png', [0,0],[16,16],0);
var cloudSprite = new Mario.Sprite('sprites/tiles.png', [0,320],[48,32],0);
var statics = [];
var scenery = [];

for (var i = 0; i < 15; i++) {
  statics[i] = [];
}

putFloor(0, 69);
putCloud(7, 3);

function putFloor(start, end) {
  for (var i = start; i < end; i++) {
    statics[13][i] = new Mario.Floor([16*i,208], floorSprite);
    statics[14][i] = new Mario.Floor([16*i,224], floorSprite);
  }
}

function putCloud(x, y) {
  scenery[x] = new Mario.Prop([x*16, y*16], cloudSprite);
}
