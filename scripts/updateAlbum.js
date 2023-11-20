const axios = require('axios');

const albumIdToUpdate = "fbd91f22-beac-4043-9b55-0d63b95b1989"; 

const updatedAlbumData = {
  name: 'Update Name Album',
  hashtags: ['#NataleDaiSuoi'],
};

axios.put(`http://localhost:3000/albums/${albumIdToUpdate}`, updatedAlbumData)
  .then(response => {
    console.log(`Album with ID ${albumIdToUpdate} successfully modified`);
  })
  .catch(error => {
    console.error(`An error occurred while editing the album ${albumIdToUpdate}:`, error.response.data);
  });
