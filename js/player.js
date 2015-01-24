(function() {
	if (typeof Mario === 'undefined')
		window.Mario = {};

	var Player = Mario.Player = function(pos) {
		this.power = 0;

		Mario.Entity.call(this, {
			pos: pos,
			sprite: new Mario.Sprite('sprites/player.png',[80,0],[16,32],0),
			hitbox: [0,0,16,32]
		});
	}

	Mario.Util.inherits(Player, Mario.Entity);

	Player.prototype.moveRight = function() {
		//we're on the ground
		if (this.vel[1] === 0) {
			this.acc[0] = .1
		}
	}

	Player.prototype.moveLeft = function() {
		if (this.vel[1] === 0) {
			this.acc[0] = -.1
		}
	}

  Player.prototype.setAnimation = function() {
    //compute changes to the sprite based on movement
		if (this.vel[0] > 0) {
			this.left = false;
		}
    this.sprite.pos[0] = 96;
    this.sprite.frames = [0,1,2];
    this.sprite.speed = 10;
  }

	Player.prototype.update = function(dt) {
		if (Math.abs(this.vel[0]) > 3) {
			this.vel[0] = 3 * this.vel[0] / Math.abs(this.vel[0]);
			this.acc[0] = 0;
		}
		//acceleration doesn't actually work this way
		//but as long as we update often enough it's okay.
		this.vel[0] += this.acc[0];
		this.vel[1] += this.acc[1];
		this.pos[0] += this.vel[0];
		this.pos[1] += this.vel[1];
    //this.setAnimation();
		this.sprite.update(dt);
	}
})();
