import VT100 from "./util/VT100.js";
import Alpha from "./util/Alpha.js";


class AlphaMove extends Alpha {
	constructor(line, column) {
		super();
		
		if(line == undefined || column == undefined) {
			this.line = parseInt(Math.random()*20+1);
			this.column = parseInt(Math.random()*40+1);
		} else {
			this.line = line;
			this.column = column;
		}
		
		this.isBlink = true;
		this.Directions = ["LEFT", "RIGHT", "UP", "DOWN"];
		this.direction = this.Directions[parseInt(Math.random()*4)];
		this.show();
	}
	
	blink() {
		if(this.isBlink)
			this.show();
		else
			this.hide();
		this.isBlink = !this.isBlink;
	}
	
	left() {
		this.hide();
		this.column--;
		this.show();
	}
	
	right() {
		this.hide();
		this.column++;
		this.show();
	}
	
	up() {
		this.hide();
		this.line--;
		this.show();
	}
	
	down() {
		this.hide();
		this.line++;
		this.show();
	}
	
	move() {
		switch(this.direction) {
			case "LEFT" :
				this.left();
				break;
				
			case "RIGHT" :
				this.right();
				break;
				
			case "UP" :
				this.up();
				break;
				
			case "DOWN" :
				this.down();
				break;
		}
	}
	
	sideMove() {
		if(this.line == 1 && this.column == 1)
			this.direction = "RIGHT";
		else if(this.line == 1 && this.column == 40)
			this.direction = "DOWN";
		else if(this.line == 20 && this.column == 40)
			this.direction = "LEFT";
		else if(this.line == 20 && this.column == 1)
			this.direction = "UP";
			
		this.move()
	}
	
}


VT100.clearScreen();

/*let a = new AlphaMove(1, 1);
let speed = parseInt(Math.random()*100+50);
setInterval(() => a.sideMove(), speed);*/


for(let i=0; i<10; i++) {
	let a = new AlphaMove(1, 1);
	let aa = new AlphaMove();
	let speed = parseInt(Math.random()*100+50);
	setInterval(() => a.sideMove(), speed);
	setInterval(() => aa.blink(), speed);
}


VT100.reset();
VT100.cursorMove(21,1);
console.log("Program End...")