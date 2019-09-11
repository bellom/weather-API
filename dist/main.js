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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fetchData__ = __webpack_require__(1);


const checkBtn = document.getElementById("checkBtn");

checkBtn.addEventListener("click", e => {
    e.preventDefault();
    Object(__WEBPACK_IMPORTED_MODULE_0__fetchData__["a" /* default */])();
});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loadDOM__ = __webpack_require__(2);
/* eslint-disable no-redeclare */
/* global, fetch document */



const fetchData = () => {
  const location = document.getElementById("city");
  const city = location.value;
  const fetchUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fa1c7f10e6e75b7dc652e684202b5bd1`;
  
  fetch(fetchUrl, { mode: "cors" })
    .then(response => {
      return response.json();
    })
    .then(response => {
      const cityName = response.name;
      const { country } = response.sys;
      const { temp, humidity, pressure } = response.main;
      const { deg } = response.wind;
      const fahren = Math.round((temp * 9) / (5 + 32));
      
      Object(__WEBPACK_IMPORTED_MODULE_0__loadDOM__["b" /* loadDOM */]) (temp, pressure, humidity, cityName, country, deg, fahren);

    })
    .catch((err) => {
      Object(__WEBPACK_IMPORTED_MODULE_0__loadDOM__["a" /* displayErr */])();
      return err;
    });
};

/* harmony default export */ __webpack_exports__["a"] = (fetchData);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return loadDOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return displayErr; });
/* global, fetch document */

const displayLocation = document.querySelector(".location");
const loadTemp = document.querySelector(".loadTemp");
const loadHumidity = document.querySelector(".humidity");
const loadPressure = document.querySelector(".pressure");
const loadWind = document.querySelector(".wind");
const statusF = document.getElementById("f");
const statusC = document.getElementById("c");
const loadLetter = document.querySelector(".loadLetter");

const loadDOM = (temp, pressure, humidity, cityName, country, deg, fahren) => {
  const celsius = Math.round(((fahren - 32) * 5) / 9);

  displayLocation.textContent = `${cityName}, ${country}`;
  loadTemp.textContent = fahren;
  loadHumidity.textContent = humidity;
  loadPressure.textContent = Math.round(pressure);
  loadWind.textContent = Math.round(deg);

  statusF.addEventListener("click", () => {
    loadTemp.textContent = fahren;
    loadLetter.textContent = "F";
  });

  statusC.addEventListener("click", () => {
    loadTemp.textContent = celsius;
    loadLetter.textContent = "C";
  });
};

const displayErr = () => {
  displayLocation.textContent = "";
  loadTemp.textContent = "0";
  loadHumidity.textContent = "0";
  loadPressure.textContent = "0";
  loadWind.textContent = "0";
  displayLocation.textContent = "Location Not Found !!";

  statusF.addEventListener("click", () => {
    loadTemp.textContent = "0";
    loadLetter.textContent = "F";
  });

  statusC.addEventListener("click", () => {
    loadTemp.textContent = "0";
    loadLetter.textContent = "C";
  });
};




/***/ })
/******/ ]);