$(document).ready(function(){	
//Side Navigation  
	$('#menu-1').on('click',function(){
		var $wrap=$('#inner-wrapper');
		if($wrap.css('left')=='0px'){
		  $wrap.animate({
		    left : '262px'
		  }, 500).css({'position':'fixed'})
		  $('#wrapper').height($('#side-nav').height());
		  $('.write-comment').hide()
		}else{
			$wrap.animate({
		    left : '0px'
		  }, 500,function(){		  	
		  $('.write-comment').show()
		  }).css({'position':'relative'})
		  $(window).scrollTop(0)
		  $('#wrapper').css('height','auto')
		}
	});		
//Side Navigation  
});

