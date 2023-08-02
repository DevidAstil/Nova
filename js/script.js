$(document).ready(function(){
    // checkbox
    $.each($('.checkbox'),function(index,val){
        if($(this).find('input').prop('checked')==true){
            $(this).addClass('active');
        }
    });
    $(document).on('click','.checkbox',function(event){
    if($(this).hasClass('active')){
        $(this).find('input').prop('checked',false);
    }else{
        $(this).find('input').prop('checked',true);
    }
    $(this).toggleClass('active');

    return false;
    });
    $.each($('.care-radio'),function(index,val){
        if($(this).find('input').prop('checked')==true){
            $(this).addClass('active');
        }
    });
    $(document).on('click','.care-radio',function(event){
        $(this).parents('.radiobutton').find('.care-radio').removeClass('active');
        $(this).parents('.radiobutton').find('.care-radio input').prop('checked',false);
        $(this).toggleClass('active');
        $(this).find('input').prop('checked',true);
        return false;
    });
    });
    // sliders
    $('.facades_slider').slick({
        slidesToShow:1,
        slidesToScroll:1,
        infinite: true,
        variableWidth: true,
        centerMode:true,
        centerPadding: '95px'
    });
    $('.consecration-slider').slick({
        slidesToShow:2,
        infinite: true,
        variableWidth: true,
        responsive: [
            {
              breakpoint: 850,
              settings: {
                slidesToShow: 1,
                centerMode:true
              }
            }
        ]
    });
    $('.installment_banks-slider').slick({
        dots:true,
        arrows:false,
        slidesToShow:1,
        infinite: true,
        variableWidth: true,
        responsive: [
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 1,
                centerMode:true
              }
            }
        ]
    })
    $('.specialists_items').slick({
        slidesToShow:3,
        slidesToScroll:1,
        infinite: true,
        variableWidth: true,
        centerMode:true,
        responsive: [
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                centerMode:true
              }
            }
        ]
    })
    $('.reviews_slider').slick( {
        slidesToShow:1,
        slidesToScroll:1,
        infinite: true,
        variableWidth: true,
        centerMode:true,
    })
    $('.slider-single').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        adaptiveHeight: true,
        infinite: false,
        useTransform: true,
        speed: 400,
        cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
    });
    $('.certificates-slider').slick({
        slidesToShow:3,
        slidesToScroll:1,
        infinite: true,
        variableWidth: true,
        centerMode:true,
        responsive: [
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                centerMode:false,
                variableWidth: true,
              }
            }
        ]
    })
   
    $('.slider-nav')
        .on('init', function(event, slick) {
            $('.slider-nav .slick-slide.slick-current').addClass('is-active');
        })
        .slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            dots: false,
            focusOnSelect: false,
            infinite: true,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    variableWidth:true
               }
            }]
        });
   
    $('.slider-single').on('afterChange', function(event, slick, currentSlide) {
        $('.slider-nav').slick('slickGoTo', currentSlide);
        var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
        $('.slider-nav .slick-slide.is-active').removeClass('is-active');
        $(currrentNavSlideElem).addClass('is-active');
    });
   
    $('.slider-nav').on('click', '.slick-slide', function(event) {
        event.preventDefault();
        var goToSingleSlide = $(this).data('slick-index');
   
        $('.slider-single').slick('slickGoTo', goToSingleSlide);
    });
    $("#phone").mask("8(999) 999-99-99");
    // catalog menu
    $('.header_catalog').click(function(event){
        $('.header_catalog-burger,.header_catalog-text,.header-push,.header_catalog').toggleClass('active');
        $('body').toggleClass('lock');
    })
    // burger
    $('.header_burger').click(function(event){
        $('.header_burger,.header-mobile_menu').toggleClass('active');
    })
    $('.filter-btn-mobile').on('click', function(){
        $(this).next().slideToggle(350);
        $('.filter-btn-mobile').toggleClass('active')
    });
    $('.facilities_tabs-btn-mobile').on('click', function(){
        $(this).next().slideToggle(350);
        // $('.facilities_item').toggleClass('active')
    });
    // quiz
    $('#next1').click(function(){
        $('.stage-1').removeClass('active');
        $('.stage-2').addClass('active')
    })
    $('#next2').click(function(){
        $('.stage-2').removeClass('active');
        $('.stage-3').addClass('active')
    })
    $('#back1').click(function(){
        $('.stage-2').removeClass('active');
        $('.stage-1').addClass('active')
    })
    $('#next3').click(function(){
        $('.stage-3').removeClass('active');
        $('.stage-4').addClass('active')
    })
    $('#back2').click(function(){
        $('.stage-3').removeClass('active');
        $('.stage-2').addClass('active')
    })
    $('#next4').click(function(){
        $('.stage-4').removeClass('active');
        $('.stage-5').addClass('active')
    })
    $('#back3').click(function(){
        $('.stage-4').removeClass('active');
        $('.stage-3').addClass('active')
    })
    $('#next5').click(function(){
        $('.stage-5').removeClass('active');
        $('.stage-6').addClass('active')
    })
    $('#back4').click(function(){
        $('.stage-5').removeClass('active');
        $('.stage-4').addClass('active')
    })
    $('#next6').click(function(){
        $('.quiz_inner').removeClass('active');
        $('.quiz-final').addClass('active')
    })
    $('#back5').click(function(){
        $('.stage-6').removeClass('active');
        $('.stage-5').addClass('active')
    })
    // pop-up
    $('.header_callback-text').click(function(event){
        $('.pop-up-1').toggleClass('active');
        $('.modal-window,body').toggleClass('active')
        $('.modal-window').click(function(){
            $('.pop-up,.modal-window,body').removeClass('active')
        })
    })
    $('.pop-up-2-btn').click(function(event){
        $('.pop-up-2').toggleClass('active');
        $('.modal-window,body').toggleClass('active')
        $('.modal-window').click(function(){
            $('.pop-up,.modal-window,body').removeClass('active')
        })
    })
    $('.pop-up-4-btn').click(function(event){
        $('.pop-up-4').toggleClass('active');
        $('.modal-window,body').toggleClass('active')
        $('.modal-window').click(function(){
            $('.pop-up,.modal-window,body').removeClass('active')
        })
    })
    $('.pop-up-3-btn').click(function(event){
        $('.pop-up-3').toggleClass('active');
        $('.modal-window,body').toggleClass('active')
        $('.modal-window').click(function(){
            $('.pop-up,.modal-window,body').removeClass('active')
        })
    })
    // video modal
    $('.play-btn').click(function(event){
        $('.video-modal').toggleClass('active');
        $('.modal-window,body').toggleClass('active')
        $('.modal-window').click(function(){
            $('.video-modal,.modal-window,body').removeClass('active')
        })
    })
    // plush
    $('.fullconst').mouseover(function(){
        $('.push-fullconst').css('display', 'block')
    })
    $('.fullconst').mouseout(function(){
        $('.push-fullconst').css('display', 'none')
    })
    // gallery
    $('.catalog_item-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});
    $('.certificates-slider').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});
    $('.slider-single_item').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});

    // map

let center = [59.885982, 30.366048];

function init() {
    let map = new ymaps.Map('map', {
        center: center,
        zoom: 18
    }),
    myPlacemark = new ymaps.Placemark(map.getCenter(), {
        }, );
    map.controls.remove('geolocationControl'); // удаляем геолокацию
      map.controls.remove('searchControl'); // удаляем поиск
      map.controls.remove('trafficControl'); // удаляем контроль трафика
      map.controls.remove('typeSelector'); // удаляем тип
      map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
      map.controls.remove('zoomControl'); // удаляем контрол зуммирования
      map.controls.remove('rulerControl'); // удаляем контрол правил
      map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    map.geoObjects.add(myPlacemark)
}
ymaps.ready(init);

function init2() {
    let center = [ 55.751694,37.617218];
    let map2 = new ymaps.Map('map2', {
        center: center,
        zoom: 18
    }),
    myPlacemark = new ymaps.Placemark(map2.getCenter(), {
        }, );
    map2.controls.remove('geolocationControl'); // удаляем геолокацию
      map2.controls.remove('searchControl'); // удаляем поиск
      map2.controls.remove('trafficControl'); // удаляем контроль трафика
      map2.controls.remove('typeSelector'); // удаляем тип
      map2.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
      map2.controls.remove('zoomControl'); // удаляем контрол зуммирования
      map2.controls.remove('rulerControl'); // удаляем контрол правил
      map2.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    map2.geoObjects.add(myPlacemark)
}
ymaps.ready(init2);

function init3() {
    let center = [ 45.035470, 38.975313];
    let map3 = new ymaps.Map('map3', {
        center: center,
        zoom: 18
    }),
    myPlacemark = new ymaps.Placemark(map3.getCenter(), {
        }, );
    map3.controls.remove('geolocationControl'); // удаляем геолокацию
      map3.controls.remove('searchControl'); // удаляем поиск
      map3.controls.remove('trafficControl'); // удаляем контроль трафика
      map3.controls.remove('typeSelector'); // удаляем тип
      map3.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
      map3.controls.remove('zoomControl'); // удаляем контрол зуммирования
      map3.controls.remove('rulerControl'); // удаляем контрол правил
      map3.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    map3.geoObjects.add(myPlacemark)
}
ymaps.ready(init3);

$(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 20000,
    max: 150000,
    from:40000,
    to:90000
});
$(".js-range-slider2").ionRangeSlider({
    type:'double',
    min: 5,
    max: 40,
    from:0,
    to:10
});
$(".js-range-slider3").ionRangeSlider({
    type:'double',
    min: 5,
    max: 40,
    from:0,
    to:10
});
$(".js-range-slider4").ionRangeSlider({
    type:'double',
    min: 5,
    max: 40,
    from:0,
    to:10
});
$(".js-range-slider5").ionRangeSlider({
    type:'double',
    min: 5,
    max: 40,
    from:0,
    to:10
});

