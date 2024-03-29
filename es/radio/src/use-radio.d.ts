import { type ExtractPropTypes, type PropType, type Ref, type ComputedRef } from 'vue';
import type { MaybeArray } from '../../_utils';
import { type OnUpdateValue } from './interface';
export declare const radioBaseProps: {
    readonly name: StringConstructor;
    readonly value: {
        readonly type: PropType<string | number | boolean>;
        readonly default: "on";
    };
    readonly checked: {
        readonly type: PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly defaultChecked: BooleanConstructor;
    readonly disabled: {
        readonly type: PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly label: StringConstructor;
    readonly size: PropType<"small" | "medium" | "large">;
    readonly onUpdateChecked: PropType<MaybeArray<(value: boolean) => void> | undefined>;
    readonly 'onUpdate:checked': PropType<MaybeArray<(value: boolean) => void> | undefined>;
    readonly checkedValue: {
        readonly type: PropType<boolean | undefined>;
        readonly default: undefined;
    };
};
export interface RadioGroupInjection {
    mergedClsPrefixRef: Ref<string>;
    nameRef: Ref<string | undefined>;
    valueRef: Ref<string | number | boolean | null>;
    mergedSizeRef: Ref<'small' | 'medium' | 'large'>;
    disabledRef: Ref<boolean>;
    doUpdateValue: OnUpdateValue;
}
export declare const radioGroupInjectionKey: import("vue").InjectionKey<RadioGroupInjection>;
export interface UseRadio {
    mergedClsPrefix: Ref<string>;
    inputRef: Ref<HTMLElement | null>;
    labelRef: Ref<HTMLElement | null>;
    mergedName: Ref<string | undefined>;
    mergedDisabled: Ref<boolean>;
    renderSafeChecked: Ref<boolean>;
    focus: Ref<boolean>;
    mergedSize: ComputedRef<'small' | 'medium' | 'large'>;
    handleRadioInputChange: () => void;
    handleRadioInputBlur: () => void;
    handleRadioInputFocus: () => void;
}
declare function setup(props: ExtractPropTypes<typeof radioBaseProps>): UseRadio;
export type RadioBaseProps = ExtractPropTypes<typeof radioBaseProps>;
export { setup };
