var floorSprite = new Mario.Sprite('sprites/tiles.png', [0,0],[16,16],0);
var statics = [];

for (var i = 0; i < 15; i++) {
  statics[i] = [];
}

for (var i = 0; i < 69; i++) {
  statics[13][i] = new Mario.Floor([16*i,208], floorSprite);
  statics[14][i] = new Mario.Floor([16*i,224], floorSprite);
}
