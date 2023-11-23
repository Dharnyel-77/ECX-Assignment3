const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const PORT = 5000;
app.use(bodyParser.json());

// let data = [
//   { "name": "Shawshank Redemption", "year": 1994, "id": 1 }
// ];

const films = [
  { "name": "Shawshank Redemption", "year": 1994, "id": 1 },
  { "name": "Kill Bill Vol. 1", "year": 2003, "id": 2 },
  { "name": "Kill Bill Vol. 2", "year": 2004, "id": 3 },
  { "name": "Interstellar", "year": 2014, "id": 4 },
  { "name": "Bad Teacher", "year": 2011, "id": 5 }
];

app.get('/movies', (req, res) => {
  res.json(films); // Send JSON response directly
});

app.get('/movies/:id', (req, res) => {
  const { id } = req.params;
  const film = films.find(movie => movie.id == id); // Use find correctly
  if (!film) {
    return res.status(404).json({ message: `Cannot find any film with ID: ${id}` });
  }
  res.status(200).json(film);
});

// MIDDLEWARE
const rating = (req, res, next) => {
  console.log("It is rated 8.9/10 by IMDb");
  next();
};

app.post('/movies', rating, (req, res) => {
  const { name, year, id } = req.body;
  const newMovie = { name, year, id };
  films.push(newMovie); // Push new movie to the data array
  res.json(newMovie);
});

app.put('/movies/:id', (req, res) => {
  const { id } = req.params;
  const index = films.findIndex(movie => movie.id == id);

  if (index === -1) {
    return res.status(404).json({ message: `Cannot find any film with ID: ${id}` });
  }

  // Update the existing film in the array
  films[index] = { ...films[index], ...req.body };

  // Send the updated film as a response
  res.status(200).json(films[index]);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
