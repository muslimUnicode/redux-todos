import { useSelector } from "react-redux"
import "./TodoList.css"

const TodoList = ({dispatch}) => {
    const todos = useSelector((state) => state.todos)

    const deleteCard = (id) => {
        dispatch({
            type: "delete",
            payload: id,
        })
    }
    
    console.log(todos)
    return(
        <div className="todo-list">
            {todos.map(item => {
                return(
                    <div className="cards" key={item.id}>
                        <div className="left">
                            {item.text}
                        </div>
                        <div className="right">
                            <i className="bi bi-trash3" onClick={() => deleteCard(item.id)}></i>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoList