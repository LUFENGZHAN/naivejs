import rtlStyle from '../src/styles/rtl.cssr';
import { inputRtl } from '../../input/styles/rtl';
import { selectRtl } from '../../select/styles';
export const paginationRtl = {
    name: 'Pagination',
    style: rtlStyle,
    peers: [inputRtl, selectRtl]
};
