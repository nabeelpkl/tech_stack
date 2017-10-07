import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore,compose } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';


let enhacer = compose();
if (__DEV__ && global.reduxNativeDevTools) { // eslint-disable-line
        enhacer = compose(global.reduxNativeDevTools())
 }
const store = createStore(reducers,enhacer);
if (__DEV__ && global.reduxNativeDevTools) { // eslint-disable-line
        global.reduxNativeDevTools.updateStore(store);
}
const App = () => {
    return (
        <Provider store={store}>
            <View style={{ flex: 1 }}>             
                <Header headerText="Tech Stack" />
                <LibraryList />
            </View>
        </Provider>
    );
}

export default App;