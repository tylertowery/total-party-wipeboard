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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dice; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_die__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/die */ \"./components/die.jsx\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Dice() {\n    _s();\n    const [numDice, setNumDice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [diceValues, setDiceValues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array(numDice).fill(\"\"));\n    const [individualRolls, setIndividulaRolls] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [total, setTotal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [sameSides, setSameSides] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (sameSides && numDice > 0) {\n            const newArray = Array(numDice).fill(diceValues[0] || \"\");\n            if (!arraysAreEqual(diceValues, newArray)) {\n                setDiceValues(newArray);\n            }\n        }\n    }, [\n        sameSides,\n        numDice,\n        diceValues\n    ]);\n    const arraysAreEqual = (arr1, arr2)=>{\n        return arr1.length === arr2.length && arr1.every((value, index)=>value === arr2[index]);\n    };\n    const handleNumDiceChange = (e)=>{\n        const newNumDice = parseInt(e.target.value, 10);\n        setNumDice(newNumDice);\n        setDiceValues((prevValues)=>Array(newNumDice).fill(\"\").map((_, index)=>prevValues[index] || \"\"));\n        setTotal(null);\n    };\n    const handleDiceSidesChange = (index, value)=>{\n        const newDiceValues = [\n            ...diceValues\n        ];\n        newDiceValues[index] = value;\n        setDiceValues(newDiceValues);\n    };\n    const handleSameSidesChange = (e)=>{\n        setSameSides(e.target.checked);\n    };\n    const handleRoll = ()=>{\n        console.log(\"rolling\");\n        setShow(false);\n        setTimeout(()=>{\n            setShow(true);\n        }, 1);\n        if (!diceValues.includes(\"\")) {\n            const rolls = diceValues.map((values)=>Math.floor(Math.random() * values) + 1);\n            const calculatedTotal = rolls.reduce((sum, roll)=>sum + roll, 0);\n            setIndividulaRolls(rolls);\n            setTotal(calculatedTotal);\n        } else {\n            alert(\"Select a value for each die\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"page\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"header\",\n                children: \"Dice Roller\"\n            }, void 0, false, {\n                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"dice-roller\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"dice-number\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: [\n                                \"Number of Dice\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                    value: numDice,\n                                    onChange: handleNumDiceChange,\n                                    required: true,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"\",\n                                            default: true,\n                                            children: \"Select How Many Dice to Roll\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                            lineNumber: 71,\n                                            columnNumber: 15\n                                        }, this),\n                                        [\n                                            ...Array(10)\n                                        ].map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: index + 1,\n                                                children: index + 1\n                                            }, index + 1, false, {\n                                                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                                lineNumber: 73,\n                                                columnNumber: 17\n                                            }, this))\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    numDice > 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"checkbox\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                id: \"sameSidesCheckBox\",\n                                checked: sameSides,\n                                onChange: handleSameSidesChange\n                            }, void 0, false, {\n                                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                lineNumber: 81,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"sameSidesCheckBox\",\n                                children: \"All dice have the same number of sides\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                lineNumber: 87,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                        lineNumber: 80,\n                        columnNumber: 11\n                    }, this) : null,\n                    diceValues.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"dice-values\",\n                        children: [\n                            sameSides ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_die__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                index: 1,\n                                value: diceValues[0],\n                                sameSides: sameSides,\n                                onDiceSidesChange: (value)=>handleDiceSidesChange(0, value)\n                            }, 1, false, {\n                                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                lineNumber: 94,\n                                columnNumber: 17\n                            }, this) : [\n                                ...Array(numDice)\n                            ].map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_die__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    index: index + 1,\n                                    value: diceValues[index],\n                                    sameSides: sameSides,\n                                    onDiceSidesChange: (value)=>handleDiceSidesChange(index, value)\n                                }, index + 1, false, {\n                                    fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                    lineNumber: 104,\n                                    columnNumber: 19\n                                }, this)),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"dice-button\",\n                                onClick: handleRoll,\n                                children: \"Roll the Dice\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                lineNumber: 114,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                        lineNumber: 91,\n                        columnNumber: 11\n                    }, this),\n                    total !== null && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"dice-sum\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    numDice > 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"dice-center\",\n                                        children: \"Each Roll:\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                        lineNumber: 123,\n                                        columnNumber: 17\n                                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"dice-center\",\n                                        children: \"Roll:\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                        lineNumber: 125,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"rolls\",\n                                        children: show && individualRolls.map((roll, index)=>{\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                className: \"roll fade-in fade-in-delay-\".concat(index + 1),\n                                                children: roll\n                                            }, index, false, {\n                                                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                                lineNumber: 129,\n                                                columnNumber: 26\n                                            }, this);\n                                        })\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                        lineNumber: 127,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                lineNumber: 120,\n                                columnNumber: 13\n                            }, this),\n                            show && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"fade-in fade-in-delay-\".concat(individualRolls.length + 1),\n                                children: numDice > 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            className: \"dice-center\",\n                                            children: \"Total:\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                            lineNumber: 138,\n                                            columnNumber: 21\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"dice-center\",\n                                            children: total\n                                        }, void 0, false, {\n                                            fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                            lineNumber: 139,\n                                            columnNumber: 21\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                    lineNumber: 137,\n                                    columnNumber: 19\n                                }, this) : null\n                            }, void 0, false, {\n                                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                lineNumber: 134,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                        lineNumber: 119,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, this);\n}\n_s(Dice, \"MnWow3HHnFQoTlmR3Vn03OMRZT4=\");\n_c = Dice;\nvar _c;\n$RefreshReg$(_c, \"Dice\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTNCNUMsZ0JBQWdCWSxTQUFTOzBDQUMvRGxCLFVBQVUsa0JBRVQsOERBQUNpRDs7c0RBQ0MsOERBQUNnQjs0Q0FBR2YsV0FBVTtzREFBYzs7Ozs7O3NEQUM1Qiw4REFBQ2dCOzRDQUFHaEIsV0FBVTtzREFBZTFDOzs7Ozs7Ozs7OzsyQ0FHL0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVsQjtHQXBKd0JUO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2RpY2UuanN4PzVjMzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEaWUgZnJvbSAnLi4vY29tcG9uZW50cy9kaWUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEaWNlKCkge1xuICBjb25zdCBbbnVtRGljZSwgc2V0TnVtRGljZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2RpY2VWYWx1ZXMsIHNldERpY2VWYWx1ZXNdID0gdXNlU3RhdGUoQXJyYXkobnVtRGljZSkuZmlsbCgnJykpO1xuICBjb25zdCBbaW5kaXZpZHVhbFJvbGxzLCBzZXRJbmRpdmlkdWxhUm9sbHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdG90YWwsIHNldFRvdGFsXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzYW1lU2lkZXMsIHNldFNhbWVTaWRlc10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2FtZVNpZGVzICYmIG51bURpY2UgPiAwKSB7XG4gICAgICBjb25zdCBuZXdBcnJheSA9IEFycmF5KG51bURpY2UpLmZpbGwoZGljZVZhbHVlc1swXSB8fCAnJyk7XG4gICAgICBpZiAoIWFycmF5c0FyZUVxdWFsKGRpY2VWYWx1ZXMsIG5ld0FycmF5KSkge1xuICAgICAgICBzZXREaWNlVmFsdWVzKG5ld0FycmF5KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtzYW1lU2lkZXMsIG51bURpY2UsIGRpY2VWYWx1ZXNdKTtcblxuICBjb25zdCBhcnJheXNBcmVFcXVhbCA9IChhcnIxLCBhcnIyKSA9PiB7XG4gICAgcmV0dXJuIGFycjEubGVuZ3RoID09PSBhcnIyLmxlbmd0aCAmJiBhcnIxLmV2ZXJ5KCh2YWx1ZSwgaW5kZXgpID0+IHZhbHVlID09PSBhcnIyW2luZGV4XSk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVOdW1EaWNlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCBuZXdOdW1EaWNlID0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUsIDEwKTtcbiAgICBzZXROdW1EaWNlKG5ld051bURpY2UpO1xuICAgIHNldERpY2VWYWx1ZXMocHJldlZhbHVlcyA9PiBBcnJheShuZXdOdW1EaWNlKS5maWxsKCcnKS5tYXAoKF8sIGluZGV4KSA9PiBwcmV2VmFsdWVzW2luZGV4XSB8fCAnJykpO1xuICAgIHNldFRvdGFsKG51bGwpO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlRGljZVNpZGVzQ2hhbmdlID0gKGluZGV4LCB2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IG5ld0RpY2VWYWx1ZXMgPSBbLi4uZGljZVZhbHVlc107XG4gICAgbmV3RGljZVZhbHVlc1tpbmRleF0gPSB2YWx1ZTtcbiAgICBzZXREaWNlVmFsdWVzKG5ld0RpY2VWYWx1ZXMpO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlU2FtZVNpZGVzQ2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRTYW1lU2lkZXMoZS50YXJnZXQuY2hlY2tlZCk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVSb2xsID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdyb2xsaW5nJyk7XG4gICAgc2V0U2hvdyhmYWxzZSk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldFNob3codHJ1ZSk7XG4gICAgfSwgMSk7XG5cbiAgICBpZiAoIWRpY2VWYWx1ZXMuaW5jbHVkZXMoJycpKSB7XG4gICAgICBjb25zdCByb2xscyA9IGRpY2VWYWx1ZXMubWFwKCh2YWx1ZXMpID0+IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHZhbHVlcykgKyAxKTtcbiAgICAgIGNvbnN0IGNhbGN1bGF0ZWRUb3RhbCA9IHJvbGxzLnJlZHVjZSgoc3VtLCByb2xsKSA9PiBzdW0gKyByb2xsLCAwKTtcbiAgICAgIHNldEluZGl2aWR1bGFSb2xscyhyb2xscyk7XG4gICAgICBzZXRUb3RhbChjYWxjdWxhdGVkVG90YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydCgnU2VsZWN0IGEgdmFsdWUgZm9yIGVhY2ggZGllJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0ncGFnZSc+XG4gICAgICA8aDEgY2xhc3NOYW1lPSdoZWFkZXInPkRpY2UgUm9sbGVyPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaWNlLXJvbGxlcic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaWNlLW51bWJlcic+XG4gICAgICAgICAgPGxhYmVsPk51bWJlciBvZiBEaWNlXG4gICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgIHZhbHVlPXtudW1EaWNlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlTnVtRGljZUNoYW5nZX1cbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nJyBkZWZhdWx0PlNlbGVjdCBIb3cgTWFueSBEaWNlIHRvIFJvbGw8L29wdGlvbj5cbiAgICAgICAgICAgICAge1suLi5BcnJheSgxMCldLm1hcCgoXywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aW5kZXggKyAxfSB2YWx1ZT17aW5kZXggKyAxfT57aW5kZXggKyAxfTwvb3B0aW9uPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7bnVtRGljZSA+IDFcbiAgICAgICAgICA/XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NoZWNrYm94Jz5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPSdjaGVja2JveCdcbiAgICAgICAgICAgICAgaWQ9J3NhbWVTaWRlc0NoZWNrQm94J1xuICAgICAgICAgICAgICBjaGVja2VkPXtzYW1lU2lkZXN9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTYW1lU2lkZXNDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J3NhbWVTaWRlc0NoZWNrQm94Jz5BbGwgZGljZSBoYXZlIHRoZSBzYW1lIG51bWJlciBvZiBzaWRlczwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgOiBudWxsfVxuICAgICAgICB7ZGljZVZhbHVlcy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGljZS12YWx1ZXMnPlxuICAgICAgICAgICAge3NhbWVTaWRlc1xuICAgICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgICA8RGllXG4gICAgICAgICAgICAgICAgICBrZXk9ezF9XG4gICAgICAgICAgICAgICAgICBpbmRleD17MX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtkaWNlVmFsdWVzWzBdfVxuICAgICAgICAgICAgICAgICAgc2FtZVNpZGVzPXtzYW1lU2lkZXN9XG4gICAgICAgICAgICAgICAgICBvbkRpY2VTaWRlc0NoYW5nZT17KHZhbHVlKSA9PiBoYW5kbGVEaWNlU2lkZXNDaGFuZ2UoMCwgdmFsdWUpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiAoXG4gICAgICAgICAgICAgICAgWy4uLkFycmF5KG51bURpY2UpXS5tYXAoKF8sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8RGllXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXggKyAxfVxuICAgICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXggKyAxfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGljZVZhbHVlc1tpbmRleF19XG4gICAgICAgICAgICAgICAgICAgIHNhbWVTaWRlcz17c2FtZVNpZGVzfVxuICAgICAgICAgICAgICAgICAgICBvbkRpY2VTaWRlc0NoYW5nZT17KHZhbHVlKSA9PiBoYW5kbGVEaWNlU2lkZXNDaGFuZ2UoaW5kZXgsIHZhbHVlKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2RpY2UtYnV0dG9uJyBvbkNsaWNrPXtoYW5kbGVSb2xsfT5Sb2xsIHRoZSBEaWNlPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG5cbiAgICAgICAge3RvdGFsICE9PSBudWxsICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGljZS1zdW0nPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAge251bURpY2UgPiAxXG4gICAgICAgICAgICAgICAgP1xuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J2RpY2UtY2VudGVyJz5FYWNoIFJvbGw6PC9oMz5cbiAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0nZGljZS1jZW50ZXInPlJvbGw6PC9oMz5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm9sbHMnPlxuICAgICAgICAgICAgICAgIHtzaG93ICYmIGluZGl2aWR1YWxSb2xscy5tYXAoKHJvbGwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gPGgyIGNsYXNzTmFtZT17YHJvbGwgZmFkZS1pbiBmYWRlLWluLWRlbGF5LSR7aW5kZXggKyAxfWB9IGtleT17aW5kZXh9Pntyb2xsfTwvaDI+XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7c2hvdyAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmFkZS1pbiBmYWRlLWluLWRlbGF5LSR7aW5kaXZpZHVhbFJvbGxzLmxlbmd0aCArIDF9YH0+XG4gICAgICAgICAgICAgICAge251bURpY2UgPiAxXG4gICAgICAgICAgICAgICAgICA/XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdkaWNlLWNlbnRlcic+VG90YWw6PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0nZGljZS1jZW50ZXInPnt0b3RhbH08L2gyPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICApO1xufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkRpZSIsIkRpY2UiLCJudW1EaWNlIiwic2V0TnVtRGljZSIsImRpY2VWYWx1ZXMiLCJzZXREaWNlVmFsdWVzIiwiQXJyYXkiLCJmaWxsIiwiaW5kaXZpZHVhbFJvbGxzIiwic2V0SW5kaXZpZHVsYVJvbGxzIiwidG90YWwiLCJzZXRUb3RhbCIsInNob3ciLCJzZXRTaG93Iiwic2FtZVNpZGVzIiwic2V0U2FtZVNpZGVzIiwibmV3QXJyYXkiLCJhcnJheXNBcmVFcXVhbCIsImFycjEiLCJhcnIyIiwibGVuZ3RoIiwiZXZlcnkiLCJ2YWx1ZSIsImluZGV4IiwiaGFuZGxlTnVtRGljZUNoYW5nZSIsImUiLCJuZXdOdW1EaWNlIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJwcmV2VmFsdWVzIiwibWFwIiwiXyIsImhhbmRsZURpY2VTaWRlc0NoYW5nZSIsIm5ld0RpY2VWYWx1ZXMiLCJoYW5kbGVTYW1lU2lkZXNDaGFuZ2UiLCJjaGVja2VkIiwiaGFuZGxlUm9sbCIsImNvbnNvbGUiLCJsb2ciLCJzZXRUaW1lb3V0IiwiaW5jbHVkZXMiLCJyb2xscyIsInZhbHVlcyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNhbGN1bGF0ZWRUb3RhbCIsInJlZHVjZSIsInN1bSIsInJvbGwiLCJhbGVydCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibGFiZWwiLCJzZWxlY3QiLCJvbkNoYW5nZSIsInJlcXVpcmVkIiwib3B0aW9uIiwiZGVmYXVsdCIsImlucHV0IiwidHlwZSIsImlkIiwiaHRtbEZvciIsIm9uRGljZVNpZGVzQ2hhbmdlIiwiYnV0dG9uIiwib25DbGljayIsImgzIiwiaDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/dice.jsx\n"));

/***/ })

});