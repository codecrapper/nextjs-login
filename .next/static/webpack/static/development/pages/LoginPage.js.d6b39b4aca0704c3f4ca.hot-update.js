webpackHotUpdate("static\\development\\pages\\LoginPage.js",{

/***/ "./components/ConfirmAlert.js":
/*!************************************!*\
  !*** ./components/ConfirmAlert.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Geon\\Desktop\\nextcrap\\nextjs-loginpage\\components\\ConfirmAlert.js";


var ConfirmAlert = function ConfirmAlert() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      alertPopUp = _useState2[0],
      setAlertPopUp = _useState2[1]; // CHECK IF ACCOUNT HAS BEEN CONFIRMED/VERIFIED - TRUE OR FALSE (GET INFO LATER FROM API)


  var confirmedReplaceMe = true;

  var accountConfirmed = function accountConfirmed() {
    if (confirmedReplaceMe) {
      if (alertPopUp) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "alert alert-success alert-dismissible fade show",
          role: "alert",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          },
          __self: this
        }, "Your account has been confirmed!", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          onClick: removeAlertClick,
          type: "button",
          className: "close",
          "data-dismiss": "alert",
          "aria-label": "Close",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          "aria-hidden": "true",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        }, "\xD7")));
      }

      return null;
    } else {
      if (alertPopUp) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "alert alert-primary alert-dismissible fade show",
          role: "alert",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }, "A confirmation link has been sent to youremail@yahoo.com", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          onClick: removeAlertClick,
          type: "button",
          className: "close",
          "data-dismiss": "alert",
          "aria-label": "Close",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          "aria-hidden": "true",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }, "\xD7")));
      }

      return null;
    }
  };

  var removeAlertClick = function removeAlertClick() {
    setAlertPopUp(false);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, accountConfirmed());
};

/* harmony default export */ __webpack_exports__["default"] = (ConfirmAlert);

/***/ })

})
//# sourceMappingURL=LoginPage.js.d6b39b4aca0704c3f4ca.hot-update.js.map