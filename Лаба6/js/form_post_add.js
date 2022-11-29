let inptAddImg = document.querySelector('#add_post_img')
  .addEventListener('change', () => {

    let preview = document.querySelector('#img_add_file');
    let file = document.querySelector('#add_post_img').files[0];
    let reader = new FileReader();

    reader.onloadend = function () {
      preview.src = reader.result;
    }

    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.src = "";
    }

});