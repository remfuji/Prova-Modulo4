const axios = require('axios');

const albumId = "88ea33aa-3fc8-4e28-83ae-71114c5f84cf"; 
const photoId = "1e8cc76a-cb5d-42c2-919f-bb38a4b15428"; 

const updatedPhotoData = {
  name: 'Nuovo Nome Foto',
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
