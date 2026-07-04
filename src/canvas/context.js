export function getCanvasContext(device) {
	if (!device) {
		throw new Error("Device not available when setting up canvas context.");
	}

	const canvas = document.querySelector("#gpuCanvas");

	if (!canvas) {
		throw new Error("Canvas #gpuCanvas not found.");
	}

	const context = canvas.getContext("webgpu");

	if (!context) {
		throw new Error("WebGPU context not supported.");
	}

	context.configure({
		device,
		format: navigator.gpu.getPreferredCanvasFormat(),
		alphaMode: "premultiplied",
	});

	return context;
}
