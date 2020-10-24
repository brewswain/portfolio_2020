import React, { useEffect, useState } from "react";

const Slide = ({ children, visible }) => {
  const [render, setRender] = useState(visible);

  useEffect(() => {
    if (visible) {
      setRender(true);
    }
  }, [visible]);

  const handleComponentMount = () => {
    if (!visible) {
      setRender(false);
    }
  };
  return (
    render && (
      <div
        style={{ animation: `${visible ? "slideIn" : "slideOut"} 1s` }}
        onAnimationEnd={handleComponentMount}
      >
        {children}
      </div>
    )
  );
};

export default Slide;
