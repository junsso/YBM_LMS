$(document).ready(function(){
    var offset = $('.tab-content').offset();
    // 탭 - 마우스 오버
    $('.tab .tabmenu').on('click',function(){
        var tab_id = $(this).attr('data-tab');

        $('.tab .tabmenu').removeClass('current');
        $('.tab-content').removeClass('current');

        //alert('asfsa');
        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
        $('html, body').animate({scrollTop: offset.top - 68}, 600);
    })

    
    // 체크박스 전체 선택
    $(".checkbox_group").on("click", "#check_all", function () {
        var checked = $(this).is(":checked");    
        if(checked){
            $(this).parents(".checkbox_group").find('input').prop("checked", true);
        } else {
            $(this).parents(".checkbox_group").find('input').prop("checked", false);
        }
    });
    // 체크박스 전체 선택(마케팅 세부항목)
    $(".checkbox_group .agree-group-b").on("click", "#checkSel_all_t, #checkSel_all", function () {
        var checked = $(this).is(":checked");    
        if(checked){
            $('.agree-group-b').find('input').prop("checked", true);
        } else {
            $('.agree-group-b').find('input').prop("checked", false);
        }
    });
    // 체크박스 개별 선택
    $(".checkbox_group").on("click", ".normal", function() {
        var is_checked = true;        
        $(".checkbox_group .normal").each(function(){
            is_checked = is_checked && $(this).is(":checked");
        });        
        $("#check_all").prop("checked", is_checked);
    });
    // 체크박스 개별 선택(마케팅 동의 세부항목)
    $(".checkbox_group .agree-group-b").on("click", ".normal", function() {
        var is_checked = true;        
        $(".checkbox_group .normal").each(function(){
            is_checked = is_checked && $(this).is(":checked");
        });        
        $("#checkSel_all").prop("checked", is_checked);
    });

    $('.open-tcp-cert').on('click',function(){
      $('.tcp-cert-form').slideToggle();
    })

    //trigger 
    $('.trigger-box label').on('click',function(){
        $('header .inner').toggleClass('active');
        $('body').toggleClass('overflow');
    }) 

    //알림
    var msg = $('.btn-alarm.msg');
    var msgPopup = $('.msg-popup');
    var msgClose = $('.msg-popup .close');

    msg.on('click', function () {
        $(this).toggleClass('on');
        if ($(this).hasClass('on')) {
            $(msgPopup).fadeIn(150);
        } else {
            $(msgPopup).fadeOut(150);
        }
    });

    msgClose.on('click', function () {
        $(msgPopup).fadeOut(150);
    });

    //목록 이외 클릭시 목록 닫힘
    $(document).on('mouseup', function (f) {
        if (msgPopup.has(f.target).length === 0) {
            $(msgPopup).fadeOut(150);
        }
    });
});

// Header Scroll Change
$(window).scroll(function(){
    if($(window).scrollTop() > 50) {
      $('.main-cont header, .gototop, .trigger-box').addClass('active');
      $('header.active').addClass('scroll');
    }
    else {
      $('.main-cont header, .gototop , .trigger-box').removeClass('active')
      $('header.active').removeClass('scroll');
    }    
})

$('.way-set .select-item').on('click',function(){
    $(this).addClass('active')
    $(this).siblings().removeClass('active')
});

$('.sort-box button').on('click',function(){
    $(this).addClass('active')
    $(this).siblings().removeClass('active')
});
$('.float-like button').on('click',function(){
    $(this).toggleClass('active')
});

$('.toggle-content li').on('click',function(){
    $(this).addClass('active')
    $(this).siblings().removeClass('active')
});

// faq board
var faqitem = ('.faq .show');
$('.faq .item td').on('click', function() {  
    var myArticle =$(this).parents().next('tr');
    $(this).parents('tr').addClass('current');
    $(this).parents('tr').siblings().removeClass('current');
    if($(myArticle).hasClass('hide')){  
        $(faqitem).removeClass('show').addClass('hide');  
        $(myArticle).removeClass('hide').addClass('show');  
    }  
    else {  
        $(myArticle).addClass('hide').removeClass('show');  
    }  
});

$('.filter .toggle').on('click', function(){
    $(this).toggleClass('on');
    $('.toggle-content').toggle();
});

// order
$('.order-form .order-item').on('click',function(){
    $(this).addClass('selected');
    $(this).siblings().removeClass('selected');
    $(this).siblings().find('input').prop("checked", false);
});

//payment
$('.sel-paycase button').on('click',function(){
    $(this).addClass('selected');
    $(this).siblings().removeClass('selected');
});

// 수정 버튼 클릭 시
$('.edit-this').on('click', function(){
    $(this).parents('.article').addClass('edit');
 })

 // 수정 닫기 버튼 클릭 시
 $('.reg-wrap .close-this').on('click', function(){
    $(this).parents('.article').removeClass('edit');
})

// 답글 버튼 클릭 시
$('.reply-this').on('click', function(){
    $(this).parents('.article').addClass('reply');
 })
// 답글 닫기 버튼 클릭 시
$('.reg-wrap .close-this').on('click', function(){
    $(this).parents('.article').removeClass('reply');
})



 /*
// 텍스트 박스에 @가 입력되면 유저 목록 보여주기 샘플
$('.textBox').on('input', function(){
    var currentVal = $(this).val();
    var mentionList = $('.reg-form .chat-tag')
    if(currentVal != '@'){
        $(mentionList).hide(); 
    }else{
        $(mentionList).show();
    }
})
*/

$('.sub-nav > ul > li > a').on('click', function(){
    $(this).parents('li').toggleClass('on');
    $(this).parents('li').siblings('li').removeClass('on');
});
$('.sub-depth li a').on('click', function(){
    $(this).parent('li').toggleClass('on');
    $(this).parent('li').siblings('li').removeClass('on');
});

//이모티콘 버튼 클릭시
var emotionBtn = $('.reg-form .toolbar button');
var emotionParent = emotionBtn.parents('.reg-form .textarea');
var emotionBox = $('.emotion-box');

$(emotionBtn).on('click', function(){
    $(this).toggleClass('on');
    $(this).parent().siblings(emotionBox).toggleClass('on');
  });
  //목록 이외 클릭시 목록 닫힘
  $(document).on('mouseup',function (e){
    if(emotionParent.has(e.target).length === 0){
      emotionBox.removeClass('on');
      emotionBtn.removeClass('on');
    }
});

$('.checkbox_group .toggle').on('click', function(){
    $(this).toggleClass('on');
    $(this).parents('.box').find('.term-content').toggle();
});

$('.navigation .toggle').on('click', function(){
    $('.snb-contain').slideToggle();
    $(this).toggleClass('on');
})

// 강사 회원가입 > 학원 유형 기타 선택 시 직접 입력 필드 활성화
$('select[name=actype]').bind('change', function() {
    var val = $(this).val();   
    if (val === 'etc') {   
        $('.input-chr').attr("readonly", false);   
        $('.input-chr').removeClass('disabled');
    } else {  
        $('.input-chr').attr("readonly", true);
        $('.input-chr').addClass('disabled');
    }   
});
   
   

//수업목록
var clGradeLIst = new Swiper('.book-list .swiper-container',{
    slidesPerView: "auto",
    spaceBetween: 20,
    navigation: {
      nextEl: '.book-list .swiper-button-next',
      prevEl: '.book-list .swiper-button-prev',
    }
});

//메인슬라이드
var mainSlide = new Swiper('.main .swiper-container',{
    pagination: {
        el: ".main .swiper-pagination",
        clickable: true,
    },
    speed: 1000,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});

//서브메인슬라이드
var subMainSlide = new Swiper('.submain-rgcont .rg-top .swiper-container',{
    pagination: {
        el: ".submain-rgcont .rg-top .swiper-pagination",
        clickable: true,
    },
    speed: 1000,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
});

//로그인
$('.ui-js-tab .tab li').on('click',function(){
    var tab_id = $(this).attr('data-tab');
    
    $('.ui-js-tab .tab li').removeClass('current');
    $('.ui-js-tab-cont').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');

    return false();
});
