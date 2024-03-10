import { h, defineComponent, computed, Comment } from 'vue';
import { depx, getGap } from 'seemly';
import { createKey, flatten, getSlot } from '../../_utils';
import { useConfig, useTheme } from '../../_mixins';
import { spaceLight } from '../styles';
import { useRtl } from '../../_mixins/use-rtl';
import { ensureSupportFlexGap } from './utils';
export const spaceProps = Object.assign(Object.assign({}, useTheme.props), { align: String, justify: {
        type: String,
        default: 'start'
    }, inline: Boolean, vertical: Boolean, reverse: Boolean, size: {
        type: [String, Number, Array],
        default: 'medium'
    }, wrapItem: {
        type: Boolean,
        default: true
    }, itemClass: String, itemStyle: [String, Object], wrap: {
        type: Boolean,
        default: true
    }, 
    // internal
    internalUseGap: {
        type: Boolean,
        default: undefined
    } });
export default defineComponent({
    name: 'Space',
    props: spaceProps,
    setup(props) {
        const { mergedClsPrefixRef, mergedRtlRef } = useConfig(props);
        const themeRef = useTheme('Space', '-space', undefined, spaceLight, props, mergedClsPrefixRef);
        const rtlEnabledRef = useRtl('Space', mergedRtlRef, mergedClsPrefixRef);
        return {
            useGap: ensureSupportFlexGap(),
            rtlEnabled: rtlEnabledRef,
            mergedClsPrefix: mergedClsPrefixRef,
            margin: computed(() => {
                const { size } = props;
                if (Array.isArray(size)) {
                    return {
                        horizontal: size[0],
                        vertical: size[1]
                    };
                }
                if (typeof size === 'number') {
                    return {
                        horizontal: size,
                        vertical: size
                    };
                }
                const { self: { [createKey('gap', size)]: gap } } = themeRef.value;
                const { row, col } = getGap(gap);
                return {
                    horizontal: depx(col),
                    vertical: depx(row)
                };
            })
        };
    },
    render() {
        const { vertical, reverse, align, inline, justify, itemClass, itemStyle, margin, wrap, mergedClsPrefix, rtlEnabled, useGap, wrapItem, internalUseGap } = this;
        const children = flatten(getSlot(this), false);
        if (!children.length)
            return null;
        const horizontalMargin = `${margin.horizontal}px`;
        const semiHorizontalMargin = `${margin.horizontal / 2}px`;
        const verticalMargin = `${margin.vertical}px`;
        const semiVerticalMargin = `${margin.vertical / 2}px`;
        const lastIndex = children.length - 1;
        const isJustifySpace = justify.startsWith('space-');
        return (h("div", { role: "none", class: [
                `${mergedClsPrefix}-space`,
                rtlEnabled && `${mergedClsPrefix}-space--rtl`
            ], style: {
                display: inline ? 'inline-flex' : 'flex',
                flexDirection: (() => {
                    if (vertical && !reverse)
                        return 'column';
                    if (vertical && reverse)
                        return 'column-reverse';
                    if (!vertical && reverse)
                        return 'row-reverse';
                    /** (!vertical && !reverse) */ else
                        return 'row';
                })(),
                justifyContent: ['start', 'end'].includes(justify)
                    ? 'flex-' + justify
                    : justify,
                flexWrap: !wrap || vertical ? 'nowrap' : 'wrap',
                marginTop: useGap || vertical ? '' : `-${semiVerticalMargin}`,
                marginBottom: useGap || vertical ? '' : `-${semiVerticalMargin}`,
                alignItems: align,
                gap: useGap ? `${margin.vertical}px ${margin.horizontal}px` : ''
            } }, !wrapItem && (useGap || internalUseGap)
            ? children
            : children.map((child, index) => child.type === Comment ? (child) : (h("div", { role: "none", class: itemClass, style: [
                    itemStyle,
                    {
                        maxWidth: '100%'
                    },
                    useGap
                        ? ''
                        : vertical
                            ? {
                                marginBottom: index !== lastIndex ? verticalMargin : ''
                            }
                            : rtlEnabled
                                ? {
                                    marginLeft: isJustifySpace
                                        ? justify === 'space-between' &&
                                            index === lastIndex
                                            ? ''
                                            : semiHorizontalMargin
                                        : index !== lastIndex
                                            ? horizontalMargin
                                            : '',
                                    marginRight: isJustifySpace
                                        ? justify === 'space-between' && index === 0
                                            ? ''
                                            : semiHorizontalMargin
                                        : '',
                                    paddingTop: semiVerticalMargin,
                                    paddingBottom: semiVerticalMargin
                                }
                                : {
                                    marginRight: isJustifySpace
                                        ? justify === 'space-between' &&
                                            index === lastIndex
                                            ? ''
                                            : semiHorizontalMargin
                                        : index !== lastIndex
                                            ? horizontalMargin
                                            : '',
                                    marginLeft: isJustifySpace
                                        ? justify === 'space-between' && index === 0
                                            ? ''
                                            : semiHorizontalMargin
                                        : '',
                                    paddingTop: semiVerticalMargin,
                                    paddingBottom: semiVerticalMargin
                                }
                ] }, child)))));
    }
});
