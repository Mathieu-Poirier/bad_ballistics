import { expect, test} from "bun:test";
import { test_me_obj } from "../src";
// describe("math", () => {
//   test("adds", () => {
//     expect(1 + 2).toBe(3);
//   });

//   test("multiplies", () => {
//     expect(2 * 3).toBe(6);
//   });
// });

test("object test", () => {
    expect(test_me_obj).toBeObject();
});