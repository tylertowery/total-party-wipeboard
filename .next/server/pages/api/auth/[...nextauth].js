"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst authOptions = {\n    // Configure one or more authentication providers\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({\n            name: \"credentials\",\n            credentials: {\n                username: {\n                    label: \"Username\",\n                    placeholder: \"johnthebarbarian\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            authorize: (credentials)=>{\n                if (credentials.username == \"tyler\" && credentials.password == \"test\") {\n                    return {\n                        id: 2,\n                        name: \"tyler\",\n                        email: \"tyler@tpw.com\"\n                    };\n                }\n                return null;\n            }\n        })\n    ],\n    callbacks: {\n        jwt: async ({ token , user  })=>{\n            if (user) {\n                token.id = user.id;\n            }\n            return token;\n        },\n        session: ({ session , token  })=>{\n            if (token) {\n                session.id = token.id;\n            }\n            return session;\n        }\n    },\n    secret: \"test\",\n    jwt: {\n        secret: \"test\",\n        encryption: true\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFnQztBQUNnQztBQUV6RCxNQUFNRSxjQUFjO0lBQ3pCLGlEQUFpRDtJQUNqREMsV0FBVztRQUNURixzRUFBa0JBLENBQUM7WUFDakJHLE1BQU07WUFDTkMsYUFBYTtnQkFDWEMsVUFBVTtvQkFBRUMsT0FBTztvQkFBWUMsYUFBYTtnQkFBbUI7Z0JBQy9EQyxVQUFVO29CQUFFRixPQUFPO29CQUFZRyxNQUFNO2dCQUFXO1lBQ2xEO1lBQ0FDLFdBQVcsQ0FBQ04sY0FBZ0I7Z0JBQzFCLElBQUlBLFlBQVlDLFFBQVEsSUFBSSxXQUFXRCxZQUFZSSxRQUFRLElBQUksUUFBUTtvQkFDckUsT0FBTzt3QkFDTEcsSUFBSTt3QkFDSlIsTUFBTTt3QkFDTlMsT0FBTztvQkFDVDtnQkFDRixDQUFDO2dCQUNELE9BQU8sSUFBSTtZQUNiO1FBQ0Y7S0FFRDtJQUNEQyxXQUFXO1FBQ1RDLEtBQUssT0FBTyxFQUFFQyxNQUFLLEVBQUVDLEtBQUksRUFBRSxHQUFLO1lBQzlCLElBQUlBLE1BQU07Z0JBQ1JELE1BQU1KLEVBQUUsR0FBR0ssS0FBS0wsRUFBRTtZQUNwQixDQUFDO1lBQ0QsT0FBT0k7UUFDVDtRQUNBRSxTQUFTLENBQUMsRUFBRUEsUUFBTyxFQUFFRixNQUFLLEVBQUUsR0FBSztZQUMvQixJQUFJQSxPQUFPO2dCQUNURSxRQUFRTixFQUFFLEdBQUdJLE1BQU1KLEVBQUU7WUFDdkIsQ0FBQztZQUNELE9BQU9NO1FBQ1Q7SUFDRjtJQUNBQyxRQUFRO0lBQ1JKLEtBQUs7UUFDSEksUUFBUTtRQUNSQyxZQUFZLElBQUk7SUFDbEI7QUFDRixFQUFDO0FBRUQsaUVBQWVwQixnREFBUUEsQ0FBQ0UsWUFBWUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvdGFscGFydHl3aXBlYm9hcmQvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIlxuaW1wb3J0IENyZWRlbnRpYWxQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiXG5cbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9ucyA9IHtcbiAgLy8gQ29uZmlndXJlIG9uZSBvciBtb3JlIGF1dGhlbnRpY2F0aW9uIHByb3ZpZGVyc1xuICBwcm92aWRlcnM6IFtcbiAgICBDcmVkZW50aWFsUHJvdmlkZXIoe1xuICAgICAgbmFtZTogXCJjcmVkZW50aWFsc1wiLFxuICAgICAgY3JlZGVudGlhbHM6IHtcbiAgICAgICAgdXNlcm5hbWU6IHsgbGFiZWw6ICdVc2VybmFtZScsIHBsYWNlaG9sZGVyOiAnam9obnRoZWJhcmJhcmlhbicgfSxcbiAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6ICdQYXNzd29yZCcsIHR5cGU6ICdwYXNzd29yZCcgfSxcbiAgICAgIH0sXG4gICAgICBhdXRob3JpemU6IChjcmVkZW50aWFscykgPT4ge1xuICAgICAgICBpZiAoY3JlZGVudGlhbHMudXNlcm5hbWUgPT0gJ3R5bGVyJyAmJiBjcmVkZW50aWFscy5wYXNzd29yZCA9PSAndGVzdCcpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICBuYW1lOiAndHlsZXInLFxuICAgICAgICAgICAgZW1haWw6ICd0eWxlckB0cHcuY29tJ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0sXG4gICAgfSksXG4gICAgLy8gLi4uYWRkIG1vcmUgcHJvdmlkZXJzIGhlcmVcbiAgXSxcbiAgY2FsbGJhY2tzOiB7XG4gICAgand0OiBhc3luYyAoeyB0b2tlbiwgdXNlciB9KSA9PiB7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICB0b2tlbi5pZCA9IHVzZXIuaWQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gdG9rZW47XG4gICAgfSxcbiAgICBzZXNzaW9uOiAoeyBzZXNzaW9uLCB0b2tlbiB9KSA9PiB7XG4gICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgc2Vzc2lvbi5pZCA9IHRva2VuLmlkO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgfSxcbiAgfSxcbiAgc2VjcmV0OiAndGVzdCcsXG4gIGp3dDoge1xuICAgIHNlY3JldDogJ3Rlc3QnLFxuICAgIGVuY3J5cHRpb246IHRydWVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aChhdXRoT3B0aW9ucykiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJDcmVkZW50aWFsUHJvdmlkZXIiLCJhdXRoT3B0aW9ucyIsInByb3ZpZGVycyIsIm5hbWUiLCJjcmVkZW50aWFscyIsInVzZXJuYW1lIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsInBhc3N3b3JkIiwidHlwZSIsImF1dGhvcml6ZSIsImlkIiwiZW1haWwiLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsInVzZXIiLCJzZXNzaW9uIiwic2VjcmV0IiwiZW5jcnlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();