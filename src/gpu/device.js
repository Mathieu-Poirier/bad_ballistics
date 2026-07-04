export async function init_gpu_device(gpu = globalThis.navigator?.gpu) {
	if (gpu == null) {
		throw new Error("WebGPU not supported.");
	}

	if (typeof gpu.requestAdapter !== "function") {
		throw new TypeError("Invalid GPU object: missing requestAdapter().");
	}

	const adapter = await gpu.requestAdapter();

	if (adapter == null) {
		throw new Error("Couldn't request WebGPU adapter.");
	}

	if (typeof adapter.requestDevice !== "function") {
		throw new TypeError("Invalid GPU adapter: missing requestDevice().");
	}

	const device = await adapter.requestDevice();

	if (device == null) {
		throw new Error("Couldn't request WebGPU device.");
	}

	return device;
}
