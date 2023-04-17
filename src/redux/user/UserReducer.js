import { FETCH_USERS_REQUEST, FETH_USERS_FAILURE, FETH_USERS_SUCCESS } from "./UserTypes"

const initialState = {
    loading:false,
    users:[],
    error:''
}

const reducer = (state = initialState, action) => {
    console.log('sss', action.payload)
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading:true
            }
        case FETH_USERS_SUCCESS:
            return {
                ...state,
                loading:false,
                users:action.payload,
                error:''
            }
        case FETH_USERS_FAILURE:
            return {
                ...state,
                loading:false,
                users:[],
                error:action.payload
            }
        default: return state;
    }
}

export default reducer;

