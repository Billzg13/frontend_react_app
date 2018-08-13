import axios from 'axios';
import {GET_AUTHORS, AUTHORS_LOADING, DELETE_AUTHOR, ADD_AUTHOR, GET_AUTHOR } from './types';

export const getAuthors = () => dispatch => {
    dispatch(setAuthorsLoading());
    axios.get('http://localhost:5000/api/authors/all')
    .then(res => dispatch ({
        type: GET_AUTHORS,
        payload:res.data
    }))
};


export const deleteAuthors = id => dispatch => {
    console.log('id is : '+id)
    axios.delete(`http://localhost:5000/api/authors/${id}`)
    .then(res => 
        dispatch ({
            type: DELETE_AUTHOR,
            payload:id
        })
    )
    .catch(res =>{
        console.log('id is : '+id);
    })
};


export const addAuthor = name => dispatch => {
    axios.post('http://localhost:5000/api/authors/', name)
    .then(res =>
        dispatch ({
        type: ADD_AUTHOR,
        payload:res.data
    }))

};


export const getAuthor = id => dispatch =>{
    dispatch(setAuthorsLoading());
    axios.get(`http://localhost:5000/api/authors/${id.id}`)
    .then(res => dispatch ({
        type: GET_AUTHOR,
        payload:res.data
    }))
    .catch(err => {
        console.log(err);
    });
    
};


export const setAuthorsLoading = () => {
    return{
        type:AUTHORS_LOADING
    };
};