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
* @name: Slide From Up - Animation
* @file: index.ts
* @type: TypeScript 
* @authors: Abraham Ukachi <abraham.ukachi@laplateforme.io>
*
* Example usage:
*
*   1+|> // Import the slide-from-up animation 
*    -|>
*    -|> import { SlideFromUpAnimation } from 'ab-nextjs-animations';
*    -|>
*
*   2+|> // Get the keyframe and ref from `SlideFromUpAnimation` as `slideFromUpKeyframe` and `slideFromUpRef` respectively ;)
*    -|>
*    -|> const { keyframe: slideFromUpKeyframe, ref: slideFromUpRef } = SlideFromUpAnimation;
*    -|>
*
*   3+|> // Apply the slide-from-up animation to a div...
*    -|> 
*    -|> // ...in tailwindcss
*    -|> .div {
*    -|>   @apply animate-slide-from-up;
*    -|> }
*    -|>
*    -|> // ...in react component
*    -|> const Component = () => {
*    -|>   return (
*    -|>     <div className="animate-slide-from-up">
*    -|>       ...
*    -|>     </div>
*    -|>   )
*    -|> }
*    -|>
*    
*/


/*
* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
* MOTTO: I'll always do more 😜 !!!
* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
*/




// importing animation type..
import type { Animation } from '../types/index.d';




/* 
 * `SlideFromUpAnimation`
 *
 * @type { Animation }
 */
const SlideFromUpAnimation: Animation = { 

  keyframes: {
    from: { transform: 'translateY(-100%)' },
    to: { transform: 'translateY(0%)' },
  },

  ref: 'slideFromUp 1s ease forwards',
};



export default SlideFromUpAnimation;
