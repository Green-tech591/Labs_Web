let headingsBtn = document.querySelectorAll(".headings_btn");

const FilterMainItems = categorie => {
    let mainItems = document.querySelectorAll(".main_item[data-categories]");

    mainItems.forEach(item => {
        let categoriesItem = item.dataset.categories.split(', ');

        let result = categoriesItem.find(it => {
            return categorie === it;
        });

        if (item.classList.contains("block"))
            item.classList.remove("block")
        else
            item.classList.remove("hide")

        item.classList.add(result ? "block" : "hide");
    })
};

headingsBtn.forEach(it => {
    it.addEventListener("click", () => { FilterMainItems(it.dataset.categories) });
});


let menuBtn = document.querySelector('.menu-btn');
let nav = document.querySelector('.nav');
let mainNavigation = document.querySelector('.main_navigation');
let burgerBlocks = document.querySelector('.burger_blocks');
let mainTitle = document.querySelector('.main_title');
let mainNavigationTitle = document.querySelector('.main_navigation_title');

menuBtn.addEventListener('click', () => {
    let heightHeader = document.querySelector('.header').clientHeight;

    let heightWindow = document.documentElement.clientHeight;
    burgerBlocks.style.height = heightWindow - heightHeader + 'px';

    burgerBlocks.appendChild(nav);
    burgerBlocks.appendChild(mainNavigation);

    burgerBlocks.classList.toggle('show_block');

    menuBtn.classList.toggle('active');
    mainTitle.classList.toggle('zero_marginTop');
    nav.classList.toggle('show_nav');
    mainNavigation.classList.toggle('show_block');
    mainNavigationTitle.classList.toggle('burger_title_cl');
});