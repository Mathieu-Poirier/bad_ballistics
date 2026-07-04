import { getCanvasContext } from "./canvas/context.js";
import { init_gpu_device } from "./gpu/device.js";
import { shaders } from "./shader_modules/shaders.js";

async function gameStart() {
	try {
		const device = await init_gpu_device();
		const _shaderModule = device.createShaderModule({ code: shaders });
		const _context = getCanvasContext(device);
		// GPU is initialized
	} catch (error) {
		console.error(error);
	}
}

await gameStart();
