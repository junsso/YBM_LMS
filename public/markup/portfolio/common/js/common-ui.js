$(function(){

    /** 메뉴 열기 */
    $(document).on('click','.go-menu', function(){
        $('body').removeClass('active-modal').addClass('active-modal');
        $('.menu-overlay').fadeIn();
        $('.side-menu').removeClass('show').addClass('show');
    });
    $(document).on('click','.go-book', function(){
        $('body').removeClass('active-modal').addClass('active-modal');
        $('.menu-overlay').fadeIn();
        $('.book-menu').removeClass('show').addClass('show');
    });
    $(document).on('click','.menu-overlay, .side-menu .close', function(){
        $('body').removeClass('active-modal');
        $('.side-menu, .book-menu').removeClass('show');
        $('.menu-overlay').fadeOut();
    });

    /** select box arrow 처리 */
    $(document).on({
        'click': function(){
            $(this).closest('.select-box').toggleClass('on');
        },
        'change focusout': function(){
            $(this).closest('.select-box').removeClass('on');
        },
        'selectmenuclose': function(){
            alert(1);
        }
    },'.select-box select');
    $(document).on({
        'touchmove': function(){
            $('.select-box').removeClass('on');
        }
    });

    /** 탭메뉴 컨텐츠 show hide 처리 */
    $(document).on('click', '.tab-menu .item', function(e){

        let $top = $(this).closest('.tab-contents-wrap');
        let $parent = $(this).closest('.tab-menu');
        let $idx = $parent.children('.item').index(this);

        $parent.children('.item').removeClass('current');
        $(this).addClass('current');
        $top.children('.tab-contents').hide().eq($idx).fadeIn();

    });

    /** 입력 주의사항 노출 */
    $(document).on('click', '.toggle-info', function(){
        
        let $idx = $('.toggle-info').index(this);
        $(this).toggleClass('active');        
        if($(this).hasClass('active')){
            $('.info-conditions').eq($idx).show();
        }
        else{
            $('.info-conditions').eq($idx).hide();
        }
    });

    /** 학급코드 입력 */
    $(document).on({
        'keyup touchend': function(){

            if($(this).val().length > 1){
                $(this).val($(this).val().substr(0,1));
            }
            
            if($(this).next().length){
                $(this).next().select();
            }
        },
    },'.input-class-code input');

    /** page search wrap swiper */
    if($('.tab-swiper').length > 0){
        var keywordCate = new Swiper('.tab-swiper .swiper-container', {
            slidesPerView: 'auto',
            spaceBetween: 20,
            preventClicks: true,
            preventClicksPropagation: false,
            observer: true,
            observeParents: true,
            watchOverflow: true,
            navigation: {
                nextEl: '.tab-swiper .swiper-button-next',
                prevEl: '.tab-swiper .swiper-button-prev',
            },
        });
    }

    /** main contents tab */
    $(document).on('click', '.main-contents-tab', function(){
        $(this).siblings('.main-contents-tab').removeClass('current');
        $(this).toggleClass('current');
    });

    /** textarea 자동 높이 조절 */
    $(document).on('keyup', '.input-auto-height', function(){
        $(this).css('height', 'auto');
        $(this).height(this.scrollHeight-20);
    });

    /** textarea 글자수 제한 */
    $(document).on('keyup', '.text-counter', function(){
        let $idx = $('.text-counter').index(this);
        let $content = $(this).val();
        let $maxLen = $(this).data('maxlength');
        if($('.text-counter-result').eq($idx).length > 0){
            if($content.length > $maxLen){
                $(this).val($(this).val().substring(0, $maxLen));
                alert($maxLen + '자까지 입력 가능합니다.');
            }
            $('.text-counter-result .count').text($(this).val().length||0);
        }
    });

    /** 녹음하기 */
    if($('#audio-slider').length > 0){
        $( "#audio-slider" ).slider({
            range: 'min',
            max: 100,
            value: 20,
            orientation: "horizontal",
            animate: true
        });
    }
});