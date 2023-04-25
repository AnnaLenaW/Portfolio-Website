console.log("Welcome to my Portfolio")

function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if ($(window).width() <= 641) { // please choose the right width
    if (x.className === 'navtoggle') {
      x.className += ' responsive';
    } else {
      x.className = 'navtoggle';
    }
  }
}
