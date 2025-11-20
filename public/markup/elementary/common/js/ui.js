//버튼가이드 - 타이틀에 탭이 있을때
var grTarget = $('.tab-ui .tb-btn');
$(grTarget).on('click', function () {
  $(this).addClass('on');
  $(this).siblings().removeClass('on');
});

//버튼가이드 - 타이틀에 탭이 있을때 (셀렉트박스)
var slParnets = $('.slt-box');
var slTarget = $('.slt-box .title h2, .slt-box .title .arrow');
var slTarget02 = $('.slt-box .sort-box .st');
var slTarget03 = $('.slt-box .sort-box .more');

$(slTarget).on('click', function () {
  $(this).parent('.title').toggleClass('on');
  $(this).parent('.title').siblings('.sort-box').removeClass('on');
  $(this).parents(slParnets).siblings(slParnets).find('.title').removeClass('on');
});

$(slTarget02).on('click', function () {
  $(this).parent('.sort-box').toggleClass('on');
  $(this).parent('.sort-box').siblings('.title').removeClass('on');
  if($(this).hasClass('type-a')){
    $(this).toggleClass('on')
  }
});

$(slTarget03).on('click', function () {
  $(this).parent('.sort-box').toggleClass('on');
  $(this).parent('.sort-box').siblings('.title').removeClass('on');
});

//목록 이외 클릭시 목록 닫힘
$(document).on('mouseup', function (f) {
  if (slParnets.has(f.target).length === 0) {
    slTarget.parent('.title').removeClass("on");
    slTarget02.parent('.sort-box').removeClass('on');
  }
});

//현황버튼 클릭시
var statusBtn = $('.status > div');
$(statusBtn).on('click', function () {
  if ($(this).hasClass('on')) {
    $(this).siblings().removeClass('on');
  } else {
    $(this).addClass('on');
    $(this).siblings().removeClass('on');
  }
});

//gnb
var mainGnb = $('.main .gnb-left > li')
var mainGnbFirst = $('.main .gnb-left > li:first-child')
var gnbLeft = $('.gnb-left > li');
var gsubList = $('.gsub-list');
var gsubList2 = $('.gsub-list a');

gnbLeft.on('click', function () {
  $('.gnb').addClass('on')
  gnbLeft.removeClass('on');
  gsubList.removeClass('on');
  $(this).addClass('on');
  $(this).children('a').addClass('on')
  $(this).children('.gsub-list').toggleClass('on');
  if ($('.gnb').hasClass('on')) {
    $('.gnb-inner').addClass('on');
  } else {
    $('.gnb-inner').removeClass('on');
  }
  if ($(this).children('a').hasClass('on')) {
    gnbLeft.children('a').removeClass('on');
    $(this).children('a').addClass('on');
  } else {
    gnbLeft.children('a').removeClass('on');
    $(this).children('a').addClass('on');
    $(gsubList2).removeClass('on');
  }
});

$(gnbLeft.first()).on('click', function () {
  $('.gnb-inner').removeClass('on');
});


$('.gnb-left > li:nth-child(4)').on('click', function () {
  $('.gnb-inner').removeClass('on');
});

gsubList2.on('click', function () {
  gsubList2.removeClass('on');
  $(this).addClass('on');
});

//layout - title클릭시
var majTitle = $('.common-list .major-title');
var majTarget = $('.common-list .major-title .title h2, .common-list .major-title .title .arrow');
var majTarget2 = $('.common-list .major-title .drop-list > li');
var majTarget3 = $('.common-list .major-title .drop-list > li > a.on');
var majList = $('.common-list .major-title .sub-list');
var subTitle = $('.common-list .sub-title');
var subTarget = $('.common-list .sub-title .title h2, .common-list .sub-title .title .arrow');

majTarget.on('click', function () {
  $(this).parent('.title').toggleClass('on');
  if ($(this).parent('.title').hasClass('on')) {
    majTarget2.parent('.drop-list').css('opacity', '1');
  }
});

majTarget2.on('click', function () {
  $(this).parents('.title').removeClass('on');
});

subTarget.on('click', function () {
  $(this).parent('.title').toggleClass('on');
  if (majTarget3.siblings('.sub-list').hasClass('on')) {
    majTarget3.siblings('.sub-list').removeClass('on');
    majTarget2.parent('.drop-list').css('opacity', '0');
  } else {
    majTarget3.siblings('.sub-list').addClass('on');
    majTarget2.parent('.drop-list').css('opacity', '1');
  }
});
//목록 이외 클릭시 목록 닫힘
$(document).on('mouseup', function (f) {
  if (majTitle.has(f.target).length === 0) {
    majTarget.parent('.title').removeClass("on");
    mainGnb.removeClass('on');
    mainGnbFirst.addClass('on');
  }
});

$(document).on('mouseup', function (f) {
  if (subTitle.has(f.target).length === 0) {
    majList.removeClass('on');
    subTarget.parent('.title').removeClass("on");
    majTarget2.parent('.drop-list').css('opacity', '0');
  }
});

//family site drop down 리스트
var fmDrop = $('.footer-right .drop-down');
var fmArrow = $('.footer-right .drop-down .first , .footer-right .arrow');
var fmTarget = $('.footer-right .drop-down .cont li a');

$(fmArrow).on('click', function () {
  fmDrop.toggleClass('on');
});

$(fmTarget).on('click', function () {
  fmDrop.removeClass('on')
})

//목록 이외 클릭시 목록 닫힘
$(document).on('mouseup', function (f) {
  if (fmDrop.has(f.target).length === 0) {
    fmArrow.parents(fmDrop).removeClass("on");
  }
});

//input clear버튼
$('.searchinput').on('input propertychange', function () {
  var $this = $(this);
  var visible = Boolean($this.val());
  $this.siblings('.searchclear').toggleClass('hidden', !visible);
}).trigger('propertychange');

$('.searchclear').click(function () {
  $(this).siblings('input[type="text"]').val('').trigger('propertychange').focus();
  $(this).siblings('input[type="password"]').val('').trigger('propertychange').focus();
});

//캘린더 버튼
var dayBtn = $('.day-box .day-btn');
var calender = $('.day-calender');

dayBtn.on('click', function () {
  $(this).siblings(calender).toggleClass('on');
});

//캘린더 이외 클릭시 닫힘
$(document).on('mouseup', function (e) {
  if (calender.has(e.target).length === 0) {
    calender.removeClass('on');
  }
});

//스터디보드 side bar 화면ID : SC_P_0001
var sideBar = $('.side-fixbar .bar , .side-fixbar .bar-icon');
var sideBarInner = $('.side-fixbar .fix-inner');
var viewRight = $('.view-alarm > a');

sideBar.on('click', function () {
  $(this).parents('.side-fixbar').addClass('on');
  $('body').addClass('on');
});

viewRight.on('click', function () {
  $(this).parents('.side-fixbar').removeClass('on');
});

sideBarInner.on('click', function () {
  $('body').addClass('on');
  if ($('.side-fixbar').hasClass('on')) {
    $('body').addClass('on');
  }
});

//side bar 이외 클릭시 닫힘
$(document).on('mouseup', function (e) {
  if ($('.fix-inner').has(e.target).length === 0) {
    $('.side-fixbar').removeClass('on');
    $('body').removeClass('on');
  }
});

//맞춤 콘텐츠 swiper
var customSwiper = new Swiper('.custom-swiper .swiper-container', {
  slidesPerView: 5,
  autoHeight:true,
  pagination: {
    el: ".custom-swiper .swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".custom-swiper .swiper-button-next",
    prevEl: ".custom-swiper .swiper-button-prev",
  },
  breakpoints: { //반응형 조건 속성
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});

//맞춤 콘텐츠 swiper(+자동넘김)
var customSwiper = new Swiper('.custom-swiper.autoplay .swiper-container', {
  slidesPerView: 5,
  autoplay: { // 자동 슬라이드 설정 , 비 활성화 시 false
    delay: 3000, // 시간 설정
    disableOnInteraction: false, // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
  },
  pagination: {
    el: ".custom-swiper .swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".custom-swiper .swiper-button-next",
    prevEl: ".custom-swiper .swiper-button-prev",
  },
  breakpoints: { //반응형 조건 속성
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});

//베스트 교재 추천 swiper
var bestSwiper = new Swiper('.best-swiper .swiper-container', {
  slidesPerView: 5,
  autoplay: { // 자동 슬라이드 설정 , 비 활성화 시 false
    delay: 3000, // 시간 설정
    disableOnInteraction: false, // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
  },
  pagination: {
    el: ".best-swiper .swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".best-swiper .swiper-button-next",
    prevEl: ".best-swiper .swiper-button-prev",
  },
  breakpoints: { //반응형 조건 속성
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});

//알림
var msg = $('.btn-alarm.msg');
var msgPopup = $('.msg-popup');
var msgClose = $('.msg-popup .close');

msg.on('click', function () {
  $(this).toggleClass('on');
  if($(this).hasClass('on')){
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

//수업일정 swiper 화면 id : sc_p_0002
var csSwiper = new Swiper('.cs-swiper .swiper-container', {
  slidesPerView: 1,
  observer: true,
  observeParents: true,
  autoHeight: true,
  spaceBetween: 100,
  allowTouchMove: false,
  navigation: {
      nextEl: '.cs-swiper .swiper-button-next',
      prevEl: '.cs-swiper .swiper-button-prev',
  },
  breakpoints: { //반응형 조건 속성
    768: {
      spaceBetween: 0,
    },
    1024: {
      spaceBetween: 100,
    },
  },
});

//스터디보드 - slide에 따라 gnb color, 학생위치, 배경 변경
var gnbLink = $('.main .header .gnb .gnb-inner .gnb-box > ul.gnb-left > li:first-child > a');
var csSlide = $('.cs-main-more .cs-swiper .swiper-slide.swiper-slide-active')
var csSlide0 = $('.cs-main-more .cs-swiper .swiper-slide.class0');
var csSlide1 = $('.cs-main-more .cs-swiper .swiper-slide.class1');
var csSlide2 = $('.cs-main-more .cs-swiper .swiper-slide.class2');
var csSlide3 = $('.cs-main-more .cs-swiper .swiper-slide.class3');
var csBgCont = $('.class-board-bg.type-a');
var csTitleH = $('.cs-main-more .cs-title').height();
var lcBoxBg = $('.lc-box-bg');
var lcBoxH = $('.lc-box').height();
var defaultH = 920;
var whiteH = 260;
// var csStudent = $('.class-board-cont .student');
var csSlideBtn = $('.cs-swiper .swiper-button-prev , .cs-swiper .swiper-button-next');
//lcBoxBg.height(csSlide.height());
lcBoxBg.css('height', csTitleH + csSlide0.height() + whiteH + 'px');
console.log('최초' + lcBoxBg.height());
console.log('타이틀' + csTitleH);
console.log('0번슬라이드' + csSlide0.height());
// 처음화면시 cs-main크기가 클경우 bg의 height값 조절
$(function () {
  if (csSlide.height() > 400) {
    csBgCont.height(csSlide.height() + 600);
    //$('.cs-matin-more').css('margin-bottom', '0');
  } else {
    csBgCont.css('height', defaultH +'px');
    //$('.cs-main-more').css('margin-bottom', '0');
  }
})

$(csSlideBtn).on('click', function () {
  // 조례
  if (csSlide0.hasClass('swiper-slide-active')) {
    lcBoxBg.css('height', csTitleH + csSlide0.height() + whiteH + 'px');
    // background
    csBgCont.removeClass('class1');
    csBgCont.removeClass('class2');
    csBgCont.removeClass('class3');
    csBgCont.addClass('class0');
    
  
    
    // //slide의 height에 따라 bg height 조절
    if (csSlide0.height() > 400) {
      csBgCont.height(csSlide0.height() + 600);
      $('.cs-main-more').css('margin-bottom', '100px');
    } else {
      csBgCont.css('height', defaultH +'px');
      $('.cs-main-more').css('margin-bottom', '0px');
    }
  }

  //1교시
  else if (csSlide1.hasClass('swiper-slide-active')) {
    lcBoxBg.css('height', csTitleH + csSlide1.height() + whiteH + 'px');
    // background
    csBgCont.removeClass('class0');
    csBgCont.removeClass('class2');
    csBgCont.removeClass('class3');
    csBgCont.addClass('class1');

    //slide의 height에 따라 bg height 조절
    if (csSlide1.height() > 400) {
      csBgCont.height(csSlide1.height() + 600);
      //$('.cs-main-more').css('margin-bottom', '100px');
    } else {
      csBgCont.css('height', defaultH +'px');
      //$('.cs-main-more').css('margin-bottom', '0px');
    }
  }

  //2교시
  else if (csSlide2.hasClass('swiper-slide-active')) {
    lcBoxBg.css('height', csTitleH + csSlide2.height() + whiteH + 'px');
    // background
    csBgCont.removeClass('class0');
    csBgCont.removeClass('class1');
    csBgCont.removeClass('class3');
    csBgCont.addClass('class2');

    //slide의 height에 따라 bg height 조절
    if (csSlide2.height() > 400) {
      csBgCont.height(csSlide2.height() + 600);
      console.log(csSlide2.height());
      //$('.cs-main-more').css('margin-bottom', '100px');
    } else {
      csBgCont.css('height', defaultH +'px');
      //$('.cs-main-more').css('margin-bottom', '0px');
    }
  }

  //3교시
  else if (csSlide3.hasClass('swiper-slide-active')) {
    lcBoxBg.css('height', csTitleH + csSlide3.height() + whiteH + 'px');
    // background
    csBgCont.removeClass('class0');
    csBgCont.removeClass('class2');
    csBgCont.removeClass('class1');
    csBgCont.addClass('class3');

    //slide의 height에 따라 bg height 조절
    if (csSlide3.height() > 400) {
      csBgCont.height(csSlide3.height() + 600);
      //$('.cs-main-more').css('margin-bottom', '100px');
    } else {
      csBgCont.css('height', defaultH +'px');
      //$('.cs-main-more').css('margin-bottom', '0px');
    }
  }


});

/*
var lcBoxBgH = $('.lc-box-bg').height();
var lcBoxH = $('.lc-box').height();
var lcBoxBgH = lcBoxH;
//console.log(lcBoxH);
//console.log(lcBoxBgH);
$('.lc-box-bg').css('height',lcBoxH + 'px');
*/

//수업일정 말풍선
var icoSchool = $('.ico-school');
var titleBalloon = $('.title-balloon .balloon');
icoSchool.on('click', function () {
  $(this).parent().siblings(titleBalloon).toggleClass('on');
});

//과제평가 버튼
var assBtn = $('.ass-btnbox button');
assBtn.on('click', function () {
  $(this).siblings().removeClass('on');
  $(this).addClass('on');
});



//과제/평가 스와이퍼
var assSwiper = new Swiper(".ass-swiper .swiper-container", {
  slidesPerView: 3,
  autoHeight: true,
  scrollbar: {
    el: ".ass-swiper .swiper-scrollbar",
    hide: false,
    draggable: true,
  },
  breakpoints: { //반응형 조건 속성
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});

//과제/평가 hover시
var assSlide = $('.ass-swiper .swiper-slide');
assSlide.hover(function () {
  $(this).stop().addClass('on');
  if ($(this).hasClass('on')) {
    $(this).siblings().removeClass('on');
  } else {
    $(this).stop().addClass('on');
  }
}, function () {
  assSlide.removeClass('on');
  assSlide.stop().first().addClass('on');
});

//나의 스템프
var stampSwiper = new Swiper('.stamp-swiper', {
  slidesPerView: '1',
  centeredSlides: true,
  speed: 700,
  pagination: {
    el: ".stamp-swiper .indicator3 .swiper-pagination",
    clickable: true,
    type: 'bullets',
  },
});

//맞춤 강의 swiper 화면 id: sc_p_0003
var recomSwiper = new Swiper('.recom-slide .swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 200,
  loop: true,
  speed: 700,
  centeredSlides: true,
  navigation: {
    nextEl: ".recom-slide .swiper-button-next",
    prevEl: ".recom-slide .swiper-button-prev",
  },
  // autoplay: { // 자동 슬라이드 설정 , 비 활성화 시 false
  //   delay: 3000, // 시간 설정
  //   disableOnInteraction: false, // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
  // },
});

//이전 학기 swiper 화면 id : sc_p_0004
var preSemesterSwiper = new Swiper('.pre-semester-swiper .swiper-container', {
  slidesPerView: 5,
  autoplay: { // 자동 슬라이드 설정 , 비 활성화 시 false
    delay: 3000, // 시간 설정
    disableOnInteraction: false, // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
  },
  navigation: {
    nextEl: ".pre-semester-swiper .swiper-button-next",
    prevEl: ".pre-semester-swiper .swiper-button-prev",
  },
  breakpoints: { //반응형 조건 속성
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});

//다음 학기 swiper
var nextSemesterSwiper = new Swiper('.next-semester-swiper .swiper-container', {
  slidesPerView: 5,
  autoplay: { // 자동 슬라이드 설정 , 비 활성화 시 false
    delay: 3000, // 시간 설정
    disableOnInteraction: false, // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
  },
  navigation: {
    nextEl: ".next-semester-swiper .swiper-button-next",
    prevEl: ".next-semester-swiper .swiper-button-prev",
  },
  breakpoints: { //반응형 조건 속성
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});

//베스트 강의 swiper 화면 id: sc_p_0006
var bestLectureSwiper = new Swiper('.best-lecture-swiper .swiper-container', {
  slidesPerView: 5,
  autoplay: { // 자동 슬라이드 설정 , 비 활성화 시 false
    delay: 3000, // 시간 설정
    disableOnInteraction: false, // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
  },
  pagination: {
    el: ".best-lecture-swiper .swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".best-lecture-swiper .swiper-button-next",
    prevEl: ".best-lecture-swiper .swiper-button-prev",
  },
  breakpoints: { //반응형 조건 속성
    640: { //640 이상일 경우
      slidesPerView: 1, //레이아웃 2열
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 5,
    },
  }
});

//수업일정 더보기
var learnMoreBtn = $('.learn-more-btn');
learnMoreBtn.on('click',function(){
  $(this).siblings('.learning-more-box').toggle();
  $(this).toggleClass('on');
  // if($(this).hasClass('on')){
  //   $('.cs-main.cs-main-more').css('margin-bottom', '100px');
  // }else {
  //   $('.cs-main.cs-main-more').css('margin-bottom', '0px');
  // }
})

//수업자료 버튼 toggle 화면 id: sc_p_1202
var classView = $('.class-view');
classView.on('click', function () {
  $(this).toggleClass('on');
});

//수업 타이틀 toggle
var LessonTitle = $('.lesson-title');
var LessonSubTitle = $('.lesson-sub-title');
var LessonBox = $('.lesson-box');

LessonTitle.on('click',function(){
  if($(this).parent().hasClass('on')){
    $(this).parent().removeClass('on');
    $(this).siblings().slideUp();
    $(this).siblings(LessonSubTitle).removeClass('on');
  } else {
    $(this).parent().addClass('on')
    $(this).siblings().slideDown();
    $(this).siblings(LessonSubTitle).addClass('on');
  }
});

LessonSubTitle.on('click',function(){
  $(this).toggleClass('on');
  $(this).next().slideToggle();
});

//수업설명 toggle
var lsClassView = $('.ls-item-view .class-view');
lsClassView.on('click', function(){
  //차시정보 형제요소 슬라이드업
  // $(this).parents('.lesson-item').siblings().children('.lesson-bottom').slideUp();
  $(this).parents('.lesson-top').siblings().slideToggle();
  $(this).parents('.lesson-item').siblings().children('.lesson-top').children().children('.class-view').removeClass('on');
});

//확인학습 sc_p_1501
var hashTag = $('.hash-box .hash')
hashTag.on('click', function(){
  $(this).siblings().removeClass('on');
  $(this).addClass('on');
})

//1:1메시지 선생님 버튼 클릭 sc_p_2201
var priBtn = $('.pri-list button')
priBtn.on('click', function(){
  $(this).siblings().removeClass('on');
  $(this).addClass('on');
})

//비디오 ~ 오디오 클릭시
var emoTarget = $('.file-up .btns');

$(emoTarget).on('click', function(){
  $(this).toggleClass('on');
  $(this).parents('.form-wrap').siblings().find(emoTarget).removeClass('on');
});

//이모티콘 클릭시
var emotionBtn = $('.file-up .btns.emo');
var emotionParent = emotionBtn.parents('.file-up .form-wrap');
var emotionBox = $('.emotion-box');

$(emotionBtn).on('click', function(){
  $(this).siblings(emotionBox).toggleClass('on');
  $(this).parents('.item').siblings().find(emotionBox).removeClass('on');
  if(emotionBox.hasClass('on')){
    emotionBtn.addClass('on')
  }else {
    emotionBtn.removeClass('on')
  }
});

//목록 이외 클릭시 목록 닫힘
$(document).on('mouseup',function (e){
  if(emotionParent.has(e.target).length === 0){
    emotionBox.removeClass('on');
    if(emotionBox.hasClass('on')){
      emotionBtn.addClass('on')
    }else {
      emotionBtn.removeClass('on')
    }
  }
});

//채팅창 이미지클릭시 확대
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
  subHtmlSelectorRelative: true,
});

//첨부파일 클릭시
var sortFile = $('.sort-file');
var sortFileChild = $('.sort-file .f-sort-box');
var stpBtn = $('.tool-box .file-box .btn-box .btn');
var stpBtnparents = stpBtn.parents('.file-box .btn-box');

$(sortFile).on('click', function(){
  $(this).children(sortFileChild).toggleClass('on');
});
//목록 이외 클릭시 목록 닫힘
$(document).on('mouseup',function (e){
  if(stpBtnparents.has(e.target).length === 0){
    sortFileChild.removeClass('on');
  }
});

//toggle 채팅창
var openCont = $('.gpi-cont .open-text');
var closeCont = $('.gpi-cont .close-text');

openCont.on('click', function(){
  $(this).addClass('on');
  $(this).parent().siblings('.group-toggle').slideDown();
  $(this).parents('.gpi-cont').siblings('.group-toggle').slideDown();
  $(this).siblings(closeCont).addClass('on');
  $(this).parent().siblings('.group-text').addClass('on')
})

closeCont.on('click', function(){
  $(this).removeClass('on');
  $(this).parent().siblings('.group-toggle').slideUp();
  $(this).parents('.gpi-cont').siblings('.group-toggle').slideUp();
  $(this).siblings(openCont).removeClass('on');
  $(this).parent().siblings('.group-text').removeClass('on')
})

//좋아요 아이콘
var likeIcon = $('.ico-like');
likeIcon.on('click', function(){
  $(this).toggleClass('on');
})

//textarea 자동 높이조절, 글자수
var textareaAuto = $('.textarea.auto-height');
textareaAuto.on('keydown keyup', function () {
  $(this).height(1).height( $(this).prop('scrollHeight')+12 );	
  if($(this).hasClass('inputLengthCheck')){
    $(this).siblings('.input-btnbox').children('#textLengthCheck').children('strong').html($(this).val().length);
    if($(this).val().length > 300) {
      $(this).val($(this).val().substring(0, 300));
      $(this).siblings('.input-btnbox').children('#textLengthCheck').children('strong').html("300");
    }
  }
});

//color선택
var chatColor = $('.chat-color button');
chatColor.on('click',function(){
  $(this).addClass('on');
  $(this).siblings().removeClass('on');
});

//항목 선택
var svSelect = $('.sv-item')
svSelect.on('click', function(){
  $(this).toggleClass('on')
})

//학습리포트  - 출석현황 swiper 화면 id:sc_p_1402
var repAttSwiper = new Swiper(".rep-att-day .month-swiper .swiper-container", {
  slidesPerView: 'auto',
  spaceBetween: 0,
  navigation: {
    nextEl: ".rep-att-day.month-dep .swiper-button-next",
    prevEl: ".rep-att-day.month-dep .swiper-button-prev",
  },
});

//과제현황 swiper
var repAssSwiper = new Swiper(".rep-ass-day .month-swiper .swiper-container", {
  slidesPerView: 'auto',
  spaceBetween: 0,
  navigation: {
    nextEl: ".rep-ass-day.month-dep .swiper-button-next",
    prevEl: ".rep-ass-day.month-dep .swiper-button-prev",
  },
});

//과제현황2 swiper
var repAssContSwiper = new Swiper(".rep-ass-cont .month-swiper .swiper-container", {
  slidesPerView: 'auto',
  spaceBetween: 0,
  navigation: {
    nextEl: ".rep-ass-cont.month-dep .swiper-button-next",
    prevEl: ".rep-ass-cont.month-dep .swiper-button-prev",
  },
});

//평가현황 swiper
var repEvlSwiper = new Swiper(".rep-evl-day .month-swiper .swiper-container", {
  slidesPerView: 'auto',
  spaceBetween: 0,
  navigation: {
    nextEl: ".rep-evl-day.month-dep .swiper-button-next",
    prevEl: ".rep-evl-day.month-dep .swiper-button-prev",
  },
});

//평가현황 swiper
var repEvlContSwiper = new Swiper(".rep-evl-cont .month-swiper .swiper-container", {
  slidesPerView: 'auto',
  spaceBetween: 0,
  navigation: {
    nextEl: ".rep-evl-cont.month-dep .swiper-button-next",
    prevEl: ".rep-evl-cont.month-dep .swiper-button-prev",
  },
});

//온라인 스터디룸 // sc_p_4001
$('.thmb').click(function(){
  $(this).addClass('on');
  $(this).siblings('button').removeClass('on');
})
$('.list').click(function(){
  $(this).addClass('on');
  $(this).siblings('button').removeClass('on');
})

//랭킹 swiper
var shContswiper = new Swiper(".rank-box .swiper-container", {
  direction: "vertical",
  loop : true,
  autoplay: {
    delay: 3000,
  }
});

//좋아요 버튼
var likeBtn = $('.like-case.type-a');
likeBtn.on('click',function(){
  $(this).toggleClass('on')
})

//링크내 버튼
$('.customize-item .like-case').click(function (e) {
  e.preventDefault();
  e.stopPropagation();
});

//toggle
var introToggle = $('.intro-box .lesson-title').click(function(){
  $(this).toggleClass('on')
})

//과제 평가 : swiper sc_p_1302
var asevSwiper = new Swiper(".asev-swiper .swiper-container", {
  slidesPerView: 'auto',
  spaceBetween: 0,
  pagination: {
    el: ".asev-swiper .swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".asev-swiper .swiper-button-next",
    prevEl: ".asev-swiper .swiper-button-prev",
  },
});

//버튼 클릭시
var sitBtn = $('.sit-btns button');
sitBtn.on('click',function(){
  $(this).addClass('on');
});

//링크내 버튼
$('.file-box .delete').click(function (e) {
  e.preventDefault();
  e.stopPropagation();
});

//설문조사 toggle
var tgTarget = $('.survey-box .head');
var tgCont = $('.survey-box .body');
var svTarget = $('.survey-box .txt-area .toggle .btns');

$(tgTarget).on('click', function(){
  $(this).siblings(tgCont).slideToggle();
  $(this).toggleClass('on');
});

$(svTarget).on('click', function(){
  $(this).parent().siblings('.cont').toggleClass('on');
  if($(this).parent().siblings().hasClass('on')){
    $(this).text('접기');
  } else {
    $(this).text('펼치기');
  }
});

//수업시간표 hover시
$('.time-item.other').hover(function (e) {
  e.preventDefault();
  e.stopPropagation();
});

//more btn
var subjectBnt = $('.month-schedule.timetable-schedule td .subject-btn');

subjectBnt.click(function (e) {
  e.preventDefault();
  e.stopPropagation();
});
