import { commonLight } from '../../_styles/common';
export const self = (vars) => {
    const { primaryColorHover, borderColor } = vars;
    return {
        resizableTriggerColorHover: primaryColorHover,
        resizableTriggerColor: borderColor
    };
};
const themeLight = {
    name: 'Split',
    common: commonLight,
    self
};
export default themeLight;
