"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/create-party",{

/***/ "./pages/create-party.jsx":
/*!********************************!*\
  !*** ./pages/create-party.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CreateParty; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_member__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/member */ \"./components/member.jsx\");\n/* harmony import */ var _lib_firebase_setup_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/firebase_setup/config */ \"./lib/firebase_setup/config.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction CreateParty() {\n    _s();\n    const [members, setMembers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleInputChange = (event)=>{\n        const { name , value  } = event.target;\n        setMembers((prevMembers)=>{\n            const updatedMembers = [\n                ...prevMembers\n            ];\n            updatedMembers[index][name] = value;\n            return updatedMembers;\n        });\n    };\n    const handleAddMember = ()=>{\n        setMembers(()=>[\n                ...members,\n                {\n                    playerName: \"\",\n                    characterName: \"\",\n                    characterClass: \"\"\n                }\n            ]);\n    };\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        console.log(\"submitting party\");\n        const batch = _lib_firebase_setup_config__WEBPACK_IMPORTED_MODULE_3__.db.batch();\n        members.forEach((member, index1)=>{\n            const { playerName , characterName , characterClass  } = member;\n            console.log(\"Player: \".concat(playerName, \", Character: \").concat(characterName, \", Class: \").concat(characterClass));\n        });\n        setMembers([]);\n    // batch.commit()\n    //   .then(() => {\n    //     console.log('Form sabed to Firebase');\n    //     setMembers([]);\n    //     memberRefs.current = [];\n    //     campaignNameRef.current.value = '';\n    //     partyNameRef.current.value = '';\n    //     characterClass\n    //   })\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"CREATE A PARTY\"\n            }, void 0, false, {\n                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/create-party.jsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"campaign-name\",\n                        children: \"Campaign Name\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/create-party.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"campaign-name\",\n                        placeholder: \"Awakening Grog the Tyrant\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/create-party.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"party-name\",\n                        children: \"Party Name\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/create-party.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"party-name\",\n                        placeholder: \"The Goonies\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/create-party.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    members.map((member, index1)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_member__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            index: index1,\n                            member: member,\n                            onInputChange: handleInputChange\n                        }, index1, false, {\n                            fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/create-party.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 18\n                        }, this);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleAddMember,\n                        type: \"button\",\n                        children: \"Add a member\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/create-party.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Create Party\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/create-party.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tylertowery/Desktop/HackReactor/afterHR/TotalPartyWipeboard/total-party-wipeboard/pages/create-party.jsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(CreateParty, \"mlZyV78bBQqtZFWVSkD+zWf8DY8=\");\n_c = CreateParty;\nvar _c;\n$RefreshReg$(_c, \"CreateParty\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jcmVhdGUtcGFydHkuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF5QztBQUNDO0FBQ1E7QUFFbkMsU0FBU0k7O0lBQ3RCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHTiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRXpDLE1BQU1PLG9CQUFvQixDQUFDQztRQUN6QixNQUFNLEVBQUVDLEtBQUksRUFBRUMsTUFBSyxFQUFFLEdBQUdGLE1BQU1HO1FBQzlCTCxXQUFXLENBQUNNO1lBQ1YsTUFBTUMsaUJBQWlCO21CQUFJRDthQUFZO1lBQ3ZDQyxjQUFjLENBQUNDLE1BQU0sQ0FBQ0wsS0FBSyxHQUFHQztZQUM5QixPQUFPRztRQUNUO0lBQ0Y7SUFFQSxNQUFNRSxrQkFBa0I7UUFDdEJULFdBQVcsSUFBTTttQkFBSUQ7Z0JBQVM7b0JBQUVXLFlBQVk7b0JBQUlDLGVBQWU7b0JBQUlDLGdCQUFnQjtnQkFBRzthQUFFO0lBQzFGO0lBRUEsTUFBTUMsZUFBZSxDQUFDWDtRQUNwQkEsTUFBTVk7UUFDTkMsUUFBUUMsSUFBSTtRQUNaLE1BQU1DLFFBQVFwQixnRUFBUW9CO1FBRXRCbEIsUUFBUW1CLFFBQVEsQ0FBQ0MsUUFBUVg7WUFDdkIsTUFBTSxFQUFFRSxXQUFVLEVBQUVDLGNBQWEsRUFBRUMsZUFBYyxFQUFFLEdBQUdPO1lBQ3RESixRQUFRQyxJQUFJLFdBQXFDTCxPQUExQkQsWUFBVyxpQkFBd0NFLE9BQXpCRCxlQUFjLGFBQTBCLE9BQWZDO1FBQzVFO1FBRUFaLFdBQVcsRUFBRTtJQUViLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsNkNBQTZDO0lBQzdDLHNCQUFzQjtJQUN0QiwrQkFBK0I7SUFDL0IsMENBQTBDO0lBQzFDLHVDQUF1QztJQUN2QyxxQkFBcUI7SUFDckIsT0FBTztJQUNUO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDb0I7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7Z0JBQUtDLFVBQVVUOztrQ0FDZCw4REFBQ1U7d0JBQU1DLFNBQVE7a0NBQWdCOzs7Ozs7a0NBQy9CLDhEQUFDQzt3QkFBTUMsSUFBRzt3QkFBZ0JDLGFBQVk7Ozs7OztrQ0FDdEMsOERBQUNKO3dCQUFNQyxTQUFRO2tDQUFhOzs7Ozs7a0NBQzVCLDhEQUFDQzt3QkFBTUMsSUFBRzt3QkFBYUMsYUFBWTs7Ozs7O29CQUNsQzVCLFFBQVE2QixJQUFJLENBQUNULFFBQVFYO3dCQUNwQixxQkFBTyw4REFBQ1osMERBQU1BOzRCQUFhWSxPQUFPQTs0QkFBT1csUUFBUUE7NEJBQVFVLGVBQWU1QjsyQkFBcERPOzs7OztvQkFDdEI7a0NBQ0EsOERBQUNzQjt3QkFBT0MsU0FBU3RCO3dCQUFpQnVCLE1BQUs7a0NBQVM7Ozs7OztrQ0FDaEQsOERBQUNGO3dCQUFPRSxNQUFLO2tDQUFTOzs7Ozs7Ozs7Ozs7OztBQUk5QjtHQXZEd0JsQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jcmVhdGUtcGFydHkuanN4PzM2OGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNZW1iZXIgZnJvbSAnLi4vY29tcG9uZW50cy9tZW1iZXInO1xuaW1wb3J0IHsgZGIgfSBmcm9tICcuLi9saWIvZmlyZWJhc2Vfc2V0dXAvY29uZmlnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlUGFydHkoKSB7XG4gIGNvbnN0IFttZW1iZXJzLCBzZXRNZW1iZXJzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcbiAgICBzZXRNZW1iZXJzKChwcmV2TWVtYmVycykgPT4ge1xuICAgICAgY29uc3QgdXBkYXRlZE1lbWJlcnMgPSBbLi4ucHJldk1lbWJlcnNdO1xuICAgICAgdXBkYXRlZE1lbWJlcnNbaW5kZXhdW25hbWVdID0gdmFsdWU7XG4gICAgICByZXR1cm4gdXBkYXRlZE1lbWJlcnM7XG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUFkZE1lbWJlciA9ICgpID0+IHtcbiAgICBzZXRNZW1iZXJzKCgpID0+IFsuLi5tZW1iZXJzLCB7IHBsYXllck5hbWU6ICcnLCBjaGFyYWN0ZXJOYW1lOiAnJywgY2hhcmFjdGVyQ2xhc3M6ICcnIH1dKTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coJ3N1Ym1pdHRpbmcgcGFydHknKTtcbiAgICBjb25zdCBiYXRjaCA9IGRiLmJhdGNoKCk7XG5cbiAgICBtZW1iZXJzLmZvckVhY2goKG1lbWJlciwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHsgcGxheWVyTmFtZSwgY2hhcmFjdGVyTmFtZSwgY2hhcmFjdGVyQ2xhc3MgfSA9IG1lbWJlcjtcbiAgICAgIGNvbnNvbGUubG9nKGBQbGF5ZXI6ICR7cGxheWVyTmFtZX0sIENoYXJhY3RlcjogJHtjaGFyYWN0ZXJOYW1lfSwgQ2xhc3M6ICR7Y2hhcmFjdGVyQ2xhc3N9YCk7XG4gICAgfSk7XG5cbiAgICBzZXRNZW1iZXJzKFtdKTtcblxuICAgIC8vIGJhdGNoLmNvbW1pdCgpXG4gICAgLy8gICAudGhlbigoKSA9PiB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdGb3JtIHNhYmVkIHRvIEZpcmViYXNlJyk7XG4gICAgLy8gICAgIHNldE1lbWJlcnMoW10pO1xuICAgIC8vICAgICBtZW1iZXJSZWZzLmN1cnJlbnQgPSBbXTtcbiAgICAvLyAgICAgY2FtcGFpZ25OYW1lUmVmLmN1cnJlbnQudmFsdWUgPSAnJztcbiAgICAvLyAgICAgcGFydHlOYW1lUmVmLmN1cnJlbnQudmFsdWUgPSAnJztcbiAgICAvLyAgICAgY2hhcmFjdGVyQ2xhc3NcbiAgICAvLyAgIH0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDE+Q1JFQVRFIEEgUEFSVFk8L2gxPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPSdjYW1wYWlnbi1uYW1lJz5DYW1wYWlnbiBOYW1lPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IGlkPSdjYW1wYWlnbi1uYW1lJyBwbGFjZWhvbGRlcj0nQXdha2VuaW5nIEdyb2cgdGhlIFR5cmFudCc+PC9pbnB1dD5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9J3BhcnR5LW5hbWUnPlBhcnR5IE5hbWU8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgaWQ9J3BhcnR5LW5hbWUnIHBsYWNlaG9sZGVyPSdUaGUgR29vbmllcyc+PC9pbnB1dD5cbiAgICAgICAge21lbWJlcnMubWFwKChtZW1iZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxNZW1iZXIga2V5PXtpbmRleH0gaW5kZXg9e2luZGV4fSBtZW1iZXI9e21lbWJlcn0gb25JbnB1dENoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9IC8+XG4gICAgICAgIH0pfVxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUFkZE1lbWJlcn0gdHlwZT0nYnV0dG9uJz5BZGQgYSBtZW1iZXI8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPkNyZWF0ZSBQYXJ0eTwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvPlxuICApXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlUmVmIiwiTWVtYmVyIiwiZGIiLCJDcmVhdGVQYXJ0eSIsIm1lbWJlcnMiLCJzZXRNZW1iZXJzIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJldmVudCIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsInByZXZNZW1iZXJzIiwidXBkYXRlZE1lbWJlcnMiLCJpbmRleCIsImhhbmRsZUFkZE1lbWJlciIsInBsYXllck5hbWUiLCJjaGFyYWN0ZXJOYW1lIiwiY2hhcmFjdGVyQ2xhc3MiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJiYXRjaCIsImZvckVhY2giLCJtZW1iZXIiLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwiaWQiLCJwbGFjZWhvbGRlciIsIm1hcCIsIm9uSW5wdXRDaGFuZ2UiLCJidXR0b24iLCJvbkNsaWNrIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/create-party.jsx\n"));

/***/ })

});