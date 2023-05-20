"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/NavBar.jsx":
/*!*******************************!*\
  !*** ./components/NavBar.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NavBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction NavBar() {\n    _s();\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    console.log(\"session: \", session);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"nav-bar\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                onClick: ()=>{\n                    router.push(\"/\");\n                },\n                children: \" Total Party Wipeboard\"\n            }, void 0, false, {\n                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/components/NavBar.jsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                onClick: ()=>{\n                    router.push(\"/party-list\");\n                },\n                children: \"Parties\"\n            }, void 0, false, {\n                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/components/NavBar.jsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                onClick: ()=>{\n                    router.push(\"/monsters\");\n                },\n                children: \"Monsters\"\n            }, void 0, false, {\n                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/components/NavBar.jsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            session ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)(),\n                children: \"Logout\"\n            }, void 0, false, {\n                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/components/NavBar.jsx\",\n                lineNumber: 17,\n                columnNumber: 18\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                onClick: ()=>{\n                    router.push(\"/signin\");\n                },\n                children: \"Sign In\"\n            }, void 0, false, {\n                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/components/NavBar.jsx\",\n                lineNumber: 17,\n                columnNumber: 62\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/components/NavBar.jsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n_s(NavBar, \"xwQvZTIDPY4aHyS8h9XgPdunGG8=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession,\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = NavBar;\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdkJhci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDeUI7QUFDZDtBQUV6QixTQUFTSSxTQUFTOztJQUMvQixNQUFNLEVBQUVDLE1BQU1DLFFBQU8sRUFBRSxHQUFHTCwyREFBVUE7SUFFcENNLFFBQVFDLEdBQUcsQ0FBQyxhQUFhRjtJQUV6QixNQUFNRyxTQUFTTixzREFBU0E7SUFFeEIscUJBQ0UsOERBQUNPO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0MsU0FBUyxJQUFNO29CQUFFSixPQUFPSyxJQUFJLENBQUM7Z0JBQUs7MEJBQUk7Ozs7OzswQkFDMUMsOERBQUNGO2dCQUFHQyxTQUFTLElBQU07b0JBQUVKLE9BQU9LLElBQUksQ0FBQztnQkFBZTswQkFBRzs7Ozs7OzBCQUNuRCw4REFBQ0Y7Z0JBQUdDLFNBQVMsSUFBTTtvQkFBRUosT0FBT0ssSUFBSSxDQUFDO2dCQUFhOzBCQUFHOzs7Ozs7WUFDaERSLHdCQUFVLDhEQUFDTTtnQkFBR0MsU0FBUyxJQUFNWCx3REFBT0E7MEJBQUk7Ozs7O3FDQUFjLDhEQUFDVTtnQkFBR0MsU0FBUyxJQUFNO29CQUFFSixPQUFPSyxJQUFJLENBQUM7Z0JBQVc7MEJBQUc7Ozs7O29CQUFZOzs7Ozs7O0FBR3hILENBQUM7R0FmdUJWOztRQUNJSCx1REFBVUE7UUFJckJFLGtEQUFTQTs7O0tBTEZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2QmFyLmpzeD9mYjFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VTZXNzaW9uLCBzaWduT3V0IH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2QmFyKCkge1xuICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKTtcblxuICBjb25zb2xlLmxvZygnc2Vzc2lvbjogJywgc2Vzc2lvbik7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2LWJhcic+XG4gICAgICA8aDQgb25DbGljaz17KCkgPT4geyByb3V0ZXIucHVzaChcIi9cIikgfX0gPiBUb3RhbCBQYXJ0eSBXaXBlYm9hcmQ8L2g0ID5cbiAgICAgIDxoNCBvbkNsaWNrPXsoKSA9PiB7IHJvdXRlci5wdXNoKFwiL3BhcnR5LWxpc3RcIikgfX0+UGFydGllczwvaDQ+XG4gICAgICA8aDQgb25DbGljaz17KCkgPT4geyByb3V0ZXIucHVzaChcIi9tb25zdGVyc1wiKSB9fT5Nb25zdGVyczwvaDQ+XG4gICAgICB7c2Vzc2lvbiA/IDxoNCBvbkNsaWNrPXsoKSA9PiBzaWduT3V0KCl9PkxvZ291dDwvaDQ+IDogPGg0IG9uQ2xpY2s9eygpID0+IHsgcm91dGVyLnB1c2goXCIvc2lnbmluXCIpIH19PlNpZ24gSW48L2g0Pn1cbiAgICA8L2Rpdj5cbiAgKVxufSJdLCJuYW1lcyI6WyJMaW5rIiwidXNlU2Vzc2lvbiIsInNpZ25PdXQiLCJ1c2VSb3V0ZXIiLCJOYXZCYXIiLCJkYXRhIiwic2Vzc2lvbiIsImNvbnNvbGUiLCJsb2ciLCJyb3V0ZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJoNCIsIm9uQ2xpY2siLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NavBar.jsx\n"));

/***/ })

});