(function(){
    var $body = document.querySelector('body');
    $body.classList.remove('no-js')
    $body.classList.add('js')
    
        
    var menu = new Menu({
        container: '.header-nav',
        toggleBtn: '.header-btn-menu',
        widthEnabled: 1024 
    })

})( )
