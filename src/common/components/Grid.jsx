import React from "react";

const DEFAULT_CLASSNAME = "grid";
const Grid = React.memo((props) => {
  return <section className={DEFAULT_CLASSNAME}>{props.children}</section>;
});

export default Grid;
