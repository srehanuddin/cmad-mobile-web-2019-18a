import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();




// store.subscribe(() => console.log(store.getState()))

// store.subscribe(() => console.log(store.getState()))

// store.dispatch({ type: 'INCREMENT' })

// store.dispatch({ type: 'INCREMENT' })

// store.dispatch({ type: 'DECREMENT' })

// store.dispatch({ type: 'DECREMENT' })

// store.dispatch({ 
//     type: 'INCREMENT_BY_CUSTOM_NUMBER',
//     payload : 3
// })

// store.dispatch({ 
//     type: 'LOGIN',
//     payload : {
//         name : "Ali",
//         email : "ali@gmail.com"
//     }
// })

