//툴바제어
var btnToggle = $('.side-toolbar .btn-toggle');
var btnClose = $('.btn-close-toolbar');
var wrap = $('.wrap');
var hxwrap = $('.hw-wrapper');
var hxpgn = $('.hw-pager');
var prswrap = $('.progress-wrapper');
var selectOption = $('.select-box .list');

$(document).on('click', '.side-toolbar .btn-toggle', function(){ //document부터 타고 들어감
  $(wrap).toggleClass('on');
  $(hxwrap).toggleClass('on');
  $(prswrap).toggleClass('on');
  $(hxpgn).toggleClass('on'); //동적으로 생성되는 요소
  setTimeout(function(){
    $grid.masonry('layout');
  },300);
});
$(document).on('click', '.btn-close-toolbar', function(){ //document부터 타고 들어감
  $(wrap).removeClass('on');
  $(hxwrap).removeClass('on');
  $(prswrap).removeClass('on');
  $(hxpgn).removeClass('on'); //동적으로 생성되는 요소
  setTimeout(function(){
    $grid.masonry('layout');
  },300);
});

/*
$(btnToggle).on('click', function(){
  $(wrap).toggleClass('on');
  $(hxwrap).toggleClass('on');
  $(prswrap).toggleClass('on');
  $(hxpgn).toggleClass('on');
});
$(btnClose).on('click', function(){
  $(wrap).removeClass('on');
  $(hxwrap).removeClass('on');
  $(prswrap).removeClass('on');
  $(hxpgn).removeClass('on');
});
*/

// 커스텀 스크롤
/*
var headScroll = $('.menu.tool');
var sideToolbarBody = $('.toolbar-body .scroll-body');
var container = $('.container');
var btmToolbar = $('.bottom-toolbar');
*/
/*
$(headScroll).mCustomScrollbar({
  theme:"minimal-dark"
});
*/
/* 동적 데이터 받아올 때 스크롤 작동 안함 이슈로 미실행_20211111_유재란
$(sideToolbarBody).mCustomScrollbar({
  theme:"minimal-dark"
});
*/
/* 동적 데이터 받아올 때 스크롤 작동 안함 이슈로 미실행_20211124_유재란
$(container).mCustomScrollbar({
  theme:"minimal-dark"
});
*/
/*
$(btmToolbar).mCustomScrollbar({
  theme:"minimal-dark",
  axis: "x"
});
*/


//탭
$('.tabs li').on('click',function(){
  var tab_id = $(this).attr('data-tab');
  $('.tabs li').removeClass('on');
  $('.tab-content').removeClass('on'); 
  $(this).addClass('on');
  $("#"+tab_id).addClass('on');
  return false;
});


//과제/평가 상세보기 (제출/평가 - 토의/토론) 찬성,반대 버튼 클릭시 화면ID : TC-P-1209
var valueBtn = $('.discussion-desc .ch-btn-wrap .btns-box');

$(valueBtn).on('click', function(){
  $(this).toggleClass('on');
  $(this).parents('.col-lg-6').siblings().find('.btns-box').removeClass('on');
});

// 단원, 차시 선택
var selectBox = $('.select-box');
var selectBtn = $('.select-box .select');
var selectedMenu = $('.select-box .list li span');

$(selectBtn).on('click', function(){
	$(this).parents('.select-box').toggleClass('active');
	$(this).parents('.select-box').siblings().removeClass('active');

	$(this).next('.list').find('li').each(function(){
		
		if($(this).children('ul').length){
			$(this).children('ul').hide();
			$(this).children('span, ul').addClass('plus');
      if(!$(this).children('ul').find('.active').length){
				$(this).children('ul').prev('span.plus').removeClass('on');				
			}
		}
	});	
	$(this).next('.list').find('li.active').parents('ul.plus').show();
})


$(selectedMenu).on('click',function(){
	if($(this).hasClass('plus')){
    $(this).toggleClass('on');
    $(this).next('ul').slideToggle();
	}//end if
	else{
		$(this).parents('.list').find('li').removeClass('active');
		$(this).parent('li').addClass('active');
		$(selectBox).removeClass('active');
		$(this).parents('.list').prev('.select').text($(this).text());
	}
})


//플레이어 하단 툴바 동작 예시
var hoverHandler = $('.container, .player-toolbar');
$(hoverHandler).on('mouseenter', function(){
  $('.player-toolbar').addClass('show');
})
$(hoverHandler).on('mouseleave', function(){
  $('.player-toolbar').removeClass('show');
})

var speedHandler = $('.speed .handler');
var speedList = $('.speed .dropdown');
$(speedHandler).on('click',function(){
	$(speedList).toggleClass('active');
})

// 플레이어 구간 설정 모드
$( function() {
  $( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 100,
    values: [ 0, 5 ],
    slide: function( event, ui ) {
      $( "#amount" ).val( ui.values[ 0 ] + " -" + ui.values[ 1 ] );
    }
  });
  $( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) +
    " - " + $( "#slider-range" ).slider( "values", 1 ) );
} );


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

// 가리기 클릭 시 fade
var blindBox = $('.blind-box');
$(blindBox).on('click',function(){
  $(this).fadeOut();
});



/* 우측 패널 툴바 */
var mainToolbar = $('.menu > ul > li > button');
var closeToolbar = $('.float-submenu .close');
var closeToolbar2 = $('.float-submenu.memo .close, .float-submenu.link .close');
var subToolbar = $('.float-submenu > ul > li > button');
var hiddenMemo = $('.float-submenu.memo button.hidden');
var miniMemo = $('.float-submenu.memo .mini');
var hiddenLink = $('.float-submenu.link button.hidden');
var miniLink = $('.float-submenu.link .mini');

$(mainToolbar).on('click', function(){
  $(this).parent('li').siblings().find('.float-submenu').hide();
  $(this).next('.float-submenu').toggle();
});
$(subToolbar).on('click', function(){
  $(this).parent('li').siblings().find('.float-submenu').hide();
  $(this).next('.float-submenu').toggle();
});
$(closeToolbar).on('click',function(){
  $(this).parent().parent('.float-submenu').hide();
});
$(closeToolbar2).on('click',function(){
  $(this).parent().parent().parent('.float-submenu').hide();
});
$(subToolbar).on('click',function(){
  $(this).parent('li').siblings().find('button').removeClass('on');
  $(this).toggleClass('on');
});
$(hiddenMemo).on('click', function(){  
  $(this).parent().parent().parent('.float-submenu').addClass('off');
});
$(miniMemo).on('click', function(){
  $(this).parent('.float-submenu').removeClass('off');
});
$(hiddenLink).on('click', function(){  
  $(this).parent().parent().parent('.float-submenu').addClass('off');
});
$(miniLink).on('click', function(){
  $(this).parent('.float-submenu').removeClass('off');
});

var $grid = $('.masonry-layout .grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true,
});

// 댓글보기 토글
var rplToggle = $('.reply-toggle-btn');

$(rplToggle).on('click', function(){
  $(this).toggleClass('on');
  $(this).next('.reply-list').slideToggle('fast',function(){
    $grid.masonry('layout');	
  });
  //$(this).next('.reply-list').slidetoggle();
  //$grid.masonry('layout');	
});

var sbjSelectBtn = $('.sbj-tabs .sbj');
$(sbjSelectBtn).on('click', function(){
  $(this).siblings().removeClass('current');
  $(this).addClass('current');
});

//토의토론 - 입력하기 클릭시 화면 ID : TC-P-1308-7P
var disBtn = $('.discussion-desc.ox-cont .input-btn')
var disInput = $('.click-box')

disBtn.click(function(){
  $(this).parents('.item').find(disInput).toggleClass('active'),2000;
});
