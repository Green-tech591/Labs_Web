import OpenEnter from "./Enter.js";

let headingsBtn = document.querySelectorAll(".headings_btn");
let btnShowAllPublication = document.querySelector("#show_all_publication");

// Показать все публикации
btnShowAllPublication.addEventListener("click", () => {
    let mainItems = document.querySelectorAll(".main_item");

    mainItems.forEach(it => {

        if (it.classList.contains('hide') || it.classList.contains('show')) {
            it.classList.remove('hide');
            it.classList.remove('show');
        }

    })
});

// Фильтр постов
const FilterMainItems = categorie => {
    let mainItems = document.querySelectorAll(".main_item[data-categories]");

    mainItems.forEach(item => {
        let categoriesItem = item.dataset.categories.split(', ');

        let result = categoriesItem.find(it => {
            return categorie === it;
        });

        if (item.classList.contains("block")) {
            item.classList.remove("block")
        } else {
            item.classList.remove("hide")
        }

        item.classList.add(result ? "block" : "hide");
    });
};

headingsBtn.forEach(it => {
    it.addEventListener("click", () => { FilterMainItems(it.dataset.categories) });
});

OpenEnter();
