import React, { useState } from "react";
import "./../styles/DropZone.css";

const DropZone = ({ onDrop }) => {
  const [showDrop, setShowDrop] = useState(false);

  return (
    <section
      className={showDrop ? "drop_zone" : "hide"}
      onDragEnter={() => setShowDrop(true)}
      onDragLeave={() => setShowDrop(false)}
      onDrop={() => {
        onDrop();
        setShowDrop(false);
      }}
      onDragOver={(e) => e.preventDefault()}
    > +
    </section>
  );
};

export default DropZone;
