import React from "react";
import LinkButton from "./LinkButton";

function Notes() {
  return (
    <>
      <div className="col">Notes</div>
      <div>
        <div className="padding--sm">
          <LinkButton button_text={"ports"} />
        </div>
      </div>
    </>
  );
}

export default Notes;
