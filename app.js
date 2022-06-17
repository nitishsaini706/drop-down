const menu = document.getElementsByClassName("menu-item");


function itemEnter()
{
    const submenu = document.getElementsByClassName("submenu")[0];
    submenu.style.display = "block";
}
function itemleave()
{
    const submenu = document.getElementsByClassName("submenu")[0];
    submenu.style.display = "hidden";
}
for(let item in menu)
{
    console.log(item[1]);
    item.onmouseenter = itemEnter;
    item.onmouseleave = itemleave;
}


    // document.addEventListener(hover)
    // {
    //     console.log("hover");
    //     if(submenu.classList.contains(hidden))
    //     {
    //         submenu.classList.remove("hidden");
    //     }
    // }
    // console.log(item);

