function Form(props) {
    return (
        <div className="container fixed-bottom mb-4">
            <form
                className="row d-flex justify-content-center"
                onSubmit={props.onSubmit}
            >
                <div className="col-md-4">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Add new todo"
                        autoFocus
                        onChange={props.onChange}
                    />
                </div>

                <div className="col-md-2">
                    <button className="btn btn-primary w-100" type="submit">
                        Add todo
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Form;
