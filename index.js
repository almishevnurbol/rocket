import ReactDOM from 'react-dom';
import React from "react";
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './data/state'
import App from './App';


let rerenderEntireTree = (state) => {

    ReactDOM.render(
      <React.StrictMode>
        <App state={state} />
      </React.StrictMode>,
      document.getElementById('root')
    );
}

rerenderEntireTree(store);
store.subsribe(rerenderEntireTree);


serviceWorker.unregister();


