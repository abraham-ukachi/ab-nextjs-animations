import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

describe("ab-nextjs-animations package smoke", () => {
  it("targets Next 16.3.4 peers and package metadata", () => {
    const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
    expect(pkg.name).toBe("ab-nextjs-animations");
    expect(pkg.version).toBe("0.2.0");
    expect(pkg.peerDependencies.next).toBe("16.3.4");
  });

  it("ships styles.css for every supported animation folder", () => {
    const folders = [
      "pop-in",
      "fade-in",
      "fade-out",
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
    expect(mod.supportedAnimations.length).toBe(12);
    expect(mod.default).toBeTruthy();
    expect(mod.default.keyframes).toBeTruthy();
    expect(mod.default.refs).toBeTruthy();
  });
});
