//cross-browser RAF
var requestAnimFrame = (function(){
  return window.requestAnimationFrame       ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame    ||
    window.oRequestAnimationFrame      ||
    window.msRequestAnimationFrame     ||
    function(callback){
      window.setTimeout(callback, 1000 / 60);
    };
})();


//create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext('2d');
canvas.width = 256;
canvas.height = 240;
document.body.appendChild(canvas);

//load our images
resources.load([
  'sprites/player.png',
  'sprites/enemy.png',
  'sprites/tiles.png'
]);
resources.onReady(init);

//initialize
var lastTime;
function init() {
  lastTime = Date.now();
  main();
}

var gameTime = 0;

var player = {
  pos: [0,0],
  sprite: new Sprite('sprites/player.png',[80,0],[16,32],0)
};

//set up the game loop
function main() {
  var now = Date.now();
  var dt = (now - lastTime) / 1000.0;
  
  update(dt);
  render();
  
  lastTime = now;
  requestAnimFrame(main);
}

function update(dt) {
  gameTime += dt;
  
  handleInput(dt);
  updateEntities(dt);
  
  checkCollisions();
}

function handleInput(dt) {
  //for now do nothing
}

//update all the moving stuff
function updateEntities(dt) {
  player.sprite.update(dt);
  
  //update everyone else
}

//scan for collisions
function checkCollisions() {
}

//draw the game!
function render() {
    ctx.fillStyle = "#FFFF00";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Render the player if the game isn't over
    renderEntity(player);
};

function renderEntity(entity) {
    ctx.save();
    ctx.translate(entity.pos[0], entity.pos[1]);
    entity.sprite.render(ctx);
    ctx.restore();
}