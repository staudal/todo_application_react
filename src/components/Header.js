function Header(props) {
    return (
        <nav
            id="blurry-nav"
            className="navbar navbar-light bg-light rounded mt-4"
        >
            <div className="container d-flex ps-4 pe-4">
                <p className="navbar-brand mb-0">Todoist</p>
                <span className="badge rounded-pill text-bg-primary">
                    {props.count}
                </span>
            </div>
        </nav>
    );
}

export default Header;
