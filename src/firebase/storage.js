import { useState, useEffect } from "react";
import { storage } from "./firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

const Storage = (file) => {
  const [err, setErr] = useState(false);
  const [url, setUrl] = useState(null);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const storageRef = ref(storage, file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setErr(true);
      },
      async () => {
        await getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setUrl(url);
        });
      }
    );
  }, [file]);
  return { progress, url, err };

};
export default Storage;
