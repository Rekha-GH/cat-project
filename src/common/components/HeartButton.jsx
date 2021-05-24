import React from "react";
import TransparentButton from "./TransparentButton";
import { classNames } from "../Utils/classUtils";

const DEFAULT_CLASSNAME = "heart-button";
const HeartButton = React.memo((props) => {
  let resultClass = classNames(DEFAULT_CLASSNAME, props.classes, {
    [`${DEFAULT_CLASSNAME}--active`]: props.liked,
  });

  return <TransparentButton action={props.action} classes={resultClass} />;
});

export default HeartButton;
