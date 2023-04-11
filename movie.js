$(document).ready(function() {
    $('form').submit(function(event) {
      event.preventDefault();
  
      var movieTitle = $('#movie-title').val();
  
      $.ajax({
        url: 'https://www.omdbapi.com/',
        type: 'GET',
        data: {
          apikey: '',
          t: movieTitle
        },
        success: function(response) {
          $('#movie-info').html(
            '<p>Title: ' + response.Title + '</p>' +
            '<p>Year: ' + response.Year + '</p>' +
            '<p>Rated: ' + response.Rated + '</p>' +
            '<p>Genre: ' + response.Genre + '</p>' +
            '<p>Director: ' + response.Director + '</p>' +
            '<p>Actors: ' + response.Actors + '</p>' +
            '<p>Plot: ' + response.Plot + '</p>' +
            '<p>IMDB Rating: ' + response.imdbRating + '</p>' +
            '<img src="' + response.Poster + '">');
        },
        error: function() {
          $('#movie-info').html('<p>Sorry, movie information not found.</p>');
        }
      });
    });
  });