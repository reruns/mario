(function() {
  var Level = Mario.Level = function(options) {
    this.floorSprite = options.floorSprite;
    this.cloudSprite = options.cloudSprite;
    this.wallSprite = options.wallSprite;
    this.brickSprite = options.brickSprite;
    this.brickBounceSprite = options.brickBounceSprite;
    this.ublockSprite = options.ublockSprite;
    this.superShroomSprite = options.superShroomSprite;
    this.pipeLEndSprite = options.pipeLEndSprite;
    this.pipeREndSprite = options.pipeREndSprite;
    this.pipeLMidSprite = options.pipeLMidSprite;
    this.pipe.RMidSprite = options.pipeRMidSprite;
    this.cloudSprites = options.cloudSprites;
    this.hillSprites = options.hillSprites;
    this.bushSprite = options.bushSprite;
    this.bushSprites = options.bushSprites;

    this.statics = [];
    this.scenery = [];
    this.blocks = [];
    this.enemies = [];
    this.items = [];

    for (var i = 0; i < 15; i++) {
      this.statics[i] = [];
      this.scenery[i] = [];
      this.blocks[i] = [];
    }

  }

  Level.prototype.putFloor = function(start, end) {
    for (var i = start; i < end; i++) {
      statics[13][i] = new Mario.Floor([16*i,208], floorSprite);
      statics[14][i] = new Mario.Floor([16*i,224], floorSprite);
    }
  }

  Level.prototype.putGoomba = function(x, y) {
    enemies.push(new Mario.Goomba([16*x, 16*y], new Mario.Sprite('sprites/enemy.png', [0, 16], [16,16], 3, [0,1]), enemies.length));
  }

  Level.prototype.putWall = function(x, y, height) {
    //y is the bottom of the wall in this case.
    for (var i = y-height; i < y; i++) {
      statics[i][x] = new Mario.Floor([16*x, 16*i], wallSprite)
    }
  }

  Level.prototype.putPipe = function(x, y, height) {
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

  Level.prototype.putCloud = function(x, y) {
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
})();
