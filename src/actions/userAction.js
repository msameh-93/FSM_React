import axios from "axios";
import jwt_decode from "jwt-decode";

const signUp= (newUser, history) => async dispatch => {
    try {
        await axios.post("/api/users/signup", newUser);
        dispatch({
            type: "GET_ERRORS",
            payload: {}
        })
        history.push("/signin");
    } catch(error) {
        dispatch({
            type: "GET_ERRORS",
            payload: error.response.data
        })
    }
}

const signIn= (loginReq) => async dispatch => {
    try {
        const response= await axios.post("/api/users/signin", loginReq);
        const {valid, token}= response.data;

        localStorage.setItem("jwt", token);
        if(valid) {
            axios.defaults.headers.common["Authorization"]= token;
        } else {
            delete axios.defaults.headers.common["Authorization"];
        }

        const decodedUser= jwt_decode(token);

        dispatch({
            type: "SIGN_IN",
            payload: decodedUser
        })
        dispatch({
            type: "GET_ERRORS",
            payload: {}
        })
    } catch (error) {
        dispatch({
            type: "GET_ERRORS",
            payload: error.response.data
        })
    }
}

const signOut= () => dispatch => {
    axios.defaults.headers.common["Authorization"]= "";
    localStorage.removeItem("jwt");
    dispatch({
        type: "SIGN_OUT",
        payload: {}
    })
}
export {signUp, signIn, signOut};