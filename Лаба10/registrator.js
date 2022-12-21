let Name = document.querySelector("#NAME");
let Fam = document.querySelector("#FAM");
let email = document.querySelector("#MAIL");
let login = document.querySelector("#login");
let password = document.querySelector("#password");

function SaveInLS(){
    let user = { name: Name.value, fam: Fam.value, log: login.value, mail: email.value, pass: password.value };
    localStorage.setItem("user", JSON.stringify(user));
}

// Сокрытие в ночи кнопки регистрации
let check = document.querySelector("#check");
let purple_button = document.querySelector("#register_button");

function ValueCheckBox(Check) {
    if (!Check.checked) {
        purple_button.disabled = true;
    } else {
        purple_button.disabled = false;
    }
}

purple_button.addEventListener('click', function (e) {
    let p = document.querySelectorAll("p");
    let flag = false;
    for (let i = 0; i < p.length; i++) {
        if (p[i].classList.contains('parBAD')) {
            flag = true;
        }
    }

    if(flag)
    {
        alert("Ошибка в данных");
    }
    else
    {
        e.preventDefault();
        SaveInLS();
    }
})

check.addEventListener('change', function () { ValueCheckBox(this) });
document.addEventListener("DOMContentLoaded", ValueCheckBox(check));


// Говнокод для валидации логина
let im_l1 = document.querySelector('#confirm_l1')
let par_l1 = document.querySelector('#parag_color_l1')
let im_l2 = document.querySelector('#confirm_l2')
let par_l2 = document.querySelector('#parag_color_l2')
login.addEventListener('input', function () {
    let re = /^[а-яА-Яa-zA-Z0-9\-@.+_]+$/.test(this.value);
    if (re) {
        im_l1.src = "images/gal.svg"
        par_l1.classList.remove('parBAD');
        par_l1.classList.add('parGOOD');
    } else {
        im_l1.src = "images/krest.svg"
        par_l1.classList.remove('parGOOD');
        par_l1.classList.add('parBAD');
    }

    if (this.value.length > 4) {
        im_l2.src = "images/gal.svg"
        par_l2.classList.remove('parBAD');
        par_l2.classList.add('parGOOD');
    } else {
        im_l2.src = "images/krest.svg"
        par_l2.classList.remove('parGOOD');
        par_l2.classList.add('parBAD');
    }

    if (this.value.length === 0) {
        im_l1.src = ""
        par_l1.classList.remove('parBAD');
        par_l1.classList.remove('parGOOD');
        im_l2.src = ""
        par_l2.classList.remove('parBAD');
        par_l2.classList.remove('parGOOD');
    }
});


// Говнокод для валидации пароля (зато сам)
let im_p1 = document.querySelector('#confirm_p1')
let par_p1 = document.querySelector('#parag_color_p1')
let im_p2 = document.querySelector('#confirm_p2')
let par_p2 = document.querySelector('#parag_color_p2')
let im_p3 = document.querySelector('#confirm_p3')
let par_p3 = document.querySelector('#parag_color_p3')
let im_p4 = document.querySelector('#confirm_p4')
let par_p4 = document.querySelector('#parag_color_p4')
password.addEventListener('input', function () {
    let reg = /^\d+$/.test(this.value);

    if (this.value.length > 8) {
        im_p1.src = "images/gal.svg"
        par_p1.classList.remove('parBAD');
        par_p1.classList.add('parGOOD');
    } else {
        im_p1.src = "images/krest.svg"
        par_p1.classList.remove('parGOOD');
        par_p1.classList.add('parBAD');
    }

    if (!reg) {
        im_p2.src = "images/gal.svg"
        par_p2.classList.remove('parBAD');
        par_p2.classList.add('parGOOD');
    } else {
        im_p2.src = "images/krest.svg"
        par_p2.classList.remove('parGOOD');
        par_p2.classList.add('parBAD');
    }

    if (this.value !== '') {

        if (this.value === login.value) {
            im_p3.src = "images/krest.svg"
            par_p3.classList.remove('parGOOD');
            par_p3.classList.add('parBAD');
        } else {
            im_p3.src = "images/gal.svg"
            par_p3.classList.remove('parBAD');
            par_p3.classList.add('parGOOD');
        }

    }

    if (this.value === "1234567890" || this.value === "password" || this.value === "Mao Zedong") {
        im_p4.src = "images/krest.svg"
        par_p4.classList.remove('parGOOD');
        par_p4.classList.add('parBAD');
    } else {
        im_p4.src = "images/gal.svg"
        par_p4.classList.remove('parBAD');
        par_p4.classList.add('parGOOD');
    }

});

// Подтверждение пароля
let confpass = document.querySelector("#conf_pass");
let im_c1 = document.querySelector('#confirm_c1')
let par_c1 = document.querySelector('#parag_color_c1')
confpass.addEventListener('input', function () {
    if (this.value !== '' && password.value !== '') {

        if (this.value === password.value) {
            im_c1.src = "images/krest.svg"
            par_c1.classList.remove('parGOOD');
            par_c1.classList.add('parBAD');
        } else {
            im_c1.src = "images/gal.svg"
            par_c1.classList.remove('parBAD');
            par_c1.classList.add('parGOOD');
        }

    }
});


window.addEventListener('load', function() {
    let user = JSON.parse(localStorage.getItem("user"));

    if (user) {
        Name.value = user.name;
        Fam.value = user.fam;
        login.value = user.log;
        email.value = user.mail;
        password.value = user.pass;
    }
});