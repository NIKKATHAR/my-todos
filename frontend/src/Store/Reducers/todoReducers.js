import {
  GET_TODO_REQUEST,
  GET_TODO_REQUEST_FAIL,
  GET_TODO_REQUEST_SUCCESS,
  TODO_REQUEST,
  TODO_REQUEST_FAIL,
  TODO_REQUEST_SUCCESS,
  GET_SINGLE_TODO_REQUEST,
  GET_SINGLE_TODO_REQUEST_SUCCESS,
  GET_SINGLE_TODO_REQUEST_FAIL,
  UPDATE_SINGLE_TODO_REQUEST,
  UPDATE_SINGLE_TODO_REQUEST_SUCCESS,
  UPDATE_SINGLE_TODO_REQUEST_FAIL,
  DELETE_SINGLE_TODO_REQUEST,
DELETE_SINGLE_TODO_REQUEST_SUCCESS,
DELETE_SINGLE_TODO_REQUEST_FAIL
} from "../Constants/todoConstants";

export const todoReducer = (
  state = { todo: [], singleToDo: [] },
  { type, payload }
) => {
  switch (type) {
    case TODO_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case TODO_REQUEST_SUCCESS:
      return {
        // ...state,
        isLoading: false,
        todo: payload,
        todoAdded: true,
      };
    case TODO_REQUEST_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    case GET_TODO_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TODO_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todo: payload,
      };
    case GET_TODO_REQUEST_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    case GET_SINGLE_TODO_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_SINGLE_TODO_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        singleToDo: payload,
      };
    case GET_SINGLE_TODO_REQUEST_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    case UPDATE_SINGLE_TODO_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case UPDATE_SINGLE_TODO_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todoUpdated:true
      };
    case UPDATE_SINGLE_TODO_REQUEST_FAIL:
      return {
        ...state,
        isLoading: false,
        todoUpdated:false,
        error: payload,
      };

    case DELETE_SINGLE_TODO_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_SINGLE_TODO_REQUEST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todoDeleted:true
      };
    case DELETE_SINGLE_TODO_REQUEST_FAIL:
      return {
        ...state,
        isLoading: false,
        todoDeleted:false,
        error: payload,
      };

    default:
      return state;
  }
};
