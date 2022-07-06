import React from "react";
import LinkButton from "./LinkButton";

function Containers() {
  return (
    <>
      <div className="col">Containers</div>
      <div>
        <LinkButton button_text={"NUC portainers"} />
        <LinkButton button_text={"M73 portainers"} />
        <LinkButton button_text={"pgamdin"} />
        <LinkButton button_text={"phpmyadmin"} />
        <LinkButton button_text={"drone ci"} />
        <LinkButton button_text={"jenkins"} />
        <LinkButton button_text={"influxdb"} />
        <LinkButton button_text={"appwrite"} />
        <LinkButton button_text={"rethinkdb 8093"} />
      </div>
    </>
  );
}

export default Containers;
