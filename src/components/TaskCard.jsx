import React from "react";
import "./../styles/TaskCard.css";
import Tag from "./Tag";
import deleteIcon from "../assets/delete.png";
import editIcon from "../assets/edit.png";
import moment from "moment";
import alertIcon from "../assets/warning_4201973.png";
const TaskCard = ({
  title,
  tags,
  handleDelete,
  index,
  description,
  handleEdit,
  deadline,
  setActiveCard,
  status
}) => {
  const deadlineDate = moment(deadline, "DD/MM/YYYY");
  const isOverdue = deadlineDate.isBefore(moment());

  return (
    <article
      className={`task_card ${isOverdue && status !=="done" ? "overdue" : ""}`}
      draggable
      onDragStart={() => setActiveCard(index)}
      onDragEnd={() => setActiveCard(null)}
    >
      <h1 className="task_text">{title}</h1>
      <h6>{description}</h6>
      <h6>Status: {status}</h6>
      <small>Deadline: {deadline}</small>
      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          {tags.map((tag, tagIndex) => (
            <Tag key={tagIndex} tagName={tag} selected />
          ))}
        </div>
        <div className="d-flex">
          <div className="task_actions" onClick={() => handleEdit(index)}>
            <img
              src={editIcon}
              className="action_icon"
              alt=""
              data-toggle="tooltip"
              data-placement="left"
              title="Edit"
            />
          </div>
          <div className="task_actions" onClick={() => handleDelete(index)}>
            <img
              src={deleteIcon}
              className="action_icon"
              alt=""
              data-toggle="tooltip"
              data-placement="left"
              title="Delete"
            />
          </div>
        </div>
      </div>
      {isOverdue && status !=="done" &&  (
        <p className="mt-2 mb-0 text-white">
          <img src={alertIcon} className="alert_icon" />
          The deadline for this task has been exceeded!
        </p>
      )}
    </article>
  );
};

export default TaskCard;
