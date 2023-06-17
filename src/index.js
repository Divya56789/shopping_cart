import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import analytics from './firebase.config';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store} app={analytics}>
        <App />
    </Provider>
);
