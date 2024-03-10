import { scrollbarRtl } from '../../_internal/scrollbar/styles';
import { paginationRtl } from '../../pagination/styles';
import rtlStyle from '../src/styles/rtl.cssr';
export const DataTableRtl = {
    name: 'DataTable',
    style: rtlStyle,
    peers: [scrollbarRtl, paginationRtl]
};
