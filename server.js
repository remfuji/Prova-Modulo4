const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
let albums = require('./albums');

const app = express();
app.use(bodyParser.json());

const generateUniqueId = () => {
  return uuidv4();
};

const getCurrentDateTime = () => {
  const now = new Date();
  return now
};

const updateModifiedDateTime = (resource) => {
  resource.modifiedAt = getCurrentDateTime();
};

app.get('/', (req, res) => {
    res.json('Server Photoazon');
  });

app.get('/albums', (req, res) => {
  res.json(albums);
});

app.get('/albums/:id', (req, res) => {
    const { id } = req.params;
    const album = albums.find(album => album.id === id);
  
    if (!album) {
      return res.status(404).json({ message: 'Album not found' });
    }
    res.json(album);
  });
  
app.post('/albums', (req, res) => {
  const { name, hashtags } = req.body;
  const newAlbum = {
    id: generateUniqueId(),
    name,
    photos: [],
    hashtags: hashtags || [],
    createdAt: getCurrentDateTime(),
    modifiedAt: getCurrentDateTime(),
  };
  albums.push(newAlbum);
  res.status(201).json(newAlbum);
});

app.delete('/albums/:id', (req, res) => {
  const { id } = req.params;

   albums = albums.filter(album => album.id !== id);
  console.log(albums)
  res.sendStatus(204);
});

app.post('/albums/:id/photos', (req, res) => {
  const { id } = req.params;
  const { name, hashtags } = req.body;
  const album = albums.find(album => album.id === id);
  if (!album) {
    return res.status(404).json({ message: 'Album not found' });
  }
  
  const newPhoto = {
    id: generateUniqueId(),
    name,
    createdAt: getCurrentDateTime(),
    modifiedAt: getCurrentDateTime(),
    hashtags: hashtags || [],
    
  };
  album.photos.push(newPhoto);
  updateModifiedDateTime(album);
  res.status(201).json(newPhoto);
});

app.delete('/albums/:albumId/photos/:photoId', (req, res) => {
  const { albumId, photoId } = req.params;
  const album = albums.find(album => album.id === albumId);
  
  if (!album) {
    return res.status(404).json({ message: 'Album not found' });
  }

  const updatedPhotos = album.photos.filter(photo => photo.id !== photoId);
  album.photos = updatedPhotos;
  
  updateModifiedDateTime(album);
  res.sendStatus(204);
});

app.put('/albums/:id',  (req, res) => {
  const { id } = req.params;
  const { name, hashtags } = req.body; 
  const albumToUpdateIndex = albums.findIndex(album => album.id === id);

  if (albumToUpdateIndex === -1) {
    return res.status(404).json({ message: 'Album not found' });
  }

  const updatedAlbum = {
    ...albums[albumToUpdateIndex], 
    name: name || albums[albumToUpdateIndex].name, 
    hashtags: hashtags || albums[albumToUpdateIndex].hashtags,
    modifiedAt: getCurrentDateTime(), 
  };

  albums[albumToUpdateIndex] = updatedAlbum;

  res.json(updatedAlbum);
});


app.put('/albums/:albumId/photos/:photoId', (req, res) => {
  const { albumId, photoId } = req.params;
  const { name, hashtags} = req.body;

  const album = albums.find(album => album.id === albumId);

  if (!album) {
    return res.status(404).json({ message: 'Album not found' });
  }

  const photoToUpdateIndex = album.photos.findIndex(photo => photo.id === photoId);

  if (photoToUpdateIndex === -1) {
    return res.status(404).json({ message: 'Photo not found' });
  }

  const updatedPhoto = {
    ...album.photos[photoToUpdateIndex],
    name: name || album.photos[photoToUpdateIndex].name, 
    hashtags: hashtags || photos[photoToUpdateIndex].hashtags, 
    modifiedAt: getCurrentDateTime(), 
  };

  album.photos[photoToUpdateIndex] = updatedPhoto; 
  updateModifiedDateTime(album); 
  res.json(updatedPhoto);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening ${PORT}`);
});
