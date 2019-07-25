webpackHotUpdate("static\\development\\pages\\LoginPage.js",{

/***/ "./components/GraphApiUse.js":
/*!***********************************!*\
  !*** ./components/GraphApiUse.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");
var _jsxFileName = "C:\\Users\\Geon\\Desktop\\nextcrap\\nextjs-loginpage\\components\\GraphApiUse.js";


var data = [{
  name: 'Page A',
  pv: 2400,
  amt: 2400
}, {
  name: 'Page B',
  pv: 1398,
  amt: 2210
}, {
  name: 'Page C',
  pv: 9800,
  amt: 2
}, {
  name: 'Page D',
  pv: 3908,
  amt: 2000
}, {
  name: 'Page E',
  pv: 4800,
  amt: 2181
}, {
  name: 'Page F',
  pv: 3800,
  amt: 2500
}, {
  name: 'Page G',
  pv: 4300,
  amt: 2100
}];

var GraphApiUse = function GraphApiUse() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["LineChart"], {
    width: 500,
    height: 300,
    data: data,
    margin: {
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["CartesianGrid"], {
    strokeDasharray: "3 3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["XAxis"], {
    dataKey: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["YAxis"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Legend"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Line"], {
    type: "monotone",
    dataKey: "pv",
    stroke: "#8884d8",
    activeDot: {
      r: 8
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (GraphApiUse);

/***/ })

})
//# sourceMappingURL=LoginPage.js.ea791c3387c85b49005f.hot-update.js.map