"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Search.tsx":
/*!***********************************!*\
  !*** ./src/components/Search.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Search; }
/* harmony export */ });
/* harmony import */ var C_Dev_atestat_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Dev_atestat_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Dev_atestat_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_Dev_atestat_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Dev_atestat_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(C_Dev_atestat_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_Search_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/styles/Search.module.css */ "./src/styles/Search.module.css");
/* harmony import */ var _styles_Search_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Search_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");
/* harmony import */ var _lib_states__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/lib/states */ "./src/lib/states.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Dev\\atestat\\src\\components\\Search.tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Dev_atestat_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









function Search(_ref) {
  _s();

  var _this = this;

  var className = _ref.className;

  var _useRecoilState = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilState)(_lib_states__WEBPACK_IMPORTED_MODULE_6__.locationRecoilState),
      _useRecoilState2 = (0,C_Dev_atestat_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useRecoilState, 2),
      locationState = _useRecoilState2[0],
      setLocationState = _useRecoilState2[1];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(""),
      textFieldValue = _useState[0],
      setTextFieldValue = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),
      options = _useState2[0],
      setOptions = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    if (navigator.geolocation) {
      navigator.permissions.query({
        name: "geolocation"
      }).then(function (result) {
        if (result.state === "granted") {
          navigator.geolocation.getCurrentPosition(function (position) {
            var location = {
              lat: position.coords.latitude,
              lon: position.coords.longitude
            };
            setLocationState(location);
          }); //If granted then you can directly call your function here
          // } else if (result.state === "prompt") {
          //   console.log(result.state);
          // } else if (result.state === "denied") {
          //   //If denied then you have to show instructions to enable location
        }

        result.onchange = function () {
          console.log(result.state);
        };
      });
    } else {
      alert("Sorry Not available!");
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
    className: className,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Autocomplete, {
      disablePortal: true,
      id: "combo-box-demo",
      options: options,
      getOptionLabel: function getOptionLabel(option) {
        return option.title;
      },
      sx: {
        width: 300
      },
      clearOnBlur: false,
      renderInput: function renderInput(params) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_9__.TextField, _objectSpread(_objectSpread({}, params), {}, {
          className: (_styles_Search_module_css__WEBPACK_IMPORTED_MODULE_10___default().search),
          fullWidth: true,
          variant: "outlined",
          label: "\uD83D\uDD0E Search place",
          value: textFieldValue,
          onChange: /*#__PURE__*/function () {
            var _ref2 = (0,C_Dev_atestat_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Dev_atestat_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(event) {
              var _yield$axios$get, data;

              return C_Dev_atestat_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      setTextFieldValue(event.target.value);
                      _context.next = 3;
                      return axios__WEBPACK_IMPORTED_MODULE_7___default().get("http://localhost:3001/autocomplete", {
                        params: {
                          q: event.target.value,
                          lat: locationState.lat,
                          lon: locationState.lon
                        }
                      });

                    case 3:
                      _yield$axios$get = _context.sent;
                      data = _yield$axios$get.data;
                      setOptions(data);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));

            return function (_x) {
              return _ref2.apply(this, arguments);
            };
          }()
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, _this);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }, this);
}

_s(Search, "I7fBA/fnilD6pdgmkZgnb2pe5aw=", false, function () {
  return [recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilState];
});

_c = Search;

var _c;

$RefreshReg$(_c, "Search");

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


/***/ }),

/***/ "./src/lib/states.ts":
/*!***************************!*\
  !*** ./src/lib/states.ts ***!
  \***************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGQ3NjZlOTY1NTk3Mzc3NWFhNzAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBT2UsU0FBU1MsTUFBVCxPQUFzQztBQUFBOztBQUFBOztBQUFBLE1BQXBCQyxTQUFvQixRQUFwQkEsU0FBb0I7O0FBQ25ELHdCQUEwQ0osc0RBQWMsQ0FBQ0MsNERBQUQsQ0FBeEQ7QUFBQTtBQUFBLE1BQU9JLGFBQVA7QUFBQSxNQUFzQkMsZ0JBQXRCOztBQUNBLGtCQUE0Q1IsK0NBQVEsQ0FBQyxFQUFELENBQXBEO0FBQUEsTUFBT1MsY0FBUDtBQUFBLE1BQXVCQyxpQkFBdkI7O0FBQ0EsbUJBQThCViwrQ0FBUSxDQUF5QixFQUF6QixDQUF0QztBQUFBLE1BQU9XLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBRUFiLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUljLFNBQVMsQ0FBQ0MsV0FBZCxFQUEyQjtBQUN6QkQsTUFBQUEsU0FBUyxDQUFDRSxXQUFWLENBQ0dDLEtBREgsQ0FDUztBQUFFQyxRQUFBQSxJQUFJLEVBQUU7QUFBUixPQURULEVBRUdDLElBRkgsQ0FFUSxVQUFVQyxNQUFWLEVBQWtCO0FBQ3RCLFlBQUlBLE1BQU0sQ0FBQ0MsS0FBUCxLQUFpQixTQUFyQixFQUFnQztBQUM5QlAsVUFBQUEsU0FBUyxDQUFDQyxXQUFWLENBQXNCTyxrQkFBdEIsQ0FBeUMsVUFBQ0MsUUFBRCxFQUFjO0FBQ3JELGdCQUFNQyxRQUFrQixHQUFHO0FBQ3pCQyxjQUFBQSxHQUFHLEVBQUVGLFFBQVEsQ0FBQ0csTUFBVCxDQUFnQkMsUUFESTtBQUV6QkMsY0FBQUEsR0FBRyxFQUFFTCxRQUFRLENBQUNHLE1BQVQsQ0FBZ0JHO0FBRkksYUFBM0I7QUFLQXBCLFlBQUFBLGdCQUFnQixDQUFDZSxRQUFELENBQWhCO0FBQ0QsV0FQRCxFQUQ4QixDQVM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7O0FBQ0RKLFFBQUFBLE1BQU0sQ0FBQ1UsUUFBUCxHQUFrQixZQUFZO0FBQzVCQyxVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVosTUFBTSxDQUFDQyxLQUFuQjtBQUNELFNBRkQ7QUFHRCxPQXJCSDtBQXNCRCxLQXZCRCxNQXVCTztBQUNMWSxNQUFBQSxLQUFLLENBQUMsc0JBQUQsQ0FBTDtBQUNEO0FBQ0YsR0EzQlEsRUEyQk4sRUEzQk0sQ0FBVDtBQTZCQSxzQkFDRTtBQUFLLGFBQVMsRUFBRTFCLFNBQWhCO0FBQUEsMkJBQ0UsOERBQUMsdURBQUQ7QUFDRSxtQkFBYSxNQURmO0FBRUUsUUFBRSxFQUFDLGdCQUZMO0FBR0UsYUFBTyxFQUFFSyxPQUhYO0FBSUUsb0JBQWMsRUFBRSx3QkFBQ3NCLE1BQUQ7QUFBQSxlQUFZQSxNQUFNLENBQUNDLEtBQW5CO0FBQUEsT0FKbEI7QUFLRSxRQUFFLEVBQUU7QUFBRUMsUUFBQUEsS0FBSyxFQUFFO0FBQVQsT0FMTjtBQU1FLGlCQUFXLEVBQUUsS0FOZjtBQU9FLGlCQUFXLEVBQUUscUJBQUNDLE1BQUQ7QUFBQSw0QkFDWCw4REFBQyxvREFBRCxrQ0FDTUEsTUFETjtBQUVFLG1CQUFTLEVBQUVuQywwRUFGYjtBQUdFLG1CQUFTLE1BSFg7QUFJRSxpQkFBTyxFQUFDLFVBSlY7QUFLRSxlQUFLLEVBQUMsMkJBTFI7QUFNRSxlQUFLLEVBQUVRLGNBTlQ7QUFPRSxrQkFBUTtBQUFBLDBSQUFFLGlCQUFPNkIsS0FBUDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1I1QixzQkFBQUEsaUJBQWlCLENBQUM0QixLQUFLLENBQUNDLE1BQU4sQ0FBYUMsS0FBZCxDQUFqQjtBQURRO0FBQUEsNkJBR2VwQyxnREFBQSxDQUNyQixvQ0FEcUIsRUFFckI7QUFDRWdDLHdCQUFBQSxNQUFNLEVBQUU7QUFDTk0sMEJBQUFBLENBQUMsRUFBRUosS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBRFY7QUFFTmhCLDBCQUFBQSxHQUFHLEVBQUVqQixhQUFhLENBQUNpQixHQUZiO0FBR05HLDBCQUFBQSxHQUFHLEVBQUVwQixhQUFhLENBQUNvQjtBQUhiO0FBRFYsdUJBRnFCLENBSGY7O0FBQUE7QUFBQTtBQUdBZ0Isc0JBQUFBLElBSEEsb0JBR0FBLElBSEE7QUFjUi9CLHNCQUFBQSxVQUFVLENBQUMrQixJQUFELENBQVY7O0FBZFE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBRjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFc7QUFBQTtBQVBmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFzQ0Q7O0dBeEV1QnRDO1VBQ29CSDs7O0tBRHBCRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaeEI7QUFPTyxJQUFNRixtQkFBbUIsR0FBR3lDLDRDQUFJLENBQUM7QUFDdENDLEVBQUFBLEdBQUcsRUFBRSxVQURpQztBQUV0QyxhQUFTO0FBQ1ByQixJQUFBQSxHQUFHLEVBQUUsSUFERTtBQUVQRyxJQUFBQSxHQUFHLEVBQUU7QUFGRTtBQUY2QixDQUFELENBQWhDO0FBUUEsSUFBTW1CLDBCQUEwQixHQUFHRiw0Q0FBSSxDQUFDO0FBQzdDQyxFQUFBQSxHQUFHLEVBQUUsaUJBRHdDO0FBRTdDLGFBQVM7QUFGb0MsQ0FBRCxDQUF2QyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TZWFyY2gudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvbGliL3N0YXRlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdXRvY29tcGxldGUsIFRleHRGaWVsZCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIkAvc3R5bGVzL1NlYXJjaC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlIH0gZnJvbSBcInJlY29pbFwiO1xyXG5pbXBvcnQgeyBsb2NhdGlvblJlY29pbFN0YXRlLCBMb2NhdGlvbiB9IGZyb20gXCJAL2xpYi9zdGF0ZXNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgQXV0b2NvbXBsZXRlTG9jYXRpb24gZnJvbSBcIkAvaW50ZXJmYWNlcy9hdXRvY29tcGxldGVMb2NhdGlvblwiO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBjbGFzc05hbWU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoKHsgY2xhc3NOYW1lIH06IFByb3BzKSB7XHJcbiAgY29uc3QgW2xvY2F0aW9uU3RhdGUsIHNldExvY2F0aW9uU3RhdGVdID0gdXNlUmVjb2lsU3RhdGUobG9jYXRpb25SZWNvaWxTdGF0ZSk7XHJcbiAgY29uc3QgW3RleHRGaWVsZFZhbHVlLCBzZXRUZXh0RmllbGRWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbb3B0aW9ucywgc2V0T3B0aW9uc10gPSB1c2VTdGF0ZTxBdXRvY29tcGxldGVMb2NhdGlvbltdPihbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XHJcbiAgICAgIG5hdmlnYXRvci5wZXJtaXNzaW9uc1xyXG4gICAgICAgIC5xdWVyeSh7IG5hbWU6IFwiZ2VvbG9jYXRpb25cIiB9KVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgIGlmIChyZXN1bHQuc3RhdGUgPT09IFwiZ3JhbnRlZFwiKSB7XHJcbiAgICAgICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oKHBvc2l0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgbG9jYXRpb246IExvY2F0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgbGF0OiBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGUsXHJcbiAgICAgICAgICAgICAgICBsb246IHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGUsXHJcbiAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgc2V0TG9jYXRpb25TdGF0ZShsb2NhdGlvbik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvL0lmIGdyYW50ZWQgdGhlbiB5b3UgY2FuIGRpcmVjdGx5IGNhbGwgeW91ciBmdW5jdGlvbiBoZXJlXHJcbiAgICAgICAgICAgIC8vIH0gZWxzZSBpZiAocmVzdWx0LnN0YXRlID09PSBcInByb21wdFwiKSB7XHJcbiAgICAgICAgICAgIC8vICAgY29uc29sZS5sb2cocmVzdWx0LnN0YXRlKTtcclxuICAgICAgICAgICAgLy8gfSBlbHNlIGlmIChyZXN1bHQuc3RhdGUgPT09IFwiZGVuaWVkXCIpIHtcclxuICAgICAgICAgICAgLy8gICAvL0lmIGRlbmllZCB0aGVuIHlvdSBoYXZlIHRvIHNob3cgaW5zdHJ1Y3Rpb25zIHRvIGVuYWJsZSBsb2NhdGlvblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmVzdWx0Lm9uY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQuc3RhdGUpO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFsZXJ0KFwiU29ycnkgTm90IGF2YWlsYWJsZSFcIik7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XHJcbiAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICBkaXNhYmxlUG9ydGFsXHJcbiAgICAgICAgaWQ9XCJjb21iby1ib3gtZGVtb1wiXHJcbiAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cclxuICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4gb3B0aW9uLnRpdGxlfVxyXG4gICAgICAgIHN4PXt7IHdpZHRoOiAzMDAgfX1cclxuICAgICAgICBjbGVhck9uQmx1cj17ZmFsc2V9XHJcbiAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IChcclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgey4uLnBhcmFtc31cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNofVxyXG4gICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgbGFiZWw9XCLwn5SOIFNlYXJjaCBwbGFjZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt0ZXh0RmllbGRWYWx1ZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2FzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldFRleHRGaWVsZFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICAgICAgICAgICAgXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvYXV0b2NvbXBsZXRlXCIsXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHE6IGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBsYXQ6IGxvY2F0aW9uU3RhdGUubGF0LFxyXG4gICAgICAgICAgICAgICAgICAgIGxvbjogbG9jYXRpb25TdGF0ZS5sb24sXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgc2V0T3B0aW9ucyhkYXRhKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgYXRvbSB9IGZyb20gXCJyZWNvaWxcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTG9jYXRpb24ge1xyXG4gIGxhdDogbnVtYmVyIHwgbnVsbDtcclxuICBsb246IG51bWJlciB8IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2NhdGlvblJlY29pbFN0YXRlID0gYXRvbSh7XHJcbiAga2V5OiBcImxvY2F0aW9uXCIsXHJcbiAgZGVmYXVsdDoge1xyXG4gICAgbGF0OiBudWxsLFxyXG4gICAgbG9uOiBudWxsLFxyXG4gIH0gYXMgTG9jYXRpb24sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGhpc3RvcnlMb2NhdGlvblJlY29pbFN0YXRlID0gYXRvbSh7XHJcbiAga2V5OiBcImhpc3RvcnlMb2NhdGlvblwiLFxyXG4gIGRlZmF1bHQ6IFtdIGFzIExvY2F0aW9uW10sXHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiQXV0b2NvbXBsZXRlIiwiVGV4dEZpZWxkIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsInVzZVJlY29pbFN0YXRlIiwibG9jYXRpb25SZWNvaWxTdGF0ZSIsImF4aW9zIiwiU2VhcmNoIiwiY2xhc3NOYW1lIiwibG9jYXRpb25TdGF0ZSIsInNldExvY2F0aW9uU3RhdGUiLCJ0ZXh0RmllbGRWYWx1ZSIsInNldFRleHRGaWVsZFZhbHVlIiwib3B0aW9ucyIsInNldE9wdGlvbnMiLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsInBlcm1pc3Npb25zIiwicXVlcnkiLCJuYW1lIiwidGhlbiIsInJlc3VsdCIsInN0YXRlIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwicG9zaXRpb24iLCJsb2NhdGlvbiIsImxhdCIsImNvb3JkcyIsImxhdGl0dWRlIiwibG9uIiwibG9uZ2l0dWRlIiwib25jaGFuZ2UiLCJjb25zb2xlIiwibG9nIiwiYWxlcnQiLCJvcHRpb24iLCJ0aXRsZSIsIndpZHRoIiwicGFyYW1zIiwic2VhcmNoIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImdldCIsInEiLCJkYXRhIiwiYXRvbSIsImtleSIsImhpc3RvcnlMb2NhdGlvblJlY29pbFN0YXRlIl0sInNvdXJjZVJvb3QiOiIifQ==