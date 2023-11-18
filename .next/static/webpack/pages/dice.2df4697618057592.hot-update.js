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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dice; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_die__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/die */ \"./components/die.jsx\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Dice() {\n    _s();\n    const [numDice, setNumDice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [diceValues, setDiceValues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array(numDice).fill(\"\"));\n    const [total, setTotal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleNumDiceChange = (e)=>{\n        const newNumDice = parseInt(e.target.value, 10);\n        setNumDice(newNumDice);\n        setDiceValues((prevValues)=>Array(newNumDice).fill(\"\").map((_, index)=>prevValues[index] || \"\"));\n        setTotal(null);\n    };\n    const handleDiceSidesChange = (index, value)=>{\n        const newDiceValues = [\n            ...diceValues\n        ];\n        newDiceValues[index] = value;\n        setDiceValues(newDiceValues);\n    };\n    const handleRoll = ()=>{\n        console.log(\"rolling\");\n        if (!diceValues.includes(\"\")) {\n            const rolls = diceValues.map((sides)=>Math.floor(Math.random() * sides) + 1);\n            const calculatedTotal = rolls.reduce((sum, roll)=>sum + roll, 0);\n            setTotal(calculatedTotal);\n            console.log(\"Individual Rolls: \", rolls);\n            console.log(diceValues);\n        } else {\n            alert(\"Select a value for each die\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"page\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"header\",\n                children: \"Dice Roller\"\n            }, void 0, false, {\n                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"dice-roller\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"dice-number\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: [\n                                \"Number of Dice\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                    value: numDice,\n                                    onChange: handleNumDiceChange,\n                                    required: true,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"\",\n                                            default: true,\n                                            children: \"Select How Many Dice to Roll\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                            lineNumber: 46,\n                                            columnNumber: 15\n                                        }, this),\n                                        [\n                                            ...Array(10)\n                                        ].map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: index + 1,\n                                                children: index + 1\n                                            }, index + 1, false, {\n                                                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                                lineNumber: 48,\n                                                columnNumber: 17\n                                            }, this))\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    diceValues.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            [\n                                ...Array(numDice)\n                            ].map((_, index)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_die__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    index: index + 1,\n                                    value: diceValues[index],\n                                    onDiceSidesChange: (value)=>handleDiceSidesChange(index, value)\n                                }, index + 1, false, {\n                                    fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 22\n                                }, this);\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleRoll,\n                                children: \"Sum Results\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 11\n                    }, this) : null,\n                    total !== null && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: [\n                            \"Total Sum: \",\n                            total\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n_s(Dice, \"lrECt/O/Y9/HQScvobt/l43wR2Y=\");\n_c = Dice;\nvar _c;\n$RefreshReg$(_c, \"Dice\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kaWNlLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFpQztBQUNHO0FBRXJCLFNBQVNFOztJQUN0QixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0osK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDSyxZQUFZQyxjQUFjLEdBQUdOLCtDQUFRQSxDQUFDTyxNQUFNSixTQUFTSyxLQUFLO0lBQ2pFLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHViwrQ0FBUUEsQ0FBQztJQUVuQyxNQUFNVyxzQkFBc0IsQ0FBQ0M7UUFDM0IsTUFBTUMsYUFBYUMsU0FBU0YsRUFBRUcsT0FBT0MsT0FBTztRQUM1Q1osV0FBV1M7UUFDWFAsY0FBY1csQ0FBQUEsYUFBY1YsTUFBTU0sWUFBWUwsS0FBSyxJQUFJVSxJQUFJLENBQUNDLEdBQUdDLFFBQVVILFVBQVUsQ0FBQ0csTUFBTSxJQUFJO1FBQzlGVixTQUFTO0lBQ1g7SUFFQSxNQUFNVyx3QkFBd0IsQ0FBQ0QsT0FBT0o7UUFDcEMsTUFBTU0sZ0JBQWdCO2VBQUlqQjtTQUFXO1FBQ3JDaUIsYUFBYSxDQUFDRixNQUFNLEdBQUdKO1FBQ3ZCVixjQUFjZ0I7SUFDaEI7SUFFQSxNQUFNQyxhQUFhO1FBQ2pCQyxRQUFRQyxJQUFJO1FBQ1osSUFBSSxDQUFDcEIsV0FBV3FCLFNBQVMsS0FBSztZQUM1QixNQUFNQyxRQUFRdEIsV0FBV2EsSUFBSSxDQUFDVSxRQUFVQyxLQUFLQyxNQUFNRCxLQUFLRSxXQUFXSCxTQUFTO1lBQzVFLE1BQU1JLGtCQUFrQkwsTUFBTU0sT0FBTyxDQUFDQyxLQUFLQyxPQUFTRCxNQUFNQyxNQUFNO1lBQ2hFekIsU0FBU3NCO1lBQ1RSLFFBQVFDLElBQUksc0JBQXNCRTtZQUNsQ0gsUUFBUUMsSUFBSXBCO1FBQ2QsT0FBTztZQUNMK0IsTUFBTTtRQUNSO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFTOzs7Ozs7MEJBQ3ZCLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDRTs7Z0NBQU07OENBQ0wsOERBQUNDO29DQUNDekIsT0FBT2I7b0NBQ1B1QyxVQUFVL0I7b0NBQ1ZnQyxRQUFROztzREFFUiw4REFBQ0M7NENBQU81QixPQUFNOzRDQUFHNkIsT0FBTztzREFBQzs7Ozs7O3dDQUN4QjsrQ0FBSXRDLE1BQU07eUNBQUksQ0FBQ1csSUFBSSxDQUFDQyxHQUFHQyxzQkFDdEIsOERBQUN3QjtnREFBdUI1QixPQUFPSSxRQUFROzBEQUFJQSxRQUFROytDQUF0Q0EsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFLNUJmLFdBQVd5QyxTQUFTLGtCQUVuQiw4REFBQ1Q7OzRCQUNFO21DQUFJOUIsTUFBTUo7NkJBQVMsQ0FBQ2UsSUFBSSxDQUFDQyxHQUFHQztnQ0FDM0IscUJBQU8sOERBQUNuQix1REFBR0E7b0NBQWlCbUIsT0FBT0EsUUFBUTtvQ0FBR0osT0FBT1gsVUFBVSxDQUFDZSxNQUFNO29DQUFFMkIsbUJBQW1CLENBQUMvQixRQUFVSyxzQkFBc0JELE9BQU9KO21DQUFsSEksUUFBUTs7Ozs7NEJBQzNCOzBDQUNBLDhEQUFDNEI7Z0NBQU9DLFNBQVMxQjswQ0FBWTs7Ozs7Ozs7Ozs7K0JBRy9CO29CQUNEZCxVQUFVLHNCQUNULDhEQUFDeUM7OzRCQUFHOzRCQUFZekM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNMUI7R0FsRXdCUDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9kaWNlLmpzeD81YzM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IERpZSBmcm9tICcuLi9jb21wb25lbnRzL2RpZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERpY2UoKSB7XG4gIGNvbnN0IFtudW1EaWNlLCBzZXROdW1EaWNlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbZGljZVZhbHVlcywgc2V0RGljZVZhbHVlc10gPSB1c2VTdGF0ZShBcnJheShudW1EaWNlKS5maWxsKCcnKSk7XG4gIGNvbnN0IFt0b3RhbCwgc2V0VG90YWxdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgaGFuZGxlTnVtRGljZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3QgbmV3TnVtRGljZSA9IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlLCAxMCk7XG4gICAgc2V0TnVtRGljZShuZXdOdW1EaWNlKTtcbiAgICBzZXREaWNlVmFsdWVzKHByZXZWYWx1ZXMgPT4gQXJyYXkobmV3TnVtRGljZSkuZmlsbCgnJykubWFwKChfLCBpbmRleCkgPT4gcHJldlZhbHVlc1tpbmRleF0gfHwgJycpKTtcbiAgICBzZXRUb3RhbChudWxsKTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZURpY2VTaWRlc0NoYW5nZSA9IChpbmRleCwgdmFsdWUpID0+IHtcbiAgICBjb25zdCBuZXdEaWNlVmFsdWVzID0gWy4uLmRpY2VWYWx1ZXNdO1xuICAgIG5ld0RpY2VWYWx1ZXNbaW5kZXhdID0gdmFsdWU7XG4gICAgc2V0RGljZVZhbHVlcyhuZXdEaWNlVmFsdWVzKTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVJvbGwgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3JvbGxpbmcnKTtcbiAgICBpZiAoIWRpY2VWYWx1ZXMuaW5jbHVkZXMoJycpKSB7XG4gICAgICBjb25zdCByb2xscyA9IGRpY2VWYWx1ZXMubWFwKChzaWRlcykgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc2lkZXMpICsgMSk7XG4gICAgICBjb25zdCBjYWxjdWxhdGVkVG90YWwgPSByb2xscy5yZWR1Y2UoKHN1bSwgcm9sbCkgPT4gc3VtICsgcm9sbCwgMCk7XG4gICAgICBzZXRUb3RhbChjYWxjdWxhdGVkVG90YWwpO1xuICAgICAgY29uc29sZS5sb2coJ0luZGl2aWR1YWwgUm9sbHM6ICcsIHJvbGxzKTtcbiAgICAgIGNvbnNvbGUubG9nKGRpY2VWYWx1ZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydCgnU2VsZWN0IGEgdmFsdWUgZm9yIGVhY2ggZGllJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0ncGFnZSc+XG4gICAgICA8aDEgY2xhc3NOYW1lPSdoZWFkZXInPkRpY2UgUm9sbGVyPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaWNlLXJvbGxlcic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaWNlLW51bWJlcic+XG4gICAgICAgICAgPGxhYmVsPk51bWJlciBvZiBEaWNlXG4gICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgIHZhbHVlPXtudW1EaWNlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlTnVtRGljZUNoYW5nZX1cbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nJyBkZWZhdWx0PlNlbGVjdCBIb3cgTWFueSBEaWNlIHRvIFJvbGw8L29wdGlvbj5cbiAgICAgICAgICAgICAge1suLi5BcnJheSgxMCldLm1hcCgoXywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aW5kZXggKyAxfSB2YWx1ZT17aW5kZXggKyAxfT57aW5kZXggKyAxfTwvb3B0aW9uPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7ZGljZVZhbHVlcy5sZW5ndGggPiAwXG4gICAgICAgICAgP1xuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7Wy4uLkFycmF5KG51bURpY2UpXS5tYXAoKF8sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiA8RGllIGtleT17aW5kZXggKyAxfSBpbmRleD17aW5kZXggKyAxfSB2YWx1ZT17ZGljZVZhbHVlc1tpbmRleF19IG9uRGljZVNpZGVzQ2hhbmdlPXsodmFsdWUpID0+IGhhbmRsZURpY2VTaWRlc0NoYW5nZShpbmRleCwgdmFsdWUpfSAvPlxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVJvbGx9PlN1bSBSZXN1bHRzPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgOlxuICAgICAgICAgIG51bGx9XG4gICAgICAgIHt0b3RhbCAhPT0gbnVsbCAmJiAoXG4gICAgICAgICAgPGgyPlRvdGFsIFN1bToge3RvdGFsfTwvaDI+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICApO1xufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkRpZSIsIkRpY2UiLCJudW1EaWNlIiwic2V0TnVtRGljZSIsImRpY2VWYWx1ZXMiLCJzZXREaWNlVmFsdWVzIiwiQXJyYXkiLCJmaWxsIiwidG90YWwiLCJzZXRUb3RhbCIsImhhbmRsZU51bURpY2VDaGFuZ2UiLCJlIiwibmV3TnVtRGljZSIsInBhcnNlSW50IiwidGFyZ2V0IiwidmFsdWUiLCJwcmV2VmFsdWVzIiwibWFwIiwiXyIsImluZGV4IiwiaGFuZGxlRGljZVNpZGVzQ2hhbmdlIiwibmV3RGljZVZhbHVlcyIsImhhbmRsZVJvbGwiLCJjb25zb2xlIiwibG9nIiwiaW5jbHVkZXMiLCJyb2xscyIsInNpZGVzIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiY2FsY3VsYXRlZFRvdGFsIiwicmVkdWNlIiwic3VtIiwicm9sbCIsImFsZXJ0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJsYWJlbCIsInNlbGVjdCIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJvcHRpb24iLCJkZWZhdWx0IiwibGVuZ3RoIiwib25EaWNlU2lkZXNDaGFuZ2UiLCJidXR0b24iLCJvbkNsaWNrIiwiaDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/dice.jsx\n"));

/***/ })

});