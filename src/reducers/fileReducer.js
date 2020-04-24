const initialState= {
    files: [],
    file: {}
}

const fileReducer= (state= initialState, action) => {
    switch(action.type) {
        case "GET_FILES":
            return {
                ...state,
                files: action.payload
            }
        case "DELETE_FILE":
            return {
                ...state,
                files: this.state.files.filter(el => el.id !== action.payload)
            }
        default:
            return state;
    }
};

export default fileReducer;