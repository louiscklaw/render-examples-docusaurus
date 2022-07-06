import React from "react";

import LinkButton from "./LinkButton";

function SocialProfiles() {
  return (
    <>
      <div className="col">Dashboards</div>
      <div>
        <LinkButton
          button_text={"checkmk"}
          button_link={"http://www.google.com"}
        />

        <div className="padding--sm">
          <LinkButton button_text={"traefik"} />
        </div>
        <div className="padding--sm">
          <button className="button button--primary" style={{ color: "white" }}>
            homer
          </button>
        </div>
        <div className="padding--sm">
          <button className="button button--primary" style={{ color: "white" }}>
            luigi
          </button>
        </div>
      </div>
    </>
  );
}

export default SocialProfiles;
