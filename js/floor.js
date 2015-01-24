(function() {
	if (typeof Mario === 'undefined')
		window.Mario = {};

	var Floor = Mario.Floor = function(pos, sprite) {

		Mario.Entity.call(this, {
			pos: pos,
			sprite: sprite,
			hitbox: [0,0,16,16]
		});
	}

	Mario.Util.inherits(Floor, Mario.Entity);

	Floor.prototype.isCollideWith = function (ent) {
		//the first two elements of the hitbox array are an offset, so let's do this now.
		var hpos1 = [this.pos[0] + this.hitbox[0], this.pos[1] + this.hitbox[1]];
		var hpos2 = [ent.pos[0] + ent.hitbox[0], ent.pos[1] + ent.hitbox[1]];

		if (!(hpos1[0] > hpos2[0]+ent.hitbox[2] || (hpos1[0]+this.hitbox[2] < hpos2[0]))) {
			//x coords overlap
			if (!(hpos1[1] > hpos2[1]+ent.hitbox[3] || (hpos1[1]+this.hitbox[3] < hpos2[1]))) {
				//both overlap
				if (hpos2[1] == hpos1[0] + this.hitbox[0]) {
					//entity is standing on the floor.
					ent.vel[1] = 0;
					ent.pos[1] = hpos1[1] - ent.hitbox[3] - ent.hitbox[1];
					this.standing = true;
				} else {
					//entity is falling into a pit, hit the floor from the side
					ent.collideWall(this);
				}
			}
		}
	}
})();
