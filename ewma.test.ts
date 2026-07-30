import { EWMA } from "./ewma.ts";
import { test } from "node:test";
import assert from "node:assert/strict";
test("smooths", () => {
  const e = new EWMA(0.5);
  assert.equal(e.update(10), 10);
  assert.equal(e.update(20), 15);
});
