import { useNavigate } from "react-router-dom";

const TodoList = ({ list, remove}) => {
    const navigate = useNavigate();
    const routeTo = (todoId) => {
        navigate(`../task/${todoId}`);
    };

    return <section className="todo-list">
        <ul>
            {list.map((item, index) => (
                <li key={item.id} >
                    <button className='todo-btn' onClick={() => routeTo(item.id)}>
                        <span>{index += 1}. {item.task}</span>
                        <span>{item.completed ? '✅' : '❌'}</span>
                    </button>
                    <button onClick={() => remove(item.id)}>🗑</button>
                </li>
            ))}
        </ul>
        <button onClick={() => navigate("/create-new-todo")}>Create New Task ✍</button>
    </section>;
};

export default TodoList;
