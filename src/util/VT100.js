import { sprintf } from "sprintf-js";

export default class VT100 {
	static clearScreen() {
		process.stdout.write("\u001B[2J");
	}
	
	static reset() {
		process.stdout.write("\u001B[0m");
	}
	
	static cursorMove(line, column) {
		process.stdout.write(sprintf("\u001B[%d;%dH", line, column));
	}
	
	static setFore(fg) {
		process.stdout.write(sprintf("\u001B[%dm", fg));
	}
	
	static setBack(bg) {
		process.stdout.write(sprintf("\u001B[%dm", bg));
	}
	
	static print(ch) {
		process.stdout.write(ch);
	}
}