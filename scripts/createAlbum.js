const axios = require('axios');

const newAlbumData = {
  name: 'Natale',
  hashtags: ['#BabboNatale', '#Regali', '#MagiaDelNatale'],
};

axios.post('http://localhost:3000/albums', newAlbumData)
  .then(response => {
    console.log('New album successfully created:');
    console.log(response.data);
  })
  .catch(error => {
    console.error('An error occurred while creating the album:', error.response.data);
  });
