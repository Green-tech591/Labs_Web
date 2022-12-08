let inptAddImg = document.querySelector('#add_img')
  .addEventListener('change', () => {

    let preview = document.querySelector('#img_file');
    let file = document.querySelector('#add_img').files[0];
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