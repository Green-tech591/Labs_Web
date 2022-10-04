let filter = function() {
    let blocks = document.querySelectorAll("div[data-categories]");
    let category_id = this.dataset.category_id;

    for (let block of blocks) {
        let categories = block.dataset.categories.split(",");
        let result = categories.find(function(id){
            return category_id == id;
        });

        block.style.display = result ? "block" : "none";
    }
    return false;
}
let links = document.querySelectorAll("a[data-category-id]");

for(let link of links){
    link.onklick = filter;
}