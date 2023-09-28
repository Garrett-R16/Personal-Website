window.onload = function () {
  const menu_btn = document.querySelector('.hamburger');
  const mobile_menu = document.querySelector('.mobile-nav');
  const scroll_limit = document.querySelector('body');
  const mobile_nav = document.querySelector('.mobile-nav ul')

  menu_btn.addEventListener('click', function () {
      menu_btn.classList.toggle('is-active');
      mobile_menu.classList.toggle('is-active');  
      scroll_limit.classList.toggle('is-active');   
  });

  mobile_nav.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');  
    scroll_limit.classList.toggle('is-active');   
  });

}

