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
*
* @project: ab-nextjs-animations
* @name: Fade (G28) - Tests
* @file: __tests__/fade.test.ts
* @authors: Abraham Ukachi <abrahamukachi@gmail.com>
*/

/*
* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
* MOTTO: We'll always do more 😜!!!
* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
*/

// 🧪 vitest
import { afterEach, describe, expect, it, vi } from 'vitest'
// 📄 fs + paths
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
// 🌫️ under test
import FadeAnimation, { AB_FADE_REDUCED_MOTION_QUERY, getAbFadeAnimation, prefersAbReducedMotion } from '../fade'

// 📁 root + reader
const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const read = (rel: string) => readFileSync(join(root, rel), 'utf8')

// 🧹 restore globals
afterEach(() => vi.unstubAllGlobals())

describe('fade (G28)', () => {
  it('ships keyframes + a reduced-motion block that disables the animation', () => {
    for (const [file, cls] of [['fade/styles.css', 'fade'], ['fade-in/styles.css', 'fadeIn'], ['fade-out/styles.css', 'fadeOut']]) {
      const css = read(file) // 🎨
      expect(css).toMatch(new RegExp(`@media \\(prefers-reduced-motion: reduce\\)\\s*\\{\\s*\\.${cls}\\s*\\{[^}]*animation: none`)) // ♿
    }
    expect(read('fade/styles.css')).toContain('opacity: var(--fade-to, 1)') // 🎯 end state
  })

  it('exposes an Animation object and a reduced-motion helper', () => {
    expect(FadeAnimation.keyframes.to.opacity).toBe('var(--fade-to, 1)') // 🎯 custom property
    expect(FadeAnimation.keyframes.from.opacity).toBe('var(--fade-from, 0)') // 🏁
    expect(FadeAnimation.ref).toMatch(/^abFade /) // 🏷️ namespaced keyframes
    expect(getAbFadeAnimation(true)).toBe('none') // ♿
    expect(getAbFadeAnimation(false)).toBe(FadeAnimation.ref) // 🎞️
    expect(AB_FADE_REDUCED_MOTION_QUERY).toBe('(prefers-reduced-motion: reduce)') // 🔍
  })

  it('prefersAbReducedMotion reads matchMedia safely', () => {
    expect(prefersAbReducedMotion()).toBe(false) // 🖥️ no window
    vi.stubGlobal('window', { matchMedia: () => ({ matches: true }) }) // ♿ on
    expect(prefersAbReducedMotion()).toBe(true) // ✅
    vi.stubGlobal('window', { matchMedia: () => { throw new Error('x') } }) // 💥
    expect(prefersAbReducedMotion()).toBe(false) // 🛟
  })

  it('names the keyframes abFade (not a generic `fade`)', () => {
    const css = read('fade/styles.css') // 🎨
    expect(css).toContain('@keyframes abFade') // ✅
    expect(css).not.toMatch(/@keyframes fade\b/) // 🚫
  })

  it('exports map keeps every existing import path working', async () => {
    const pkg = JSON.parse(read('package.json')) // 📦
    expect(pkg.exports['.'].default).toBe('./index.ts') // 🏠 root
    expect(pkg.exports['./*']).toBe('./*') // 🎨 e.g. ab-nextjs-animations/slide-from-right/styles.css
    for (const f of ['fade', 'fade-in', 'fade-out', 'slide-from-right', 'loop']) expect(pkg.exports['./' + f]).toBe(`./${f}/index.ts`) // 📁 folder imports
    const { createRequire } = await import('node:module') // 🔎 real resolution through the exports map
    const req = createRequire(join(root, '__tests__/x.js')) // 🔎 resolve from inside the package
    expect(req.resolve('ab-nextjs-animations/slide-from-right/styles.css')).toBe(join(root, 'slide-from-right/styles.css')) // ✅ css path
    expect(req.resolve('ab-nextjs-animations/fade')).toBe(join(root, 'fade/index.ts')) // ✅ folder
  })
})

