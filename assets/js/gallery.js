// Get the modal
var modal = document.getElementsByClassName('modal');

// Get the button that opens the modal
var btn = document.getElementsByClassName("myBtn");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

// When the user clicks the button, open the modal 
for (let i = 0; i < btn.length; i++) {
  btn[i].onclick = function() {
    modal[i].style.display = "block";
}
}


// When the user clicks on <span> (x), close the modal

for (let i = 0; i < btn.length; i++) {
  span[i].onclick = function() {
    modal[i].style.display = "none";
}
}

// When the user clicks anywhere outside of the modal, close it
for (let i = 0; i < btn.length; i++) {
  window.onclick = function(event) {
    if (event.target == modal[i]) {
         modal[i].style.display = "none";
     }
}
}


