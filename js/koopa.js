(function() {
  if (typeof Mario === 'undefined')
  window.Mario = {};

  //TODO: On console the hitbox is smaller. Measure it and edit this.

  var Koopa = Mario.Koopa = function(pos, sprite, para) {
    this.dying = false;
    this.shell = true;

    this.para = para; //para. As in, is it a paratroopa?

    Mario.Entity.call(this, {
      pos: pos,
      sprite: sprite,
      hitbox: [16,0,16,16]
    });
    this.sprite.pos[0] += 64;
    this.vel[0] = -0;
    this.idx = level.enemies.length;
  };

  Koopa.prototype.render = function(ctx, vX, vY) {
    this.sprite.render(ctx, this.pos[0], this.pos[1], vX, vY);
  };

  Koopa.prototype.update = function(dt, vX) {
    if (this.pos[0] - vX > 336) { //if we're too far away, do nothing.
      return;
    } else if (this.pos[0] - vX < -32) {
      delete level.enemies[this.idx];
    }

    if (this.flipping > 0) {
      this.pos[1] -= 2;
      this.flipping -= 2;
    } else if (this.flipping < 0) {
      this.pos[1] += 2;
    }

    if (this.dying) {
      this.dying -= 1;
      if (!this.dying) {
        delete level.enemies[this.idx];
      }
    }
    this.acc[1] = 0.2;
    this.vel[1] += this.acc[1];
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    this.sprite.update(dt);
  };

  Koopa.prototype.collideWall = function() {
    this.vel[0] = -this.vel[0];
  };

  Koopa.prototype.checkCollisions = function() {
    if (this.flipping) {
      return;
    }

    // var h = this.shell ? 1 : 2;
    // if (this.pos[1] % 16 !== 0) {
    //   h += 1;
    // }
    var h = this.pos[1] % 16 === 0 ? 1 : 2;
    var w = this.pos[0] % 16 === 0 ? 1 : 2;

    var baseX = Math.floor(this.pos[0] / 16);
    var baseY = Math.floor(this.pos[1] / 16);

    if (baseY + h > 15) {
      delete level.enemies[this.idx];
      return;
    }

    for (var i = 0; i < h; i++) {
      for (var j = 0; j < w; j++) {
        if (level.statics[baseY + i][baseX + j]) {
          level.statics[baseY + i][baseX + j].isCollideWith(this);
        }
        if (level.blocks[baseY + i][baseX + j]) {
          level.blocks[baseY + i][baseX + j].isCollideWith(this);
        }
      }
    }
    var that = this;
    level.enemies.forEach(function(enemy){
      if (enemy === that) { //don't check collisions with ourselves.
        return;
      } else if (enemy.pos[0] - vX > 336){ //stop checking once we get to far away dudes.
        return;
      } else {
        that.isCollideWith(enemy);
      }
    });
    this.isCollideWith(player);
  };

  Koopa.prototype.isCollideWith = function(ent) {
    if (ent instanceof Mario.Player && (this.dying || ent.invincibility)) {
      return;
    }

    //the first two elements of the hitbox array are an offset, so let's do this now.
    var hpos1 = [this.pos[0] + this.hitbox[0], this.pos[1] + this.hitbox[1]];
    var hpos2 = [ent.pos[0] + ent.hitbox[0], ent.pos[1] + ent.hitbox[1]];

    //if the hitboxes actually overlap
    if (!(hpos1[0] > hpos2[0]+ent.hitbox[2] || (hpos1[0]+this.hitbox[2] < hpos2[0]))) {
      if (!(hpos1[1] > hpos2[1]+ent.hitbox[3] || (hpos1[1]+this.hitbox[3] < hpos2[1]))) {
        if (ent instanceof Mario.Player) { //if we hit the player
          if (ent.vel[1] > 0) { //then we get BOPPED.
            this.stomp();
          } else { //or the player gets hit
            ent.damage();
          }
        } else {
          this.collideWall();
        }
      }
    }
  };

  Koopa.prototype.stomp = function() {
    //Turn this thing into a shell if it isn't already. Kick it if it is.
    player.bounce = true;
    if (this.para) {
      this.para = false;
      this.sprite.pos[0] -= 32;
    } else if (this.shell) {
      //kick the shell
      //What determines the direction a shell gets kicked? Probably location or smth
    } else {
      this.shell = true;
      this.hitbox = [0,0,16,16];
      this.sprite.pos[0] += 64;
      this.sprite.speed = 0;
      this.vel = [0,0];
    }

  };

  Koopa.prototype.bump = function() {
    this.sprite.img = 'sprites/enemyr.png';
    this.flipping = 11;
    this.pos[1] -= 1;
    this.vel[0] = 0;
    this.vel[1] = -2;
  };
})();
