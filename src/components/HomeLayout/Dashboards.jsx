import React from "react";

import LinkButton from "./LinkButton";

function Dashboards() {
  return (
    <>
      <div className="col">Dashboards</div>
      <div>
        <div className="padding--sm">
          <LinkButton button_text={"traefik"} />
        </div>
        <div className="padding--sm">
          <LinkButton button_text={"homer"} />
        </div>
        <div className="padding--sm">
          <LinkButton button_text={"luigi"} />
        </div>
      </div>
    </>
  );
}

export default Dashboards;
