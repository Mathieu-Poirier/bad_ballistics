export async function init_gpu_device(gpu = globalThis.navigator?.gpu) {
	if (!gpu) {
		throw Error("WebGPU not supported.");
	}

	const adapter = await gpu.requestAdapter();

	if (!adapter) {
		throw Error("Couldn't request WebGPU adapter.");
	}

	const device = await adapter.requestDevice();

	return device;
}
