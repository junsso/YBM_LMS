
//수업보드 progress bar 
// $('.progress .current-bar').css('left',function(){
//   var total_width = $('.total-bar').width();
//   var width = $(this).width();
//   var percent = Math.round(100*width/total_width,2);
//   var strong_left = width-$(this).next('strong').width();
//   if(strong_left < 0) strong_left = 0;

//   if(percent < 2){
//     $(this).css('width','0px');
//     return '8px';
//   }//end if
//   else{
//     $(this).next('strong').css('left',strong_left);
//     return 0;
//   }//end else
// });


//버튼가이드 - 타이틀에 자체가 탭일때
var bigTitle = $('.value-tab .btns');

$(bigTitle).on('click', function(){
  //alert('asfsd');
  $(this).parent().toggleClass('on');
  $(this).parent().siblings().removeClass('on');
});

//버튼가이드 - 타이틀에 탭이 있을때
var grTarget = $('.tab-ui .tb-btn');

$(grTarget).on('click', function(){
  //alert('asfsd');
  $(this).toggleClass('on');
  $(this).siblings().removeClass('on');
});

//버튼가이드 - 타이틀에 탭이 있을때 (셀렉트박스)
var slParnets = $('.slt-box');
var slTarget = $('.slt-box .title h2, .slt-box .title .arrow');
var slTarget02 = $('.slt-box .sort-box .st');
var slTarget03 = $('.slt-box .sort-box .more');

$(slTarget).on('click', function(){
  //alert('asfsd');
  $(this).parent('.title').toggleClass('on');
  $(this).parent('.title').siblings('.sort-box').removeClass('on');
  $(this).parents(slParnets).siblings(slParnets).find('.title').removeClass('on');
});

$(slTarget02).on('click', function(){
  //alert('asfsd');
  $(this).parent('.sort-box').toggleClass('on');
  $(this).parent('.sort-box').siblings('.title').removeClass('on');
});

$(slTarget03).on('click', function(){
  //alert('asfsd');
  $(this).parent('.sort-box').toggleClass('on');
  $(this).parent('.sort-box').siblings('.title').removeClass('on');
});

//목록 이외 클릭시 목록 닫힘
$(document).on('mouseup',function (f){
  if(slParnets.has(f.target).length === 0){
    slTarget.parent('.title').removeClass("on");
    slTarget02.parent('.sort-box').removeClass('on');
  }
});


//버튼가이드 - 소제목에 탭이 있을때  TAB
$('.tab li').click(function(){
  var tab_id = $(this).attr('data-tab');

  $(this).addClass('current').siblings().removeClass('current');
  $("#"+tab_id).addClass('current').siblings().removeClass('current');
  return false;
});

//기본 탭
$('.tab-style .item').click(function(){
  var tab_id = $(this).attr('data-tab');

  $(this).addClass('current').siblings().removeClass('current');
  $("#"+tab_id).addClass('current').siblings().removeClass('current');
  return false;
});

//1:1메시지 팝업 화면ID : TC-P-2005-1
var alrTarg = $('.alarm-popup');
var msgTarg = $('.container .common-top .unb .msg');
var bellTarg = $('.container .common-top .unb .bell');
var msgAlrTarg = $('.alarm-popup.msg2');
var bellAlrTarg = $('.alarm-popup.bell2');
var closeTarg = $('.alarm-popup .close');

$(msgTarg).on('click', function(){
  $(msgAlrTarg).fadeIn(150);
});
$(bellTarg).on('click', function(){
  $(bellAlrTarg).fadeIn(150);
});
$(closeTarg).on('click', function(){
  $(this).parents('.alarm-popup').fadeOut(150);
});

//목록 이외 클릭시 목록 닫힘
$(document).on('mouseup',function (f){
  if(alrTarg.has(f.target).length === 0){
    $(alrTarg).fadeOut(150);
  }
});


//input clear버튼
$('.searchinput').on('input propertychange', function() {
  var $this = $(this);
  var visible = Boolean($this.val());
  $this.siblings('.searchclear').toggleClass('hidden', !visible);
}).trigger('propertychange');

$('.searchclear').click(function() {
  $(this).siblings('input[type="text"]').val('').trigger('propertychange').focus();
   $(this).siblings('input[type="password"]').val('').trigger('propertychange').focus();
});



// toggle (side menu)
const toggleBtn = document.querySelector('.toggle-fold button'); 
const menuBody = document.querySelector('.header .inner'); 
const wrapper = document.querySelector('.wrap');
let clicked = 1; 

// 좌측 패널 열림/닫힘
menuBody.onmouseover = function(){
  wrapper.classList.add('open');
  dropdownShow();
}
menuBody.onmouseout = function(){
  wrapper.classList.remove('open');
  if(wrapper.classList.contains('mini')){
    dropdownHide();
  }
}
toggleBtn.onclick = function(){  
    if(clicked){
        wrapper.classList.add('mini');
        clicked = 0;        
        dropdownHide();
    }else{
        wrapper.classList.remove('mini');
        clicked = 1;
        dropdownShow();
    }
}
function dropdownShow(){
  $('.gnb ul li.current').children('.dropdown').show();
}
function dropdownHide(){
  $('.gnb ul li.current').children('.dropdown').hide();
}



//GNB 메뉴

var gnbUI = {
    click : function (target, speed) {
      var _self = this,
          $target = $(target);
      _self.speed = speed || 300;
      
      $target.each(function(){
        if(findChildren($(this))) {
          return;
        }
        $(this).addClass('noDepth');
      });
      
      function findChildren(obj) {
        return obj.find('> ul').length > 0;
      }
      
      $target.on('click','a', function(e){
          e.stopPropagation();
          var $this = $(this),
              $depthTarget = $this.next(),
              $siblings = $this.parent().siblings();
        
        $this.parent('li').find('ul li').removeClass('current');
        $siblings.removeClass('current');
        $siblings.find('ul').slideUp(300);    

        
        if($depthTarget.css('display') == 'none') {
          _self.activeOn($this);
          $depthTarget.slideDown(_self.speed);
        } else {
          $depthTarget.slideUp(_self.speed);
          _self.activeOff($this);
        }
        
        
        
      })
      
    },
    activeOff : function($target) {
      $target.parent().removeClass('current');
    },
    activeOn : function($target) {
      $target.parent().addClass('current');
    }
  };
  
  
  
  // Call lnbUI
  $(function(){
    gnbUI.click('.header nav li', 0)
  });
  

/*
  $('.toggle-fold').on('click',function(){
    if($('.wrap').hasClass('mini') === true){
        alert('I get mini');
    } else {
        alert('I lost mini');
    }
})
*/

//화상솔루션 드롭다운
var movieParents = $('.movie-wrap');
var movieTarget = $('.movie-wrap .tt-btn');

$(movieTarget).on('click', function(){
  $(this).siblings('.tg-box').toggleClass('active');
});

$(document).on('mouseup',function (f){
  if(movieParents.has(f.target).length === 0){
    $(this).find('.tg-box').removeClass('active');
  }
});


//수업 개설 추천 과목 YBM교과서
var subjParent = $('.subj-wrap');
var subj = $('.subj-wrap .form-wrap input');
var subGrade = $('.subj-wrap .subj-1 .grade input');
var subGrade02 = $('.subj-wrap .subj-2 .class input');
var subGrade03 = $('.subj-wrap .subj-3');
var classBookSwiper = $('.subj-wrap .subj-3 .class-book .swiper-container');

$(subj).on('click', function(){
  $(subjParent).addClass('on');
});
$(subGrade).on('click', function(){
  $(subjParent).addClass('active');
});
$(subGrade02).on('click', function(){
  $(subGrade03).addClass('on');

  function classBook(){
		var subjSwiper = new Swiper('.class-book .swiper-container', {
		slidesPerView: 'auto',
		spaceBetween: 10,
		breakpointsBase: 'window',
		effect: 'slide',
		freeMode: true, // 다음슬라이드 위치를 고정할지 안할지,(false 일경우 딱딱 끊기며 스와이프됨)
		freeModeMomentumBounce: false,
		freeModeSticky: true,    
    navigation: {
      nextEl: '.class-book .swiper-button-next',
      prevEl: '.class-book .swiper-button-prev',
    },
		breakpoints: {
			800: {
				slidesPerView: 'auto',
				spaceBetween: 20,
			}
		},
    });	
  }
	classBook(); 

});

//YBM 교과서 전체보기
var allBtn = $('.subj-wrap .all-btn');
var allModal = $('.subj-wrap .modal');
var closeBtn = $('.subj-wrap .modal .close-btn');

$(allBtn).on('click', function(){
  $(allModal).addClass('show');
});
$(closeBtn).on('click', function(){
  $(allModal).removeClass('show');
});

//내 수업 리스트 교과서 마우스 오버
var clThumb = $('.cl-management .cont .lf-col .thumb-bx');
var clHover = $('.thumb-bx .hv-bx');
var clparents = $('.cl-management .cont');

$(clThumb).on('mouseover', function(){
  //alert('asfsdf');
  $(this).find(clHover).addClass('on');
});
$(clThumb).on('mouseleave', function(){
  $(clHover).removeClass('on');
});

//내 수업 리스트 학급별 보기 선택시
var classBtn = $('.my-class-list .box-content .cr-wrap .create .cl-btn');
var classBtnP = $('.my-class-list .box-content .cr-wrap .create');

$(classBtn).on('click',function(){
  $(this).addClass('on');
  $(this).parents(classBtnP).siblings().find(classBtn).removeClass('on');
});

//내 수업 리스트 YBM 추천 교재 화면ID : TC-P-1101
var clGradeLIst = new Swiper('.class-list-swipe .swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  breakpointsBase: 'window',
  navigation: {
    nextEl: '.class-list-swipe .swiper-button-next',
    prevEl: '.class-list-swipe .swiper-button-prev',
  }
});

// 대시보드 우측상단배너 스와이퍼
var pBookListSwiper = new Swiper('.right-banner-area .swiper-container', {
  slidesPerView: 1,
  breakpointsBase: 'window',
  effect: 'slide',
  freeMode: true, // 다음슬라이드 위치를 고정할지 안할지,(false 일경우 딱딱 끊기며 스와이프됨)
  freeModeMomentumBounce: false,
  freeModeSticky: true, 
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },  
  pagination: {
    el: '.right-banner-area .swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});	

// 대시보드 상단 배너 스와이퍼
var pBookListSwiper = new Swiper('.banner-top-area .swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  breakpointsBase: 'window',
  effect: 'slide',
  freeMode: true, // 다음슬라이드 위치를 고정할지 안할지,(false 일경우 딱딱 끊기며 스와이프됨)
  freeModeMomentumBounce: false,
  freeModeSticky: true,  
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".banner-top-area .swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

// 대시보드 인기자료 스와이퍼
var pBookListSwiper = new Swiper('.book-pp-list .swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 10,
  breakpointsBase: 'window',
  effect: 'slide',
  freeMode: true, // 다음슬라이드 위치를 고정할지 안할지,(false 일경우 딱딱 끊기며 스와이프됨)
  freeModeMomentumBounce: false,
  freeModeSticky: true,    
  navigation: {
    nextEl: '.book-pp-list .swiper-button-next',
    prevEl: '.book-pp-list .swiper-button-prev',
  },
  autoplay: {
    delay: 3000,
  }
});	

// 대시보드 수업추천자료 스와이퍼
var cBookListSwiper = new Swiper('.book-cc-list .swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  breakpointsBase: 'window',
  effect: 'slide',
  freeMode: true, // 다음슬라이드 위치를 고정할지 안할지,(false 일경우 딱딱 끊기며 스와이프됨)
  freeModeMomentumBounce: false,
  freeModeSticky: true,    
  navigation: {
    nextEl: '.book-cc-list .swiper-button-next',
    prevEl: '.book-cc-list .swiper-button-prev',
  },
  autoplay: {
    delay: 4000,
  }
});	

// 대시보드 다음학기 수업추천자료 스와이퍼
var c2BookListSwiper = new Swiper('.book-cc2-list .swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  breakpointsBase: 'window',
  effect: 'slide',
  freeMode: true, // 다음슬라이드 위치를 고정할지 안할지,(false 일경우 딱딱 끊기며 스와이프됨)
  freeModeMomentumBounce: false,
  freeModeSticky: true,    
  navigation: {
    nextEl: '.book-cc2-list .swiper-button-next',
    prevEl: '.book-cc2-list .swiper-button-prev',
  },
  autoplay: {
    delay: 3500,
  }
});	


//수업 자료 관리 워크시트 버튼 클릭시
var sheetLabel = $('.work-sheet .cont-label li button');
var sheetP = $('.work-sheet .cont-label li');

$(sheetLabel).on('click',function(){
  $(this).parents(sheetP).toggleClass('on');
});

//수업 자료 관리 인기,추천자료
var arrowNext = $('.work-sheet-list .swiper-button-next');
var arrowPrev = $('.work-sheet-list .swiper-button-prev');

var clListSwiper = new Swiper('#sheetSwiper', {
  direction: "vertical",
  autoHeight : true,
  loop : false,
  autoplay: {
    delay: 3000,
  }
});


//수업 자료 관리 수업자료 toggle
var tgParent = $('.tg-part-wrap');
var tgTitle = $('.tg-part-wrap .tg-title');
var tgArrow = $('.tg-part-wrap .tg-title .arrow');

$(tgArrow).on('click',function(){
  $(this).toggleClass('on');
  $(this).parents('.tg-part-wrap').find('.tg-cont').slideToggle();
  $(this).parents('.tg-part-wrap').toggleClass('on');
  if($(this).parents(tgParent).hasClass("active") === true) {
    //$(this).parents(tgParent).removeClass('active');
    $(this).parents(tgParent).find('tg-cont').slideUp();
    $(this).removeClass('active');
    //$(this).toggleClass('on');
    }
});

//수업 자료 관리 단계명 수정
// var modiparent = $('.tg-part-wrap .tg-title .modi');
// var modiName = $('.tg-part-wrap .tg-title .modi .modify');
// var modiTitle = $('.tg-part-wrap .tg-title .mdfname');

// // $(modiName).on('click', function(){
// //   $(this).parents(modiparent).siblings('.tg-part-wrap .form-wrap').find(modiTitle).removeAttr("readonly");
// //   $(this).parents(modiparent).siblings('.tg-part-wrap .form-wrap').find(modiTitle).focus();
// //   $(this).parents(modiparent).siblings('.tg-part-wrap .form-wrap').find(modiTitle).addClass('active');
// // });
// // $(modiTitle).on('focusout', function(){ 
// //   $(this).removeClass('active');
// //   $(this).attr('readonly', true);
// // });

// var modSmParent = $('.tg-cont .item .btn-bx.modi');
// var modSmName = $('.tg-cont .item .modi .modify');
// var modSmTitle = $('.tg-cont .item .mdfname02');

// // $(modSmName).on('click', function(){
// //   $(this).parents(modSmParent).siblings('h3').children(modSmTitle).removeAttr("readonly");
// //   $(this).parents('.btn-bx.modi').siblings('h3').addClass('active'); 
// //   $(this).parents('.item').find('.title-form.normal').removeClass('current');
// //   $(this).parents('.item').find('.title-form.txt-modify').addClass('current');
// //   $(this).parents(modSmParent).siblings('h3').children(modSmTitle).focus();
// // });
// // $(modSmTitle).on('focusout', function(){ 
// //   $(this).parents('h3').removeClass('active');
// //   $(this).attr('readonly', true);
// //   $(this).parents('.item').find('.title-form.txt-modify').removeClass('current');
// //   $(this).parents('.item').find('.title-form.normal').addClass('current');
// // });

var listTargetModify = $('.cl-contents>ul>li.ct .title-form.txt-modify');
var listTargetNormal = $('.cl-contents>ul>li.ct .title-form.normal');
var listTargetChild = $('.cl-contents>ul>li.ct .title-form.txt-modify .mdfname02');

$(listTargetNormal).dblclick(function() {
  $(this).removeClass('current');
  $(this).siblings(listTargetModify).addClass('current');
  $(this).siblings(listTargetModify).find('.mdfname02').removeAttr("readonly");
  $(this).siblings(listTargetModify).find('.mdfname02').focus();
  $(this).siblings(listTargetModify).addClass('active'); 
});
$(listTargetChild).on('focusout', function(){ 
  $(this).parents(listTargetModify).removeClass('current');
  $(this).parents(listTargetModify).siblings(listTargetNormal).addClass('current');
  $(this).attr('readonly', true);
});



//수업보드 수업유형 변경시 토스트 알럿 화면ID : TC-P-0003-2
var toastVal = $('.toast-val'); 
var toastValTarget = $('.toastAlert');

$(toastValTarget).on('click', function(){
  $(this).siblings(toastVal).fadeIn(1200);
  setInterval(function() {
    $(toastVal).fadeOut(1200);
  }, 1200);
});

//신규 수업 개설(타사 교과서 목차 클릭시) - 화면ID : TC-P-1105P
var dropboxContain = $('.block-drop-contain');
var dropboxList = $('.block-drop-box');
var dropboxTarget = $('.block-drop-target');

$(dropboxTarget).on('click', function(){
  $(this).parents(dropboxContain).find(dropboxList).addClass('active');
});


//신규 수업 개설 - 화면ID : TC-P-1105_5P
var sltTarget = $('.cl-step-cont .btn');

$(sltTarget).on('click', function(){
  $(this).addClass('on');
  $(this).parents('li').siblings().find(sltTarget).removeClass('on');
});




//내 수업 리스트 버튼 클릭 (수업리스트가 있을 경우)
var clChkInput = $('.sort-box .chk-form-wrap .chk-form input');
$(clChkInput).on('click', function(){
  $(this).parent().toggleClass('on');
});

//수업 자료 관리 (내수업안 ~ 과제/평가)
var myClassView = $('.division li .btns');
$(myClassView).on('click', function(){
  //alert('assdf');
  $(this).parent('li').toggleClass('on');
  $(this).parent('li').siblings('li').removeClass('on');
});

//수업자료 관리 - 내 온라인 콘텐츠 clcick
var titleCont = $('.cl-contents > ul > li .tg-part-wrap .tg-title .tg-sort li button');
$(titleCont).on('click', function(){
  //alert('assdf');
  $(this).parent('li').toggleClass('on');
  $(this).parent('li').siblings('li').removeClass('on');
});

//수업 자료 관리 - 단원 및 차시정보 토글
var toggleTarget = $('.article .head-list .colm-1 .big');
var toggleTarget2 = $('.article .small-list .colm-1 .big');
var toggleParent = toggleTarget.parents('.article');
var toggleParent2 = toggleTarget.parents('.cont-list-contain');
var toggleCont = $('.cont-list-contain');

$(toggleTarget).on('click', function(){
  //alert('asfasd');
  $(this).parents(toggleParent).children('.cont-list-contain').slideToggle();
  $(this).toggleClass('on');
});

$(toggleTarget2).on('click', function(){
  //alert('asfasd');
  $(this).parents(toggleParent2).children('.xs-list').slideToggle();
  $(this).toggleClass('on');
});

//top버튼 스크롤될때 효과
$('.article-wrap').scroll(function() {
  if ($(this).scrollTop() > 300) {
    $('.top-btn').fadeIn();
  } else {
    $('.top-btn').fadeOut();
  }
});
//top버튼 클릭시 스크롤   
$(".top-btn").click(function() {
  $('.article-wrap').animate({
    scrollTop : 0
  }, 400);
  return false;
});

//교재별 수업 자료 미리보기 상세 toggle
var bookTarget = $('.stp-cont .inner .arrow');

$(bookTarget).on('click', function(){
  $(this).parents('.stp-cont').children('.dph-list').slideToggle();
  $(this).parents('.stp-cont').toggleClass('on');
});

//학급/학생관리 학급 현황 셀렉트
/*var slParnets = $('.slt-box');
var slTarget = $('.slt-box .title h2');
var slTarget02 = $('.slt-box .sort-box .st');

$(slTarget).on('click', function(){
  //alert('asfsd');
  $(this).parent('.title').toggleClass('on');
  $(this).parent('.title').siblings('.sort-box').removeClass('on');
});

$(slTarget02).on('click', function(){
  //alert('asfsd');
  $(this).parent('.sort-box').toggleClass('on');
  $(this).parent('.sort-box').siblings('.title').removeClass('on');
});

//목록 이외 클릭시 목록 닫힘
$(document).on('mouseup',function (f){
  if(slParnets.has(f.target).length === 0){
    slTarget.parent('.title').removeClass("on");
    slTarget02.parent('.sort-box').removeClass('on');
  }
});*/

//학급현황 스와이프 화면 ID : TC-P-3101
var stuswiper = new Swiper(".stu-swiper1 .swiper-container", {
  slidesPerView: 'auto',
  spaceBetween: 17,
  navigation: {
    nextEl: ".stu-swiper1 .swiper-button-next",
    prevEl: ".stu-swiper1 .swiper-button-prev",
  },
});

var stuswiper2 = new Swiper(".stu-swiper2 .swiper-container", {
  slidesPerView: 'auto',
  spaceBetween: 17,
  navigation: {
    nextEl: ".stu-swiper2 .swiper-button-next",
    prevEl: ".stu-swiper2 .swiper-button-prev",
  },
});

var stuswiper3 = new Swiper(".stu-swiper3 .swiper-container", {
  slidesPerView: 'auto',
  spaceBetween: 17,
  navigation: {
    nextEl: ".stu-swiper3 .swiper-button-next",
    prevEl: ".stu-swiper3 .swiper-button-prev",
  },
});

//학급/학생관리 학급현황 - 개별 보기,모둠 보기 클릭시  / 화면ID : TC-P-3102P
/*var grTarget = $('.tab-ui .tb-btn');

$(grTarget).on('click', function(){
  //alert('asfsd');
  $(this).toggleClass('on');
  $(this).siblings().removeClass('on');
});*/

//학급/학생관리 학급현황 - 전체체크  / 화면ID : TC-P-3102P
var chkBox = $('.form-wrap #chkAll');

$(chkBox).click(function(){ 
  if($(chkBox).prop('checked')) { 
    $('input[name=chk]').prop('checked',true); 
      } else { $('input[name=chk]').prop('checked',false);} 		
});

//학급/학생관리 학급현황 - 모둠 스와이프  / 화면ID : TC-P-3102P
var grSwiper = new Swiper(".gr-colm.swiper-container", {
  slidesPerView: 'auto',
  spaceBetween: 20,
  scrollbar: {
    el: '.gr-colm.swiper-container .swiper-scrollbar',
    draggable: true,
  },
  shortSwipes: false,
});

//학급/학생관리 학급현황 - 신규 학급 등록  / 화면ID : TC-P-3103P

//input clear버튼
var clearInput = $('.clearinput');
var clearBtn = $('.clearbtn');

$(clearInput).on('input propertychange', function() {
  var $this = $(this);
  var visible = Boolean($this.val());
  $this.siblings(clearBtn).toggleClass('hidden', !visible);
}).trigger('propertychange');

$(clearBtn).click(function() {
  $(this).siblings('input[type="text"]').val('').trigger('propertychange').focus();
   $(this).siblings('input[type="password"]').val('').trigger('propertychange').focus();
});

//학급/학생관리 학급현황 - 신규 학급 등록 - 운영기간 개월 체크  / 화면ID : TC-P-3103P
var monthTarget = $('.schedule .ch-month button');

$(monthTarget).on('click',function(){ 
  $(this).toggleClass('on').siblings().removeClass('on');
});


//학급/학생관리 학생현황 - 스탬프 주기  / 화면ID : TC-P-3201-3P
var stpTarget = $('.stamp-bx .btn');
var stpTargetSbling = $('.stamp-bx .balloon');

$(stpTarget).on('click',function(){ 
  $(this).siblings(stpTargetSbling).addClass('on');
});
//목록 이외 클릭시 목록 닫힘
$(document).on('mouseup',function (e){
  if(stpTarget.has(e.target).length === 0){
    stpTargetSbling.removeClass("on");
  }
});

//학급현황 - 저장 버튼 선택시 / 화면ID : TC-P-3103-6
var toast = $('#toast'); 
var toastTarget = $('#toastTarget');

$(toastTarget).on('click', function(){
  //alert('asdfsfd');
  $(toast).fadeIn(200);
  setInterval(function() {
    $(toast).fadeOut(200);
  }, 2500);
});


//학생현황 - 출석현황 ~ 스탬프 클릭시 / 화면ID : TC-P-3201-3
var itmTarget = $('.status .item');
var arrTarget = $('.status .btns .drop');
var popTarget = $('.pop');

$(itmTarget).click(function(){ 
  $(this).addClass('on').siblings().removeClass('on');
});

$(arrTarget).click(function(){ 
  $(popTarget).addClass('on');
  $(this).toggleClass('active');
});

//목록 이외 클릭시 목록 닫힘
$(document).on('mouseup',function (e){
  if(popTarget.has(e.target).length === 0){
    popTarget.removeClass('on');
    arrTarget.removeClass('active');
  }
});

//학생현황 - 학생 상세보기 - 수업내역 - 과제현황 swipe 화면ID : TC-P-3202-3
var stuSchSwiper = new Swiper(".swiper-sch01 .swiper-container", {
  slidesPerView: 7,
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-sch01 .swiper-button-next",
    prevEl: ".swiper-sch01 .swiper-button-prev",
  },
});

//학생현황 - 학생 상세보기 - 수업내역 - 평가현황 swipe 화면ID : TC-P-3202-3
var stuSchSwiper02 = new Swiper(".swiper-sch02 .swiper-container", {
  slidesPerView: 7,
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-sch02 .swiper-button-next",
    prevEl: ".swiper-sch02 .swiper-button-prev",
  },
});

//학생현황 - 신규 학급 등록 운영 기간 캘린더 화면ID : TC-P-3103
var calenderTarget = $('.schedule .form-wrap .it');
var calenderTargetB = $('.schedule .date');
var calender = $('.calender');
var timeTarget = $('.schedule .form-wrap .form-tm');
var timer = $('.time');
var timeClose = $('.time .close-btn');

$(calenderTarget).on('click', function(){
  $(this).parent().find(calender).toggleClass('on');
});

$(timeTarget).on('click', function(){
  $(this).parent().find(timer).toggleClass('on');
});

$(timeClose).on('click', function(){
  $(this).parents(timer).removeClass('on');
});

//목록 이외 클릭시 목록 닫힘
$(document).on('mouseup',function (e){
  if(calender.has(e.target).length === 0){
    calender.removeClass('on');
  }
});

$(document).on('mouseup',function (e){
  if(timer.has(e.target).length === 0){
    timer.removeClass('on');
  }
});

//학생현황 - 신규 학급 등록 학교 정보 클릭시 화면ID : TC-P-3103
var clChkTarget = $('.sch-info .chk-form .cl-btn');

$(clChkTarget).on('click', function(){
  $(this).parent().toggleClass('on');
  $(this).parent().siblings().removeClass('on');
});


//온라인 콘텐츠 만들기 - 기본문서형 화면ID : TC-P-1303
var contentsTarget = $('.article-wrap.ch-cont .art-view');

$(contentsTarget).on('click', function(){
  $(this).toggleClass('on');
  $(this).parents('.col-2').siblings().find('.art-view').removeClass('on');
});


//온라인 콘텐츠 만들기 - 기본문서형 내수업 선택시 화면ID : TC-P-1302-2 , 수업 자료관리 단원/차시 화면ID : TC-P-1103
var chkMyclass = $('.chk-my-class');
var chkMyclassCont = $('.chk-my-class-cont');
var chkMyclassTarget1 = $('.step-list .op-wrap .inner .op-box a');
var chkMyclassTarget2 = $('.step-list .op-wrap .inner .op-box.op2');
var chkMyclassTarget3 = $('.step-list .op-wrap .inner .op-box.op3');
var chkMyclassA = $('.step-list .op-wrap .inner .op-box.op2 a');
var chkMyclassA3 = $('.step-list .op-wrap .inner .op-box.op3 a');

$(chkMyclass).click(function(){ 
  /*if($(chkMyclass).prop('checked')) { 
    $(chkMyclassCont).addClass('on');

      //목록 이외 클릭시 목록 닫힘
      $(document).on('mouseup',function (e){
        if(chkMyclassCont.has(e.target).length === 0){
          chkMyclassCont.removeClass('on');
        }
      });

      } else { 
        $(chkMyclassCont).removeClass('on');
      }*/ 
      $(chkMyclass).toggleClass('on');	
      $(chkMyclassCont).toggleClass('on');	
      //목록 이외 클릭시 목록 닫힘
      /*$(document).on('mouseup',function (e){
        if(chkMyclassCont.has(e.target).length === 0){
          chkMyclassCont.removeClass('on');
          chkMyclass.removeClass('on');	
        }
      });	*/
});


//학급 클릭시
$(chkMyclassTarget1).on('click', function(){
  $(this).addClass('on');
  $('.op-box a').not(this).removeClass('on');
  $(chkMyclassTarget2).addClass('on');
});

//단원 클릭시
$(chkMyclassA).on('click', function(){
  if($(this).parent('li').hasClass("has-sub") === true) {
    $(this).parent('li').toggleClass('on');
    $(this).parent('li').siblings().removeClass('on');
  }else{
    $(chkMyclassTarget3).addClass('on');
    //$(this).toggleClass('on');
  }
});

//차시 클릭시
$(chkMyclassA3).on('click', function(){
  $(this).addClass('on');
  $(this).parent().siblings().find('a').removeClass('on');
});

/*$(chkMyclassA).on('click', function(){
  $(this).parent().siblings().find('a').removeClass('on');
});*/


//닫기 클릭시
$('.chk-my-class-cont .close-btn').on('click', function(){
  $(chkMyclassCont).removeClass('on');
  $(chkMyclass).removeClass('on');
});

//수업자료 미리보기
var prevParent = $('.list-wrap');
var prevListWrap = $('.list-wrap .toggle-target');
var prevList = $('.body-contain');

$(prevListWrap).on('click', function(){
  $(this).parents('.list-wrap').toggleClass('active').siblings('.list-wrap').removeClass('active');
  $(this).parents('.list-wrap').find('.body-contain').slideToggle();
  $(this).parents('.list-wrap').siblings().find('.body-contain').slideUp();
});


//수업보드 - 내수업자료 단원/차시  화면ID : TC-P-0008
var stpWrapper = $('.step-wrapper');
var stpTarget = $('.sch-target');
var chkMyclass2 = $('.chk-my-class2');
var chkMyclassCont2 = $('.chk-my-class-cont2');

$(stpTarget).on('click', function(){
    $(this).parents(stpWrapper).find(chkMyclass2).toggleClass('on');	
    $(this).parents(stpWrapper).find(chkMyclassCont2).toggleClass('on');	
    $(this).parents(stpWrapper).siblings().find(chkMyclassCont2).removeClass('on');
});




//온라인 콘텐츠 만들기 - 기본문서형 step1 화면ID : TC-P-1303-3
var chkbasicTarget = $('.class-add-box .chk-form-wrap .chk-form .cl-btn');

$(chkbasicTarget).on('click', function(){
  $(this).parent('.chk-form').toggleClass('on');
  $(this).parent('.chk-form').siblings().removeClass('on');
});

//온라인 콘텐츠 만들기 - 온라인시험지 step1 화면ID : TC-P-1304-1
var chkTag = $('.inlin-g .chk-form .cl-btn');

$(chkTag).on('click', function(){
  $(this).parent('.chk-form').toggleClass('on');
  $(this).parent('.chk-form').siblings().removeClass('on');
});


//온라인 콘텐츠 만들기 - 온라인시험지 문제담기 자동출제 체크될때  화면ID : TC-P-1304-2
var inputTarget = $('.input-type-write input');
var schAddLabel = $('.sch-add-label');
var inputTypeOn = $('.input-type-on') ;

$(inputTarget).click(function(){ 
  if($('input:radio[name=manual]:checked').val() == '1'){
    $('.input-type-on').removeClass('disabled');
    $('.sch-name').addClass('on');
    $('.input-type-on').focus();
    $(schAddLabel).addClass('animated');
  }else if($('input:radio[name=manual]:checked').val() == "0"){
    $(schAddLabel).removeClass('animated');
    $('.input-type-on').addClass('disabled');
    $('.sch-name').removeClass('on');
    $('.input-type-on').focusOut();
  }
  
});


//온라인 콘텐츠 만들기 - 기본문서형 대상/일정수정 - 목록콘텐츠 선택시  화면ID : TC-P-1303-17
var listItem = $('.input-type-write input');

$(inputTarget).click(function(){ 
  if($('input:radio[name=manual]:checked').val() == '1'){
    $('.sch-name').addClass('on');
    $('.input-type-on').focus();
  }else if($('input:radio[name=manual]:checked').val() == "0"){
    $('.sch-name').removeClass('on');
    $('.input-type-on').focusOut();
  }
  
});


//온라인 콘텐츠 만들기 - 온라인시험지 step3 화면ID : TC-P-1304-4
var chkTypeB = $('.chk-form.type-b .cl-btn');

$(chkTypeB).on('click', function(){
  $(this).parent('.chk-form').toggleClass('on');
  $(this).parent('.chk-form').siblings().removeClass('on');
});

//온라인 콘텐츠 만들기 - 온라인시험지 step3 토글 화면ID : TC-P-1304-4
var tggTarget = $('.tg-area .tg-cont .tg-head .title');

$(tggTarget).on('click', function(){
  $(this).parent('.head').siblings('.body').slideToggle();
});

//과제/평가 상세보기 토글 화면ID : TC-P-1202-1
var tgTarget = $('.tg-toggle-wrap .tg-target');
var tgCont = $('.tg-toggle-wrap .tg-toggle-cont');

$(tgTarget).on('click', function(){
  $(this).parents('.tg-toggle-wrap').find(tgCont).slideToggle();
  $(this).parents('.tg-toggle-wrap').toggleClass('on');
  $(this).parents('.tg-toggle-wrap').siblings().find(tgCont).slideUp();
  $(this).parents('.tg-toggle-wrap').siblings().removeClass('on');
});


//과제/평가 상세보기 비디오 ~ 오디오버튼 클릭시 화면ID : TC-P-1202-4
var emoTarget = $('.file-up .btns');

$(emoTarget).on('click', function(){
  $(this).toggleClass('on');
  $(this).parents('.form-wrap').siblings().find(emoTarget).removeClass('on');
});

//과제/평가 상세보기 이모티콘버튼 클릭시 화면ID : TC-P-1202-4
var emotionBtn = $('.file-up .btns.emo');
var emotionParent = emotionBtn.parents('.file-up .form-wrap');
var emotionBox = $('.emotion-box');

$(emotionBtn).on('click', function(){
  $(this).siblings(emotionBox).toggleClass('on');
  $(this).parents('.item').siblings().find(emotionBox).removeClass('on');
});
//목록 이외 클릭시 목록 닫힘
$(document).on('mouseup',function (e){
  if(emotionParent.has(e.target).length === 0){
    emotionBox.removeClass('on');
  }
});

//과제/평가 상세보기 스탬프 주기(흑백처리) 화면ID : TC-P-1203-1
var stampTarget = $('.stp-box .stamp');
$(stampTarget).on('click', function(){
  $(this).removeClass('off');
  $(this).siblings().addClass('off');
});

//과제/평가 상세보기 스탬프 주기 클릭시 화면ID : TC-P-1203-1
var stpBtn = $('.tool-box .file-box .btn-box .btn');
var stpBtnparents = stpBtn.parents('.file-box .btn-box');
var stpBox = $('.opend-stp');

$(stpBtn).on('click', function(){
  $(this).siblings(stpBox).toggleClass('on');
});
//목록 이외 클릭시 목록 닫힘
$(document).on('mouseup',function (e){
  if(stpBtnparents.has(e.target).length === 0){
    stpBox.removeClass('on');
    $(stampTarget).removeClass('off');
  }
});

//과제/평가 상세보기 이미지클릭시 확대 화면ID : TC-P-1203-1
$('.lightgallery').lightGallery({
  zoom: true,
  loop: false,
  scale: 1,
  autoplay: false,
  autoplayControls: false,
  actualSize: false,
  thumbnail: false,
  share: false,
  fullScreen: false,
  download: true,
  subHtmlSelectorRelative: true
});


//과제/평가 상세보기 (제출/평가 - 설문결과) 제출현황 토글 화면ID : TC-P-1208-1
var svTarget = $('.survey .txt-area .toggle .btns');

$(svTarget).on('click', function(){
  $(this).parent().siblings('.cont').toggleClass('on');
});

//과제/평가 상세보기 (제출/평가 - 토의/토론) 찬성,반대 버튼 클릭시 화면ID : TC-P-1209
var valueBtn = $('.discussion-desc .ch-btn-wrap .btns-box');

$(valueBtn).on('click', function(){
  $(this).toggleClass('on');
  $(this).parents('.col-lg-6').siblings().find('.btns-box').removeClass('on');
});


//과제/평가 상세보기 (제출/평가 - 토의/토론) 댓글보기 화면ID : TC-P-1209-3
var rplTarget = $('.repl-box .btn');

$(rplTarget).on('click', function(){
  $(this).parents('.repl-box').toggleClass('on');
  $(this).parents('.head').siblings('.repl-cont').slideToggle();
});

//과제/평가 상세보기 (토의/토론 - 세부 주제별) 화면ID : TC-P-1210
var titleSwiper = new Swiper(".title-swiper .swiper-container", {
  slidesPerView: 'auto',
  spaceBetween: 20,
  pagination: {
    el: ".title-swiper .swiper-pagination",
    type: "progressbar",
  }
});


//온라인 콘텐츠 - 워크시트 화면ID: tc_p-1305-1
var workSheet = new Swiper('#thumbList .swiper-container', {
  slidesPerView: '6',
  slidesPerGroup: 6,
  spaceBetween: 15,
  navigation: {
    nextEl: '#thumbList .swiper-button-next',
    prevEl: '#thumbList .swiper-button-prev',
  },
  pagination: {
    el: "#thumbList .swiper-pagination",
  },
});

var workSheetItem = $('#thumb-list .swiper-container .swiper-slide');

$(workSheetItem).on('click', function(){
  $(this).toggleClass('on');
});

//온라인 콘텐츠 - 워크시트 - 문항만들기 화면ID: tc_p-1305-7
var sheetView = new Swiper('.sheet-list-swipe .swiper-container', {
  spaceBetween: 16,
  slidesPerView: 'auto',
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  centerInsufficientSlides: true,
  scrollbar: {
    el: '.sheet-list-swipe .swiper-scrollbar',
  },
  navigation: {
    nextEl: '.sheet-list-swipe .swiper-button-next',
    prevEl: '.sheet-list-swipe .swiper-button-prev',
  },
  /*pagination: {
    el: ".sheet-list-swipe .swiper-pagination",
    type: "fraction",
  },*/
});
var sheetView2 = new Swiper('.sheet-list-swipe2 .swiper-container', {
  spaceBetween: 15,
  slidesPerView: 1,
  autoHeight: true,
  simulateTouch: false,
  navigation: {
    nextEl: '.sheet-list-swipe2 .swiper-button-next',
    prevEl: '.sheet-list-swipe2 .swiper-button-prev',
  },
  thumbs: {
    swiper: sheetView,
  },
});

var workSheetItem = $('#thumb-list .swiper-container .swiper-slide');

$(workSheetItem).on('click', function(){
  $(this).toggleClass('on');
});

//온라인 콘텐츠 - 워크시트 화면ID: tc_p-1305-1
var thumgSwiper = new Swiper('.thumb-list.type-a .swiper-container', {
  slidesPerView: '1',
  spaceBetween: 15,
  autoHeight: true,
  //simulateTouch: false, //확인하기화면연결로 인하여 터치 false로 해놓아야 height가 잡힘  
  navigation: {
    nextEl: '.thumb-list.type-a .swiper-button-next',
    prevEl: '.thumb-list.type-a .swiper-button-prev',
  },
  scrollbar: {
    el: '.thumb-list.type-a .swiper-scrollbar',
  },
  pagination: {
    el: ".thumb-list.type-a .swiper-pagination",
    type: "fraction",
  },
});


//상단 시험지 클릭시 화면ID: tc_p-1305-7
var swpTaget = $('.sheet-list-swipe .swiper-slide');

$(swpTaget).on('click', function(){
  $(this).addClass('on').siblings('.swiper-slide').removeClass('on');
});


//온라인 콘텐츠 - 워크시트 - 문항만들기 플로팅툴박스 화면ID: tc_p-1305-7
/*var floatParents = $('.float-tool');
var floatTarget = $('.float-tool .tab-style .item');
var floatArrowTarget = $('.float-tool .arrow');
var floatCont = $('.tb-contents');
var floatPrev = $('.item.preview');

$(floatTarget).on('click', function(){
  $(floatParents).addClass('active');
  $(floatArrowTarget).addClass('on');
});

$(floatPrev).on('click', function(){
    $(floatParents).removeClass('active');
    $(floatTarget).removeClass('current');
    $(floatCont).removeClass('current');
    $(floatArrowTarget).removeClass('on');
});

$(floatArrowTarget).on('click', function(){
  $(this).toggleClass('on');
  $(floatParents).addClass('active');
  $(floatCont).removeClass('current');

  if($(floatArrowTarget).hasClass("on") === false) {
      $(floatParents).removeClass('active');
      $(floatTarget).removeClass('current');
    }
    
});*/
//온라인 콘텐츠 - 워크시트 - 플로팅툴박스 미리보기 클릭시
var prvTarget = $('.arw-target');
var prvTCont = $('.mdl-wrap');
var prvClose = $('.mdl-wrap .close-btn');

$(prvTarget).on('click', function(){
 $(prvTCont).addClass('show');
});
$(prvClose).on('click', function(){
  $(prvTCont).removeClass('show');
});


//온라인 콘텐츠 - 도구입력모음 화면ID: tc_p-1304
$(".tool-input-box .item input").change(function(){
  if($(this).is(":checked")){
      var tab_id = $(this).parents('.item').attr('data-tab');

      $("#"+tab_id).slideDown().siblings().slideUp();
  }
});


//온라인 콘텐츠 - 공유콘텐츠 게시물 표기 화면ID: tc_p-1309-5
var sheetLabel = $('.label-conts > ul > li > button');

$(sheetLabel).on('click',function(){
  $(this).parents('li').toggleClass('on');
});


//수업 리포트 - 과제평가현황 화면ID: tc_p-1507
var monthSwiper = new Swiper(".month-swiper .swiper-container", {
  slidesPerView: 'auto',
  spaceBetween: 0,
  navigation: {
    nextEl: ".month-dep .swiper-button-next",
    prevEl: ".month-dep .swiper-button-prev",
  },
});

//그룹메세지 -화면ID: tc_p-2005_1
$('.open-text').click(function(){
  $(this).siblings('.item-tbox-cont').addClass('on')
  $(this).parent().siblings('.chat-inner').slideDown()
})
$('.close-text').click(function(){
  $(this).siblings('.item-tbox-cont').removeClass('on')
  $(this).parent().siblings('.chat-inner').slideUp()
})

//그룹메시지 / 화면ID : TC-P-2005-1P
//첨부파일 클릭시
var groupFile = $('.group-file');
var groupFileChild = $('.group-file .f-sort-box');

$(groupFile).on('click', function(){
  $(this).children(groupFileChild).addClass('on');
});
//목록 이외 클릭시 목록 닫힘
$(document).on('mouseup',function (e){
  if(stpBtnparents.has(e.target).length === 0){
    groupFileChild.removeClass('on');
  }
});

//펼치기,접기 버튼
var openbtn = $('.open-text');
var closebtn = $('.close-text');

$(openbtn).on('click', function(){
  $(this).toggleClass('on');
  $(this).next().toggleClass('on')
});
$(closebtn).on('click', function(){
  $(this).toggleClass('on');
  $(this).prev().toggleClass('on')
});

//좋아요버튼
var likebtn = $('.chat-tbox button');
var likebtnChild = $('.chat-tbox button i');
$(likebtn).on('click', function(){
  $(this).children(likebtnChild).toggleClass('on');
});

//대상 변경 링크클릭시
var parentvar1 = $('.parent-var .select-target a');
var parentvar2 = $('.parent-var .var-btn');
var parentvar3 = $('.triangle-box .triangle-top');
var studentvar1 = $('.student-var .var-btn a');
var studentvar2 = $('.student-var .var-btn');
var groupTbox= $('.cont-tbox2');

parentvar1.on('click', function(){
  $(parentvar2).addClass('active')
  $(studentvar2).addClass('active')
});

$('.triangle-bottom').on('click', function(){
  groupTbox.slideDown()
  $(this).removeClass('active')
  $('.triangle-top').removeClass('active')
});
$('.triangle-top').on('click', function(){
  groupTbox.slideUp()
  $(this).addClass('active')
  $('.triangle-bottom').addClass('active')
});

studentvar1.on('click', function(){
  studentvar2.removeClass('active')
  parentvar2.removeClass('active')

});

//메세지 전달 대상 선택시 
var gchkIn1 = $('.gnm-class1 a'); //학생
var gchkIn2 = $('.gnm-class2 a'); //학부모

gchkIn1.on('click',function(){
  $(this).toggleClass('student') //학생선택시
})

gchkIn2.on('click',function(){
  $(this).toggleClass('parent') //학부모선택시
})

//전체 선택
var gchkBox1 = $('.form-wrap #gse1');
var gchkBox2 = $('.form-wrap #gse2');

// 학생선택일때(클래스네임 : .student)
gchkBox1.click(function(){ 	
  gchkIn1.removeClass('student');
  if($(this).is(':checked')){
    gchkIn1.addClass('student');
  }
});

// 학부모선택일때(클래스네임 : .parent)
gchkBox2.click(function(){ 	
  gchkIn2.removeClass('parent');
  if($(this).is(':checked')){
    gchkIn2.addClass('parent');
  }
});


//1:1메시지 첨부파일 클릭시 / 화면ID : TC-P-2004-12P
var sortFile = $('.sort-file');
var sortFileChild = $('.sort-file .f-sort-box');

$(sortFile).on('click', function(){
  $(this).children(sortFileChild).addClass('on');
});
//목록 이외 클릭시 목록 닫힘
$(document).on('mouseup',function (e){
  if(sortFile.has(e.target).length === 0){
    sortFileChild.removeClass('on');
  }
});

//자료나눔터 해시태그 클릭시 / 화면ID : TC-P-5101P
$('.hash-box button, .hash-box2 button').click(function(){
  $(this).toggleClass('on').siblings().removeClass('on');
})

//스와이퍼
var shContswiper = new Swiper(".rank-box .swiper-container", {
  direction: "vertical",
  autoHeight : true,
  loop : false,
  autoplay: {
    delay: 3000,
  }
});

//수정/변경클릭시
/*$('.guide-desc .off').hide()
$('.guide-desc .off-btn').click(function(){
  $('.guide-desc .on').show()
  $('.guide-desc .off').hide()
})
$('.guide-desc .on-btn').click(function(){
  $('.guide-desc .off').show()
  $('.guide-desc .on').hide()
})*/

//like 클릭시
$('.chat-title .cr .like').click(function(){
  $(this).toggleClass('on')
});

//썸네일,리스트 클릭시
var sortThumb = $('.sorting-box .form-wrap button')
$(sortThumb).click(function(){
  $(this).addClass('on').siblings().removeClass('on');
});

//썸네일,리스트 클릭시
/*$('.thmb-toggle').click(function(){
  $(this).toggleClass('on')
})
$('.list-toggle').click(function(){
  $(this).toggleClass('on')
})*/

//채팅 글자수 제한
var shInput = $('.sh-content #inputLengthCheck')
shInput.on('keyup', function() {
  $(this).siblings('#textLengthCheck').children('strong').html($(this).val().length);
  if($(this).val().length > 300) {
    $(this).val($(this).val().substring(0, 300));
    $(this).siblings('#textLengthCheck').children('strong').html("300");
  }
});

//제목 글자수 제한
$('.inputTitlech').on('keyup',function(){
  if($(this).val().length > 80) {
    $(this).val($(this).val().substring(0,80));
  }
})


//이슈톡 - 진행중인 이슈톡 화면 ID : TC-P-6101
var issueSwiper = new Swiper(".ing-issue .swiper-container", {
  slidesPerView: 1,
  //autoplay:true,
  //speed:1000,
  autoHeight:true,
  pagination: {
    el: ".ing-issue.issue-swiper .swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".ing-issue .swiper-button-next",
    prevEl: ".ing-issue .swiper-button-prev",
  },
});

// 이슈톡 -수정하기 화면 ID : TC-P-6105
var isEditSwiper = new Swiper(".is-swiper-cont .swiper-container",{
  slidesPerView: 1,
  autoHeight:true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: ".is-swiper-cont .swiper-button-next",
    prevEl: ".is-swiper-cont .swiper-button-prev",
  },
}); 

// 이슈톡 - 참여하기 화면 ID : TC-P-6103
var issueVs = $('.isvs .btns-box')
issueVs.click(function(){
  if($(this).is('.on')){
    $('.isvs .isInput').slideDown();
  } else {
    $('.isvs .isInput').slideUp();
  }
})

// 복수응답 화면 ID : TC-P-6103-5
var isSelect = $('.is-inputdesc .item.desc-items')
isSelect.click(function(){
  if($(this).is('.on')){
    $(this).removeClass('on')
  }else {
    $(this).addClass('on')
  }
})

// 채팅창 색변경 화면 ID : TC-P-6103-7
var isColorBtn = $('.chat-color button');
var isPinkBtn = $('.chat-color .pink');
var isYellowBtn = $('.chat-color .yellow');
var isBlueBtn = $('.chat-color .blue');
var isGrayBtn = $('.chat-color .gray');
var isChatTop = $('.chat-tbox .chat-top');
$(isColorBtn).on('click', function(){
  $(this).toggleClass('on');
  $(this).siblings().removeClass('on');

  if(isPinkBtn.hasClass('on')){
    $(isChatTop).toggleClass('pink');
  }else{
    $(isChatTop).removeClass('pink');
  }
  if(isYellowBtn.hasClass('on')){
    $(isChatTop).toggleClass('yellow');
  }else{
    $(isChatTop).removeClass('yellow');
  }
  if(isBlueBtn.hasClass('on')){
    $(isChatTop).toggleClass('blue');
  }else{
    $(isChatTop).removeClass('blue');
  }
  if(isGrayBtn.hasClass('on')){
    $(isChatTop).toggleClass('gray');
  }else{
    $(isChatTop).removeClass('gray');
  }

});

//채팅 글자수 제한
var isInput = $('.isInput #inputLengthCheck')
isInput.on('keyup', function() {
  $(this).parents('.chat-top').siblings().children('.rt-col').children().children('strong').html($(this).val().length);
  if($(this).val().length > 300) {
    $(this).val($(this).val().substring(0, 300));
    $(this).siblings('#textLengthCheck').children('strong').html("300");
  }
});

//결과화면 답글쓰기 화면 ID : TC-P-6104-3
var commentBnt = $('.chat-bts .chat')
var chatInput = $('.chatinput')
var chatInputDel = $('.chatinput .btns.del')

commentBnt.click(function(){
  $(this).parents('.chatcont').next(chatInput).addClass('on'),2000
})

chatInputDel.click(function(){
  $(this).parents(chatInput).removeClass('on'),2000
})


//토의토론 - 입력하기 클릭시 화면 ID : TC-P-1308-7P
var disBtn = $('.discussion-desc.ox-cont .input-btn')
var disInput = $('.click-box')

disBtn.click(function(){
  $(this).parents('.item').find(disInput).toggleClass('active'),2000;
});

/*//시간표관리 - 시간표설정 수업,학급리스트 스와이프 화면ID : schedule
var timeSwiperSet = new Swiper('.class-my-list.cls-my1 .swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  breakpointsBase: 'window', 
  scrollbar: {
    el: '.class-my-list.cls-my1 .swiper-scrollbar',
  },
});

//시간표관리 - 시간표설정 수업,학급리스트 스와이프 화면ID : schedule
var timeSwiperSet2 = new Swiper('.class-my-list.cls-my2 .swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  breakpointsBase: 'window', 
  scrollbar: {
    el: '.class-my-list.cls-my2 .swiper-scrollbar',
  },
});*/

//프리톡 게시글 스와이프 화면ID : TC-P-6201
var ftalkSwiper = new Swiper('.ftalk-footer .swiper-container', {
  slidesPerView: 'auto',
  breakpointsBase: 'window',
  autoHeight: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});

//주제 클릭시 그림자 추가
var fTalkCard = $('.ftalk-cont .ftalk-best-slide .swiper-slide a')
fTalkCard.click(function(){
  $(this).parent().toggleClass('on')
})

//글 펼치고 접기
var fTalkOpenBtn = $('.ftalk-footer .btns .open')
var fTalkFoldBtn = $('.ftalk-footer .btns .fold')
var fTalkTxt = $('.ftalk-footer .txt')
fTalkOpenBtn.click(function(){
  $(this).addClass('on')
  $(this).siblings(fTalkFoldBtn).addClass('on')
  $(this).parent().prev(fTalkTxt).addClass('on')
})
fTalkFoldBtn.click(function(){
  fTalkOpenBtn.removeClass('on')
  fTalkFoldBtn.removeClass('on')
  fTalkTxt.removeClass('on')
})

//채팅 글자수 제한
var fTalkInput = $('.ftalk-footer #inputLengthCheck')
fTalkInput.on('keyup', function() {
  $(this).parents('.chat-top').siblings('.chat-content').children('.rt-col').children('#textLengthCheck').children('strong').html($(this).val().length);
  if($(this).val().length > 300) {
    $(this).val($(this).val().substring(0, 300));
    $('#textLengthCheck strong').html("300");
  }
});

//채팅 열고닫기
var fTalkChat = $('.ftalk-footer .label-conts .chat button')
fTalkChat.click(function(){
  $(this).parents('.label-conts').next('.ftalk-chat').slideToggle()
})

//수정클릭시 toggle
var fTalkEditBtn = $('.edit-btn').click(function(){
  $(this).children().toggleClass('on')
})

/*
2021.12.10 개발진행시 문제가 있어 조봉래님(BNP) 요청으로 삭제 진행하기로함.

//퀴즈/설문조사 확인하기 - 보기 클릭시(복수) 화면ID: 1321
var viewChk = $('.quiz-view .qa-write-box.checking');
$(viewChk).on('click', function(){
    $(this).toggleClass('active');
});

//퀴즈/설문조사 확인하기 - 보기 클릭시(단수) 화면ID: 1321
var viewChkSingle = $('.quiz-view .qa-write-box.checking.single');
$(viewChkSingle).on('click', function(){
  //alert('asfsfd');
  $(this).addClass('active');
  $(viewChkSingle).not($(this)).removeClass('active');
});

//퀴즈/설문조사 확인하기 - OX형 보기 클릭시 화면ID: 1321
var viewChkSingle2 = $('.chk-ox-bx.checking.single');
$(viewChkSingle2).on('click', function(){
  $(this).addClass('active');
  $(viewChkSingle2).not($(this)).removeClass('active');
});


*/

//퀴즈/설문조사 textarea 입력후 엔터 및 다른영역 클릭시 화면ID: 1323
var textArea = $('.quiz-view .dsc.input')
$(textArea).keydown(function(key) {
  //키의 코드가 13번일 경우 (13번은 엔터키)
  if (key.keyCode == 13) {
      $(this).addClass('active');
  }  
});
$(textArea).on("blur", function () {
  $(textArea).addClass('active');
});

//자료나눔터 
var fileCheck = $('.form-wrap #limit1');
var fileCheck2 = $('.form-wrap input[name=limitModify]');

$(fileCheck).click(function(){ 
  if($(fileCheck).prop('checked')) { 
    $(this).parents('.form-wrap').siblings().find('input[name=limitModify]').prop('checked',false);    
      } 		
});

$(fileCheck2).click(function(){ 
  if($(fileCheck2).prop('checked')) { 
    $(this).parents('.form-wrap').siblings().find('input[name=limit]').prop('checked',false);    
      } 		
});


//시간표관리 시간표설정 
$(document).ready(function (e) {

  var totalWidth = 0;
  var set = $('.cls-my1 .form-wrap');   
  set.each(function(){
    totalWidth = totalWidth + $(this).outerWidth(true);
  })
  //console.log(totalWidth);    
  $('.cls-my1').css('width', totalWidth);

  var totalWidth2 = 0;
  var set2 = $('.cls-my2 .form-wrap');   
  set2.each(function(){
    totalWidth2 = totalWidth2 + $(this).outerWidth(true);
  })
  //console.log(totalWidth2);   
  $('.cls-my2').css('width', totalWidth2);
});

//온/콘 texrarea영역 height: auto
$(".qa-area textarea, .quiz-view textarea").on('keydown keyup', function () {
  $(this).height(1).height( $(this).prop('scrollHeight'));	
});

//신규수업개설하기 예시화면 스와이프 화면ID : TC-P-1105_5
var ftalkSwiper = new Swiper('.example-view .swiper-container', {
  slidesPerView: 1,
  autoplay: {
    delay: 5000,
  },
  breakpointsBase: 'window',
  autoHeight: true,    
  navigation: {
    nextEl: '.example-view .swiper-button-next',
    prevEl: '.example-view .swiper-button-prev',
  },
  pagination: {
    el: '.example-view .swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});

//온/콘 도구입력박스 화면ID : TC-P-1304-4
var toolBox = $('.float-tool .item');
var toolBtn = $('.float-tool .item a');
var ballonClose = $('.float-tool .item .del');

$(toolBtn).on('click', function(){
  $(this).parents('.item').addClass('current');
  $(this).parents('.item').siblings().removeClass('current');
  $(this).parents('.box').siblings().find('.item').removeClass('current');
  $(this).parents('.item').find('.balloon').addClass('active');
  $(this).parents('.item').siblings().find('.balloon').removeClass('active');
  $(this).parents('.box').siblings().find('.balloon').removeClass('active');
});

$('.float-tool .item .balloon .del').on('click', function(){
  $(this).parent('.balloon').removeClass('active');
});

//온/콘 온라인 시험지,워크시트 진입시,토스트알럿

/*첫 진입시*/
$( document ).ready(function() {
  $('.toast-a').fadeIn(500).delay(500).fadeOut(500);
  $('.fixed-alert-a').delay(1500).fadeIn(500);
});
/*문항 편집시*/
$(toolBtn).on('click',function(){
  $('.fixed-alert-a').fadeOut(200);
  $('.toast-c').fadeIn(300).delay(2500).fadeOut(300);
  $('.fixed-alert-b').delay(1000).fadeIn(200);
});
/*문항완료 버튼 클릭시*/
$('.toast-alert-box .complete').on('click',function(){
 $(this).addClass('disabled');
 $('.fixed-alert-b').delay(500).fadeOut(300);
});
/*가리기,음원입력,링크연결 클릭시 토스트알럿 hidden*/
$('.float-tool .box.oncon-wrap .item a').on('click',function(){
  $('.toast-c').hide();
  $('.fixed-alert-b').delay(100).fadeIn(100);
});


//온/콘 음원입력 사운드버튼
var onconSoundsT = $('.tst-tool .sounds-box .sounds-btn');
// var onconSounds = $('.tst-tool .sounds-box .items');
var onconSoundsC = $('.tst-tool .sounds-box .items .del');

$(onconSoundsT).on('click',function(){
  $(this).parents('.sounds-box').find('.items').show();
  $(this).addClass('disabled');
});

$(onconSoundsC).on('click',function(){
  $(this).parents('.sounds-box').find('.items').hide();
  $(this).parents('.sounds-box').find('.sounds-btn').removeClass('disabled');
});

//온/콘 온라인시험지 문제목록 hover시 툴박스 노출  화면ID : tc_p_1304_45
var toolHover = $('.br-box'); 
var toolHoverBox = $('.tool-hover-box');

$(toolHover).on('mouseover',function(){
  $(this).addClass('active');
  $(toolHover).not($(this)).removeClass('active');
});

//YBM 교재 자료 미리 보기  화면ID : tc_p_1108
var fileCheck = $('.form-wrap #bookAll');
var fileCheck2 = $('.form-wrap input[name=book]');

$(fileCheck).click(function(){ 
  if($(fileCheck).prop('checked')) { 
    $(this).parents('.form-wrap').siblings().find('input[name=book]').prop('checked',false);    
      } 		
});

$(fileCheck2).click(function(){ 
  if($(fileCheck2).prop('checked')) { 
    $(this).parents('.form-wrap').siblings().find('input[name=bookAll]').prop('checked',false);    
      } 		
});

//학급현황 연락처 hover시 화면ID : tc_p_3102
$('.hidden-box .btn').on('mouseover',function(){
  $(this).parents('.hidden-box').addClass('active');
});
$('.hidden-box').on('mouseleave',function(){
  $(this).removeClass('active');
});

//과제/평가 일괄피드백 발송 전체체크 / 화면ID : TC-P-3102P
var fdChkBox = $('.form-wrap #fd_chkAll');

$(fdChkBox).click(function(){ 
  if($(fdChkBox).prop('checked')) { 
    $('input[name=fd_chk]').prop('checked',true); 
      } else { $('input[name=fd_chk]').prop('checked',false);} 		
});

// 과제/평가 레이아웃 관련 예외처리
if($('.submission .item').find('.lf-bx').length > 0){
  $('.submission .item').css('display','flex');
}

// 튜토리얼 팝업 닫기
$('.guide-tt .close').on('click', function () {
  $('body').removeClass('active-popup');
  $('.guide-tt').removeClass('active');
  return false;
});


/** 모션 공용 변수 선언 */
let classSlideshow = null;
let classSection = null;
let idxSectionItem = 0;
$('.guide-slideshow').eq(0).show();

/** 모션 클리어 */
function clearMotionGuide(section){
  let sectionItem = section.find('.slideshow-section-item');

  idxSectionItem = 0;
  sectionItem.find('.border').show();
  sectionItem.hide();

  let imgOBJ = section.find('img');
  imgOBJ.attr('src',imgOBJ.data('src'));

}

/** 스탭 클리어 */
function clearStepGuide(guideObj){
  let section = guideObj.find('.slideshow-section');
  let sectionItem = section.find('.slideshow-section-item');

  section.hide();
  section.eq(0).show();
  classSection = null;

  clearMotionGuide(section);
}

/** 스탭 전환 */
function showStepGuide(){

  let guideObj = $('.guide-slideshow.'+classSlideshow);
  let section = guideObj.find('.slideshow-section').eq(0);
  let cntSection = guideObj.find('.slideshow-section').length;

  if(cntSection <= 0){
    guideObj.fadeIn(1000);
  }
  else{
    clearStepGuide(guideObj);
    guideObj.fadeIn(1000,function(){
      section.fadeIn(showMotionGuide(section));
    });  
  } 

}

/** 모션 작동 */
var myTimeout = null;
function showMotionGuide(section, delay=3000){

  let items = section.find('.slideshow-section-item');
  let cntItem = items.length;
  let speed = 1200;

  $('.guide-tt').find('.tt-head').find('.dots span').removeClass('on');
  $('.guide-tt').find('.tt-head').find('.dots span').eq(parseInt(section.data('dots')-1)).addClass('on');
  clearTimeout(myTimeout);

  if(idxSectionItem == 0) delay = 0;

  if(cntItem <= 0 || cntItem < idxSectionItem){
    idxSectionItem = 0;
    return false;
  }

  let thisItem = items.eq(idxSectionItem);
  let prevItem = items.eq(idxSectionItem-1);
  if(idxSectionItem == 0) prevItem = null;

  if(thisItem.length == 0) return false;
  idxSectionItem++;

  myTimeout = setTimeout(function(){

    if(thisItem.data('changeimg') != ''){
      let imgOBJ = section.find('img');
      let imgSRC = thisItem.data('changeimg');    
      imgOBJ.attr('src',imgSRC);
    }
  
    if(cntItem > idxSectionItem-1 && prevItem){
      prevItem.children('.border').hide();
      prevItem.children('.hand').hide();
      prevItem.children('.txt-hide').hide();
    } 

    if(thisItem.hasClass('next-section')){
      if(thisItem.data('complete') != null){
        $('.guide-slideshow.menu').find('.item').eq(parseInt(thisItem.data('complete'))-1|0).removeClass('complete').addClass('complete');
      }
      thisItem.trigger('click');      
      //clearMotionGuide(section);
    }
    else if(thisItem.hasClass('pause')){
      thisItem.fadeIn(speed);
    }
    else{
      thisItem.fadeIn(speed,showMotionGuide(section));
    }
    
  },delay);

}

/** SETP 이동 */
$('[data-gotostep]').on('click', function(){
  classSlideshow = $(this).data('gotostep');
  $(this).closest('.guide-slideshow').fadeOut(showStepGuide);
  $(this).closest('.guide-tt').find('.tt-head h1').fadeOut(function(){
    let tt = $('.guide-slideshow.'+classSlideshow).find('.tt-html').html();
    
    if(classSlideshow == 'finish'){
      $('.guide-tt').find('.tt-head').hide();
    }
    else{
      $('.guide-tt').find('.tt-head').show();
      $(this).parent().html(tt).fadeIn(1000);
    }
  });
}).css('cursor','pointer');

/** SECTION 이동 */
$('[data-gotosection]').on('click', function(){

  classSection = $(this).data('gotosection');
  let section = $(this).closest('.guide-slideshow').find('.slideshow-section.'+classSection);

  $(this).closest('.slideshow-section').fadeOut(function(){    
    clearMotionGuide(section);
    section.fadeIn(showMotionGuide(section));
  });
  
}).css('cursor','pointer');

$(document).on('click', '[data-gotosection2]', function(){
  let section = $('.guide-slideshow.'+$(this).data('step')).find('.slideshow-section.'+$(this).data('gotosection2'));
  let prevSection = (classSection)? $('.guide-slideshow.'+$(this).data('step')).find('.slideshow-section.'+classSection) : $('.guide-slideshow.'+$(this).data('step')).find('.slideshow-section:eq(0)');
  classSection = $(this).data('gotosection2');
  section.closest('.guide-slideshow').find('.slideshow-section').not(section).hide();
  clearMotionGuide(section);
  section.fadeIn(showMotionGuide(section));
  
}).css('cursor','pointer');

$('.slideshow-section-item.pause .border').on('click', function(){
  let section = $(this).closest('.slideshow-section');
  showMotionGuide(section,0);
}).css('cursor','pointer');


/*------------------------------------------------------------------------------
온라인콘텐츠
------------------------------------------------------------------------------*/

//온라인콘텐츠 메인 사용하기 클릭시 - 화면ID : oncon_main
var oct_sortFile = $('.oct-sort-file');
var oct_sortFileChild = $('.oct-sort-file .oct-f-sort-box');

$(oct_sortFile).on('click', function(){
  $(this).siblings().children(oct_sortFileChild).removeClass('on');
  $(this).children(oct_sortFileChild).toggleClass('on');
});
//목록 이외 클릭시 목록 닫힘
$(document).on('mouseup',function (e){
  if(oct_sortFile.has(e.target).length === 0){
    oct_sortFileChild.removeClass('on');
  }
});


//만들기 제목에 마우스오버시 - 화면ID : worksheet_diy_1
var oct_Field_Form = $('.ui-js-field-form');
var oct_Field_Target = $('.ui-js-field-target');
var oct_Field_Input = $('.ui-js-field-input');

$(oct_Field_Target).on('mouseover', function(){
  $(this).parents(oct_Field_Form).addClass('on');
});
$(oct_Field_Target).on('mouseleave', function(){
  $(this).parents(oct_Field_Form).removeClass('on');
});

$(oct_Field_Target).dblclick(function() {
    $(this).addClass('hide');
    $(this).siblings(oct_Field_Input).addClass('active');
    $(this).siblings(oct_Field_Input).focus();
  });
$(oct_Field_Input).on('focusout', function(){ 
    console.log('asfsd');
    $(this).siblings(oct_Field_Target).removeClass('hide');
    $(this).removeClass('active');
  });

//온라인 워크시트 문항리스트 
var oct_Tool_LIst_Item = $('.oct-sheet-list-wrap .item');

$(oct_Tool_LIst_Item).on('click', function(){
  $(this).addClass('on');
  $(this).siblings().removeClass('on');
});


//온/콘 도구입력박스 화면ID : worksheet_diy_1
var oct_toolBox = $('.oct-float-tool .item');
var oct_toolBtn = $('.oct-float-tool .item a');
var oct_ballonClose = $('.oct-float-tool .item .del');

$(oct_toolBtn).on('click', function(){
  $(this).parents('.item').addClass('current');
  $(this).parents('.item').siblings().removeClass('current');
  $(this).parents('.box').siblings().find('.item').removeClass('current');
  $(this).parents('.item').find('.balloon').addClass('active');
  $(this).parents('.item').siblings().find('.balloon').removeClass('active');
  $(this).parents('.box').siblings().find('.balloon').removeClass('active');
});

$('.oct-float-tool .item .balloon .del').on('click', function(){
  $(this).parent('.balloon').removeClass('active');
});

//온라인워크시트 평가방법 설정 저장하기 클릭시
var oct_toggle_target = $('.ui-js-oct-toggle-target');
var oct_beforebox = $('.before-box');
var oct_afterbox = $('.after-box');

$(oct_toggle_target).on('click', function(){
  $(oct_beforebox).addClass('hide');
  $(oct_afterbox).addClass('on');
});

//퀴즈 start modal 탭 롤링 (오픈소스: https://webclub.tistory.com/109 참조)
(function($){

  $.extend($.fn, {
      tabModule : function(options) {

          $.fn.tabModule.defaults = {
              selector : 'a',
              tabContWrap : 'oct-tab-group',
              tabContents : 'oct-tab-cont',
              speed : 400,
              visibleCont : 1,
              autoRolling : false,
              roofTime : 2000,
              animate : false,
              autoControl : false
          };

          return this.each(function(){
              var that = $(this),
                  opts = $.extend({}, $.fn.tabModule.defaults, options || {}),
                  auto = true,
                  intervalId = null,
                  currIdx = 0,
                  stop;
              that.data('oct-tab-list',that.closest('ul'));
              that.data('autoCtrl', $('.btn-ctrl > a'));

              that.find(opts.selector).on('click focus', function(){
                  var target = $(this),
                      idx = $(this).parent().index();
                  currIdx = idx;
                  showTab(target, idx);
                  return false;
              });

              function showTab(target, idx) {
                  target.parent().radioClass();
                  var displayTab = $('.' +opts.tabContWrap).children().eq(idx);

                  if(!opts.animate) {
                      displayTab.show().siblings().hide();
                  } else {
                      displayTab.stop().fadeTo(opts.speed, 1)
                              .siblings().stop().fadeTo(opts.speed, 0);
                  }
              }

              opts.autoRolling ? intervalId = setInterval(rollingTab, opts.roofTime) :
                      that.find(opts.selector).eq(opts.visibleCont - 1).trigger('click');

              function rollingTab() {
                  currIdx++;
                  if (currIdx == $('.' + opts.tabContents).length) {
                      currIdx = 0;
                  }
                  that.find(opts.selector).eq(currIdx).trigger('click');
              }

              that.data('oct-tab-list').on({
                  'mouseenter': function(){
                      // if(!auto) return false;
                      clearInterval(intervalId);
                  },
                  'mouseleave': function(){
                      if(stop == 'stop' || (opts.autoRolling == false)) return false;
                      intervalId = setInterval(rollingTab, opts.roofTime);
                  }
              });

              !opts.autoControl ? that.data('autoCtrl').parent().hide() : that.data('autoCtrl').parent().show();

              that.data('autoCtrl').on({
                  click : function() {
                      var _self = $(this),
                          status = _self.attr('class');
                      if(status == 'stop') {
                          _self.attr('class','play');
                          _self.find('img').imgReplace('stop','play');
                          clearInterval(intervalId);
                      } else {
                          _self.attr('class','stop');
                          _self.find('img').imgReplace('play','stop')
                          intervalId = setInterval(rollingTab, opts.roofTime);
                      }
                      stop = status;
                  }
              })

          });
      },

      radioClass : function(opts) {
          $.fn.radioClass.defaults = {className : 'on'};
          opts = $.extend({}, $.fn.radioClass.defaults, opts || {})
          return this.each(function(){
              $(this).siblings('.' + opts.className).removeClass(opts.className).end().addClass(opts.className);
          });
      },

      imgReplace : function(img1, img2) {
          return this.each(function(){
              var target = $(this);
              target.attr('src', function(){
                  return $(this).attr('src').replace(img1, img2)
              })
          })
      }
  })



})(jQuery)

$('.oct-tab-list').tabModule({
  animate : true,
autoRolling : true,
autoControl : true
});

//온라인콘텐츠 textarea height auto
$(".ui-js-textarea").on('keydown keyup', function () {
  $(this).height(1).height( $(this).prop('scrollHeight'));	
});

//온라인콘텐츠 퀴즈 - 문항클릭시
var numberingChk = $('.ui-js-numbering');

$(numberingChk).on('click', function () {
  $(this).parents('.ui-js-numbering-wrap').toggleClass('checked');
});

//온라인콘텐츠 - ox형 체크할때  화면ID : quiz_diy_4
var make_ox_check = $('.ui-js-ox-check');

$(make_ox_check).on('click', function () {
  $(this).parents('.ui-js-ox-check-wrap').addClass('checked');
  $(this).parents('.ui-js-ox-check-wrap').siblings('.ui-js-ox-check-wrap').removeClass('checked');
});

//온라인콘텐츠 - 파일 전달형 > 파일 추가 가로스크롤 화면ID : file_diy_1
$(document).ready(function (e) {

  var oct_totalWidth = 0;
  var oct_set = $('.ui-js-total-width .form-wrap');   
  oct_set.each(function(){
    oct_totalWidth = oct_totalWidth + $(this).outerWidth(true);
  })
  //console.log(oct_totalWidth);    
  $('.ui-js-total-width').css('width', oct_totalWidth);

  var oct_totalWidth2 = 0;
  var oct_set2 = $('.ui-js-total-width-02 .form-wrap');   
  oct_set2.each(function(){
    oct_totalWidth2 = oct_totalWidth2 + $(this).outerWidth(true);
  })
  console.log(oct_totalWidth2);    
  $('.ui-js-total-width-02').css('width', oct_totalWidth2);

});


