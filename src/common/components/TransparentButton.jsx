import React from "react";
import { classNames } from '../Utils/classUtils';

const DEFAULT_CLASSNAME = "transparent-button";

const TransparentButton = React.memo((props) => {
  const resultClass = classNames(DEFAULT_CLASSNAME, props.classes);

  return (
    <button type={"button"} className={resultClass} onClick={props.action}>
      {props.children}
    </button>
  );
});

export default TransparentButton;
