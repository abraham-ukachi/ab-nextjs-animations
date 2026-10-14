/*
* @license MIT
* ~~~~~~~~~~~~
* ab-nextjs-animations
* ~~~~~~~~~~~~
* Copyright (c) 2026 Abraham Ukachi. The abElements Project.
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the 'Software'), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*
* @project: ab-nextjs-animations
* @file: __tests__/package-smoke.test.ts
* @authors: Abraham Ukachi <abrahamukachi@gmail.com>
*/

import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

describe("ab-nextjs-animations package smoke", () => {
  it("targets Next 16.3.4 peers and package metadata", () => {
    const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
    expect(pkg.name).toBe("ab-nextjs-animations");
    expect(pkg.version).toMatch(/^\d+\.\d+\.\d+$/);
    expect(pkg.peerDependencies.next).toBe("^16.3.4");
  });

  it("ships styles.css for every supported animation folder", () => {
    const folders = [
      "pop-in",
      "fade-in",
      "fade-out",
      "fade",
      "slide-from-down",
      "slide-from-up",
      "slide-left",
      "slide-from-left",
      "slide-right",
      "slide-from-right",
      "slide-down",
      "slide-up",
      "loop",
    ];
    for (const folder of folders) {
      const css = readFileSync(join(root, folder, "styles.css"), "utf8");
      expect(css.length).toBeGreaterThan(0);
    }
  });

  it("exports supportedAnimations from the package index", async () => {
    const mod = await import("../index.ts");
    expect(Array.isArray(mod.supportedAnimations)).toBe(true);
    expect(mod.supportedAnimations.length).toBe(13);
    expect(mod.default).toBeTruthy();
    expect(mod.default.keyframes).toBeTruthy();
    expect(mod.default.refs).toBeTruthy();
  });
});
