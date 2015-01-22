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
//we might have to get the size and calculate the scaling
//but this method should let us make it however big.
//Cool!
canvas.width = 512;
canvas.height = 480;
ctx.scale(2,2);
document.body.appendChild(canvas);

//viewport
var vX = 0,
    vY = 0,
    vWidth = 256,
    vHeight = 240;

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

var player = new Mario.Player([0,0], this);
var gameTime = 0;

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
   if (input.isDown('LEFT')) { // 'd' or left arrow
      player.moveLeft();
   }
   else if (input.isDown('RIGHT')) { // 'k' or right arrow
      player.moveRight();
   }
}

//update all the moving stuff
function updateEntities(dt) {
  player.update(dt);
  
  //update everyone else
}

//scan for collisions
function checkCollisions() {
}

//draw the game!
function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#7974FF";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Render the player if the game isn't over
  renderEntity(player);
};

function renderEntity(entity) {
  ctx.save();
  entity.render(ctx, vX, vY);
  ctx.restore();
}