import React from "react";
import { Switch, Route } from "react-router-dom";

import {
  List,
  UploadImage
} from "../../cat/components";

const SwitchRouter = React.memo(() => {
  return (
    <Switch>
      <Route path="/upload">
        <UploadImage />
      </Route>
      <Route path="/">
        <List />
      </Route>
    </Switch>
  );
});

export default SwitchRouter;
