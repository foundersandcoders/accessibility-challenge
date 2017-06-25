var btn = document.getElementById('quote');
var john = document.getElementById('John');
btn.addEventListener('click', focus);
btn.addEventListener('keydown', focus);

function focus(event) {
  john.focus();
  console.log(event.type);
}
