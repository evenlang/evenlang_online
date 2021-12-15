var data = document.getElementById("aux");
var captions = JSON.parse(data.getAttribute('captions'));
var total = data.getAttribute('total');

for (var i = parseInt(total); i >= 0; i--) {
   var template = document.getElementById('to_copy').cloneNode(true);

	template.style.display = "block";

	var path1 = template.querySelector("div div img").src;
	var path2 = template.querySelector("div button img").src;
	template.querySelector("div div img").src = path1 + i + ".jpeg";
	template.querySelector("div button img").src = path2 + i + ".jpeg";
	if (captions[i]){
		template.querySelector("div div h4").append(captions[i][0]);
		template.querySelector("div div h5").append(captions[i][1]);
	}
	

	if (i % 3 == 0){
		document.getElementById('col1').appendChild(template)
	} else if (i % 3 == 1) {
		document.getElementById('col2').appendChild(template)
	} else {
		document.getElementById('col3').appendChild(template)
	}
}

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
	for (let i = 0; i < btn.length; i++) {
		if (event.target == modal[i]) {
			modal[i].style.display = "none";
		}
	};
	if (event.target == cite) {
		cite.style.display = "none";
	}
}
