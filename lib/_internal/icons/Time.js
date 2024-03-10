"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = require("vue");
const replaceable_1 = require("./replaceable");
exports.default = (0, replaceable_1.replaceable)('time', (0, vue_1.h)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" },
    (0, vue_1.h)("path", { d: "M256,64C150,64,64,150,64,256s86,192,192,192,192-86,192-192S362,64,256,64Z", style: "\r\n        fill: none;\r\n        stroke: currentColor;\r\n        stroke-miterlimit: 10;\r\n        stroke-width: 32px;\r\n      " }),
    (0, vue_1.h)("polyline", { points: "256 128 256 272 352 272", style: "\r\n        fill: none;\r\n        stroke: currentColor;\r\n        stroke-linecap: round;\r\n        stroke-linejoin: round;\r\n        stroke-width: 32px;\r\n      " })));
