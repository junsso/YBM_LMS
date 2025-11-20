// 반응형구분
$(window).resize(function () {
  if (window.innerWidth > 992) {
    // ***********pc***********
    // Header Scroll Change
    $(window).scroll(function () {
      if ($(window).scrollTop() > 50) {
        $('.gnb').addClass('on');
      } else {
        $('.gnb').removeClass('on');
        $('.gnb-inner').removeClass('on');
        gsubList.removeClass('on');
        $('.main .header .gnb .gnb-inner .gnb-box>ul.gnb-left>li>a').removeClass('on');
      }
    });

    //gnb 이외 클릭시 gnb-innner 닫힘
    $(document).on('mouseup', function (f) {
      if ($('.gnb').has(f.target).length === 0) {
        $('.gnb-inner').removeClass('on')
        gsubList.removeClass('on')
      }
    });  

  } else {
    // ***********mo***********

    //모바일 layout - trigger 
    var trigger = $('.trigger');
    var moLink = $('.mo-cont .gnb-box a');
    var bgWrap = $('.mo-bg');

    trigger.on('click', function () {
      //alert('asfsdf');
      $(this).toggleClass('on');
      $('.mo-cont').toggleClass('on');
      if (trigger.hasClass('on')) {
        $(bgWrap).addClass('on')
      } else {
        $(bgWrap).removeClass('on')
      }
    });

    moLink.on('click', function () {
      $('.mo-cont').removeClass('on');
      trigger.removeClass('on')
      bgWrap.removeClass('on')
    });

    //list swiper
    var moSwiper = new Swiper('.mo-sublist .swiper-container', {
      slidesPerView: 'auto',
      preventClicks: true,
      preventClicksPropagation: false,
      observer: true,
      observeParents: true
    });

    var $snbSwiperItem = $('.mo-sublist .swiper-wrapper .swiper-slide a');
    $snbSwiperItem.click(function () {
      var target = $(this).parent();
      $snbSwiperItem.parent().removeClass('on')
      target.addClass('on');
      muCenter(target);
    });

    function muCenter(target) {
      var snbwrap = $('.mo-sublist .swiper-wrapper');
      var targetPos = target.position();
      var box = $('.mo-sublist');
      var boxHarf = box.width() / 2;
      var pos;
      var listWidth = 0;

      snbwrap.find('.swiper-slide').each(function () {
        listWidth += $(this).outerWidth();
      });

      var selectTargetPos = targetPos.left + target.outerWidth() / 2;
      if (selectTargetPos <= boxHarf) { // left
        pos = 0;
      } else if ((listWidth - selectTargetPos) <= boxHarf) { //right
        pos = listWidth - box.width();
      } else {
        pos = selectTargetPos - boxHarf;
      }

      setTimeout(function () {
        snbwrap.css({
          "transform": "translate3d(" + (pos * -1) + "px, 0, 0)",
          "transition-duration": "500ms"
        })
      }, 200);
    };

    // list toggle
    $('.mo-list .swiper-slide').on('click', function () {
      $(this).addClass('on');
      $(this).siblings().removeClass('on');
    });

    //0005
    $(csSlideBtn).on('click', function () {
      // 조례
      if (csSlide0.hasClass('swiper-slide-active')) {
        
        //slide의 height에 따라 bg height 조절
        if (csSlide0.height() > 335) {
          csBgCont.height(csSlide0.height() + 800);
        } else {
          csBgCont.css('height', '1000px');
        }
      }
    
      //1교시
      else if (csSlide1.hasClass('swiper-slide-active')) {
        
        //slide의 height에 따라 bg height 조절
        if (csSlide1.height() > 335) {
          csBgCont.height(csSlide1.height() + 800);
        } else {
          csBgCont.css('height', '1000px');
        }
      }
    
      //2교시
      else if (csSlide2.hasClass('swiper-slide-active')) {
        
        //slide의 height에 따라 bg height 조절
        if (csSlide2.height() > 335) {
          csBgCont.height(csSlide2.height() + 800);
        } else {
          csBgCont.css('height', '1000px');
        }
      }
    
      //3교시
      else if (csSlide3.hasClass('swiper-slide-active')) {
        
        //slide의 height에 따라 bg height 조절
        if (csSlide3.height() > 335) {
          csBgCont.height(csSlide3.height() + 800);
        } else {
          csBgCont.css('height', '1000px');
        }
      }
    
    });




  }
}).resize();

$(window).resize(function () {
  if (window.innerWidth < 992) {
    // ***********mo***********
   
    $(window).scroll(function () {
      if ($(window).scrollTop() > 0) {
        $('.header').addClass('active');
      } else {
        $('.header').removeClass('active');
      }
    });


  }
});

$(window).ready(function () {
  if (window.innerWidth < 992) {
    // ***********mo***********
   
    $(window).scroll(function () {
      if ($(window).scrollTop() > 0) {
        $('.header').addClass('active');
      } else {
        $('.header').removeClass('active');
      }
    });


  }
});
