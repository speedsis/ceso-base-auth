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
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./src/pages/login.tsx":
/*!*****************************!*\
  !*** ./src/pages/login.tsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _util_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/cookies */ \"./src/util/cookies.ts\");\n/* harmony import */ var _util_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/http */ \"./src/util/http.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_util_cookies__WEBPACK_IMPORTED_MODULE_3__, _util_http__WEBPACK_IMPORTED_MODULE_4__]);\n([_util_cookies__WEBPACK_IMPORTED_MODULE_3__, _util_http__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n// @flow \n\n\n\n\nconst LoginPage = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    async function onSubmit(event) {\n        event.preventDefault();\n        const email = document.querySelector(\"#username\").value;\n        const password = document.querySelector(\"#password\").value;\n        const { data  } = await _util_http__WEBPACK_IMPORTED_MODULE_4__.http.post(\"auth/signin\", {\n            email,\n            password\n        });\n        console.log(data);\n        (0,_util_cookies__WEBPACK_IMPORTED_MODULE_3__.setCookie)(\"token\", data.token);\n        router.push('/private');\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        method: \"post\",\n        onSubmit: onSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"username\",\n                        children: \"Usu\\xe1rio\"\n                    }, void 0, false, {\n                        fileName: \"/home/node/app/src/pages/login.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        id: \"username\",\n                        name: \"username\"\n                    }, void 0, false, {\n                        fileName: \"/home/node/app/src/pages/login.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/node/app/src/pages/login.tsx\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"password\",\n                        children: \"Senha\"\n                    }, void 0, false, {\n                        fileName: \"/home/node/app/src/pages/login.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        id: \"password\",\n                        name: \"password\"\n                    }, void 0, false, {\n                        fileName: \"/home/node/app/src/pages/login.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/node/app/src/pages/login.tsx\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Login\"\n            }, void 0, false, {\n                fileName: \"/home/node/app/src/pages/login.tsx\",\n                lineNumber: 44,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/node/app/src/pages/login.tsx\",\n        lineNumber: 35,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginPage);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbG9naW4udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxFQUFTO0FBQzhCO0FBQ1Q7QUFDYTtBQUNSO0FBSWpDLEtBQUssQ0FBQ0ksU0FBUyxPQUFTLENBQUM7SUFFdkIsS0FBSyxDQUFDQyxNQUFNLEdBQUdMLHNEQUFTO21CQUVUTSxRQUFRLENBQUNDLEtBQXNCLEVBQUUsQ0FBQztRQUM3Q0EsS0FBSyxDQUFDQyxjQUFjLEVBQUUsQ0FBQztRQUV2QixLQUFLLENBQUNDLEtBQUssR0FBSUMsUUFBUSxDQUFDQyxhQUFhLENBQUMsQ0FBVyxZQUNoREMsS0FBSztRQUNOLEtBQUssQ0FBQ0MsUUFBUSxHQUFJSCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxDQUFXLFlBQy9DQyxLQUFLO1FBR04sS0FBSyxDQUFDLENBQUMsQ0FBQ0UsSUFBSSxFQUFDLENBQUMsR0FBRyxLQUFLLENBQUNYLGlEQUFTLENBQUMsQ0FBYSxjQUFFLENBQUM7WUFBQ00sS0FBSztZQUFFSSxRQUFRO1FBQUMsQ0FBQztRQUVuRUcsT0FBTyxDQUFDQyxHQUFHLENBQUNILElBQUksQ0FBQyxDQUFDO1FBRWxCWix3REFBUyxDQUFDLENBQU8sUUFBRVksSUFBSSxDQUFDSSxLQUFLLENBQUMsQ0FBQztRQUUvQmIsTUFBTSxDQUFDYyxJQUFJLENBQUMsQ0FBVSxVQUFDLENBQUM7SUFFakMsQ0FBQztJQUVBLE1BQU0sNkVBRURDLENBQUk7UUFBQ0MsTUFBTSxFQUFDLENBQU07UUFBQ2YsUUFBUSxFQUFFQSxRQUFROzt3RkFDckNnQixDQUFHOztnR0FDREMsQ0FBSzt3QkFBQ0MsT0FBTyxFQUFDLENBQVU7a0NBQUMsQ0FBTzs7Ozs7O2dHQUNoQ0MsQ0FBSzt3QkFBQ0MsSUFBSSxFQUFDLENBQU07d0JBQUNDLEVBQUUsRUFBQyxDQUFVO3dCQUFDQyxJQUFJLEVBQUMsQ0FBVTs7Ozs7Ozs7Ozs7O3dGQUVqRE4sQ0FBRzs7Z0dBQ0RDLENBQUs7d0JBQUNDLE9BQU8sRUFBQyxDQUFVO2tDQUFDLENBQUs7Ozs7OztnR0FDOUJDLENBQUs7d0JBQUNDLElBQUksRUFBQyxDQUFVO3dCQUFDQyxFQUFFLEVBQUMsQ0FBVTt3QkFBQ0MsSUFBSSxFQUFDLENBQVU7Ozs7Ozs7Ozs7Ozt3RkFFckRDLENBQU07Z0JBQUNILElBQUksRUFBQyxDQUFROzBCQUFDLENBQUs7Ozs7Ozs7Ozs7OztBQUtuQyxDQUFDO0FBRUQsaUVBQWV0QixTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRoLy4vc3JjL3BhZ2VzL2xvZ2luLnRzeD8xMWUxIl0sInNvdXJjZXNDb250ZW50IjpbIlxuLy8gQGZsb3cgXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBzZXRDb29raWUgfSBmcm9tICcuLi91dGlsL2Nvb2tpZXMnO1xuaW1wb3J0IHsgaHR0cCB9IGZyb20gJy4uL3V0aWwvaHR0cCc7XG50eXBlIFByb3BzID0ge1xuICAgIFxufTtcbiAgY29uc3QgTG9naW5QYWdlID0gKCkgPT4ge1xuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBvblN1Ym1pdChldmVudDogUmVhY3QuRm9ybUV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBlbWFpbCA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VzZXJuYW1lXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQpXG4gICAgICAgIC52YWx1ZTtcbiAgICAgICAgY29uc3QgcGFzc3dvcmQgPSAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwYXNzd29yZFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50KVxuICAgICAgICAgICAgLnZhbHVlO1xuXG5cbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgaHR0cC5wb3N0KFwiYXV0aC9zaWduaW5cIiwgeyBlbWFpbCwgcGFzc3dvcmQgfSk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgICAgICAgICBzZXRDb29raWUoXCJ0b2tlblwiLCBkYXRhLnRva2VuKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy9wcml2YXRlJyk7XG4gICAgICAgIFxuICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgIFxuICAgICAgICA8Zm9ybSBtZXRob2Q9XCJwb3N0XCIgb25TdWJtaXQ9e29uU3VibWl0fSAgPlxuICAgICAgICA8ZGl2ICA+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiPlVzdcOhcmlvPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInVzZXJuYW1lXCIgbmFtZT1cInVzZXJuYW1lXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgID5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+U2VuaGE8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBpZD1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkxvZ2luPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgKTtcblxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dpblBhZ2U7Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlJlYWN0Iiwic2V0Q29va2llIiwiaHR0cCIsIkxvZ2luUGFnZSIsInJvdXRlciIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImVtYWlsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidmFsdWUiLCJwYXNzd29yZCIsImRhdGEiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsInRva2VuIiwicHVzaCIsImZvcm0iLCJtZXRob2QiLCJkaXYiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm5hbWUiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/login.tsx\n");

/***/ }),

/***/ "./src/util/cookies.ts":
/*!*****************************!*\
  !*** ./src/util/cookies.ts ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"parseCookies\": () => (/* binding */ parseCookies),\n/* harmony export */   \"setCookie\": () => (/* binding */ setCookie),\n/* harmony export */   \"getCookie\": () => (/* binding */ getCookie)\n/* harmony export */ });\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookie */ \"cookie\");\n/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_1__]);\njs_cookie__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nfunction parseCookies(req) {\n    if (!req || !req.headers) {\n        return {};\n    }\n    return cookie__WEBPACK_IMPORTED_MODULE_0___default().parse(req.headers.cookie || \"\");\n}\nfunction setCookie(key, value, options) {\n    js_cookie__WEBPACK_IMPORTED_MODULE_1__[\"default\"].set(key, value, {\n        ...options,\n        secure:  false ? 0 : false\n    });\n}\nfunction getCookie(key) {\n    return js_cookie__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(key);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbC9jb29raWVzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEyQjtBQUNJO0FBRXhCLFNBQVNFLFlBQVksQ0FBQ0MsR0FBUyxFQUFFLENBQUM7SUFDdkMsRUFBRSxHQUFHQSxHQUFHLEtBQUtBLEdBQUcsQ0FBQ0MsT0FBTyxFQUFFLENBQUM7UUFDekIsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxNQUFNLENBQUNKLG1EQUFZLENBQUNHLEdBQUcsQ0FBQ0MsT0FBTyxDQUFDSixNQUFNLElBQUksQ0FBRTtBQUM5QyxDQUFDO0FBRU0sU0FBU00sU0FBUyxDQUN2QkMsR0FBVyxFQUNYQyxLQUFzQixFQUN0QkMsT0FBa0MsRUFDbEMsQ0FBQztJQUNEUixxREFBVyxDQUFDTSxHQUFHLEVBQUVDLEtBQUssRUFBRSxDQUFDO1dBQ3BCQyxPQUFPO1FBQ1ZFLE1BQU0sRUFsQlYsTUFrQmlELEdBQUcsQ0FBSSxHQUFHLEtBQUs7SUFDOUQsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBRU0sU0FBU0MsU0FBUyxDQUFDTCxHQUFXLEVBQUMsQ0FBQztJQUNuQyxNQUFNLENBQUNOLHFEQUFXLENBQUNNLEdBQUc7QUFDMUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2F1dGgvLi9zcmMvdXRpbC9jb29raWVzLnRzP2I3YWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvb2tpZSBmcm9tIFwiY29va2llXCI7XG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUNvb2tpZXMocmVxPzogYW55KSB7XG4gIGlmICghcmVxIHx8ICFyZXEuaGVhZGVycykge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIHJldHVybiBjb29raWUucGFyc2UocmVxLmhlYWRlcnMuY29va2llIHx8IFwiXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Q29va2llKFxuICBrZXk6IHN0cmluZyxcbiAgdmFsdWU6IHN0cmluZyB8IG9iamVjdCxcbiAgb3B0aW9ucz86IENvb2tpZXMuQ29va2llQXR0cmlidXRlc1xuKSB7XG4gIENvb2tpZXMuc2V0KGtleSwgdmFsdWUsIHtcbiAgICAuLi5vcHRpb25zLFxuICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gdHJ1ZSA6IGZhbHNlLFxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvb2tpZShrZXk6IHN0cmluZyl7XG4gICAgcmV0dXJuIENvb2tpZXMuZ2V0KGtleSk7XG59Il0sIm5hbWVzIjpbImNvb2tpZSIsIkNvb2tpZXMiLCJwYXJzZUNvb2tpZXMiLCJyZXEiLCJoZWFkZXJzIiwicGFyc2UiLCJzZXRDb29raWUiLCJrZXkiLCJ2YWx1ZSIsIm9wdGlvbnMiLCJzZXQiLCJzZWN1cmUiLCJnZXRDb29raWUiLCJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/util/cookies.ts\n");

/***/ }),

/***/ "./src/util/http.ts":
/*!**************************!*\
  !*** ./src/util/http.ts ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"http\": () => (/* binding */ http)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cookies */ \"./src/util/cookies.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_cookies__WEBPACK_IMPORTED_MODULE_1__]);\n_cookies__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst http = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: \"http://159.65.235.241:3000\"\n});\nhttp.interceptors.request.use((request)=>{\n    if (true) {\n        return request;\n    }\n    const token = (0,_cookies__WEBPACK_IMPORTED_MODULE_1__.getCookie)(\"token\");\n    if (token) {\n        request.headers[\"Authorization\"] = `Bearer ${token}`;\n    }\n    return request;\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbC9odHRwLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBeUI7QUFDWTtBQUU5QixLQUFLLENBQUNFLElBQUksR0FBR0YsbURBQVksQ0FBQyxDQUFDO0lBQ2hDSSxPQUFPLEVBQUUsQ0FBNEI7QUFDdkMsQ0FBQztBQUVERixJQUFJLENBQUNHLFlBQVksQ0FBQ0MsT0FBTyxDQUFDQyxHQUFHLEVBQUVELE9BQU8sR0FBSyxDQUFDO0lBQzFDLEVBQUUsRUFBRSxJQUFnQixFQUFFLENBQUM7UUFDckIsTUFBTSxDQUFDQSxPQUFPO0lBQ2hCLENBQUM7SUFFRCxLQUFLLENBQUNJLEtBQUssR0FBR1QsbURBQVMsQ0FBQyxDQUFPO0lBRS9CLEVBQUUsRUFBRVMsS0FBSyxFQUFFLENBQUM7UUFDVkosT0FBTyxDQUFDSyxPQUFPLENBQUMsQ0FBZSxtQkFBSyxPQUFPLEVBQUVELEtBQUssRUFBRSxDQUFDO0lBQ3ZELENBQUM7SUFFRCxNQUFNLENBQUNKLE9BQU87QUFDaEIsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRoLy4vc3JjL3V0aWwvaHR0cC50cz9mODJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gXCIuL2Nvb2tpZXNcIjtcblxuZXhwb3J0IGNvbnN0IGh0dHAgPSBheGlvcy5jcmVhdGUoe1xuICBiYXNlVVJMOiBcImh0dHA6Ly8xNTkuNjUuMjM1LjI0MTozMDAwXCIsXG59KTtcblxuaHR0cC5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoKHJlcXVlc3QpID0+IHtcbiAgaWYgKCFwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICByZXR1cm4gcmVxdWVzdDtcbiAgfVxuICBcbiAgY29uc3QgdG9rZW4gPSBnZXRDb29raWUoXCJ0b2tlblwiKTtcblxuICBpZiAodG9rZW4pIHtcbiAgICByZXF1ZXN0LmhlYWRlcnNbXCJBdXRob3JpemF0aW9uXCJdID0gYEJlYXJlciAke3Rva2VufWA7XG4gIH1cblxuICByZXR1cm4gcmVxdWVzdDtcbn0pOyJdLCJuYW1lcyI6WyJheGlvcyIsImdldENvb2tpZSIsImh0dHAiLCJjcmVhdGUiLCJiYXNlVVJMIiwiaW50ZXJjZXB0b3JzIiwicmVxdWVzdCIsInVzZSIsInByb2Nlc3MiLCJicm93c2VyIiwidG9rZW4iLCJoZWFkZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/util/http.ts\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/login.tsx"));
module.exports = __webpack_exports__;

})();