import axios from 'axios'
import {
    FETCH_USERS_REQUEST,
    FETH_USERS_SUCCESS,
    FETH_USERS_FAILURE
} from './UserTypes'

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = (users) => {
    return {
        type: FETH_USERS_SUCCESS,
        payload:users
    }
}

export const fetchUsersFailure = error => {
    return {
        type: FETH_USERS_FAILURE,
        payload:error
    }
}

// Action Creator.
// But this one we pass a funciton an API Call.
export const fetchUsers = () =>{
    return (dispatch) => {
        // dispatch(fetchUsersRequest) This put its on Loading Mode
        dispatch(fetchUsersRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            console.log(response.data)
            const users = response.data
            // If we get data from the API we dispatch it action.payload.
            dispatch(fetchUsersSuccess(users))
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(fetchUsersFailure(errorMsg))
        })
    }
}