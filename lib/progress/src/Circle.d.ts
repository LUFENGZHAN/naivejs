/// <reference types="vue/jsx" />
import { type PropType, type CSSProperties } from 'vue';
import { type Status } from './interface';
declare const _default: import("vue").DefineComponent<{
    clsPrefix: {
        type: StringConstructor;
        required: true;
    };
    status: {
        type: PropType<Status>;
        required: true;
    };
    strokeWidth: {
        type: NumberConstructor;
        required: true;
    };
    fillColor: StringConstructor;
    railColor: StringConstructor;
    railStyle: PropType<string | CSSProperties>;
    percentage: {
        type: NumberConstructor;
        default: number;
    };
    offsetDegree: {
        type: NumberConstructor;
        default: number;
    };
    showIndicator: {
        type: BooleanConstructor;
        required: true;
    };
    indicatorTextColor: StringConstructor;
    unit: StringConstructor;
    viewBoxWidth: {
        type: NumberConstructor;
        required: true;
    };
    gapDegree: {
        type: PropType<number>;
        required: true;
    };
    gapOffsetDegree: {
        type: NumberConstructor;
        default: number;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    clsPrefix: {
        type: StringConstructor;
        required: true;
    };
    status: {
        type: PropType<Status>;
        required: true;
    };
    strokeWidth: {
        type: NumberConstructor;
        required: true;
    };
    fillColor: StringConstructor;
    railColor: StringConstructor;
    railStyle: PropType<string | CSSProperties>;
    percentage: {
        type: NumberConstructor;
        default: number;
    };
    offsetDegree: {
        type: NumberConstructor;
        default: number;
    };
    showIndicator: {
        type: BooleanConstructor;
        required: true;
    };
    indicatorTextColor: StringConstructor;
    unit: StringConstructor;
    viewBoxWidth: {
        type: NumberConstructor;
        required: true;
    };
    gapDegree: {
        type: PropType<number>;
        required: true;
    };
    gapOffsetDegree: {
        type: NumberConstructor;
        default: number;
    };
}>>, {
    percentage: number;
    offsetDegree: number;
    gapOffsetDegree: number;
}, {}>;
export default _default;
