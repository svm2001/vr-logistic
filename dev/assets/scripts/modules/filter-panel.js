export function initMobileFilter(){
    const main = document.querySelector('.js-filter-main');
    const container = main.querySelector('.js-filter-container');
    const button = main.querySelector('.js-filter-button');
    button.addEventListener( 'click' , ()=>{
        main.classList.toggle('active');
    })
}