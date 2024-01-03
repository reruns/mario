(function() {
  var Level = Mario.Level = function(options) {
    this.playerPos = options.playerPos;
    this.scrolling = options.scrolling;
    this.loader = options.loader;
    this.background = options.background;
    this.exit = options.exit;

    this.floorSprite = options.floorSprite;
    this.cloudSprite = options.cloudSprite;
    this.wallSprite = options.wallSprite;
    this.brickSprite = options.brickSprite;
    this.rubbleSprite = options.rubbleSprite;
    this.brickBounceSprite = options.brickBounceSprite;
    this.ublockSprite = options.ublockSprite;
    this.superShroomSprite = options.superShroomSprite;
    this.fireFlowerSprite = options.fireFlowerSprite;
    this.starSprite = options.starSprite;
    this.coinSprite = options.coinSprite;
    this.bcoinSprite = options.bcoinSprite;
    this.goombaSprite = options.goombaSprite;
    this.koopaSprite = options.koopaSprite;

    this.ladderSprite = options.ladderSprite;

    //prop pipe sprites, to be phased out
    this.pipeLEndSprite = options.pipeLEndSprite;
    this.pipeREndSprite = options.pipeREndSprite;
    this.pipeLMidSprite = options.pipeLMidSprite;
    this.pipeRMidSprite = options.pipeRMidSprite;

    //real pipe sprites, use these.
    this.pipeUpMid = options.pipeUpMid;
    this.pipeSideMid = options.pipeSideMid;
    this.pipeLeft = options.pipeLeft;
    this.pipeTop = options.pipeTop;

    this.flagpoleSprites = options.flagPoleSprites;

    this.houseRoofSprite = options.houseRoofSprite;
    this.houseRoofTopSprite = options.houseRoofTopSprite;
    this.houseSprite = options.houseSprite;
    this.houseLeftWindowSprite = options.houseLeftWindowSprite;
    this.houseRightWindowSprite = options.houseRightWindowSprite;
    this.houseDoorTopSprite = options.houseDoorTopSprite;
    this.houseDoorBottomSprite = options.houseDoorBottomSprite;

    this.LPipeSprites = options.LPipeSprites;
    this.cloudSprites = options.cloudSprites;
    this.hillSprites = options.hillSprites;
    this.bushSprite = options.bushSprite;
    this.bushSprites = options.bushSprites;
    this.qblockSprite = options.qblockSprite;

    this.invincibility = options.invincibility;
    this.statics = [];
    this.scenery = [];
    this.blocks = [];
    this.enemies = [];
    this.items = [];
    this.pipes = [];

    this.ladders =[];

    this.levelNumber = options.levelNumber || 1

    for (var i = 0; i < 15; i++) {
      this.statics[i] = [];
      this.scenery[i] = [];
      this.blocks[i] = [];
      this.ladders[i] =[];

    }

  };

  Level.prototype.putFloor = function(start, end) {
    for (var i = start; i < end; i++) {
      this.statics[13][i] = new Mario.Floor([16*i,208], this.floorSprite);
      this.statics[14][i] = new Mario.Floor([16*i,224], this.floorSprite);
    }
  };

  Level.prototype.putGoomba = function(x, y) {
    this.enemies.push(new Mario.Goomba([16*x, 16*y], this.goombaSprite() ));
  };

  Level.prototype.putKoopa = function(x, y) {
    this.enemies.push(new Mario.Koopa([16*x, 16*y], this.koopaSprite(), false));
  };

  Level.prototype.putWall = function(x, y, height) {
    //y is the bottom of the wall in this case.
    for (var i = y-height; i < y; i++) {
      this.statics[i][x] = new Mario.Floor([16*x, 16*i], this.wallSprite);
    }
  };

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
  };

  //sometimes, pipes don't go straight up and down.
  Level.prototype.putLeftPipe = function(x,y) {
    this.statics[y][x] = new Mario.Floor([16*x, 16*y], this.LPipeSprites[0]);
    this.statics[y+1][x] = new Mario.Floor([16*x,16*(y+1)], this.LPipeSprites[1]);
    this.statics[y][x+1] = new Mario.Floor([16*(x+1),16*y], this.LPipeSprites[2]);
    this.statics[y+1][x+1] = new Mario.Floor([16*(x+1),16*(y+1)], this.LPipeSprites[3]);
    this.statics[y][x+2] = new Mario.Floor([16*(x+2),16*y], this.LPipeSprites[4]);
    this.statics[y+1][x+2] = new Mario.Floor([16*(x+2),16*(y+1)], this.LPipeSprites[5]);
  };

  Level.prototype.putCoin = function(x, y) {
    this.items.push(new Mario.Coin(
      [x*16, y*16],
      this.coinSprite()
    ));
  };

  Level.prototype.putCloud = function(x, y) {
    this.scenery[y][x] = new Mario.Prop([x*16, y*16], this.cloudSprite);
  };

  Level.prototype.putQBlock = function(x, y, item) {
    this.blocks[y][x] = new Mario.Block( {
      pos: [x*16, y*16],
      item: item,
      sprite: this.qblockSprite,
      usedSprite: this.ublockSprite
    });
  };

  Level.prototype.putBrick = function(x,y,item) {
    this.blocks[y][x] = new Mario.Block({
      pos: [x*16, y*16],
      item: item,
      sprite: this.brickSprite,
      bounceSprite: this.brickBounceSprite,
      usedSprite: this.ublockSprite,
      breakable: !item
    });
  };

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
  };

  Level.prototype.putBush = function(x, y) {
    this.scenery[y][x] = new Mario.Prop([x*16, y*16], this.bushSprite);
  };

  Level.prototype.putThreeBush = function(x,y) {
    px = x*16;
    py = y*16;
    this.scenery[y][x] = new Mario.Prop([px, py], this.bushSprites[0]);
    this.scenery[y][x+1] = new Mario.Prop([px+16, py], this.bushSprites[1]);
    this.scenery[y][x+2] = new Mario.Prop([px+32, py], this.bushSprites[1]);
    this.scenery[y][x+3] = new Mario.Prop([px+48, py], this.bushSprites[1]);
    this.scenery[y][x+4] = new Mario.Prop([px+64, py], this.bushSprites[2]);
  };

  Level.prototype.putTwoBush = function(x,y) {
    px = x*16;
    py = y*16;
    this.scenery[y][x] = new Mario.Prop([px, py], this.bushSprites[0]);
    this.scenery[y][x+1] = new Mario.Prop([px+16, py], this.bushSprites[1]);
    this.scenery[y][x+2] = new Mario.Prop([px+32, py], this.bushSprites[1]);
    this.scenery[y][x+3] = new Mario.Prop([px+48, py], this.bushSprites[2]);
  };

  Level.prototype.putSmallHill = function(x, y) {
    var px = x*16, py = y*16;
    this.scenery[y][x] = new Mario.Prop([px, py], this.hillSprites[0]);
    this.scenery[y][x+1] = new Mario.Prop([px+16, py], this.hillSprites[3]);
    this.scenery[y-1][x+1] = new Mario.Prop([px+16, py-16], this.hillSprites[1]);
    this.scenery[y][x+2] = new Mario.Prop([px+32, py], this.hillSprites[2]);
  };

  Level.prototype.putTwoCloud = function(x,y) {
    px = x*16;
    py = y*16;
    this.scenery[y][x] = new Mario.Prop([px, py], this.cloudSprites[0]);
    this.scenery[y][x+1] = new Mario.Prop([px+16, py], this.cloudSprites[1]);
    this.scenery[y][x+2] = new Mario.Prop([px+32, py], this.cloudSprites[1]);
    this.scenery[y][x+3] = new Mario.Prop([px+48, py], this.cloudSprites[2]);
  };

  Level.prototype.putThreeCloud = function(x,y) {
    px = x*16;
    py = y*16;
    this.scenery[y][x] = new Mario.Prop([px, py], this.cloudSprites[0]);
    this.scenery[y][x+1] = new Mario.Prop([px+16, py], this.cloudSprites[1]);
    this.scenery[y][x+2] = new Mario.Prop([px+32, py], this.cloudSprites[1]);
    this.scenery[y][x+3] = new Mario.Prop([px+48, py], this.cloudSprites[1]);
    this.scenery[y][x+4] = new Mario.Prop([px+64, py], this.cloudSprites[2]);
  };

  Level.prototype.putRealPipe = function(x, y, length, direction, destination) {
    px = x*16;
    py = y*16;
    this.pipes.push(new Mario.Pipe({
      pos: [px, py],
      length: length,
      direction: direction,
      destination: destination
    }));
  }

  Level.prototype.putRealLeftPipe = function(x, y, length, direction, destination) {
  px = x * 16;
  py = y * 16;
  this.statics[y][x] = new Mario.Floor([px, py], this.LPipeSprites[0]);
  this.statics[y + 1][x] = new Mario.Floor([px, py + 16], this.LPipeSprites[1]);
  this.statics[y][x + 1] = new Mario.Floor([px + 16, py], this.LPipeSprites[2]);
  this.statics[y + 1][x + 1] = new Mario.Floor([px + 16, py + 16], this.LPipeSprites[3]);
  this.statics[y][x + 2] = new Mario.Floor([px + 32, py], this.LPipeSprites[4]);
  this.statics[y + 1][x + 2] = new Mario.Floor([px + 32, py + 16], this.LPipeSprites[5]);
  this.pipes.push(new Mario.Pipe({
    pos: [px, py],
    length: length,
    direction: direction,
    destination: destination
  }));
  }
  

  Level.prototype.putFlagpole = function(x) {
    this.statics[12][x] = new Mario.Floor([16*x, 192], this.wallSprite);
    for (i=3; i < 12; i++) {
      this.scenery[i][x] = new Mario.Prop([16*x, 16*i], this.flagpoleSprites[1])
    }
    this.scenery[2][x] = new Mario.Prop([16*x, 32], this.flagpoleSprites[0]);
    this.items.push(new Mario.Flag(16*x));
  }


  Level.prototype.buildHouseRoof = function(x, y) {

    this.scenery[y][x] = new Mario.Prop([x*16, y*16], this.houseRoofSprite);
  };
  Level.prototype.buildhouseRoofTop = function(x, y) {

    this.scenery[y][x] = new Mario.Prop([x*16, y*16], this.houseRoofTopSprite);
  };

  Level.prototype.buildHouse = function(x, y) {

    this.scenery[y][x] = new Mario.Prop([x*16, y*16], this.houseSprite);
  };

  Level.prototype.buildHouseDoorTop = function(x, y) {

    this.scenery[y][x] = new Mario.Prop([x*16, y*16], this.houseDoorTopSprite);
  };

  
  Level.prototype.buildHouseDoorBottom = function(x, y) {

    this.scenery[y][x] = new Mario.Prop([x*16, y*16], this.houseDoorBottomSprite);
  };


  Level.prototype.buildHouseLeftWindow = function(x, y) {

    this.scenery[y][x] = new Mario.Prop([x*16, y*16], this.houseLeftWindowSprite);
  };

  Level.prototype.buildHouseRightWindow = function(x, y) {

    this.scenery[y][x] = new Mario.Prop([x*16, y*16], this.houseRightWindowSprite);
  };

  

  Level.prototype.putLadder = function(x, direction) {
    const createLadderSet = () => {
      const currentY1 = 2;
      for (let i = 0; i < 3; i++) {
        this.ladders[currentY1][x + i] = new Mario.Ladder({
          pos: [(x + i) * 16, currentY1 * 16],
          sprite: this.ladderSprite,
          direction: direction,
        });
      }
      const currentY2 = currentY1 + 5;
      for (let i = 0; i < 3; i++) {
        this.ladders[currentY2][x + i] = new Mario.Ladder({
          pos: [(x + i) * 16, currentY2 * 16],
          sprite: this.ladderSprite,
          direction: direction,
        });
      }
      this.ladders.push(new Mario.Ladder({
        pos: [x, currentY1],
       direction: direction,
     }));

    };
    createLadderSet();
    const intervalId = setInterval(() => {
      setTimeout(() => {
        createLadderSet();
      }, 0);
    }, 3000);
    return intervalId;
    
  };
  

})();
