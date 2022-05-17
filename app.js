const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
    const expandsMore = document.querySelectorAll('[expand-more]')

    function expand(){
        const showContent = document.getElementById(this.dataset.target)
        if(showContent.classList.contains('expand-active')) {
            this.innerHTML=this.dataset.showtext
        }
        else{
            this.innerHTML=this.dataset.hidetext
        }
        showContent.classList.toggle('expand-active')
    }
    expandsMore.forEach(expandMore => {
        expandMore.addEventListener('click', expand)
    })
})