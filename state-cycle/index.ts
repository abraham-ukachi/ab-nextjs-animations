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
* @name: State Cycle
* @file: state-cycle/index.ts
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

/** 🔁 the 4-state cycle: 4 states × 600ms = one 2400ms loop (in sync with AB_WIRE_PULSE_CLASS) */
export const AB_STATE_CYCLE_STATES = 4;
/** ⏱️ the whole loop, ms (the CSS default of --ab-state-cycle-duration) */
export const AB_STATE_CYCLE_DURATION = 2400;

// 🏷️ class names shipped by state-cycle/styles.css
export const AB_STATE_CYCLE_CLASSES = {
  word: 'ab-state-cycle-word', // 👋 per state: fade + rise in, hold, hide
  chip: 'ab-state-cycle-chip', // 🎚️ per state: "on" chip (instant)
  hl: 'ab-state-cycle-hl', // 🔦 per state: bronze border + tint
  dim: 'ab-state-cycle-dim', // 🌫️ per state: dimmed
  press: 'ab-state-cycle-press', // 👆 per step: press-scale 0.94
  pop: 'ab-state-cycle-pop', // 🎈 per step: 0.6 → 1.06 → 1
  rise: 'ab-state-cycle-rise', // ⬆️ per step: 14px → 0
  switch: 'ab-state-cycle-switch', // 🔀 per loop: on (0–1) / off (2–3)
  knob: 'ab-state-cycle-knob', // 🔘 the switch knob (child of .ab-state-cycle-switch)
  fill: 'ab-state-cycle-fill', // 📏 per loop: scaleX 0 → 1
  ride: 'ab-state-cycle-ride', // 🎢 per loop: offset-distance 0 → 100% (0–75%), holds
} as const;
/** 🏷️ one of the state-cycle class names */
export type AbStateCycleClass = (typeof AB_STATE_CYCLE_CLASSES)[keyof typeof AB_STATE_CYCLE_CLASSES];

/* 🔦 a highlight on for its state */
export const StateCycleHighlightAnimation: Animation = {
  keyframes: {
    '0%': { borderColor: 'var(--ab-state-cycle-hl-border, #a67c52)', background: 'var(--ab-state-cycle-hl-bg, rgb(166 124 82 / 12%))' }, // 🔦
    '25%, 100%': { borderColor: 'var(--ab-state-cycle-idle-border, transparent)', background: 'var(--ab-state-cycle-idle-bg, transparent)' }, // ⚪
  },
  ref: 'abStateCycleHl var(--ab-state-cycle-duration, 2400ms) step-end infinite', // 🔗
};

/* 👆 press-scale at the start of every state */
export const StateCyclePressAnimation: Animation = {
  keyframes: {
    '0%': { transform: 'scale(var(--ab-motion-press-scale, 0.94))' }, // 👆
    '15%, 100%': { transform: 'scale(1)' }, // 🖐️
  },
  ref: 'abStateCyclePress calc(var(--ab-state-cycle-duration, 2400ms) / 4) step-end infinite', // 🔗
};

/* 🎈 pop at the start of every state */
export const StateCyclePopAnimation: Animation = {
  keyframes: {
    '0%': { transform: 'scale(0.6)' }, // 🫧
    '25%': { transform: 'scale(1.06)' }, // 🎈
    '45%, 100%': { transform: 'scale(1)' }, // ✅
  },
  ref: 'abStateCyclePop calc(var(--ab-state-cycle-duration, 2400ms) / 4) linear infinite', // 🔗
};

/* 🎢 a dot riding its offset-path over 0–75% of the loop */
export const StateCycleRideAnimation: Animation = {
  keyframes: {
    '0%': { offsetDistance: '0%' }, // 🏁
    '75%, 100%': { offsetDistance: '100%' }, // 🏆
  },
  ref: 'abStateCycleRide var(--ab-state-cycle-duration, 2400ms) linear infinite', // 🔗
};

// 📦 default export: the highlight
export default StateCycleHighlightAnimation;
