let check = document.querySelector("#check");
let purple_button = document.querySelector("#register_button");

const ValueCheckBox = myCheckBox => {
    if (!myCheckBox.checked) {
        purple_button.disabled = true;
    } else {
        purple_button.disabled = false;
    }
};

check.addEventListener('change', function () { ValueCheckBox(this) });
document.addEventListener("DOMContentLoaded", ValueCheckBox(check));