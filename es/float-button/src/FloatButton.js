import { h, defineComponent, computed, inject, ref, toRef, withDirectives } from 'vue';
import { useMergedState } from 'vooks';
import { mousemoveoutside } from 'vdirs';
import { floatButtonGroupInjectionKey } from '../../float-button-group/src/FloatButtonGroup';
import { formatLength, resolveWrappedSlot, resolveSlot, call } from '../../_utils';
import useConfig from '../../_mixins/use-config';
import { useTheme, useThemeClass } from '../../_mixins';
import { floatButtonLight } from '../styles';
import style from './styles/index.cssr';
import { NBaseIcon } from '../../_internal';
import { CloseIcon } from '../../_internal/icons';
export const floatButtonProps = Object.assign(Object.assign({}, useTheme.props), { width: { type: [Number, String], default: 40 }, height: { type: [Number, String], default: 40 }, left: [Number, String], right: [Number, String], top: [Number, String], bottom: [Number, String], shape: {
        type: String,
        default: 'circle'
    }, position: {
        type: String,
        default: 'fixed'
    }, type: {
        type: String,
        default: 'default'
    }, menuTrigger: String, showMenu: {
        type: Boolean,
        default: undefined
    }, onUpdateShowMenu: {
        type: [Function, Array],
        default: undefined
    }, 'onUpdate:showMenu': {
        type: [Function, Array],
        default: undefined
    } });
export default defineComponent({
    name: 'FloatButton',
    props: floatButtonProps,
    setup(props) {
        const { mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props);
        const themeRef = useTheme('FloatButton', '-float-button', style, floatButtonLight, props, mergedClsPrefixRef);
        const floatButtonGroupInjection = inject(floatButtonGroupInjectionKey, null);
        const uncontrolledShowMenuRef = ref(false);
        const controlledShoeMenuRef = toRef(props, 'showMenu');
        const mergedShowMenuRef = useMergedState(controlledShoeMenuRef, uncontrolledShowMenuRef);
        function doUpdateShowMenu(value) {
            const { onUpdateShowMenu, 'onUpdate:showMenu': _onUpdateShowMenu } = props;
            uncontrolledShowMenuRef.value = value;
            if (onUpdateShowMenu) {
                call(onUpdateShowMenu, value);
            }
            if (_onUpdateShowMenu) {
                call(_onUpdateShowMenu, value);
            }
        }
        const cssVarsRef = computed(() => {
            const { self: { color, textColor, boxShadow, boxShadowHover, boxShadowPressed, colorHover, colorPrimary, colorPrimaryHover, textColorPrimary, borderRadiusSquare, colorPressed, colorPrimaryPressed }, common: { cubicBezierEaseInOut } } = themeRef.value;
            const { type } = props;
            return {
                '--n-bezier': cubicBezierEaseInOut,
                '--n-box-shadow': boxShadow,
                '--n-box-shadow-hover': boxShadowHover,
                '--n-box-shadow-pressed': boxShadowPressed,
                '--n-color': type === 'primary' ? colorPrimary : color,
                '--n-text-color': type === 'primary' ? textColorPrimary : textColor,
                '--n-color-hover': type === 'primary' ? colorPrimaryHover : colorHover,
                '--n-color-pressed': type === 'primary' ? colorPrimaryPressed : colorPressed,
                '--n-border-radius-square': borderRadiusSquare
            };
        });
        const inlineStyle = computed(() => {
            const { width, height } = props;
            return Object.assign({ position: floatButtonGroupInjection ? undefined : props.position, width: formatLength(width), minHeight: formatLength(height) }, (floatButtonGroupInjection
                ? null
                : {
                    left: formatLength(props.left),
                    right: formatLength(props.right),
                    top: formatLength(props.top),
                    bottom: formatLength(props.bottom)
                }));
        });
        const mergedShapeRef = computed(() => {
            return floatButtonGroupInjection
                ? floatButtonGroupInjection.shapeRef.value
                : props.shape;
        });
        const Mouseenter = () => {
            if (props.menuTrigger === 'hover') {
                doUpdateShowMenu(true);
            }
        };
        const handleMouseleave = () => {
            if (props.menuTrigger === 'hover' && mergedShowMenuRef.value) {
                doUpdateShowMenu(false);
            }
        };
        const handleClick = (e) => {
            if (props.menuTrigger === 'click') {
                doUpdateShowMenu(!mergedShowMenuRef.value);
            }
        };
        const themeClassHandle = inlineThemeDisabled
            ? useThemeClass('float-button', computed(() => props.type[0]), cssVarsRef, props)
            : undefined;
        return {
            inlineStyle,
            cssVars: inlineThemeDisabled ? undefined : cssVarsRef,
            mergedClsPrefix: mergedClsPrefixRef,
            mergedShape: mergedShapeRef,
            mergedShowMenu: mergedShowMenuRef,
            themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
            onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender,
            Mouseenter,
            handleMouseleave,
            handleClick
        };
    },
    render() {
        var _a;
        const { mergedClsPrefix, cssVars, mergedShape, type, menuTrigger, mergedShowMenu, themeClass, $slots, inlineStyle, onRender } = this;
        const dirs = [[mousemoveoutside, this.handleMouseleave]];
        onRender === null || onRender === void 0 ? void 0 : onRender();
        return withDirectives(h("div", { class: [
                `${mergedClsPrefix}-float-button`,
                `${mergedClsPrefix}-float-button--${mergedShape}-shape`,
                `${mergedClsPrefix}-float-button--${type}-type`,
                mergedShowMenu && `${mergedClsPrefix}-float-button--show-menu`,
                themeClass
            ], style: [cssVars, inlineStyle], onMouseenter: this.Mouseenter, onMouseleave: this.handleMouseleave, onClick: this.handleClick, role: "button" },
            h("div", { class: `${mergedClsPrefix}-float-button__fill`, "aria-hidden": true }),
            h("div", { class: `${mergedClsPrefix}-float-button__body` }, (_a = $slots.default) === null || _a === void 0 ? void 0 :
                _a.call($slots),
                resolveWrappedSlot($slots.description, (children) => {
                    if (children) {
                        return (h("div", { class: `${mergedClsPrefix}-float-button__description` }, children));
                    }
                    return null;
                })),
            menuTrigger ? (h("div", { class: `${mergedClsPrefix}-float-button__close` },
                h(NBaseIcon, { clsPrefix: mergedClsPrefix }, { default: () => h(CloseIcon, null) }))) : null,
            menuTrigger ? (h("div", { onClick: (e) => {
                    e.stopPropagation();
                }, "data-float-button-menu": true, class: `${mergedClsPrefix}-float-button__menu` }, resolveSlot($slots.menu, () => []))) : null), dirs);
    }
});
