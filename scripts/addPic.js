const axios = require('axios');

const albumId = "037ef574-e0a6-460f-b24d-f23ba292ac72"; 
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
