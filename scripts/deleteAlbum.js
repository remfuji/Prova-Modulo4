const axios = require('axios');

const albumIdToDelete = "d03f1759-104e-4f58-b2a0-65f7a5a3621f"; 

axios.delete(`http://localhost:3000/albums/${albumIdToDelete}`)
  .then(response => {
    console.log(`Album with ID ${albumIdToDelete} successfully deleted`);
  })
  .catch(error => {
    console.error(`An error occurred while deleting the album ${albumIdToDelete}:`, error.response.data);
  });
