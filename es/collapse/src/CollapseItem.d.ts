import { type PropType } from 'vue';
import type { ExtractPublicPropTypes } from '../../_utils';
export declare const collapseItemProps: {
    readonly title: StringConstructor;
    readonly name: PropType<string | number>;
    readonly disabled: BooleanConstructor;
    readonly displayDirective: PropType<"show" | "if">;
};
export type CollapseItemProps = ExtractPublicPropTypes<typeof collapseItemProps>;
declare const _default: import("vue").DefineComponent<{
    readonly title: StringConstructor;
    readonly name: PropType<string | number>;
    readonly disabled: BooleanConstructor;
    readonly displayDirective: PropType<"show" | "if">;
}, {
    rtlEnabled: import("vue").Ref<import("../../config-provider/src/internal-interface").RtlItem | undefined> | undefined;
    collapseSlots: Readonly<{
        [name: string]: import("vue").Slot<any> | undefined;
    }>;
    randomName: string;
    mergedClsPrefix: import("vue").Ref<string>;
    collapsed: import("vue").ComputedRef<boolean>;
    triggerAreas: import("vue").Ref<("extra" | "main" | "arrow")[]>;
    mergedDisplayDirective: import("vue").ComputedRef<"show" | "if">;
    arrowPlacement: import("vue").ComputedRef<"left" | "right">;
    handleClick(e: MouseEvent): void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly title: StringConstructor;
    readonly name: PropType<string | number>;
    readonly disabled: BooleanConstructor;
    readonly displayDirective: PropType<"show" | "if">;
}>>, {
    readonly disabled: boolean;
}, {}>;
export default _default;
