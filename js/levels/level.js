(function() {
  var Level = Mario.Level = function(options) {
    this.playerPos = options.playerPos;
    this.loader = options.loader;

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
    this.pipeRMidSprite = options.pipeRMidSprite;
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
      this.statics[13][i] = new Mario.Floor([16*i,208], this.floorSprite);
      this.statics[14][i] = new Mario.Floor([16*i,224], this.floorSprite);
    }
  }

  Level.prototype.putGoomba = function(x, y) {
    this.enemies.push(new Mario.Goomba([16*x, 16*y], new Mario.Sprite('sprites/enemy.png', [0, 16], [16,16], 3, [0,1]), this.enemies.length));
  }

  Level.prototype.putWall = function(x, y, height) {
    //y is the bottom of the wall in this case.
    for (var i = y-height; i < y; i++) {
      this.statics[i][x] = new Mario.Floor([16*x, 16*i], this.wallSprite)
    }
  }

  Level.prototype.putPipe = function(x, y, height) {
    for (var i = y - height; i < y; i++) {
      if (i === y - height) {
        this.statics[i][x] = new Mario.Floor([16*x, 16*i], this.pipeLEndSprite);
        this.statics[i][x+1] = new Mario.Floor([16*x+16, 16*i], this.pipeREndSprite);
      } else {
        this.statics[i][x] = new Mario.Floor([16*x, 16*i], this.pipeLMidSprite);
        this.statics[i][x+1] = new Mario.Floor([16*x+16, 16*i], this.pipeRMidSprite);
      }
    }
  }

  Level.prototype.putCloud = function(x, y) {
    this.scenery[y][x] = new Mario.Prop([x*16, y*16], this.cloudSprite);
  }

  //TODO: Figure out a way to sync up the flashing animation on these.
  Level.prototype.putQBlock = function(x, y, item) {
    this.blocks[y][x] = new Mario.Block( {
      pos: [x*16, y*16],
      item: item,
      sprite: new Mario.Sprite('sprites/tiles.png', [384, 0], [16,16], 8, [0,0,0,0,1,2,1]),
      usedSprite: this.ublockSprite
    });
  }

  Level.prototype.putBrick = function(x,y,item) {
    this.blocks[y][x] = new Mario.Block({
      pos: [x*16, y*16],
      item: item,
      sprite: this.brickSprite,
      bounceSprite: this.brickBounceSprite,
      usedSprite: this.ublockSprite
    })
  }

  Level.prototype.putBigHill = function(x, y) {
    var px = x*16, py = y*16;
    this.scenery[y][x] = new Mario.Prop([px, py], this.hillSprites[0]);
    this.scenery[y][x+1] = new Mario.Prop([px+16, py], this.hillSprites[3]);
    this.scenery[y-1][x+1] = new Mario.Prop([px+16, py-16], this.hillSprites[0]);
    this.scenery[y][x+2] = new Mario.Prop([px+32, py], this.hillSprites[4]);
    this.scenery[y-1][x+2] = new Mario.Prop([px+32, py-16], this.hillSprites[3]);
    this.scenery[y-2][x+2] = new Mario.Prop([px+32, py-32], this.hillSprites[1]);
    this.scenery[y][x+3] = new Mario.Prop([px+48, py], this.hillSprites[5]);
    this.scenery[y-1][x+3] = new Mario.Prop([px+48, py-16], this.hillSprites[2]);
    this.scenery[y][x+4] = new Mario.Prop([px+64, py], this.hillSprites[2]);
  }

  Level.prototype.putBush = function(x, y) {
    this.scenery[y][x] = new Mario.Prop([x*16, y*16], this.bushSprite);
  }

  Level.prototype.putThreeBush = function(x,y) {
    px = x*16, py = y*16
    this.scenery[y][x] = new Mario.Prop([px, py], this.bushSprites[0]);
    this.scenery[y][x+1] = new Mario.Prop([px+16, py], this.bushSprites[1]);
    this.scenery[y][x+2] = new Mario.Prop([px+32, py], this.bushSprites[1]);
    this.scenery[y][x+3] = new Mario.Prop([px+48, py], this.bushSprites[1]);
    this.scenery[y][x+4] = new Mario.Prop([px+64, py], this.bushSprites[2]);
  }

  Level.prototype.putTwoBush = function(x,y) {
    px = x*16, py = y*16
    this.scenery[y][x] = new Mario.Prop([px, py], this.bushSprites[0]);
    this.scenery[y][x+1] = new Mario.Prop([px+16, py], this.bushSprites[1]);
    this.scenery[y][x+2] = new Mario.Prop([px+32, py], this.bushSprites[1]);
    this.scenery[y][x+3] = new Mario.Prop([px+48, py], this.bushSprites[2]);
  }

  Level.prototype.putSmallHill = function(x, y) {
    var px = x*16, py = y*16;
    this.scenery[y][x] = new Mario.Prop([px, py], this.hillSprites[0]);
    this.scenery[y][x+1] = new Mario.Prop([px+16, py], this.hillSprites[3]);
    this.scenery[y-1][x+1] = new Mario.Prop([px+16, py-16], this.hillSprites[1]);
    this.scenery[y][x+2] = new Mario.Prop([px+32, py], this.hillSprites[2]);
  }

  Level.prototype.putTwoCloud = function(x,y) {
    px = x*16, py = y*16
    this.scenery[y][x] = new Mario.Prop([px, py], this.cloudSprites[0]);
    this.scenery[y][x+1] = new Mario.Prop([px+16, py], this.cloudSprites[1]);
    this.scenery[y][x+2] = new Mario.Prop([px+32, py], this.cloudSprites[1]);
    this.scenery[y][x+3] = new Mario.Prop([px+48, py], this.cloudSprites[2]);
  }

  Level.prototype.putThreeCloud = function(x,y) {
    px = x*16, py = y*16
    this.scenery[y][x] = new Mario.Prop([px, py], this.cloudSprites[0]);
    this.scenery[y][x+1] = new Mario.Prop([px+16, py], this.cloudSprites[1]);
    this.scenery[y][x+2] = new Mario.Prop([px+32, py], this.cloudSprites[1]);
    this.scenery[y][x+3] = new Mario.Prop([px+48, py], this.cloudSprites[1]);
    this.scenery[y][x+4] = new Mario.Prop([px+64, py], this.cloudSprites[2]);
  }
})();
