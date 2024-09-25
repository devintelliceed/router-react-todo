import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const TaskDetail = ({ list, remove, toggleStatus }) => {
    const [task, setTask] = useState({});
    const navigate = useNavigate();
    const routeParams = useParams();

    const routeTo = (todoId) => {
        navigate(`/task/${todoId}/edit`);
    };

    useEffect(() => {
        const currentTask = list.find(task => task.id === parseInt(routeParams.id));
        setTask(currentTask);
    }, [list, setTask]);

    return (
        <div className="task-card">
            <h2><strong>{task.id}. </strong> {task.task}</h2>
            <p>{task.description}
                <button onClick={() => routeTo(task.id)}>✍</button>
            </p>
            <hr/>
            <pre><strong>Status:</strong> {task.completed
                ? <button onClick={() => toggleStatus(task.id)}>done ✅</button>
                : <button onClick={() => toggleStatus(task.id)}>incomplete ❌</button>
            }
            </pre>
            <button onClick={() => navigate("/to-do-list")}>Go Back</button>
        </div>
    );
};

export default TaskDetail;
