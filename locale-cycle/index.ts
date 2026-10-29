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
* @name: Locale Cycle
* @file: locale-cycle/index.ts
* @type: Module
* @authors: Abraham Ukachi <abrahamukachi@gmail.com>
*/

/*
* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
* MOTTO: We'll always do more 😜!!!
* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
*/


// 🧩 animation type
import type { Animation } from '../types/index.d';

// 🏷️ class names shipped by locale-cycle/styles.css
export const AB_LOCALE_CYCLE_WORD_CLASS = 'ab-locale-cycle-word';
export const AB_LOCALE_CYCLE_CHIP_CLASS = 'ab-locale-cycle-chip';
/** 🌍 the slot count of one loop (EN → FR → ES → RU) */
export const AB_LOCALE_CYCLE_SLOTS = 4;

/* 👋 a word fades in + rises, holds for its slot, hides */
export const LocaleCycleWordAnimation: Animation = {
  keyframes: {
    '0%': { opacity: '0', transform: 'translateY(8px)' }, // 🌅
    '10%': { opacity: '1', transform: 'translateY(0)' }, // ✅
    '24.99%': { opacity: '1', transform: 'translateY(0)' }, // 👀
    '25%, 100%': { opacity: '0', transform: 'translateY(0)' }, // 🙈
  },
  ref: 'abLocaleCycleWord var(--ab-locale-cycle-duration, 2400ms) linear infinite', // 🔗
};

/* 🎚️ a chip is "on" for its slot (instant jumps) */
export const LocaleCycleChipAnimation: Animation = {
  keyframes: {
    '0%': { background: 'var(--ab-locale-cycle-on-bg, #a67c52)', color: 'var(--ab-locale-cycle-on-fg, #fff8f5)' }, // 🥉
    '25%, 100%': { background: 'transparent', color: 'var(--ab-locale-cycle-off-fg, currentColor)' }, // ⚪
  },
  ref: 'abLocaleCycleChip var(--ab-locale-cycle-duration, 2400ms) step-end infinite', // 🔗
};

// 📦 default export: the word cycle
export default LocaleCycleWordAnimation;
