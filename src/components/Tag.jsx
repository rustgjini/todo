import React from "react";
import { tagStyle } from "./config";
import "./../styles/Tag.css";

const Tag = ({ tagName, selectTag, selected }) => {
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
