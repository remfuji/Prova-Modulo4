const axios = require('axios');

const albumId = "d03f1759-104e-4f58-b2a0-65f7a5a3621f"; 
const photoId = "fb13ed1f-5ca4-428a-86ce-ec906b9e23f5"; 

axios.delete(`http://localhost:3000/albums/${albumId}/photos/${photoId}`)
  .then(() => {
    console.log(`Photo with ID ${photoId} Successfully removed from album with ID ${albumId}`);
  })
  .catch(error => {
    console.error('An error occurred while removing the photo:', error.response.data);
  });
