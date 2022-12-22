let categories_button = document.querySelectorAll(".categories_button");

let posts = document.querySelectorAll('.post');

for(let b of categories_button)
{
    b.addEventListener("click", function()
    {
        for(let p of posts)
        {
            if(p.dataset.categories.indexOf(b.dataset.categories)<0)
            {
                
                p.style.display = "none";
            }
            else
            {
                p.style.display = "block";
            }
        }
    });
}
