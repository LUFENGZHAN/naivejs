import { inject } from 'vue';
import { modalApiInjectionKey, modalReactiveListInjectionKey } from './context';
import { throwError } from '../../_utils';
export function useModal() {
    const modal = inject(modalApiInjectionKey, null);
    if (modal === null) {
        throwError('use-modal', 'No outer <n-modal-provider /> founded.');
    }
    return modal;
}
export function useModalReactiveList() {
    const modalReactiveList = inject(modalReactiveListInjectionKey, null);
    if (modalReactiveList === null) {
        throwError('use-modal-reactive-list', 'No outer <n-modal-provider /> founded.');
    }
    return modalReactiveList;
}
