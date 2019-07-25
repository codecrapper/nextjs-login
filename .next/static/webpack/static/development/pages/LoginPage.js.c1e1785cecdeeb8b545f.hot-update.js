webpackHotUpdate("static\\development\\pages\\LoginPage.js",{

/***/ "./pages/LoginPage.js":
/*!****************************!*\
  !*** ./pages/LoginPage.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store */ "./store.js");
/* harmony import */ var _components_ConfirmAlert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/ConfirmAlert */ "./components/ConfirmAlert.js");
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/NavBar */ "./components/NavBar.js");
/* harmony import */ var _components_Stats__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Stats */ "./components/Stats.js");
/* harmony import */ var _components_ApiKeySection__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/ApiKeySection */ "./components/ApiKeySection.js");
/* harmony import */ var _components_GraphApiUse__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/GraphApiUse */ "./components/GraphApiUse.js");
/* harmony import */ var _components_PriceTable__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/PriceTable */ "./components/PriceTable.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");







var _jsxFileName = "C:\\Users\\Geon\\Desktop\\nextcrap\\nextjs-loginpage\\pages\\LoginPage.js";









 // const LoginPage = ({ dispatch, userData }) => {
//     // useEffect(() => {
//     //     dispatch(fetchUserData())
//     // }, [])
//     const renderUserData = () => {
//         if(userData) {
//             return (
//                 <div>
//                     <h2>Client Credentials</h2>
//                     <p>Client ID: <br />{userData.key}</p>
//                     <p>URL: <br />{userData.url}</p>
//                 </div>
//             )
//         }
//         return <h1>Loading...</h1>
//     }
//     return (
//         <div>
//             <NavBar />
//             <div className="container">
//                 <br /><br />
//                 <Stats />
//                 {renderUserData()}
//                 <p>{console.log(userData)}</p>
//                 <PriceTable />
//             </div>
//         </div>
//     )
// }
// const mapStateToProps = state => {
//     return { 
//         userData: state.userData,
//         loading: state.loading 
//     }
// }
// export default connect(mapStateToProps)(LoginPage)

var LoginPage =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(LoginPage, _React$Component);

  function LoginPage() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LoginPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(LoginPage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderUserData", function () {
      if (_this.props.userData) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_ConfirmAlert__WEBPACK_IMPORTED_MODULE_10__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_NavBar__WEBPACK_IMPORTED_MODULE_11__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "container",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Stats__WEBPACK_IMPORTED_MODULE_12__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_ApiKeySection__WEBPACK_IMPORTED_MODULE_13__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_GraphApiUse__WEBPACK_IMPORTED_MODULE_14__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_PriceTable__WEBPACK_IMPORTED_MODULE_15__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        }), console.log(_this.props.userData)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_16__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }));
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "Loading...");
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LoginPage, [{
    key: "render",
    value: function render() {
      var userData = this.props.userData;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          backgroundColor: "#F1F0FC"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, this.renderUserData());
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var reduxStore = _ref.reduxStore;
      reduxStore.dispatch(Object(_store__WEBPACK_IMPORTED_MODULE_9__["fetchUserData"])());
      return {};
    }
  }]);

  return LoginPage;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    userData: state.userData,
    loading: state.loading
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps)(LoginPage));

/***/ })

})
//# sourceMappingURL=LoginPage.js.c1e1785cecdeeb8b545f.hot-update.js.map