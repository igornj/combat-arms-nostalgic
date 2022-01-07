/* eslint-disable no-unused-vars */
import { initializeApp } from 'firebase/app';
import { getStorage, getDownloadURL, ref, listAll } from 'firebase/storage';

const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
};

const app = initializeApp(firebaseConfig);
const storage = getStorage();

export const listEve = (folder) => {
  const storageRef = ref(storage, folder);
  const urlsArray = [];

  listAll(storageRef)
    .then((res) => {
      res.prefixes.forEach((folderRef) => {
        //console.log(`folder: ${folderRef}`);
      });
      res.items.forEach((itemRef) => {
        getDownloadURL(itemRef).then((url) => {
          urlsArray.push(url);
        });
      });
    })
    .catch((error) => {
      console.log(error);
    });

  return urlsArray;
};
