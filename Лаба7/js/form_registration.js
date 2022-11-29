import OpenEnter from "./Enter.js";

let btnRegistration = document.querySelector('#btn_registration');
let inptLogin = document.querySelector("#login_registration");
let inptPass = document.querySelector("#pass_registration");
let confirmationPass = document.querySelector("#pass_confirmation");
let inptName = document.querySelector("#inpt_name");
let inptLastName = document.querySelector("#inpt_last_name");
let checkbox = document.querySelector("#consent_to_processing");

const AddClassesToImgAndTextFooterItem = (imgOn, imgOff, text, dopParam) => {
    if (dopParam === 'on') {
        imgOn.classList.remove('hide');
        text.classList.remove('color_red');
        imgOff.classList.add('hide');
    } else {
        imgOn.classList.add('hide');
        text.classList.add('color_red');
        imgOff.classList.remove('hide');
    }
};

const ValueCheckBox = myCheckBox => {
    if (!myCheckBox.checked) {
        btnRegistration.disabled = true;
    } else {
        btnRegistration.disabled = false;
    }
};

const ChangeStateEquals = (block, typeDataAtt, dopParam) => {
    let parentDiv = block.parentNode;
    let footerItems = parentDiv.querySelectorAll(".item_footer[data-type]");

    footerItems.forEach(it => {
        let categoriesIt = it.dataset.type;

        let imgOn = it.querySelector('.img_on');
        let imgOff = it.querySelector('.img_off');
        let text = it.querySelector('.item_footer_text');


        // Off
        if (categoriesIt === typeDataAtt) {
            block.classList.add('border_and_text_color_red');
            AddClassesToImgAndTextFooterItem(imgOn, imgOff, text);
        }

        // On
        if (categoriesIt === typeDataAtt && dopParam === 'Не равны') {
            block.classList.remove('border_and_text_color_red');
            AddClassesToImgAndTextFooterItem(imgOn, imgOff, text, 'on');
        }

    });

};

const ChangeConditionWithRegex = (inpt, mRegex, mDataAtt, mLenght = 1) => {
    let re = mRegex.test(inpt.value);

    if (re && inpt.value.length > mLenght) {
        ChangeStateEquals(inpt, mDataAtt, 'Не равны');
    } else {
        ChangeStateEquals(inpt, mDataAtt);
    }
};


// проверка на одни цифры при вводе пароля
inptPass.addEventListener('input', function () {
    let reg = /^\d+$/.test(this.value);

    if (reg) {
        ChangeStateEquals(this, "pass_equals_num");
    } else {
        ChangeStateEquals(this, "pass_equals_num", "Не равны");
    }

    // равенство пароля и логина
    if (this.value !== '') {

        if (this.value === inptLogin.value) {
            ChangeStateEquals(this, "pass_equals_with_login");
        } else {
            ChangeStateEquals(this, 'pass_equals_with_login', 'Не равны');
        }

    }

    if (this.value.length < 8) {
        ChangeStateEquals(this, "pass_min_8_symbols");
    } else {
        ChangeStateEquals(this, 'pass_min_8_symbols', 'Не равны');
    }

});

// равенство пароля с паролем
confirmationPass.addEventListener('input', function () {
    if (this.value !== '' && inptPass.value !== '') {

        if (this.value === inptPass.value) {
            ChangeStateEquals(this, "pass_equals_with_pass", 'Не равны');
        } else {
            ChangeStateEquals(this, 'pass_equals_with_pass');
        }

    }
});

// валидация логина
inptLogin.addEventListener('input', function () {
    let re = /^[a-zA-Z0-9\-@.+_]+$/.test(this.value);

    if (re) {
        ChangeStateEquals(this, 'login_with_symbol', 'Не равны');
    } else {
        ChangeStateEquals(this, 'login_with_symbol');
    }

    if (this.value.length > 4) {
        ChangeStateEquals(this, 'login_min_lenght', 'Не равны');
    } else {
        ChangeStateEquals(this, 'login_min_lenght');
    }
});

// валидация имени
inptName.addEventListener('input', function () {
    ChangeConditionWithRegex(this, /^.[A-Za-z0-9-^аА-яЯ-\s-]+$/, 'name_with_symbol');
});

// валидация фамилии
inptLastName.addEventListener('input', function () {
    ChangeConditionWithRegex(this, /^.[A-Za-z0-9-^аА-яЯ-\s-]+$/, 'fam_with_symbol');
});

checkbox.addEventListener('change', function () { ValueCheckBox(this) });
document.addEventListener("DOMContentLoaded", ValueCheckBox(checkbox));
OpenEnter();