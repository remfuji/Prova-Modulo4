const axios = require('axios');

const albumId = "45753fc9-c895-4607-95ff-d03436ca4a7f"; 
const photoId = "0a9f63e2-79cf-4a0a-a28e-4e9b7bf62f9f"; 

axios.delete(`http://localhost:3000/albums/${albumId}/photos/${photoId}`)
  .then(() => {
    console.log(`Photo with ID ${photoId} Successfully removed from album with ID ${albumId}`);
  })
  .catch(error => {
    console.error('An error occurred while removing the photo:', error.response.data);
  });
