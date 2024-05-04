import React, { useState, useEffect } from "react";
import "./App.css";
import TaskColumn from "./components/TaskColumn";
import todoIcon from "./assets/planning.png";
import inProgressIcon from "./assets/time-management.png";
import doneIcon from "./assets/accept.png";
import FormModal from "./components/Modal";
import TaskFilter from "./components/TaskFIlter";

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return JSON.parse(storedTasks) || [];
  });

  const [activeCard, setActiveCard] = useState(null);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [filterStatus, setFilterStatus] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    setTasks((prevTasks) =>
      prevTasks.filter((_, index) => index !== taskIndex)
    );
  };

  const onDrop = (status, index) => {
    if (activeCard === null || activeCard === undefined) return;
    const taskToMove = tasks[activeCard];
    const activeTaskIndex = tasks.findIndex(task => task === filteredTasks[activeCard]);
    const updatedTasks = tasks.filter((task, index) => index !== activeTaskIndex);
    updatedTasks.splice(index, 0, {
      ...taskToMove,
      status: status,
    });
    setTasks(updatedTasks);
  };
  
  const handleEdit = (taskIndex) => {
    const originalIndex = tasks.findIndex(task => task === filteredTasks[taskIndex]);
    setTaskToEdit(tasks[originalIndex]);
  };
  
  const filteredTasks = filterStatus ? tasks.filter(task => task.status === filterStatus) : tasks;

  return (
    <div className="app">
      <FormModal
        setTasks={setTasks}
        taskToEdit={taskToEdit}
        setTaskToEdit={setTaskToEdit}
      />
      <TaskFilter
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
      />
      <main className="app_main">
        {[
          { title: "To do", icon: todoIcon, status: "todo" },
          { title: "In progress", icon: inProgressIcon, status: "in progress" },
          { title: "Done", icon: doneIcon, status: "done" },
        ].map((column) => (
          <TaskColumn
            key={column.status}
            title={column.title}
            icon={column.icon}
            tasks={filteredTasks}
            status={column.status}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            setActiveCard={setActiveCard}
            onDrop={onDrop}
          />
        ))}
      </main>
    </div>
  );
};

export default App;
