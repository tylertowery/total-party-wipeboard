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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dice; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_die__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/die */ \"./components/die.jsx\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Dice() {\n    _s();\n    const [numDice, setNumDice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [diceValues, setDiceValues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array(numDice).fill(\"\"));\n    const [individualRolls, setIndividulaRolls] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [total, setTotal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [sameSides, setSameSides] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (sameSides && numDice > 0) {\n            const copy = diceValues;\n            setDiceValues(Array(numDice).fill(copy[0] || \"\"));\n        }\n    }, [\n        sameSides,\n        numDice,\n        diceValues\n    ]);\n    const handleNumDiceChange = (e)=>{\n        const newNumDice = parseInt(e.target.value, 10);\n        setNumDice(newNumDice);\n        setDiceValues((prevValues)=>Array(newNumDice).fill(\"\").map((_, index)=>prevValues[index] || \"\"));\n        setTotal(null);\n    };\n    const handleDiceSidesChange = (index, value)=>{\n        const newDiceValues = [\n            ...diceValues\n        ];\n        newDiceValues[index] = value;\n        setDiceValues(newDiceValues);\n    };\n    const handleSameSidesChange = (e)=>{\n        setSameSides(e.target.checked);\n    };\n    const handleRoll = ()=>{\n        console.log(\"rolling\");\n        setShow(false);\n        setTimeout(()=>{\n            setShow(true);\n        }, 1);\n        if (!diceValues.includes(\"\")) {\n            const rolls = diceValues.map((values)=>Math.floor(Math.random() * values) + 1);\n            const calculatedTotal = rolls.reduce((sum, roll)=>sum + roll, 0);\n            setIndividulaRolls(rolls);\n            setTotal(calculatedTotal);\n        } else {\n            alert(\"Select a value for each die\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"page\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"header\",\n                children: \"Dice Roller\"\n            }, void 0, false, {\n                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"dice-roller\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"dice-number\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: [\n                                \"Number of Dice\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                    value: numDice,\n                                    onChange: handleNumDiceChange,\n                                    required: true,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"\",\n                                            default: true,\n                                            children: \"Select How Many Dice to Roll\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 15\n                                        }, this),\n                                        [\n                                            ...Array(10)\n                                        ].map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: index + 1,\n                                                children: index + 1\n                                            }, index + 1, false, {\n                                                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                                lineNumber: 67,\n                                                columnNumber: 17\n                                            }, this))\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    numDice > 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"checkbox\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                name: \"sameSidesCheckBox\",\n                                id: \"sameSidesCheckBox\",\n                                checked: sameSides,\n                                onChange: handleSameSidesChange\n                            }, void 0, false, {\n                                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                forHtml: \"sameSidesCheckbox\",\n                                children: \"All dice have the same number of sides\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                lineNumber: 82,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, this) : null,\n                    diceValues.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"dice-values\",\n                        children: [\n                            [\n                                ...Array(numDice)\n                            ].map((_, index)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_die__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    index: index + 1,\n                                    value: diceValues[index],\n                                    onDiceSidesChange: (value)=>handleDiceSidesChange(index, value)\n                                }, index + 1, false, {\n                                    fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 22\n                                }, this);\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"dice-button\",\n                                onClick: handleRoll,\n                                children: \"Roll the Dice\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                lineNumber: 91,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                        lineNumber: 87,\n                        columnNumber: 11\n                    }, this) : null,\n                    total !== null && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"dice-sum\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"dice-center\",\n                                        children: \"Each Roll:\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                        lineNumber: 98,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"rolls\",\n                                        children: show && individualRolls.map((roll, index)=>{\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                className: \"roll fade-in fade-in-delay-\".concat(index + 1),\n                                                children: roll\n                                            }, index, false, {\n                                                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                                lineNumber: 101,\n                                                columnNumber: 26\n                                            }, this);\n                                        })\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                        lineNumber: 99,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                lineNumber: 97,\n                                columnNumber: 13\n                            }, this),\n                            show && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"fade-in fade-in-delay-\".concat(individualRolls.length + 1),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"dice-center\",\n                                        children: \"Total:\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                        lineNumber: 107,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"dice-center\",\n                                        children: total\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                        lineNumber: 108,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                lineNumber: 106,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                        lineNumber: 96,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n}\n_s(Dice, \"MnWow3HHnFQoTlmR3Vn03OMRZT4=\");\n_c = Dice;\nvar _c;\n$RefreshReg$(_c, \"Dice\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0JBQUlDLFdBQVU7OzRCQUNaO21DQUFJekMsTUFBTUo7NkJBQVMsQ0FBQ3NCLElBQUksQ0FBQ0MsR0FBR0M7Z0NBQzNCLHFCQUFPLDhEQUFDMUIsdURBQUdBO29DQUFpQjBCLE9BQU9BLFFBQVE7b0NBQUdKLE9BQU9sQixVQUFVLENBQUNzQixNQUFNO29DQUFFbUMsbUJBQW1CLENBQUN2QyxRQUFVSyxzQkFBc0JELE9BQU9KO21DQUFsSEksUUFBUTs7Ozs7NEJBQzNCOzBDQUNBLDhEQUFDb0M7Z0NBQU9mLFdBQVU7Z0NBQWNnQixTQUFTaEM7MENBQVk7Ozs7Ozs7Ozs7OytCQUd2RDtvQkFDRHJCLFVBQVUsc0JBQ1QsOERBQUNvQzt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNEOztrREFDQyw4REFBQ2tCO3dDQUFHakIsV0FBVTtrREFBYzs7Ozs7O2tEQUM1Qiw4REFBQ0Q7d0NBQUlDLFdBQVU7a0RBQ1puQyxRQUFRSixnQkFBZ0JnQixJQUFJLENBQUNvQixNQUFNbEI7NENBQ2xDLHFCQUFPLDhEQUFDdUM7Z0RBQUdsQixXQUFXLDhCQUF3QyxPQUFWckIsUUFBUTswREFBa0JrQjsrQ0FBUmxCOzs7Ozt3Q0FDeEU7Ozs7Ozs7Ozs7Ozs0QkFHSGQsc0JBQ0MsOERBQUNrQztnQ0FBSUMsV0FBVyx5QkFBb0QsT0FBM0J2QyxnQkFBZ0JvRCxTQUFTOztrREFDaEUsOERBQUNJO3dDQUFHakIsV0FBVTtrREFBYzs7Ozs7O2tEQUM1Qiw4REFBQ2tCO3dDQUFHbEIsV0FBVTtrREFBZXJDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTN0M7R0FqSHdCVDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9kaWNlLmpzeD81YzM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRGllIGZyb20gJy4uL2NvbXBvbmVudHMvZGllJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGljZSgpIHtcbiAgY29uc3QgW251bURpY2UsIHNldE51bURpY2VdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtkaWNlVmFsdWVzLCBzZXREaWNlVmFsdWVzXSA9IHVzZVN0YXRlKEFycmF5KG51bURpY2UpLmZpbGwoJycpKTtcbiAgY29uc3QgW2luZGl2aWR1YWxSb2xscywgc2V0SW5kaXZpZHVsYVJvbGxzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3RvdGFsLCBzZXRUb3RhbF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2FtZVNpZGVzLCBzZXRTYW1lU2lkZXNdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNhbWVTaWRlcyAmJiBudW1EaWNlID4gMCkge1xuICAgICAgY29uc3QgY29weSA9IGRpY2VWYWx1ZXM7XG4gICAgICBzZXREaWNlVmFsdWVzKEFycmF5KG51bURpY2UpLmZpbGwoY29weVswXSB8fCAnJykpO1xuICAgIH1cbiAgfSwgW3NhbWVTaWRlcywgbnVtRGljZSwgZGljZVZhbHVlc10pO1xuXG4gIGNvbnN0IGhhbmRsZU51bURpY2VDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IG5ld051bURpY2UgPSBwYXJzZUludChlLnRhcmdldC52YWx1ZSwgMTApO1xuICAgIHNldE51bURpY2UobmV3TnVtRGljZSk7XG4gICAgc2V0RGljZVZhbHVlcyhwcmV2VmFsdWVzID0+IEFycmF5KG5ld051bURpY2UpLmZpbGwoJycpLm1hcCgoXywgaW5kZXgpID0+IHByZXZWYWx1ZXNbaW5kZXhdIHx8ICcnKSk7XG4gICAgc2V0VG90YWwobnVsbCk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVEaWNlU2lkZXNDaGFuZ2UgPSAoaW5kZXgsIHZhbHVlKSA9PiB7XG4gICAgY29uc3QgbmV3RGljZVZhbHVlcyA9IFsuLi5kaWNlVmFsdWVzXTtcbiAgICBuZXdEaWNlVmFsdWVzW2luZGV4XSA9IHZhbHVlO1xuICAgIHNldERpY2VWYWx1ZXMobmV3RGljZVZhbHVlcyk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVTYW1lU2lkZXNDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldFNhbWVTaWRlcyhlLnRhcmdldC5jaGVja2VkKTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVJvbGwgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3JvbGxpbmcnKTtcbiAgICBzZXRTaG93KGZhbHNlKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0U2hvdyh0cnVlKTtcbiAgICB9LCAxKTtcblxuICAgIGlmICghZGljZVZhbHVlcy5pbmNsdWRlcygnJykpIHtcbiAgICAgIGNvbnN0IHJvbGxzID0gZGljZVZhbHVlcy5tYXAoKHZhbHVlcykgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdmFsdWVzKSArIDEpO1xuICAgICAgY29uc3QgY2FsY3VsYXRlZFRvdGFsID0gcm9sbHMucmVkdWNlKChzdW0sIHJvbGwpID0+IHN1bSArIHJvbGwsIDApO1xuICAgICAgc2V0SW5kaXZpZHVsYVJvbGxzKHJvbGxzKTtcbiAgICAgIHNldFRvdGFsKGNhbGN1bGF0ZWRUb3RhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0KCdTZWxlY3QgYSB2YWx1ZSBmb3IgZWFjaCBkaWUnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdwYWdlJz5cbiAgICAgIDxoMSBjbGFzc05hbWU9J2hlYWRlcic+RGljZSBSb2xsZXI8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2RpY2Utcm9sbGVyJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpY2UtbnVtYmVyJz5cbiAgICAgICAgICA8bGFiZWw+TnVtYmVyIG9mIERpY2VcbiAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgdmFsdWU9e251bURpY2V9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVOdW1EaWNlQ2hhbmdlfVxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPScnIGRlZmF1bHQ+U2VsZWN0IEhvdyBNYW55IERpY2UgdG8gUm9sbDwvb3B0aW9uPlxuICAgICAgICAgICAgICB7Wy4uLkFycmF5KDEwKV0ubWFwKChfLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpbmRleCArIDF9IHZhbHVlPXtpbmRleCArIDF9PntpbmRleCArIDF9PC9vcHRpb24+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtudW1EaWNlID4gMVxuICAgICAgICAgID9cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2hlY2tib3gnPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9J2NoZWNrYm94J1xuICAgICAgICAgICAgICBuYW1lPSdzYW1lU2lkZXNDaGVja0JveCdcbiAgICAgICAgICAgICAgaWQ9J3NhbWVTaWRlc0NoZWNrQm94J1xuICAgICAgICAgICAgICBjaGVja2VkPXtzYW1lU2lkZXN9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTYW1lU2lkZXNDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGZvckh0bWw9J3NhbWVTaWRlc0NoZWNrYm94Jz5BbGwgZGljZSBoYXZlIHRoZSBzYW1lIG51bWJlciBvZiBzaWRlczwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgOiBudWxsfVxuICAgICAgICB7ZGljZVZhbHVlcy5sZW5ndGggPiAwXG4gICAgICAgICAgP1xuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaWNlLXZhbHVlcyc+XG4gICAgICAgICAgICB7Wy4uLkFycmF5KG51bURpY2UpXS5tYXAoKF8sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiA8RGllIGtleT17aW5kZXggKyAxfSBpbmRleD17aW5kZXggKyAxfSB2YWx1ZT17ZGljZVZhbHVlc1tpbmRleF19IG9uRGljZVNpZGVzQ2hhbmdlPXsodmFsdWUpID0+IGhhbmRsZURpY2VTaWRlc0NoYW5nZShpbmRleCwgdmFsdWUpfSAvPlxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nZGljZS1idXR0b24nIG9uQ2xpY2s9e2hhbmRsZVJvbGx9PlJvbGwgdGhlIERpY2U8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA6XG4gICAgICAgICAgbnVsbH1cbiAgICAgICAge3RvdGFsICE9PSBudWxsICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGljZS1zdW0nPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0nZGljZS1jZW50ZXInPkVhY2ggUm9sbDo8L2gzPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm9sbHMnPlxuICAgICAgICAgICAgICAgIHtzaG93ICYmIGluZGl2aWR1YWxSb2xscy5tYXAoKHJvbGwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gPGgyIGNsYXNzTmFtZT17YHJvbGwgZmFkZS1pbiBmYWRlLWluLWRlbGF5LSR7aW5kZXggKyAxfWB9IGtleT17aW5kZXh9Pntyb2xsfTwvaDI+XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7c2hvdyAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmFkZS1pbiBmYWRlLWluLWRlbGF5LSR7aW5kaXZpZHVhbFJvbGxzLmxlbmd0aCArIDF9YH0+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0nZGljZS1jZW50ZXInPlRvdGFsOjwvaDM+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nZGljZS1jZW50ZXInPnt0b3RhbH08L2gyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICApO1xufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkRpZSIsIkRpY2UiLCJudW1EaWNlIiwic2V0TnVtRGljZSIsImRpY2VWYWx1ZXMiLCJzZXREaWNlVmFsdWVzIiwiQXJyYXkiLCJmaWxsIiwiaW5kaXZpZHVhbFJvbGxzIiwic2V0SW5kaXZpZHVsYVJvbGxzIiwidG90YWwiLCJzZXRUb3RhbCIsInNob3ciLCJzZXRTaG93Iiwic2FtZVNpZGVzIiwic2V0U2FtZVNpZGVzIiwiY29weSIsImhhbmRsZU51bURpY2VDaGFuZ2UiLCJlIiwibmV3TnVtRGljZSIsInBhcnNlSW50IiwidGFyZ2V0IiwidmFsdWUiLCJwcmV2VmFsdWVzIiwibWFwIiwiXyIsImluZGV4IiwiaGFuZGxlRGljZVNpZGVzQ2hhbmdlIiwibmV3RGljZVZhbHVlcyIsImhhbmRsZVNhbWVTaWRlc0NoYW5nZSIsImNoZWNrZWQiLCJoYW5kbGVSb2xsIiwiY29uc29sZSIsImxvZyIsInNldFRpbWVvdXQiLCJpbmNsdWRlcyIsInJvbGxzIiwidmFsdWVzIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiY2FsY3VsYXRlZFRvdGFsIiwicmVkdWNlIiwic3VtIiwicm9sbCIsImFsZXJ0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJsYWJlbCIsInNlbGVjdCIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJvcHRpb24iLCJkZWZhdWx0IiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsImlkIiwiZm9ySHRtbCIsImxlbmd0aCIsIm9uRGljZVNpZGVzQ2hhbmdlIiwiYnV0dG9uIiwib25DbGljayIsImgzIiwiaDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/dice.jsx\n"));

/***/ })

});