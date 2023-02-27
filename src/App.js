import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header.js";
import List from "./components/List.js";
import Form from "./components/Form.js";
import { useState } from "react";

function App() {
    const initialTodos = [
        { id: 1, title: "Learn React", completed: false },
        { id: 2, title: "Learn Firebase", completed: false },
        { id: 3, title: "Learn GraphQL", completed: false },
    ];
    const [todos, setTodos] = useState(initialTodos);
    const [input, setInput] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        setTodos([
            ...todos,
            {
                id: todos.length + 1,
                title: input,
                completed: false,
            },
        ]);
        event.target.reset();
    };

    const onChange = (event) => {
        setInput(event.target.value);
    };

    const deleteTodo = (event, id) => {
        event.preventDefault();
        const newTodos = todos.filter((item) => {
            return item.id !== id;
        });
        setTodos(newTodos);
    };

    return (
        <div className="App">
            <div className="container">
                <Header count={todos.length} />
                <List todos={todos} deleteTodo={deleteTodo} />
                <Form onSubmit={onSubmit} onChange={onChange} />
            </div>
        </div>
    );
}

export default App;
