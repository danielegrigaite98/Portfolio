//Initialize some random variables for bubble starting positions, sizes and the pace of moving.
var context;
var myWindow = window;
var x = [10, 590, 689, 329, 700, 207, 487, 500, 1000, 901];
var y = [10, 0, 102, 70, 339, 400, 40, 205, 0, 401];
var dx = [5, 6, 8, 2, 7, 4, 2, 5];
var dy = [5, 6, 8, 2, 7, 4, 2, 5];
var sizes = [19, 30, 40, 23, 18, 34, 21, 20, 16];

//Initialize this the drawing of bubbles on page load (specified in the index.html).
function init() {
	context = canvas.getContext('2d');
	canvas.height = 420;
	canvas.width = window.innerWidth;
	//Calls the draw function on a repeated interval to draw the bubbles.
	setInterval(draw, 10);
}

//Draws n number of bubbles on screen with them moving and bouncing
function draw() {
	//This line clears the previous bubbles from the screen before drawing new ones with updated positions.
	context.clearRect(0,0, myWindow.innerWidth,440);
	
	//This loop iterates over all the bubbles and updates their coordindates.
	for(var i = 0; i < x.length; i++) {
		context.beginPath();
		context.fillStyle = "#87CEFA";
		context.arc(x[i], y[i], sizes[i], 0, Math.PI*2, true);
		context.closePath();
		context.fill();
		//Checks if a bubble is at a wall, if so change the direction.
		if( x[i]<0 || x[i]>myWindow.innerWidth) dx[i]=-dx[i];
		if( y[i]<0 || y[i]>420) dy[i]=-dy[i]; 
		x[i] += dx[i];
		y[i] += dy[i];
	}
	
}
