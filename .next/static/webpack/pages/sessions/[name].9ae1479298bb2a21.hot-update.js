"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/sessions/[name]",{

/***/ "./pages/sessions/[name].jsx":
/*!***********************************!*\
  !*** ./pages/sessions/[name].jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NoteName; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _s = $RefreshSig$();\n\nfunction NoteName() {\n    _s();\n    const notes = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.notesData);\n    const index = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state)=>state.currentNoteIndex);\n    const note = notes[index];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"page\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"header\",\n                children: \"Individual Session Note\"\n            }, void 0, false, {\n                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/sessions/[name].jsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: note.note\n            }, void 0, false, {\n                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/sessions/[name].jsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/sessions/[name].jsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n_s(NoteName, \"+tzwGihMjSvq1bK+rnn6+qWvBmQ=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector\n    ];\n});\n_c = NoteName;\nvar _c;\n$RefreshReg$(_c, \"NoteName\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zZXNzaW9ucy9bbmFtZV0uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEwQztBQUUzQixTQUFTQzs7SUFDdEIsTUFBTUMsUUFBUUYsd0RBQVdBLENBQUNHLENBQUFBLFFBQVNBLE1BQU1DO0lBQ3pDLE1BQU1DLFFBQVFMLHdEQUFXQSxDQUFDRyxDQUFBQSxRQUFTQSxNQUFNRztJQUV6QyxNQUFNQyxPQUFPTCxLQUFLLENBQUNHLE1BQU07SUFFekIscUJBQ0UsOERBQUNHO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBUzs7Ozs7OzBCQUN2Qiw4REFBQ0U7MEJBQUdKLEtBQUtBOzs7Ozs7Ozs7Ozs7QUFHZjtHQVp3Qk47O1FBQ1JELG9EQUFXQTtRQUNYQSxvREFBV0E7OztLQUZIQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zZXNzaW9ucy9bbmFtZV0uanN4P2Q3Y2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5vdGVOYW1lKCkge1xuICBjb25zdCBub3RlcyA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLm5vdGVzRGF0YSk7XG4gIGNvbnN0IGluZGV4ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuY3VycmVudE5vdGVJbmRleCk7XG5cbiAgY29uc3Qgbm90ZSA9IG5vdGVzW2luZGV4XTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdwYWdlJz5cbiAgICAgIDxoMSBjbGFzc05hbWU9J2hlYWRlcic+SW5kaXZpZHVhbCBTZXNzaW9uIE5vdGU8L2gxPlxuICAgICAgPHA+e25vdGUubm90ZX08L3A+XG4gICAgPC9kaXY+XG4gIClcbn0iXSwibmFtZXMiOlsidXNlU2VsZWN0b3IiLCJOb3RlTmFtZSIsIm5vdGVzIiwic3RhdGUiLCJub3Rlc0RhdGEiLCJpbmRleCIsImN1cnJlbnROb3RlSW5kZXgiLCJub3RlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/sessions/[name].jsx\n"));

/***/ })

});