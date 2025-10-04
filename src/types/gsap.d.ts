import 'gsap';

declare module 'gsap' {
  interface EaseMap {
    smooth: gsap.EaseFunction;
    bounceOut: gsap.EaseFunction;
    heroEnter: gsap.EaseFunction;
    smoothExit: gsap.EaseFunction;
  }
}