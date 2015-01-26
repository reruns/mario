(function() {
  if (typeof Mario === 'undefined')
  window.Mario = {};

  var Item = Mario.Item = function(pos, sprite) {
    this.spawning = false;
    this.waiting = 0;

    Mario.Entity.call(this, {
      pos: pos,
      sprite: sprite,
      hitbox: [0,0,16,16]
    });
  }

  Item.prototype.render = function(ctx, vX, vY) {
    this.sprite.render(ctx, this.pos[0], this.pos[1], vX, vY);
  }

  Item.prototype.spawn = function(idx) {
    this.idx = idx;
    this.spawning = true;
    this.targetpos = [];
    this.targetpos[0] = this.pos[0];
    this.targetpos[1] = this.pos[1] - 16;
    this.vel[1] = -.5;
  }

  Item.prototype.update = function(dt) {
    if (this.spawning) {
      if (this.pos[1] <= this.targetpos[1]) {
        this.pos[1] = this.targetpos[1];
        this.vel[1] = 0;
        this.waiting = 5;
        this.spawning = false;
        this.vel[0] = 1;
      }
    } else {
      this.acc[1] = 0.2;
    }

    if (this.waiting) {
      this.waiting -= 1;
    } else {
      this.vel[1] += this.acc[1];
      this.pos[0] += this.vel[0];
      this.pos[1] += this.vel[1];
      this.sprite.update(dt);
    }
  }

  Item.prototype.collideWall = function() {
    this.vel[0] = -this.vel[0];
  }

  Item.prototype.checkCollisions = function() {
    if(this.spawning) {
      return;
    }
    var h = this.pos[1] % 16 == 0 ? 1 : 2;
    var w = this.pos[0] % 16 == 0 ? 1 : 2;

    var baseX = Math.floor(this.pos[0] / 16);
    var baseY = Math.floor(this.pos[1] / 16);

    for (var i = 0; i < h; i++) {
      for (var j = 0; j < w; j++) {
        if (statics[baseY + i][baseX + j]) {
          statics[baseY + i][baseX + j].isCollideWith(this);
        }
        if (blocks[baseY + i][baseX + j]) {
          blocks[baseY + i][baseX + j].isCollideWith(this);
        }
      }
    }

    this.isPlayerCollided();
  }

  //we have access to player everywhere, so let's just do this.
  Item.prototype.isPlayerCollided = function() {
    //the first two elements of the hitbox array are an offset, so let's do this now.
    var hpos1 = [this.pos[0] + this.hitbox[0], this.pos[1] + this.hitbox[1]];
    var hpos2 = [player.pos[0] + player.hitbox[0], player.pos[1] + player.hitbox[1]];

    //if the hitboxes actually overlap
    if (!(hpos1[0] > hpos2[0]+player.hitbox[2] || (hpos1[0]+this.hitbox[2] < hpos2[0]))) {
      if (!(hpos1[1] > hpos2[1]+player.hitbox[3] || (hpos1[1]+this.hitbox[3] < hpos2[1]))) {
        player.powerUp(this.idx);
      }
    }
  }

})();
