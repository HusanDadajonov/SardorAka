const allItems = document.querySelectorAll(".eael-filterable-gallery-item-wrap");
const elMyModalImg = document.querySelector(".myModalImg")
const elMyModal = document.querySelector(".myModal")
const elModalBg = document.querySelector(".modalBg")

allItems.forEach(el => {
    el.addEventListener("click",(item)=> {
        elMyModalImg.src = item.target.children[0].children[0].children[0].src
        elMyModal.style.visibility = "visible"
        elModalBg.style.visibility = "visible"
    })
})

elModalBg.addEventListener("click",()=> {
    elMyModal.style.visibility = "hidden"
    elModalBg.style.visibility = "hidden"
})