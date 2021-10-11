(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Index)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material */ "@mui/material");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_Dashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Dashboard */ "./src/components/Dashboard.tsx");
/* harmony import */ var _src_components_Information__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Information */ "./src/components/Information.tsx");
/* harmony import */ var _styles_IndexPage_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/styles/IndexPage.module.css */ "./src/styles/IndexPage.module.css");
/* harmony import */ var _styles_IndexPage_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_IndexPage_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Dev\\atestat\\pages\\index.tsx";






function Index() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Grid, {
    container: true,
    className: (_styles_IndexPage_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Grid, {
      item: true,
      xs: 8,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_src_components_Dashboard__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Grid, {
      item: true,
      xs: 4,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_src_components_Information__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/CityCard.tsx":
/*!*************************************!*\
  !*** ./src/components/CityCard.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CityCard)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material */ "@mui/material");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_CityCard_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/CityCard.module.css */ "./src/styles/CityCard.module.css");
/* harmony import */ var _styles_CityCard_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_CityCard_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Dev\\atestat\\src\\components\\CityCard.tsx";




function CityCard({
  photoSrc,
  city,
  country
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: (_styles_CityCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
      className: (_styles_CityCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().image),
      src: photoSrc
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Typography, {
      className: (_styles_CityCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().text),
      variant: "body1",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("b", {
        children: [city, ", ", country]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/CityCards.tsx":
/*!**************************************!*\
  !*** ./src/components/CityCards.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CityCards)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CityCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CityCard */ "./src/components/CityCard.tsx");
/* harmony import */ var _styles_CityCards_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/CityCards.module.css */ "./src/styles/CityCards.module.css");
/* harmony import */ var _styles_CityCards_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_CityCards_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Dev\\atestat\\src\\components\\CityCards.tsx";




function CityCards() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: (_styles_CityCards_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_CityCard__WEBPACK_IMPORTED_MODULE_1__.default, {
      photoSrc: "https://i.pinimg.com/originals/0a/ee/68/0aee68e5e233cad0c948e3789d08f085.jpg",
      city: "Paris",
      country: "France"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_CityCard__WEBPACK_IMPORTED_MODULE_1__.default, {
      photoSrc: "https://i.pinimg.com/originals/0a/ee/68/0aee68e5e233cad0c948e3789d08f085.jpg",
      city: "Paris",
      country: "France"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_CityCard__WEBPACK_IMPORTED_MODULE_1__.default, {
      photoSrc: "https://i.pinimg.com/originals/0a/ee/68/0aee68e5e233cad0c948e3789d08f085.jpg",
      city: "Paris",
      country: "France"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_CityCard__WEBPACK_IMPORTED_MODULE_1__.default, {
      photoSrc: "https://i.pinimg.com/originals/0a/ee/68/0aee68e5e233cad0c948e3789d08f085.jpg",
      city: "Paris",
      country: "France"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_CityCard__WEBPACK_IMPORTED_MODULE_1__.default, {
      photoSrc: "https://i.pinimg.com/originals/0a/ee/68/0aee68e5e233cad0c948e3789d08f085.jpg",
      city: "Paris",
      country: "France"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/Dashboard.tsx":
/*!**************************************!*\
  !*** ./src/components/Dashboard.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Dashboard)
/* harmony export */ });
/* harmony import */ var _styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/styles/Dashboard.module.css */ "./src/styles/Dashboard.module.css");
/* harmony import */ var _styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material */ "@mui/material");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CityCards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CityCards */ "./src/components/CityCards.tsx");
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Search */ "./src/components/Search.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Dev\\atestat\\src\\components\\Dashboard.tsx";






function Dashboard() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_Search__WEBPACK_IMPORTED_MODULE_3__.default, {
      className: (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_5___default().search)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Typography, {
      className: (_styles_Dashboard_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),
      variant: "h2",
      align: "left",
      children: ["Prognoz\u0103 ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("b", {
        children: "Meteo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 18
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_CityCards__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/Information.tsx":
/*!****************************************!*\
  !*** ./src/components/Information.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Information)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Information_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/Information.module.css */ "./src/styles/Information.module.css");
/* harmony import */ var _styles_Information_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Information_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Dev\\atestat\\src\\components\\Information.tsx";



function Information() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: (_styles_Information_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),
    children: "ddsa"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 10
  }, this);
}

/***/ }),

/***/ "./src/components/Search.tsx":
/*!***********************************!*\
  !*** ./src/components/Search.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Search)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material */ "@mui/material");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Search_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/styles/Search.module.css */ "./src/styles/Search.module.css");
/* harmony import */ var _styles_Search_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Search_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ "recoil");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_states__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/states */ "./src/lib/states.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Dev\\atestat\\src\\components\\Search.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function Search({
  className
}) {
  const [locationState, setLocationState] = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_lib_states__WEBPACK_IMPORTED_MODULE_3__.locationRecoilState);
  const {
    0: textFieldValue,
    1: setTextFieldValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: options,
    1: setOptions
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (navigator.geolocation) {
      navigator.permissions.query({
        name: "geolocation"
      }).then(function (result) {
        if (result.state === "granted") {
          navigator.geolocation.getCurrentPosition(position => {
            const location = {
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    className: className,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Autocomplete, {
      disablePortal: true,
      id: "combo-box-demo",
      options: options,
      getOptionLabel: option => option.title,
      sx: {
        width: 300
      },
      clearOnBlur: false,
      renderInput: params => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_0__.TextField, _objectSpread(_objectSpread({}, params), {}, {
        className: (_styles_Search_module_css__WEBPACK_IMPORTED_MODULE_6___default().search),
        fullWidth: true,
        variant: "outlined",
        label: "\uD83D\uDD0E Search place",
        value: textFieldValue,
        onChange: async event => {
          setTextFieldValue(event.target.value);
          const {
            data
          } = await axios__WEBPACK_IMPORTED_MODULE_4___default().get("http://localhost:3001/autocomplete", {
            params: {
              q: event.target.value,
              lat: locationState.lat,
              lon: locationState.lon
            }
          });
          setOptions(data);
        }
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }, this)
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

/***/ }),

/***/ "./src/lib/states.ts":
/*!***************************!*\
  !*** ./src/lib/states.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locationRecoilState": () => (/* binding */ locationRecoilState),
/* harmony export */   "historyLocationRecoilState": () => (/* binding */ historyLocationRecoilState)
/* harmony export */ });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ "recoil");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);

const locationRecoilState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: "location",
  default: {
    lat: null,
    lon: null
  }
});
const historyLocationRecoilState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
  key: "historyLocation",
  default: []
});

/***/ }),

/***/ "./src/styles/CityCard.module.css":
/*!****************************************!*\
  !*** ./src/styles/CityCard.module.css ***!
  \****************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"container": "CityCard_container__1DHeS",
	"image": "CityCard_image__3giLq",
	"text": "CityCard_text__cWqUc"
};


/***/ }),

/***/ "./src/styles/CityCards.module.css":
/*!*****************************************!*\
  !*** ./src/styles/CityCards.module.css ***!
  \*****************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"container": "CityCards_container__F0qw8"
};


/***/ }),

/***/ "./src/styles/Dashboard.module.css":
/*!*****************************************!*\
  !*** ./src/styles/Dashboard.module.css ***!
  \*****************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Dashboard_container__AhUPe",
	"search": "Dashboard_search__1_u4S",
	"title": "Dashboard_title__Pp0o8"
};


/***/ }),

/***/ "./src/styles/IndexPage.module.css":
/*!*****************************************!*\
  !*** ./src/styles/IndexPage.module.css ***!
  \*****************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"container": "IndexPage_container__lHgi-"
};


/***/ }),

/***/ "./src/styles/Information.module.css":
/*!*******************************************!*\
  !*** ./src/styles/Information.module.css ***!
  \*******************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Information_container__2B0OA"
};


/***/ }),

/***/ "./src/styles/Search.module.css":
/*!**************************************!*\
  !*** ./src/styles/Search.module.css ***!
  \**************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"search": "Search_search__29mWN"
};


/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "recoil":
/*!*************************!*\
  !*** external "recoil" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("recoil");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy13aXRoLXR5cGVzY3JpcHQvLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vbmV4dGpzLXdpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL0NpdHlDYXJkLnRzeCIsIndlYnBhY2s6Ly9uZXh0anMtd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvQ2l0eUNhcmRzLnRzeCIsIndlYnBhY2s6Ly9uZXh0anMtd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvRGFzaGJvYXJkLnRzeCIsIndlYnBhY2s6Ly9uZXh0anMtd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvSW5mb3JtYXRpb24udHN4Iiwid2VicGFjazovL25leHRqcy13aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9TZWFyY2gudHN4Iiwid2VicGFjazovL25leHRqcy13aXRoLXR5cGVzY3JpcHQvLi9zcmMvbGliL3N0YXRlcy50cyIsIndlYnBhY2s6Ly9uZXh0anMtd2l0aC10eXBlc2NyaXB0Ly4vc3JjL3N0eWxlcy9DaXR5Q2FyZC5tb2R1bGUuY3NzIiwid2VicGFjazovL25leHRqcy13aXRoLXR5cGVzY3JpcHQvLi9zcmMvc3R5bGVzL0NpdHlDYXJkcy5tb2R1bGUuY3NzIiwid2VicGFjazovL25leHRqcy13aXRoLXR5cGVzY3JpcHQvLi9zcmMvc3R5bGVzL0Rhc2hib2FyZC5tb2R1bGUuY3NzIiwid2VicGFjazovL25leHRqcy13aXRoLXR5cGVzY3JpcHQvLi9zcmMvc3R5bGVzL0luZGV4UGFnZS5tb2R1bGUuY3NzIiwid2VicGFjazovL25leHRqcy13aXRoLXR5cGVzY3JpcHQvLi9zcmMvc3R5bGVzL0luZm9ybWF0aW9uLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vbmV4dGpzLXdpdGgtdHlwZXNjcmlwdC8uL3NyYy9zdHlsZXMvU2VhcmNoLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vbmV4dGpzLXdpdGgtdHlwZXNjcmlwdC9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWxcIiIsIndlYnBhY2s6Ly9uZXh0anMtd2l0aC10eXBlc2NyaXB0L2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9uZXh0anMtd2l0aC10eXBlc2NyaXB0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9uZXh0anMtd2l0aC10eXBlc2NyaXB0L2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzLXdpdGgtdHlwZXNjcmlwdC9leHRlcm5hbCBcInJlY29pbFwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyaWQgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9EYXNoYm9hcmRcIjtcbmltcG9ydCBJbmZvcm1hdGlvbiBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvSW5mb3JtYXRpb25cIjtcbmltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvSW5kZXhQYWdlLm1vZHVsZS5jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDxHcmlkIGNvbnRhaW5lciBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEdyaWQgaXRlbSB4cz17OH0+XG4gICAgICAgIDxEYXNoYm9hcmQgLz5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxHcmlkIGl0ZW0geHM9ezR9PlxuICAgICAgICA8SW5mb3JtYXRpb24gLz5cbiAgICAgIDwvR3JpZD5cbiAgICA8L0dyaWQ+XG4gICk7XG59XG4iLCJpbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCJAL3N0eWxlcy9DaXR5Q2FyZC5tb2R1bGUuY3NzXCI7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIHBob3RvU3JjOiBzdHJpbmc7XHJcbiAgY2l0eTogc3RyaW5nO1xyXG4gIGNvdW50cnk6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2l0eUNhcmQoeyBwaG90b1NyYywgY2l0eSwgY291bnRyeSB9OiBQcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2V9IHNyYz17cGhvdG9TcmN9IC8+XHJcbiAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17c3R5bGVzLnRleHR9IHZhcmlhbnQ9XCJib2R5MVwiPlxyXG4gICAgICAgIDxiPlxyXG4gICAgICAgICAge2NpdHl9LCB7Y291bnRyeX1cclxuICAgICAgICA8L2I+XHJcbiAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2l0eUNhcmQgZnJvbSBcIi4vQ2l0eUNhcmRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9zdHlsZXMvQ2l0eUNhcmRzLm1vZHVsZS5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENpdHlDYXJkcygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8Q2l0eUNhcmRcclxuICAgICAgICBwaG90b1NyYz1cImh0dHBzOi8vaS5waW5pbWcuY29tL29yaWdpbmFscy8wYS9lZS82OC8wYWVlNjhlNWUyMzNjYWQwYzk0OGUzNzg5ZDA4ZjA4NS5qcGdcIlxyXG4gICAgICAgIGNpdHk9XCJQYXJpc1wiXHJcbiAgICAgICAgY291bnRyeT1cIkZyYW5jZVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxDaXR5Q2FyZFxyXG4gICAgICAgIHBob3RvU3JjPVwiaHR0cHM6Ly9pLnBpbmltZy5jb20vb3JpZ2luYWxzLzBhL2VlLzY4LzBhZWU2OGU1ZTIzM2NhZDBjOTQ4ZTM3ODlkMDhmMDg1LmpwZ1wiXHJcbiAgICAgICAgY2l0eT1cIlBhcmlzXCJcclxuICAgICAgICBjb3VudHJ5PVwiRnJhbmNlXCJcclxuICAgICAgLz5cclxuICAgICAgPENpdHlDYXJkXHJcbiAgICAgICAgcGhvdG9TcmM9XCJodHRwczovL2kucGluaW1nLmNvbS9vcmlnaW5hbHMvMGEvZWUvNjgvMGFlZTY4ZTVlMjMzY2FkMGM5NDhlMzc4OWQwOGYwODUuanBnXCJcclxuICAgICAgICBjaXR5PVwiUGFyaXNcIlxyXG4gICAgICAgIGNvdW50cnk9XCJGcmFuY2VcIlxyXG4gICAgICAvPlxyXG4gICAgICA8Q2l0eUNhcmRcclxuICAgICAgICBwaG90b1NyYz1cImh0dHBzOi8vaS5waW5pbWcuY29tL29yaWdpbmFscy8wYS9lZS82OC8wYWVlNjhlNWUyMzNjYWQwYzk0OGUzNzg5ZDA4ZjA4NS5qcGdcIlxyXG4gICAgICAgIGNpdHk9XCJQYXJpc1wiXHJcbiAgICAgICAgY291bnRyeT1cIkZyYW5jZVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxDaXR5Q2FyZFxyXG4gICAgICAgIHBob3RvU3JjPVwiaHR0cHM6Ly9pLnBpbmltZy5jb20vb3JpZ2luYWxzLzBhL2VlLzY4LzBhZWU2OGU1ZTIzM2NhZDBjOTQ4ZTM3ODlkMDhmMDg1LmpwZ1wiXHJcbiAgICAgICAgY2l0eT1cIlBhcmlzXCJcclxuICAgICAgICBjb3VudHJ5PVwiRnJhbmNlXCJcclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9zdHlsZXMvRGFzaGJvYXJkLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENpdHlDYXJkcyBmcm9tIFwiLi9DaXR5Q2FyZHNcIjtcclxuaW1wb3J0IFNlYXJjaCBmcm9tIFwiLi9TZWFyY2hcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhc2hib2FyZCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8U2VhcmNoIGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaH0gLz5cclxuICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9IHZhcmlhbnQ9XCJoMlwiIGFsaWduPVwibGVmdFwiPlxyXG4gICAgICAgIFByb2dub3rEgyA8Yj5NZXRlbzwvYj5cclxuICAgICAgPC9UeXBvZ3JhcGh5PlxyXG5cclxuICAgICAgPENpdHlDYXJkcyAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIkAvc3R5bGVzL0luZm9ybWF0aW9uLm1vZHVsZS5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZm9ybWF0aW9uKCkge1xyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+ZGRzYTwvZGl2PjtcclxufVxyXG4iLCJpbXBvcnQgeyBBdXRvY29tcGxldGUsIFRleHRGaWVsZCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIkAvc3R5bGVzL1NlYXJjaC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlIH0gZnJvbSBcInJlY29pbFwiO1xyXG5pbXBvcnQgeyBsb2NhdGlvblJlY29pbFN0YXRlLCBMb2NhdGlvbiB9IGZyb20gXCJAL2xpYi9zdGF0ZXNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgQXV0b2NvbXBsZXRlTG9jYXRpb24gZnJvbSBcIkAvaW50ZXJmYWNlcy9hdXRvY29tcGxldGVMb2NhdGlvblwiO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBjbGFzc05hbWU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoKHsgY2xhc3NOYW1lIH06IFByb3BzKSB7XHJcbiAgY29uc3QgW2xvY2F0aW9uU3RhdGUsIHNldExvY2F0aW9uU3RhdGVdID0gdXNlUmVjb2lsU3RhdGUobG9jYXRpb25SZWNvaWxTdGF0ZSk7XHJcbiAgY29uc3QgW3RleHRGaWVsZFZhbHVlLCBzZXRUZXh0RmllbGRWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbb3B0aW9ucywgc2V0T3B0aW9uc10gPSB1c2VTdGF0ZTxBdXRvY29tcGxldGVMb2NhdGlvbltdPihbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XHJcbiAgICAgIG5hdmlnYXRvci5wZXJtaXNzaW9uc1xyXG4gICAgICAgIC5xdWVyeSh7IG5hbWU6IFwiZ2VvbG9jYXRpb25cIiB9KVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgIGlmIChyZXN1bHQuc3RhdGUgPT09IFwiZ3JhbnRlZFwiKSB7XHJcbiAgICAgICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oKHBvc2l0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgbG9jYXRpb246IExvY2F0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgbGF0OiBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGUsXHJcbiAgICAgICAgICAgICAgICBsb246IHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGUsXHJcbiAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgc2V0TG9jYXRpb25TdGF0ZShsb2NhdGlvbik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvL0lmIGdyYW50ZWQgdGhlbiB5b3UgY2FuIGRpcmVjdGx5IGNhbGwgeW91ciBmdW5jdGlvbiBoZXJlXHJcbiAgICAgICAgICAgIC8vIH0gZWxzZSBpZiAocmVzdWx0LnN0YXRlID09PSBcInByb21wdFwiKSB7XHJcbiAgICAgICAgICAgIC8vICAgY29uc29sZS5sb2cocmVzdWx0LnN0YXRlKTtcclxuICAgICAgICAgICAgLy8gfSBlbHNlIGlmIChyZXN1bHQuc3RhdGUgPT09IFwiZGVuaWVkXCIpIHtcclxuICAgICAgICAgICAgLy8gICAvL0lmIGRlbmllZCB0aGVuIHlvdSBoYXZlIHRvIHNob3cgaW5zdHJ1Y3Rpb25zIHRvIGVuYWJsZSBsb2NhdGlvblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmVzdWx0Lm9uY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQuc3RhdGUpO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFsZXJ0KFwiU29ycnkgTm90IGF2YWlsYWJsZSFcIik7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XHJcbiAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICBkaXNhYmxlUG9ydGFsXHJcbiAgICAgICAgaWQ9XCJjb21iby1ib3gtZGVtb1wiXHJcbiAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cclxuICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4gb3B0aW9uLnRpdGxlfVxyXG4gICAgICAgIHN4PXt7IHdpZHRoOiAzMDAgfX1cclxuICAgICAgICBjbGVhck9uQmx1cj17ZmFsc2V9XHJcbiAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IChcclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgey4uLnBhcmFtc31cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNofVxyXG4gICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgbGFiZWw9XCLwn5SOIFNlYXJjaCBwbGFjZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt0ZXh0RmllbGRWYWx1ZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2FzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldFRleHRGaWVsZFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICAgICAgICAgICAgXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvYXV0b2NvbXBsZXRlXCIsXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHE6IGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBsYXQ6IGxvY2F0aW9uU3RhdGUubGF0LFxyXG4gICAgICAgICAgICAgICAgICAgIGxvbjogbG9jYXRpb25TdGF0ZS5sb24sXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgc2V0T3B0aW9ucyhkYXRhKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgYXRvbSB9IGZyb20gXCJyZWNvaWxcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTG9jYXRpb24ge1xyXG4gIGxhdDogbnVtYmVyIHwgbnVsbDtcclxuICBsb246IG51bWJlciB8IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2NhdGlvblJlY29pbFN0YXRlID0gYXRvbSh7XHJcbiAga2V5OiBcImxvY2F0aW9uXCIsXHJcbiAgZGVmYXVsdDoge1xyXG4gICAgbGF0OiBudWxsLFxyXG4gICAgbG9uOiBudWxsLFxyXG4gIH0gYXMgTG9jYXRpb24sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGhpc3RvcnlMb2NhdGlvblJlY29pbFN0YXRlID0gYXRvbSh7XHJcbiAga2V5OiBcImhpc3RvcnlMb2NhdGlvblwiLFxyXG4gIGRlZmF1bHQ6IFtdIGFzIExvY2F0aW9uW10sXHJcbn0pO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJDaXR5Q2FyZF9jb250YWluZXJfXzFESGVTXCIsXG5cdFwiaW1hZ2VcIjogXCJDaXR5Q2FyZF9pbWFnZV9fM2dpTHFcIixcblx0XCJ0ZXh0XCI6IFwiQ2l0eUNhcmRfdGV4dF9fY1dxVWNcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkNpdHlDYXJkc19jb250YWluZXJfX0YwcXc4XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJEYXNoYm9hcmRfY29udGFpbmVyX19BaFVQZVwiLFxuXHRcInNlYXJjaFwiOiBcIkRhc2hib2FyZF9zZWFyY2hfXzFfdTRTXCIsXG5cdFwidGl0bGVcIjogXCJEYXNoYm9hcmRfdGl0bGVfX1BwMG84XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJJbmRleFBhZ2VfY29udGFpbmVyX19sSGdpLVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSW5mb3JtYXRpb25fY29udGFpbmVyX18yQjBPQVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic2VhcmNoXCI6IFwiU2VhcmNoX3NlYXJjaF9fMjltV05cIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlY29pbFwiKTsiXSwibmFtZXMiOlsiR3JpZCIsIlJlYWN0IiwiRGFzaGJvYXJkIiwiSW5mb3JtYXRpb24iLCJzdHlsZXMiLCJJbmRleCIsImNvbnRhaW5lciIsIlR5cG9ncmFwaHkiLCJDaXR5Q2FyZCIsInBob3RvU3JjIiwiY2l0eSIsImNvdW50cnkiLCJpbWFnZSIsInRleHQiLCJDaXR5Q2FyZHMiLCJTZWFyY2giLCJzZWFyY2giLCJ0aXRsZSIsIkF1dG9jb21wbGV0ZSIsIlRleHRGaWVsZCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVjb2lsU3RhdGUiLCJsb2NhdGlvblJlY29pbFN0YXRlIiwiYXhpb3MiLCJjbGFzc05hbWUiLCJsb2NhdGlvblN0YXRlIiwic2V0TG9jYXRpb25TdGF0ZSIsInRleHRGaWVsZFZhbHVlIiwic2V0VGV4dEZpZWxkVmFsdWUiLCJvcHRpb25zIiwic2V0T3B0aW9ucyIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwicGVybWlzc2lvbnMiLCJxdWVyeSIsIm5hbWUiLCJ0aGVuIiwicmVzdWx0Iiwic3RhdGUiLCJnZXRDdXJyZW50UG9zaXRpb24iLCJwb3NpdGlvbiIsImxvY2F0aW9uIiwibGF0IiwiY29vcmRzIiwibGF0aXR1ZGUiLCJsb24iLCJsb25naXR1ZGUiLCJvbmNoYW5nZSIsImNvbnNvbGUiLCJsb2ciLCJhbGVydCIsIm9wdGlvbiIsIndpZHRoIiwicGFyYW1zIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRhdGEiLCJnZXQiLCJxIiwiYXRvbSIsImtleSIsImRlZmF1bHQiLCJoaXN0b3J5TG9jYXRpb25SZWNvaWxTdGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=