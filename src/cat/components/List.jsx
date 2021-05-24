import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "../../common/components";
import { getAll } from "../model/ImageModel";
import CatCard from "./CatCard";
import { getIdList } from "../Store/CatSelector";
import ErrorMessage from "../../common/components/ErrorMessage";

const List = React.memo(() => {
  const list = useSelector(getIdList);
  React.useEffect(() => {
    getAll();
  }, []);

  return (
    <>
      <ErrorMessage />
      <Grid>
        {list.map((x) => (
          <CatCard key={x} id={x} />
        ))}
      </Grid>
    </>
  );
});

export default List;
