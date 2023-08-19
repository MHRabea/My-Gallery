import React, { useEffect, useState } from "react";

import Storage from "../firebase/storage";

const Progressbar = ({ file, setFile }) => {
  const { url, progress } = Storage(file);
  const [isUploadComplete, setIsUploadComplete] = useState(false);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        setIsUploadComplete(true);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  return (
    <div>
      <div className="progress">
        <div
          className="progress-bar progress-bar-striped progress-bar-animated justify-content-center"
          role="progressbar"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="150"
          style={{ width: `${progress}%` }}
        >
          {progress}%
        </div>
      </div>
      {isUploadComplete && (
        <div className="upload-message d-flex justify-content-center">
          <p className=" slide-out-right">Successfully Uploaded</p>
        </div>
      )}
    </div>
  );
};

export default Progressbar;
