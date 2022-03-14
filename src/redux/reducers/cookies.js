import {createStore} from "redux";

const defaultState = {
    cash: 4,
}
export const cookiesReducer = (state = defaultState, action) =>{
    switch (action.type){
        case "ADD_CASH":
            return {...state, cash: state.cash + action.payload}
        case "GET_CASH":
            return {...state, cash: state.cash - action.payload}
        default:
            return state
    }
}
export const store = createStore(cookiesReducer);
