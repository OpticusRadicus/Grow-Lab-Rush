$(function(){
	  $('.wrap-tab-links').width($(window).width())
	  $( "#tabs" ).tabs().show();
      $('.wrap-tab-links').mCustomScrollbar({
					horizontalScroll:true,
					scrollButtons:{
						enable:false
					}
      })
	  $(window).resize(function(){
		  $('.wrap-tab-links').width($(window).width())
	  })	  
	  $('#tabs .ui-tabs-nav a').click(function(){
		  var href=$(this).attr('href');
		  abc(href)
		  
	  })
	  $('.images-list li').click(function(){
		  $(this).toggleClass('active');
	  })
})
function abc(href){
	var ww=$(window).width();
	if(ww<360){
	switch (href){
			  case '#tabs-1':{
				   anim(0);
				   
				break;

				  }
			  case '#tabs-2':{
				  anim(0);
				  break;
				  }
			  case '#tabs-3':{
				  anim(-236);
				  break;
				  }
			  case '#tabs-4':{
				  anim(-328);
				  break;
				  }
			  case '#tabs-5':{
				  anim(-328);
				  break;
				  }
		  }
	}
	else if(ww<480){
	 switch (href){
			  case '#tabs-1':{
				   anim(0);
				   break;
				  }
			  case '#tabs-2':{
				  anim(0);
				  break;
				  }
			  case '#tabs-3':{
				  anim(-236);
				  break;
				  }
			  case '#tabs-4':{
				  anim(-288);
				  break;
				  }
			  case '#tabs-5':{
				  anim(-288);
				  break;
				  }
		  }
	}
	else if(ww<568){
	 switch (href){
			  case '#tabs-1':{
				   anim(0);
				   break;
				  }
			  case '#tabs-2':{
				  anim(0);
				  break;
				  }
			  case '#tabs-3':{
				  anim(0);
				  break;
				  }
			  case '#tabs-4':{
				  anim(-168);
				  break;
				  }
			  case '#tabs-5':{
				  anim(-168);
				  break;
				  }
		  }
	}
	else if(ww<640){
	 switch (href){
			  case '#tabs-1':{
				   anim(0);
				   break;
				  }
			  case '#tabs-2':{
				  anim(0);
				  break;
				  }
			  case '#tabs-3':{
				  anim(0);
				  break;
				  }
			  case '#tabs-4':{
				  anim(0);
				  break;
				  }
			  case '#tabs-5':{
				  anim(-80);
				  break;
				  }
		  }
	}
	else if(ww<650){
	 switch (href){
			  case '#tabs-1':{
				   anim(0);
				   break;
				  }
			  case '#tabs-2':{
				  anim(0);
				  break;
				  }
			  case '#tabs-3':{
				  anim(0);
				  break;
				  }
			  case '#tabs-4':{
				  anim(0);
				  break;
				  }
			  case '#tabs-5':{
				  anim(-8);
				  break;
				  }
		  }
	}
}
function anim(left){
	$('#tabs .mCSB_container').animate({
	  left:left
	})
}