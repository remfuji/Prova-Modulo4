const axios = require('axios');

const albumId = "037ef574-e0a6-460f-b24d-f23ba292ac72"; 
const photoId = "01edccf5-5357-46b3-b7fe-776a6be4bfff"; 

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
