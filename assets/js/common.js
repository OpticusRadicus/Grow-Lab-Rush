$(document).ready(function(){	
//Side Navigation  
	$('#menu-1').on('click',function(){
		var $wrap=$('#inner-wrapper');
		if($wrap.css('left')=='0px'){
		  $wrap.animate({
		    left : '525px'
		  }, 500).css({'position':'fixed'})
		  $('#wrapper').height($('#side-nav').height());
		}else{
			$wrap.animate({
		    left : '0px'
		  }, 500).css({'position':'relative'})
		  $(window).scrollTop(0)
		  $('#wrapper').css('height','auto')
		}
	});		
//Side Navigation 
 
});

