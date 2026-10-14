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
* @name: abWire
* @file: wire/index.ts
* @type: TypeScript — SVG wire draw-on + pulse
* @authors: Abraham Ukachi <abrahamukachi@gmail.com>
*
* Example usage:
*   1+|> <path pathLength={100} className="ab-wire-draw" style={{ '--ab-wire-index': 2 }} />
*/

/*
* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
* MOTTO: We'll always do more 😜!!!
* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
*/


// 🧩 animation type
import type { Animation } from '../types/index.d';

// 🏷️ class names shipped by wire/styles.css
export const AB_WIRE_DRAW_CLASS = 'ab-wire-draw';
export const AB_WIRE_PULSE_CLASS = 'ab-wire-pulse';

/* 🖊️ draw on (needs pathLength=100 + stroke-dasharray 100) */
export const WireDrawAnimation: Animation = {
  keyframes: { to: { strokeDashoffset: '0' } }, // 🎯
  ref: 'abWireDraw var(--ab-wire-draw-duration, 600ms) cubic-bezier(.2, .8, .2, 1) forwards', // 🔗
};

/* ✨ pulse travel */
export const WirePulseAnimation: Animation = {
  keyframes: { from: { strokeDashoffset: '100' }, to: { strokeDashoffset: '0' } }, // 🏁 → 🎯
  ref: 'abWirePulse var(--ab-wire-pulse-duration, 2400ms) linear var(--ab-wire-pulse-iterations, infinite)', // 🔗
};

// 📦 default export: the pulse
export default WirePulseAnimation;
