//1:1메시지 팝업 화면ID : TC-P-2005-1
var alrTarg = $('.alarm-popup');
var msgTarg = $('.container .common-top .unb .btn-alarm');
var msgAlrTarg = $('.alarm-popup.msg2');
var closeTarg = $('.alarm-popup .close');

$(msgTarg).on('click', function(){
  $(msgAlrTarg).fadeIn(150);
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


//수업보드 progress bar 
$('.current-bar').css('left',function(){
  var total_width = $('.total-bar').width();
  var width = $(this).width();
  var percent = Math.round(100*width/total_width,2);
  var strong_left = width-$(this).next('strong').width();
  if(strong_left < 0) strong_left = 0;

  if(percent < 2){
    $(this).css('width','0px');
    return '10px';
  }//end if
  else{
    $(this).next('strong').css('left',strong_left);
    return 0;
  }//end else
});


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
  //return false;
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
let clicked = 0; 

// 좌측 패널 열림/닫힘
$(toggleBtn).on('click',function(){
  if(clicked){
      wrapper.classList.add('mini');
      clicked = 0;
  }else{
      wrapper.classList.remove('mini');
      clicked = 1;
  }
});


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

//버튼가이드 - 소제목에 탭이 있을때  TAB
/*$('.tab li').click(function(){
  var tab_id = $(this).attr('data-tab');

  $(this).addClass('current').siblings().removeClass('current');
  $("#"+tab_id).addClass('current').siblings().removeClass('current');
  return false;
});*/


//목록 이외 클릭시 목록 닫힘
/*$(document).on('mouseup',function (f){
  if(slParnets.has(f.target).length === 0){
    sortBoxAll.removeClass('on');
    slTarget.parent('.title').removeClass("on");
    slTarget02.parent('.sort-box').removeClass('on');
  }
});*/

//버튼가이드 - 소제목에 탭이 있을때  TAB
/*$('.tab li').click(function(){
  var tab_id = $(this).attr('data-tab');

  $(this).addClass('current').siblings().removeClass('current');
  $("#"+tab_id).addClass('current').siblings().removeClass('current');
  return false;
});*/

//기본 탭
$('.tab-style .item').click(function(){
  var tab_id = $(this).attr('data-tab');

  $(this).addClass('current').siblings().removeClass('current');
  $("#"+tab_id).addClass('current').siblings().removeClass('current');
  return false;
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

//캘린더
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


//이전페이지로 돌아가기
function goBack() {
	window.history.back();
};

//수업보드 수업유형 변경시 토스트 알럿 화면ID : TC-P-0003-2
var toastVal = $('.toast-val'); 
var toastValTarget = $('.toastAlert');

$(toastValTarget).on('click', function(){
  $(this).siblings(toastVal).fadeIn(1200);
  setInterval(function() {
    $(toastVal).fadeOut(1200);
  }, 1200);
});

//수업보드 수업유형 클릭시 화면ID : TC-P-0003-2
var classType = $('.class-type-set .class-type'); 

$(classType).on('click', function(){
  //alert('asfdsd');
  $(this).addClass('active');
  $(this).siblings().removeClass('active');
});

//수업보드 수업 출석현황 토글 화면ID : tc_p_0005_3
var tgWrap = $('.toggle-wrap');
var tgBody = $('.toggle-wrap .toggle-body');
var tgHead = $('.toggle-wrap .toggle-head');

$(tgHead).on('click',function(){
  //alert('asfd');
  $(this).toggleClass('on');
  $(this).parents('.toggle-wrap').find(tgBody).slideToggle();
});

// 대시보드 슬라이드배너 스와이퍼
var pBookListSwiper = new Swiper('.right-banner-area .swiper-container', {
  slidesPerView: 1,
  breakpointsBase: 'window',
  effect: 'slide',
  freeMode: true, // 다음슬라이드 위치를 고정할지 안할지,(false 일경우 딱딱 끊기며 스와이프됨)
  freeModeMomentumBounce: false,
  freeModeSticky: true, 
  autoplay: {
    delay: 3000,
  },  
  pagination: {
    el: '.right-banner-area .swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});	

// 대시보드 인기자료 스와이퍼
var pBookListSwiper = new Swiper('.book-pp-list .swiper-container', {
  slidesPerView: 2,
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
  slidesPerView: 2,
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




//수업관리 - 수업보드 알림 스와이프 화면 ID: 0003
var menuSwiper= new Swiper('.alarm-list .swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 5000,
  },
});
$('.alarm-list .swiper-container').each(function(elem, target){
  var swp = target.swiper;
  $(this).hover(function() {
      swp.autoplay.stop();
  }, function() {
      swp.autoplay.start();
  });
});



//수업관리 - 신규수업개설 학급 스와이프 화면 ID: 1101
var menuSwiper= new Swiper('.menu-swipe .swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 10,
});

//수업자료 미리보기
var prevParent = $('.list-wrap');
var prevListWrap = $('.list-wrap .toggle-target');
var prevList = $('.body-contain');

$(prevListWrap).on('click', function(){
  $(this).parents('.list-wrap').find('.body-contain').slideToggle();
  $(this).parents('.list-wrap').siblings().find('.body-contain').slideUp();
});

//온라인 콘텐츠 만들기 - 기본문서형 내수업 선택시 화면ID : TC-P-1302-2 , 수업 자료관리 단원/차시 화면ID : TC-P-1103
var chkMyTarget= $('.step-target');
var chkMyclass = $('.chk-my-class');
var chkMyclassCont = $('.chk-my-class-cont');
var chkMyclassTarget1 = $('.step-list .op-wrap .inner .op-box a');
var chkMyclassTarget2 = $('.step-list .op-wrap .inner .op-box.op2');
var chkMyclassA = $('.step-list .op-wrap .inner .op-box.op2 a');
var chkMyclassA3 = $('.step-list .op-wrap .inner .op-box.op3 a');


$(chkMyclass).click(function(){ 
  $(this).toggleClass('on');	
  $(this).parents('li').find(chkMyclassCont).toggleClass('on');
  $(this).parents('li').siblings('li').find(chkMyclassCont).removeClass('on');
});

//단원 클릭시
$(chkMyclassA).on('click', function(){
  if($(this).parent('li').hasClass("has-sub") === true) {
    $(this).parent('li').toggleClass('on');
    $(this).parent('li').siblings().removeClass('on');
  }else{
    $(chkMyclassTarget3).addClass('on');
    $(this).toggleClass('on');
  }
});

//목록 이외 클릭시 목록 닫힘
$(document).on('mouseup',function (e){
  if(chkMyTarget.has(e.target).length === 0){
    chkMyclass.removeClass('on');
    chkMyclassCont.removeClass('on');
  }
});


//교재별 수업 자료 미리보기 상세 toggle
var bookTarget = $('.stp-cont .inner .arrow');

$(bookTarget).on('click', function(){
  $(this).parents('.stp-cont').children('.dph-list').slideToggle();
  $(this).parents('.stp-cont').toggleClass('on');
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

//1:1메시지 첨부파일 클릭시, 과제/평가 관리 질의응답 첨부파일 클릭시 / 화면ID : TC-P-2004-12P , TC-P-1202-10P
var sortFile = $('.sort-file p');
var sortFileChild = $('.f-sort-box');

$(sortFile).on('click', function(){
  $(this).parents('.sort-file').children(sortFileChild).addClass('on');
});
//목록 이외 클릭시 목록 닫힘
$(document).on('mouseup',function (e){
  if(stpBtnparents.has(e.target).length === 0){
    sortFileChild.removeClass('on');
  }
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
  $(this).parents('.col-6').siblings().find('.btns-box').removeClass('on');
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
  spaceBetween: 10,
  pagination: {
    el: ".title-swiper .swiper-pagination",
    type: "progressbar",
  }
});

//공유콘텐츠 lank 스와이퍼 화면 ID : TC-P-5107_4
var shContswiper = new Swiper(".rank-box .swiper-container", {
  direction: "vertical",
  autoHeight : true,
  loop : false,
  autoplay: {
    delay: 3000,
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

//수업 리포트 - 수업결과보기 (실제 수업에 사용한 자료 토글) 화면ID: tc_p-1506
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

//학급현황 스와이프 화면 ID : TC-P-3101
var stuswiper = new Swiper(".stu-swiper1 .swiper-container", {
  slidesPerView: 'auto',
  spaceBetween: 10,
  navigation: {
    nextEl: ".stu-swiper1 .swiper-button-next",
    prevEl: ".stu-swiper1 .swiper-button-prev",
  },
});

var stuswiper2 = new Swiper(".stu-swiper2 .swiper-container", {
  slidesPerView: 'auto',
  spaceBetween: 10,
  navigation: {
    nextEl: ".stu-swiper2 .swiper-button-next",
    prevEl: ".stu-swiper2 .swiper-button-prev",
  },
});

var stuswiper3 = new Swiper(".stu-swiper3 .swiper-container", {
  slidesPerView: 'auto',
  spaceBetween: 10,
  navigation: {
    nextEl: ".stu-swiper3 .swiper-button-next",
    prevEl: ".stu-swiper3 .swiper-button-prev",
  },
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
  slidesPerView: 2,
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-sch01 .swiper-button-next",
    prevEl: ".swiper-sch01 .swiper-button-prev",
  },
});

//학생현황 - 학생 상세보기 - 수업내역 - 평가현황 swipe 화면ID : TC-P-3202-3
var stuSchSwiper02 = new Swiper(".swiper-sch02 .swiper-container", {
  slidesPerView: 2,
  spaceBetween: 0,
  navigation: {
    nextEl: ".swiper-sch02 .swiper-button-next",
    prevEl: ".swiper-sch02 .swiper-button-prev",
  },
});

//자료나눔터 좋아요버튼 화면 ID : tc_p_5104 
$('.chat-title .cr .like').click(function(){
  $(this).toggleClass('on')
});

//자료나눔터 제한 범위 선택시 화면 ID : tc_p_5105
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

//자료나눔터 해시태그 클릭시 / 화면ID : TC-P-5101P
$('.hash-box button').click(function(){
  $(this).toggleClass('on').siblings().removeClass('on');
});

//그룹 메시지 대상 변경 링크클릭시 / 화면ID : TC-P-2005P
var parentvar1 = $('.parent-var .var-btn .btns');
var parentvar2 = $('.parent-var');
var triangleBox = $('.triangle-box');
var studentvar1 = $('.student-var .var-btn .btns');
var studentvar2 = $('.student-var');
var groupTbox= $('.group-contain .cont-tbox');

$(parentvar1).on('click', function(){
  $(parentvar2).hide();
  $(studentvar2).show();
});
$(studentvar1).on('click', function(){
  $(parentvar2).show();
  $(studentvar2).hide();
});

$(triangleBox).on('click', function(){
  $(this).toggleClass('active');
  $(groupTbox).slideToggle();
});

//그룹 메시지 대상 모두선택 / 화면ID : TC-P-2005_45P

var inputType = $('.tbox-top input');
$(inputType).change(function () {

  if ($(this).is(":checked")) { 
    $(this).parents('.tbox-top').siblings('.tbox-bottom').find('input').prop("checked", true);
  } else { 
    $(this).parents('.tbox-top').siblings('.tbox-bottom').find('input').prop("checked", false);
  }

});  

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

//온/콘 texrarea영역 height: auto
$(".qa-area textarea, .quiz-view textarea, .gv-desc textarea, .isInput textarea").on('keydown keyup', function () {
  $(this).height(1).height( $(this).prop('scrollHeight'));	
});

// 이슈톡 -수정하기 화면 ID : TC-P-6105
var isEditSwiper = new Swiper(".is-swiper-cont .swiper-container",{
  slidesPerView: 1,
  autoHeight:true,
  pagination: {
    el: '.is-swiper-cont .swiper-pagination',
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
  $(issueVs).on('click', function(){
    $(this).addClass('on');
    $(this).parents('.item').siblings('.item').find('.btns-box').removeClass('on');
    $(this).parents('.item').find('.isInput').slideToggle();
    $(this).parents('.item').siblings('.item').find('.isInput').slideUp();
});

//이슈톡 - 복수응답 화면 ID : TC-P-6103-5
var isSelect = $('.is-inputdesc .desc-items');

isSelect.click(function(){
  if($(this).is('.on')){
    $(this).removeClass('on');
  }else {
    $(this).addClass('on');
  }
});

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

//프리톡 게시글 스와이프 화면ID : TC-P-6201
var ftalkSwiper = new Swiper('.ftalk-best-slide .swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 10,
  breakpointsBase: 'window',
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: '.ftalk-best-slide .swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});

//프리톡 글 펼치고 접기 화면ID : TC-P-6201
var fTalkOpenBtn = $('.ftalk-footer .btns .open');
var fTalkFoldBtn = $('.ftalk-footer .btns .fold');
var fTalkTxt = $('.ftalk-footer .txt');
fTalkOpenBtn.click(function(){
  $(this).addClass('on');
  $(this).siblings(fTalkFoldBtn).addClass('on');
  $(this).parent().prev(fTalkTxt).addClass('on');
});
fTalkFoldBtn.click(function(){
  fTalkOpenBtn.removeClass('on');
  fTalkFoldBtn.removeClass('on');
  fTalkTxt.removeClass('on');
});

//프리톡 채팅 글자수 제한 화면ID : TC-P-6201
var fTalkInput = $('.ftalk-footer #inputLengthCheck')
fTalkInput.on('keyup', function() {
  $(this).parents('.chat-top').siblings('.chat-content').children('.rt-col').children('#textLengthCheck').children('strong').html($(this).val().length);
  if($(this).val().length > 300) {
    $(this).val($(this).val().substring(0, 300));
    $('#textLengthCheck strong').html("300");
  }
});

//프리톡 채팅 열고닫기 화면ID : TC-P-6201
var fTalkChat = $('.ftalk-footer .label-conts .chat button')
fTalkChat.click(function(){
  $(this).parents('.label-conts').next('.ftalk-chat').slideToggle();
});

//프리톡 좋아요버튼 화면ID : TC-P-6201
var likebtn = $('.chat-tbox button');
var likebtnChild = $('.chat-tbox button i');
$(likebtn).on('click', function(){
  $(this).children(likebtnChild).toggleClass('on');
});


//프리톡 게시글 스와이프 화면ID : TC-P-6201
var ftalkSwiper = new Swiper('.board-swipe .swiper-container', {
  slidesPerView: 'auto',
  breakpointsBase: 'window',
  pagination: {
    el: '.board-swipe .swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});


//그룹메시지 발송대상 width 스크롤 화면ID : TC-P-2005
$(document).ready(function (e) {

  var totalWidth = 0;
  var setItem = $('.gr-select-item ul li');   
  setItem.each(function(){
    totalWidth = totalWidth + $(this).outerWidth(true);
  })
  //console.log(totalWidth);    
  $('.gr-select-item ul').css('width', totalWidth);
});

//그룹메시지 발송대상 아래로 스크롤시 fixed 스크롤 화면ID : TC-P-2005
var scrollItem = $(".gr-select-item");

if(scrollItem.length){  
  var scrollTarget = scrollItem.offset().top;

  $(window).scroll(function() {
    var window = $(this).scrollTop();
    if(scrollTarget <= window) {
      $(".gr-select-item").addClass("active");
    } else if(scrollTarget -90 > window){
      $(".gr-select-item").removeClass("active");
    }
  });
}



//그룹메시지 우측 햄버거 클릭시 화면ID : TC-P-2005-5
var hamButton = $('.hamberger');
var hamCont = $('.ham_contents');
var hamContClose = $('.ham_contents .close');

$(hamButton).on('click', function(){
  $(hamCont).addClass('on');
  $('body').addClass('active');
});

$(hamContClose).on('click', function(){
  $(hamCont).removeClass('on');
  $('body').removeClass('active');
});



//그룹메시지 히스토리 상세 - 하단 메시지 플러스버튼 클릭시 화면ID : TC-P-2005-5
var sendBox = $('.send-box');
var sendPlusButton = $('.send-box .plus-button');
var sendFilebox = $('.cont-fixed-area.type-b .file-box');

$(sendPlusButton).on('click', function(){
  //alert('afsfsd');
  $(sendFilebox).toggle();
  $(sendBox).toggleClass('active');
  if(!sendBox.hasClass('active')) $('.docu').hide();
  $.resizeLayerPageBody();
});

//그룹메시지 히스토리 상세 - 채팅창 height 화면ID : TC-P-2005-5
var areaTarget = $('.cont-fixed-area');
var bodyHeight = $('.layer-page .body');

$.resizeLayerPageBody = function(){
  bodyHeight.css('padding-bottom',$('.cont-fixed-area').outerHeight(true)+'px');
}

$('.docu').hide();

//그룹메시지 답글 클릭시 화면ID : TC-P-2005-5
var commentBtn = $('.chat-bts .comment-btn');
var repleBox = $('.cont-fixed-area .reply-box');
var delBtn = $('.reply-box .del');

$(commentBtn).on('click', function(){
  $(repleBox).show();
  $.resizeLayerPageBody();
});

$(delBtn).on('click', function(){
  $(repleBox).hide();
  $.resizeLayerPageBody();
});

//내 연구실 전체체크 화면ID  tc_p_5202
var chkBox = $('.form-wrap #chkAll');

$(chkBox).click(function(){ 
  if($(chkBox).prop('checked')) { 
    $('input[name=chk]').prop('checked',true); 
      } else { $('input[name=chk]').prop('checked',false);} 		
});

//학급현황 연락처 hover시 화면ID : tc_p_3102
$('.hidden-box .btn').on('mouseenter',function(){
  $(this).parents('.hidden-box').addClass('active');
});
$('.hidden-box').on('mouseleave',function(){
  $(this).removeClass('active');
});














