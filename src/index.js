// Move the mouse across the screen as a sine wave.
var robot = require("robotjs");

const oneMinutes = 1000 * 60;
// const waitTime = oneMinutes * 2;
const waitTime = 2000;


monitoringMousePosition();
console.log('マウスカーソル位置を監視しています。');
console.log('ウィンドウを閉じると動作を停止します。');

async function monitoringMousePosition(){
	var mousePosition = robot.getMousePos();
	await sleep(waitTime);
	var currentMousePosition = robot.getMousePos();
	if 
	(
		currentMousePosition.x === mousePosition.x &&
		currentMousePosition.y === mousePosition.y
	)
	{
		robot.moveMouseSmooth(currentMousePosition.x + 100, currentMousePosition.y + 100);
	}
	monitoringMousePosition();
}

function sleep(ms){
	return new Promise((resolve)=>{
		setTimeout(resolve,ms);
	})
}