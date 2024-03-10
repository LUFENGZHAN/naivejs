import { type PropType } from 'vue';
import type { RenderFilter } from '../interface';
declare const _default: import("vue").DefineComponent<{
    render: {
        type: PropType<RenderFilter>;
        required: true;
    };
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    show: {
        type: BooleanConstructor;
        default: boolean;
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    render: {
        type: PropType<RenderFilter>;
        required: true;
    };
    active: {
        type: BooleanConstructor;
        default: boolean;
    };
    show: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    show: boolean;
    active: boolean;
}, {}>;
export default _default;
