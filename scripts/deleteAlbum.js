const axios = require('axios');

const albumIdToDelete = "803cfdf7-4e43-4382-9a7b-1bed7d75352f"; 

axios.delete(`http://localhost:3000/albums/${albumIdToDelete}`)
  .then(response => {
    console.log(`Album with ID ${albumIdToDelete} successfully deleted`);
  })
  .catch(error => {
    console.error(`An error occurred while deleting the album ${albumIdToDelete}:`, error.response.data);
  });
