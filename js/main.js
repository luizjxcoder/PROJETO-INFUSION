(function () {
   var $body = document.querySelector('body');
   $body.classList.remove('no-js');
   $body.classList.add('no-js');

   var menu = new Menu({
      container: '.header-nav ',
      toggleBtn: '.header-btn-menu',
      widthEnablade: 1024
   })

})()
