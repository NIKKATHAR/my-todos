import axios from "axios";
import {
  GET_SINGLE_TODO_REQUEST,
  GET_SINGLE_TODO_REQUEST_FAIL,
  GET_SINGLE_TODO_REQUEST_SUCCESS,
  GET_TODO_REQUEST,
  GET_TODO_REQUEST_FAIL,
  GET_TODO_REQUEST_SUCCESS,
  TODO_REQUEST,
  TODO_REQUEST_FAIL,
  TODO_REQUEST_SUCCESS,
  UPDATE_SINGLE_TODO_REQUEST,
  UPDATE_SINGLE_TODO_REQUEST_FAIL,
  UPDATE_SINGLE_TODO_REQUEST_SUCCESS,
  DELETE_SINGLE_TODO_REQUEST,
  DELETE_SINGLE_TODO_REQUEST_SUCCESS,
  DELETE_SINGLE_TODO_REQUEST_FAIL,
} from "../Constants/todoConstants";

export const addtodoAction = (fd) => async (dispatch,getState) => {
  try {
    dispatch({ type: TODO_REQUEST });

  const config ={
      headers:{
        Authorization :getState().user.login.token
      }
    }

    const { data } = await axios.post("/todo", fd,config);
    console.log(data);
    dispatch({ type: TODO_REQUEST_SUCCESS, payload: data.result });
  } catch (error) {
    dispatch({ type: TODO_REQUEST_FAIL, payload: error });
  }
};

export const gettodoAction = () => async (dispatch,getState) => {
  try {
    dispatch({ type: GET_TODO_REQUEST });

    const config ={
      headers:{
        Authorization :getState().user.login.token
      }
    }
    const { data } = await axios.get("/todo",config);

    dispatch({ type: GET_TODO_REQUEST_SUCCESS, payload: data.result });
  } catch (error) {
    dispatch({ type: GET_TODO_REQUEST_FAIL, payload: error });
  }
};

export const getSingleToDoAction = (id) => async (dispatch,getState) => {
  try {
    dispatch({ type: GET_SINGLE_TODO_REQUEST });
    const config ={
      headers:{
        Authorization :getState().user.login.token
      }
    }
    const { data } = await axios.get(`/todo/${id}`,config);
    dispatch({ type: GET_SINGLE_TODO_REQUEST_SUCCESS, payload: data.result });
  } catch (error) {
    dispatch({ type: GET_SINGLE_TODO_REQUEST_FAIL, payload: error });
  }
};

export const updateSingleToDoAction = (id, fd) => async (dispatch,getState) => {
  try {
    dispatch({ type: UPDATE_SINGLE_TODO_REQUEST });
    const config ={
      headers:{
        Authorization :getState().user.login.token
      }
    }
    const { data } = await axios.put(`/todo/${id}`, fd,config);
    dispatch({ type: UPDATE_SINGLE_TODO_REQUEST_SUCCESS });
  } catch (error) {
    dispatch({ type: UPDATE_SINGLE_TODO_REQUEST_FAIL, payload: error });
  }
};

export const deleteSingleToDoAction = (id) => async (dispatch,getState) => {
  try {
    dispatch({ type: DELETE_SINGLE_TODO_REQUEST });
    const config ={
      headers:{
        Authorization :getState().user.login.token
      }
    }
    const { data } = await axios.delete(`/todo/${id}`,config);
    dispatch({ type: DELETE_SINGLE_TODO_REQUEST_SUCCESS });
    dispatch(gettodoAction())
  } catch (error) {
    dispatch({ type: DELETE_SINGLE_TODO_REQUEST_FAIL, payload: error });
  }
};
