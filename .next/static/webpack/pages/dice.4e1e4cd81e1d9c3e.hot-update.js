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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dice; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_die__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/die */ \"./components/die.jsx\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Dice() {\n    _s();\n    const [numDice, setNumDice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [diceValues, setDiceValues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array(numDice).fill(\"\"));\n    const [individualRolls, setIndividulaRolls] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [total, setTotal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [sameSides, setSameSides] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleNumDiceChange = (e)=>{\n        const newNumDice = parseInt(e.target.value, 10);\n        setNumDice(newNumDice);\n        setDiceValues((prevValues)=>Array(newNumDice).fill(\"\").map((_, index)=>prevValues[index] || \"\"));\n        setTotal(null);\n    };\n    const handleDiceSidesChange = (index, value)=>{\n        const newDiceValues = [\n            ...diceValues\n        ];\n        newDiceValues[index] = value;\n        setDiceValues(newDiceValues);\n    };\n    const handleRoll = ()=>{\n        console.log(\"rolling\");\n        setShow(false);\n        setTimeout(()=>{\n            setShow(true);\n        }, 1);\n        if (!diceValues.includes(\"\")) {\n            const rolls = diceValues.map((values)=>Math.floor(Math.random() * values) + 1);\n            const calculatedTotal = rolls.reduce((sum, roll)=>sum + roll, 0);\n            setIndividulaRolls(rolls);\n            setTotal(calculatedTotal);\n        // const rolls = [];\n        // let index = 0;\n        // const intervalId = setInterval(() => {\n        //   const roll = Math.floor(Math.random() * diceValues[index]) + 1;\n        //   rolls.push(roll);\n        //   setTotal(rolls.reduce((sum, roll) => sum + roll, 0));\n        //   setIndividulaRolls([...rolls]);\n        //   index += 1;\n        //   if (index >= diceValues.length) {\n        //     clearInterval(intervalId);\n        //   }\n        // }, 2000);\n        // const rolls = diceValues.map((sides) => Math.floor(Math.random() * sides) + 1);\n        // const calculatedTotal = rolls.reduce((sum, roll) => sum + roll, 0);\n        // setTotal(calculatedTotal);\n        // console.log('Individual Rolls: ', rolls);\n        // console.log(diceValues);\n        } else {\n            alert(\"Select a value for each die\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"page\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"header\",\n                children: \"Dice Roller\"\n            }, void 0, false, {\n                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"dice-roller\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"dice-number\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: [\n                                \"Number of Dice\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                    value: numDice,\n                                    onChange: handleNumDiceChange,\n                                    required: true,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: \"\",\n                                            default: true,\n                                            children: \"Select How Many Dice to Roll\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                            lineNumber: 75,\n                                            columnNumber: 15\n                                        }, this),\n                                        [\n                                            ...Array(10)\n                                        ].map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                value: index + 1,\n                                                children: index + 1\n                                            }, index + 1, false, {\n                                                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                                lineNumber: 77,\n                                                columnNumber: 17\n                                            }, this))\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    diceValues.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"dice-values\",\n                        children: [\n                            [\n                                ...Array(numDice)\n                            ].map((_, index)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_die__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    index: index + 1,\n                                    value: diceValues[index],\n                                    onDiceSidesChange: (value)=>handleDiceSidesChange(index, value)\n                                }, index + 1, false, {\n                                    fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 22\n                                }, this);\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"dice-button\",\n                                onClick: handleRoll,\n                                children: \"Roll the Dice\"\n                            }, void 0, false, {\n                                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                lineNumber: 88,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                        lineNumber: 84,\n                        columnNumber: 11\n                    }, this) : null,\n                    total !== null && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"dice-sum\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"dice-center\",\n                                        children: \"Each Roll:\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"rolls\",\n                                        children: show && individualRolls.map((roll, index)=>{\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                className: \"roll fade-in fade-in-delay-\".concat(index + 1),\n                                                children: roll\n                                            }, index, false, {\n                                                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                                lineNumber: 98,\n                                                columnNumber: 26\n                                            }, this);\n                                        })\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                        lineNumber: 96,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                lineNumber: 94,\n                                columnNumber: 13\n                            }, this),\n                            show && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"fade-in fade-in-delay-\".concat(individualRolls.length + 1),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"dice-center\",\n                                        children: \"Total:\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                        lineNumber: 104,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"dice-center\",\n                                        children: total\n                                    }, void 0, false, {\n                                        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                        lineNumber: 105,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                                lineNumber: 103,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                        lineNumber: 93,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/dice.jsx\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, this);\n}\n_s(Dice, \"nExDLMp+womF3nZLHZInNLEUdP0=\");\n_c = Dice;\nvar _c;\n$RefreshReg$(_c, \"Dice\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHNCQUFzQkQsT0FBT0o7bUNBQWxISSxRQUFROzs7Ozs0QkFDM0I7MENBQ0EsOERBQUM2QjtnQ0FBT1YsV0FBVTtnQ0FBY1csU0FBUzNCOzBDQUFZOzs7Ozs7Ozs7OzsrQkFHdkQ7b0JBQ0RsQixVQUFVLHNCQUNULDhEQUFDaUM7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRDs7a0RBQ0MsOERBQUNhO3dDQUFHWixXQUFVO2tEQUFjOzs7Ozs7a0RBQzVCLDhEQUFDRDt3Q0FBSUMsV0FBVTtrREFDWmhDLFFBQVFKLGdCQUFnQmUsSUFBSSxDQUFDa0IsTUFBTWhCOzRDQUNsQyxxQkFBTyw4REFBQ2dDO2dEQUFHYixXQUFXLDhCQUF3QyxPQUFWbkIsUUFBUTswREFBa0JnQjsrQ0FBUmhCOzs7Ozt3Q0FDeEU7Ozs7Ozs7Ozs7Ozs0QkFHSGIsc0JBQ0MsOERBQUMrQjtnQ0FBSUMsV0FBVyx5QkFBb0QsT0FBM0JwQyxnQkFBZ0I0QyxTQUFTOztrREFDaEUsOERBQUNJO3dDQUFHWixXQUFVO2tEQUFjOzs7Ozs7a0RBQzVCLDhEQUFDYTt3Q0FBR2IsV0FBVTtrREFBZWxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTN0M7R0E5R3dCVDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9kaWNlLmpzeD81YzM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IERpZSBmcm9tICcuLi9jb21wb25lbnRzL2RpZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERpY2UoKSB7XG4gIGNvbnN0IFtudW1EaWNlLCBzZXROdW1EaWNlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbZGljZVZhbHVlcywgc2V0RGljZVZhbHVlc10gPSB1c2VTdGF0ZShBcnJheShudW1EaWNlKS5maWxsKCcnKSk7XG4gIGNvbnN0IFtpbmRpdmlkdWFsUm9sbHMsIHNldEluZGl2aWR1bGFSb2xsc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt0b3RhbCwgc2V0VG90YWxdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NhbWVTaWRlcywgc2V0U2FtZVNpZGVzXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVOdW1EaWNlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCBuZXdOdW1EaWNlID0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUsIDEwKTtcbiAgICBzZXROdW1EaWNlKG5ld051bURpY2UpO1xuICAgIHNldERpY2VWYWx1ZXMocHJldlZhbHVlcyA9PiBBcnJheShuZXdOdW1EaWNlKS5maWxsKCcnKS5tYXAoKF8sIGluZGV4KSA9PiBwcmV2VmFsdWVzW2luZGV4XSB8fCAnJykpO1xuICAgIHNldFRvdGFsKG51bGwpO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlRGljZVNpZGVzQ2hhbmdlID0gKGluZGV4LCB2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IG5ld0RpY2VWYWx1ZXMgPSBbLi4uZGljZVZhbHVlc107XG4gICAgbmV3RGljZVZhbHVlc1tpbmRleF0gPSB2YWx1ZTtcbiAgICBzZXREaWNlVmFsdWVzKG5ld0RpY2VWYWx1ZXMpO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlUm9sbCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygncm9sbGluZycpO1xuICAgIHNldFNob3coZmFsc2UpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRTaG93KHRydWUpO1xuICAgIH0sIDEpO1xuXG4gICAgaWYgKCFkaWNlVmFsdWVzLmluY2x1ZGVzKCcnKSkge1xuICAgICAgY29uc3Qgcm9sbHMgPSBkaWNlVmFsdWVzLm1hcCgodmFsdWVzKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB2YWx1ZXMpICsgMSk7XG4gICAgICBjb25zdCBjYWxjdWxhdGVkVG90YWwgPSByb2xscy5yZWR1Y2UoKHN1bSwgcm9sbCkgPT4gc3VtICsgcm9sbCwgMCk7XG4gICAgICBzZXRJbmRpdmlkdWxhUm9sbHMocm9sbHMpO1xuICAgICAgc2V0VG90YWwoY2FsY3VsYXRlZFRvdGFsKTtcblxuICAgICAgLy8gY29uc3Qgcm9sbHMgPSBbXTtcbiAgICAgIC8vIGxldCBpbmRleCA9IDA7XG5cbiAgICAgIC8vIGNvbnN0IGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAvLyAgIGNvbnN0IHJvbGwgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBkaWNlVmFsdWVzW2luZGV4XSkgKyAxO1xuICAgICAgLy8gICByb2xscy5wdXNoKHJvbGwpO1xuICAgICAgLy8gICBzZXRUb3RhbChyb2xscy5yZWR1Y2UoKHN1bSwgcm9sbCkgPT4gc3VtICsgcm9sbCwgMCkpO1xuICAgICAgLy8gICBzZXRJbmRpdmlkdWxhUm9sbHMoWy4uLnJvbGxzXSk7XG5cbiAgICAgIC8vICAgaW5kZXggKz0gMTtcbiAgICAgIC8vICAgaWYgKGluZGV4ID49IGRpY2VWYWx1ZXMubGVuZ3RoKSB7XG4gICAgICAvLyAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcbiAgICAgIC8vICAgfVxuICAgICAgLy8gfSwgMjAwMCk7XG5cbiAgICAgIC8vIGNvbnN0IHJvbGxzID0gZGljZVZhbHVlcy5tYXAoKHNpZGVzKSA9PiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzaWRlcykgKyAxKTtcbiAgICAgIC8vIGNvbnN0IGNhbGN1bGF0ZWRUb3RhbCA9IHJvbGxzLnJlZHVjZSgoc3VtLCByb2xsKSA9PiBzdW0gKyByb2xsLCAwKTtcbiAgICAgIC8vIHNldFRvdGFsKGNhbGN1bGF0ZWRUb3RhbCk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnSW5kaXZpZHVhbCBSb2xsczogJywgcm9sbHMpO1xuICAgICAgLy8gY29uc29sZS5sb2coZGljZVZhbHVlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0KCdTZWxlY3QgYSB2YWx1ZSBmb3IgZWFjaCBkaWUnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdwYWdlJz5cbiAgICAgIDxoMSBjbGFzc05hbWU9J2hlYWRlcic+RGljZSBSb2xsZXI8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2RpY2Utcm9sbGVyJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpY2UtbnVtYmVyJz5cbiAgICAgICAgICA8bGFiZWw+TnVtYmVyIG9mIERpY2VcbiAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgdmFsdWU9e251bURpY2V9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVOdW1EaWNlQ2hhbmdlfVxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPScnIGRlZmF1bHQ+U2VsZWN0IEhvdyBNYW55IERpY2UgdG8gUm9sbDwvb3B0aW9uPlxuICAgICAgICAgICAgICB7Wy4uLkFycmF5KDEwKV0ubWFwKChfLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpbmRleCArIDF9IHZhbHVlPXtpbmRleCArIDF9PntpbmRleCArIDF9PC9vcHRpb24+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtkaWNlVmFsdWVzLmxlbmd0aCA+IDBcbiAgICAgICAgICA/XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpY2UtdmFsdWVzJz5cbiAgICAgICAgICAgIHtbLi4uQXJyYXkobnVtRGljZSldLm1hcCgoXywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIDxEaWUga2V5PXtpbmRleCArIDF9IGluZGV4PXtpbmRleCArIDF9IHZhbHVlPXtkaWNlVmFsdWVzW2luZGV4XX0gb25EaWNlU2lkZXNDaGFuZ2U9eyh2YWx1ZSkgPT4gaGFuZGxlRGljZVNpZGVzQ2hhbmdlKGluZGV4LCB2YWx1ZSl9IC8+XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdkaWNlLWJ1dHRvbicgb25DbGljaz17aGFuZGxlUm9sbH0+Um9sbCB0aGUgRGljZTwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDpcbiAgICAgICAgICBudWxsfVxuICAgICAgICB7dG90YWwgIT09IG51bGwgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaWNlLXN1bSc+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdkaWNlLWNlbnRlcic+RWFjaCBSb2xsOjwvaDM+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb2xscyc+XG4gICAgICAgICAgICAgICAge3Nob3cgJiYgaW5kaXZpZHVhbFJvbGxzLm1hcCgocm9sbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8aDIgY2xhc3NOYW1lPXtgcm9sbCBmYWRlLWluIGZhZGUtaW4tZGVsYXktJHtpbmRleCArIDF9YH0ga2V5PXtpbmRleH0+e3JvbGx9PC9oMj5cbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtzaG93ICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmYWRlLWluIGZhZGUtaW4tZGVsYXktJHtpbmRpdmlkdWFsUm9sbHMubGVuZ3RoICsgMX1gfT5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSdkaWNlLWNlbnRlcic+VG90YWw6PC9oMz5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdkaWNlLWNlbnRlcic+e3RvdGFsfTwvaDI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG4gICk7XG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiRGllIiwiRGljZSIsIm51bURpY2UiLCJzZXROdW1EaWNlIiwiZGljZVZhbHVlcyIsInNldERpY2VWYWx1ZXMiLCJBcnJheSIsImZpbGwiLCJpbmRpdmlkdWFsUm9sbHMiLCJzZXRJbmRpdmlkdWxhUm9sbHMiLCJ0b3RhbCIsInNldFRvdGFsIiwic2hvdyIsInNldFNob3ciLCJzYW1lU2lkZXMiLCJzZXRTYW1lU2lkZXMiLCJoYW5kbGVOdW1EaWNlQ2hhbmdlIiwiZSIsIm5ld051bURpY2UiLCJwYXJzZUludCIsInRhcmdldCIsInZhbHVlIiwicHJldlZhbHVlcyIsIm1hcCIsIl8iLCJpbmRleCIsImhhbmRsZURpY2VTaWRlc0NoYW5nZSIsIm5ld0RpY2VWYWx1ZXMiLCJoYW5kbGVSb2xsIiwiY29uc29sZSIsImxvZyIsInNldFRpbWVvdXQiLCJpbmNsdWRlcyIsInJvbGxzIiwidmFsdWVzIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiY2FsY3VsYXRlZFRvdGFsIiwicmVkdWNlIiwic3VtIiwicm9sbCIsImFsZXJ0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJsYWJlbCIsInNlbGVjdCIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJvcHRpb24iLCJkZWZhdWx0IiwibGVuZ3RoIiwib25EaWNlU2lkZXNDaGFuZ2UiLCJidXR0b24iLCJvbkNsaWNrIiwiaDMiLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/dice.jsx\n"));

/***/ })

});