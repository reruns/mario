(function() {
	if (typeof Mario === 'undefined')
		window.Mario = {};

	var Entity = Mario.Entity = function(options) {
	  this.vel = [0,0];
	  this.acc = [0,0];
	  this.pos = options.pos;
	  this.sprite = options.sprite;
	  this.hitbox = options.hitbox;
	  left = true;
	}

	Entity.prototype.render = function(ctx, vX, vY) {
		this.sprite.render(ctx, this.pos[0], this.pos[1], vX, vY)
	}
})();