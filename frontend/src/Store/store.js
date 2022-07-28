import {createStore, combineReducers,applyMiddleware} from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { todoReducer } from "./Reducers/todoReducers"
import { userReducer } from "./Reducers/usersReducer"

const localUserData = localStorage.getItem("login")
    ? JSON.parse(localStorage.getItem("login"))
    : {}

const initalState = {
    user:{login:localUserData}

}
const rootReducer = combineReducers({
    allTodos : todoReducer,
    user: userReducer
})

const store = createStore(
    rootReducer,
    initalState,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store