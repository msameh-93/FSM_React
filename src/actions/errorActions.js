const clearErrors= () => dispatch => {
    dispatch({
        type: "GET_ERRORS",
        payload: {}
    })
}

export {clearErrors};