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
* @name: abAnimations
* @file: index.ts
* @type: TypeScript 
* @authors: Abraham Ukachi <abrahamukachi@gmail.com>
*
* Example usage:
*
*   1+|> // Import the pop-in animation 
*    -|>
*    -|> import { PopInAnimation } from 'ab-nextjs-animations';
*    -|>
*
*   2+|> // Get the keyframe and ref from `PopInAnimation` as `popInKeyframe` and `popInRef` respectively ;)
*    -|>
*    -|> const { keyframe: popInKeyframe, ref: popInRef } = PopInAnimation;
*    -|>
*
*   3+|> // Apply the pop-in animation to a div...
*    -|> 
*    -|> // ...in tailwindcss
*    -|> .div {
*    -|>   @apply animate-pop-in;
*    -|> }
*    -|>
*    -|> // ...in react component
*    -|> const Component = () => {
*    -|>   return (
*    -|>     <div className="animate-pop-in">
*    -|>       ...
*    -|>     </div>
*    -|>   )
*    -|> }
*    -|>
*    
*/


/*
* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
* MOTTO: I'll always do more 😜!!!
* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
*/


// Importing the `Animations` type
import type { Animations, Animation, Keyframes } from './types';

// get all animations
import PopInAnimation from './pop-in';
import FadeInAnimation from './fade-in';
import FadeOutAnimation from './fade-out';
// 🌫️ G28: reduced-motion aware fade
import FadeAnimation from './fade';
import SlideFromDownAnimation from './slide-from-down';
import SlideFromUpAnimation from './slide-from-up';
import SlideLeftAnimation from './slide-left';
import SlideFromLeftAnimation from './slide-from-left';
import SlideRightAnimation from './slide-right';
import SlideFromRightAnimation from './slide-from-right';
import SlideDownAnimation from './slide-down';
import SlideUpAnimation from './slide-up';
import LoopAnimation from './loop';
// 🎬 0.2.4 (Welcome v6): direction-aware slides, flow-diagram wires, spinners, progress sweep
import { SlideStepInAnimation, SlideStepOutAnimation } from './slide-step';
import { WireDrawAnimation, WirePulseAnimation } from './wire';
import SpinAnimation from './spin';
import ProgressSweepAnimation from './progress-sweep';
// 🌍 0.2.5 (Welcome illustration 8): the 4-slot locale cycle (moved out of components' i18n scene)
import { LocaleCycleWordAnimation, LocaleCycleChipAnimation } from './locale-cycle';
// 🔁 0.2.5: the Welcome v6 upgraded 4-state cycle
import { StateCycleHighlightAnimation, StateCyclePressAnimation, StateCyclePopAnimation, StateCycleRideAnimation } from './state-cycle';




// Create a list of all supported animations
export const supportedAnimations: Array<{ name: string, animation: Animation }> = [
  { name: 'pop-in', animation: PopInAnimation },
  { name: 'fade-in', animation: FadeInAnimation },
  { name: 'fade-out', animation: FadeOutAnimation },
  { name: 'fade', animation: FadeAnimation }, // 🌫️ G28
  { name: 'slide-from-down', animation: SlideFromDownAnimation },
  { name: 'slide-from-up', animation: SlideFromUpAnimation },
  { name: 'slide-left', animation: SlideLeftAnimation },
  { name: 'slide-from-left', animation: SlideFromLeftAnimation },
  { name: 'slide-right', animation: SlideRightAnimation },
  { name: 'slide-from-right', animation: SlideFromRightAnimation },
  { name: 'slide-down', animation: SlideDownAnimation },
  { name: 'slide-up', animation: SlideUpAnimation },
  { name: 'loop', animation: LoopAnimation },
  { name: 'slide-step-in', animation: SlideStepInAnimation }, // ⏭️ 0.2.4
  { name: 'slide-step-out', animation: SlideStepOutAnimation }, // 👋 0.2.4
  { name: 'wire-draw', animation: WireDrawAnimation }, // 🖊️ 0.2.4
  { name: 'wire-pulse', animation: WirePulseAnimation }, // ✨ 0.2.4
  { name: 'spin', animation: SpinAnimation }, // 🌀 0.2.4
  { name: 'progress-sweep', animation: ProgressSweepAnimation }, // 🔁 0.2.4
  { name: 'locale-cycle-word', animation: LocaleCycleWordAnimation }, // 👋 0.2.5
  { name: 'locale-cycle-chip', animation: LocaleCycleChipAnimation }, // 🎚️ 0.2.5
  { name: 'state-cycle-highlight', animation: StateCycleHighlightAnimation }, // 🔦 0.2.5
  { name: 'state-cycle-press', animation: StateCyclePressAnimation }, // 👆 0.2.5
  { name: 'state-cycle-pop', animation: StateCyclePopAnimation }, // 🎈 0.2.5
  { name: 'state-cycle-ride', animation: StateCycleRideAnimation }, // 🎢 0.2.5
];















/**
 * Returns all the keyframes of currently supported animations
 *
 * @return { Keyframes }
 */
const getAllKeyframes = () => supportedAnimations.reduce((obj: Record<string, Keyframes>, // 🗺️ name → keyframes (typed, fixes TS2322)
  { name, animation }: { name: string, animation: Animation }): Record<string, Keyframes> => {

  return {
    ...obj,
    [name]: animation.keyframes,
  };

}, {});

/**
 * Returns all the refs of currently supported animations
 *
 * @return { Record<string, string> }
 */
const getAllRefs = () => supportedAnimations.reduce((obj: Record<string, string>, // 🗺️ name → ref
  { name, animation }: { name: string, animation: Animation }): Record<string, string> => {

  return {
    ...obj,
    [name]: animation.ref,
  };

}, {});



// get all keyframes & refs
const keyframes: Record<string, Keyframes> = getAllKeyframes(); // 🎞️ all keyframes
const refs: Record<string, string> = getAllRefs(); 


/*
 * `ab-animations`
 *  
 * @type { Animations } - abAnimations
 */
const abAnimations: Animations = { keyframes, refs };


export default abAnimations;

// 🎬 0.2.4 helpers + class names (also importable per folder, e.g. 'ab-nextjs-animations/slide-step')
export { getAbSlideStepDirection, AB_SLIDE_STEP_IN_CLASS, AB_SLIDE_STEP_OUT_CLASS, type AbSlideStepDirection } from './slide-step';
export { AB_WIRE_DRAW_CLASS, AB_WIRE_PULSE_CLASS } from './wire';
export { AB_SPIN_CLASS } from './spin';
export { AB_PROGRESS_SWEEP_CLASS } from './progress-sweep';
export { AB_LOCALE_CYCLE_WORD_CLASS, AB_LOCALE_CYCLE_CHIP_CLASS, AB_LOCALE_CYCLE_SLOTS } from './locale-cycle'; // 🌍 0.2.5
export { AB_STATE_CYCLE_CLASSES, AB_STATE_CYCLE_STATES, AB_STATE_CYCLE_DURATION, type AbStateCycleClass } from './state-cycle'; // 🔁 0.2.5
export { AB_MOTION, AB_MOTION_TOKENS, AB_REDUCED_MOTION_QUERY, AB_REDUCED_MOTION_ATTRIBUTE } from './motion';
