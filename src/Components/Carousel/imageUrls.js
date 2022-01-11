/* eslint-disable no-unused-vars */
// import { listEve } from '../../Services/firebase-config';

// export const imagesUrls = listEve('combatarms-lifetime/');

// import { handler } from '../../Services/aws-list_images';

// handler()
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e));

//https://combatarms-lifetime-images.s3.us-east-2.amazonaws.com/

// readFiles()
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e));

//console.log(allKeys);

// const objects = readFiles();
// objects
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => console.log(e));

// const getData = () => {
//   return readFiles().then((data) => {
//     return data;
//   });
// };

// const dataObjects = getData();
// dataObjects.then((data) => console.log(data));

// const getObjects = async () => {
//   const data = await readFiles();
//   console.log(data);
// };

// import ca01 from '../../Assets/Carousel/01.bmp';
// import ca02 from '../../Assets/Carousel/02.bmp';
// import ca03 from '../../Assets/Carousel/03.bmp';
// import ca04 from '../../Assets/Carousel/04.bmp';
// import { handler as awsBucketImages } from '../../Services/aws-list_images';

// const imgsArray = [];

// awsBucketImages().then((data) => imgsArray.push(data));
// //.catch((e) => console.log(e));

// console.log(imgsArray[0]);

// export default imgsArray;

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../../Assets/Carousel/', false));

export default images;
