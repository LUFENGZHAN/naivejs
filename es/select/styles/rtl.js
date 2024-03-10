import { internalSelectMenuRtl } from '../../_internal/select-menu/styles';
import { internalSelectionRtl } from '../../_internal/selection/styles';
import { scrollbarRtl } from '../../_internal/scrollbar/styles';
import { tagRtl } from '../../tag/styles';
import { c } from '../../_utils/cssr';
export const selectRtl = {
    name: 'Select',
    style: c([]),
    peers: [internalSelectionRtl, internalSelectMenuRtl, tagRtl, scrollbarRtl]
};
