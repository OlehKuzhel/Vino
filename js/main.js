// WebFont.load({
//     google: {
//         families: ['Montserrat:400,500,600,700:cyrillic']
//     }
// });

$(document).ready(function($) {


var isMobile = false;
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile = true;



	var wow = new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null, // optional scroll container selector, otherwise use window,
    resetAnimation: true, // reset animation on end (default is true)
	});
	wow.init();

    if (isMobile == true) {
        $('.news-img').appendTo('.news-content')
        $('.footer-copy').appendTo('.footer')
    } else {
        var sliderVertical = new Swiper('.vertical-slider', {
        speed: 800,
        slidesPerView: 1,
        simulateTouch: true,
        // watchSlidesVisibility: true,
        spaceBetween: 20,
        pagination: {
            el: '.vertical-pagination',
            type: 'bullets',
            clickable: true,
        },
        // loop: true,
        // centeredSlides: true,
        // navigation: {
        //     nextEl: '.winery--next',
        //     prevEl: '.winery--prev',
        // },
    });
    }

$('.link--mobile').on('click', function(event) {
    event.preventDefault();
    $('.mobile-aside').addClass('open')
    /* Act on the event */
});
$('.link--closemenu').on('click', function(event) {
    event.preventDefault();
    $('.mobile-aside').removeClass('open')
    /* Act on the event */
});


var sliderTabs = new Swiper('.works-tabs-slider', {
        speed: 800,
        slidesPerView: 1,
        simulateTouch: false,
        spaceBetween: 20,
        navigation: false,
    });

var sliderEvsingle = new Swiper('.evsingle-slider', {
        speed: 800,
        slidesPerView: 1,
        watchSlidesVisibility: true,
        simulateTouch: false,
        spaceBetween: 20,
        navigation: {
            nextEl: '.evsingle--next',
            prevEl: '.evsingle--prev',
        },
         pagination: {
            el: '.evsingle-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            300: {
                simulateTouch: true,
                spaceBetween: 0,
                slidesPerView: 1,
            },
            1024: {
                simulateTouch: false,
                spaceBetween: 20,
            },
        },
    });

var sliderStory = new Swiper('.storyn-slider', {
        speed: 800,
        slidesPerView: 1,
        watchSlidesVisibility: true,
        // loop: true,
        // loopedSlides: 3,
        navigation: {
            nextEl: '.storyn--next',
            prevEl: '.storyn--prev',
        },
        simulateTouch: false,
        spaceBetween: 20,
         pagination: {
            el: '.storyn-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            300: {
                simulateTouch: true,
                spaceBetween: 0,
                slidesPerView: 1,
            },
            1024: {
                simulateTouch: false,
                spaceBetween: 20,
            },
        },
    });

if ($('.main-slider').length) {
    var sliderMain = new Swiper('.main-slider', {
        speed: 800,
        slidesPerView: 1,
        watchSlidesVisibility: true,
        loop: true,
        loopedSlides: 3,
        simulateTouch: false,
         autoplay: {
            delay: 5000,
          },
        spaceBetween: 20,
         pagination: {
            el: '.main-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            300: {
                simulateTouch: true,
                spaceBetween: 0,
                slidesPerView: 1,
            },
            1024: {
                simulateTouch: false,
                spaceBetween: 0,
            },
        },
    });
}



var sliderRelated = new Swiper('.related-slider', {
        speed: 800,
        slidesPerView: 4,
        // loop: true,
        watchSlidesVisibility: true,
        // loopedSlides: 4,
        spaceBetween: 0,
        // init: false,
        centeredSlides: false,
        navigation: {
            nextEl: '.related--next',
            prevEl: '.related--prev',
        },
        scrollbar: {
    el: '.related-scrollbar',
    draggable: true,
  },
    //      pagination: {
		  //   el: '.sklad-pagination',
		  //   type: 'bullets',
		  //   clickable: true,
	  	// },
        breakpoints: {
            300: {
                simulateTouch: true,
                spaceBetween: 20,
                slidesPerView: 1.95,
                centeredSlides: true,
            },
            
            660: {
                simulateTouch: true,
                spaceBetween: 20,
                slidesPerView: 2.9,
            },
            992: {
            	// direction: 'vertical',
            },
        },
        on: {
            
            progress:  function (progress) {
                if (isMobile != true) {
                    if (progress == 0 || progress == 1) {
                        $('.related-product').removeClass('trans')
                    } else {
                        $('.related-product').addClass('trans')
                    }
                }
            },
            transitionStart: function () {
                if (isMobile != true) {
                    $('.related-product').addClass('trans')
                }
                // console.log('asdasdasd')
              
            },
            transitionEnd: function () {
                if (isMobile != true) {
                    $('.related-product').removeClass('trans')
                }
              
            },
             touchStart: function () {
                if (isMobile != true) {
                    $('.related-product').addClass('trans')
                }
              
            },
            touchEnd: function () {
                if (isMobile != true) {
                    $('.related-product').removeClass('trans')
                }
              
            },

        }
    });

    $('body').on('click', '.link--select', function(event) {
        event.preventDefault();
        $(this).toggleClass('active');
        $('.header-lang__dropdown').toggleClass('active');
    });

    // $('.hascat').hover(function(e) {

    //     $('header').addClass('hover')
    // }, function(e) {
    //      submenu = $(".header-submenu");
    //      console.log(e.target)
    //     if (!submenu.is(e.target) && submenu.has(e.target).length === 0) { // и не по его дочерним элементам
    //         // submenu.hide(); // скрываем его
    //         $('header').removeClass('hover')
    //     }
    // });
    submenu = $(".header-submenu");
    mainmenu = $(".hascat");
    mainmenu.on('mouseover', function(e) {
        event.preventDefault();
        $('header').addClass('hover')
        $(".link--menu").removeClass('active')
        $(this).addClass('active')
        $menu = $(this).attr('data-submenu')
        if ($menu == 'special') {
            $('header').addClass('hover-special')
        }
        $('[data-cat='+$menu+']').addClass('active')
    });

    mainmenu.on('mouseout', function(e) {
        event.preventDefault();
        if (!submenu.is(e.relatedTarget) && submenu.has(e.relatedTarget).length === 0) { // и не по его дочерним элементам
            $('header').removeClass('hover hover-special')
            $(".hascat").removeClass('active')
            $(".link--menu").removeClass('active')
            $('.header-submenu__item').removeClass('active')
        } else {
            $menu = $(this).attr('data-submenu')
            if ($menu == 'special') {
                $('header').addClass('hover-special')
            }
            $('[data-cat='+$menu+']').addClass('active')
        }
    });

     submenu.on('mouseover', function(e) {
        event.preventDefault();
        // if (!mainmenu.is(e.relatedTarget) && mainmenu.has(e.relatedTarget).length === 0) {
        //     $(".link--menu").removeClass('active')
        // }
            if (!$('header').hasClass('hover')) {
                $('header').addClass('hover')
            }
            
        // }
    });

    submenu.on('mouseout', function(e) {
        event.preventDefault();
        if (!mainmenu.is(e.relatedTarget) && mainmenu.has(e.relatedTarget).length === 0) {
            $('header').removeClass('hover')
        }
    });

    $(window).on('scroll', function(event) {
        var height = $(window).scrollTop(),
            headHeight = $('header').height(),
            $mainHeight = $('.section.scrolling').height();
        if(height > $mainHeight - headHeight - 10){
            $('header').addClass('black');
        } else{
            $('header').removeClass('black hover-special');
        }
        if (!$('header').hasClass('hover')) {
            $(".link--menu").removeClass('active')
        }

    });

    var height = $(window).scrollTop(),
            headHeight = $('header').height(),
            $mainHeight = $('.section.scrolling').height();
        if(height > $mainHeight - headHeight - 10){
            $('header').addClass('black');
        } else{
            $('header').removeClass('black');
        }

    $('body').on('click', '.link--scroll', function(event) {
        event.preventDefault();
        /* Act on the event */
        var id  = $(this).attr('href'),
            headHeight = $('header').height(),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top - headHeight}, 1500);
    });
    

    var sliderStory = new Swiper('.story-slider', {
        speed: 800,
        slidesPerView: 'auto',
        simulateTouch: false,
        watchSlidesVisibility: true,
        spaceBetween: 60,
        navigation: {
            nextEl: '.story--next',
            prevEl: '.story--prev',
        },
    });

    var sliderTrademark = new Swiper('.trademark-slider', {
        speed: 800,
        slidesPerView: 'auto',
        simulateTouch: false,
        watchSlidesVisibility: true,
        spaceBetween: 60,
        navigation: {
            nextEl: '.trademark--next',
            prevEl: '.trademark--prev',
        },
    });

     var sliderSpecial = new Swiper('.special-slider', {
        speed: 800,
        slidesPerView: 1,
        simulateTouch: false,
        watchSlidesVisibility: true,
        spaceBetween: 0,
        navigation: {
            nextEl: '.special--next',
            prevEl: '.special--prev',
        },
    });

     var sliderWinery = new Swiper('.winery-slider', {
         speed: 800,
        slidesPerView: 'auto',
        simulateTouch: false,
        watchSlidesVisibility: true,
        spaceBetween: 60,
        navigation: {
            nextEl: '.winery--next',
            prevEl: '.winery--prev',
        },
    });

     var sliderProduct = new Swiper('.product-slider', {
        speed: 800,
        slidesPerView: 2.5,
        simulateTouch: false,
        watchSlidesVisibility: true,
        spaceBetween: 0,
        loop: true,
        centeredSlides: true,
        navigation: {
            nextEl: '.product--next',
            prevEl: '.product--prev',
        },
    });
	


     var sliderReviews = new Swiper('.reviews-slider', {
        speed: 800,
        slidesPerView: 1,
        simulateTouch: false,
        spaceBetween: 20,
        loop: true,
        preloadImages: false,
        init: false,
        lazy: true,
        lazy: {
            loadOnTransitionStart: true,
            loadPrevNext: true,
        },
        effect: 'slide',
        navigation: {
            nextEl: '.reviews--next',
            prevEl: '.reviews--prev',
        },
        breakpoints: {
            320: {
                // autoHeight: true,
            },
            660: {
                simulateTouch: true,
                slidesPerView: 1,
                // autoHeight: false,
                // centeredSlides: true,
                spaceBetween: 20,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
            },
        },
    });


     var galleryThumbs = new Swiper('.partners-slider__little', {
      spaceBetween: 40,
      slidesPerView: 3,
      speed: 800,
      loop: true,
      simulateTouch: false,
      direction: 'vertical',
      preloadImages: false,
        init: false,
        lazy: true,
     lazy: {
    loadOnTransitionStart: true,
    loadPrevNext: true,
  },
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      breakpoints: {
            320: {
                direction: 'vertical',
                simulateTouch: true,
                slidesPerView: 3,
                spaceBetween: 20,
            },
            660: {
                direction: 'horizontal',
                simulateTouch: true,
                slidesPerView: 3,
                spaceBetween: 20,
            },
            992: {
            	direction: 'vertical',
            },
        },
    });
    var galleryTop = new Swiper('.partners-slider__big', {
      spaceBetween: 0,
      speed: 800,
      slidesPerView: 1,
      loop: true,
       simulateTouch: false,
       preloadImages: false,
        init: false,
        lazy: true,
     lazy: {
    loadOnTransitionStart: true,
    loadPrevNext: true,
  },
        effect: 'fade',
	  fadeEffect: {
			crossFade: true
	  },
      navigation: {
        nextEl: '.big--next',
        prevEl: '.big--prev',
      },
      thumbs: {
        swiper: galleryThumbs,
      },
    });

 opnsage = {
        touch: false,
        baseClass: "modal",
        clickSlide: false,
        keyboard: false,
        clickOutside: false,
    }

 opnsFancy = {
        touch: false,
        baseClass: "modal",

        beforeLoad: function(instance, slide) {
            if (isMobile == false) {} else {}
        },
        afterShow: function(instance, current) {
        },
        afterLoad: function(instance, current) {
        },
        afterClose: function(instance, slide) {
        },
        hideScrollbar: true,
        btnTpl: {
            smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}">' +
                '<svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path fill="#2D2E3E" d="M11.619.38l1.414 1.415L1.501 13.327.087 11.913z"/>' +
                '<path fill="#2D2E3E" d="M0 2L1.414.586 13 12.172l-1.414 1.414z"/>' +
                '</svg>' +
                "</button>",

        },
    }

$('body').on('click', '.fancybtn', function(event) {
        popup = $(this).data('popup')
        // popup = '#age'
        $.fancybox.open({
            src: popup,
            type: 'inline',
            // opts: opnsFancy,
            opts: opnsFancy,
        });
        return false
    });


   


if ($('.section-header').hasClass('header-category')) {



}

$('.link--more').on('click', function(event) {
    event.preventDefault();
    /* Act on the event */
    $('.product-info__content').toggleClass('open');
    if ($('.product-info__content').hasClass('open')) {
        $(this).text('Less')
    } else {
        $(this).text('See More')
    }
});


var sliderDiscover = new Swiper('.discover-slider', {
        speed: 800,
        slidesPerView: 5,
        // loop: true,
        watchSlidesVisibility: true,
        // loopedSlides: 4,
        spaceBetween: 0,
        // init: false,
        centeredSlides: false,
        navigation: {
            nextEl: '.discover--next',
            prevEl: '.discover--prev',
        },
    //      pagination: {
          //   el: '.sklad-pagination',
          //   type: 'bullets',
          //   clickable: true,
        // },
        breakpoints: {
            300: {
                simulateTouch: true,
                spaceBetween: 20,
                slidesPerView: 2.05,
                centeredSlides: true,
            },
            
            660: {
                simulateTouch: true,
                spaceBetween: 20,
                slidesPerView: 2.9,
            },
            992: {
                // direction: 'vertical',
            },
        },
        on: {
            slideChangeTransitionStart: function () {
                if (isMobile != true) {
                    $('.discover-product').addClass('trans')
                }
              
            },
            slideChangeTransitionEnd: function () {
                if (isMobile != true) {
                    $('.discover-product').removeClass('trans')
                }
              
            },
             touchStart: function () {
                if (isMobile != true) {
                    $('.discover-product').addClass('trans')
                }
              
            },
            touchEnd: function () {
                if (isMobile != true) {
                    $('.discover-product').removeClass('trans')
                }
              
            },

        }
    });


 $.fn.datepicker.language['en'] = {
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    months: ['January','February','March','April','May','June', 'July','August','September','October','November','December'],
    monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    today: 'Today',
    clear: 'Clear',
    dateFormat: 'mm.dd.yyyy',
    timeFormat: 'hh:ii aa',
    firstDay: 0
}; 

$('.field--age').datepicker({
 minView: 'days',
 language: 'en',
 maxDate: new Date(),
        view: 'years',
       onSelect: function(fd, d, picker) {
        console.log(fd)
        $split = fd.split('.')
        $('.pickerday').val($split[1])
        $('.pickermonth').val($split[0])
        $('.pickeryear').val($split[2])
        $('.checkage').attr('data-date', fd)

    }
})

var $useragecheck = get_cookie ( "userage" );
if ($useragecheck != 'ok') {
    $.fancybox.open({
        src: '#age',
        type: 'inline',
        opts: opnsage,
    });
}

    

$('.checkage').on('submit', function(event) {
    event.preventDefault();
    $selectdate = $(this).attr('data-date')
    var dateB = moment($selectdate, "MM.DD.YYYY");
    var dateC = moment();
    $minus = dateC.diff(dateB, 'year')
    $fields = $('.checkage').find('.field--age')

    console.log(dateC)
    
    if ($minus >= 18) {
        $.fancybox.close();
        document.cookie = "userage=ok"
    } else {
        $fields.each(function(index, el) {
            $(el).addClass('error')
        });
        setTimeout(function() {
            $fields.each(function(index, el) {
                $(el).removeClass('error')
            });
        }, 500)
    }

});


function get_cookie ( cookie_name )
{
  var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );
 
  if ( results )
    return ( unescape ( results[2] ) );
  else
    return null;
}

// форма подписки в футере

$('.form-subscribe').on('submit', function(event) {
    event.preventDefault();
    var _form = $(this),
        th = _form.serialize(),
        form_url = _form.attr('action');
     $.ajax({ 
            url : 'вставь тут обработчик',
            data : th,
            cache: false,
            type : 'POST',
            success : function( data ){
               _form.find('.btn--submit').addClass('send')
        }
    });
});

// форма на странице контактов

$('.form-contact').on('submit', function(event) {
    event.preventDefault();
    var _form = $(this),
        th = _form.serialize(),
        form_url = _form.attr('action');
     $.ajax({ 
            url : 'вставь тут обработчик',
            data : th,
            cache: false,
            type : 'POST',
            success : function( data ){
               _form.find('.btn--submit').addClass('send')
        }
    });
});

$('select').styler({
    // selectPlaceholder: ''
})


   $('body').on('change', 'select[name="country_partner"]', function(event) {
        // console.log("change")
        var url = $(this).data('get_reg_url');
        var country_id = $(this).val();
        var data = {
            "_token":$('meta[name="csrf-token"]').attr('content'),
            "country_id":country_id
        };
        // console.log(data)
        $.ajax({
            type: "POST",
            data: data,
            url: url,
            success: function(data) {
                $('select[name="region_partner"]').html(data).trigger('refresh')
                // console.log(data)


            },
        });
    });


});