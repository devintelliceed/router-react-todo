
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";


const newTaskState = {
    id: null,
    task: "",
    description: "",
    completed: false
};

const TaskForm = ({ list, submit }) => {
    const [state, setState] = useState({});
    const navigate = useNavigate();
    const routeParams = useParams();


    useEffect(() => {
        if (!routeParams.id) {
            setState(newTaskState);
        } else {
            const editTask = list.find(task => task.id === parseInt(routeParams.id));
            setState(editTask);
        }
    }, [list, setState, routeParams]);

    const handleChangeState = e => setState(prevState => {
        return {
            ...prevState,
            [e.target.name]: e.target.value,
        }
    });

    const handleSubmit = e => {
        e.preventDefault();
        submit(state);
        navigate("/to-do-list");
    }

    return <div className="task-card">
        <h2>{routeParams.id ? 'Edit your task' : 'Create new task'}</h2>
        <form onSubmit={handleSubmit} className="form">
            <label htmlFor="title.input">Title:</label>
            <input
                required
                type="text"
                name="task"
                minLength={3}
                id="title.input"
                value={state.task}
                onChange={handleChangeState}
                placeholder="Please enter your title..."
            />
            <label htmlFor="description.input">Description:</label>
            <textarea
                rows="6"
                required
                minLength={5}
                name="description"
                id="description.input"
                value={state.description}
                onChange={handleChangeState}
                placeholder="Please enter your description..."
            />
            <input type="submit"  />
        </form>

    </div>
};

export default TaskForm;
