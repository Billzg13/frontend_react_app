import {
    GET_TODOS, 
    TODOS_LOADING, 
    DELETE_TODO, 
    ADD_TODO } from '../actions/types'

const initialState = {
    todos: [],
    loading: false
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_TODOS:
            return{
                ...state,
                todos: action.payload,
                loading:false
            }
        case ADD_TODO:
            return{
                ...state,
                todos:[action.payload, ...state.todos]
            }
        case DELETE_TODO:
            return{
                ...state,
                todos: state.todos.filter(todo => todo._id !== action.payload)
            }
        case TODOS_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}