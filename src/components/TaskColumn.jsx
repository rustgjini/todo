import React from "react";
import "./../styles/TaskColumn.css";
import TaskCard from "./TaskCard";
import DropZone from "./DropZone";

const TaskColumn = ({
  title,
  icon,
  tasks,
  status,
  handleDelete,
  handleEdit,
  setActiveCard,
  onDrop,
}) => {
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <img className="task_column_icon" src={icon} alt="" /> {title}
      </h2>
      <DropZone onDrop={() => onDrop(status, 0)} />
      {tasks.map(
        (task, index) =>
          task.status === status && (
            <>
              <TaskCard
                key={index}
                title={task.task}
                description={task.description}
                deadline={
                  task.deadline
                    ? new Date(task.deadline).toLocaleDateString("en-GB")
                    : ""
                }
                tags={task.tags}
                handleDelete={handleDelete}
                index={index}
                handleEdit={handleEdit}
                setActiveCard={setActiveCard}
                status={status}
              />
              <DropZone onDrop={() => onDrop(status, index + 1)} />
            </>
          )
      )}
    </section>
  );
};

export default TaskColumn;
