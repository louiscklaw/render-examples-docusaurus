import React from "react";
import LinkButton from "./LinkButton";

function StatusReporting() {
  return (
    <>
      <div className="col">StatusReporting</div>
      <div>
        <LinkButton button_text={"uptime kuma"} />
        <LinkButton button_text={"routing check"} />
        <LinkButton button_text={"healthcheck.iamon99.com"} />
        <LinkButton button_text={"upptime"} />
      </div>
    </>
  );
}

export default StatusReporting;
