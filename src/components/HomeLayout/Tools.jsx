import React from "react";
import LinkButton from "./LinkButton";

function Tools() {
  return (
    <>
      <div className="col">Tools</div>
      <div>
        <LinkButton button_text={"proxy pool 5010"} />
        <LinkButton button_text={"MITM 8096"} />
        <LinkButton button_text={"android emu 6080"} />
        <LinkButton button_text={"android emu 6081"} />
        <LinkButton button_text={"android emu 6082"} />
        <LinkButton button_text={"colorhunt"} />
        <LinkButton button_text={"flatuicolors"} />
        <LinkButton button_text={"design-resources-dev"} />
      </div>
    </>
  );
}

export default Tools;
