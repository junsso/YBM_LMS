$('[data-popup]').on('click', function(){
    var popupName = $(this).data('popup');   
      
    $.ajax({
        type : "GET", //추후 POST로 변경
        url : "ajax_popup.html",
        dataType: "html",
        error : function(){
          alert("통신실패!!!!");
          $('.test-img-box.'+popupName).show();
          $.resizeLayerPageBody();
        },
        success : function(res) {
          //console.log(res);
          $(".popup-wrap").html(res);
          $('body').addClass('active-popup');
              $('#'+popupName+'Popup').addClass('show');
  
          // 팝업 닫기
          $('.overlay, .close-btn').on('click', function(){
            $('body').removeClass('active-popup');
            $('.layerpop').removeClass('show');
            return false;
          });
  
          // 팝업 스크립트
          $('[data-popup]').on('click', function(){
            var popupName = $(this).data('popup');
            $('body').addClass('active-popup');
            $('#'+popupName+'Popup').addClass('show');
            return false;
          });

          //과제/평과 상세보기 피드백 영역 - 오디오파일첨부 취소버튼 클릭시 / 화면ID : TC-P-1202-8P
          function lyClose(){
            $('.layerpop').removeClass('show');
          }
          
          $('#audioPopup .next').on('click', function(){
            $('#recodCancelPopup').addClass('show');
          });
          $('#recodCancelPopup .cancel').on('click', function(){
            $('#recodCancelPopup').removeClass('show');
          }); 

          //공유콘텐츠 신고하기팝업 등록 버튼 클릭시 / 화면ID : TC-P-1309-6P
          $('#warningPopup .next').on('click', function(){
            lyClose();
            $('#warningNextPopup').addClass('show');
          });

          //이슈톡 신고하기 팝업에서 등록 버튼 클릭시 / 화면ID : TC-P-6101P
          $('#issueWarningPopup .next').on('click', function(){
            lyClose();
            $('#issueWarningNextPopup').addClass('show');
          });

          //프리톡 게시하기 / 화면 ID : TC-P-6202P
          $('#fTalkPostPopup .ftalk-close-btn').on('click', function(){
            $('#fTalkPostPopup').removeClass('show');
          });

          //프리톡 게시하기 취소 
          $('#fTalkPostCelPopup .ftalk-close-btn').on('click', function(){
            $('#fTalkPostCelPopup').removeClass('show');
          });

          //버튼가이드 - 타이틀에 탭이 있을때 (셀렉트박스)
          var timeSlt = $('.slt-box.pop-case');
          var timeSltTarget = $('.slt-box.pop-case .title h2, .slt-box .title .arrow');

          $(timeSltTarget).on('click', function(){
            $(this).parent('.title').toggleClass('on');
            $(this).parent('.title').siblings('.sort-box').removeClass('on');
            $(this).parents(timeSlt).siblings(timeSlt).find('.title').removeClass('on');

            //목록 이외 클릭시 목록 닫힘
            $(document).on('mouseup',function (f){
              if(timeSlt.has(f.target).length === 0){
                timeSltTarget.parent('.title').removeClass("on");
              }
            });
          });

          //학급현황 > 상세보기 > 학급초대 sms발송 팝업 발송하기 클릭시 / 화면ID : TC-P-3102P
          $('#smsSendBeforePopup .this-close-btn').on('click', function () {
            $('#smsSendBeforePopup').removeClass('show');
            $('#smsSendPopup').addClass('show');
          });








        }
    });
});
