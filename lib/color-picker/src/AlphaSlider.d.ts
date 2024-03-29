import { type PropType } from 'vue';
import { type RGBA } from 'seemly';
declare const _default: import("vue").DefineComponent<{
    clsPrefix: {
        type: StringConstructor;
        required: true;
    };
    rgba: {
        type: PropType<RGBA | null>;
        default: null;
    };
    alpha: {
        type: NumberConstructor;
        default: number;
    };
    onUpdateAlpha: {
        type: PropType<(value: number) => void>;
        required: true;
    };
    onComplete: PropType<() => void>;
}, {
    railRef: import("vue").Ref<HTMLElement | null>;
    railBackgroundImage: import("vue").ComputedRef<string>;
    handleMouseDown: (e: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    clsPrefix: {
        type: StringConstructor;
        required: true;
    };
    rgba: {
        type: PropType<RGBA | null>;
        default: null;
    };
    alpha: {
        type: NumberConstructor;
        default: number;
    };
    onUpdateAlpha: {
        type: PropType<(value: number) => void>;
        required: true;
    };
    onComplete: PropType<() => void>;
}>>, {
    alpha: number;
    rgba: RGBA | null;
}, {}>;
export default _default;
