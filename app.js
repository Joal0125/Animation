const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let x = 100;
let y = 100;
let LEFT, UP, RIGHT, DOWN;

function drawBall(x, y, r) {
	ctx.beginPath();
	ctx.arc(x, y, r, 0, 2 * Math.PI);
	ctx.strokeStyle = "black";
	ctx.stroke();
	ctx.fillStyle = "red";
	ctx.fill();
}
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

function move() {
	if (LEFT) {
		x--;
	}
	if (UP) {
		y--;
	}
	if (RIGHT) {
		x++;
	}
	if (DOWN) {
		y++;
	}
}

//to move the ball
setInterval(function () {
	ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight); //to erase the ball after move
	move();
	drawBall(x, y, 20);
}, 1000 / 60);
