var actorDiv = document.getElementById('actorinfo');
var form = document.querySelector('form');
var URL = "";

form.onsubmit = function(e) {
    e.preventDefault()
    var searchTerm = this.actorName.value
    if (!searchTerm) return
    form.actorName.value = ""
    fetch("https://api.themoviedb.org/3/search/person?api_key=5b96fe3be7fae014b08a2548f8f96219&query=" + searchTerm)
    .then(function(res) {
        if(res.status !== 200){
            throw new Error('Actor not found')
        }
        return res.json()
    })
    .then(function(data) {
        console.log(data)
        actorDiv.innerHTML = ""

        var h2 = document.createElement('h2')
        h2.textContent = data.results[0].name
        actorDiv.appendChild(h2)

        var popularity = document.createElement('p')
        popularity.textContent = "Popularity Rating: " + data.results[0].popularity
        actorDiv.appendChild(popularity)

        var biography = document.createElement('p')
        biography.textContent = "Known For: " + data.results[0].known_for[0].title + ", " + data.results[0].known_for[1].title + ", and " + data.results[0].known_for[2].title
        actorDiv.appendChild(biography)

    })
    .catch(function(err){
        actorDiv.innerHTML = err.message
    })
}