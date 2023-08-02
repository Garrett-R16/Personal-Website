window.onload = function () {
  const menu_btn = document.querySelector('.hamburger');
  const mobile_menu = document.querySelector('.mobile-nav');

  menu_btn.addEventListener('click', function () {
      menu_btn.classList.toggle('is-active');
      mobile_menu.classList.toggle('is-active');    
  });

  var counter = 1;
  setInterval(function(){
    document.getElementById('image' + counter).checked = true;
    counter++;
    if(counter > 3){
      counter = 1;
    }
  }, 5000);

  function setWidth() {
    var one = document.getElementById(".navigation-auto");
    var two = document.getElementById(".navigation-manual");
    style = window.getComputedStyle(one);
    wdt = style.getPropertyValue('width');
    two.style.width = wdt;
  }
  

}



