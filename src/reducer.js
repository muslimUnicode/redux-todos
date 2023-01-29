const initialState = {
    todos: [],
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case "add":
            return{
                ...state,
                todos: [...state.todos, action.payload]
            }
        case "delete":
            return{
                ...state,
                todos: state.todos.filter(item => item.id !== action.payload)
            }
        default:
            return state
    }
}

export default reducer