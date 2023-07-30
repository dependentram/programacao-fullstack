var input = document.querySelector('#input input');
var img = document.querySelector('#input img');
img.addEventListener('click', function () {
  input.type = input.type == 'text' ? 'password' : 'text';
});