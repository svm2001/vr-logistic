export function dropDown() {
    const dropdowns = document.querySelectorAll('.content-text__drop-down-item');
    dropdowns.forEach( item => {
        item.addEventListener('click', ()=>{
            item.classList.toggle('active');
        })
    })

}