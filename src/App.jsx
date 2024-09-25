

import {Route, Routes} from "react-router-dom";
import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx';
import TaskDetail from "./pages/task-detail.jsx";
import TasksList from "./pages/tasks-list.jsx";
import HomePage from "./pages/home-page.jsx";
import NotFound from "./pages/not-found.jsx";
import TaskForm from "./pages/task-form.jsx";

const mockedTodo = [
    {
        id: 1,
        task: "Finish the project report",
        description: "Complete the final report for the current project to meet the upcoming deadline.",
        completed: false
    },
    {
        id: 2,
        task: "Buy groceries for dinner",
        description: "Pick up ingredients needed for tonight's meal to ensure a healthy dinner.",
        completed: true
    },
    {
        id: 3,
        task: "Schedule appointment with the dentist",
        description: "Contact the dentist's office to schedule your next check-up or dental cleaning.",
        completed: false
    },
    {
        id: 4,
        task: "Respond to client emails",
        description: "Check and respond to all client emails to maintain good communication and client satisfaction.",
        completed: true
    },
    {
        id: 5,
        task: "Attend team meeting at 3 PM",
        description: "Participate in the scheduled team meeting to discuss project progress and next steps.",
        completed: false
    },
    {
        id: 6,
        task: "Workout for 45 minutes",
        description: "Dedicate time for a physical workout to stay fit and energized.",
        completed: true
    },
    {
        id: 7,
        task: "Prepare presentation slides",
        description: "Create a professional presentation for the upcoming client meeting or internal review.",
        completed: false
    },
    {
        id: 8,
        task: "Call parents to check in",
        description: "Make time to connect with your parents and catch up on how they are doing.",
        completed: true
    },
    {
        id: 9,
        task: "Clean the kitchen",
        description: "Ensure a clean and tidy kitchen environment for a healthy living space.",
        completed: false
    },
    {
        id: 10,
        task: "Read 20 pages of a book",
        description: "Allocate some quiet time to read and relax, stimulating your mind and enriching your knowledge.",
        completed: false
    }
];


function App() {
    const [tasks, setTasks] = useState(mockedTodo);

    const handleRemove = id => {
        const updateTasks = tasks.filter((task) => task.id !== id);
        setTasks(updateTasks);
    };
    const handleToggleStatus = id => {
        const newTasks = [...tasks];
        const index = newTasks.findIndex(task => task.id === id);
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    };
    const handleSubmit = (formData) => {
        if (formData.id) {
            const newTasks = [...tasks];
            const index = newTasks.findIndex(task => task.id === formData.id);
            newTasks[index] = formData;
            setTasks(newTasks);
        } else {
            formData.id = Math.floor(Math.random() * 100);
            setTasks(prevState => [...prevState, formData]);
        }
    }

  return <div className="App">
      <Header />
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/to-do-list"  element={<TasksList list={tasks} remove={handleRemove} />} />
          <Route path="/create-new-todo" element={<TaskForm submit={handleSubmit} />} />
          <Route path="/task/:id" element={<TaskDetail list={tasks} remove={handleRemove} toggleStatus={handleToggleStatus} />} />
          <Route path="/task/:id/edit" element={<TaskForm list={tasks} submit={handleSubmit} />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
  </div>
}

export default App
