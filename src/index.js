import React from 'react';
import {render} from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import {Provider} from 'react-redux';
import './index.css';

import App from '../src/components/App';

render(<Provider store={createStore(rootReducer,applyMiddleware(thunk))}>
    <App />
</Provider>
,document.getElementById('root'));