import React from "react";
import { filterOptions } from "./config";
import "./../styles/TaskFilter.css";

const TaskFilter = ({ filterStatus, setFilterStatus }) => {
  return (
    <div className="filter">
      <div className="filter_column">
        <label htmlFor="statusFilter">Filter by Status:</label>
        <select
          id="statusFilter"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          {filterOptions.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default TaskFilter;
