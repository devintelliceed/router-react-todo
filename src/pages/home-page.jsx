
import {Link} from "react-router-dom";

const HomePage = () => {
    return <>
        <h1>Welcome to React-Router To-Do List</h1>
        <hr/>
        <title>To-Do List: Daily Tasks to Stay Productive</title>
        <p>
            This to-do list is designed to help you manage your daily tasks effectively.
            Each task has been assigned a unique ID for easy reference and tracking.
            The tasks vary from professional commitments, like finishing a project report or attending meetings, to personal activities, such as exercising or calling loved ones.
            The <strong>completed</strong> status for each task helps you keep track of your progress throughout the day, ensuring you stay organized and focused.
        </p>
        <hr/>
        <Link to="/to-do-list">Go to explore</Link>
    </>
};

export default HomePage;
