function Menu(config) {
   this.nav = (typeof config.container === 'string') ?
      document.querySelector(config.container) : config.container
   
   this.btn = (typeof config.toggleBtn === 'string') ?
      document.querySelector(config.toggleBtn) : config.toggleBtn
   
   this.maxWidth = config.widthEnabled || false;

   var _opened = false;

   var _this = this;

   this.btn.removeAttribute('style')

   this.btn.addEventListener('click'), openOrClose)
   function ope
  
}