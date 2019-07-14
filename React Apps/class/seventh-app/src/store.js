
import { createStore } from 'redux'

let initialState = {
    counter : 0,
    user : null
}

function reducer(state = initialState, action) {
    console.log(state)
    let newState = state
    switch (action.type) {
        case 'INCREMENT':
            newState.counter = state.counter + 1
            break

        case 'DECREMENT':
            newState.counter = state.counter - 1
            break

        case 'INCREMENT_BY_CUSTOM_NUMBER':
            newState.counter = state.counter + action.payload
            break

        case 'LOGIN':
             newState.user = action.payload;
             break

        default:
            return state
    }
    return newState
}

let store = createStore(reducer)


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

export default store

