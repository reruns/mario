(function() {
  if (typeof Mario === 'undefined')
    window.Mario = {};

  
  Ladder = Mario.Ladder = function(options) {
    Mario.Entity.call(this, {
      pos: options.pos,
      sprite: options.sprite,
      hitbox: [0, 0, 16, 16]
    });

    this.direction = options.direction || 'UP';
  };

  Mario.Util.inherits(Ladder, Mario.Entity);

  Ladder.prototype.update = function (dt, gameTime) {
    if (this.direction === 'UP') {
      this.vel[1] = -0.4;
      this.pos[1] += this.vel[1];
    } else if (this.direction === 'DOWN') {
      this.vel[1] = 0.4;
      this.pos[1] += this.vel[1];
    }
  };

  Ladder.prototype.isCollideWith = function (ent) {
    if (ent.pos === undefined) return;
    var hpos1 = [Math.floor(this.pos[0] + this.hitbox[0]), Math.floor(this.pos[1] + this.hitbox[1])];
    var hpos2 = [Math.floor(ent.pos[0] + ent.hitbox[0]), Math.floor(ent.pos[1] + ent.hitbox[1])];
    if (!(hpos1[0] > hpos2[0]+ent.hitbox[2] || (hpos1[0]+this.hitbox[2] < hpos2[0]))) {
      if (!(hpos1[1] > hpos2[1]+ent.hitbox[3] || (hpos1[1]+this.hitbox[3] < hpos2[1]))) {
        var center = hpos2[0] + ent.hitbox[2] / 2;
        if (Math.abs(hpos2[1] + ent.hitbox[3] - hpos1[1]) <= ent.vel[1]) {
          ent.vel[1] = 0;
          ent.pos[1] = hpos1[1] - ent.hitbox[3] - ent.hitbox[1];
          ent.standing = true;
          if (ent instanceof Mario.Player) {
            ent.jumping = 0;
          }
        } else if (Math.abs(hpos2[1] - hpos1[1] - this.hitbox[3]) > ent.vel[1] &&
        center + 2 >= hpos1[0] && center - 2 <= hpos1[0] + this.hitbox[2]) {
          ent.vel[1] = 0;
          ent.pos[1] = hpos1[1] + this.hitbox[3];
          if (ent instanceof Mario.Player) {
            ent.jumping = 0;
          }
        } 
      }
    }
  }

  Ladder.prototype.checkCollisions = function() {
    if (!player.piping) this.isCollideWith(player);
  };

})();
