var actorDiv = document.getElementById('actorinfo');
var form = document.querySelector('form');
var URL = "";

form.onsubmit = function(e) {
    e.preventDefault()
    var searchTerm = this.actorName.value
    if (!searchTerm) return
    form.actorName.value = ""
    fetch("https://api.themoviedb.org/3/movie/550?api_key=5b96fe3be7fae014b08a2548f8f96219" + searchTerm)
    .then(function(res) {
        if(res.status !== 200){
            throw new Error('Show not found')
        }
        return res.json()
    })
    .then(function(data) {
        console.log(data)
        actorDiv.innerHTML = ""

        var h2 = document.createElement('h2')
        h2.textContent = data.name
        actorDiv.appendChild(h2)

        var birthday = document.createElement('p')
        birthday.textContent = "Birthday: " + data.birthday
        actorDiv.appendChild(birthday)

        var place_of_birth = document.createElement('p')
        cast.textContent = "Place of Birth: " + data.place_of_birth
        actorDiv.appendChild(place_of_birth)

        var biography = document.createElement('p')
        biography.textContent = "Biography: " + data.biography
        actorDiv.appendChild(biography)
    })
    .catch(function(err){
        actorDiv.innerHTML = err.message
    })
}