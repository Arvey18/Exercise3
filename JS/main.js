
	
	var image;
	$('#fadein img:gt(0)').hide();
	image_interval();

  	function image_interval(){

  		image = setInterval('image_movement()', 3000);

  	}
	
  	function image_movement(){
  		
    	$('#fadein :first-child').fadeOut().next('img').fadeIn().end().appendTo('#fadein');
    	$('#dots :first-child').appendTo('#dots:nth-child(2)').css({"padding-right": "1px", "padding-left" : "1px"});

    	
   	}
  



	function dots_change(){

	

	}
