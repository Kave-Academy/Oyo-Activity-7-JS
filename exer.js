image_array = [
  "1.jpg",
  "2.jpg",
  "3.png",
  "4.png",
  "5.jpg",
  "6.png",
  "7.jpg",
]

function run() {
  random_index = Math.floor(Math.random() * image_array.length);

  selected_image = image_array[random_index]

  document.getElementById("display_image").src = `./assets/${selected_image}`
}