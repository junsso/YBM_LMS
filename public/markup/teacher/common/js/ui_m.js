// toggle (side menu)
const toggleBtn = document.querySelector('.toggle-fold button'); 
const menuBody = document.querySelector('.header .inner'); 
const wrapper = document.querySelector('.wrap');
let clicked = 0; 

// 좌측 패널 열림/닫힘
toggleBtn.onclick = function(){
    if(clicked){
        wrapper.classList.add('mini');
        clicked = 0;
    }else{
        wrapper.classList.remove('mini');
        clicked = 1;
    }
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

//TAB
$('.tab li').click(function(){
  var tab_id = $(this).attr('data-tab');

  $('.tab li').removeClass('current');
  $('.tab-content').removeClass('current');
  
  $(this).addClass('current');
  $("#"+tab_id).addClass('current');
  return false;
});

//수업 개설 추천 과목 YBM교과서
var subjParent = $('.subj-wrap');
var subj = $('.subj-wrap .chk-form input');
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
		spaceBetween: 20,
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

//수업 자료 관리 내 수업리스트 클릭시
var mclassBtn = $('.title-bx .cr-wrap li .cl-btn');
var mclassBtnP = $('.title-bx .cr-wrap li');

$(mclassBtn).on('click',function(){
  $(this).addClass('on');
  $(this).parents(mclassBtnP).siblings().find(mclassBtn).removeClass('on');
});

// 대시보드 인기자료 스와이퍼
var pBookListSwiper = new Swiper('.book-pp-list .swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 20,
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
var arrowNext = $('.work-sheet .swiper-button-next');
var arrowPrev = $('.work-sheet .swiper-button-prev');

var clListSwiper = new Swiper('#sheetSwiper', {
  slidesPerView: 'auto',
  spaceBetween: 10,
  breakpointsBase: 'window',
  navigation: {
    nextEl: arrowNext,
    prevEl: arrowPrev,
  }
});	

//수업 자료 관리 단원/차시 목록
var stepWrap = $('.cl-management .step-list');
var stepClick = $('.cl-management .step-list .sl-box');
var stepArrow = $('.cl-management .step-list .sl-box .arrow');
var stepOption = $('.cl-management .step-list .op-wrap');

$(stepClick).on('click', function(){
  $(stepArrow).toggleClass('on');
  $(stepOption).toggleClass('active');
});
//목록 이외 클릭시 목록 닫힘
$(document).mouseup(function (e){
  if(stepWrap.has(e.target).length === 0){
    stepOption.removeClass("active");
    $(stepArrow).removeClass('on');
  }
});

//수업 자료 관리 수업자료 toggle
var tgParent = $('.tg-part-wrap');
var tgCont = $('.tg-part-wrap .tg-cont');
var tgTitle = $('.tg-part-wrap .tg-title');
var tgArrow = $('.tg-part-wrap .tg-title .arrow');

$(tgArrow).on('click',function(){
  //alert('asfd');
  $(this).toggleClass('on');
  $(this).parents('.tg-part-wrap').find(tgCont).slideToggle();
  if($(this).parents(tgParent).hasClass("active") === true) {
    $(this).parents(tgParent).removeClass('active');
    $(this).removeClass('active');
    $(this).removeClass('on');
    }
});

//수업 자료 관리 단계명 수정
var modiparent = $('.tg-part-wrap .tg-title .modi');
var modiName = $('.tg-part-wrap .tg-title .modi .modify');
var modiTitle = $('.tg-part-wrap .tg-title .mdfname');

$(modiName).on('click', function(){
  $(this).parents(modiparent).siblings('.tg-part-wrap .form-wrap').find(modiTitle).removeAttr("readonly");
  $(this).parents(modiparent).siblings('.tg-part-wrap .form-wrap').find(modiTitle).focus();
});

var modSmParent = $('.tg-cont .item .btn-bx.modi');
var modSmName = $('.tg-cont .item .modi .modify');
var modSmTitle = $('.tg-cont .item .mdfname02')

$(modSmName).on('click', function(){
  //alert('asfsfd');
  $(this).parents(modSmParent).siblings('h3').children(modSmTitle).removeAttr("readonly");
  $(this).parents(modSmParent).siblings('h3').children(modSmTitle).focus();
  
});

//내 수업 리스트 버튼 클릭 (수업리스트가 있을 경우)
var clChkInput = $('.sort-box .chk-form-wrap .chk-form input');
$(clChkInput).on('click', function(){
  $(this).parent().toggleClass('on');
});

//수업 자료 관리 (내수업안 ~ 과제/평가)
var myClassView = $('.division li button');
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
var toggleParent = toggleTarget.parents('.article');
var toggleCont = $('.cont-list-contain');

$(toggleTarget).on('click', function(){
  //alert('asfasd');
  $(this).parents(toggleParent).children('.cont-list-contain').slideToggle();
  $(this).toggleClass('on');
});

//신규 수업 개설하기 - 엑셀 버튼 클릭시
var fieldTarget = $('.cl-fieldset .form-wrap .btn');
var fieldParent = fieldTarget.parents('.form-wrap');


$(fieldTarget).on('click', function(){
  $(this).toggleClass('on');
  $(this).parent(fieldParent).siblings().find(fieldTarget).removeClass('on');
});