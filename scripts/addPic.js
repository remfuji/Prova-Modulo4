const axios = require('axios');

const albumId = "d198641b-f442-4a63-a095-db0fa5fd34af"; 
const newPhotoData = {
  name: 'New Photo',
  hashtags: ['#decorazioni', '#natale2023']
};

axios.post(`http://localhost:3000/albums/${albumId}/photos`, newPhotoData)
  .then(response => {
    console.log(`new Pic added to album: ${albumId}`);
    console.log(response.data);
  })
  .catch(error => {
    console.error('An error occurred while adding the photo', error.response.data);
  });
