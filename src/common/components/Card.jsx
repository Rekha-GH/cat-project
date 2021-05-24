import React from "react";
import HeartButton from "./HeartButton";
import TransparentButton from "./TransparentButton";

const DEFAULT_CLASSNAME = "card";
const IMAGE_CLASSNAME = `${DEFAULT_CLASSNAME}__image`;
const HEART_CLASSNAME = `${DEFAULT_CLASSNAME}__heart-icon`;
const IMAGE_DETAIL_CLASSNAME = `${DEFAULT_CLASSNAME}__image-detail`;

const Card = React.memo((props) => {
  return (
    <section className={DEFAULT_CLASSNAME}>
      <HeartButton
        classes={HEART_CLASSNAME}
        action={props.likeClicked}
        liked={props.liked}
      />
      <img className={IMAGE_CLASSNAME} alt={"cat"} src={props.imageUrl} />
      <div className={IMAGE_DETAIL_CLASSNAME}>
        <TransparentButton action={props.clickedUpVote}>👍</TransparentButton>
        <TransparentButton action={props.clickedDownVote}>👎</TransparentButton>
        {props.totalVote}
      </div>
    </section>
  );
});

export default Card;
