webpackHotUpdate("static\\development\\pages\\LoginPage.js",{

/***/ "./components/GraphApiUse.js":
/*!***********************************!*\
  !*** ./components/GraphApiUse.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Examples; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");






var _jsxFileName = "C:\\Users\\Geon\\Desktop\\nextcrap\\nextjs-loginpage\\components\\GraphApiUse.js";
// import React from 'react'
// import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts'
// const GraphApiUse = () => {
//     const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, ...];
//     const renderLineChart = (
//       <LineChart width={600} height={300} data={data}>
//         <Line type="monotone" dataKey="uv" stroke="#8884d8" />
//         <CartesianGrid stroke="#ccc" />
//         <XAxis dataKey="name" />
//         <YAxis />
//       </LineChart>
//     );
//     return (
//         <div>
//             hey
//         </div>
//     )
// }
// export default GraphApiUse


var data = [{
  name: 'Page A',
  uv: 4000,
  pv: 2400,
  amt: 2400
}, {
  name: 'Page B',
  uv: 3000,
  pv: 1398,
  amt: 2210
}, {
  name: 'Page C',
  uv: 2000,
  pv: 9800,
  amt: 2290
}, {
  name: 'Page D',
  uv: 2780,
  pv: 3908,
  amt: 2000
}, {
  name: 'Page E',
  uv: 1890,
  pv: 4800,
  amt: 2181
}, {
  name: 'Page F',
  uv: 2390,
  pv: 3800,
  amt: 2500
}, {
  name: 'Page G',
  uv: 3490,
  pv: 4300,
  amt: 2100
}];

var Examples =
/*#__PURE__*/
function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Examples, _PureComponent);

  function Examples() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Examples);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Examples).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Examples, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_7__["LineChart"], {
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
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_7__["CartesianGrid"], {
        strokeDasharray: "3 3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_7__["XAxis"], {
        dataKey: "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_7__["YAxis"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_7__["Tooltip"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_7__["Legend"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_7__["Line"], {
        type: "monotone",
        dataKey: "pv",
        stroke: "#8884d8",
        activeDot: {
          r: 8
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_7__["Line"], {
        type: "monotone",
        dataKey: "uv",
        stroke: "#82ca9d",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }));
    }
  }]);

  return Examples;
}(react__WEBPACK_IMPORTED_MODULE_6__["PureComponent"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Examples, "jsfiddleUrl", 'https://jsfiddle.net/alidingling/xqjtetw0/');



/***/ })

})
//# sourceMappingURL=LoginPage.js.a7d75fa22d357d4ec0fc.hot-update.js.map