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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/Greeting.js":
/*!****************************!*\
  !*** ./src/js/Greeting.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Greeting; });\nfunction Greeting(){\r\n\r\n    let greeting = document.querySelector('.greeting');\r\n\r\n    let btn = document.querySelector('.greeting-instructions__btn')\r\n\r\n    window.addEventListener('load',function(){\r\n\r\n        if(!greeting.classList.contains('appear')){\r\n\r\n            greeting.classList.add('appear')\r\n        }\r\n\r\n    })\r\n\r\n    btn.addEventListener('click',function(){\r\n\r\n        if(greeting.classList.contains('appear')){\r\n\r\n            greeting.classList.add('disappear')\r\n\r\n        }\r\n\r\n    });\r\n\r\n}\n\n//# sourceURL=webpack:///./src/js/Greeting.js?");

/***/ }),

/***/ "./src/js/rules.js":
/*!*************************!*\
  !*** ./src/js/rules.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Rules; });\n\r\nfunction Rules() {\r\n        let btn = document.querySelector('.navigation-menu__item-ref');\r\n\r\n        let popup = document.querySelector('.popup-rules');\r\n\r\n        btn.addEventListener('click', function () {\r\n\r\n            if (!popup.classList.contains('appear') && !popup.classList.contains('disappear')) {\r\n\r\n                popup.classList.add('appear')\r\n\r\n            } else if (popup.classList.contains('appear') && !popup.classList.contains('disappear')) {\r\n\r\n                popup.classList.add('disappear')\r\n\r\n            } else if (popup.classList.contains('appear') && popup.classList.contains('disappear')) {\r\n\r\n                popup.classList.remove('disappear')\r\n            }\r\n        })\r\n    }\r\n\n\n//# sourceURL=webpack:///./src/js/rules.js?");

/***/ }),

/***/ "./src/js/start.js":
/*!*************************!*\
  !*** ./src/js/start.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Start; });\nfunction Start(){\r\n\r\n    let startBtn = document.querySelector('.navigation-menu__item-ref--start');\r\n\r\n    let playGround = document.querySelector('.playground');\r\n\r\n    let finishBtn = document.querySelector('.navigation-menu__item-ref--finish')\r\n\r\n    startBtn.addEventListener('click',function(){\r\n\r\n       if(!playGround.classList.contains('game-start')){\r\n\r\n           playGround.classList.add('game-start');\r\n\r\n       }\r\n\r\n    });\r\n    //\r\n    // finishBtn.addEventListener('click',function(){\r\n    //\r\n    //     if(playGround.classList.contains('game-start')){\r\n    //\r\n    //         playGround.classList.remove('game-start');\r\n    //\r\n    //     }\r\n    // });\r\n}\n\n//# sourceURL=webpack:///./src/js/start.js?");

/***/ }),

/***/ "./src/js/words.js":
/*!*************************!*\
  !*** ./src/js/words.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Greeting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Greeting */ \"./src/js/Greeting.js\");\n/* harmony import */ var _start__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start */ \"./src/js/start.js\");\n/* harmony import */ var _rules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rules */ \"./src/js/rules.js\");\n\r\n\r\n        \r\n        \r\n        \r\n\r\n        // Greeting();\r\n        Object(_start__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\n        Object(_rules__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\r\n        let start = document.querySelector('.playground-btn');\r\n\r\n        let words = [\r\n            'машина', 'квартира', 'дача', 'программист', 'инженер', 'архитектор','собака',\r\n\r\n        'ипотека','прокурор','следователь','лягушка','болото', 'суд','конфета','слон','бегемот','хобот',\r\n\r\n            'пьеса', 'монография','поэзия','композитор', 'дирижер','актер','комедия','трагедия'\r\n        ];\r\n\r\n        let timer = document.querySelector('.playground-timer');\r\n\r\n        let form = document.querySelector('.form');\r\n\r\n        let answer = document.querySelector('.form__answer');\r\n\r\n        let position = document.querySelector('.position');\r\n\r\n        let answerSubmit = document.querySelector('.form__submit');\r\n\r\n        let counter = 0;\r\n\r\n        let mistakes = 0;\r\n\r\n        let rights = document.querySelector('.playground-rights');\r\n\r\n        let wrongs = document.querySelector('.playground-mistakes');\r\n\r\n\r\n                let targetArray = []\r\n\r\n\r\n                // function Timer(){\r\n                //\r\n                //     let startTime = parseFloat(timer.textContent)\r\n                //\r\n                //     if(startTime >= 0){\r\n                //\r\n                //         timer.textContent = startTime + 1;\r\n                //\r\n                //     }\r\n                //\r\n                //     if (startTime > 40){\r\n                //\r\n                //             timer.textContent = 'time is out';\r\n                //\r\n                //             Finish()\r\n                //\r\n                //     }\r\n                //\r\n                // }\r\n                //\r\n                // function StopTimer(){\r\n                //\r\n                //     clearInterval(Timer)\r\n                //\r\n                // }\r\n\r\n\r\n                function Word() {\r\n\r\n                let word = Math.floor(Math.random() * words.length);\r\n\r\n                 targetArray.push(words[word])\r\n\r\n                return words[word]\r\n\r\n                }\r\n\r\n\r\n                function Rand(){\r\n\r\n                let targetWord = targetArray[0];\r\n\r\n                let shuffleWorld = targetWord.split('').sort(function(){return 0.5 - Math.random()});\r\n\r\n                targetArray.push(shuffleWorld);\r\n\r\n                }\r\n\r\n\r\n                function Insert(){\r\n\r\n                let result = targetArray[1];\r\n\r\n                result.forEach( (i) => {\r\n\r\n                let item = document.createElement('li');\r\n\r\n                item.innerHTML = i;\r\n\r\n                item.classList.add('position__item')\r\n\r\n                position.insertAdjacentElement('afterbegin',item)\r\n\r\n                })\r\n                }\r\n\r\n\r\n                function Begin(){\r\n\r\n\r\n                Word();\r\n\r\n                Rand();\r\n\r\n                Insert();\r\n\r\n                }\r\n\r\n\r\n                function Finish(){\r\n\r\n                    let finish = document.createElement('li');\r\n\r\n                    finish.textContent = 'Игра закончена!!!!';\r\n\r\n                    finish.classList.add('finish');\r\n\r\n                    position.innerHTML = 'finish'\r\n\r\n                }\r\n\r\n\r\n\r\n                start.addEventListener('click',Begin);\r\n\r\n                answerSubmit.addEventListener('click',function(e){\r\n\r\n                e.preventDefault();\r\n\r\n                if(answer.value === targetArray[0]){\r\n\r\n                    position.innerHTML = ''\r\n\r\n                    answer.value = '';\r\n\r\n                    targetArray.length = 0;\r\n\r\n                    Begin()\r\n\r\n                    rights.textContent = ++counter;\r\n\r\n\r\n                }\r\n\r\n                else{\r\n\r\n                    position.innerHTML = ''\r\n\r\n                    answer.value = '';\r\n\r\n                    targetArray.length = 0;\r\n\r\n                    Begin()\r\n\r\n                    let amountMistakes = ++mistakes\r\n\r\n                    wrongs.textContent = amountMistakes;\r\n\r\n                   if (amountMistakes > 3){\r\n\r\n                       Finish()\r\n\r\n                   }\r\n\r\n                }\r\n\r\n            })\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/words.js?");

/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./src/js/words.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! C:\\Users\\79032\\Desktop\\JavaScript\\ShufleGame\\src\\js\\words.js */\"./src/js/words.js\");\n\n\n//# sourceURL=webpack:///multi_./src/js/words.js?");

/***/ })

/******/ });