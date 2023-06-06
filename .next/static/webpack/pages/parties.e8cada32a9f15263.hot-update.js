"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/parties",{

/***/ "./pages/parties.jsx":
/*!***************************!*\
  !*** ./pages/parties.jsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Parties; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/context/AuthContext */ \"./lib/context/AuthContext.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _components_party__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/party */ \"./components/party.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Parties(param) {\n    let { router  } = param;\n    _s();\n    // placeholder parties state\n    const [parties, setParties] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const { user  } = (0,_lib_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuthContext)();\n    const handleClick = ()=>{\n        console.log(user);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const fetchParties = async (userEmail)=>{\n            const partiesCollectionRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(db, \"parties\");\n            const partiesQuery = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.query)(partiesCollectionRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.where)(\"dungeonMaster\" == userEmail));\n            try {\n                const partiesSnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDocs)(partiesQuery);\n                if (!partiesSnapshot.empty) {\n                    const partiesData = partiesSnapshot.docs.map((doc)=>doc.data());\n                    setParties(partiesData);\n                } else {\n                    console.log(\"no parties\");\n                }\n            } catch (error) {\n                alert(error.message);\n            }\n        };\n        const userEmail = user.email;\n        fetchParties(userEmail);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                onClick: handleClick,\n                children: \"PARTIES\"\n            }, void 0, false, {\n                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/parties.jsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: parties.map((party)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_party__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        party: party\n                    }, party, false, {\n                        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/parties.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 18\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/parties.jsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    onClick: ()=>{\n                        router.push(\"/create-party\");\n                    },\n                    children: \"Create a new party\"\n                }, void 0, false, {\n                    fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/parties.jsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/parties.jsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Parties, \"e9hYF6MucWsGMtomrU8anedOypM=\", false, function() {\n    return [\n        _lib_context_AuthContext__WEBPACK_IMPORTED_MODULE_2__.useAuthContext\n    ];\n});\n_c = Parties;\nvar _c;\n$RefreshReg$(_c, \"Parties\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wYXJ0aWVzLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDK0I7QUFDaEI7QUFDMkI7QUFDL0I7QUFFekIsU0FBU1MsUUFBUSxLQUFVO1FBQVYsRUFBRUMsT0FBTSxFQUFFLEdBQVY7O0lBQzlCLDRCQUE0QjtJQUM1QixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1YsK0NBQVFBLENBQUMsRUFBRTtJQUV6QyxNQUFNLEVBQUVXLEtBQUksRUFBRSxHQUFHWix3RUFBY0E7SUFFL0IsTUFBTWEsY0FBYztRQUNsQkMsUUFBUUMsSUFBSUg7SUFDZDtJQUVBVixnREFBU0EsQ0FBQztRQUNSLE1BQU1jLGVBQWUsT0FBT0M7WUFDMUIsTUFBTUMsdUJBQXVCZiw4REFBVUEsQ0FBQ2dCLElBQUk7WUFDNUMsTUFBTUMsZUFBZWhCLHlEQUFLQSxDQUFDYyxzQkFBc0JiLHlEQUFLQSxDQUFDLG1CQUFtQlk7WUFFMUUsSUFBSTtnQkFDRixNQUFNSSxrQkFBa0IsTUFBTWYsMkRBQU9BLENBQUNjO2dCQUV0QyxJQUFJLENBQUNDLGdCQUFnQkMsT0FBTztvQkFDMUIsTUFBTUMsY0FBY0YsZ0JBQWdCRyxLQUFLQyxJQUFJLENBQUNDLE1BQVFBLElBQUlDO29CQUMxRGhCLFdBQVdZO2dCQUNiLE9BQU87b0JBQ0xULFFBQVFDLElBQUk7Z0JBQ2Q7WUFDRixFQUFFLE9BQU9hLE9BQU87Z0JBQ2RDLE1BQU1ELE1BQU1FO1lBQ2Q7UUFDRjtRQUVBLE1BQU1iLFlBQVlMLEtBQUttQjtRQUV2QmYsYUFBYUM7SUFDZixHQUFHLEVBQUU7SUFFTCxxQkFDRTs7MEJBQ0UsOERBQUNlO2dCQUFHQyxTQUFTcEI7MEJBQWE7Ozs7OzswQkFDMUIsOERBQUNxQjswQkFDRXhCLFFBQVFlLElBQUksQ0FBQ1U7b0JBQ1oscUJBQU8sOERBQUM1Qix5REFBS0E7d0JBQWE0QixPQUFPQTt1QkFBZEE7Ozs7O2dCQUNyQjs7Ozs7OzBCQUVGLDhEQUFDRDswQkFDQyw0RUFBQ0U7b0JBQUVILFNBQVM7d0JBQVF4QixPQUFPNEIsS0FBSztvQkFBaUI7OEJBQUc7Ozs7Ozs7Ozs7Ozs7QUFJNUQ7R0EvQ3dCN0I7O1FBSUxSLG9FQUFjQTs7O0tBSlRRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3BhcnRpZXMuanN4P2IzNWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZUF1dGhDb250ZXh0IH0gZnJvbSAnLi4vbGliL2NvbnRleHQvQXV0aENvbnRleHQnO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbGxlY3Rpb24sIHF1ZXJ5LCB3aGVyZSwgZ2V0RG9jcyB9IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XG5pbXBvcnQgUGFydHkgZnJvbSAnLi4vY29tcG9uZW50cy9wYXJ0eSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhcnRpZXMoeyByb3V0ZXIgfSkge1xuICAvLyBwbGFjZWhvbGRlciBwYXJ0aWVzIHN0YXRlXG4gIGNvbnN0IFtwYXJ0aWVzLCBzZXRQYXJ0aWVzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCB7IHVzZXIgfSA9IHVzZUF1dGhDb250ZXh0KCk7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2codXNlcik7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoUGFydGllcyA9IGFzeW5jICh1c2VyRW1haWwpID0+IHtcbiAgICAgIGNvbnN0IHBhcnRpZXNDb2xsZWN0aW9uUmVmID0gY29sbGVjdGlvbihkYiwgJ3BhcnRpZXMnKTtcbiAgICAgIGNvbnN0IHBhcnRpZXNRdWVyeSA9IHF1ZXJ5KHBhcnRpZXNDb2xsZWN0aW9uUmVmLCB3aGVyZSgnZHVuZ2Vvbk1hc3RlcicgPT0gdXNlckVtYWlsKSk7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHBhcnRpZXNTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MocGFydGllc1F1ZXJ5KVxuXG4gICAgICAgIGlmICghcGFydGllc1NuYXBzaG90LmVtcHR5KSB7XG4gICAgICAgICAgY29uc3QgcGFydGllc0RhdGEgPSBwYXJ0aWVzU25hcHNob3QuZG9jcy5tYXAoKGRvYykgPT4gZG9jLmRhdGEoKSk7XG4gICAgICAgICAgc2V0UGFydGllcyhwYXJ0aWVzRGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ25vIHBhcnRpZXMnKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgYWxlcnQoZXJyb3IubWVzc2FnZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgdXNlckVtYWlsID0gdXNlci5lbWFpbDtcblxuICAgIGZldGNoUGFydGllcyh1c2VyRW1haWwpO1xuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDEgb25DbGljaz17aGFuZGxlQ2xpY2t9PlBBUlRJRVM8L2gxPlxuICAgICAgPGRpdj5cbiAgICAgICAge3BhcnRpZXMubWFwKChwYXJ0eSkgPT4ge1xuICAgICAgICAgIHJldHVybiA8UGFydHkga2V5PXtwYXJ0eX0gcGFydHk9e3BhcnR5fSAvPlxuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPHAgb25DbGljaz17KCkgPT4geyByb3V0ZXIucHVzaCgnL2NyZWF0ZS1wYXJ0eScpIH19PkNyZWF0ZSBhIG5ldyBwYXJ0eTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59OyJdLCJuYW1lcyI6WyJMaW5rIiwidXNlQXV0aENvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNvbGxlY3Rpb24iLCJxdWVyeSIsIndoZXJlIiwiZ2V0RG9jcyIsIlBhcnR5IiwiUGFydGllcyIsInJvdXRlciIsInBhcnRpZXMiLCJzZXRQYXJ0aWVzIiwidXNlciIsImhhbmRsZUNsaWNrIiwiY29uc29sZSIsImxvZyIsImZldGNoUGFydGllcyIsInVzZXJFbWFpbCIsInBhcnRpZXNDb2xsZWN0aW9uUmVmIiwiZGIiLCJwYXJ0aWVzUXVlcnkiLCJwYXJ0aWVzU25hcHNob3QiLCJlbXB0eSIsInBhcnRpZXNEYXRhIiwiZG9jcyIsIm1hcCIsImRvYyIsImRhdGEiLCJlcnJvciIsImFsZXJ0IiwibWVzc2FnZSIsImVtYWlsIiwiaDEiLCJvbkNsaWNrIiwiZGl2IiwicGFydHkiLCJwIiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/parties.jsx\n"));

/***/ })

});