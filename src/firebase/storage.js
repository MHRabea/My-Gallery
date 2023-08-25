import { useState, useEffect } from "react";
import { storage, db } from "./firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
const Storage = (file) => {
  const [err, setErr] = useState(false);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const storageRef = ref(storage, file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);
    const imagesRef = doc(db, "images", file.name);
    const createdAt = serverTimestamp();

    setDoc(imagesRef, {
      url,
      createdAt,
      name: file.name,
    });
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setErr(true);
        console.log(err);
      },
      async () => {
        await getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setUrl(url);
        });
      }
    );
  }, [file, url]);
  return { progress, url, err };
};
export default Storage;
