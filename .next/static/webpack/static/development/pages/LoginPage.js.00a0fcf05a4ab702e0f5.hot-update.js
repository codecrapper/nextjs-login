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
  name: '10/02',
  requests: 500
}, {
  name: '11/02',
  requests: 200
}, {
  name: '12/02',
  requests: 100
}, {
  name: '13/02',
  requests: 800
}, {
  name: '14/02',
  requests: 300
}, {
  name: '15/02',
  requests: 900
}, {
  name: '16/02',
  requests: 400
}];

var GraphApiUse = function GraphApiUse() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      paddingTop: "2rem",
      paddingBottom: "2rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "API Usage"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Billing cycle resets each month on the 28th"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "API calls this billing cycle 0/1000(0.00%)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["LineChart"], {
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
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["CartesianGrid"], {
    strokeDasharray: "3 3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["XAxis"], {
    dataKey: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["YAxis"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Line"], {
    type: "monotone",
    dataKey: "requests",
    stroke: "#8884d8",
    activeDot: {
      r: 8
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (GraphApiUse);

/***/ })

})
//# sourceMappingURL=LoginPage.js.00a0fcf05a4ab702e0f5.hot-update.js.map