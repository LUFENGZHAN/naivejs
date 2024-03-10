declare const presetProps: {
    icon: import("vue").PropType<() => import("vue").VNodeChild>;
    type: {
        readonly type: import("vue").PropType<"default" | "error" | "info" | "success" | "warning">;
        readonly default: "default";
    };
    title: import("vue").PropType<string | (() => import("vue").VNodeChild)>;
    closable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    negativeText: StringConstructor;
    positiveText: StringConstructor;
    positiveButtonProps: import("vue").PropType<import("../..").ButtonProps>;
    negativeButtonProps: import("vue").PropType<import("../..").ButtonProps>;
    content: import("vue").PropType<string | (() => import("vue").VNodeChild)>;
    action: import("vue").PropType<() => import("vue").VNodeChild>;
    showIcon: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    loading: BooleanConstructor;
    bordered: BooleanConstructor;
    iconPlacement: import("vue").PropType<import("../../dialog/src/interface").IconPlacement>;
    onPositiveClick: import("vue").PropType<(e: MouseEvent) => void>;
    onNegativeClick: import("vue").PropType<(e: MouseEvent) => void>;
    onClose: import("vue").PropType<() => void>;
    contentClass: StringConstructor;
    contentStyle: import("vue").PropType<string | import("vue").CSSProperties>;
    headerClass: StringConstructor;
    headerStyle: import("vue").PropType<string | import("vue").CSSProperties>;
    headerExtraClass: StringConstructor;
    headerExtraStyle: import("vue").PropType<string | import("vue").CSSProperties>;
    footerClass: StringConstructor;
    footerStyle: import("vue").PropType<string | import("vue").CSSProperties>;
    embedded: BooleanConstructor;
    segmented: {
        readonly type: import("vue").PropType<boolean | import("../../card/src/Card").CardSegmented>;
        readonly default: false;
    };
    size: {
        readonly type: import("vue").PropType<"small" | "medium" | "large" | "huge">;
        readonly default: "medium";
    };
    hoverable: BooleanConstructor;
    role: StringConstructor;
    tag: {
        readonly type: import("vue").PropType<keyof HTMLElementTagNameMap>;
        readonly default: "div";
    };
};
declare const presetPropsKeys: ("type" | "tag" | "content" | "size" | "title" | "icon" | "role" | "action" | "loading" | "positiveText" | "negativeText" | "bordered" | "showIcon" | "onClose" | "closable" | "contentClass" | "contentStyle" | "headerClass" | "headerStyle" | "footerClass" | "footerStyle" | "iconPlacement" | "hoverable" | "embedded" | "headerExtraClass" | "headerExtraStyle" | "segmented" | "positiveButtonProps" | "negativeButtonProps" | "onPositiveClick" | "onNegativeClick")[];
export { presetProps, presetPropsKeys };
