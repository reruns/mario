(function() {
	if (typeof Mario === 'undefined')
		window.Mario = {};

	var Player = Mario.Player = function(pos) {
		this.power = 0;
		this.powering = this.damaging = [];
		this.jumping = 0;
		this.canJump = true;
		this.invincibility = 0;

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
			this.acc[0] = .1;
		} else {
			this.acc[0] = 0.05;
		}
	}

	Player.prototype.moveLeft = function() {
		if (this.vel[1] === 0) {
			this.acc[0] = -.1
		} else {
			this.acc[0] = -0.05;
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
		if (this.vel[1] > 0) {
			return;
		}
		if (this.jumping) {
			this.jumping -= 1;
		} else if (this.standing && this.canJump) {
			this.jumping = 16;
			this.canJump = false;
			this.standing = false;
			this.vel[1] = -3;
		}
	}

	Player.prototype.noJump = function() {
		this.canJump = true;
		if (this.jumping <= 8) {
			this.jumping = 0;
		} else {
			this.jumping -= 1;
		}

	}

  Player.prototype.setAnimation = function() {
		//okay cool, now set the sprite
    if (this.jumping) {
			this.sprite.pos[0] = 160;
			this.sprite.speed = 0;
		} else if (this.standing) {
			if (Math.abs(this.vel[0]) > 0) {
				if (this.vel[0] * this.acc[0] >= 0) {
					this.sprite.pos[0] = 96;
					this.sprite.frames = [0,1,2];
					this.sprite.speed = Math.abs(this.vel[0]) * 5;
				} else {
					this.left = !this.left;
					this.sprite.pos[0] = 144;
					this.sprite.speed = 0;
				}
			} else {
				this.sprite.pos[0] = 80;
				this.sprite.speed = 0;
			}
		}

		//which way are we facing?
		if (this.left) {
			this.sprite.img = 'sprites/playerl.png'
		} else {
			this.sprite.img = 'sprites/player.png'
		}
  }

	Player.prototype.update = function(dt) {
		//TODO: consolidate logic for powering up and down, and make sure this holds for fire flowers.
		if (this.powering.length !== 0) {
			switch (this.powering.shift()) {
				case 0: this.sprite.pos[0] = 80;
								this.startSprite = this.sprite;
								break;
				case 1: this.sprite = this.startSprite;
								this.pos[1] += 16;
								break;
				case 2: this.sprite = this.twoSprite;
								this.pos[1] -= 16;
								break;
				case 3: this.sprite = this.threeSprite;
								break;
				case 4: this.sprite = this.endSprite;
								this.pos[1] -= 16;
								break;
			}
			if (this.powering.length === 0) {
				delete items[this.touchedItem];
			}
			return;
		}

		if (this.damaging.length !== 0) {
			switch (this.damaging.shift()) {
				case 0: this.sprite.pos = [160, 0];
								break;
				case 1: this.sprite = this.twoSprite;
								// this.pos[1] += 16;
								break;
				case 2: this.sprite = this.threeSprite;
								// this.pos[1] -= 16;
								break;
				case 3: this.sprite = this.endSprite;
								// this.pos[1] += 16;
								break;
			}
			console.log(this.sprite);
			return;
		}

		if (this.invincibility) {
			this.invincibility -= Math.round(dt * 60);
		}

		if (Math.abs(this.vel[0]) > 2) {
			this.vel[0] = 2 * this.vel[0] / Math.abs(this.vel[0]);
			this.acc[0] = 0;
		}
		if (this.vel[0] < 0) {
			this.left = true
		} else if (this.vel[0] > 0){
			this.left = false;
		}

		if (this.jumping) {
			this.acc[1] = 0;
		} else {
			this.acc[1] = .2;
		}

		//approximate acceleration
		this.vel[0] += this.acc[0];
		this.vel[1] += this.acc[1];
		this.pos[0] += this.vel[0];
		this.pos[1] += this.vel[1];
    this.setAnimation();
		this.sprite.update(dt);
	}

	Player.prototype.checkCollisions = function() {
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
			if (baseY + i < 0 || baseY + i >= 15) continue;
			for (var j = 0; j < w; j++) {
				if (baseY < 0) { i++;}
				if (statics[baseY + i][baseX + j]) {
					statics[baseY + i][baseX + j].isCollideWith(this);
				}
				if (blocks[baseY + i][baseX + j]) {
					blocks[baseY + i][baseX + j].isCollideWith(this);
				}
			}
		}
	}

	Player.prototype.powerUp = function(idx) {
		//TODO: This animation still plays too fast
	  this.powering = [0,2,1,2,1,2,3,1,2,3,1,4];
		this.touchedItem = idx;

		if (this.power === 0) {
			this.twoSprite = new Mario.Sprite('sprites/player.png', [320, this.sprite.pos[1] - 32], [16, 32], 0);
			this.threeSprite = new Mario.Sprite('sprites/player.png', [80, this.sprite.pos[1] - 32], [16, 32], 0);
			this.endSprite = new Mario.Sprite('sprites/player.png', [128, this.sprite.pos[1]- 32], [16,32], 0);
			this.power = 1;
			this.hitbox = [0,0,16,32];
		}
	}

	Player.prototype.damage = function() {
		if (this.power === 0) { //if you're already small, you dead!
			this.die();
		} else { //otherwise, you get turned into small mario
			this.damaging = [0,1,2,1,2,1,2,1,2,1,2,3];
			this.twoSprite = new Mario.Sprite('sprites/player.png', [240, 32], [16, 16], 0);
			this.threeSprite = new Mario.Sprite('sprites/player.png', [240, 0], [16, 32], 0);
			this.endSprite = new Mario.Sprite('sprites/player.png', [160, 32], [16,16], 0);
			this.invincibility = 120;
			this.power = 0;
			this.hitbox = [0,0,16,16];
		}
	}

	Player.prototype.die = function () {
		//TODO: This will work the same way as block#bonk.
	}
})();
