import { todos } from "../../data";

const initialState = {
    todoList: todos
};

const TodoListReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'CHANGETODOLIST':
            return { ...state, todoList: payload };

        default:
            return state;
    };
};

export default TodoListReducer;