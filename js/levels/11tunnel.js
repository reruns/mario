//make sure that
var oneonetunnel = Mario.oneonetunnel = function() {
  level = new Mario.Level({
    playerPos: [40,16],
    loader: Mario.oneonetunnel,
    background: "#000000",
    scrolling: false,
    floorSprite:  new Mario.Sprite('sprites/tiles.png', [0,32],[16,16],0),
    wallSprite: new Mario.Sprite('sprites/tiles.png', [32, 32],[16,16],0),
    brickSprite: new Mario.Sprite('sprites/tiles.png', [16, 0], [16,16], 0),
    brickBounceSprite: new Mario.Sprite('sprites/tiles.png',[32,0],[16,16],0),
    ublockSprite: new Mario.Sprite('sprites/tiles.png', [48, 0], [16,16],0),
    pipeLEndSprite: new Mario.Sprite('sprites/tiles.png', [0, 128], [16,16], 0),
    pipeREndSprite: new Mario.Sprite('sprites/tiles.png', [16, 128], [16,16], 0),
    pipeLMidSprite: new Mario.Sprite('sprites/tiles.png', [0, 144], [16,16], 0),
    pipeRMidSprite: new Mario.Sprite('sprites/tiles.png', [16, 144], [16,16], 0),
  })

  player.pos = level.playerPos
  level.putFloor(0,16)
  level.putWall(0,13,11)
  walls = [5,6,7,8,9,10,11]
  walls.forEach(function(loc){
    level.putWall(loc,13,3)
    level.putWall(loc,3,1)
  })
}
