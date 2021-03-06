/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ((getMin, getMax) => {
  const min = Math.ceil(getMin);
  const max = Math.floor(getMax);
  return Math.floor(Math.random() * ((max - min) + 1)) + min;
});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = gameLoop;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__class_Circle__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utilities_randomNumber__ = __webpack_require__(0);



const canvas = document.getElementById('dots');
/* harmony export (immutable) */ __webpack_exports__["a"] = canvas;


const ctx = canvas.getContext('2d');
canvas.width = document.body.clientWidth;
canvas.height = window.innerHeight;
const balls = [];
const windowWidth = Math.floor(window.innerWidth / 100);
for (let i = 1; i < windowWidth * (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utilities_randomNumber__["a" /* default */])(5, 10)); i += 1) {
  const size = Math.random();
  const ball = new __WEBPACK_IMPORTED_MODULE_0__class_Circle__["a" /* default */]({
    canvas,
    pos: {
      x: canvas.width * Math.random(),
      y: canvas.height * Math.random(),
    },
    vector: {
      vx: (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utilities_randomNumber__["a" /* default */])(-20, 20) / 100) * size,
      vy: (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utilities_randomNumber__["a" /* default */])(-20, 20) / 100) * size,
    },
    property: {
      radius: 3 * size,
      color: `rgba(
        ${__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utilities_randomNumber__["a" /* default */])(240, 255)},
        ${__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utilities_randomNumber__["a" /* default */])(240, 255)},
        ${__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utilities_randomNumber__["a" /* default */])(240, 255)},
        ${__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utilities_randomNumber__["a" /* default */])(50, 150) / 1000})`,
    },
  });
  balls.push(ball);
}
function render(lagOffset) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  balls.forEach((ball) => {
    ctx.save();
    ball.render(ctx, lagOffset);
    ctx.restore();
  });
}
function update() {
  balls.forEach((ball) => {
    ball.update();
  });
}
const fps = 60;
let lag = 0;
const frameDuration = 1000 / fps;
let start = Date.now();
function gameLoop() {
  window.requestAnimationFrame(gameLoop, canvas);
  const current = Date.now();
  const elapsed = current - start;
  start = current;
  lag += elapsed;
  while (lag >= frameDuration) {
    update();
    lag -= frameDuration;
  }
  const lagOffset = lag / frameDuration;
  render(lagOffset);
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utilities_isFn__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utilities_isFn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__utilities_isFn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utilities_debounce__ = __webpack_require__(7);



class Muview {
  constructor({
    container = 'muview',
    section = '.section',
    delay = 700,
    onStart,
    onSlide,
    onLeave,
    onResize,
  }) {
    Object.assign(this, {
      container,
      section,
      delay,
      onStart,
      onSlide,
      onLeave,
      onResize,
      muview: document.getElementById(container),
      transform: 0,
      index: 0,
      id: window.location.hash.replace(/\?|#/, ''),
    });
    this.initId = this.id;
    this.init();
    this.slide();
    this.afterResize();
    setTimeout(() => window.scrollTo(0, 0), this.delay);
  }
  init() {
    document.body.classList.add(this.container);
    this.muview.classList.add(`${this.container}__wrapper`);
    this.muview.style.transitionDuration = `${this.delay}ms`;
    this.setSectionHeight();
    this.setTransform();
    this.sections.forEach((section, key) => {
      if (section.id) {
        const sectionNode = document.getElementById(section.id);
        sectionNode.dataset.mvId = section.id;
        sectionNode.removeAttribute('id');
      }
      if (this.initId === section.dataset.mvId) {
        this.index = key;
      }
    });
  }
  afterResize() {
    const onResize = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utilities_debounce__["a" /* default */])(() => {
      if (__WEBPACK_IMPORTED_MODULE_0__utilities_isFn___default()(this.onResize)) {
        this.onResize(this.index, this.direction);
      }
      this.setSectionHeight();
      this.setTransform();
    }, this.delay);
    window.addEventListener('resize', onResize);
  }
  setSectionHeight() {
    this.sections = this.muview.querySelectorAll(this.section);
    this.wrapperHeight = this.muview.clientHeight;
    this.sectionHeight = window.innerHeight;
    for (let i = 0; i < this.sections.length; i += 1) {
      this.sections[i].style.height = `${Math.floor(this.sectionHeight)}px`;
    }
  }
  setTransform() {
    this.transform = -this.index * this.sectionHeight;
    this.muview.style.transform = `translate3d(0, ${Math.floor(this.transform)}px, 0)`;
  }
  setIndex() {
    this.sections.forEach((sectionEl, key) => {
      if (this.id === sectionEl.dataset.mvId) {
        this.index = key;
      }
    });
  }
  setHash() {
    if (this.sections[this.index].dataset.mvId) {
      this.hash = this.sections[this.index].dataset.mvId;
      window.location.hash = this.hash;
      this.updateId();
    }
  }
  changeIndexBy(value) {
    this.index += value;
  }
  updateId() {
    this.id = window.location.hash.replace(/\?|#/, '');
  }
  slide() {
    window.addEventListener('hashchange', () => {
      this.updateId();
      this.setIndex();
      this.setTransform();
    });
    let time = Date.now();
    window.addEventListener('wheel', (e) => {
      if (Math.abs(e.wheelDelta) >= 80) {
        this.direction = e.deltaY < 0 ? 1 : -1;
        if (((time + this.delay) - Date.now()) < 0) {
          if (__WEBPACK_IMPORTED_MODULE_0__utilities_isFn___default()(this.onStart)) {
            this.onStart(this.index, this.direction);
          }
          setTimeout(() => {
            if (__WEBPACK_IMPORTED_MODULE_0__utilities_isFn___default()(this.onLeave)) {
              this.onLeave(this.index, this.direction);
            }
          }, this.delay);
          if ((this.direction === 1 && this.index > 0)
          || (this.direction === -1 && this.index < this.sections.length - 1)) {
            this.changeIndexBy(-this.direction);
            this.setHash();
          }
          time = Date.now();
        }
      }
    });
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Muview;



/***/ }),
/* 3 */
/***/ (function(module, exports) {

function initNav(nodeNav) {
  const nav = document.querySelector(nodeNav);
  const toggle = nav.querySelector(`${nodeNav}__toggle`);
  const list = nav.querySelector(`${nodeNav}__list`);
  const activeClass = 'active';
  list.classList.remove(activeClass);
  toggle.addEventListener('click', () => {
    list.classList.toggle(activeClass);
    toggle.classList.toggle(activeClass);
  });
}
initNav('.nav');


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Point__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utilities_randomNumber__ = __webpack_require__(0);



class Circle extends __WEBPACK_IMPORTED_MODULE_0__Point__["a" /* default */] {
  constructor({
    canvas,
    pos: { x, y },
    vector: { vx, vy },
    property: { radius, color },
  } = {}) {
    super({
      pos: { x, y },
      vector: { vx, vy },
    });
    this.canvas = canvas;
    this.radius = radius;
    this.color = color;
  }
  render(getCtx, lagOffset) {
    this.renderX = ((this.x - this.oldX) * lagOffset) + this.oldX;
    this.renderY = ((this.y - this.oldY) * lagOffset) + this.oldY;
    const ctx = getCtx;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
    this.oldX = this.x;
    this.oldY = this.y;
  }
  boundary() {
    if ((this.y + this.vy) + this.radius > this.canvas.height
      || (this.y + this.vy) - this.radius < 0) {
      this.vy = -this.vy;
    }
    if ((this.x + this.vx) + this.radius > this.canvas.width
      || (this.x + this.vx) - this.radius < 0) {
      this.vx = -this.vx;
    }
    if ((this.y + this.vy) + this.radius > this.canvas.height) {
      this.y -= 0.25;
    }
    if ((this.y + this.vy) - this.radius < 0) {
      this.y += 0.25;
    }
    if ((this.x + this.vx) + this.radius > this.canvas.width) {
      this.x -= 0.25;
    }
    if ((this.x + this.vx) - this.radius < 0) {
      this.x += 0.25;
    }
  }
  update() {
    this.boundary();
    this.x += this.vx * (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utilities_randomNumber__["a" /* default */])(-100, 100) / 100);
    this.y += this.vy * (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utilities_randomNumber__["a" /* default */])(-100, 100) / 100);
    this.x += this.vx;
    this.y += this.vy;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Circle;



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Point {
  constructor({
    pos: { x, y },
    vector: { vx, vy },
  } = {}) {
    this.x = x || 0;
    this.y = y || 0;
    this.vx = vx || 0;
    this.vy = vy || 0;
  }
  boundary() {
    if (this.y + this.vy > this.canvas.height || this.y + this.vy < 0) {
      this.vy = -this.vy;
    }
    if (this.x + this.vx > this.canvas.width || this.x + this.vx < 0) {
      this.vx = -this.vx;
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Point;



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_initNav__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_initNav___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__modules_initNav__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_Muview__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__functions_gameLoop__ = __webpack_require__(1);




if (window.matchMedia('(min-width: 1199px)').matches) {
  const muview = new __WEBPACK_IMPORTED_MODULE_1__modules_Muview__["a" /* default */]({
    container: 'muview',
    section: '.section',
    delay: 700,
    onResize: () => setTimeout(() => {
      __WEBPACK_IMPORTED_MODULE_2__functions_gameLoop__["a" /* canvas */].height = document.querySelector('.muview__wrapper > .section').offsetHeight;
    }),
  });
  muview.init();
}

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__functions_gameLoop__["b" /* gameLoop */])();


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ((callback, wait, context = this) => {
  let timeout = null;
  let callbackArgs = null;
  const later = () => callback.apply(context, callbackArgs);
  return (...args) => {
    callbackArgs = args;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
});


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/**
 * If it's a function it should return true, otherwise it will return false.
 * @param {Function} [fn]
 * @returns {Boolean}
 */
module.exports = fn => Boolean(fn && typeof fn === 'function');


/***/ })
/******/ ]);