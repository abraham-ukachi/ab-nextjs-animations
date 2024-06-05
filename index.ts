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
import type { Animations } from './types';

// get all animations
import PopInAnimation from './pop-in';
// TODO: import FadeInAnimation from './fade-in';
// TODO: import FadeOutAnimation from './fade-out';
// TODO: import SlideFromDownAnimation from './slide-from-down';
// TODO: import SlideFromUpAnimation from './slide-from-up';
// TODO: import SlideLeftAnimation from './slide-left';
// TODO: import SlideFromLeftAnimation from './slide-from-left';
// TODO: import SlideRightAnimation from './slide-right';
// TODO: import SlideFromRightAnimation from './slide-from-right';
// TODO: import SlideDownAnimation from './slide-down';
// TODO: import SlideUpAnimation from './slide-up';
// TODO: import LoopAnimation from './loop';





/*
 * `ab-animations`
 *  
 * @type { Animations } - abAnimations
 */
const abAnimations: Animations = {

  keyframes: {
    'pop-in': PopInAnimation.keyframes,
    // TODO: 'fade-in': FadeInAnimation.keyframes,
    // TODO: 'fade-out': FadeOutAnimation.keyframes,
    // TODO: 'slide-from-down': SlideFromDownAnimation.keyframes,
    // TODO: 'slide-from-up': SlideFromUpAnimation.keyframes,
    // TODO: 'slide-left': SlideLeftAnimation.keyframes,
    // TODO: 'slide-from-left': SlideFromLeftAnimation.keyframes,
    // TODO: 'slide-right': SlideRightAnimation.keyframes,
    // TODO: 'slide-from-right': SlideFromRightAnimation.keyframes,
    // TODO: 'slide-down': SlideDownAnimation.keyframes,
    // TODO: 'slide-up': SlideUpAnimation.keyframes,
    // TODO: 'loop': LoopAnimation.keyframes,
  },


  refs: {
    'pop-in': PopInAnimation.ref,
    // TODO: 'fade-in': FadeInAnimation.ref,
    // TODO: 'fade-out': FadeOutAnimation.ref,
    // TODO: 'slide-from-down': SlideFromDownAnimation.ref,
    // TODO: 'slide-from-up': SlideFromUpAnimation.ref,
    // TODO: 'slide-left': SlideLeftAnimation.ref,
    // TODO: 'slide-from-left': SlideFromLeftAnimation.ref,
    // TODO: 'slide-right': SlideRightAnimation.ref,
    // TODO: 'slide-from-right': SlideFromRightAnimation.ref,
    // TODO: 'slide-down': SlideDownAnimation.ref,
    // TODO: 'slide-up': SlideUpAnimation.ref,
    // TODO: 'loop': LoopAnimation.ref,
  },
};



export default abAnimations;


