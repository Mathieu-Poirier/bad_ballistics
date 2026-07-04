import { init_gpu_device } from "./gpu/device.js"

function gameStart() {
	const device = init_gpu_device();
}

gameStart();