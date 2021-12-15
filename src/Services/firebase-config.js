/* eslint-disable no-unused-vars */
import { initializeApp } from 'firebase/app';
import { getStorage, getDownloadURL, ref, listAll } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAE3ywmva8E070WwRBS928vt1ed0Mbz7Hw',
  authDomain: 'combat-arms-nostalgic.firebaseapp.com',
  projectId: 'combat-arms-nostalgic',
  storageBucket: 'combat-arms-nostalgic.appspot.com',
  messagingSenderId: '117820698303',
  appId: '1:117820698303:web:030c577b4bb5f12e1de00a',
};

const app = initializeApp(firebaseConfig);
const storage = getStorage();

export const listEve = (folder) => {
  const storageRef = ref(storage, folder);

  const urlsArray = [];
  listAll(storageRef)
    .then((res) => {
      res.prefixes.forEach((folderRef) => {
        console.log(`folder: ${folderRef}`);
        // You may call listAll() recursively on them.
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

  console.log(urlsArray);
  return urlsArray;
};

// import firebase from 'firebase/app';
// import 'firebase/storage';

// const firebaseConfig = {
//   apiKey: 'AIzaSyAE3ywmva8E070WwRBS928vt1ed0Mbz7Hw',
//   authDomain: 'combat-arms-nostalgic.firebaseapp.com',
//   projectId: 'combat-arms-nostalgic',
//   storageBucket: 'combat-arms-nostalgic.appspot.com',
//   messagingSenderId: '117820698303',
//   appId: '1:117820698303:web:030c577b4bb5f12e1de00a',
// };

// export function listAll(folder) {
//   const storageRef = firebase.storage().ref();

//   // [START storage_list_all]
//   // Create a reference under which you want to list
//   var listRef = storageRef.child(folder);

//   // Find all the prefixes and items.
//   listRef
//     .listAll()
//     .then((res) => {
//       res.prefixes.forEach((folderRef) => {
//         // All the prefixes under listRef.
//         // You may call listAll() recursively on them.
//       });
//       res.items.forEach((itemRef) => {
//         // All the items under listRef.
//         itemRef.getDownloadURL().then((url) => {
//           console.log(`download url: ${url}`);
//         });
//       });
//     })
//     .catch((error) => {
//       console.log(error);
//     });
//   // [END storage_list_all]
// }

// firebase.initializeApp(firebaseConfig);
