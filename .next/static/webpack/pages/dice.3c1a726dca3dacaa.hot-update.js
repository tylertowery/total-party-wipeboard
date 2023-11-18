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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dice; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_die__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/die */ \"./components/die.jsx\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Dice() {\n    _s();\n    const [numDice, setNumDice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [diceValues, setDiceValues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array(numDice).fill(\"\"));\n    const [individualRolls, setIndividulaRolls] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [total, setTotal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [sameSides, setSameSides] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (sameSides && numDice > 0) {\n            const newArray = Array(numDice).fill(diceValues[0] || \"\");\n            if (!arraysAreEqual(diceValues, newArray)) {\n                setDiceValues(newArray);\n            }\n        }\n    }, [\n        sameSides,\n        numDice,\n        diceValues\n    ]);\n    const arraysAreEqual = (arr1, arr2)=>{\n        return arr1.length === arr2.length && arr1.every((value, index)=>value === arr2[index]);\n    };\n    const handleNumDiceChange = (e)=>{\n        const newNumDice = parseInt(e.target.value, 10);\n        setNumDice(newNumDice);\n        setDiceValues((prevValues)=>Array(newNumDice).fill(\"\").map((_, index)=>prevValues[index] || \"\"));\n        setTotal(null);\n    };\n    const handleDiceSidesChange = (index, value)=>{\n        const newDiceValues = [\n            ...diceValues\n        ];\n        newDiceValues[index] = value;\n        setDiceValues(newDiceValues);\n    };\n    const handleSameSidesChange = (e)=>{\n        setSameSides(e.target.checked);\n    };\n    const handleRoll = ()=>{\n        console.log(\"rolling\");\n        setShow(false);\n        setTimeout(()=>{\n            setShow(true);\n        }, 1);\n        if (!diceValues.includes(\"\")) {\n            const rolls = diceValues.map((values)=>Math.floor(Math.random() * values) + 1);\n            const calculatedTotal = rolls.reduce((sum, roll)=>sum + roll, 0);\n            setIndividulaRolls(rolls);\n            setTotal(calculatedTotal);\n        } else {\n            alert(\"Select a value for each die\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"page\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"header\",\n                children: \"Dice Roller\"\n            }, void 0, false, {\n                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"dice-roller\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"dice-number\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: [\n                                \"Number of Dice\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                    value: numDice,\n                                    onChange: handleNumDiceChange,\n                                    required: true,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"\",\n                                            default: true,\n                                            children: \"Select How Many Dice to Roll\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                            lineNumber: 71,\n                                            columnNumber: 15\n                                        }, this),\n                                        [\n                                            ...Array(10)\n                                        ].map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: index + 1,\n                                                children: index + 1\n                                            }, index + 1, false, {\n                                                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                                lineNumber: 73,\n                                                columnNumber: 17\n                                            }, this))\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    numDice > 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"checkbox\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                id: \"sameSidesCheckBox\",\n                                checked: sameSides,\n                                onChange: handleSameSidesChange\n                            }, void 0, false, {\n                                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                lineNumber: 81,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"sameSidesCheckBox\",\n                                children: \"All dice have the same number of sides\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                lineNumber: 87,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                        lineNumber: 80,\n                        columnNumber: 11\n                    }, this) : null,\n                    diceValues.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"dice-values\",\n                        children: [\n                            sameSides ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_die__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                index: 1,\n                                value: diceValues[0],\n                                sameSides: sameSides,\n                                onDiceSidesChange: (value)=>handleDiceSidesChange(0, value)\n                            }, 1, false, {\n                                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                lineNumber: 94,\n                                columnNumber: 17\n                            }, this) : [\n                                ...Array(numDice)\n                            ].map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_die__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    index: index + 1,\n                                    value: diceValues[index],\n                                    sameSides: sameSides,\n                                    onDiceSidesChange: (value)=>handleDiceSidesChange(index, value)\n                                }, index + 1, false, {\n                                    fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                    lineNumber: 104,\n                                    columnNumber: 19\n                                }, this)),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"dice-button\",\n                                onClick: handleRoll,\n                                children: \"Roll the Dice\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                lineNumber: 114,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                        lineNumber: 91,\n                        columnNumber: 11\n                    }, this),\n                    total !== null && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"dice-sum\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"dice-center\",\n                                        children: \"Each Roll:\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                        lineNumber: 121,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"rolls\",\n                                        children: show && individualRolls.map((roll, index)=>{\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                className: \"roll fade-in fade-in-delay-\".concat(index + 1),\n                                                children: roll\n                                            }, index, false, {\n                                                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                                lineNumber: 124,\n                                                columnNumber: 26\n                                            }, this);\n                                        })\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                        lineNumber: 122,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                lineNumber: 120,\n                                columnNumber: 13\n                            }, this),\n                            show && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"fade-in fade-in-delay-\".concat(individualRolls.length + 1),\n                                children: numDice > 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            className: \"dice-center\",\n                                            children: \"Total:\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                            lineNumber: 133,\n                                            columnNumber: 21\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"dice-center\",\n                                            children: total\n                                        }, void 0, false, {\n                                            fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                            lineNumber: 134,\n                                            columnNumber: 21\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                    lineNumber: 132,\n                                    columnNumber: 19\n                                }, this) : null\n                            }, void 0, false, {\n                                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                lineNumber: 129,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                        lineNumber: 119,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, this);\n}\n_s(Dice, \"MnWow3HHnFQoTlmR3Vn03OMRZT4=\");\n_c = Dice;\nvar _c;\n$RefreshReg$(_c, \"Dice\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFDQyw4REFBQ2dCOzRDQUFHZixXQUFVO3NEQUFjOzs7Ozs7c0RBQzVCLDhEQUFDZ0I7NENBQUdoQixXQUFVO3NEQUFlMUM7Ozs7Ozs7Ozs7OzJDQUcvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVWxCO0dBL0l3QlQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGljZS5qc3g/NWMzOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IERpZSBmcm9tICcuLi9jb21wb25lbnRzL2RpZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERpY2UoKSB7XG4gIGNvbnN0IFtudW1EaWNlLCBzZXROdW1EaWNlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbZGljZVZhbHVlcywgc2V0RGljZVZhbHVlc10gPSB1c2VTdGF0ZShBcnJheShudW1EaWNlKS5maWxsKCcnKSk7XG4gIGNvbnN0IFtpbmRpdmlkdWFsUm9sbHMsIHNldEluZGl2aWR1bGFSb2xsc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt0b3RhbCwgc2V0VG90YWxdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NhbWVTaWRlcywgc2V0U2FtZVNpZGVzXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzYW1lU2lkZXMgJiYgbnVtRGljZSA+IDApIHtcbiAgICAgIGNvbnN0IG5ld0FycmF5ID0gQXJyYXkobnVtRGljZSkuZmlsbChkaWNlVmFsdWVzWzBdIHx8ICcnKTtcbiAgICAgIGlmICghYXJyYXlzQXJlRXF1YWwoZGljZVZhbHVlcywgbmV3QXJyYXkpKSB7XG4gICAgICAgIHNldERpY2VWYWx1ZXMobmV3QXJyYXkpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW3NhbWVTaWRlcywgbnVtRGljZSwgZGljZVZhbHVlc10pO1xuXG4gIGNvbnN0IGFycmF5c0FyZUVxdWFsID0gKGFycjEsIGFycjIpID0+IHtcbiAgICByZXR1cm4gYXJyMS5sZW5ndGggPT09IGFycjIubGVuZ3RoICYmIGFycjEuZXZlcnkoKHZhbHVlLCBpbmRleCkgPT4gdmFsdWUgPT09IGFycjJbaW5kZXhdKTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZU51bURpY2VDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IG5ld051bURpY2UgPSBwYXJzZUludChlLnRhcmdldC52YWx1ZSwgMTApO1xuICAgIHNldE51bURpY2UobmV3TnVtRGljZSk7XG4gICAgc2V0RGljZVZhbHVlcyhwcmV2VmFsdWVzID0+IEFycmF5KG5ld051bURpY2UpLmZpbGwoJycpLm1hcCgoXywgaW5kZXgpID0+IHByZXZWYWx1ZXNbaW5kZXhdIHx8ICcnKSk7XG4gICAgc2V0VG90YWwobnVsbCk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVEaWNlU2lkZXNDaGFuZ2UgPSAoaW5kZXgsIHZhbHVlKSA9PiB7XG4gICAgY29uc3QgbmV3RGljZVZhbHVlcyA9IFsuLi5kaWNlVmFsdWVzXTtcbiAgICBuZXdEaWNlVmFsdWVzW2luZGV4XSA9IHZhbHVlO1xuICAgIHNldERpY2VWYWx1ZXMobmV3RGljZVZhbHVlcyk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVTYW1lU2lkZXNDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldFNhbWVTaWRlcyhlLnRhcmdldC5jaGVja2VkKTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVJvbGwgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3JvbGxpbmcnKTtcbiAgICBzZXRTaG93KGZhbHNlKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0U2hvdyh0cnVlKTtcbiAgICB9LCAxKTtcblxuICAgIGlmICghZGljZVZhbHVlcy5pbmNsdWRlcygnJykpIHtcbiAgICAgIGNvbnN0IHJvbGxzID0gZGljZVZhbHVlcy5tYXAoKHZhbHVlcykgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdmFsdWVzKSArIDEpO1xuICAgICAgY29uc3QgY2FsY3VsYXRlZFRvdGFsID0gcm9sbHMucmVkdWNlKChzdW0sIHJvbGwpID0+IHN1bSArIHJvbGwsIDApO1xuICAgICAgc2V0SW5kaXZpZHVsYVJvbGxzKHJvbGxzKTtcbiAgICAgIHNldFRvdGFsKGNhbGN1bGF0ZWRUb3RhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0KCdTZWxlY3QgYSB2YWx1ZSBmb3IgZWFjaCBkaWUnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdwYWdlJz5cbiAgICAgIDxoMSBjbGFzc05hbWU9J2hlYWRlcic+RGljZSBSb2xsZXI8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2RpY2Utcm9sbGVyJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpY2UtbnVtYmVyJz5cbiAgICAgICAgICA8bGFiZWw+TnVtYmVyIG9mIERpY2VcbiAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgdmFsdWU9e251bURpY2V9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVOdW1EaWNlQ2hhbmdlfVxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPScnIGRlZmF1bHQ+U2VsZWN0IEhvdyBNYW55IERpY2UgdG8gUm9sbDwvb3B0aW9uPlxuICAgICAgICAgICAgICB7Wy4uLkFycmF5KDEwKV0ubWFwKChfLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpbmRleCArIDF9IHZhbHVlPXtpbmRleCArIDF9PntpbmRleCArIDF9PC9vcHRpb24+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtudW1EaWNlID4gMVxuICAgICAgICAgID9cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2hlY2tib3gnPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9J2NoZWNrYm94J1xuICAgICAgICAgICAgICBpZD0nc2FtZVNpZGVzQ2hlY2tCb3gnXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e3NhbWVTaWRlc31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNhbWVTaWRlc0NoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nc2FtZVNpZGVzQ2hlY2tCb3gnPkFsbCBkaWNlIGhhdmUgdGhlIHNhbWUgbnVtYmVyIG9mIHNpZGVzPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA6IG51bGx9XG4gICAgICAgIHtkaWNlVmFsdWVzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaWNlLXZhbHVlcyc+XG4gICAgICAgICAgICB7c2FtZVNpZGVzXG4gICAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICAgIDxEaWVcbiAgICAgICAgICAgICAgICAgIGtleT17MX1cbiAgICAgICAgICAgICAgICAgIGluZGV4PXsxfVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2RpY2VWYWx1ZXNbMF19XG4gICAgICAgICAgICAgICAgICBzYW1lU2lkZXM9e3NhbWVTaWRlc31cbiAgICAgICAgICAgICAgICAgIG9uRGljZVNpZGVzQ2hhbmdlPXsodmFsdWUpID0+IGhhbmRsZURpY2VTaWRlc0NoYW5nZSgwLCB2YWx1ZSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IChcbiAgICAgICAgICAgICAgICBbLi4uQXJyYXkobnVtRGljZSldLm1hcCgoXywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxEaWVcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleCArIDF9XG4gICAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleCArIDF9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkaWNlVmFsdWVzW2luZGV4XX1cbiAgICAgICAgICAgICAgICAgICAgc2FtZVNpZGVzPXtzYW1lU2lkZXN9XG4gICAgICAgICAgICAgICAgICAgIG9uRGljZVNpZGVzQ2hhbmdlPXsodmFsdWUpID0+IGhhbmRsZURpY2VTaWRlc0NoYW5nZShpbmRleCwgdmFsdWUpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nZGljZS1idXR0b24nIG9uQ2xpY2s9e2hhbmRsZVJvbGx9PlJvbGwgdGhlIERpY2U8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cblxuICAgICAgICB7dG90YWwgIT09IG51bGwgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaWNlLXN1bSc+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdkaWNlLWNlbnRlcic+RWFjaCBSb2xsOjwvaDM+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb2xscyc+XG4gICAgICAgICAgICAgICAge3Nob3cgJiYgaW5kaXZpZHVhbFJvbGxzLm1hcCgocm9sbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8aDIgY2xhc3NOYW1lPXtgcm9sbCBmYWRlLWluIGZhZGUtaW4tZGVsYXktJHtpbmRleCArIDF9YH0ga2V5PXtpbmRleH0+e3JvbGx9PC9oMj5cbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtzaG93ICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmYWRlLWluIGZhZGUtaW4tZGVsYXktJHtpbmRpdmlkdWFsUm9sbHMubGVuZ3RoICsgMX1gfT5cbiAgICAgICAgICAgICAgICB7bnVtRGljZSA+IDFcbiAgICAgICAgICAgICAgICAgID9cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J2RpY2UtY2VudGVyJz5Ub3RhbDo8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdkaWNlLWNlbnRlcic+e3RvdGFsfTwvaDI+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgIG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG4gICk7XG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRGllIiwiRGljZSIsIm51bURpY2UiLCJzZXROdW1EaWNlIiwiZGljZVZhbHVlcyIsInNldERpY2VWYWx1ZXMiLCJBcnJheSIsImZpbGwiLCJpbmRpdmlkdWFsUm9sbHMiLCJzZXRJbmRpdmlkdWxhUm9sbHMiLCJ0b3RhbCIsInNldFRvdGFsIiwic2hvdyIsInNldFNob3ciLCJzYW1lU2lkZXMiLCJzZXRTYW1lU2lkZXMiLCJuZXdBcnJheSIsImFycmF5c0FyZUVxdWFsIiwiYXJyMSIsImFycjIiLCJsZW5ndGgiLCJldmVyeSIsInZhbHVlIiwiaW5kZXgiLCJoYW5kbGVOdW1EaWNlQ2hhbmdlIiwiZSIsIm5ld051bURpY2UiLCJwYXJzZUludCIsInRhcmdldCIsInByZXZWYWx1ZXMiLCJtYXAiLCJfIiwiaGFuZGxlRGljZVNpZGVzQ2hhbmdlIiwibmV3RGljZVZhbHVlcyIsImhhbmRsZVNhbWVTaWRlc0NoYW5nZSIsImNoZWNrZWQiLCJoYW5kbGVSb2xsIiwiY29uc29sZSIsImxvZyIsInNldFRpbWVvdXQiLCJpbmNsdWRlcyIsInJvbGxzIiwidmFsdWVzIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiY2FsY3VsYXRlZFRvdGFsIiwicmVkdWNlIiwic3VtIiwicm9sbCIsImFsZXJ0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJsYWJlbCIsInNlbGVjdCIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJvcHRpb24iLCJkZWZhdWx0IiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJodG1sRm9yIiwib25EaWNlU2lkZXNDaGFuZ2UiLCJidXR0b24iLCJvbkNsaWNrIiwiaDMiLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/dice.jsx\n"));

/***/ })

});