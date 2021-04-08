function menu() {
    var x = document.getElementById("nav-links2");
    if (x.className === "nav-links") {
      x.className += " responsive";
    } else {
      x.className = "nav-links";
    }
  }

