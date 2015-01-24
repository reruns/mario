(function() {
	if (typeof Mario === 'undefined')
		window.Mario = {};

	var Entity = Mario.Entity = function(options) {
	  this.vel = [0,0];
	  this.acc = [0,0];
		this.standing = false;
	  this.pos = options.pos;
	  this.sprite = options.sprite;
	  this.hitbox = options.hitbox;
	  left = true;
	}

	Entity.prototype.render = function(ctx, vX, vY) {
		this.sprite.render(ctx, this.pos[0], this.pos[1], vX, vY)
	}

	Entity.prototype.collideWall = function(wall) {
		//the wall will always be a 16x16 block with hitbox = [0,0,16,16].
		this.vel[0] = 0;
		if (this.left) {
			this.pos[0] = wall.pos[0] + 16 - this.hitbox[0];
		} else {
			this.pos[0] = wall.pos[0] - this.hitbox[2] - this.hitbox[0];
		}
	}
})();
