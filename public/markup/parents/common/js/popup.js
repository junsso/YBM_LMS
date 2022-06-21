//layerpopup
$('[data-popup]').on('click', function () {
  var popupName = $(this).data('popup');

  $.ajax({
    type: "GET", //추후 POST로 변경
    url: "ajax_popup.html",
    dataType: "html",
    error: function () {
      alert("통신실패!!!!");
    },
    
    success: function (res) {
      //console.log(res);
      $(".popup-wrap").html(res);
      $('body').addClass('active-popup');
      $('#' + popupName + 'Popup').addClass('show');

      // 팝업 닫기
      $('.overlay, .close-btn').on('click', function () {
        $('body').removeClass('active-popup');
        $('.layerpop').removeClass('show');
        return false;
      });

      // 팝업 스크립트
      $('[data-popup]').on('click', function () {
        var popupName = $(this).data('popup');
        $('body').addClass('active-popup');
        $('#' + popupName + 'Popup').addClass('show');
        return false;
      });

      //toggle버튼
      var grTarget = $('.tab-ui .tb-btn');
      $(grTarget).on('click', function () {
        $(this).addClass('on');
        $(this).siblings().removeClass('on');
      });


      //오디오파일 - 녹음취소시 / 화면ID : sc_p_2202-11
      $('.layerpop .cancel-btn').on('click', function(){
        $(this).parents('.layerpop').removeClass('show');
      });

      //오디오파일 - 녹음취소시 / 화면ID : sc_p_2202-11
      $('#recodCancelPopup .close-btn2').on('click', function(){
        $('#recodCancelPopup').removeClass('show');
      });

      //그룹메세지 팝업 스와이퍼 / 화면ID : sc_p_2202-24
      var sv1Swiper = new Swiper(".layersuv .photo-box .swiper-container",{
        slidesPerView: 1,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
        navigation: {
          nextEl: ".sv-swiper .swiper-button-next",
          prevEl: ".sv-swiper .swiper-button-prev",
        },
      }); 

      //찬성,반대 버튼
      var agreeBtn = $('.agree-btn')
      var disagreeBtn = $('.disagree-btn')
      var agInput = $('.against-input')
      agreeBtn.on('click', function(){
        $(this).addClass('on')
        disagreeBtn.removeClass('on')
        agInput.slideDown()
      })
      disagreeBtn.on('click', function(){
        $(this).addClass('on')
        agreeBtn.removeClass('on')
        agInput.slideDown()
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

      //항목 선택
      var svSelect = $('.sv-item')
      svSelect.on('click', function(){
        $(this).toggleClass('on')
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

      //좋아요 아이콘
      var likeIcon = $('button.like');
      likeIcon.on('click', function(){
        $(this).toggleClass('on');
      })


      //수업시간표 / 화면ID : sc_p_1101
      $('#classBylawPopup .cancel-btn').on('click', function(){
        $('body').removeClass('active-popup');
        $('#classBylawPopup').removeClass('show');
      });
      $('#classLookupPopup .cancel-btn').on('click', function(){
        $('body').removeClass('active-popup');
        $('#classLookupPopup').removeClass('show');
      });
      $('#classCompletPopup .cancel-btn').on('click', function(){
        $('body').removeClass('active-popup');
        $('#classCompletPopup').removeClass('show');
      });
      $('#classNotCompletPopup .cancel-btn').on('click', function(){
        $('body').removeClass('active-popup');
        $('#classNotCompletPopup').removeClass('show');
      });
      $('#classToPopup .cancel-btn').on('click', function(){
        $('body').removeClass('active-popup');
        $('#classToPopup').removeClass('show');
      });
      $('#classIngPopup .cancel-btn').on('click', function(){
        $('body').removeClass('active-popup');
        $('#classIngPopup').removeClass('show');
      });
      $('#classSchedulePopup .cancel-btn').on('click', function(){
        $('body').removeClass('active-popup');
        $('#classSchedulePopup').removeClass('show');
      });

      $('#classScheduleListPopup .scd-item').on('click', function(){
        $('#classScheduleListPopup').removeClass('show');
      });









    }
  });
});
