import { 
    SIGNUP_REQUEST, 
    SIGNUP_REQUEST_FAIL, 
    SIGNUP_REQUEST_SUCCESS,

    LOGIN_REQUEST,
    LOGIN_REQUEST_SUCCESS,
    LOGIN_REQUEST_FAIL, 
    LOGOUT} from "../Constants/userConstants"
import axios from "axios";



export const signupAction = (data) => async(dispatch) => {
    try {
        dispatch({type:SIGNUP_REQUEST});
        await axios.post("/user", data)
        dispatch({type:SIGNUP_REQUEST_SUCCESS})
        
    } catch (error) {
        dispatch({type:SIGNUP_REQUEST_FAIL, payload : error})
        
    }
}

export const loginAction = (loginData) => async(dispatch) => {
    try {
        
        dispatch({type:LOGIN_REQUEST});
        const {data} = await axios.post("/auth/login",loginData)
        console.log(data);
        
        if (data.result.token) {
            dispatch({type:LOGIN_REQUEST_SUCCESS, payload: data.result})
            localStorage.setItem("login",JSON.stringify(data.result))
        }else{
            dispatch({
                type:LOGIN_REQUEST_FAIL, 
                payload : "password or email wrong"})
        }
        
    } catch (error) {
        dispatch({type:LOGIN_REQUEST_FAIL, payload : error})
        
    }
}


export const logoutAction = () => async(dispatch) => {
    dispatch({type:LOGOUT});
    localStorage.removeItem("login")
}
 