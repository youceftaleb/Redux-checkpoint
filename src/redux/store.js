import { createStore, compose, combineReducers } from "redux";
import FilterReducer from "./reducers/filter";
import TodoListReducer from "./reducers/todolist";

const reducers = {
    FilterReducer,
    TodoListReducer,
};

const rootReducer = combineReducers(reducers);

const store = createStore(
    rootReducer,
    compose(
        window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION()
    ));
export default store;