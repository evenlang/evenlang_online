function show(y) {
  var x = document.getElementById(y.name);
  x.style.display = "block";
  y.style.display = "none";
  var z = document.getElementById(y.name + "_hide")
  z.style.display = "block";
}

function hide(y) {
  var x = document.getElementById(y.name);
  x.style.display = "none";
  y.style.display = "none";
  var z = document.getElementById(y.name + "_show")
  z.style.display = "block";
}