$(document).ready(function(){
    
    // 선택 작동
    var selectAnswer = $('.select-answer button');
    $(selectAnswer).on('mousedown', function(){
        $(this).addClass('selected').siblings().removeClass('selected');
        $(this).css('transform','scale(1.1)').siblings().css('transform','scale(0.7)');
    })

    // 정답 확인 화면 번갈아 표시
    $.fn.cycle = function(timeout){
        var $all_elem = $(this)
    
        show_cycle_elem = function(index){
            if(index == $all_elem.length) return; 
            $all_elem.hide().eq(index).fadeIn()
            setTimeout(function(){show_cycle_elem(++index)}, timeout);
            //console.log(index);
        }
        show_cycle_elem(0);
    }

    $(".swap-content").cycle(3000);
    // 계속 반복되게 추가작업 필요
});

//
var modal = $('.modal');
var modalControls = $('.modal .del');

$(modalControls).on('click',function(){
    $(modal).hide();
});

//함께시작 선택형 정답체크시
$('.ui-js-chk button').on('click',function(){
    $(this).addClass('active').siblings().removeClass('active');
    $(this).css('transform','scale(1)').siblings().css('transform','scale(1)');
});

//각자시작 보기버튼 클릭시 view-item
$('.view-item').on('click',function(){
    $(this).addClass('active').siblings().removeClass('active');
    $(this).find('.select-chk').addClass('active');
    $(this).siblings().find('.select-chk').removeClass('active');
});

//각자시작 설문(ox형) 체크시
$('.ui-js-chk .chk-box.ox .select-ox').on('click',function(){
    $(this).addClass('active').parents('.item').siblings().find('.select-ox').removeClass('active');
});

//각자시작 세부주제별 입력하기 클릭시
$('.discussion-desc .input-btn').on('click', function(){
    $(this).parents('.item').toggleClass('active');
});

// 플레이어 

$( ".slider-range" ).slider({
range: "min",
value: 0,
min: 1,
max: 700,
slide: function( event, ui ) {
    $( "#amount" ).val( "$" + ui.value );
}
});
$( "#amount" ).val( "$" + $( ".slider-range" ).slider( "value" ) );
