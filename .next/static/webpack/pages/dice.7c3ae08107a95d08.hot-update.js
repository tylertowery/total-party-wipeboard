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

/***/ "./pages/dice.jsx":
/*!************************!*\
  !*** ./pages/dice.jsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dice; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_die__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/die */ \"./components/die.jsx\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Dice() {\n    _s();\n    const [numDice, setNumDice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleNumDiceChange = (e)=>{\n        setNumDice(e.target.value);\n    };\n    const handleDiceSidesChange = (e)=>{\n        setDiceSides();\n    };\n    const handleRoll = ()=>{\n        console.log(\"rolling\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"page\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"header\",\n                children: \"Dice Roller\"\n            }, void 0, false, {\n                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    children: [\n                        \"Number of Dice\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"number\",\n                            min: \"1\",\n                            max: \"10\",\n                            value: numDice,\n                            onChange: handleNumDiceChange\n                        }, void 0, false, {\n                            fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    ...Array(numDice)\n                ].map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_die__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        index: index + 1,\n                        onRoll: handleRoll\n                    }, index, false, {\n                        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n_s(Dice, \"ohEp9zwsTzz0UxDtm9Uoy7vXUHo=\");\n_c = Dice;\nvar _c;\n$RefreshReg$(_c, \"Dice\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kaWNlLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFpQztBQUNHO0FBRXJCLFNBQVNFOztJQUN0QixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0osK0NBQVFBLENBQUM7SUFFdkMsTUFBTUssc0JBQXNCLENBQUNDO1FBQzNCRixXQUFXRSxFQUFFQyxPQUFPQztJQUN0QjtJQUVBLE1BQU1DLHdCQUF3QixDQUFDSDtRQUM3Qkk7SUFDRjtJQUVBLE1BQU1DLGFBQWE7UUFDakJDLFFBQVFDLElBQUk7SUFDZDtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQVM7Ozs7OzswQkFDdkIsOERBQUNEOzBCQUNDLDRFQUFDRzs7d0JBQU07c0NBQ0wsOERBQUNDOzRCQUNDQyxNQUFLOzRCQUNMQyxLQUFJOzRCQUNKQyxLQUFJOzRCQUNKYixPQUFPTDs0QkFDUG1CLFVBQVVqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSWhCLDhEQUFDUzswQkFDRTt1QkFBSVMsTUFBTXBCO2lCQUFTLENBQUNxQixJQUFJLENBQUNDLEdBQUdDLHNCQUMzQiw4REFBQ3pCLHVEQUFHQTt3QkFBYXlCLE9BQU9BLFFBQVE7d0JBQUdDLFFBQVFoQjt1QkFBakNlOzs7Ozs7Ozs7Ozs7Ozs7O0FBTXBCO0dBckN3QnhCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2RpY2UuanN4PzVjMzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRGllIGZyb20gJy4uL2NvbXBvbmVudHMvZGllJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGljZSgpIHtcbiAgY29uc3QgW251bURpY2UsIHNldE51bURpY2VdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgaGFuZGxlTnVtRGljZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0TnVtRGljZShlLnRhcmdldC52YWx1ZSk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVEaWNlU2lkZXNDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldERpY2VTaWRlcygpXG4gIH1cblxuICBjb25zdCBoYW5kbGVSb2xsID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdyb2xsaW5nJyk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdwYWdlJz5cbiAgICAgIDxoMSBjbGFzc05hbWU9J2hlYWRlcic+RGljZSBSb2xsZXI8L2gxPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGxhYmVsPk51bWJlciBvZiBEaWNlXG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPSdudW1iZXInXG4gICAgICAgICAgICBtaW49JzEnXG4gICAgICAgICAgICBtYXg9JzEwJ1xuICAgICAgICAgICAgdmFsdWU9e251bURpY2V9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlTnVtRGljZUNoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICB7Wy4uLkFycmF5KG51bURpY2UpXS5tYXAoKF8sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPERpZSBrZXk9e2luZGV4fSBpbmRleD17aW5kZXggKyAxfSBvblJvbGw9e2hhbmRsZVJvbGx9IC8+XG4gICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkRpZSIsIkRpY2UiLCJudW1EaWNlIiwic2V0TnVtRGljZSIsImhhbmRsZU51bURpY2VDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVEaWNlU2lkZXNDaGFuZ2UiLCJzZXREaWNlU2lkZXMiLCJoYW5kbGVSb2xsIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJtaW4iLCJtYXgiLCJvbkNoYW5nZSIsIkFycmF5IiwibWFwIiwiXyIsImluZGV4Iiwib25Sb2xsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/dice.jsx\n"));

/***/ })

});