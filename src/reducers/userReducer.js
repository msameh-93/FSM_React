const initialState= {
    user: {},
    valid: false
}


const userReducer= (state= initialState, action) => {
    switch(action.type) {
        case "SIGN_IN":
            return {
                ...state,
                user: action.payload,
                valid: action.payload ? true : false
            }
        case "SIGN_OUT":
            return {
                ...state,
                user: action.payload,
                valid: false
            }
        default:
            return state
    }
}

export default userReducer;