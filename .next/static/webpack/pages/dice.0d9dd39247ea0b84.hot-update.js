"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dice",{

/***/ "./components/die.jsx":
/*!****************************!*\
  !*** ./components/die.jsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Die; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Die(param) {\n    let { index , value , onDiceSidesChange  } = param;\n    _s();\n    const [selectedSides, setSelectedSides] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(4);\n    const handleDiceSidesChange = (e)=>{\n        setSelectedSides(parseInt(e.target.value, 10));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"die-\".concat(index),\n                children: [\n                    \"Die \",\n                    index,\n                    \":\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/components/die.jsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                value: value,\n                onChange: (e)=>onDiceSidesChange(parseInt(e.target.value, 10)),\n                children: [\n                    4,\n                    6,\n                    8,\n                    10,\n                    12,\n                    20\n                ].map((sides)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: sides,\n                        children: sides\n                    }, sides, false, {\n                        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/components/die.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 18\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/components/die.jsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/components/die.jsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_s(Die, \"SJ9Y290cFi10jSwP/HBOiQaVyGk=\");\n_c = Die;\n;\nvar _c;\n$RefreshReg$(_c, \"Die\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2RpZS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFpQztBQUVsQixTQUFTQyxJQUFJLEtBQW1DO1FBQW5DLEVBQUVDLE1BQUssRUFBRUMsTUFBSyxFQUFFQyxrQkFBaUIsRUFBRSxHQUFuQzs7SUFDMUIsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR04sK0NBQVFBLENBQUM7SUFFbkQsTUFBTU8sd0JBQXdCLENBQUNDO1FBQzdCRixpQkFBaUJHLFNBQVNELEVBQUVFLE9BQU9QLE9BQU87SUFDNUM7SUFFQSxxQkFDRSw4REFBQ1E7OzBCQUNDLDhEQUFDQztnQkFBTUMsU0FBUyxPQUFhLE9BQU5YOztvQkFBUztvQkFBS0E7b0JBQU07Ozs7Ozs7MEJBQzNDLDhEQUFDWTtnQkFDQ1gsT0FBT0E7Z0JBQ1BZLFVBQVUsQ0FBQ1AsSUFBTUosa0JBQWtCSyxTQUFTRCxFQUFFRSxPQUFPUCxPQUFPOzBCQUUzRDtvQkFBQztvQkFBRztvQkFBRztvQkFBRztvQkFBSTtvQkFBSTtpQkFBRyxDQUFDYSxJQUFJLENBQUNDO29CQUMxQixxQkFBTyw4REFBQ0M7d0JBQW1CZixPQUFPYztrQ0FBUUE7dUJBQXRCQTs7Ozs7Z0JBQ3RCOzs7Ozs7Ozs7Ozs7QUFJUjtHQXBCd0JoQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2RpZS5qc3g/OTYxZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGllKHsgaW5kZXgsIHZhbHVlLCBvbkRpY2VTaWRlc0NoYW5nZSB9KSB7XG4gIGNvbnN0IFtzZWxlY3RlZFNpZGVzLCBzZXRTZWxlY3RlZFNpZGVzXSA9IHVzZVN0YXRlKDQpO1xuXG4gIGNvbnN0IGhhbmRsZURpY2VTaWRlc0NoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRTaWRlcyhwYXJzZUludChlLnRhcmdldC52YWx1ZSwgMTApKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxsYWJlbCBodG1sRm9yPXtgZGllLSR7aW5kZXh9YH0+RGllIHtpbmRleH06PC9sYWJlbD5cbiAgICAgIDxzZWxlY3RcbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uRGljZVNpZGVzQ2hhbmdlKHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlLCAxMCkpfVxuICAgICAgPlxuICAgICAgICB7WzQsIDYsIDgsIDEwLCAxMiwgMjBdLm1hcCgoc2lkZXMpID0+IHtcbiAgICAgICAgICByZXR1cm4gPG9wdGlvbiBrZXk9e3NpZGVzfSB2YWx1ZT17c2lkZXN9PntzaWRlc308L29wdGlvbj5cbiAgICAgICAgfSl9XG4gICAgICA8L3NlbGVjdD5cbiAgICA8L2Rpdj5cbiAgKVxufTsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJEaWUiLCJpbmRleCIsInZhbHVlIiwib25EaWNlU2lkZXNDaGFuZ2UiLCJzZWxlY3RlZFNpZGVzIiwic2V0U2VsZWN0ZWRTaWRlcyIsImhhbmRsZURpY2VTaWRlc0NoYW5nZSIsImUiLCJwYXJzZUludCIsInRhcmdldCIsImRpdiIsImxhYmVsIiwiaHRtbEZvciIsInNlbGVjdCIsIm9uQ2hhbmdlIiwibWFwIiwic2lkZXMiLCJvcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/die.jsx\n"));

/***/ })

});