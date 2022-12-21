let req = new XMLHttpRequest();
let Name = document.querySelector('.text_button');
let Size = document.querySelector('.size');
let bar = document.querySelector('.bar');
let inptAddImg = document.querySelector('#add_img')
  .addEventListener('change', () => {

    let preview = document.querySelector('#img_file');
    let file = document.querySelector('#add_img').files[0];
    let reader = new FileReader();

    bar.setAttribute('max', file.size);

    req.open('POST', 'https://isidea.ru/rgups_file.php', true);

    req.upload.onprogress = e => {
      bar.value = e.loaded;
    }

    req.upload.onload = () => {

      reader.onload = () => {
        preview.src = reader.result;
      }

      if (file) {
        reader.readAsDataURL(file);
        Name.textContent = file.name;
        Size.textContent = Math.round(file.size/1024) + "[KB]";
      }

    }

    req.send(file);
  });