"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/states.ts":
/*!***********************!*\
  !*** ./src/states.ts ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locationRecoilState": function() { return /* binding */ locationRecoilState; },
/* harmony export */   "historyLocationRecoilState": function() { return /* binding */ historyLocationRecoilState; }
/* harmony export */ });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var locationRecoilState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: "location",
  "default": {
    lat: null,
    lon: null
  }
});
var historyLocationRecoilState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: "historyLocation",
  "default": []
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzhiYzQxODM1M2Y0OWNmMTFmZjYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFPTyxJQUFNQyxtQkFBbUIsR0FBR0QsNENBQUksQ0FBQztBQUN0Q0UsRUFBQUEsR0FBRyxFQUFFLFVBRGlDO0FBRXRDLGFBQVM7QUFDUEMsSUFBQUEsR0FBRyxFQUFFLElBREU7QUFFUEMsSUFBQUEsR0FBRyxFQUFFO0FBRkU7QUFGNkIsQ0FBRCxDQUFoQztBQVFBLElBQU1DLDBCQUEwQixHQUFHTCw0Q0FBSSxDQUFDO0FBQzdDRSxFQUFBQSxHQUFHLEVBQUUsaUJBRHdDO0FBRTdDLGFBQVM7QUFGb0MsQ0FBRCxDQUF2QyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3RhdGVzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF0b20gfSBmcm9tIFwicmVjb2lsXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExvY2F0aW9uIHtcclxuICBsYXQ6IG51bWJlciB8IG51bGw7XHJcbiAgbG9uOiBudW1iZXIgfCBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbG9jYXRpb25SZWNvaWxTdGF0ZSA9IGF0b20oe1xyXG4gIGtleTogXCJsb2NhdGlvblwiLFxyXG4gIGRlZmF1bHQ6IHtcclxuICAgIGxhdDogbnVsbCxcclxuICAgIGxvbjogbnVsbCxcclxuICB9IGFzIExvY2F0aW9uLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBoaXN0b3J5TG9jYXRpb25SZWNvaWxTdGF0ZSA9IGF0b20oe1xyXG4gIGtleTogXCJoaXN0b3J5TG9jYXRpb25cIixcclxuICBkZWZhdWx0OiBbXSBhcyBMb2NhdGlvbltdLFxyXG59KTtcclxuIl0sIm5hbWVzIjpbImF0b20iLCJsb2NhdGlvblJlY29pbFN0YXRlIiwia2V5IiwibGF0IiwibG9uIiwiaGlzdG9yeUxvY2F0aW9uUmVjb2lsU3RhdGUiXSwic291cmNlUm9vdCI6IiJ9