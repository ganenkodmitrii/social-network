import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import state from './redux/state';
console.log(state);
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App appState={state} />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
);
