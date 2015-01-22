(function() {
	if (typeof Mario === 'undefined')
		window.Mario = {};

	var Block = Mario.Block = function(pos) { 

		Mario.Entity.call(this, {
			pos: pos,
			sprite: new Mario.Sprite('sprites/player.png',[80,0],[16,32],0),
			hitbox: [0,0,16,16]
		});
	}
})();