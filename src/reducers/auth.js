import {AUTH_USER,LOGIN_ERROR} from '../actions/types';

const inital_state={
    authenicated:'',
    errorMessage:''
}

export default function(state=inital_state,action){
    switch(action.type){
        case AUTH_USER:
            return {...state,authenicated:action.payload,errorMessage:''};
        case LOGIN_ERROR:
            return {...state,errorMessage:action.payload};
        default :
            return state;
    }
}