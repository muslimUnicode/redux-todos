import "./App.css";
import Input from "./components/input/Input";
import TodoList from "./components/todo-list/TodoList";
import { useDispatch } from "react-redux";

function App() {
    const dispatch = useDispatch()

    return(
        <div className="app">
            <Input dispatch={dispatch}/>
            <TodoList dispatch={dispatch}/>
        </div>
    )
}

export default App;
