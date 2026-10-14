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
* @name: Fade (G28) - Animation object + reduced-motion helper
* @file: fade/index.ts
* @authors: Abraham Ukachi <abrahamukachi@gmail.com>
*/

/*
* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
* MOTTO: We'll always do more 😜!!!
* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
*/

// 🧩 animation type
import type { Animation } from '../types/index.d';

// ♿ the media query that turns the fade off
export const AB_FADE_REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

/* 🌫️ Fade animation (from 0 to 1 by default) */
const FadeAnimation: Animation = {
  // 🎞️ keyframes
  keyframes: {
    from: { opacity: 'var(--fade-from, 0)' }, // 🏁 start (custom property, default 0)
    to: { opacity: 'var(--fade-to, 1)' }, // 🎯 end (custom property, default 1)
  },
  // 🔗 CSS shorthand (keyframes are named `abFade` in fade/styles.css; vars match the class)
  ref: 'abFade var(--fade-animation-duration, 500ms) var(--fade-animation-easing, ease) var(--fade-animation-delay, 0ms) both',
};

/**
 * ♿ Pick the `animation` value for JS users (Web Animations / inline styles):
 * `'none'` when the user prefers reduced motion, the normal ref otherwise.
 */
export function getAbFadeAnimation(prefersReducedMotion: boolean): string {
  return prefersReducedMotion ? 'none' : FadeAnimation.ref; // ♿ / 🎞️
}

/** ♿ Read the user's preference (false on the server or when matchMedia is missing). */
export function prefersAbReducedMotion(): boolean {
  try {
    return typeof window !== 'undefined' && !!window.matchMedia?.(AB_FADE_REDUCED_MOTION_QUERY).matches; // 🔍
  } catch {
    return false; // 🛟
  }
}

// 📦 default export
export default FadeAnimation;
