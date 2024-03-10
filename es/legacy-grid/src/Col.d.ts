import { type PropType } from 'vue';
import { type ExtractPublicPropTypes } from '../../_utils';
import type { Span } from './interface';
export declare const colProps: {
    readonly span: {
        readonly type: PropType<Span>;
        readonly default: 1;
    };
    readonly push: {
        readonly type: PropType<Span>;
        readonly default: 0;
    };
    readonly pull: {
        readonly type: PropType<Span>;
        readonly default: 0;
    };
    readonly offset: {
        readonly type: PropType<Span>;
        readonly default: 0;
    };
};
export declare const colPropKeys: ("push" | "span" | "offset" | "pull")[];
export type ColProps = ExtractPublicPropTypes<typeof colProps>;
declare const _default: import("vue").DefineComponent<{
    readonly span: {
        readonly type: PropType<Span>;
        readonly default: 1;
    };
    readonly push: {
        readonly type: PropType<Span>;
        readonly default: 0;
    };
    readonly pull: {
        readonly type: PropType<Span>;
        readonly default: 0;
    };
    readonly offset: {
        readonly type: PropType<Span>;
        readonly default: 0;
    };
}, {
    mergedClsPrefix: import("vue").Ref<string>;
    gutter: import("vue").Ref<string | number | [number, number]>;
    stylePadding: import("vue").ComputedRef<string>;
    mergedPush: import("vue").ComputedRef<number>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly span: {
        readonly type: PropType<Span>;
        readonly default: 1;
    };
    readonly push: {
        readonly type: PropType<Span>;
        readonly default: 0;
    };
    readonly pull: {
        readonly type: PropType<Span>;
        readonly default: 0;
    };
    readonly offset: {
        readonly type: PropType<Span>;
        readonly default: 0;
    };
}>>, {
    readonly push: Span;
    readonly span: Span;
    readonly offset: Span;
    readonly pull: Span;
}, {}>;
export default _default;
