import { type CSSProperties, type PropType } from 'vue';
import type { ExtractPublicPropTypes } from '../../_utils';
import type { ScrollTarget } from './utils';
export declare const affixProps: {
    readonly listenTo: PropType<string | ScrollTarget | (() => HTMLElement) | undefined>;
    readonly top: NumberConstructor;
    readonly bottom: NumberConstructor;
    readonly triggerTop: NumberConstructor;
    readonly triggerBottom: NumberConstructor;
    readonly position: {
        readonly type: PropType<"fixed" | "absolute">;
        readonly default: "fixed";
    };
    readonly offsetTop: {
        readonly type: PropType<number | undefined>;
        readonly validator: () => boolean;
        readonly default: undefined;
    };
    readonly offsetBottom: {
        readonly type: PropType<number | undefined>;
        readonly validator: () => boolean;
        readonly default: undefined;
    };
    readonly target: {
        readonly type: PropType<(() => HTMLElement) | undefined>;
        readonly validator: () => boolean;
        readonly default: undefined;
    };
};
export declare const affixPropKeys: ("target" | "top" | "bottom" | "position" | "listenTo" | "triggerTop" | "triggerBottom" | "offsetTop" | "offsetBottom")[];
export type AffixProps = ExtractPublicPropTypes<typeof affixProps>;
declare const _default: import("vue").DefineComponent<{
    readonly listenTo: PropType<string | ScrollTarget | (() => HTMLElement) | undefined>;
    readonly top: NumberConstructor;
    readonly bottom: NumberConstructor;
    readonly triggerTop: NumberConstructor;
    readonly triggerBottom: NumberConstructor;
    readonly position: {
        readonly type: PropType<"fixed" | "absolute">;
        readonly default: "fixed";
    };
    readonly offsetTop: {
        readonly type: PropType<number | undefined>;
        readonly validator: () => boolean;
        readonly default: undefined;
    };
    readonly offsetBottom: {
        readonly type: PropType<number | undefined>;
        readonly validator: () => boolean;
        readonly default: undefined;
    };
    readonly target: {
        readonly type: PropType<(() => HTMLElement) | undefined>;
        readonly validator: () => boolean;
        readonly default: undefined;
    };
}, {
    selfRef: import("vue").Ref<Element | null>;
    affixed: import("vue").ComputedRef<boolean>;
    mergedClsPrefix: import("vue").Ref<string>;
    mergedstyle: import("vue").ComputedRef<CSSProperties>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly listenTo: PropType<string | ScrollTarget | (() => HTMLElement) | undefined>;
    readonly top: NumberConstructor;
    readonly bottom: NumberConstructor;
    readonly triggerTop: NumberConstructor;
    readonly triggerBottom: NumberConstructor;
    readonly position: {
        readonly type: PropType<"fixed" | "absolute">;
        readonly default: "fixed";
    };
    readonly offsetTop: {
        readonly type: PropType<number | undefined>;
        readonly validator: () => boolean;
        readonly default: undefined;
    };
    readonly offsetBottom: {
        readonly type: PropType<number | undefined>;
        readonly validator: () => boolean;
        readonly default: undefined;
    };
    readonly target: {
        readonly type: PropType<(() => HTMLElement) | undefined>;
        readonly validator: () => boolean;
        readonly default: undefined;
    };
}>>, {
    readonly target: (() => HTMLElement) | undefined;
    readonly position: "fixed" | "absolute";
    readonly offsetTop: number | undefined;
    readonly offsetBottom: number | undefined;
}, {}>;
export default _default;
