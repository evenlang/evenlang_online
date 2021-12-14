// Get the modal
var cite = document.getElementById("modalcitation");

// Get the button that opens the modal
var btncite = document.getElementById("citationbtn");

// Get the <span> element that closes the modal
var citespan = document.getElementById("citeclose");

// When the user clicks the button, open the modal 
btncite.onclick = function() {
    cite.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
citespan.onclick = function() {
    cite.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == cite) {
    cite.style.display = "none";
    }
}