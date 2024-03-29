/// <reference types="vue/jsx" />
import { type PropType, type CSSProperties } from 'vue';
import { type Status } from './interface';
declare const _default: import("vue").DefineComponent<{
    clsPrefix: {
        type: StringConstructor;
        required: true;
    };
    percentage: {
        type: NumberConstructor;
        default: number;
    };
    railColor: StringConstructor;
    railStyle: PropType<string | CSSProperties>;
    fillColor: StringConstructor;
    status: {
        type: PropType<Status>;
        required: true;
    };
    indicatorPlacement: {
        type: PropType<"inside" | "outside">;
        required: true;
    };
    indicatorTextColor: StringConstructor;
    unit: {
        type: StringConstructor;
        default: string;
    };
    processing: {
        type: BooleanConstructor;
        required: true;
    };
    showIndicator: {
        type: BooleanConstructor;
        required: true;
    };
    height: (StringConstructor | NumberConstructor)[];
    railBorderRadius: (StringConstructor | NumberConstructor)[];
    fillBorderRadius: (StringConstructor | NumberConstructor)[];
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    clsPrefix: {
        type: StringConstructor;
        required: true;
    };
    percentage: {
        type: NumberConstructor;
        default: number;
    };
    railColor: StringConstructor;
    railStyle: PropType<string | CSSProperties>;
    fillColor: StringConstructor;
    status: {
        type: PropType<Status>;
        required: true;
    };
    indicatorPlacement: {
        type: PropType<"inside" | "outside">;
        required: true;
    };
    indicatorTextColor: StringConstructor;
    unit: {
        type: StringConstructor;
        default: string;
    };
    processing: {
        type: BooleanConstructor;
        required: true;
    };
    showIndicator: {
        type: BooleanConstructor;
        required: true;
    };
    height: (StringConstructor | NumberConstructor)[];
    railBorderRadius: (StringConstructor | NumberConstructor)[];
    fillBorderRadius: (StringConstructor | NumberConstructor)[];
}>>, {
    unit: string;
    percentage: number;
}, {}>;
export default _default;
