import { type CSSProperties, type PropType, type Ref } from 'vue';
import { type VResizeObserverOnResize } from 'vueuc';
import { type ExtractPublicPropTypes } from '../../_utils';
export declare const gridProps: {
    readonly layoutShiftDisabled: BooleanConstructor;
    readonly responsive: {
        readonly type: PropType<"screen" | "self">;
        readonly default: "self";
    };
    readonly cols: {
        readonly type: PropType<string | number>;
        readonly default: 24;
    };
    readonly itemResponsive: BooleanConstructor;
    readonly collapsed: BooleanConstructor;
    readonly collapsedRows: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly itemStyle: PropType<string | CSSProperties>;
    readonly xGap: {
        readonly type: PropType<string | number>;
        readonly default: 0;
    };
    readonly yGap: {
        readonly type: PropType<string | number>;
        readonly default: 0;
    };
};
export interface NGridInjection {
    isSsrRef: Ref<boolean>;
    itemStyleRef: Ref<CSSProperties | string | undefined>;
    xGapRef: Ref<string | undefined>;
    overflowRef: Ref<boolean>;
    layoutShiftDisabledRef: Ref<boolean>;
}
export type GridProps = ExtractPublicPropTypes<typeof gridProps>;
declare const _default: import("vue").DefineComponent<{
    readonly layoutShiftDisabled: BooleanConstructor;
    readonly responsive: {
        readonly type: PropType<"screen" | "self">;
        readonly default: "self";
    };
    readonly cols: {
        readonly type: PropType<string | number>;
        readonly default: 24;
    };
    readonly itemResponsive: BooleanConstructor;
    readonly collapsed: BooleanConstructor;
    readonly collapsedRows: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly itemStyle: PropType<string | CSSProperties>;
    readonly xGap: {
        readonly type: PropType<string | number>;
        readonly default: 0;
    };
    readonly yGap: {
        readonly type: PropType<string | number>;
        readonly default: 0;
    };
}, {
    isSsr: boolean;
    contentEl: Ref<HTMLElement | undefined>;
    mergedClsPrefix: Ref<string>;
    style: import("vue").ComputedRef<CSSProperties>;
    isResponsive: import("vue").ComputedRef<boolean>;
    responsiveQuery: import("vue").ComputedRef<number | ("m" | "s" | "xs" | "l" | "xl" | "xxl")[] | undefined>;
    responsiveCols: import("vue").ComputedRef<number>;
    handleResize: import("vue").ComputedRef<VResizeObserverOnResize | undefined>;
    overflow: Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly layoutShiftDisabled: BooleanConstructor;
    readonly responsive: {
        readonly type: PropType<"screen" | "self">;
        readonly default: "self";
    };
    readonly cols: {
        readonly type: PropType<string | number>;
        readonly default: 24;
    };
    readonly itemResponsive: BooleanConstructor;
    readonly collapsed: BooleanConstructor;
    readonly collapsedRows: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly itemStyle: PropType<string | CSSProperties>;
    readonly xGap: {
        readonly type: PropType<string | number>;
        readonly default: 0;
    };
    readonly yGap: {
        readonly type: PropType<string | number>;
        readonly default: 0;
    };
}>>, {
    readonly cols: string | number;
    readonly responsive: "screen" | "self";
    readonly collapsed: boolean;
    readonly layoutShiftDisabled: boolean;
    readonly itemResponsive: boolean;
    readonly collapsedRows: number;
    readonly xGap: string | number;
    readonly yGap: string | number;
}, {}>;
export default _default;
