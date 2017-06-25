function pageLoaded() {
  var btn = document.getElementById('quote');
  btn.addEventListener('click', function(event) {
    var john = document.getElementById('John');
    john.focus();
    console.log(event.type);
  });
  btn.addEventListener('keydown', function(event) {
    var john = document.getElementById('John');
    john.focus();
    console.log(event.type);
  });
}

pageLoaded();
