jQuery(function($){ 


$('body').on('click', '.link--filter:not(.active)', function(event){
        event.preventDefault();
        $('.link--filter').removeClass('active')
        $(this).addClass('active') 
        if ($(this).hasClass('popfilter')) {
        $.ajax({
            url: misha_loadmore_params.ajaxurl,
            data: {
	            'action': 'updateposts',
	            'query': misha_loadmore_params.posts,
	            'page' : 1,
	            'category_in' : misha_loadmore_params.category_in,
	            'meta_key':'popular_check',
	            'orderby':'meta_value',
	        },
            type:'POST',
            beforeSend: function() {
            	$('.posts-items').fadeOut('fast', function() {
		            		$('.posts-items').empty();
		            	});;
            },
            success:function(data){
            	misha_loadmore_params.posts = data.posts
            	misha_loadmore_params.current_page = 1

		        $.ajax({
		            url: misha_loadmore_params.ajaxurl, 
		            data: {
			            'action': 'filtertag',
			            'query': misha_loadmore_params.posts,
			            'page' : 1,
			            'meta_key':'popular_check',
			            'category_in' : misha_loadmore_params.category_in,
			            'orderby':'meta_value',
			        }, 
		            type:'POST', 
		            success:function(data){
		                if( data ) {
		                	$('.posts-items').prepend(data)
		                    $('.posts-items').fadeIn();
			                $('#true_loadmore').fadeIn();
		 				} else {
							$('#true_loadmore').fadeOut(); // if no data, remove the button as well
						}
		            }
		        });
	        }
        });
    } else {
    	$.ajax({
            url: misha_loadmore_params.ajaxurl,
            data: {
	            'action': 'updateposts',
	            'query': misha_loadmore_params.posts,
	            'category_in' : misha_loadmore_params.category_in,
	            'page' : 1,
	            'meta_key':'',
	            'orderby':'',
	        },
            type:'POST',
            beforeSend: function() {
		            	$('.posts-items').fadeOut('fast', function() {
		            		$('.posts-items').empty();
		            	});;
		            },
            success:function(data){
            	misha_loadmore_params.posts = data.posts
            	misha_loadmore_params.current_page = 1
		        $.ajax({
		            url: misha_loadmore_params.ajaxurl, 
		            data: {
			            'action': 'filtertag',
			            'query': misha_loadmore_params.posts,
			            'category_in' : misha_loadmore_params.category_in,
			            'page' : 1,
			            'meta_key':'',
			            'orderby':'',
			        }, 
		            type:'POST', 
		            
		            success:function(data){
		                if( data ) {
		                    $('.posts-items').prepend(data)
		                    $('.posts-items').fadeIn();
			                $('#true_loadmore').fadeIn();
		 				} else {
							$('#true_loadmore').fadeOut(); // if no data, remove the button as well
						}
		            }
		        });
	        }
        });
    }
    });
    

$('body').on('click', '#true_loadmore', function(event){
        event.preventDefault();
		var button = $(this),
		    data = {
			'action': 'loadmore',
			'query': misha_loadmore_params.posts, // that's how we get params from wp_localize_script() function
			'page' : misha_loadmore_params.current_page
		};
 
		$.ajax({ // you can also use $.post here
			url : misha_loadmore_params.ajaxurl, // AJAX handler
			data : data,
			type : 'POST',
			beforeSend : function ( xhr ) {
				button.text('Loading...'); // change the button text, you can also add a preloader image
			},
			success : function( data ){
				if( data ) { 
					$('.posts-items').append(data)
					button.text( 'Show more' ); // insert new posts
					misha_loadmore_params.current_page++;
 
					if ( misha_loadmore_params.current_page == misha_loadmore_params.max_page ) {
			                	button.fadeOut();
			                } else {
			                	button.fadeIn();
			                }
 				} else {
					button.fadeOut(); // if no data, remove the button as well
				}
			}
		});
	});

$('body').on('click', '#tag_loadmore', function(event){
        event.preventDefault();
		var button = $(this),
		    data = {
			'action': 'loadmoretag',
			'query': misha_loadmore_params.posts, // that's how we get params from wp_localize_script() function
			'page' : misha_loadmore_params.current_page
		};
 
		$.ajax({ // you can also use $.post here
			url : misha_loadmore_params.ajaxurl, // AJAX handler
			data : data,
			type : 'POST',
			beforeSend : function ( xhr ) {
				button.text('Loading...'); // change the button text, you can also add a preloader image
			},
			success : function( data ){
				if( data ) { 
					$('.posts-items').append(data)
					button.text( 'Show more' ); // insert new posts
					misha_loadmore_params.current_page++;
 
					if ( misha_loadmore_params.current_page == misha_loadmore_params.max_page ) {
			                	button.fadeOut();
			                } else {
			                	button.fadeIn();
			                }
 				} else {
					button.fadeOut(); // if no data, remove the button as well
				}
			}
		});
	});


});