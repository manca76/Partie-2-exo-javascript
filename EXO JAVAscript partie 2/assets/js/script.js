//EXERCICE 1
function changeImage() {
    document.getElementById('image').src = 'assets/img/dexter2.jpg';
}
function returnImage() {
    document.getElementById('image').src = 'assets/img/dexter1.jpg';
}

//EXERCICE 2
function displayKey() {
    var keyType = document.getElementById('enterText').value;
    alert(keyType);
}