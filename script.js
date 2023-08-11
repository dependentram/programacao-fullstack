let input = document.querySelector('#input input');
let img = document.querySelector('#input img');
img.addEventListener('click', function () {
  input.type = input.type == 'text' ? 'password' : 'text';
});