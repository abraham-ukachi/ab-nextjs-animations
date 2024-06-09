/* 
* @license MIT
* ~~~~~~~~~~~~
* ab-nextjs-animations 
* ~~~~~~~~~~~~
* Copyright (c) 2024 Abraham Ukachi. The abElements Project.
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
* @authors: Abraham Ukachi <abraham.ukachi@laplateforme.io>
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
import SlideFromDownAnimation from './slide-from-down';
import SlideFromUpAnimation from './slide-from-up';
import SlideLeftAnimation from './slide-left';
import SlideFromLeftAnimation from './slide-from-left';
import SlideRightAnimation from './slide-right';
import SlideFromRightAnimation from './slide-from-right';
import SlideDownAnimation from './slide-down';
import SlideUpAnimation from './slide-up';
import LoopAnimation from './loop';




// Create a list of all supported animations
export const supportedAnimations: Array<{ name: string, animation: Animation }> = [
  { name: 'pop-in', animation: PopInAnimation },
  { name: 'fade-in', animation: FadeInAnimation },
  { name: 'fade-out', animation: FadeOutAnimation },
  { name: 'slide-from-down', animation: SlideFromDownAnimation },
  { name: 'slide-from-up', animation: SlideFromUpAnimation },
  { name: 'slide-left', animation: SlideLeftAnimation },
  { name: 'slide-from-left', animation: SlideFromLeftAnimation },
  { name: 'slide-right', animation: SlideRightAnimation },
  { name: 'slide-from-right', animation: SlideFromRightAnimation },
  { name: 'slide-down', animation: SlideDownAnimation },
  { name: 'slide-up', animation: SlideUpAnimation },
  { name: 'loop', animation: LoopAnimation },
];















/**
 * Returns all the keyframes of currently supported animations
 *
 * @return { Keyframes }
 */
const getAllKeyframes = () => supportedAnimations.reduce((obj, 
  { name, animation }: { name: string, animation: Animation }): Keyframes => {

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
const getAllRefs = () => supportedAnimations.reduce((obj, 
  { name, animation }: { name: string, animation: Animation }): Record<string, string> => {

  return {
    ...obj,
    [name]: animation.ref,
  };

}, {});



// get all keyframes & refs
const keyframes: Keyframes = getAllKeyframes();
const refs: Record<string, string> = getAllRefs(); 


/*
 * `ab-animations`
 *  
 * @type { Animations } - abAnimations
 */
const abAnimations: Animations = { keyframes, refs };


export default abAnimations;


