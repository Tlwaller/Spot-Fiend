webpackHotUpdate("main",{

/***/ "./src/config/firebaseConfig.js":
/*!**************************************!*\
  !*** ./src/config/firebaseConfig.js ***!
  \**************************************/
/*! exports provided: storage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storage", function() { return storage; });
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "default", function() { return firebase__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");

 //initialize firebase

const firebaseConfig = {
  apiKey: "AIzaSyAbzENhnl4kwF0m6YIxdAUcWrBUzFoIwOg",
  authDomain: "spot-fiend-4565d.firebaseapp.com",
  databaseURL: "https://spot-fiend-4565d.firebaseio.com",
  projectId: "spot-fiend-4565d",
  storageBucket: "spot-fiend-4565d.appspot.com",
  messagingSenderId: "616247293303",
  appId: "1:616247293303:web:7c31602b3248f482755d72",
  measurementId: "G-MDQP7P4YTX"
};
firebase__WEBPACK_IMPORTED_MODULE_0___default.a.initializeApp(firebaseConfig);
const storage = firebase__WEBPACK_IMPORTED_MODULE_0___default.a.storage();


/***/ })

})
//# sourceMappingURL=main.c341bfeedccb24632df8.hot-update.js.map