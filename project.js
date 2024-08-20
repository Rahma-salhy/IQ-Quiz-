index = 0%
function submit() {


  if (index === images.length) {
    index = 0
  }
  $('img').attr("src", images[++index])
}
$('#button').on('click', submit)