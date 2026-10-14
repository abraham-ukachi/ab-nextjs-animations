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
* @name: abMotion
* @file: motion/index.ts
* @type: TypeScript — motion tokens + transition class names
* @authors: Abraham Ukachi <abrahamukachi@gmail.com>
*
* Example usage:
*   1+|> <button className={clsx(AB_MOTION.interactive, AB_MOTION.press)}>…</button>
*/

/*
* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
* MOTTO: We'll always do more 😜!!!
* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
*/


// 🏷️ class names shipped by motion/styles.css
export const AB_MOTION = {
  colors: 'ab-motion-colors', // 🎨 background / text / border / opacity
  interactive: 'ab-motion-interactive', // 🕹️ colours + transform
  transform: 'ab-motion-transform', // 🔄
  size: 'ab-motion-size', // 📏 width / height / background
  press: 'ab-motion-press', // 🤏 :active scale
  lift: 'ab-motion-lift', // 🎈 :hover scale
} as const;

// 🎚️ token names + defaults (mirror motion/styles.css :root)
export const AB_MOTION_TOKENS = {
  '--ab-motion-duration-short': '160ms', // ⚡
  '--ab-motion-duration-medium': '200ms', // 🎬
  '--ab-motion-duration-long': '280ms', // 🐢
  '--ab-motion-ease-standard': 'ease', // 〰️
  '--ab-motion-ease-emphasized': 'cubic-bezier(.2, .8, .2, 1)', // 🚀
  '--ab-motion-press-scale': '0.94', // 🤏
  '--ab-motion-lift-scale': '1.06', // 🎈
} as const;

// ♿ the media query every animation in this package honours
export const AB_REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

// ♿ attribute a component sets to force reduced motion for its subtree
export const AB_REDUCED_MOTION_ATTRIBUTE = 'data-ab-reduced-motion';
