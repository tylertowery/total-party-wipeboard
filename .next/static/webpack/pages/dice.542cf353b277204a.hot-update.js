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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dice; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_die__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/die */ \"./components/die.jsx\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Dice() {\n    _s();\n    const [numDice, setNumDice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [diceValues, setDiceValues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array(numDice).fill(\"\"));\n    const [individualRolls, setIndividulaRolls] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [total, setTotal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleNumDiceChange = (e)=>{\n        const newNumDice = parseInt(e.target.value, 10);\n        setNumDice(newNumDice);\n        setDiceValues((prevValues)=>Array(newNumDice).fill(\"\").map((_, index)=>prevValues[index] || \"\"));\n        setTotal(null);\n    };\n    const handleDiceSidesChange = (index, value)=>{\n        const newDiceValues = [\n            ...diceValues\n        ];\n        newDiceValues[index] = value;\n        setDiceValues(newDiceValues);\n    };\n    const handleRoll = ()=>{\n        console.log(\"rolling\");\n        if (!diceValues.includes(\"\")) {\n            const rolls = [];\n            let index = 0;\n            const intervalId = setInterval(()=>{\n                const roll = Math.floor(Math.random() * diceValues[index]) + 1;\n                rolls.push(roll);\n                setTotal(rolls.reduce((sum, roll)=>sum + roll, 0));\n                setIndividulaRolls([\n                    ...rolls\n                ]);\n                index += 1;\n                if (index >= diceValues.length) {\n                    clearInterval(intervalId);\n                }\n            }, 2000);\n        // const rolls = diceValues.map((sides) => Math.floor(Math.random() * sides) + 1);\n        // const calculatedTotal = rolls.reduce((sum, roll) => sum + roll, 0);\n        // setTotal(calculatedTotal);\n        // console.log('Individual Rolls: ', rolls);\n        // console.log(diceValues);\n        } else {\n            alert(\"Select a value for each die\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"page\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"header\",\n                children: \"Dice Roller\"\n            }, void 0, false, {\n                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"dice-roller\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"dice-number\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: [\n                                \"Number of Dice\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                    value: numDice,\n                                    onChange: handleNumDiceChange,\n                                    required: true,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"\",\n                                            default: true,\n                                            children: \"Select How Many Dice to Roll\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                            lineNumber: 62,\n                                            columnNumber: 15\n                                        }, this),\n                                        [\n                                            ...Array(10)\n                                        ].map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: index + 1,\n                                                children: index + 1\n                                            }, index + 1, false, {\n                                                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                                lineNumber: 64,\n                                                columnNumber: 17\n                                            }, this))\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    diceValues.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"dice-values\",\n                        children: [\n                            [\n                                ...Array(numDice)\n                            ].map((_, index)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_die__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    index: index + 1,\n                                    value: diceValues[index],\n                                    onDiceSidesChange: (value)=>handleDiceSidesChange(index, value)\n                                }, index + 1, false, {\n                                    fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 22\n                                }, this);\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"dice-button\",\n                                onClick: handleRoll,\n                                children: \"Roll the Dice\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                        lineNumber: 71,\n                        columnNumber: 11\n                    }, this) : null,\n                    total !== null && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"dice-sum\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"Each Roll:\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"rolls\",\n                                        children: individualRolls.map((roll, index)=>{\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                className: \"roll\",\n                                                children: roll\n                                            }, index, false, {\n                                                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                                lineNumber: 85,\n                                                columnNumber: 26\n                                            }, this);\n                                        })\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                lineNumber: 81,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"Total:\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                        lineNumber: 90,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"heading\",\n                                        children: total\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                lineNumber: 89,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                        lineNumber: 80,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_s(Dice, \"BO/YRSrJ1NRubwfilLHl/Oo7y9s=\");\n_c = Dice;\nvar _c;\n$RefreshReg$(_c, \"Dice\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O2tEQUNDLDhEQUFDWTtrREFBRzs7Ozs7O2tEQUNKLDhEQUFDWjt3Q0FBSUMsV0FBVTtrREFDWmxDLGdCQUFnQlcsSUFBSSxDQUFDWSxNQUFNVjs0Q0FDMUIscUJBQU8sOERBQUNpQztnREFBR1osV0FBVTswREFBb0JYOytDQUFSVjs7Ozs7d0NBQ25DOzs7Ozs7Ozs7Ozs7MENBR0osOERBQUNvQjs7a0RBQ0MsOERBQUNZO2tEQUFHOzs7Ozs7a0RBQ0osOERBQUNDO3dDQUFHWixXQUFVO2tEQUFXaEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF2QztHQS9Gd0JUO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2RpY2UuanN4PzVjMzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRGllIGZyb20gJy4uL2NvbXBvbmVudHMvZGllJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGljZSgpIHtcbiAgY29uc3QgW251bURpY2UsIHNldE51bURpY2VdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtkaWNlVmFsdWVzLCBzZXREaWNlVmFsdWVzXSA9IHVzZVN0YXRlKEFycmF5KG51bURpY2UpLmZpbGwoJycpKTtcbiAgY29uc3QgW2luZGl2aWR1YWxSb2xscywgc2V0SW5kaXZpZHVsYVJvbGxzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3RvdGFsLCBzZXRUb3RhbF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBoYW5kbGVOdW1EaWNlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCBuZXdOdW1EaWNlID0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUsIDEwKTtcbiAgICBzZXROdW1EaWNlKG5ld051bURpY2UpO1xuICAgIHNldERpY2VWYWx1ZXMocHJldlZhbHVlcyA9PiBBcnJheShuZXdOdW1EaWNlKS5maWxsKCcnKS5tYXAoKF8sIGluZGV4KSA9PiBwcmV2VmFsdWVzW2luZGV4XSB8fCAnJykpO1xuICAgIHNldFRvdGFsKG51bGwpO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlRGljZVNpZGVzQ2hhbmdlID0gKGluZGV4LCB2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IG5ld0RpY2VWYWx1ZXMgPSBbLi4uZGljZVZhbHVlc107XG4gICAgbmV3RGljZVZhbHVlc1tpbmRleF0gPSB2YWx1ZTtcbiAgICBzZXREaWNlVmFsdWVzKG5ld0RpY2VWYWx1ZXMpO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlUm9sbCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygncm9sbGluZycpO1xuICAgIGlmICghZGljZVZhbHVlcy5pbmNsdWRlcygnJykpIHtcbiAgICAgIGNvbnN0IHJvbGxzID0gW107XG4gICAgICBsZXQgaW5kZXggPSAwO1xuXG4gICAgICBjb25zdCBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBjb25zdCByb2xsID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZGljZVZhbHVlc1tpbmRleF0pICsgMTtcbiAgICAgICAgcm9sbHMucHVzaChyb2xsKTtcbiAgICAgICAgc2V0VG90YWwocm9sbHMucmVkdWNlKChzdW0sIHJvbGwpID0+IHN1bSArIHJvbGwsIDApKTtcbiAgICAgICAgc2V0SW5kaXZpZHVsYVJvbGxzKFsuLi5yb2xsc10pO1xuXG4gICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgIGlmIChpbmRleCA+PSBkaWNlVmFsdWVzLmxlbmd0aCkge1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG4gICAgICAgIH1cbiAgICAgIH0sIDIwMDApO1xuXG4gICAgICAvLyBjb25zdCByb2xscyA9IGRpY2VWYWx1ZXMubWFwKChzaWRlcykgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc2lkZXMpICsgMSk7XG4gICAgICAvLyBjb25zdCBjYWxjdWxhdGVkVG90YWwgPSByb2xscy5yZWR1Y2UoKHN1bSwgcm9sbCkgPT4gc3VtICsgcm9sbCwgMCk7XG4gICAgICAvLyBzZXRUb3RhbChjYWxjdWxhdGVkVG90YWwpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ0luZGl2aWR1YWwgUm9sbHM6ICcsIHJvbGxzKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGRpY2VWYWx1ZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydCgnU2VsZWN0IGEgdmFsdWUgZm9yIGVhY2ggZGllJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0ncGFnZSc+XG4gICAgICA8aDEgY2xhc3NOYW1lPSdoZWFkZXInPkRpY2UgUm9sbGVyPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaWNlLXJvbGxlcic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaWNlLW51bWJlcic+XG4gICAgICAgICAgPGxhYmVsPk51bWJlciBvZiBEaWNlXG4gICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgIHZhbHVlPXtudW1EaWNlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlTnVtRGljZUNoYW5nZX1cbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nJyBkZWZhdWx0PlNlbGVjdCBIb3cgTWFueSBEaWNlIHRvIFJvbGw8L29wdGlvbj5cbiAgICAgICAgICAgICAge1suLi5BcnJheSgxMCldLm1hcCgoXywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aW5kZXggKyAxfSB2YWx1ZT17aW5kZXggKyAxfT57aW5kZXggKyAxfTwvb3B0aW9uPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7ZGljZVZhbHVlcy5sZW5ndGggPiAwXG4gICAgICAgICAgP1xuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaWNlLXZhbHVlcyc+XG4gICAgICAgICAgICB7Wy4uLkFycmF5KG51bURpY2UpXS5tYXAoKF8sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiA8RGllIGtleT17aW5kZXggKyAxfSBpbmRleD17aW5kZXggKyAxfSB2YWx1ZT17ZGljZVZhbHVlc1tpbmRleF19IG9uRGljZVNpZGVzQ2hhbmdlPXsodmFsdWUpID0+IGhhbmRsZURpY2VTaWRlc0NoYW5nZShpbmRleCwgdmFsdWUpfSAvPlxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nZGljZS1idXR0b24nIG9uQ2xpY2s9e2hhbmRsZVJvbGx9PlJvbGwgdGhlIERpY2U8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA6XG4gICAgICAgICAgbnVsbH1cbiAgICAgICAge3RvdGFsICE9PSBudWxsICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGljZS1zdW0nPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGgzPkVhY2ggUm9sbDo8L2gzPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm9sbHMnPlxuICAgICAgICAgICAgICAgIHtpbmRpdmlkdWFsUm9sbHMubWFwKChyb2xsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIDxoMiBjbGFzc05hbWU9J3JvbGwnIGtleT17aW5kZXh9Pntyb2xsfTwvaDI+XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDM+VG90YWw6PC9oMz5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0naGVhZGluZyc+e3RvdGFsfTwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG4gICk7XG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiRGllIiwiRGljZSIsIm51bURpY2UiLCJzZXROdW1EaWNlIiwiZGljZVZhbHVlcyIsInNldERpY2VWYWx1ZXMiLCJBcnJheSIsImZpbGwiLCJpbmRpdmlkdWFsUm9sbHMiLCJzZXRJbmRpdmlkdWxhUm9sbHMiLCJ0b3RhbCIsInNldFRvdGFsIiwiaGFuZGxlTnVtRGljZUNoYW5nZSIsImUiLCJuZXdOdW1EaWNlIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInByZXZWYWx1ZXMiLCJtYXAiLCJfIiwiaW5kZXgiLCJoYW5kbGVEaWNlU2lkZXNDaGFuZ2UiLCJuZXdEaWNlVmFsdWVzIiwiaGFuZGxlUm9sbCIsImNvbnNvbGUiLCJsb2ciLCJpbmNsdWRlcyIsInJvbGxzIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwicm9sbCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInB1c2giLCJyZWR1Y2UiLCJzdW0iLCJsZW5ndGgiLCJjbGVhckludGVydmFsIiwiYWxlcnQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImxhYmVsIiwic2VsZWN0Iiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsIm9wdGlvbiIsImRlZmF1bHQiLCJvbkRpY2VTaWRlc0NoYW5nZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJoMyIsImgyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/dice.jsx\n"));

/***/ })

});