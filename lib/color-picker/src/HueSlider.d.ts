import { type PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    clsPrefix: {
        type: StringConstructor;
        required: true;
    };
    hue: {
        type: NumberConstructor;
        required: true;
    };
    onUpdateHue: {
        type: PropType<(value: number) => void>;
        required: true;
    };
    onComplete: PropType<() => void>;
}, {
    railRef: import("vue").Ref<HTMLElement | null>;
    handleMouseDown: (e: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    clsPrefix: {
        type: StringConstructor;
        required: true;
    };
    hue: {
        type: NumberConstructor;
        required: true;
    };
    onUpdateHue: {
        type: PropType<(value: number) => void>;
        required: true;
    };
    onComplete: PropType<() => void>;
}>>, {}, {}>;
export default _default;
