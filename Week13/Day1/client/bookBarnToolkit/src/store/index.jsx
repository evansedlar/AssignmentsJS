import { createSlice, configureStore } from "@reduxjs/toolkit"

const counterInitialState = {
    counter: 99,

}

const authInitialState = {
    isAuthenticated: false
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: counterInitialState,
    reducers: {
        increment(state) { 
            // new copy of the state and then updating the counter in that state
            state.counter++
        },
        decrement(state) {
            // new copy of the state and then updating the counter in that state
            state.counter--
        },
        increase(state, action) {
            // this action will increase the counter by the amount passed in as action
            // state.counter = state.counter + action.payload
            state.counter += action.payload
        }

    }
})

const authSlice = createSlice({
    name: 'authentication',
    initialState: authInitialState,
    reducers: {
        login(state) {
            state.isAuthenticated = true
        },
        logout(state) {
            state.isAuthenticated = false
        }
    }
})

const store = configureStore({
    reducer:{
        ctr: counterSlice.reducer,
        auth: authSlice.reducer
    }
})


export const authActions = authSlice.actions
export const counterActions = counterSlice.actions
export default store


