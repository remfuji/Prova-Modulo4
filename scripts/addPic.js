const axios = require('axios');

const albumId = "88ea33aa-3fc8-4e28-83ae-71114c5f84cf"; 
const newPhotoData = {
  name: 'Nuova Foto',
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
