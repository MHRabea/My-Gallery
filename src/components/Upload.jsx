import React, { useState } from "react";
import Progressbar from "./progress";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [err, setErr] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const handleUpload = (e) => {
    const uploadedFile = e.target.files[0];

    if (uploadedFile && types.includes(uploadedFile.type)) {
      setFile(uploadedFile);
      setErr(null);
      console.log("uploaded", uploadedFile);
    } else {
      setFile(null);
      setErr("image type unsupported please use (png or jpeg)");
      console.log("image type unsupported please use {png or jpeg}");
    }
  };

  return (
    <form action="" className="upload-form">
      <input
        type="file"
        id="upload"
        style={{ display: "none" }}
        onChange={handleUpload}
      />
      <label
        htmlFor="upload"
        className="btn btn-dark btn-circle btn-x1 d-flex justify-content-center"
      >
        +
      </label>
      <div className="output">
        {err && <div className="error">{err}</div>}
        {file && (
          <div className="d-flex justify-content-center file-name">
            {file.name}
          </div>
        )}
        {file && <Progressbar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default Upload;
