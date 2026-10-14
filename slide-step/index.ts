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
* @name: abSlideStep
* @file: slide-step/index.ts
* @type: TypeScript — direction-aware slide enter / leave
* @authors: Abraham Ukachi <abrahamukachi@gmail.com>
*
* Example usage:
*   1+|> <div className="ab-slide-step-in" data-ab-direction="back">…</div>
*/

/*
* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
* MOTTO: We'll always do more 😜!!!
* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
*/


// 🧩 animation type
import type { Animation } from '../types/index.d';

/** 🧭 Which way the user moved. */
export type AbSlideStepDirection = 'forward' | 'back';

// 🏷️ class names shipped by slide-step/styles.css
export const AB_SLIDE_STEP_IN_CLASS = 'ab-slide-step-in';
export const AB_SLIDE_STEP_OUT_CLASS = 'ab-slide-step-out';

/** 🧭 Direction of a move from `from` to `to` (shortest way round when `loop` is on). */
export function getAbSlideStepDirection(from: number, to: number, count = 0, loop = false): AbSlideStepDirection {
  // 🔁 wrap: 8 → 0 in a loop of 9 is one step forward, not eight back
  if (loop && count > 1) {
    const ahead = (to - from + count) % count; // ➡️ steps forward
    return ahead <= count / 2 ? 'forward' : 'back'; // 🧭 shorter side wins (ties → forward)
  }
  return to >= from ? 'forward' : 'back'; // 📏 plain comparison
}

// 🎞️ the four keyframes as Animation objects (refs use the CSS custom properties)
const ease = 'var(--ab-slide-step-duration, 280ms) var(--ab-slide-step-easing, cubic-bezier(.2, .8, .2, 1))'; // ⏱️

/* ⏭️ enter (direction comes from --_ab-step-offset, set by the classes) */
export const SlideStepInAnimation: Animation = {
  keyframes: {
    from: { opacity: '0', transform: 'translateX(var(--_ab-step-offset))', visibility: 'visible' }, // 🏁
    to: { opacity: '1', transform: 'none', visibility: 'visible' }, // 🎯
  },
  ref: `abSlideStepIn ${ease} both`, // 🔗
};

/* 👋 leave */
export const SlideStepOutAnimation: Animation = {
  keyframes: {
    from: { opacity: '1', transform: 'none', visibility: 'visible' }, // 🏁
    to: { opacity: '0', transform: 'translateX(calc(-1 * var(--_ab-step-offset)))', visibility: 'visible' }, // 🎯
  },
  ref: `abSlideStepOut ${ease} backwards`, // 🔗
};

// 📦 default export: the enter animation
export default SlideStepInAnimation;
