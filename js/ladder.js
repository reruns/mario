(function() {
    if (typeof Mario === 'undefined')
      window.Mario = {};
  
      var Ladder = Mario.Ladder = function(options) {
      this.item = options.item;
      this.usedSprite = options.usedSprite;
      this.bounceSprite = options.bounceSprite;
      this.breakable = options.breakable;
  
      Mario.Entity.call(this, {
        pos: options.pos,
        sprite: options.sprite,
        hitbox: [0, 0, 16, 16]
      });
      this.direction = options.direction || 'UP'; 
    };
    Mario.Util.inherits(Ladder, Mario.Floor);
    Ladder.prototype.update = function(dt, gameTime) {
      this.pos[1] += this.vel[1];
      this.sprite.update(dt, gameTime);
      if (this.direction === 'UP') {
        this.vel[1] = -0.4;
      } else if (this.direction === 'DOWN') {
        this.vel[1] = 0.4; 
      }
      this.pos[1] += this.vel[1];
      this.sprite.update(dt, gameTime);
    };

    



    Ladder.prototype.checkCollisions = function() {
        var that = this;
        level.enemies.forEach (function(ent) {
          that.isCollideWith(ent);
        });
    
        level.items.forEach (function(ent) {
          that.isCollideWith(ent);
        });
    
        fireballs.forEach(function(ent){
          that.isCollideWith(ent)
        });
   
   }
  
      Pipe.prototype.isCollideWith = function (ent) {
        //long story short: because we scan every item, and and one 'rubble' item is four things with separate positions
        //we'll crash without this line as soon as we destroy a block. OOPS.
        if (ent.pos === undefined) return;
    
    
        //the first two elements of the hitbox array are an offset, so let's do this now.
        var hpos1 = [Math.floor(this.pos[0] + this.hitbox[0]), Math.floor(this.pos[1] + this.hitbox[1])];
        var hpos2 = [Math.floor(ent.pos[0] + ent.hitbox[0]), Math.floor(ent.pos[1] + ent.hitbox[1])];
    
        //if the hitboxes actually overlap
        if (!(hpos1[0] > hpos2[0]+ent.hitbox[2] || (hpos1[0]+this.hitbox[2] < hpos2[0]))) {
          if (!(hpos1[1] > hpos2[1]+ent.hitbox[3] || (hpos1[1]+this.hitbox[3] < hpos2[1]))) {
            //if the entity is over the block, it's basically floor
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
              //ent is under the block.
              ent.vel[1] = 0;
              ent.pos[1] = hpos1[1] + this.hitbox[3];
              if (ent instanceof Mario.Player) {
                ent.jumping = 0;
              }
            } else {
              //entity is hitting it from the side, we're a wall
              ent.collideWall(this);
            }
          }
        }
      }

    
  })();
  