import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header.js";
import List from "./components/List.js";
import { useState } from "react";

function App() {
  const initialTodos = [
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Learn Firebase", completed: false },
    { id: 3, title: "Learn GraphQL", completed: false },
  ];

  const [todos, setTodos] = useState(initialTodos);

  return (
    <div className="App">
      <div className="container">
        <Header count={todos.length} />
        <List todos={todos} />
      </div>
    </div>
  );
}

export default App;
