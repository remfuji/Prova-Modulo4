const axios = require('axios');

const albumId = "d198641b-f442-4a63-a095-db0fa5fd34af"; 
const photoId = "ecc52ff1-30d1-404b-adef-a354196861e7"; 

const updatedPhotoData = {
  name: 'New Photo Name',
  hashtags: ['#albero', '#vigilia'],
};

axios.put(`http://localhost:3000/albums/${albumId}/photos/${photoId}`, updatedPhotoData)
  .then(response => {
    console.log(`Photo with ID ${photoId} in album with ID ${albumId} successfully edited`);
    console.log('New photo details:', response.data);
  })
  .catch(error => {
    console.error(`An error occurred while editing the photo with ID  ${photoId} in the album with ID  ${albumId}:`, error.response.data);
  });
