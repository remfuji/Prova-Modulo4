const axios = require('axios');

const albumId = "037ef574-e0a6-460f-b24d-f23ba292ac72"; 
const photoId = "01edccf5-5357-46b3-b7fe-776a6be4bfff"; 

axios.delete(`http://localhost:3000/albums/${albumId}/photos/${photoId}`)
  .then(() => {
    console.log(`Photo with ID ${photoId} Successfully removed from album with ID ${albumId}`);
  })
  .catch(error => {
    console.error('An error occurred while removing the photo:', error.response.data);
  });
