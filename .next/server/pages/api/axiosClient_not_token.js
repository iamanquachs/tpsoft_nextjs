"use strict";
(() => {
var exports = {};
exports.id = 879;
exports.ids = [879];
exports.modules = {

/***/ 7104:
/***/ ((module) => {

module.exports = require("qs");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 5038:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7104);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const axiosClient_not_token = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: "https://api.duoctaynam.vn/",
    // baseURL: "http://localhost/2023/TPSPharma/TPS_nextjs/Backend",
    paramsSerializer: {
        encode: qs__WEBPACK_IMPORTED_MODULE_1__.parse,
        serialize: qs__WEBPACK_IMPORTED_MODULE_1__.stringify
    }
});
axiosClient_not_token.interceptors.request.use(async (config)=>{
    return config;
});
axiosClient_not_token.interceptors.response.use((response)=>{
    if (response && response.data) {
        return response.data;
    }
    return response;
}, (error)=>{
    throw error;
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axiosClient_not_token);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5038));
module.exports = __webpack_exports__;

})();