function countCharacters() {
    let contentValue = document.getElementById("contentInput").value;
    let characterCount = contentValue.length;
    
    document.getElementById("resultCount").innerHTML = characterCount;
}