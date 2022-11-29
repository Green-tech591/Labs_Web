let inptAddImg = document.querySelector('#add_post_img');
inptAddImg.addEventListener('change', () => {

  let preview = document.querySelector('#img_add_file');
  let file = document.querySelector('#add_post_img').files[0];
  let reader = new FileReader();

  reader.onload = function () {
    preview.src = reader.result;
    preview.classList.remove('hide');
  }

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = "";
    preview.classList.add('hide');
  }

});