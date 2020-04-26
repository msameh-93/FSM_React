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
            type: "GET_ERRORS",
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
const updateFile= (newFile, update) => async dispatch => {
    try {
        await axios.post(`/api/files/update`, newFile);
        update();
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
            type: "DELETE_FILE",
            payload: fileId
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
const downloadFile= (fileId, filename) => async dispatch => {
    try {
        const response= await axios.get(`/api/files/download/${fileId}`);
        console.log(response);
        console.log(filename);
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        const fileName = filename; // whatever your file name .
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
        link.remove();// you need to remove that elelment which is created before.

        dispatch({
            type: "GET_ERRORS",
            payload: {}
        })
    } catch(error) {
        dispatch({
            type: "GET_ERRORS",
            payload: error.response.data
        })
    }
}
export {getAllFiles, addFile, updateFile, deleteFile, downloadFile };