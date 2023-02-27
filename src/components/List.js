import TodoItem from "./TodoItem";

function List(props) {
    const todos = props.todos;

    const listItems = todos.map((todo) => {
        return (
            <TodoItem
                id={todo.id}
                key={todo.id}
                title={todo.title}
                completed={todo.completed}
                deleteTodo={props.deleteTodo}
            />
        );
    });

    return (
        <div className="mt-4 text-center">
            <ul className="list-group gap-2">{listItems}</ul>
        </div>
    );
}

export default List;
