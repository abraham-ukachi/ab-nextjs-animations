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
* @name: Slide From Right - Animation
* @file: index.ts
* @type: TypeScript 
* @authors: Abraham Ukachi <abraham.ukachi@laplateforme.io>
*
* Example usage:
*
*   1+|> // Import the slide-from-right animation 
*    -|>
*    -|> import { SlideFromRightAnimation } from 'ab-nextjs-animations';
*    -|>
*
*   2+|> // Get the keyframe and ref from `SlideFromRightAnimation` as `slideFromRightKeyframe` and `slideFromRightRef` respectively ;)
*    -|>
*    -|> const { keyframe: slideFromRightKeyframe, ref: slideFromRightRef } = SlideFromRightAnimation;
*    -|>
*
*   3+|> // Apply the slide-from-right animation to a div...
*    -|> 
*    -|> // ...in tailwindcss
*    -|> .div {
*    -|>   @apply animate-slide-from-right;
*    -|> }
*    -|>
*    -|> // ...in react component
*    -|> const Component = () => {
*    -|>   return (
*    -|>     <div className="animate-slide-from-right">
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




// importing animation type..
import type { Animation } from '../types/index.d';




/* 
 * `SlideFromRightAnimation`
 *
 * @type { Animation }
 */
const SlideFromRightAnimation: Animation = { 

  keyframes: {
    from: { transform: 'translateX(100%)' },
    to: { transform: 'translateX(0%)' },
  },

  ref: 'slideFromRight 1s ease forwards',
};



export default SlideFromRightAnimation;
