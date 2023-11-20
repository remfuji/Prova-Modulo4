const axios = require('axios');

const albumIdToUpdate = "803cfdf7-4e43-4382-9a7b-1bed7d75352f"; 

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
