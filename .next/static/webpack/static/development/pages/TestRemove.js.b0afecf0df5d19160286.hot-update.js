webpackHotUpdate("static\\development\\pages\\TestRemove.js",{

/***/ "./pages/TestRemove.js":
/*!*****************************!*\
  !*** ./pages/TestRemove.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ "./store.js");
var _jsxFileName = "C:\\Users\\Geon\\Desktop\\nextcrap\\nextjs-loginpage\\pages\\TestRemove.js";




var TestRemove = function TestRemove(_ref) {
  var data = _ref.data,
      stateData = _ref.stateData;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, data, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, stateData.url));
};

TestRemove.getInitialProps = function (_ref2) {
  var reduxStore = _ref2.reduxStore;
  reduxStore.dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_2__["fetchUserData"])());
  return {
    data: "random"
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    stateData: state.userData
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(TestRemove));

/***/ })

})
//# sourceMappingURL=TestRemove.js.b0afecf0df5d19160286.hot-update.js.map