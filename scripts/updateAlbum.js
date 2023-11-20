const axios = require('axios');

const albumIdToUpdate = "d03f1759-104e-4f58-b2a0-65f7a5a3621f"; 

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
