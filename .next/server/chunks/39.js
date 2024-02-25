"use strict";
exports.id = 39;
exports.ids = [39];
exports.modules = {

/***/ 6119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/collectionpro.59693f75.svg","height":2467,"width":3168});

/***/ }),

/***/ 384:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/commit.297ca391.jpg","height":939,"width":1470,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAArQn/xAAdEAEAAgAHAAAAAAAAAAAAAAACAQMABBESISIy/9oACAEBAAE/ALc1LAl1h9q/XMa1vcZx/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQIBAT8Aj//EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAEDAQE/AK//2Q==","blurWidth":8,"blurHeight":5});

/***/ }),

/***/ 337:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
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

/***/ }),

/***/ 428:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _axiosClient_not_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(337);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_axiosClient_not_token__WEBPACK_IMPORTED_MODULE_0__]);
_axiosClient_not_token__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const mailAPI = {
    send_mail: (params)=>{
        const url = "/mail/send_mail";
        return _axiosClient_not_token__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(url, params);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mailAPI);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;