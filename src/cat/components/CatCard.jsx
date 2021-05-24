import React from "react";
import { useSelector } from "react-redux";
import { Card } from "../../common/components";
import {
  setToFavourite,
  deleteFromFavourite,
  changeImageVote,
} from "../model/ImageModel";
import { getCatById } from "../Store/CatSelector";

const CatCard = React.memo((props) => {
  const catObj = useSelector((state) => getCatById(state, props.id));
  const { id, url, likeId, totalVote, voteIds } = catObj;
  const like = likeId !== undefined;

  const likedClicked = React.useCallback(() => {
    if (!like) {
      setToFavourite(id);
    } else {
      deleteFromFavourite(likeId, id);
    }
  }, [like, id, likeId]);

  const clickedUpVote = React.useCallback(() => {
    let value = totalVote + 1;
    changeImageVote(id, value, voteIds);
  }, [id, totalVote, voteIds]);

  const clickedDownVote = React.useCallback(() => {
    let value = totalVote === 0 ? 0 : totalVote - 1;
    changeImageVote(id, value, voteIds);
  }, [id, totalVote, voteIds]);

  return (
    <Card
      liked={likeId !== undefined}
      likeClicked={likedClicked}
      imageUrl={url}
      clickedUpVote={clickedUpVote}
      clickedDownVote={clickedDownVote}
      totalVote={totalVote}
    />
  );
});

export default CatCard;
