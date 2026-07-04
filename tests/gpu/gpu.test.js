import { describe, expect, test } from "bun:test";
import { init_gpu_device } from "../../src/gpu/device.js";

describe("init_gpu_device", () => {
	test("rejects if WebGPU is missing", async () => {
		await expect(init_gpu_device(null)).rejects.toThrow(
			"WebGPU not supported.",
		);
	});

	test("rejects if GPU object is invalid", async () => {
		await expect(init_gpu_device({})).rejects.toThrow(
			"Invalid GPU object: missing requestAdapter().",
		);
	});

	test("rejects if no adapter is returned", async () => {
		const fake_gpu = {
			requestAdapter: async () => null,
		};

		await expect(init_gpu_device(fake_gpu)).rejects.toThrow(
			"Couldn't request WebGPU adapter.",
		);
	});

	test("rejects if adapter is invalid", async () => {
		const fake_gpu = {
			requestAdapter: async () => ({}),
		};

		await expect(init_gpu_device(fake_gpu)).rejects.toThrow(
			"Invalid GPU adapter: missing requestDevice().",
		);
	});

	test("rejects if no device is returned", async () => {
		const fake_gpu = {
			requestAdapter: async () => ({
				requestDevice: async () => null,
			}),
		};

		await expect(init_gpu_device(fake_gpu)).rejects.toThrow(
			"Couldn't request WebGPU device.",
		);
	});

	test("returns device if initialization succeeds", async () => {
		const fake_device = {};

		const fake_gpu = {
			requestAdapter: async () => ({
				requestDevice: async () => fake_device,
			}),
		};

		await expect(init_gpu_device(fake_gpu)).resolves.toBe(fake_device);
	});
});
