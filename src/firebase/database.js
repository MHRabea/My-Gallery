import { useEffect, useState } from "react";

import { query, collection, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "./firebase";






const useDataBase = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "images"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snaps) => {
      let ImagesArray = [];
      snaps.forEach(snap => {
        ImagesArray.push({ ...snap.data(), id: snap.id });
      });
      setData(ImagesArray);
    });
    return () =>
      unsubscribe();
  }, []);
  return { data };
};








export default useDataBase;







 // const [docs, setDocs] = useState([]);

  // useEffect(() => {
  //   const unsubscribe = db.collection(collection).orderBy('createdAt', 'desc').onSnapshot(snap => {
  //     let documents = [];
  //     snap.forEach(doc => {
  //       documents.push({ ...doc.data(), id: doc.id });
  //     });
  //     setDocs(documents);
  //   });
  //   return () => unsubscribe();
  // }, [collection]);

  // return { docs };


// const useDataBase = () => {
//   const [data, setData] = useState([]);
//   useEffect(() => {

//     const q = query(collection(db, "images"));
//     const unsub = onSnapshot(q, (querySnapshot) => {
//       const Images = [];
//       querySnapshot.forEach((doc) => {
//         Images.push(doc.data().name);
//       });
//       setData(Images);
//     });
//     unsub();
//   }, []);
//   return { data };
// };

// export default useDataBase;
