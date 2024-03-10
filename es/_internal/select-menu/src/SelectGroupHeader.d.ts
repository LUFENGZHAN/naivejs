import { type PropType, type Ref } from 'vue';
import type { TreeNode } from 'treemate';
import type { SelectGroupOption } from '../../../select/src/interface';
import { type RenderLabelImpl, type RenderOptionImpl } from './interface';
declare const _default: import("vue").DefineComponent<{
    clsPrefix: {
        type: StringConstructor;
        required: true;
    };
    tmNode: {
        type: PropType<TreeNode<SelectGroupOption, SelectGroupOption, SelectGroupOption>>;
        required: true;
    };
}, {
    labelField: Ref<string>;
    nodeProps: Ref<import("./interface").NodeProps | undefined>;
    renderLabel: Ref<RenderLabelImpl | undefined>;
    renderOption: Ref<RenderOptionImpl | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    clsPrefix: {
        type: StringConstructor;
        required: true;
    };
    tmNode: {
        type: PropType<TreeNode<SelectGroupOption, SelectGroupOption, SelectGroupOption>>;
        required: true;
    };
}>>, {}, {}>;
export default _default;
