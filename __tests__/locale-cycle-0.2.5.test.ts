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
* @file: __tests__/locale-cycle-0.2.5.test.ts
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
import abAnimations, { AB_LOCALE_CYCLE_CHIP_CLASS, AB_LOCALE_CYCLE_SLOTS, AB_LOCALE_CYCLE_WORD_CLASS, supportedAnimations } from '../index'
import LocaleCycle, { LocaleCycleChipAnimation } from '../locale-cycle'

// 📁 root + reader
const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const read = (rel: string) => readFileSync(join(root, rel), 'utf8')
const css = read('locale-cycle/styles.css') // 🎨
const pkg = JSON.parse(read('package.json')) // 📦

describe('0.2.5: the locale cycle 🌍', () => {
  it('exports the class names, slot count and both animations', () => {
    expect(AB_LOCALE_CYCLE_WORD_CLASS).toBe('ab-locale-cycle-word') // 👋
    expect(AB_LOCALE_CYCLE_CHIP_CLASS).toBe('ab-locale-cycle-chip') // 🎚️
    expect(AB_LOCALE_CYCLE_SLOTS).toBe(4) // 4️⃣
    expect(LocaleCycle.ref).toContain('abLocaleCycleWord') // 🔗
    expect(LocaleCycleChipAnimation.ref).toContain('step-end') // ⚡
    expect(supportedAnimations.map((a) => a.name)).toEqual(expect.arrayContaining(['locale-cycle-word', 'locale-cycle-chip'])) // 📋
    expect(Object.keys(abAnimations.keyframes).join(' ')).toMatch(/ocale/) // 🎞️
  })

  it('ships the stylesheet with its keyframes, still frame and pause', () => {
    expect(pkg.exports['./locale-cycle']).toBe('./locale-cycle/index.ts') // 📦
    expect(pkg.exports['./locale-cycle/styles.css']).toBe('./locale-cycle/styles.css') // 🎨
    expect(pkg.files).toContain('locale-cycle') // 📦
    expect(css.match(/@keyframes [a-zA-Z]+/g)).toEqual(['@keyframes abLocaleCycleWord', '@keyframes abLocaleCycleChip']) // 🎞️
    expect(css).toContain('.ab-locale-cycle-word[data-ab-still]') // 🖼️
    expect(css).toContain("[data-ab-paused='true'] .ab-locale-cycle-word") // ⏸️
  })

  it('only animates under no-preference, and stops under reduced motion (OS + forced) ♿', () => {
    const motion = css.slice(css.indexOf('@media (prefers-reduced-motion: no-preference)'), css.indexOf('/* ⏸️')) // ▶️
    expect(motion).toContain('animation: abLocaleCycleWord') // ✅ inside the gate
    expect(css.slice(0, css.indexOf('@media (prefers-reduced-motion: no-preference)'))).not.toMatch(/animation:/) // 🚫 not before it
    expect(css).toMatch(/@media \(prefers-reduced-motion: reduce\)[\s\S]*animation: none/) // ♿ OS
    expect(css).toContain("[data-ab-reduced-motion='true'] .ab-locale-cycle-chip { animation: none; }") // ♿ forced
  })
})
