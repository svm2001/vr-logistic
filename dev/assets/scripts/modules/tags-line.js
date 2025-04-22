export function initTags(){
    const list = document.querySelector(".js-tags-list");
    const items = list.querySelectorAll(".js-tags-item");
    items.forEach(item => {
        item.addEventListener('click', (e)=>{
            items.forEach(itemtemp => {
                if(itemtemp.classList.contains('active')){
                    itemtemp.classList.remove('active');
                }
            })
            item.classList.add('active');
        })
    })

}