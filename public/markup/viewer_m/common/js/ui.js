//탭
$('.tabs li').on('click',function(){
  var tab_id = $(this).attr('data-tab');
  $('.tabs li').removeClass('on');
  $('.tab-content').removeClass('on'); 
  $(this).addClass('on');
  $("#"+tab_id).addClass('on');
  return false;
});

//toolbar
var toolTarget = $('.t-target');
var toolTarget2 = $('.t-target2');
var toolTarget3 = $('.t-target3');
var toolDepth1 = $('.depth1');
var toolDepth2 = $('.depth2');
var toolDepth3 = $('.depth3');
var toolDepth2Btn = $('.depth2 .btns');
var toolDepth3Btn = $('.depth3 .btns');
var drawingTool = $('.drawing-tool');
var subTool = $('.drawing-sub-tool');
var textTarget = $('.text-target');
var textEditTool = $('.text-edit-tool');
var textEditTart2 = $('.text-target2');
var textEditSubTool = $('.text-edit-sub-tool');
var emoTarget = $('.emo-target');
var emoTool = $('.emo-tool');

/*입력도구 클릭시*/
$(toolTarget).on('click',function(){
  $(toolDepth1).show();
});
/*입력도구 > 그리기 클릭시*/
$(toolTarget2).on('click',function(){
  $(drawingTool).show();
});
/*입력도구 > 그리기 > 도구 클릭시*/
$(toolTarget3).on('click',function(){
  $(subTool).show();
});
/*입력도구 > 그리기 > 도구 > 서브 툴 클릭시*/
$(toolDepth2Btn).on('click',function(){
  $(this).addClass('active');
  $(toolDepth2Btn).not($(this)).removeClass('active');
});
$(toolDepth3Btn).on('click',function(){
  $(this).addClass('active');
  $(toolDepth3Btn).not($(this)).removeClass('active');
});
/*입력도구 > 텍스트 클릭시*/
$(textTarget).on('click',function(){
  $(textEditTool).show();
});
/*입력도구 > 텍스트 > 폰트 클릭시*/
$(textEditTart2).on('click',function(){
  $(textEditSubTool).show();
});
/*입력도구 > 이모티콘 클릭시*/
$(emoTarget).on('click',function(){
  $(emoTool).show();
});



//툴박스 스크롤
$(document).ready(function (e) {

  var totalWidth = 0;
  var set = $('.auto-box .item');   
  set.each(function(){
    totalWidth = totalWidth + $(this).outerWidth(true);
  })
  //console.log(totalWidth);    
  $('.cls-my1').css('width', totalWidth);
});


//툴박스 뒤로가기 클릭시
var toolBack = $('.tool-box .back');

$(toolBack).on('click',function(){
  $(this).parents('.tool-box').hide();
  $(toolDepth3).hide();
});

//수업정보 클릭시
var clInformation = $('.cl-information');
var classInfoWrap = $('.class-info-wrap');

$(clInformation).on('click',function(){
  $(classInfoWrap).addClass('active');
});
/*목록 이외 클릭시*/
$(document).on('mouseup',function (f){
  if(classInfoWrap.has(f.target).length === 0){
    classInfoWrap.removeClass('active');
  }
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
});

//플레이어 하단 툴바 동작 예시
var playerContent =$('.viewer-wrap .player-content');
var hoverHandler = $('.player-toolbar');
var toolInfo = $('.tool-info');

$(playerContent).on('click', function(){
  $(hoverHandler).toggleClass('show');
});
$(toolInfo).on('click',function(){
  $(hoverHandler).removeClass('show');
});

var speedHandler = $('.speed .handler');
var speedList = $('.speed .dropdown');
$(speedHandler).on('click',function(){
	$(speedList).toggleClass('active');
});

//플레이어 수업도구 클릭시
/*var toolInfo = $('.tool-info');
var playerTtoolbar = $('.player-toolbar');
var playerContent =$('.viewer-wrap .player-content');

$(toolInfo).on('mouseenter',function(){
  $(playerTtoolbar).hide();
});
$(playerContent).on('mouseenter',function(){
  alert('afssad');
  $(playerTtoolbar).show();
});*/


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
});

//퀴즈/설문조사 확인하기 - 보기 클릭시(단수) 화면ID: 1321
var viewChkSingle = $('.quiz-view .qa-write-box.checking.single');
$(viewChkSingle).on('click', function(){
  //alert('asfsfd');
  $(this).addClass('active');
  $(viewChkSingle).not($(this)).removeClass('active');
});

