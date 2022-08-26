const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const BALLZ = [];
let LEFT, UP, RIGHT, DOWN;
let velocity = 4;
class Ball {
	constructor(x, y, r) {
		this.x = x;
		this.y = y;
		this.r = r;
		this.velocity = 10;
		this.player = false;
		BALLZ.push(this);
	}
	drawBall() {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
		ctx.strokeStyle = "black";
		ctx.stroke();
		ctx.fillStyle = "red";
		ctx.fill();
	}
}

function keyControl(b) {
	// use keydown for start de move with the keyboard
	canvas.addEventListener("keydown", function (e) {
		if (e.keyCode === 37) {
			LEFT = true;
			//x--;
		}
		if (e.keyCode === 38) {
			UP = true;
			//y--;
		}
		if (e.keyCode === 39) {
			RIGHT = true;
			//x++;
		}
		if (e.keyCode === 40) {
			DOWN = true;
			//y++;
		}
		//console.log(e);
	});
	//keyup...when let to press the keyboard the move stop
	canvas.addEventListener("keyup", function (e) {
		if (e.keyCode === 37) {
			LEFT = false;
			//x--;
		}
		if (e.keyCode === 38) {
			UP = false;
			//y--;
		}
		if (e.keyCode === 39) {
			RIGHT = false;
			//x++;
		}
		if (e.keyCode === 40) {
			DOWN = false;
			//y++;
		}
		//console.log(e);
	});

	if (LEFT) {
		b.x -= b.velocity;
	}
	if (UP) {
		b.y -= b.velocity;
	}
	if (RIGHT) {
		b.x += b.velocity;
	}
	if (DOWN) {
		b.y += b.velocity;
	}
}

//to move the ball
function mainLoop() {
	ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight); //to erase the ball after move

	BALLZ.forEach((b) => {
		b.drawBall();
		if (b.player) {
			keyControl(b);
		}
	});
	requestAnimationFrame(mainLoop);
}

let Ball1 = new Ball(200, 200, 30);
let Ball2 = new Ball(300, 300, 20);
Ball1.player = true;
Ball2.player = true;
requestAnimationFrame(mainLoop);
