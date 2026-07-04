import { describe, expect, test } from "bun:test";
import { getCanvasContext } from "../../src/canvas/context.js";

describe("Configuring a WebGPU context on a canvas element", () => {
	test("device is null", () => {
		expect(() => getCanvasContext(null)).toThrow(
			"Device not available when setting up canvas context.",
		);
	});

	test("device is not passed", () => {
		expect(() => getCanvasContext()).toThrow(
			"Device not available when setting up canvas context.",
		);
	});
});