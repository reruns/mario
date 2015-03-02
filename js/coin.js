(function() {
  if (typeof Mario === 'undefined')
  window.Mario = {};

  var Coin = Mario.Coin = function(pos, sprite, idx) {
    Mario.Entity.call(this, {
      pos: pos,
      sprite: sprite,
      hitbox: [0,0,16,16]
    });
    this.idx = idx;
  }

  Mario.Util.inherits(Coin, Mario.Entity);

  Coin.prototype.isPlayerCollided = function() {
    //the first two elements of the hitbox array are an offset, so let's do this now.
    var hpos1 = [this.pos[0] + this.hitbox[0], this.pos[1] + this.hitbox[1]];
    var hpos2 = [player.pos[0] + player.hitbox[0], player.pos[1] + player.hitbox[1]];

    //if the hitboxes actually overlap
    if (!(hpos1[0] > hpos2[0]+player.hitbox[2] || (hpos1[0]+this.hitbox[2] < hpos2[0]))) {
      if (!(hpos1[1] > hpos2[1]+player.hitbox[3] || (hpos1[1]+this.hitbox[3] < hpos2[1]))) {
        collect();
      }
    }
  }

  Coin.prototype.collect = function() {
    player.coins += 1;
    delete level.items[this.idx]
  }
})();
