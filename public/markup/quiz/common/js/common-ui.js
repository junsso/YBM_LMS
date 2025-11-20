$(function(){

    // 스크롤바
    $('.scrollbar-dynamic').scrollbar();

    /** slt-box start */
    $(document).on({
        'click': function(e){
            e.preventDefault();
            let $parent = $(this).closest('.slt-title');
            let $cont = $parent.children('.slt-cont');
            let $isOn = $parent.toggleClass('on').hasClass('on');
            ($isOn)? $cont.fadeIn() : $cont.fadeOut();
        }
    },'.slt-title .first');

    $(document).on('mouseup',function (f){
        // 목록 이외 클릭시 닫힘 - slt-box
        if($('.slt-box').find('.on').has(f.target).length === 0){
            $('.slt-box').find('.on').removeClass('on').find('.slt-cont').fadeOut();
        }
    });

    // 해설보기 토글
    $('.quiz-comment-swich').on('click', function(){
        $(this).toggleClass('on');
        ($(this).hasClass('on'))? $('.quiz-comment-box').slideDown() : $('.quiz-comment-box').slideUp();
    });

    if($('.sub-menu-swiper').length > 0){
        setTimeout(() => {
            var submenuswiper = new Swiper('.sub-menu-swiper .swiper-container', {
                slidesPerView: 'auto',
                //spaceBetween: 8,
                observer: true,
                observeParents: true,
                navigation: {
                    nextEl: '.sub-menu-swiper .swiper-button-next',
                    prevEl: '.sub-menu-swiper .swiper-button-prev',
                },
                on: {
                    slideChange : function () {
                        var $swiper =  $('.sub-menu-swiper .swiper-container');
                        const curr_index = this.realIndex;

                        if(curr_index == 0) {
                            $swiper.css('margin-left','0');
                        } else {
                            $swiper.css('margin-left','3.125rem');
                        }
                    },
                }
            });
        }, 500);
    }

    // 키워드 롤링
    if($('.keyword-swipe-box').length > 0){
        var keywordBox = new Swiper('.keyword-swipe-box .swiper-container', {
            slidesPerView: 'auto',
            spaceBetween: 10,
            preventClicks: true,
            preventClicksPropagation: false,
            observer: true,
            observeParents: true,
            watchOverflow: true,
            navigation: {
                nextEl: '.keyword-swipe-box .swiper-button-next',
                prevEl: '.keyword-swipe-box .swiper-button-prev',
            },
        });
        $('.keyword-swipe-box .swiper-slide').on('click',function(){
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
        })
    }

    $(document).on('click','.table-chk-all',function(){
        $(this).closest('table').find('tbody [type=checkbox]').prop('checked',$(this).prop('checked'));
    });

    $(window).scroll(function(){

        if($('.quiz-fixed-wrap').length > 0){
            let quizHeight = $('.quiz-fixed-wrap').outerHeight(true);
            if(window.scrollY >= $('.sticky-bar-wrap').offset().top){                
                $('.quiz-fixed-wrap').fadeIn();
                $('footer').css('margin-bottom',quizHeight);
            }
            else{
                $('.quiz-fixed-wrap').fadeOut();
                $('footer').css('margin-bottom',0);
            }
        }
    });

    //이용 가이드 float banner
    $('.guide-float .inner').on('click',function(){
        $('body').addClass('active-popup');
        $('.guide-popup-wrap').addClass('active');
        $('.guide-popup-wrap .tab-box>ul>li:first-child').addClass('active');
        $('.guide-popup-wrap .tab-contents .conts:first-child').addClass('active');

        //이용안내 가이드 팝업 내 애니메이션
        new WOW().init();
    });

    //이용 가이드 팝업 닫기버튼 클릭시
    $('.guide-popup-wrap .btn-close').on('click',function(){
        $('body').removeClass('active-popup');
        $('.guide-popup-wrap').removeClass('active');
        $('.guide-popup-wrap .tab-box>ul>li').removeClass('active');
    });

    //이용안내 가이드 팝업내 탭
    $('[data-tab]').on('click', function () {
        var tab_id = $(this).attr('data-tab');
        $(this).parent('li').addClass('active').siblings().removeClass('active');
        $("#"+tab_id).addClass('active').siblings().removeClass('active');

        new WOW().init();
        
        return false;
        
    });


});