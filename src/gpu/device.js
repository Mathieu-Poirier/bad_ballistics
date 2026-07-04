export async function init_gpu_device() {
	if (!navigator.gpu) {
		throw Error("WebGPU not supported.");
	}

	let adapter;
	try {
		adapter = await navigator.gpu.requestAdapter();
	} catch (error) {
		console.error(error);
	}
	if (!adapter) {
		throw Error("Couldn't request WebGPU adapter.");
	}

	const device = await adapter.requestDevice();

    return device;

}