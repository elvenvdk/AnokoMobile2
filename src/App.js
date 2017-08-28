import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Router from './Router';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { Screen } from './components/common';
import reducers from './reducers';


const store = createStore(reducers)
class App extends Component {
    render() {
        return(
            <Provider store={store}>
                <Screen>
                    <Router />
                </Screen>
            </Provider>
        );
    }
}




export default App;