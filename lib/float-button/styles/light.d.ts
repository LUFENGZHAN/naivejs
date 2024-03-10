import type { ThemeCommonVars } from '../../_styles/common';
import { type Theme } from '../../_mixins';
declare const self: (vars: ThemeCommonVars) => {
    color: string;
    colorHover: string;
    colorPressed: string;
    colorPrimary: string;
    colorPrimaryHover: string;
    colorPrimaryPressed: string;
    textColor: string;
    boxShadow: string;
    boxShadowHover: string;
    boxShadowPressed: string;
    textColorPrimary: string;
    borderRadiusSquare: string;
};
export type FloatButtonThemeVars = ReturnType<typeof self>;
declare const themeLight: Theme<'FloatButton', FloatButtonThemeVars>;
export default themeLight;
export type FloatButtonTheme = typeof themeLight;
