(function() {
  if (typeof Mario === 'undefined')
    window.Mario = {};


  var Block = Mario.Block = function(options) {
    this.item = options.item;
    this.usedSprite = options.usedSprite;
    this.bounceSprite = options.bounceSprite;
    this.breakable = options.breakable;

    Mario.Entity.call(this, {
      pos: options.pos,
      sprite: options.sprite,
      hitbox: [0,0,16,16]
    });

    this.standing = true;
  }

  Mario.Util.inherits(Block, Mario.Entity);

  //similar to the floor logic, but with the possibility of being hit from below.
  Block.prototype.isCollideWith = function (ent) {
    //the first two elements of the hitbox array are an offset, so let's do this now.
    var hpos1 = [this.pos[0] + this.hitbox[0], this.pos[1] + this.hitbox[1]];
    var hpos2 = [ent.pos[0] + ent.hitbox[0], ent.pos[1] + ent.hitbox[1]];

    //if the hitboxes actually overlap
    if (!(hpos1[0] > hpos2[0]+ent.hitbox[2] || (hpos1[0]+this.hitbox[2] < hpos2[0]))) {
      if (!(hpos1[1] > hpos2[1]+ent.hitbox[3] || (hpos1[1]+this.hitbox[3] < hpos2[1]))) {

        //if the entity is over the block, it's basically floor
        if (Math.abs(hpos2[1] + ent.hitbox[3] - hpos1[1]) <= ent.vel[1]) {
          ent.vel[1] = 0;
          ent.pos[1] = hpos1[1] - ent.hitbox[3] - ent.hitbox[1];
          ent.standing = true;
        } else if (Math.abs(hpos2[1] - hpos1[1] - this.hitbox[3]) <= Math.abs(ent.vel[1])) {
          //ent is under the block.
          //it can't phase through us!
          ent.vel[1] = 0;
          ent.pos[1] = hpos1[1] + this.hitbox[3];
          if (ent instanceof Mario.Player) {
            this.bonk(ent.power);
            ent.jumping = 0;
          }
        } else {
          //entity is hitting it from the side, we're a wall
          ent.collideWall(this);
        }
      }
    }
  }

  Block.prototype.bonk = function(power) {
    if (power > 0 && this.breakable) {
      this.break;
    } else {
      this.standing = false;
      this.opos = [];
      this.opos[0] = this.pos[0];
      this.opos[1] = this.pos[1];
      if (this.bounceSprite) {
        this.osprite = this.sprite;
        this.sprite = this.bounceSprite;
      } else {
        this.sprite = this.usedSprite;
      }

      this.vel[1] = -2;
    }
  }

  Block.prototype.update = function(dt) {
    if (!this.standing) {
      if (this.pos[1] < this.opos[1] - 8) {
        this.vel[1] = 2;
      }
      if (this.pos[1] > this.opos[1]) {
        this.vel[1] = 0;
        this.pos = this.opos;
        if (this.osprite) {
          this.sprite = this.osprite;
        }
        this.standing = true;
      }
    } else {
      if (this.sprite === this.usedSprite) {
        var x = this.pos[0] / 16, y = this.pos[1] / 16;
        statics[y][x] = new Mario.Floor(this.pos, this.usedSprite);
        delete blocks[y][x];
      }
    }

    this.pos[1] += this.vel[1];
    this.sprite.update(dt);
  }

})();
