import React from "react";
import "./../styles/Tag.css";

const Tag = ({ tagName, selectTag, selected }) => {
  const tagStyle = {
    HTML: { backgroundColor: "#FF5733" }, 
    CSS: { backgroundColor: "#17A2B8" },
    JavaScript: { backgroundColor: "#FFC300" }, 
    React: { backgroundColor: "#61DAFB" }, 
    default: { backgroundColor: "#f9f9f9" }, 
    
  };

  if (selectTag) {
    return (
      <button
        type="button"
        className="tag"
        style={selected ? tagStyle[tagName] : tagStyle.default}
        onClick={() => selectTag(tagName)}
      >
        {tagName}
      </button>
    );
  } else {
    return (
      <span
        className="tag"
        style={selected ? tagStyle[tagName] : tagStyle.default}
      >
        {tagName}
      </span>
    );
  }
};

export default Tag;
