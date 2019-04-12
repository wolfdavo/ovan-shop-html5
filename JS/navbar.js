var navToggle = function() {
  var navbar = document.getElementById('navbar-toggle');
  var arrow = document.getElementById('arrow');

  if (navbar.className === "navbar expanded") {
    navbar.className = "navbar collapsed";
    arrow.className = "arrow open"
  } else if (navbar.className === "navbar collapsed") {
    navbar.className = "navbar expanded";
    arrow.className = "arrow close";
  }
}
