import React, { useEffect, useState } from "react";

const Fade = ({ children, visible }) => {
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
        style={{ animation: `${visible ? "fadeIn" : "fadeOut"} .3s` }}
        onAnimationEnd={handleComponentMount}
      >
        {children}
      </div>
    )
  );
};

export default Fade;
