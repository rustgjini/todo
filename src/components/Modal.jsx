import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import DatePicker from "react-datepicker"; 
import { tagNames, statusOptions, taskOptions } from "./config";
import Tag from "./Tag";
import "react-datepicker/dist/react-datepicker.css"; 
import "./../styles/Modal.css";

const FormModal = ({ setTasks, taskToEdit, setTaskToEdit }) => {
  const [showModal, setShowModal] = useState(false);
  const [taskData, setTaskData] = useState(taskOptions);

  useEffect(() => {
    if (taskToEdit) {
      setTaskData(taskToEdit);
      setShowModal(true);
    }
  }, [taskToEdit]);

  const checkTag = (tag) => taskData.tags.includes(tag);

  const selectTag = (tag) => {
    const updatedTags = taskData.tags.includes(tag)
      ? taskData.tags.filter((item) => item !== tag)
      : [...taskData.tags, tag];
    setTaskData((prev) => ({ ...prev, tags: updatedTags }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDeadlineChange = (date) => {
    setTaskData((prev) => ({ ...prev, deadline: date }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let deadlineDate = taskData.deadline; 

    if (!deadlineDate) {
      deadlineDate = new Date();
      deadlineDate.setHours(deadlineDate.getHours() + 24);
    }
  
    if (taskToEdit) {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === taskToEdit.id ? { ...taskData, id: task.id } : task
        )
      );
    } else {
      const newTask = { ...taskData, id: Date.now(), deadline: deadlineDate };
      setTasks((prevTasks) => [...prevTasks, newTask]);
    }
  
    setTaskData(taskOptions);
    handleClose();
  };
  
  const handleClose = () => {
    setShowModal(false);
    setTaskToEdit(null); 
  };

  const handleShow = () => setShowModal(true);

  return (
    <header className="app_header">
      <Button variant="primary" onClick={handleShow}>
        {"+ Create a new task"}
      </Button>
      <Modal show={showModal} onHide={handleClose} className="mt-4">
        <Modal.Header className="bg-primary" closeButton>
          <Modal.Title style={{ color: "white" }}>
            {taskToEdit ? "Edit Task" : "Create a new task"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="task" className="mb-3">
              <Form.Label>Task</Form.Label>
              <Form.Control
                type="text"
                name="task"
                value={taskData.task}
                placeholder="Enter your task"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="description" className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={taskData.description}
                placeholder="Enter task description"
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="tags" className="mb-3">
              <Form.Label>Tags</Form.Label>
              <div>
                {tagNames.map((tagName) => (
                  <Tag
                    key={tagName}
                    tagName={tagName}
                    selectTag={selectTag}
                    selected={checkTag(tagName)}
                  />
                ))}
              </div>
            </Form.Group>
            <Form.Group controlId="status" className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Control
                as="select"
                name="status"
                value={taskData.status}
                onChange={handleChange}
              >
                {statusOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="deadline" className="mb-3">
              <Form.Label>Deadline</Form.Label>
              <DatePicker
               className="datepicker"
                selected={taskData.deadline}
                onChange={handleDeadlineChange}
                dateFormat="dd/MM/yyyy"
                // minDate={new Date()}
              />
            </Form.Group>
            <Button variant="success" type="submit" className="mt-2">
              {taskToEdit ? "Save Changes" : "Submit"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </header>
  );
};

export default FormModal;
