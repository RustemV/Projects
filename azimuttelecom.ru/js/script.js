
function showSplash(){
	setTimeout(function () {
		$('.main2').stop().animate({height:530, paddingTop:100},800,'easeOutExpo');	
		$('#content').stop().animate({height:254},800,'easeOutExpo');			
	}, 0);
	
};
function hideSplash(){ 
   $('.main2').stop().animate({height:640, paddingTop:0},800,'easeOutExpo');
   $('#content').stop().animate({height:530},800,'easeOutExpo');   
};
function hideSplashQ(){
	$(".main2").css({height:640, paddingTop:0}); 
	$('#content').css({height:530}); 	
};

///////////////////

$(document).ready(function() {
	////// sound control	
	/* отключена музыка*/
	$("#jquery_jplayer").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
				mp3:"music.mp3"
			});
			//$(this).jPlayer("play");
			var click = document.ontouchstart === undefined ? 'click' : 'touchstart';
          	var kickoff = function () {
            $("#jquery_jplayer").jPlayer("play");
            document.documentElement.removeEventListener(click, kickoff, true);
         	};
          	document.documentElement.addEventListener(click, kickoff, true);
		},
		
		repeat: function(event) { // Override the default jPlayer repeat event handler				
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});			
		},
		swfPath: "js",
		cssSelectorAncestor: "#jp_container",
		supplied: "mp3",
		wmode: "window"
	});
	/* отключена музыка*/
	
	/////// icons
	$(".icons li").find("a").css({opacity:0.7});
	$(".icons li a").hover(function() {
		$(this).stop().animate({opacity:1 }, 400, 'easeOutBack');		    
	},function(){
	    $(this).stop().animate({opacity:0.7 }, 400, 'easeOutBack' );		   
	});
	
	///// smart tab - slideshow
	$('#tabs').smartTab({
		transitionEffect:'fade',
		autoProgress:true, 
          progressInterval: 7000						
	});
	
	///////// gallery	
	$('.photo1').find('span').css({opacity:0});	
	$('.photo1 > a').hover(function(){
		$(this).find('span').stop().animate({opacity:0.5},400);							
	}, function(){
		$(this).find('span').stop().animate({opacity:0},400);								
	});	
	
	///////// video	
	$('.video1').find('span').css({opacity:0});	
	$('.video1 > a').hover(function(){
		$(this).find('span').stop().animate({opacity:0.5},400);							
	}, function(){
		$(this).find('span').stop().animate({opacity:0},400);								
	});	
	
	
	
	
	
	
	
	
	
	
	
	// for lightbox
	 $("a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'dark_square',social_tools:false,allow_resize: true,default_width: 500,default_height: 344});
		
 });  ////////




$(window).load(function() {
						
	
						
	// scroll
	$('.scroll-pane').jScrollPane({
		showArrows: true,
		verticalGutter: 15,
		verticalDragMinHeight: 83,
		verticalDragMaxHeight: 83
	});	
	
	
	
	//content switch	
	//$('#content>ul>li').eq(0).css({'visibility':'hidden'});	
	var content = $('#content');	
	content.tabs({
        show:1,
        preFu:function(_){
    	   _.li.css({display:'none',top:-474});
		   //content.css({display:'none',opacity:0});
        },
        actFu:function(_){
			if(_.n>_.pren){
				//console.log("down");
				if(_.curr){
	                _.curr.css({display:'block', top:-474}).stop().animate({top:0},800, 'easeInOutExpo');	                
	            }   
	    		if(_.prev){
	  		        _.prev.stop().animate({top:474},800, 'easeInOutExpo', function(){ _.prev.css({display:'none'}); });
	            }	
			}
			else{
				//console.log("up");
				if(_.curr){
	                _.curr.css({display:'block', top:474}).stop().animate({top:0},800, 'easeInOutExpo');	                
	            }   
	    		if(_.prev){
	  		        _.prev.stop().animate({top:-474},800, 'easeInOutExpo', function(){ _.prev.css({display:'none'}); });
	            }	
			}
            		
			//console.log(_.pren, _.n);			
            if ( (_.n == 0) && (_.pren != -1) ){
                showSplash();
            }
            if ((_.pren == 0) && (_.n>0)){
                hideSplash();  
            }
			/*if (_.pren == undefined){
                _.pren = -1;
                hideSplashQ();
            }*/
			if ( (_.pren == undefined) && (_.n >= 1) ){  //if at start loading subpage (_.n >= 0)
                _.pren = -1;
                hideSplashQ();
            }
  		}
    });
	//content switch navs
	var nav = $('.menu');	
    nav.navs({
		useHash:true,
        defHash: '#!/page_HOME',
        hoverIn:function(li){            
			$('> a span',li).stop().animate({top:-100},400,'easeInOutExpo');
			$('> a b',li).stop().animate({top:0},800,'easeOutExpo');
        },
        hoverOut:function(li){   
		    $('> a span',li).stop().animate({top:0},800,'easeOutExpo');
			$('> a b',li).stop().animate({top:100},400,'easeInOutExpo');        
        }
    })    
    .navs(function(n){	
   	    content.tabs(n);
   	});	
	//////////////////////////
	
	var h_cont=700;
	function centre(e) {
		var h=$(document).height()-0;
		if (h>h_cont) {
			m_top=~~(h-h_cont)/2+0;
		} else {
			m_top=0;
		}
		$('.main1').stop().animate({paddingTop:m_top}, e);
	}
	centre(0);
	$(window).resize(function(){ centre(400); } 	);
	//centre(0);
	//setInterval(centre,1);
	//$(window).resize(function(){ centre(400); } 	);

	
	
	
}); /// load

////////////////

$(window).load(function() {	
	setTimeout(function () {					
  		$('.spinner').fadeOut();
		$('body').css({overflow:'inherit'});

	}, 0);	
	var qwe = setTimeout(function () {$("#jquery_jplayer").jPlayer("play");}, 2000);	
	
});