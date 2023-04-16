var MovieDiv = document.getElementById('movie');
var form = document.querySelector('form');
var URL = "";

form.onsubmit = function(e) {
  e.preventDefault();
  var searchTerm = this.movieTitle.value;
  if (!searchTerm) return;
  form.movieTitle.value = "";
  
  fetch("https://www.omdbapi.com/?t=" + searchTerm + "&type=movie&apikey=4975ce62")
  .then(function(res) {
      if(res.status !== 200){
          throw new Error('Movie not found');
      }
      return res.json();
  })
  .then(function(data) {
    console.log(data);
    MovieDiv.innerHTML = "";
    
    var h2 = document.createElement('h2');
    h2.textContent = data.Title;
    MovieDiv.appendChild(h2);
    
    var Year = document.createElement('p');
    Year.textContent = "Released: " + data.Year;
    MovieDiv.appendChild(Year);

    var Rating = document.createElement('p');
    Rating.textContent = "Rating: " + data.imdbRating;
    MovieDiv.appendChild(Rating);

    var Genre = document.createElement('p');
    Genre.textContent = "Genre: " + data.Genre;
    MovieDiv.appendChild(Genre);

    var Director = document.createElement('p');
    Director.textContent = "Director: " + data.Director;
    MovieDiv.appendChild(Director);

    var Actors = document.createElement('p');
    Actors.textContent = "Actors: " + data.Actors;
    MovieDiv.appendChild(Actors);

    var Plot = document.createElement('p');
    Plot.textContent = "Plot: " + data.Plot;
    MovieDiv.appendChild(Plot);

    var poster = document.createElement('img');
    poster.src = data.Poster;
    poster.alt = data.Title;
    MovieDiv.appendChild(poster);
  })
  .catch(function(err){
    MovieDiv.innerHTML = err.message;
  });
};