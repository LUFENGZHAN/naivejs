import { h } from 'vue';
import { replaceable } from './replaceable';
export default replaceable('time', h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" },
    h("path", { d: "M256,64C150,64,64,150,64,256s86,192,192,192,192-86,192-192S362,64,256,64Z", style: "\r\n        fill: none;\r\n        stroke: currentColor;\r\n        stroke-miterlimit: 10;\r\n        stroke-width: 32px;\r\n      " }),
    h("polyline", { points: "256 128 256 272 352 272", style: "\r\n        fill: none;\r\n        stroke: currentColor;\r\n        stroke-linecap: round;\r\n        stroke-linejoin: round;\r\n        stroke-width: 32px;\r\n      " })));
