import axios from 'axios';
import {AUTH_USER,LOGIN_USER,LOGOUT_USER,LOGIN_ERROR} from './types';
import config from '../config';

export const logout=()=>{
    localStorage.removeItem('token');
    return {
        type:AUTH_USER,
        payload:''
    };
}

export const login=(formprops,callback)=>async dispatch => 
{
    try
    {
        const response= await axios.post(
            `${config.apiUrl}/signin`,
            {
                phone:formprops.nm,
                password:formprops.pwd
            }
        );
        dispatch({
            type:AUTH_USER,
            payload:response.data.token
        });
        localStorage.setItem('token',response.data.token);
        callback();
    }
    catch(e)
    {   
        dispatch({
            type:LOGIN_ERROR,
            payload:'login error'
        })
    }
}