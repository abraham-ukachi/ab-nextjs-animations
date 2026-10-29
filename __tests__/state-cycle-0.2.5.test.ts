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
* @name: Locale Cycle Tests
* @file: __tests__/state-cycle-0.2.5.test.ts
* @type: Test
* @authors: Abraham Ukachi <abrahamukachi@gmail.com>
*/

/*
* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
* MOTTO: We'll always do more 😜!!!
* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
*/

// 🧪 vitest
import { describe, expect, it } from 'vitest'
// 📄 fs + paths
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
// 🎬 under test
import { AB_STATE_CYCLE_CLASSES, AB_STATE_CYCLE_DURATION, AB_STATE_CYCLE_STATES, supportedAnimations } from '../index'
import StateCycle, { StateCyclePressAnimation, StateCycleRideAnimation } from '../state-cycle'

// 📁 root + reader
const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const read = (rel: string) => readFileSync(join(root, rel), 'utf8')
const css = read('state-cycle/styles.css') // 🎨
const pkg = JSON.parse(read('package.json')) // 📦

describe('0.2.5: the 4-state cycle 🔁 (Welcome v6 upgraded: 4 × 600ms = 2.4s)', () => {
  it('exports the classes, the loop and the registry entries', () => {
    expect(AB_STATE_CYCLE_STATES).toBe(4); expect(AB_STATE_CYCLE_DURATION).toBe(2400) // ⏱️
    expect(Object.values(AB_STATE_CYCLE_CLASSES).every((c) => c.startsWith('ab-state-cycle-'))).toBe(true) // 🏷️ ab- prefix rule
    for (const c of Object.values(AB_STATE_CYCLE_CLASSES)) expect(css).toContain(`.${c}`) // 🎨 every class is styled
    expect(StateCycle.ref).toContain('step-end'); expect(StateCyclePressAnimation.ref).toContain('/ 4') // ⚡ per state / per step
    expect(StateCycleRideAnimation.keyframes['75%, 100%']).toEqual({ offsetDistance: '100%' }) // 🎢 rides 0–75% then holds
    expect(supportedAnimations.map((a) => a.name)).toEqual(expect.arrayContaining(['state-cycle-highlight', 'state-cycle-press', 'state-cycle-pop', 'state-cycle-ride'])) // 📋
  })
  it('ships the stylesheet (exports + files) with 13 namespaced keyframes', () => {
    expect(pkg.exports['./state-cycle']).toBe('./state-cycle/index.ts'); expect(pkg.exports['./state-cycle/styles.css']).toBe('./state-cycle/styles.css') // 📦
    expect(pkg.files).toContain('state-cycle') // 📦
    const kf = css.match(/@keyframes [a-zA-Z]+/g) ?? []
    expect(kf).toHaveLength(13); expect(kf.every((k) => k.startsWith('@keyframes abStateCycle'))).toBe(true) // 🎞️
  })
  it('spec timings: word fades in over 0.24s, press 0–15% at 0.94, pop 0.6 → 1.06 (25%) → 1 (45%), switch off at 1.2s', () => {
    expect(css).toMatch(/@keyframes abStateCycleWord \{[\s\S]*?10% \{ opacity: 1/) // 🌅
    expect(css).toMatch(/@keyframes abStateCyclePress \{\s*0% \{ transform: scale\(var\(--ab-motion-press-scale, 0\.94\)\); \}[^{]*15%, 100%/) // 👆
    expect(css).toMatch(/@keyframes abStateCyclePop \{\s*0% \{ transform: scale\(0\.6\); \}[^{]*25% \{ transform: scale\(1\.06\); \}[^{]*45%, 100%/) // 🎈
    expect(css).toContain("[data-ab-cycle='every-2'] { animation-name: abStateCycleChipEvery2; }"); expect(css).toContain("[data-ab-cycle='first-last']") // 2️⃣ 3️⃣ k mod n
    expect(css).toMatch(/@keyframes abStateCycleSwitch \{[\s\S]*?50%, 100%/) // 🔀
  })
  it('animates only under no-preference; stills = state 0; stops on reduce (OS + forced) and pauses ♿⏸️', () => {
    const gate = css.indexOf('@media (prefers-reduced-motion: no-preference)')
    expect(css.slice(0, gate).replace(/\/\*[\s\S]*?\*\//g, '')).not.toMatch(/animation/) // 🚫 nothing animates before the gate
    expect(css).toContain('.ab-state-cycle-word[data-ab-still] { opacity: 1; }') // 🖼️
    expect(css).toContain('.ab-state-cycle-hl[data-ab-still]') // 🔦
    expect(css).toMatch(/\.ab-state-cycle-ride \{ offset-distance: 100%/) // 🏁 still at the end
    expect(css).toMatch(/@media \(prefers-reduced-motion: reduce\)[\s\S]*animation: none/) // ♿ OS
    expect(css).toContain("[data-ab-reduced-motion='true'] :is(.ab-state-cycle-word") // ♿ forced
    expect(css).toContain("[data-ab-paused='true'] :is(.ab-state-cycle-word") // ⏸️
  })
})
