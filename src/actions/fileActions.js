import axios from "axios";

const getAllFiles= () => async dispatch => {
    try {
        const response= await axios.get("/api/files");
        dispatch({
            type: "GET_FILES",
            payload: response.data
        })
        dispatch({
            type: "GET_ERRORS",
            payload: {}
        })
    } catch (error) {
        dispatch({
            type: "GET_FILES",
            payload: error.response.data
        })
    }
}
const addFile= (newFile, history) => async dispatch => {
    try {
        await axios.post("/api/files", newFile);
        history.push("/dashboard");
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
};
const deleteFile= (fileId) => async dispatch => {
    try {
        await axios.delete(`/api/files/${fileId}`);
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
export {getAllFiles, addFile, deleteFile };