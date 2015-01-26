(function() {
  if (typeof Mario === 'undefined')
    window.Mario = {};

  //TODO: clean up the logic for sprite switching.
  //TODO: There's a weird bug with the collision logic. Look into it.

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

  Mario.Util.inherits(Block, Mario.Floor);

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
        if (this.item) {
          this.item.spawn(items.length);
          items.push(this.item);
        }
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
