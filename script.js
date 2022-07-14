const burger = document?.querySelector('[data-burger]');
const nav = document?.querySelector('[data-nav]');
const logo = document?.querySelector('[data-logo]');
const navItems = nav?.querySelectorAll('a');
const body = document.body;
const header = document?.querySelector('.header');
const headerWrapper = document?.querySelector('[data-wrapper]');
const wrapper = document?.querySelectorAll('.wrapper_main');
const imgBurger = document?.querySelector('.burger_img');

burger?.addEventListener('click', () => {
    body.classList.toggle('stop-scroll');
    burger?.classList.toggle('burger--active');
    nav?.classList.toggle('nav--visible');
    logo?.classList.toggle('logo--active');
    headerWrapper?.classList.toggle('wrapper--active')
});
  
navItems.forEach(el => {
    el.addEventListener('click', () => {
    body.classList.remove('stop-scroll');
    burger?.classList.remove('burger--active');
    nav?.classList.remove('nav--visible');
    logo?.classList.remove('logo--active');
    headerWrapper?.classList.remove('wrapper--active')

});
 });

 wrapper.forEach(el => {
    el.addEventListener('click', (e) => {
    console.log(e.target)
    if(e.target!=nav && e.target!=burger && e.target!=imgBurger ){
    body.classList.remove('stop-scroll');
    burger?.classList.remove('burger--active');
    nav?.classList.remove('nav--visible');
    logo?.classList.remove('logo--active');
    headerWrapper?.classList.remove('wrapper--active')
    }
});
 });
 







