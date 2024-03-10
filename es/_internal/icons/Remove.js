import { h, defineComponent } from 'vue';
export default defineComponent({
    name: 'Remove',
    render() {
        return (h("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" },
            h("line", { x1: "400", y1: "256", x2: "112", y2: "256", style: "\r\n        fill: none;\r\n        stroke: currentColor;\r\n        stroke-linecap: round;\r\n        stroke-linejoin: round;\r\n        stroke-width: 32px;\r\n      " })));
    }
});
