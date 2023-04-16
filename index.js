//get variables and storage
function store(){
    var movie = document.getElementById('movie').value;
    var show = document.getElementById('show').value;
    var key = document.getElementById('key').value;

    const favorites = {
        Movie: movie,
        Show: show,
    }

    window.localStorage.setItem(key,JSON.stringify(favorites));
}

//retrieve records using key
function getRecords(){
    var key = document.getElementById('getFav').value;
    var records = window.localStorage.getItem(key);
    var paragraph = document.createElement("p");
    var infor = document.createTextNode(records);
    paragraph.appendChild(infor);
    var element = document.getElementById("retrieve");
    element.appendChild(paragraph);
}

//clear records
function clearStorage(){
    localStorage.clear()
}

//give buttons established functions
window.onload = function(){
    document.getElementById("user-info").onsubmit = store
    document.getElementById("clearBtn").onclick = clearStorage
    document.getElementById("getBtn").onclick = getRecords
}