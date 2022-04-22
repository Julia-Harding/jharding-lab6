// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



var signIn = document.getElementById("container");

signIn.addEventListener("mouseover", function () {

});

var button = document.getElementById("mybutton");

button.addEventListener("mouseover", function () {
    button.style.opacity = 0.5;
});

button.addEventListener("mouesout", function () {
    button.style.opacity = 1.0;
});

document.getElementsByTagName("body")[0].style.cursor = "../public/img/cursor.png, auto";