//Variables
var showDiv = document.getElementById('shows')
var form = document.querySelector('form')
var URL = 
//Submit
form.onsubmit = function(e) {
    e.preventDefault()
    var searchTerm = this.showName.value
    if (!searchTerm) return
    form.showName.value = ""
    fetch(" https://www.omdbapi.com/?t=" + searchTerm + "&type=series&apikey=3045859d")
    .then(function(res) {
        if(res.status !== 200){
            throw new Error('Show not found')
        }
        return res.json()
    })
    .then(function(data) {
        console.log(data)
        showDiv.innerHTML = ""
        //show name
        var h2 = document.createElement('h2')
        h2.textContent = data.Title
        showDiv.appendChild(h2)
        //release date
        var releaseDate = document.createElement('p')
        releaseDate.textContent = "Aired: " + data.Year
        showDiv.appendChild(releaseDate)
        //genre
        var genre = document.createElement('p')
        genre.textContent = "Genre: " + data.Genre
        showDiv.appendChild(genre)
        //cast
        var cast = document.createElement('p')
        cast.textContent = "Cast: " + data.Actors
        showDiv.appendChild(cast)
        //seasons
        var seasons = document.createElement('p')
        seasons.textContent = "Number of Seasons: " + data.totalSeasons
        showDiv.appendChild(seasons)
        //awards
        var awards = document.createElement('p')
        awards.textContent = "Awards: " + data.Awards
        showDiv.appendChild(awards)
        //poster
        var poster = document.createElement('img')
        poster.src = data.Poster
        poster.alt = data.Title
        showDiv.appendChild(poster)
    })
    .catch(function(err){
        showDiv.innerHTML = err.message
    })
}