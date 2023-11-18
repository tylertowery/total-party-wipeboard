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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dice; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_die__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/die */ \"./components/die.jsx\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Dice() {\n    _s();\n    const [numDice, setNumDice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [diceValues, setDiceValues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array(numDice).fill(\"\"));\n    const [individualRolls, setIndividulaRolls] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [total, setTotal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleNumDiceChange = (e)=>{\n        const newNumDice = parseInt(e.target.value, 10);\n        setNumDice(newNumDice);\n        setDiceValues((prevValues)=>Array(newNumDice).fill(\"\").map((_, index)=>prevValues[index] || \"\"));\n        setTotal(null);\n    };\n    const handleDiceSidesChange = (index, value)=>{\n        const newDiceValues = [\n            ...diceValues\n        ];\n        newDiceValues[index] = value;\n        setDiceValues(newDiceValues);\n    };\n    const handleRoll = ()=>{\n        console.log(\"rolling\");\n        if (!diceValues.includes(\"\")) {\n            const rolls = [];\n            let index = 0;\n            const intervalId = setInterval(()=>{\n                const roll = Math.floor(Math.random() * diceValues[index]) + 1;\n                rolls.push(roll);\n                setTotal(rolls.reduce((sum, roll)=>sum + roll, 0));\n                setIndividulaRolls([\n                    ...rolls\n                ]);\n                index += 1;\n                if (index >= diceValues.length) {\n                    clearInterval(intervalId);\n                }\n            }, 500);\n        // const rolls = diceValues.map((sides) => Math.floor(Math.random() * sides) + 1);\n        // const calculatedTotal = rolls.reduce((sum, roll) => sum + roll, 0);\n        // setTotal(calculatedTotal);\n        // console.log('Individual Rolls: ', rolls);\n        // console.log(diceValues);\n        } else {\n            alert(\"Select a value for each die\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"page\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"header\",\n                children: \"Dice Roller\"\n            }, void 0, false, {\n                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"dice-roller\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"dice-number\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: [\n                                \"Number of Dice\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                    value: numDice,\n                                    onChange: handleNumDiceChange,\n                                    required: true,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"\",\n                                            default: true,\n                                            children: \"Select How Many Dice to Roll\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                            lineNumber: 62,\n                                            columnNumber: 15\n                                        }, this),\n                                        [\n                                            ...Array(10)\n                                        ].map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: index + 1,\n                                                children: index + 1\n                                            }, index + 1, false, {\n                                                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                                lineNumber: 64,\n                                                columnNumber: 17\n                                            }, this))\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    diceValues.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"dice-values\",\n                        children: [\n                            [\n                                ...Array(numDice)\n                            ].map((_, index)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_die__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    index: index + 1,\n                                    value: diceValues[index],\n                                    onDiceSidesChange: (value)=>handleDiceSidesChange(index, value)\n                                }, index + 1, false, {\n                                    fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 22\n                                }, this);\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"dice-button\",\n                                onClick: handleRoll,\n                                children: \"Roll the Dice\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                        lineNumber: 71,\n                        columnNumber: 11\n                    }, this) : null,\n                    total !== null && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            individualRolls.map((roll, index)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: roll\n                                }, index, false, {\n                                    fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 22\n                                }, this);\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"dice-sum\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"Total:\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: total\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                lineNumber: 84,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                        lineNumber: 80,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_s(Dice, \"BO/YRSrJ1NRubwfilLHl/Oo7y9s=\");\n_c = Dice;\nvar _c;\n$RefreshReg$(_c, \"Dice\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxNQUFNVjtnQ0FDMUIscUJBQU8sOERBQUNnQzs4Q0FBZ0J0QjttQ0FBUlY7Ozs7OzRCQUNsQjswQ0FDQSw4REFBQ29CO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ1k7a0RBQUc7Ozs7OztrREFDSiw4REFBQ0Q7a0RBQUkzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUW5CO0dBMUZ3QlQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGljZS5qc3g/NWMzOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEaWUgZnJvbSAnLi4vY29tcG9uZW50cy9kaWUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEaWNlKCkge1xuICBjb25zdCBbbnVtRGljZSwgc2V0TnVtRGljZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2RpY2VWYWx1ZXMsIHNldERpY2VWYWx1ZXNdID0gdXNlU3RhdGUoQXJyYXkobnVtRGljZSkuZmlsbCgnJykpO1xuICBjb25zdCBbaW5kaXZpZHVhbFJvbGxzLCBzZXRJbmRpdmlkdWxhUm9sbHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdG90YWwsIHNldFRvdGFsXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZU51bURpY2VDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IG5ld051bURpY2UgPSBwYXJzZUludChlLnRhcmdldC52YWx1ZSwgMTApO1xuICAgIHNldE51bURpY2UobmV3TnVtRGljZSk7XG4gICAgc2V0RGljZVZhbHVlcyhwcmV2VmFsdWVzID0+IEFycmF5KG5ld051bURpY2UpLmZpbGwoJycpLm1hcCgoXywgaW5kZXgpID0+IHByZXZWYWx1ZXNbaW5kZXhdIHx8ICcnKSk7XG4gICAgc2V0VG90YWwobnVsbCk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVEaWNlU2lkZXNDaGFuZ2UgPSAoaW5kZXgsIHZhbHVlKSA9PiB7XG4gICAgY29uc3QgbmV3RGljZVZhbHVlcyA9IFsuLi5kaWNlVmFsdWVzXTtcbiAgICBuZXdEaWNlVmFsdWVzW2luZGV4XSA9IHZhbHVlO1xuICAgIHNldERpY2VWYWx1ZXMobmV3RGljZVZhbHVlcyk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVSb2xsID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdyb2xsaW5nJyk7XG4gICAgaWYgKCFkaWNlVmFsdWVzLmluY2x1ZGVzKCcnKSkge1xuICAgICAgY29uc3Qgcm9sbHMgPSBbXTtcbiAgICAgIGxldCBpbmRleCA9IDA7XG5cbiAgICAgIGNvbnN0IGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJvbGwgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBkaWNlVmFsdWVzW2luZGV4XSkgKyAxO1xuICAgICAgICByb2xscy5wdXNoKHJvbGwpO1xuICAgICAgICBzZXRUb3RhbChyb2xscy5yZWR1Y2UoKHN1bSwgcm9sbCkgPT4gc3VtICsgcm9sbCwgMCkpO1xuICAgICAgICBzZXRJbmRpdmlkdWxhUm9sbHMoWy4uLnJvbGxzXSk7XG5cbiAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgICAgaWYgKGluZGV4ID49IGRpY2VWYWx1ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcbiAgICAgICAgfVxuICAgICAgfSwgNTAwKTtcblxuICAgICAgLy8gY29uc3Qgcm9sbHMgPSBkaWNlVmFsdWVzLm1hcCgoc2lkZXMpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNpZGVzKSArIDEpO1xuICAgICAgLy8gY29uc3QgY2FsY3VsYXRlZFRvdGFsID0gcm9sbHMucmVkdWNlKChzdW0sIHJvbGwpID0+IHN1bSArIHJvbGwsIDApO1xuICAgICAgLy8gc2V0VG90YWwoY2FsY3VsYXRlZFRvdGFsKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdJbmRpdmlkdWFsIFJvbGxzOiAnLCByb2xscyk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhkaWNlVmFsdWVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWxlcnQoJ1NlbGVjdCBhIHZhbHVlIGZvciBlYWNoIGRpZScpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3BhZ2UnPlxuICAgICAgPGgxIGNsYXNzTmFtZT0naGVhZGVyJz5EaWNlIFJvbGxlcjwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZGljZS1yb2xsZXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGljZS1udW1iZXInPlxuICAgICAgICAgIDxsYWJlbD5OdW1iZXIgb2YgRGljZVxuICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICB2YWx1ZT17bnVtRGljZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU51bURpY2VDaGFuZ2V9XG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9JycgZGVmYXVsdD5TZWxlY3QgSG93IE1hbnkgRGljZSB0byBSb2xsPC9vcHRpb24+XG4gICAgICAgICAgICAgIHtbLi4uQXJyYXkoMTApXS5tYXAoKF8sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2luZGV4ICsgMX0gdmFsdWU9e2luZGV4ICsgMX0+e2luZGV4ICsgMX08L29wdGlvbj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2RpY2VWYWx1ZXMubGVuZ3RoID4gMFxuICAgICAgICAgID9cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGljZS12YWx1ZXMnPlxuICAgICAgICAgICAge1suLi5BcnJheShudW1EaWNlKV0ubWFwKChfLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gPERpZSBrZXk9e2luZGV4ICsgMX0gaW5kZXg9e2luZGV4ICsgMX0gdmFsdWU9e2RpY2VWYWx1ZXNbaW5kZXhdfSBvbkRpY2VTaWRlc0NoYW5nZT17KHZhbHVlKSA9PiBoYW5kbGVEaWNlU2lkZXNDaGFuZ2UoaW5kZXgsIHZhbHVlKX0gLz5cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2RpY2UtYnV0dG9uJyBvbkNsaWNrPXtoYW5kbGVSb2xsfT5Sb2xsIHRoZSBEaWNlPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgOlxuICAgICAgICAgIG51bGx9XG4gICAgICAgIHt0b3RhbCAhPT0gbnVsbCAmJiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtpbmRpdmlkdWFsUm9sbHMubWFwKChyb2xsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gPGgyIGtleT17aW5kZXh9Pntyb2xsfTwvaDI+XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaWNlLXN1bSc+XG4gICAgICAgICAgICAgIDxoMz5Ub3RhbDo8L2gzPlxuICAgICAgICAgICAgICA8aDI+e3RvdGFsfTwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG4gICk7XG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiRGllIiwiRGljZSIsIm51bURpY2UiLCJzZXROdW1EaWNlIiwiZGljZVZhbHVlcyIsInNldERpY2VWYWx1ZXMiLCJBcnJheSIsImZpbGwiLCJpbmRpdmlkdWFsUm9sbHMiLCJzZXRJbmRpdmlkdWxhUm9sbHMiLCJ0b3RhbCIsInNldFRvdGFsIiwiaGFuZGxlTnVtRGljZUNoYW5nZSIsImUiLCJuZXdOdW1EaWNlIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInByZXZWYWx1ZXMiLCJtYXAiLCJfIiwiaW5kZXgiLCJoYW5kbGVEaWNlU2lkZXNDaGFuZ2UiLCJuZXdEaWNlVmFsdWVzIiwiaGFuZGxlUm9sbCIsImNvbnNvbGUiLCJsb2ciLCJpbmNsdWRlcyIsInJvbGxzIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwicm9sbCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInB1c2giLCJyZWR1Y2UiLCJzdW0iLCJsZW5ndGgiLCJjbGVhckludGVydmFsIiwiYWxlcnQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImxhYmVsIiwic2VsZWN0Iiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsIm9wdGlvbiIsImRlZmF1bHQiLCJvbkRpY2VTaWRlc0NoYW5nZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJoMiIsImgzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/dice.jsx\n"));

/***/ })

});