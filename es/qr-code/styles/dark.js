import { commonDark } from '../../_styles/common';
const qrcodeDark = {
    name: 'QrCode',
    common: commonDark,
    self: (vars) => {
        return {
            borderRadius: vars.borderRadius
        };
    }
};
export default qrcodeDark;
