import { useState } from "react"
import "./Input.css"

const Input = ({dispatch}) => {
    const [newTodo, setNewTodo] = useState("")
    
    const handleChanges = (event) => {
        setNewTodo(event.target.value)
    }

    const handleClick = () => {
        dispatch({
            type: "add",
            payload:{
                id: Date.now(),
                text: newTodo,
            }

        })
    }

    return(
        <div className="input">
            <input placeholder="here todo" type="text" value={newTodo} onChange={handleChanges}/>
            <button onClick={handleClick}>Save Todo</button>
        </div>
    )
}

export default Input