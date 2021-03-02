jQuery(window).on('load', function() {
		
	var scroll = new SmoothScroll('a[href*="#"]');
        jQuery('#menuHambuguer').on('click', function(){
            jQuery('#barra-menu').slideToggle();
        });
        jQuery('#barra-menu a').on('click', function(){
            jQuery('#barra-menu').slideToggle();
        });    
            console.log('Carregado no fim do carregamento');
});