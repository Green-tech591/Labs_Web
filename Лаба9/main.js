let categories_button = document.querySelectorAll(".categories_button");


const FilterMainItems = categorie => {
    let mainItems = document.querySelectorAll(".post[data-categories]");

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

categories_button.forEach(it => {
    it.addEventListener("click", () => { FilterMainItems(it.dataset.categories) });
});