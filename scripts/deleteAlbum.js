const axios = require('axios');

const albumIdToDelete = "a9a7eab1-ef66-493a-b6de-5c71c6540aa2"; 

axios.delete(`http://localhost:3000/albums/${albumIdToDelete}`)
  .then(response => {
    console.log(`Album con ID ${albumIdToDelete} eliminato con successo`);
  })
  .catch(error => {
    console.error(`Si è verificato un errore durante l'eliminazione dell'album ${albumIdToDelete}:`, error.response.data);
  });
