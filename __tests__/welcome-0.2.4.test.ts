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
* @name: Welcome v6 animations (0.2.4)
* @file: __tests__/welcome-0.2.4.test.ts
* @type: TypeScript (Vitest)
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
import abAnimations, { AB_MOTION, AB_MOTION_TOKENS, getAbSlideStepDirection, supportedAnimations } from '../index'

// 📁 root + reader
const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const read = (rel: string) => readFileSync(join(root, rel), 'utf8')
// 🎨 the five new stylesheets
const NEW = ['slide-step', 'wire', 'spin', 'progress-sweep', 'motion'] as const
// ✂️ the body of the @media (prefers-reduced-motion: reduce) block (balanced braces)
const reducedBlock = (css: string): string => {
  const start = css.indexOf('@media (prefers-reduced-motion: reduce)') // 🔍
  if (start < 0) return '' // 🙅
  let depth = 0 // 🧮
  for (let i = css.indexOf('{', start); i < css.length; i++) {
    if (css[i] === '{') depth++ // ⤵️
    if (css[i] === '}' && --depth === 0) return css.slice(start, i + 1) // ⤴️ done
  }
  return '' // 🛟
}
// 🏷️ every class a stylesheet defines (from `.ab-…` selectors)
const classes = (css: string) => [...new Set([...css.matchAll(/\.(ab-[a-z-]+)/g)].map((m) => m[1]))]

describe('0.2.4: every new animation respects prefers-reduced-motion ♿', () => {
  it.each(NEW)('%s/styles.css has a reduced-motion block covering each of its classes', (name) => {
    const css = read(`${name}/styles.css`) // 🎨
    const block = reducedBlock(css) // ♿
    expect(block, name).not.toBe('') // ✅ present
    for (const cls of classes(css)) expect(block, `${name}: .${cls}`).toContain(`.${cls}`) // ✅ each class handled
  })

  it.each(NEW)('%s/styles.css also honours the forced [data-ab-reduced-motion] switch (or needs none)', (name) => {
    const css = read(`${name}/styles.css`) // 🎨
    // 🔁 progress-sweep follows the OS only (no component forces it today)
    if (name === 'progress-sweep') return
    expect(css).toContain("[data-ab-reduced-motion='true']") // ♿ forced
  })

  it('slide-step never translates under reduced motion (opacity cross-fade only)', () => {
    const block = reducedBlock(read('slide-step/styles.css')) // ♿
    expect(block).toContain('abSlideStepFadeIn') // 🌫️
    expect(block).not.toMatch(/abSlideStepIn |abSlideStepOut /) // 🚫 moving keyframes
    const css = read('slide-step/styles.css') // 🎨
    const fade = css.slice(css.indexOf('@keyframes abSlideStepFadeIn'), css.indexOf('/* ♿ forced')) // 🎞️
    expect(fade).not.toContain('transform') // 🚫 movement
  })

  it('wires + pulses become static (drawn / poster frame) under reduced motion', () => {
    const block = reducedBlock(read('wire/styles.css')) // ♿
    expect(block).toMatch(/\.ab-wire-draw \{ animation: none; stroke-dashoffset: 0; \}/) // 🖊️
    expect(block).toMatch(/\.ab-wire-pulse \{ animation: none; opacity: 1; stroke-dashoffset: var\(--ab-wire-poster, 55\); \}/) // 🖼️
  })

  it('motion transitions snap and press / lift scales are disabled under reduced motion', () => {
    const block = reducedBlock(read('motion/styles.css')) // ♿
    expect(block).toContain('transition: none') // 🚫
    expect(block).toContain('transform: none') // 🚫
  })
})

describe('slide-step: direction-aware ➡️⬅️', () => {
  it('has separate enter / leave keyframes driven by a forward / back sign', () => {
    const css = read('slide-step/styles.css') // 🎨
    expect(css).toContain('@keyframes abSlideStepIn') // ⏭️
    expect(css).toContain('@keyframes abSlideStepOut') // 👋
    expect(css).toMatch(/\[data-ab-direction='back'\] \.ab-slide-step-in[\s\S]*?--_ab-step-sign: -1/) // ⏮️
    expect(css).toMatch(/\[dir='rtl'\] \.ab-slide-step-in[\s\S]*?--ab-slide-step-flip: -1/) // 🌍
    expect(css).toContain('translateX(calc(-1 * var(--_ab-step-offset)))') // 👋 leaves to the other side
  })

  it('getAbSlideStepDirection: plain + looped (shortest way round)', () => {
    expect(getAbSlideStepDirection(0, 1)).toBe('forward') // ⏭️
    expect(getAbSlideStepDirection(3, 1)).toBe('back') // ⏮️
    expect(getAbSlideStepDirection(8, 0, 9, true)).toBe('forward') // 🔁 wrap ahead
    expect(getAbSlideStepDirection(0, 8, 9, true)).toBe('back') // 🔁 wrap behind
    expect(getAbSlideStepDirection(8, 0, 9, false)).toBe('back') // 📏 no loop
  })
})

describe('registry + packaging 📦', () => {
  it('registers the six new animations by name', () => {
    const names = supportedAnimations.map((a) => a.name) // 🏷️
    for (const n of ['slide-step-in', 'slide-step-out', 'wire-draw', 'wire-pulse', 'spin', 'progress-sweep']) expect(names).toContain(n) // ✅
    expect(abAnimations.refs['wire-pulse']).toMatch(/^abWirePulse /) // 🔗
  })

  it('every keyframe in the new stylesheets is namespaced (ab…)', () => {
    for (const name of NEW) for (const m of read(`${name}/styles.css`).matchAll(/@keyframes ([\w-]+)/g)) expect(m[1], name).toMatch(/^ab[A-Z]/) // 🏷️
  })

  it('exports + files list every new folder and its stylesheet', () => {
    const pkg = JSON.parse(read('package.json')) // 📦
    for (const n of NEW) {
      expect(pkg.files).toContain(n) // 📁
      expect(pkg.exports[`./${n}/styles.css`]).toBe(`./${n}/styles.css`) // 🎨
      expect(pkg.exports[`./${n}`]).toBe(`./${n}/index.ts`) // 🧩
    }
  })

  it('AB_MOTION class names exist in motion/styles.css and tokens match :root', () => {
    const css = read('motion/styles.css') // 🎨
    for (const cls of Object.values(AB_MOTION)) expect(css).toContain(`.${cls}`) // 🏷️
    for (const [k, v] of Object.entries(AB_MOTION_TOKENS)) expect(css).toContain(`${k}: ${v};`) // 🎚️
  })

  it('new code files carry the license header', () => {
    for (const n of NEW) for (const f of ['index.ts', 'styles.css']) {
      const src = read(`${n}/${f}`) // 📄
      expect(src, `${n}/${f}`).toContain('Copyright (c) 2026 Abraham Ukachi. The abElements Project.') // ©️
      expect(src, `${n}/${f}`).toContain('@authors: Abraham Ukachi <abrahamukachi@gmail.com>') // ✍️
    }
  })
})

describe('README: class naming (James review) 📖', () => {
  it('documents the ab- prefix for new classes and the unprefixed legacy ones', () => {
    const md = read('README.md') // 📖
    expect(md).toContain('### Class naming: `ab-` vs legacy') // 🏷️
    expect(md).toMatch(/Legacy[\s\S]*not renamed/) // 🧓
    for (const name of NEW) for (const cls of classes(read(`${name}/styles.css`))) expect(cls).toMatch(/^ab-/) // ✅ the rule holds
  })
})

