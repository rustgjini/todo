export const tagNames = ["HTML", "CSS", "JavaScript", "React"];

export const statusOptions = [
  { value: "todo", label: "To do" },
  { value: "in progress", label: "In Progress" },
  { value: "done", label: "Done" },
];

export const taskOptions = {
  task: "",
  status: "todo",
  tags: [],
  description: "",
  deadline: null,
};

export const filterOptions = [
  { value: "", label: "All" },
  { value: "todo", label: "To do" },
  { value: "in progress", label: "In progress" },
  { value: "done", label: "Done" }
];

export const tagStyle = {
  HTML: { backgroundColor: "#FF5733" }, 
  CSS: { backgroundColor: "#17A2B8" },
  JavaScript: { backgroundColor: "#FFC300" }, 
  React: { backgroundColor: "#61DAFB" }, 
  default: { backgroundColor: "#f9f9f9" }, 
  
};