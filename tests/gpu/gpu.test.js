import { expect, test } from "bun:test";

import { init_gpu_device } from "../../src/gpu/device.js";

test("throws if WebGPU is not supported", async () => {
	await expect(init_gpu_device(null)).rejects.toThrow("WebGPU not supported.");
});

test("throws if WebGPU adapter cannot be requested", async () => {
	const fake_gpu = {
		requestAdapter: async () => null,
	};

	await expect(init_gpu_device(fake_gpu)).rejects.toThrow(
		"Couldn't request WebGPU adapter.",
	);
});

test("returns a device if adapter and device are available", async () => {
	const fake_device = {};

	const fake_gpu = {
		requestAdapter: async () => ({
			requestDevice: async () => fake_device,
		}),
	};

	await expect(init_gpu_device(fake_gpu)).resolves.toBe(fake_device);
});
