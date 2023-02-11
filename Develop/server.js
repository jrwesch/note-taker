const express = require('express');
const dbData = require('./db/db.json');
const PORT =  3001;
const app = express();

app.use(express.static('public'));

app.get('*', (req,res) =>{
  res.sendFile(path.join(_dirname, 'index.html'));
});

app.get('/notes', (req,res) =>{
  res.sendFile(path.join(_dirname, 'notes.html'));
});

app.get('/api/notes', (req, res) => res.json(dbData));

app.post()



app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
  });