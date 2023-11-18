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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dice; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_die__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/die */ \"./components/die.jsx\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Dice() {\n    _s();\n    const [numDice, setNumDice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [diceValues, setDiceValues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array(numDice).fill(4));\n    const [total, setTotal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleNumDiceChange = (e)=>{\n        const newNumDice = parseInt(e.target.value, 10);\n        setNumDice(newNumDice);\n        setDiceValues(Array(numDice).fill(4));\n    };\n    const handleDiceSidesChange = (index, value)=>{\n        const newDiceValues = [\n            ...diceValues\n        ];\n        newDiceValues[index] = value;\n        setDiceValues(newDiceValues);\n    };\n    const handleRoll = ()=>{\n        console.log(\"rolling\");\n        const rolls = diceValues.map((sides)=>Math.floor(Math.random() * sides) + 1);\n        const calculatedTotal = rolls.reduce((sum, roll)=>sum + roll, 0);\n        setTotal(calculatedTotal);\n        console.log(\"Individual Rolls: \", rolls);\n        console.log(\"Total: \", total);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"page\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"header\",\n                children: \"Dice Roller\"\n            }, void 0, false, {\n                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    children: [\n                        \"Number of Dice\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            value: numDice,\n                            onChange: handleNumDiceChange,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"\",\n                                    children: \"Select How Many Dice to Roll\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 13\n                                }, this),\n                                [\n                                    ...Array(10)\n                                ].map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: index + 1,\n                                        children: index + 1\n                                    }, index + 1, false, {\n                                        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 15\n                                    }, this))\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    [\n                        ...Array(numDice)\n                    ].map((_, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_die__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            index: index + 1,\n                            value: diceValues[index],\n                            onDiceSidesChange: (value)=>handleDiceSidesChange(index, value)\n                        }, index + 1, false, {\n                            fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                            lineNumber: 48,\n                            columnNumber: 18\n                        }, this);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleRoll,\n                        children: \"Sum Results\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(Dice, \"fOTG9TOVne0BZYolp074kTXMQj8=\");\n_c = Dice;\nvar _c;\n$RefreshReg$(_c, \"Dice\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kaWNlLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFpQztBQUNHO0FBRXJCLFNBQVNFOztJQUN0QixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0osK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDSyxZQUFZQyxjQUFjLEdBQUdOLCtDQUFRQSxDQUFDTyxNQUFNSixTQUFTSyxLQUFLO0lBQ2pFLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHViwrQ0FBUUEsQ0FBQztJQUVuQyxNQUFNVyxzQkFBc0IsQ0FBQ0M7UUFDM0IsTUFBTUMsYUFBYUMsU0FBU0YsRUFBRUcsT0FBT0MsT0FBTztRQUM1Q1osV0FBV1M7UUFDWFAsY0FBY0MsTUFBTUosU0FBU0ssS0FBSztJQUNwQztJQUVBLE1BQU1TLHdCQUF3QixDQUFDQyxPQUFPRjtRQUNwQyxNQUFNRyxnQkFBZ0I7ZUFBSWQ7U0FBVztRQUNyQ2MsYUFBYSxDQUFDRCxNQUFNLEdBQUdGO1FBQ3ZCVixjQUFjYTtJQUNoQjtJQUVBLE1BQU1DLGFBQWE7UUFDakJDLFFBQVFDLElBQUk7UUFDWixNQUFNQyxRQUFRbEIsV0FBV21CLElBQUksQ0FBQ0MsUUFBVUMsS0FBS0MsTUFBTUQsS0FBS0UsV0FBV0gsU0FBUztRQUM1RSxNQUFNSSxrQkFBa0JOLE1BQU1PLE9BQU8sQ0FBQ0MsS0FBS0MsT0FBU0QsTUFBTUMsTUFBTTtRQUNoRXRCLFNBQVNtQjtRQUNUUixRQUFRQyxJQUFJLHNCQUFzQkM7UUFDbENGLFFBQVFDLElBQUksV0FBV2I7SUFDekI7SUFFQSxxQkFDRSw4REFBQ3dCO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBUzs7Ozs7OzBCQUN2Qiw4REFBQ0Q7MEJBQ0MsNEVBQUNHOzt3QkFBTTtzQ0FDTCw4REFBQ0M7NEJBQ0NyQixPQUFPYjs0QkFDUG1DLFVBQVUzQjs7OENBRVYsOERBQUM0QjtvQ0FBT3ZCLE9BQU07OENBQUc7Ozs7OztnQ0FDaEI7dUNBQUlULE1BQU07aUNBQUksQ0FBQ2lCLElBQUksQ0FBQ2dCLEdBQUd0QixzQkFDdEIsOERBQUNxQjt3Q0FBdUJ2QixPQUFPRSxRQUFRO2tEQUFJQSxRQUFRO3VDQUF0Q0EsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFLN0IsOERBQUNlOztvQkFDRTsyQkFBSTFCLE1BQU1KO3FCQUFTLENBQUNxQixJQUFJLENBQUNnQixHQUFHdEI7d0JBQzNCLHFCQUFPLDhEQUFDakIsdURBQUdBOzRCQUFpQmlCLE9BQU9BLFFBQVE7NEJBQUdGLE9BQU9YLFVBQVUsQ0FBQ2EsTUFBTTs0QkFBRXVCLG1CQUFtQixDQUFDekIsUUFBVUMsc0JBQXNCQyxPQUFPRjsyQkFBbEhFLFFBQVE7Ozs7O29CQUMzQjtrQ0FDQSw4REFBQ3dCO3dCQUFPQyxTQUFTdkI7a0NBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9yQztHQXJEd0JsQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9kaWNlLmpzeD81YzM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IERpZSBmcm9tICcuLi9jb21wb25lbnRzL2RpZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERpY2UoKSB7XG4gIGNvbnN0IFtudW1EaWNlLCBzZXROdW1EaWNlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbZGljZVZhbHVlcywgc2V0RGljZVZhbHVlc10gPSB1c2VTdGF0ZShBcnJheShudW1EaWNlKS5maWxsKDQpKTtcbiAgY29uc3QgW3RvdGFsLCBzZXRUb3RhbF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBoYW5kbGVOdW1EaWNlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCBuZXdOdW1EaWNlID0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUsIDEwKTtcbiAgICBzZXROdW1EaWNlKG5ld051bURpY2UpO1xuICAgIHNldERpY2VWYWx1ZXMoQXJyYXkobnVtRGljZSkuZmlsbCg0KSk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVEaWNlU2lkZXNDaGFuZ2UgPSAoaW5kZXgsIHZhbHVlKSA9PiB7XG4gICAgY29uc3QgbmV3RGljZVZhbHVlcyA9IFsuLi5kaWNlVmFsdWVzXTtcbiAgICBuZXdEaWNlVmFsdWVzW2luZGV4XSA9IHZhbHVlO1xuICAgIHNldERpY2VWYWx1ZXMobmV3RGljZVZhbHVlcyk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVSb2xsID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdyb2xsaW5nJyk7XG4gICAgY29uc3Qgcm9sbHMgPSBkaWNlVmFsdWVzLm1hcCgoc2lkZXMpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNpZGVzKSArIDEpO1xuICAgIGNvbnN0IGNhbGN1bGF0ZWRUb3RhbCA9IHJvbGxzLnJlZHVjZSgoc3VtLCByb2xsKSA9PiBzdW0gKyByb2xsLCAwKTtcbiAgICBzZXRUb3RhbChjYWxjdWxhdGVkVG90YWwpO1xuICAgIGNvbnNvbGUubG9nKCdJbmRpdmlkdWFsIFJvbGxzOiAnLCByb2xscyk7XG4gICAgY29uc29sZS5sb2coJ1RvdGFsOiAnLCB0b3RhbCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdwYWdlJz5cbiAgICAgIDxoMSBjbGFzc05hbWU9J2hlYWRlcic+RGljZSBSb2xsZXI8L2gxPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGxhYmVsPk51bWJlciBvZiBEaWNlXG4gICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgdmFsdWU9e251bURpY2V9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlTnVtRGljZUNoYW5nZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPScnPlNlbGVjdCBIb3cgTWFueSBEaWNlIHRvIFJvbGw8L29wdGlvbj5cbiAgICAgICAgICAgIHtbLi4uQXJyYXkoMTApXS5tYXAoKF8sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpbmRleCArIDF9IHZhbHVlPXtpbmRleCArIDF9PntpbmRleCArIDF9PC9vcHRpb24+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAge1suLi5BcnJheShudW1EaWNlKV0ubWFwKChfLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiA8RGllIGtleT17aW5kZXggKyAxfSBpbmRleD17aW5kZXggKyAxfSB2YWx1ZT17ZGljZVZhbHVlc1tpbmRleF19IG9uRGljZVNpZGVzQ2hhbmdlPXsodmFsdWUpID0+IGhhbmRsZURpY2VTaWRlc0NoYW5nZShpbmRleCwgdmFsdWUpfSAvPlxuICAgICAgICB9KX1cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVSb2xsfT5TdW0gUmVzdWx0czwvYnV0dG9uPlxuICAgICAgICB7Lyoge3RvdGFsICE9PSBudWxsICYmIChcbiAgICAgICAgICA8aDI+VG90YWwgU3VtOiB7dG90YWx9PC9oMj5cbiAgICAgICAgKX0gKi99XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJEaWUiLCJEaWNlIiwibnVtRGljZSIsInNldE51bURpY2UiLCJkaWNlVmFsdWVzIiwic2V0RGljZVZhbHVlcyIsIkFycmF5IiwiZmlsbCIsInRvdGFsIiwic2V0VG90YWwiLCJoYW5kbGVOdW1EaWNlQ2hhbmdlIiwiZSIsIm5ld051bURpY2UiLCJwYXJzZUludCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlRGljZVNpZGVzQ2hhbmdlIiwiaW5kZXgiLCJuZXdEaWNlVmFsdWVzIiwiaGFuZGxlUm9sbCIsImNvbnNvbGUiLCJsb2ciLCJyb2xscyIsIm1hcCIsInNpZGVzIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiY2FsY3VsYXRlZFRvdGFsIiwicmVkdWNlIiwic3VtIiwicm9sbCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibGFiZWwiLCJzZWxlY3QiLCJvbkNoYW5nZSIsIm9wdGlvbiIsIl8iLCJvbkRpY2VTaWRlc0NoYW5nZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/dice.jsx\n"));

/***/ })

});