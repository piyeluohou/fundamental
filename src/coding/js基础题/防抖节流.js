// 两者都是**高频事件降频方案**，解决浏览器高频触发事件（输入、滚动、缩放、拖拽）造成的大量函数重复执行，避免页面卡顿、接口频繁请求、性能浪费。
// 高频事件举例：`input输入、resize窗口缩放、scroll滚动、mousemove鼠标移动、click重复点击`

// ### 1. 防抖 Debounce：延迟执行，只取最后一次

// #### 原理

// 触发事件后**不立刻执行函数**，开启计时器延迟 N 毫秒运行；
// 如果在延迟时间内再次触发事件，**清空上一次计时器，重新计时**；
// 只有等待连续触发停止，经过完整延迟时间，函数才执行**一次**。
/**
 * 防抖函数
 * @param {Function} fn 回调函数
 * @param {number} delay 延迟毫秒
 * @param {boolean} immediate 是否立即执行（true：首次触发立刻执行，后续等待；false：等待结束执行）
 * @returns {Function} 包装后的防抖函数
 */

// 普通防抖
function debounce(fn, delay) {
  let timer = null;
  return function (...args) {
    const _this = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// function debounce1(fn, delay = 1000, immediate = false) {
//   let timer = null;

//   return function (...args) {
//     const _this = this;
//     if (timer) clearTimeout(timer);
//     if (immediate) {

//     }
//   };
// }

// ### 2. 节流 Throttle：固定间隔，定时执行

// #### 原理

// 限制函数**每 N 毫秒最多执行一次**；
// 持续触发事件时，按固定时间间隔均匀执行，不会堆积，不会无限延迟。
// 分两种实现：时间戳版、定时器版。
