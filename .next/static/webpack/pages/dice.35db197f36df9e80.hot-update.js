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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dice; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_die__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/die */ \"./components/die.jsx\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Dice() {\n    _s();\n    const [numDice, setNumDice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [results, setResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleNumDiceChange = (e)=>{\n        setNumDice(parseInt(e.target.value, 10));\n        setResults([]);\n    };\n    const handleRoll = (result, index)=>{\n        console.log(\"rolling\");\n        setResults((prevResults)=>{\n            const newResults = [\n                ...prevResults\n            ];\n            newResults[index] = result;\n            return newResults;\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"page\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"header\",\n                children: \"Dice Roller\"\n            }, void 0, false, {\n                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    children: [\n                        \"Number of Dice\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            value: numDice,\n                            onChange: handleNumDiceChange,\n                            children: [\n                                ...Array(10)\n                            ].map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: index + 1,\n                                    children: index + 1\n                                }, index + 1, false, {\n                                    fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    ...Array(numDice)\n                ].map((_, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_die__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        index: index + 1,\n                        onRoll: handleRoll\n                    }, index + 1, false, {\n                        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 18\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(Dice, \"MtbmVqjZLwtWeKP/1z3sG8GP3DQ=\");\n_c = Dice;\nvar _c;\n$RefreshReg$(_c, \"Dice\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kaWNlLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFpQztBQUNHO0FBRXJCLFNBQVNFOztJQUN0QixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0osK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDSyxTQUFTQyxXQUFXLEdBQUdOLCtDQUFRQSxDQUFDLEVBQUU7SUFFekMsTUFBTU8sc0JBQXNCLENBQUNDO1FBQzNCSixXQUFXSyxTQUFTRCxFQUFFRSxPQUFPQyxPQUFPO1FBQ3BDTCxXQUFXLEVBQUU7SUFDZjtJQUVBLE1BQU1NLGFBQWEsQ0FBQ0MsUUFBUUM7UUFDMUJDLFFBQVFDLElBQUk7UUFDWlYsV0FBVyxDQUFDVztZQUNWLE1BQU1DLGFBQWE7bUJBQUlEO2FBQVk7WUFDbkNDLFVBQVUsQ0FBQ0osTUFBTSxHQUFHRDtZQUNwQixPQUFPSztRQUNUO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFTOzs7Ozs7MEJBQ3ZCLDhEQUFDRDswQkFDQyw0RUFBQ0c7O3dCQUFNO3NDQUNMLDhEQUFDQzs0QkFDQ1osT0FBT1I7NEJBQ1BxQixVQUFVakI7c0NBRVQ7bUNBQUlrQixNQUFNOzZCQUFJLENBQUNDLElBQUksQ0FBQ0MsR0FBR2Isc0JBQ3RCLDhEQUFDYztvQ0FBdUJqQixPQUFPRyxRQUFROzhDQUFJQSxRQUFRO21DQUF0Q0EsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUs3Qiw4REFBQ0s7MEJBQ0U7dUJBQUlNLE1BQU10QjtpQkFBUyxDQUFDdUIsSUFBSSxDQUFDQyxHQUFHYjtvQkFDM0IscUJBQU8sOERBQUNiLHVEQUFHQTt3QkFBaUJhLE9BQU9BLFFBQVE7d0JBQUdlLFFBQVFqQjt1QkFBckNFLFFBQVE7Ozs7O2dCQUMzQjs7Ozs7Ozs7Ozs7O0FBS1I7R0F6Q3dCWjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9kaWNlLmpzeD81YzM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IERpZSBmcm9tICcuLi9jb21wb25lbnRzL2RpZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERpY2UoKSB7XG4gIGNvbnN0IFtudW1EaWNlLCBzZXROdW1EaWNlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbcmVzdWx0cywgc2V0UmVzdWx0c10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgaGFuZGxlTnVtRGljZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0TnVtRGljZShwYXJzZUludChlLnRhcmdldC52YWx1ZSwgMTApKTtcbiAgICBzZXRSZXN1bHRzKFtdKTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVJvbGwgPSAocmVzdWx0LCBpbmRleCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdyb2xsaW5nJyk7XG4gICAgc2V0UmVzdWx0cygocHJldlJlc3VsdHMpID0+IHtcbiAgICAgIGNvbnN0IG5ld1Jlc3VsdHMgPSBbLi4ucHJldlJlc3VsdHNdO1xuICAgICAgbmV3UmVzdWx0c1tpbmRleF0gPSByZXN1bHQ7XG4gICAgICByZXR1cm4gbmV3UmVzdWx0cztcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0ncGFnZSc+XG4gICAgICA8aDEgY2xhc3NOYW1lPSdoZWFkZXInPkRpY2UgUm9sbGVyPC9oMT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbD5OdW1iZXIgb2YgRGljZVxuICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgIHZhbHVlPXtudW1EaWNlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU51bURpY2VDaGFuZ2V9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge1suLi5BcnJheSgxMCldLm1hcCgoXywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2luZGV4ICsgMX0gdmFsdWU9e2luZGV4ICsgMX0+e2luZGV4ICsgMX08L29wdGlvbj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICB7Wy4uLkFycmF5KG51bURpY2UpXS5tYXAoKF8sIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxEaWUga2V5PXtpbmRleCArIDF9IGluZGV4PXtpbmRleCArIDF9IG9uUm9sbD17aGFuZGxlUm9sbH0gLz5cbiAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiRGllIiwiRGljZSIsIm51bURpY2UiLCJzZXROdW1EaWNlIiwicmVzdWx0cyIsInNldFJlc3VsdHMiLCJoYW5kbGVOdW1EaWNlQ2hhbmdlIiwiZSIsInBhcnNlSW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVSb2xsIiwicmVzdWx0IiwiaW5kZXgiLCJjb25zb2xlIiwibG9nIiwicHJldlJlc3VsdHMiLCJuZXdSZXN1bHRzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJsYWJlbCIsInNlbGVjdCIsIm9uQ2hhbmdlIiwiQXJyYXkiLCJtYXAiLCJfIiwib3B0aW9uIiwib25Sb2xsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/dice.jsx\n"));

/***/ })

});