import React from 'react';
import ReactDOM from 'react-dom';
import Root from './env/root';
import store,{sagaMiddleware} from './env/store';
import rootSaga from './sagas';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { postNotifyFromJPush } from './env/jpush';
import { registerandroid } from './env/android';

injectTapEventPlugin();
sagaMiddleware.run(rootSaga);
ReactDOM.render(
    <Root />,
    document.getElementById('root')
);


registerandroid();
postNotifyFromJPush(store.dispatch);
registerServiceWorker();
