function TodoItem(props) {
    let status = props.completed;
    return (
        <div className="d-flex gap-2">
            <li className="list-group-item d-flex justify-content-between align-items-center rounded w-100">
                {props.title}
            </li>
            <form
                onSubmit={(event) => {
                    props.deleteTodo(event, props.id);
                }}
            >
                <button className="btn btn-danger" type="submit">
                    Remove
                </button>
            </form>
        </div>
    );
}

export default TodoItem;
