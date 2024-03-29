import { defineComponent, Fragment, ref, h, provide, reactive } from 'vue';
import { createId } from 'seemly';
import { useClicked, useClickPosition } from 'vooks';
import { omit } from '../../_utils';
import { NModalEnvironment } from './ModalEnvironment';
import { modalApiInjectionKey, modalProviderInjectionKey, modalReactiveListInjectionKey } from './context';
export const modalProviderProps = {
    to: [String, Object]
};
export const NModalProvider = defineComponent({
    name: 'ModalProvider',
    props: modalProviderProps,
    setup() {
        const clickedRef = useClicked(64);
        const clickedPositionRef = useClickPosition();
        const modalListRef = ref([]);
        const modalInstRefs = {};
        function create(options = {}) {
            const key = createId();
            const modalReactive = reactive(Object.assign(Object.assign({}, options), { key, destroy: () => {
                    modalInstRefs[`n-modal-${key}`].hide();
                } }));
            modalListRef.value.push(modalReactive);
            return modalReactive;
        }
        function handleAfterLeave(key) {
            const { value: modalList } = modalListRef;
            modalList.splice(modalList.findIndex((modal) => modal.key === key), 1);
        }
        function destroyAll() {
            Object.values(modalInstRefs).forEach((modalInstRef) => {
                modalInstRef.hide();
            });
        }
        const api = {
            create,
            destroyAll
        };
        provide(modalApiInjectionKey, api);
        provide(modalProviderInjectionKey, {
            clickedRef: useClicked(64),
            clickedPositionRef: useClickPosition()
        });
        provide(modalReactiveListInjectionKey, modalListRef);
        provide(modalProviderInjectionKey, {
            clickedRef,
            clickedPositionRef
        });
        return Object.assign(Object.assign({}, api), { modalList: modalListRef, modalInstRefs,
            handleAfterLeave });
    },
    render() {
        var _a, _b;
        return h(Fragment, null, [
            this.modalList.map((modal) => {
                var _a;
                return h(NModalEnvironment, omit(modal, ['destroy', 'style'], {
                    internalStyle: modal.style,
                    to: (_a = modal.to) !== null && _a !== void 0 ? _a : this.to,
                    ref: ((inst) => {
                        if (inst === null) {
                            // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
                            delete this.modalInstRefs[`n-modal-${modal.key}`];
                        }
                        else {
                            this.modalInstRefs[`n-modal-${modal.key}`] = inst;
                        }
                    }),
                    internalKey: modal.key,
                    onInternalAfterLeave: this.handleAfterLeave
                }));
            }),
            (_b = (_a = this.$slots).default) === null || _b === void 0 ? void 0 : _b.call(_a)
        ]);
    }
});
