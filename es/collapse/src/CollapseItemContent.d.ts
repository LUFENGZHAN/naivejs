import { type PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    displayDirective: {
        type: PropType<"show" | "if">;
        required: true;
    };
    show: BooleanConstructor;
    clsPrefix: {
        type: StringConstructor;
        required: true;
    };
}, {
    onceTrue: Readonly<import("vue").Ref<boolean>>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    displayDirective: {
        type: PropType<"show" | "if">;
        required: true;
    };
    show: BooleanConstructor;
    clsPrefix: {
        type: StringConstructor;
        required: true;
    };
}>>, {
    show: boolean;
}, {}>;
export default _default;
