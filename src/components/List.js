function List(props) {
  const listItems = props.todos.map((todo) => {
    <TodoItem title={todo.title} completed={todo.completed} />;
  });

  return <div className="mt-4 text-center"></div>;
}

export default List;
