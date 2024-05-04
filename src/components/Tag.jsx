import React from "react";
import "./../styles/Tag.css";

const Tag = ({ tagName, selectTag, selected }) => {
  const tagStyle = {
    HTML: { backgroundColor: "#fda821" },
    CSS: { backgroundColor: "#15d4c8" },
    JavaScript: { backgroundColor: "#ffd12c" },
    React: { backgroundColor: "#4cdafc" },
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
