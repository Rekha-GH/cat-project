import React from "react";
import { useHistory } from "react-router-dom";
import ErrorMessage from "../../common/components/ErrorMessage";
import { upload } from "../model/ImageModel";

const DEFAULT_CLASSNAME = "upload-image";
const UploadImage = React.memo((props) => {
  const history = useHistory();
  const [loading, setLoading] = React.useState(false);
  const onChange = React.useCallback(
    (e) => {
      setLoading(true);

      const files = Array.from(e.target.files);
      const formData = new FormData();
      formData.append("sub_id", "");
      files.forEach((file, i) => {
        formData.append("file", file);
      });

      upload(formData)
        .then(() => {
          history.push("/");
        })
        .catch((e) => {
          setLoading(false);
        });
    },
    [setLoading, history]
  );

  return (
    <div className={DEFAULT_CLASSNAME}>
      <input disabled={loading} type="file" size="1" onChange={onChange} />
      {loading && <div>Uploding...</div>}
      <ErrorMessage />
    </div>
  );
});

export default UploadImage;
