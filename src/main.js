import { init_gpu_device } from "./gpu/device.js";

async function gameStart() {
	try {
		await init_gpu_device();
		// GPU is initialized
	} catch (error) {
		console.error(error);
	}
}

await gameStart();
