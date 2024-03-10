import { NMessageProvider } from '../../message';
import { NDialogProvider } from '../../dialog';
import { NNotificationProvider } from '../../notification';
import { NLoadingBarProvider } from '../../loading-bar';
import { createDiscreteApp } from './discreteApp';
import { NModalProvider } from '../../modal/src/ModalProvider';
export function createDiscreteApi(includes, { configProviderProps, messageProviderProps, dialogProviderProps, notificationProviderProps, loadingBarProviderProps, modalProviderProps } = {}) {
    const providersAndProps = [];
    includes.forEach((type) => {
        switch (type) {
            case 'message':
                providersAndProps.push({
                    type,
                    Provider: NMessageProvider,
                    props: messageProviderProps
                });
                break;
            case 'notification':
                providersAndProps.push({
                    type,
                    Provider: NNotificationProvider,
                    props: notificationProviderProps
                });
                break;
            case 'dialog':
                providersAndProps.push({
                    type,
                    Provider: NDialogProvider,
                    props: dialogProviderProps
                });
                break;
            case 'loadingBar':
                providersAndProps.push({
                    type,
                    Provider: NLoadingBarProvider,
                    props: loadingBarProviderProps
                });
                break;
            case 'modal':
                providersAndProps.push({
                    type,
                    Provider: NModalProvider,
                    props: modalProviderProps
                });
        }
    });
    const discreteApp = createDiscreteApp({
        providersAndProps,
        configProviderProps
    });
    return discreteApp;
}
