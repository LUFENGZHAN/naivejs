import { type PropType, type CSSProperties } from 'vue';
import type { ExtractPublicPropTypes } from '../../_utils';
export declare const descriptionsItemProps: {
    readonly label: StringConstructor;
    readonly span: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly labelClass: StringConstructor;
    readonly labelStyle: PropType<string | CSSProperties>;
    readonly contentClass: StringConstructor;
    readonly contentStyle: PropType<string | CSSProperties>;
};
export type DescriptionItemProps = ExtractPublicPropTypes<typeof descriptionsItemProps>;
declare const _default: import("vue").DefineComponent<{
    readonly label: StringConstructor;
    readonly span: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly labelClass: StringConstructor;
    readonly labelStyle: PropType<string | CSSProperties>;
    readonly contentClass: StringConstructor;
    readonly contentStyle: PropType<string | CSSProperties>;
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly label: StringConstructor;
    readonly span: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly labelClass: StringConstructor;
    readonly labelStyle: PropType<string | CSSProperties>;
    readonly contentClass: StringConstructor;
    readonly contentStyle: PropType<string | CSSProperties>;
}>>, {
    readonly span: number;
}, {}>;
export default _default;
