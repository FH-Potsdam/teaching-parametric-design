const div = document.querySelectorAll('#test');
div[0].style = "background-color:red;";

for (let i = 0; i < 100; i += 1) {
  const newDiv = div[0].cloneNode(true);
  document.querySelector('#copycontainer').append(newDiv);
}
