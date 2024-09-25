
import { Link } from "react-router-dom";

const Header = () => {
    return <header>
        <Link to="/">Home</Link>
        <Link to="/create-new-todo">Add Task</Link>
        <Link to="/to-do-list">Todo List</Link>
    </header>
}

export default Header;
