import { type PropType } from 'vue';
import { type Item } from './interface';
declare const _default: import("vue").DefineComponent<{
    clsPrefix: {
        type: StringConstructor;
        required: true;
    };
    data: {
        type: PropType<Item[]>;
        required: true;
    };
    activeValue: {
        type: PropType<number | "am" | "pm" | null>;
        default: null;
    };
    onItemClick: PropType<(value: number | 'am' | 'pm') => void>;
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    clsPrefix: {
        type: StringConstructor;
        required: true;
    };
    data: {
        type: PropType<Item[]>;
        required: true;
    };
    activeValue: {
        type: PropType<number | "am" | "pm" | null>;
        default: null;
    };
    onItemClick: PropType<(value: number | 'am' | 'pm') => void>;
}>>, {
    activeValue: number | "am" | "pm" | null;
}, {}>;
export default _default;
