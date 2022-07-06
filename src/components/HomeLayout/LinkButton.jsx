import React from "react";

function LinkButton({ button_text, button_link, ...props }) {
  return (
    <>
      <div className="padding--sm">
        <button className="button button--primary" style={{ color: "white" }}>
          {button_text}
        </button>
      </div>
    </>
  );
}

export default LinkButton;
