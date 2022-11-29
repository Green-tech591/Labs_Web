function OpenEnter() {
    let body = document.querySelector('body');
    let modal = document.querySelector('#modal_enter');
    let openModalEnter = document.querySelector('#open_modalEnter');
    let closeModal = document.querySelector('#form_img_close');

    openModalEnter.addEventListener('click', e => {
        e.preventDefault();

        modal.classList.add('show');
        body.classList.add('hide_scroll');
    });

    closeModal.addEventListener('click', () => {
        let login = document.querySelector("#login");
        let pass = document.querySelector("#password");

        login.value = null;
        pass.value = null;

        modal.classList.remove('show');
        body.classList.remove('hide_scroll');
        modal.classList.add('hide');

        modalContent.style.removeProperty('left');
        modalContent.style.removeProperty('top');
    });

    let modalContent = document.querySelector('.modal_content');
    let modalTop = document.querySelector('.modal_top');

    modalTop.addEventListener("mousedown", function (e) {
        let pos = modalContent.getBoundingClientRect();
        let shiftX = e.pageX - pos.left;
        let shiftY = e.pageY - pos.top;

        document.onmousemove = function (e) {
            modalContent.style.left = (e.pageX - shiftX) + "px";
            modalContent.style.top = (e.pageY - shiftY) + "px";
        }

        document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
        }
    });
}

export default OpenEnter;