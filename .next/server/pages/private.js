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
exports.id = "pages/private";
exports.ids = ["pages/private"];
exports.modules = {

/***/ "./src/hof/withAuth.tsx":
/*!******************************!*\
  !*** ./src/hof/withAuth.tsx ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"withAuth\": () => (/* binding */ withAuth)\n/* harmony export */ });\n/* harmony import */ var _util_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/auth */ \"./src/util/auth.ts\");\n/* harmony import */ var _util_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/cookies */ \"./src/util/cookies.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_util_cookies__WEBPACK_IMPORTED_MODULE_1__]);\n_util_cookies__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nfunction withAuth(func) {\n    return async (ctx)=>{\n        const cookies = (0,_util_cookies__WEBPACK_IMPORTED_MODULE_1__.parseCookies)(ctx.req);\n        if (!cookies.token || (0,_util_auth__WEBPACK_IMPORTED_MODULE_0__.isTokenExpired)(cookies.token)) {\n            return {\n                redirect: {\n                    permanent: false,\n                    destination: \"/login\"\n                }\n            };\n        }\n        const payload = (0,_util_auth__WEBPACK_IMPORTED_MODULE_0__.getPayload)(cookies.token);\n        const result = await func(ctx, cookies, payload);\n        if (\"props\" in result) {\n            result.props = {\n                payload,\n                ...result.props\n            };\n        }\n        return result;\n    };\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9mL3dpdGhBdXRoLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBeUQ7QUFDWDtBQUV2QyxTQUFTRyxRQUFRLENBQUNDLElBQVMsRUFBRSxDQUFDO0lBQ25DLE1BQU0sUUFBUUMsR0FBUSxHQUFLLENBQUM7UUFDMUIsS0FBSyxDQUFDQyxPQUFPLEdBQUdKLDJEQUFZLENBQUNHLEdBQUcsQ0FBQ0UsR0FBRztRQUVwQyxFQUFFLEdBQUdELE9BQU8sQ0FBQ0UsS0FBSyxJQUFJUCwwREFBYyxDQUFDSyxPQUFPLENBQUNFLEtBQUssR0FBRyxDQUFDO1lBQ3BELE1BQU0sQ0FBQyxDQUFDO2dCQUNOQyxRQUFRLEVBQUUsQ0FBQztvQkFDVEMsU0FBUyxFQUFFLEtBQUs7b0JBQ2hCQyxXQUFXLEVBQUUsQ0FBUTtnQkFDdkIsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO1FBRUQsS0FBSyxDQUFDQyxPQUFPLEdBQUdaLHNEQUFVLENBQUNNLE9BQU8sQ0FBQ0UsS0FBSztRQUV4QyxLQUFLLENBQUNLLE1BQU0sR0FBRyxLQUFLLENBQUNULElBQUksQ0FBQ0MsR0FBRyxFQUFFQyxPQUFPLEVBQUVNLE9BQU87UUFDL0MsRUFBRSxFQUFFLENBQU8sVUFBSUMsTUFBTSxFQUFFLENBQUM7WUFDdEJBLE1BQU0sQ0FBQ0MsS0FBSyxHQUFHLENBQUM7Z0JBQ2RGLE9BQU87bUJBQ0pDLE1BQU0sQ0FBQ0MsS0FBSztZQUNqQixDQUFDLENBQUM7UUFDSixDQUFDO1FBRUQsTUFBTSxDQUFDRCxNQUFNO0lBQ2YsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRoLy4vc3JjL2hvZi93aXRoQXV0aC50c3g/NDY4NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRQYXlsb2FkLCBpc1Rva2VuRXhwaXJlZCB9IGZyb20gXCIuLi91dGlsL2F1dGhcIjtcbmltcG9ydCB7IHBhcnNlQ29va2llcyB9IGZyb20gXCIuLi91dGlsL2Nvb2tpZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHdpdGhBdXRoKGZ1bmM6IGFueSkge1xuICByZXR1cm4gYXN5bmMgKGN0eDogYW55KSA9PiB7XG4gICAgY29uc3QgY29va2llcyA9IHBhcnNlQ29va2llcyhjdHgucmVxKTtcblxuICAgIGlmICghY29va2llcy50b2tlbiB8fCBpc1Rva2VuRXhwaXJlZChjb29raWVzLnRva2VuKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcmVkaXJlY3Q6IHtcbiAgICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxuICAgICAgICAgIGRlc3RpbmF0aW9uOiBcIi9sb2dpblwiLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdCBwYXlsb2FkID0gZ2V0UGF5bG9hZChjb29raWVzLnRva2VuKTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZ1bmMoY3R4LCBjb29raWVzLCBwYXlsb2FkKTtcbiAgICBpZiAoXCJwcm9wc1wiIGluIHJlc3VsdCkge1xuICAgICAgcmVzdWx0LnByb3BzID0ge1xuICAgICAgICBwYXlsb2FkLFxuICAgICAgICAuLi5yZXN1bHQucHJvcHMsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59Il0sIm5hbWVzIjpbImdldFBheWxvYWQiLCJpc1Rva2VuRXhwaXJlZCIsInBhcnNlQ29va2llcyIsIndpdGhBdXRoIiwiZnVuYyIsImN0eCIsImNvb2tpZXMiLCJyZXEiLCJ0b2tlbiIsInJlZGlyZWN0IiwicGVybWFuZW50IiwiZGVzdGluYXRpb24iLCJwYXlsb2FkIiwicmVzdWx0IiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hof/withAuth.tsx\n");

/***/ }),

/***/ "./src/pages/private.tsx":
/*!*******************************!*\
  !*** ./src/pages/private.tsx ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hof_withAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hof/withAuth */ \"./src/hof/withAuth.tsx\");\n/* harmony import */ var _util_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/http */ \"./src/util/http.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hof_withAuth__WEBPACK_IMPORTED_MODULE_1__, _util_http__WEBPACK_IMPORTED_MODULE_2__]);\n([_hof_withAuth__WEBPACK_IMPORTED_MODULE_1__, _util_http__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nconst PrivatePage = (props)=>{\n    console.log(props.payload);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \"Pagina privada \",\n            props.name\n        ]\n    }, void 0, true, {\n        fileName: \"/home/node/app/src/pages/private.tsx\",\n        lineNumber: 12,\n        columnNumber: 12\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrivatePage);\nconst getServerSideProps = (0,_hof_withAuth__WEBPACK_IMPORTED_MODULE_1__.withAuth)(async (ctx, cookies, payload)=>{\n    console.log(cookies);\n    const { data  } = await _util_http__WEBPACK_IMPORTED_MODULE_2__.http.get(\"auth/me\", {\n        headers: {\n            Authorization: `Bearer ${cookies.token}`\n        }\n    });\n    return {\n        props: data\n    };\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJpdmF0ZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUMwQztBQUNQO0FBT2pDLEtBQUssQ0FBQ0UsV0FBVyxJQUFnQ0MsS0FBSyxHQUFLLENBQUM7SUFDMURDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLLENBQUNHLE9BQU8sQ0FBQyxDQUFDO0lBQzNCLE1BQU0sNkVBQUVDLENBQUc7O1lBQUMsQ0FBZTtZQUFDSixLQUFLLENBQUNLLElBQUk7Ozs7Ozs7QUFDeEMsQ0FBQztBQUVELGlFQUFlTixXQUFXLEVBQUM7QUFFcEIsS0FBSyxDQUFDTyxrQkFBa0IsR0FBR1QsdURBQVEsUUFDakNVLEdBQVEsRUFBRUMsT0FBWSxFQUFFTCxPQUFZLEdBQUssQ0FBQztJQUM3Q0YsT0FBTyxDQUFDQyxHQUFHLENBQUNNLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZCLEtBQUssQ0FBQyxDQUFDLENBQUNDLElBQUksRUFBQyxDQUFDLEdBQUcsS0FBSyxDQUFDWCxnREFBUSxDQUFDLENBQVMsVUFBRSxDQUFDO1FBQzFDYSxPQUFPLEVBQUUsQ0FBQztZQUNSQyxhQUFhLEdBQUcsT0FBTyxFQUFFSixPQUFPLENBQUNLLEtBQUs7UUFDeEMsQ0FBQztJQUNILENBQUM7SUFDRCxNQUFNLENBQUMsQ0FBQztRQUNOYixLQUFLLEVBQUVTLElBQUk7SUFDYixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2F1dGgvLi9zcmMvcGFnZXMvcHJpdmF0ZS50c3g/ZTc2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyB3aXRoQXV0aCB9IGZyb20gXCIuLi9ob2Yvd2l0aEF1dGhcIjtcbmltcG9ydCB7IGh0dHAgfSBmcm9tIFwiLi4vdXRpbC9odHRwXCI7XG5cbiBpbnRlcmZhY2UgUHJpdmF0ZVBhZ2VQcm9wcyB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHBheWxvYWQ6IGFueTtcbiAgfVxuICBcbiAgY29uc3QgUHJpdmF0ZVBhZ2U6IE5leHRQYWdlPFByaXZhdGVQYWdlUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc29sZS5sb2cocHJvcHMucGF5bG9hZCk7XG4gICAgcmV0dXJuIDxkaXY+UGFnaW5hIHByaXZhZGEge3Byb3BzLm5hbWV9PC9kaXY+O1xuICB9O1xuICBcbiAgZXhwb3J0IGRlZmF1bHQgUHJpdmF0ZVBhZ2U7XG5cbiAgZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdpdGhBdXRoKFxuICAgIGFzeW5jIChjdHg6IGFueSwgY29va2llczogYW55LCBwYXlsb2FkOiBhbnkpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coY29va2llcyk7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGh0dHAuZ2V0KFwiYXV0aC9tZVwiLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Y29va2llcy50b2tlbn1gLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczogZGF0YSxcbiAgICAgIH07XG4gICAgfVxuICApO1xuXG4gIl0sIm5hbWVzIjpbIndpdGhBdXRoIiwiaHR0cCIsIlByaXZhdGVQYWdlIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwicGF5bG9hZCIsImRpdiIsIm5hbWUiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjdHgiLCJjb29raWVzIiwiZGF0YSIsImdldCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidG9rZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/private.tsx\n");

/***/ }),

/***/ "./src/util/auth.ts":
/*!**************************!*\
  !*** ./src/util/auth.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isTokenExpired\": () => (/* binding */ isTokenExpired),\n/* harmony export */   \"getPayload\": () => (/* binding */ getPayload)\n/* harmony export */ });\nfunction isTokenExpired(token) {\n    const payload = getPayload(token);\n    const clockTimestamp = Math.floor(Date.now() / 1000);\n    return clockTimestamp > payload.exp;\n}\nfunction getPayload(token) {\n    return JSON.parse(Buffer.from(token.split(\".\")[1], \"base64\").toString(\"utf8\"));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbC9hdXRoLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sU0FBU0EsY0FBYyxDQUFDQyxLQUFhLEVBQUUsQ0FBQztJQUMzQyxLQUFLLENBQUNDLE9BQU8sR0FBR0MsVUFBVSxDQUFDRixLQUFLO0lBRWhDLEtBQUssQ0FBQ0csY0FBYyxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLEtBQUssSUFBSTtJQUVuRCxNQUFNLENBQUNKLGNBQWMsR0FBR0YsT0FBTyxDQUFDTyxHQUFHO0FBQ3JDLENBQUM7QUFFTSxTQUFTTixVQUFVLENBQUNGLEtBQWEsRUFBRSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1MsSUFBSSxDQUFDQyxLQUFLLENBQ2ZDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDWixLQUFLLENBQUNhLEtBQUssQ0FBQyxDQUFHLElBQUUsQ0FBQyxHQUFHLENBQVEsU0FBRUMsUUFBUSxDQUFDLENBQU07QUFFOUQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2F1dGgvLi9zcmMvdXRpbC9hdXRoLnRzPzNjODEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGlzVG9rZW5FeHBpcmVkKHRva2VuOiBzdHJpbmcpIHtcbiAgICBjb25zdCBwYXlsb2FkID0gZ2V0UGF5bG9hZCh0b2tlbik7XG4gIFxuICAgIGNvbnN0IGNsb2NrVGltZXN0YW1wID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XG4gIFxuICAgIHJldHVybiBjbG9ja1RpbWVzdGFtcCA+IHBheWxvYWQuZXhwO1xuICB9XG4gIFxuICBleHBvcnQgZnVuY3Rpb24gZ2V0UGF5bG9hZCh0b2tlbjogc3RyaW5nKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoXG4gICAgICBCdWZmZXIuZnJvbSh0b2tlbi5zcGxpdChcIi5cIilbMV0sIFwiYmFzZTY0XCIpLnRvU3RyaW5nKFwidXRmOFwiKVxuICAgICk7XG4gIH1cbiAgIl0sIm5hbWVzIjpbImlzVG9rZW5FeHBpcmVkIiwidG9rZW4iLCJwYXlsb2FkIiwiZ2V0UGF5bG9hZCIsImNsb2NrVGltZXN0YW1wIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsImV4cCIsIkpTT04iLCJwYXJzZSIsIkJ1ZmZlciIsImZyb20iLCJzcGxpdCIsInRvU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/util/auth.ts\n");

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
var __webpack_exports__ = (__webpack_exec__("./src/pages/private.tsx"));
module.exports = __webpack_exports__;

})();