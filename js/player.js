(function() {
	if (typeof Mario === 'undefined')
		window.Mario = {};

	var Player = Mario.Player = function(pos) {
		this.power = 0;
		this.jumping = 0;
		this.canJump = true;

		Mario.Entity.call(this, {
			pos: pos,
			sprite: new Mario.Sprite('sprites/player.png',[80,32],[16,16],0),
			hitbox: [0,0,16,16]
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

	Player.prototype.noWalk = function() {
		this.acc[0] = 0;

		if (this.left) {
			this.vel[0] += 0.2;
		} else {
			this.vel[0] -= 0.2;
		}

		if (Math.abs(this.vel[0]) <= 0.3)
			this.vel[0] = 0;
	}

	Player.prototype.jump = function() {
		if (this.jumping) {
			this.jumping -= 10;
		} else if (this.standing && this.canJump) {
			this.jumping = 150;
			this.canJump = false;
			this.standing = false;
			this.acc[1] = -.2;
		}

		if (this.jumping <= 0) {
			this.jumping = 0;
		}
	}

	Player.prototype.noJump = function() {
		this.canJump = true;
		this.jumping = 0;
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
		if (Math.abs(this.vel[0]) > 2) {
			this.vel[0] = 2 * this.vel[0] / Math.abs(this.vel[0]);
			this.acc[0] = 0;
		}
		if (this.vel[0] < 0) {
			this.left = true
		} else {
			this.left = false;
		}

		if (!this.jumping)
			this.acc[1] = .2

		//approximate acceleration
		this.vel[0] += this.acc[0];
		this.vel[1] += this.acc[1];
		this.pos[0] += this.vel[0];
		this.pos[1] += this.vel[1];
    //this.setAnimation();
		this.sprite.update(dt);
	}

	Player.prototype.checkCollisions = function(statics) {
		//x-axis first!
		var h = this.power > 0 ? 2 : 1;
		var w = 1;
		if (this.pos[1] % 16 != 0) {
			h += 1;
		}
		if (this.pos[0] % 16 != 0) {
			w += 1;
		}
		var baseX = Math.floor(this.pos[0] / 16);
		var baseY = Math.floor(this.pos[1] / 16);

		for (var i = 0; i < h; i++) {
			for (var j = 0; j < w; j++) {
				if (statics[baseY + i][baseX + j]) {
					statics[baseY + i][baseX + j].isCollideWith(this);
				}
			}
		}
	}
})();
