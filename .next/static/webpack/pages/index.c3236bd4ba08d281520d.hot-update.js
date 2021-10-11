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
  key: "history",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzMyMzZiZDRiYTA4ZDI4MTUyMGQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFPTyxJQUFNQyxtQkFBbUIsR0FBR0QsNENBQUksQ0FBQztBQUN0Q0UsRUFBQUEsR0FBRyxFQUFFLFVBRGlDO0FBRXRDLGFBQVM7QUFDUEMsSUFBQUEsR0FBRyxFQUFFLElBREU7QUFFUEMsSUFBQUEsR0FBRyxFQUFFO0FBRkU7QUFGNkIsQ0FBRCxDQUFoQztBQVFBLElBQU1DLDBCQUEwQixHQUFHTCw0Q0FBSSxDQUFDO0FBQzdDRSxFQUFBQSxHQUFHLEVBQUUsU0FEd0M7QUFFN0MsYUFBUztBQUZvQyxDQUFELENBQXZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdGF0ZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXRvbSB9IGZyb20gXCJyZWNvaWxcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTG9jYXRpb24ge1xyXG4gIGxhdDogbnVtYmVyIHwgbnVsbDtcclxuICBsb246IG51bWJlciB8IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2NhdGlvblJlY29pbFN0YXRlID0gYXRvbSh7XHJcbiAga2V5OiBcImxvY2F0aW9uXCIsXHJcbiAgZGVmYXVsdDoge1xyXG4gICAgbGF0OiBudWxsLFxyXG4gICAgbG9uOiBudWxsLFxyXG4gIH0gYXMgTG9jYXRpb24sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGhpc3RvcnlMb2NhdGlvblJlY29pbFN0YXRlID0gYXRvbSh7XHJcbiAga2V5OiBcImhpc3RvcnlcIixcclxuICBkZWZhdWx0OiBbXSBhcyBzdHJpbmdbXSxcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJhdG9tIiwibG9jYXRpb25SZWNvaWxTdGF0ZSIsImtleSIsImxhdCIsImxvbiIsImhpc3RvcnlMb2NhdGlvblJlY29pbFN0YXRlIl0sInNvdXJjZVJvb3QiOiIifQ==