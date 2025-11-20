//layerpopup IE 대응 문제로 사용하지않음
/*
var data = '';
var modal = ''; 
function toggleModal() {
  modal = document.getElementById(data);
  modal.classList.toggle("show-modal");
}


const popupbtn = document.querySelectorAll(".pop-target")
for (const popupBtnOBJ of popupbtn) {
  popupBtnOBJ.addEventListener('click', function(event) {
    data = this.getAttribute("data-popup");
    toggleModal();
    //var modal = document.getElementById(data);
    //modal.classList.toggle("show-modal");
  })
}
const closeButton = document.querySelectorAll(".close-btn")
for (const closeBtnOBJ of closeButton) {
  closeBtnOBJ.addEventListener('click', function(event) {
    toggleModal();
  })
}

window.addEventListener("click", function(event){
  if (event.target === modal) toggleModal(); 
});
*/



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

      //start: 신규 수업 개설 시 팝업 - 신규등록하기 / 화면ID : TC-P-1101-5P
      var clNextBtn = $('.cl-tb-wrap .cl-tb .nxt input');
      var clNowBtn = $('.cl-tb-wrap .cl-tb .now input');
      var clNextCont = $('.cl-tb-cont .nxt-cont');
      var clNowCont = $('.cl-tb-cont .now-cont');

      $(clNextBtn).on('click', function () {
        if ($(this).prop("checked")) {
          $(this).parents('.cl-tb-wrap').find(clNextCont).addClass('on');
          $(this).parents('.cl-tb-wrap').find(clNowCont).removeClass('on');
        }
      });
      $(clNowBtn).on('click', function () {
        if ($(this).prop("checked")) {
          $(this).parents('.cl-tb-wrap').find(clNowCont).addClass('on');
          $(this).parents('.cl-tb-wrap').find(clNextCont).removeClass('on');
        }
      });

      var clChkBtn = $('.chk-form-wrap.normal .chk-form label');
      $(clChkBtn).on('click', function () {
        $(this).parent().toggleClass('on');
      });

      //start: 내 학급 등록 팝업,학급 등록 및 목록 - 학급명 입력 후 Enter
      /* var contrl = $(".class-count .class-name .form-control");
       var btBox = $(".class-count .class-list.class .btn-box");
       $(contrl).on("keyup",function(key){
         if(key.keyCode==13) {
             $(btBox).show();
         }else{
           $(btBox).hide();
         }
       });

       var actbtn = $('.class-count .class-list .btn-box button');
       $(actbtn).on('click', function(){
         $(this).addClass('active');
         $(this).siblings().removeClass('active');
       })*/

      //신규 수업 개설 팝업 – 학급 추가 등록 선택 팝업에서 다음 단계 열기
      function lyClose() {
        $('.layerpop').removeClass('show');
      }

      $('#newClassPopup .next').on('click', function () {
        lyClose();
        $('#gradecompletePopup').addClass('show');
      });

      //신규 수업 개설 팝업 – 학급 추가 등록 완료 팝업에서 내 학급 등록하기 열기
      $('#gradecompletePopup .next').on('click', function () {
        lyClose();
        $('#newClass02Popup').addClass('show');
      });

      //신규 수업 개설 팝업 – 학급 신규 등록 선택 팝업에서 다음 단계 열기 / 화면ID : TC-P-1102-1P
      $('#newClass02Popup .next').on('click', function () {
        lyClose();
        $('#gradecomplete2Popup').addClass('show');
      });

      //내 연구실 - 내온라인콘텐츠 전체공유 클릭후 확인버튼 누른 후  / 화면ID : TC-P-5201-6P
      $('#shareAllPopup .next').on('click', function () {
        lyClose();
        $('#shareAll2Popup').addClass('show');
      });

      //내 연구실 - 내온라인콘텐츠 같은 학교 선생님끼리 공유 클릭후 확인버튼 누른 후  / 화면ID : TC-P-5201-6P
      $('#shareSchPopup .next').on('click', function () {
        lyClose();
        $('#shareSch2Popup').addClass('show');
      });

      //내 연구실 - 이슈톡 등록하기 - 찬성/반대 게시하기 팝업 확인버튼 클릭시/ 화면ID : TC-P-6102P
      $('#issueEnrollPopup .next').on('click', function () {
        lyClose();
        $('#issueEnrollNextPopup').addClass('show');
      });





      //출석체크 버튼
      var btnAtt = $('.btn-att');
      $(btnAtt).on('click', function () {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
      });

      //토글
      var tgWrap = $('.toggle-wrap');
      var tgBody = $('.toggle-wrap .toggle-body');
      var tgHead = $('.toggle-wrap .toggle-head');

      $(tgHead).on('click', function () {
        //alert('asfd');
        $(this).toggleClass('on');
        $(this).parents('.toggle-wrap').find(tgBody).slideToggle();
      });

      //신규 수업 개설 팝업 – 학급 신규 등록 선택 팝업에서 다음 단계 열기 / 화면ID : TC-P-1108-3P
      $('#overlapPopup .next').on('click', function () {
        lyClose();
        $('#newClassPopup').addClass('show');
      });

      //start: 학급/학생관리 학급현황 - 신규 학급 등록/학급 정보 수정 - 회원정보돠 다른 학교명으로 수정 할 경우  / 화면ID : TC-P-3102-P
      $('#schSearchPopup .next').on('click', function () {
        lyClose();
        $('#memeberNamePopup').addClass('show');
      });

      //start: 학급/학생관리 학급현황 - 신규 학급 등록/학급 정보 수정 - 검색한 학교가 없을 경우  / 화면ID : TC-P-3102-P
      $('#schSearchPopup .next02').on('click', function () {
        lyClose();
        $('#schNonePopup').addClass('show');
      });

      //start: 학급/학생관리 학급현황 - 신규 학급 등록/학급 정보 수정 - 검색한 학교가 없을 경우 - 전체~고등 버튼 클릭시  / 화면ID : TC-P-3102-P
      var schbtnTarget = $('.form-wrap.sort .btn');

      $(schbtnTarget).click(function () {
        $(this).toggleClass('on');
        $(this).siblings().removeClass('on');
      });

      //start: 학급/학생관리 학급현황 - 신규 학급 등록/학급 정보 수정 - 검색한 학교가 안나올 경우 - 입력 완료후  / 화면ID : TC-P-3103-2P
      $('#schNonePopup .next').on('click', function () {
        lyClose();
        $('#schNnameComPopup').addClass('show');
      });

      //과제/평과 상세보기 피드백 영역 - 오디오파일첨부 취소버튼 클릭시 / 화면ID : TC-P-1202-8P
      function lyClose() {
        $('.layerpop').removeClass('show');
      }

      $('#audioPopup .next').on('click', function () {
        $('#recodCancelPopup').addClass('show');
      });
      $('#recodCancelPopup .cancel').on('click', function () {
        $('#recodCancelPopup').removeClass('show');
      });

      //온라인 콘텐츠 만들기 (기본 문서형 - 기존 콘텐츠 불러오기) / 화면ID : TC-P-1303-2P
      var contListTarget = $('.cont-list-checkbox .item input');
      contListTarget.change(function () {
        if (contListTarget.is(":checked")) {
          $(this).parents('.item').addClass('on').siblings().removeClass('on');
        } else {
          $(this).parents('.item').removeClass('on');
        }
      });


      //공유콘텐츠 신고하기팝업 등록 버튼 클릭시 / 화면ID : TC-P-1309-6P
      $('#warningPopup .next').on('click', function () {
        lyClose();
        $('#warningNextPopup').addClass('show');
      });

      //1:1메시지 이미지 클릭시 / 화면ID : TC-P-2004P
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

      //과제/평가 상세보기 비디오 ~ 오디오버튼 클릭시 화면ID : TC-P-1202-4 , 1:1메시지 / 화면ID : TC-P-2004P
      var emoTarget = $('.file-up .btns');

      $(emoTarget).on('click', function () {
        $(this).toggleClass('on');
        $(this).parents('.form-wrap').siblings().find(emoTarget).removeClass('on');
      });

      //과제/평가 상세보기 스탬프 주기 클릭시 화면ID : TC-P-1203-1
      var stpBtn = $('.tool-box .file-box .btn-box .btn');
      var stpBtnparents = stpBtn.parents('.file-box .btn-box');
      var stpBox = $('.opend-stp');

      $(stpBtn).on('click', function(){
        $(this).siblings(stpBox).toggleClass('on');
      });

      //과제/평가 상세보기 이모티콘버튼 클릭시 화면ID : TC-P-1202-4 , 1:1메시지 / 화면ID : TC-P-2004P
      var emotionBtn2 = $('.layerpop .file-up .btns.emo');
      var emotionParent2 = emotionBtn2.parents('.layerpop .file-up .form-wrap');
      var emotionBox2 = $('.layerpop .emotion-box');

      $(emotionBtn2).on('click', function () {
        $(this).siblings(emotionBox2).toggleClass('on');
        $(this).parents('.item').siblings().find(emotionBox2).removeClass('on');
      });
      //목록 이외 클릭시 목록 닫힘
      $(document).on('mouseup', function (e) {
        if (emotionParent2.has(e.target).length === 0) {
          emotionBox2.removeClass('on');
        }
      });

      //그룹메시지에서 팝업 좋아요 / 화면ID : TC-P-2005_1P 
      $('#groupSv3Popup .sv3-tbox button').on('click', function () {
        $(this).children('i').toggleClass('on')
      })

      //그룹메시지에서 글 삭제클릭시 / 화면ID : TC-P-2005_1P
      $('#cl-del3Popup .close-group-btn').on('click', function () {
        $('#cl-del3Popup').removeClass('show');
      });

      //그룹메시지에서 댓글 삭제클릭시 / 화면ID : TC-P-2005_1P
      $('#cl-confPopup .close-group-btn').on('click', function () {
        $('#cl-del4Popup, #cl-confPopup').removeClass('show');
      });

      //그룹메시지에서 팝업 달력 클릭시 / 화면ID : TC-P-2005_1P
      var calenderTarget2 = $('.schedule .form-wrap .it');
      var calender2 = $('.calender');
      var timeTarget2 = $('.schedule .form-wrap .form-tm');
      var timer2 = $('.time');

      $(calenderTarget2).on('click', function () {
        $(this).parents('.form-wrap').find(calender2).toggleClass('on');
      });

      $(timeTarget2).on('click', function () {
        $(this).parents('.form-wrap').find(timer2).toggleClass('on');
      });

      $('.schedule .this-close-btn').on('click', function () {
        $(this).parents('.schedule').find('.time').removeClass('on');
      });


      //목록 이외 클릭시 목록 닫힘
      $(document).on('mouseup', function (e) {
        if (calender2.has(e.target).length === 0) {
          calender2.removeClass('on');
        }
      });

      $(document).on('mouseup', function (e) {
        if (timer2.has(e.target).length === 0) {
          timer2.removeClass('on');
        }
      });


      //그룹메세지 팝업 스와이퍼 / 화면ID : TC-P-2005_1P
      var sv1Swiper = new Swiper("#groupPopup .sv-swiper .swiper-container", {
        slidesPerView: 1,
        autoHeight: true,
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
      var sv2Swiper = new Swiper("#groupSv1Popup .sv-swiper .swiper-container", {
        slidesPerView: 1,
        autoHeight: true,
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

      var sv3Swiper = new Swiper("#groupSv2Popup .sv-swiper .swiper-container", {
        slidesPerView: 1,
        autoHeight: true,
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

      var sv4Swiper = new Swiper("#groupSv3Popup .sv-swiper .swiper-container", {
        slidesPerView: 1,
        autoHeight: true,
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

      //그룹메시지에서 팝업닫기 / 화면ID : TC-P-2005_1P
      $('#video5Popup .close-btn4').on('click', function () {
        $('#video5Popup').removeClass('show');
        return false;
      });
      $('#photo5Popup .close-btn5').on('click', function () {
        $('#photo5Popup').removeClass('show');
        return false;
      });
      $('#audio5Popup .close-btn6').on('click', function () {
        $('#audio5Popup').removeClass('show');
        return false;
      });
      $('#sv-sendPopup .close-group-btn2').on('click', function () {
        $('#sv-sendPopup').removeClass('show');
        return false;
      });
      $('#cl-del5Popup .close-group-btn3').on('click', function () {
        $('#cl-del5Popup').removeClass('show');
        return false;
      })
      $('#cl-checkPopup .close-group-btn4').on('click', function () {
        $('#cl-checkPopup').removeClass('show');
        return false;
      });
      $('#cl-check2Popup .close-group-btn5').on('click', function () {
        $('#cl-check2Popup').removeClass('show');
        $('#groupPopup').removeClass('show');
        return false;
      });
      $('#recodCancel4Popup .this-close-btn').on('click', function () {
        $('#audio4Popup').removeClass('show');
      });
      $('#photo3Popup .this-close-btn').on('click', function () {
        $('#photo3Popup').removeClass('show');
      });
      $('#cl-del4Popup .close-btn2').on('click', function () {
        $('#cl-del4Popup').removeClass('show');
      });
      $('#cl-confPopup .close-btn3').on('click', function () {
        $('#cl-confPopup').removeClass('show');
        $('#cl-del4Popup').removeClass('show');
      });
      $('#isMemoDelPopup .this-close-btn').on('click', function () {
        $('#isMemoDelPopup').removeClass('show');
      });

      //1:1메시지에서 비디오 팝업 취소클릭시 / 화면ID : TC-P-2004P
      $('#video4Popup .this-close-btn').on('click', function () {
        $('#video4Popup').removeClass('show');
      });

      //1:1메시지에서 이미지 팝업 취소클릭시 / 화면ID : TC-P-2004P
      $('#photo4Popup .this-close-btn').on('click', function () {
        $('#photo4Popup').removeClass('show');
      });

      //1:1메시지에서 문서 팝업 취소클릭시 / 화면ID : TC-P-2004P
      $('#docu4Popup .this-close-btn').on('click', function () {
        $('#docu4Popup').removeClass('show');
      });

      //1:1메시지에서 오디오 팝업 취소클릭시 / 화면ID : TC-P-2004P
      $('#audio4Popup .this-close-btn').on('click', function () {
        $('#audio4Popup').removeClass('show');
      });

      //1:1메시지에서 오디오 취소 팝업 취소 및 확인 클릭시 / 화면ID : TC-P-2004P
      $('#recodCancel4Popup .this-close-btn').on('click', function () {
        $('#recodCancel4Popup').removeClass('show');
      });

      //1:1메시지에서 오디오 팝업에서 취소 클릭시 / 화면ID : TC-P-2004P
      $('#volume4Popup .this-close-btn').on('click', function () {
        $('#volume4Popup').removeClass('show');
      });

      //1:1메시지에서 오디오 취소 팝업 취소 및 확인 클릭시 / 화면ID : TC-P-2004P
      $('.file-form-wrap a').on('mousedown', function () {
      });

      //1:1메시지 첨부파일 클릭시 / 화면ID : TC-P-2004-12P
      var sortFile = $('.sort-file');
      var sortFileChild = $('.sort-file .f-sort-box');

      $(sortFile).on('click', function () {
        $(this).children(sortFileChild).addClass('on');
      });
      //목록 이외 클릭시 목록 닫힘
      $(document).on('mouseup', function (e) {
        if (stpBtnparents.has(e.target).length === 0) {
          sortFileChild.removeClass('on');
        }
      });

      //버튼가이드 - 타이틀에 탭이 있을때 (셀렉트박스)
      var timeSlt = $('.slt-box.pop-case');
      var timeSltTarget = $('.slt-box.pop-case .title h2, .slt-box .title .arrow');

      $(timeSltTarget).on('click', function () {
        $(this).parent('.title').toggleClass('on');
        $(this).parent('.title').siblings('.sort-box').removeClass('on');
        $(this).parents(timeSlt).siblings(timeSlt).find('.title').removeClass('on');

        //목록 이외 클릭시 목록 닫힘
        $(document).on('mouseup', function (f) {
          if (timeSlt.has(f.target).length === 0) {
            timeSltTarget.parent('.title').removeClass("on");
          }
        });
      });



      //이슈톡 신고하기 팝업에서 등록 버튼 클릭시 / 화면ID : TC-P-6101P
      $('#issueWarningPopup .next').on('click', function () {
        lyClose();
        $('#issueWarningNextPopup').addClass('show');
      });


      //시간표관리[일정변경모드] 시간변경 클릭시 / 화면ID : TC-P-6101P
      var targetSlt = $('.target-slt .trg-title');
      var targetCont = $('.target-conts');

      $(targetSlt).on('click', function () {
        //alert('asfasfd');
        $(this).toggleClass('on');
        $(targetCont).slideToggle();
      });



      //버튼가이드 - 소제목에 탭이 있을때  TAB
      $('.tab li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $(this).addClass('current').siblings().removeClass('current');
        $("#" + tab_id).addClass('current').siblings().removeClass('current');
        $(this).find('input').prop('checked', true); //탭안에 input태그가 있을 경우
        return false;

      });


      //시간표관리 - 시간표설정 (수업 셀을 특정 위치에 배치한 뒤 커서를 풀때 수업 시간 확인 팝업(하단 늘리기 아이콘 클릭)확인 버튼 클릭시) / 화면ID : TC-P-1451P
      /*$('#classConfirmPopup .next').on('click', function(){
       lyClose();
       $('#timeGoChange2Popup').addClass('show');
     });*/

      //시간표관리 - 시간표 설정에서 이미 배치 완료된 셀을 클릭할 때 ‘수업 기간 및 차시 설정’ 팝업 제시 / 화면ID : TC-P-1451P
      $('#classConfirm2Popup .next').on('click', function () {
        lyClose();
        $('#classConfirmPopup').addClass('show');
      });

      //시간표관리 - 일정추가 팝업에서 등록 클릭시 / 화면ID : TC-P-1431-1P
      $('#schTimeAddPopup .next').on('click', function () {
        $('#schTimeAddPopup').removeClass('show');
        $('#schAddCompletePopup').addClass('show');
      });
      $('#schAddCompletePopup .close-btn2').on('click', function () {
        $('#schAddCompletePopup, #schTimeLookup2Popup').removeClass('show');
      });
      $('#schTimeAddPopup .cancel').on('click', function () {
        $('#schTimeAddPopup').removeClass('show');
      });

      //시간표관리 - 일정추가 팝업에서 공유 교사 지정하기 클릭시 / 화면ID : TC-P-1431-1P
      $('#schTimeAddPopup .next2').on('click', function () {
        $('#tchshare2Popup').addClass('show');
      });

      $('#tchshare2Popup .close-btn2').on('click', function () {
        $('#tchshare2Popup').removeClass('show');
      });

      //시간표관리 - 공유 교사 지정 완료 후 삭제 클릭시 / 화면ID : TC-P-1431-1P
      $('#tchdelet2Popup .close-btn2').on('click', function () {
        $('#tchdelet2Popup').removeClass('show');
      });

      //시간표관리 - 일정조회 팝업에서 삭제 클릭시 / 화면ID : TC-P-1431-3P
      $('#schTimeLookupPopup .del-alert').on('click', function () {
        lyClose();
        $('#schTimeLookupDelPopup').addClass('show');
      });

      //시간표관리 - 일정수정 팝업에서 수정 클릭시 / 화면ID : TC-P-1431-4P
      $('#schTimeLookupPopup .next').on('click', function () {
        lyClose();
        $('#schTimeLookupComPopup').addClass('show');
      });

      //시간표관리 공유된 학사 일정 목록 팝업에서 일정명 클릭시 조회팝업/ 화면ID : TC-P-1431-4P
      $('#shareClassPopup .schpopup').on('click', function () {
        $('#schTimeLookup2Popup').addClass('show');
      });

      //시간표관리 공유된 학사 일정 목록 팝업 참조 클릭시 조회팝업/ 화면ID : TC-P-1431-4P
      $('#schTimeLookup2Popup .lookup').on('click', function () {
        $('#schLookUpPopup').addClass('show');
      });
      $('#schTimeLookup2Popup .close-btn3').on('click', function () {
        $('#schTimeLookup2Popup').removeClass('show');
      });

      //시간표관리 공유된 학사 일정 목록 팝업 참조 클릭시 조회팝업/ 화면ID : TC-P-1431-4P
      $('#schLookUpPopup .close-btn2').on('click', function () {
        $('#schLookUpPopup').removeClass('show');
        $('#schTimeLookup2Popup').removeClass('show');
      });

      //시간표관리 공유된 학사 일정 목록 팝업 복사하여 등록 클릭시 조회팝업/ 화면ID : TC-P-1401-2P
      $('#schTimeLookup2Popup .next').on('click', function () {
        $('#schTimeAddPopup').addClass('show');
        //$('#schTimeLookup2Popup').removeClass('show');
      });

      //시간표관리 공유 받은 학사 일정 목록 - 전체체크  / 화면ID : TC-P-1401-2P
      var chkBox = $('.form-wrap #shareSchAll');

      $(chkBox).click(function () {
        if ($(chkBox).prop('checked')) {
          $('input[name=shareSch]').prop('checked', true);
        } else { $('input[name=shareSch]').prop('checked', false); }
      });

      //시간표관리 참조 일정 조회 팝업에서 참조 취소 클릭시/ 화면ID : TC-P-1431-4P
      $('#referencePopup .next').on('click', function () {
        $('#referencePopup').removeClass('show');
        $('#referenceComPopup').addClass('show');
      });


      //프리톡 게시하기 / 화면 ID : TC-P-6202P
      $('#fTalkPostPopup .ftalk-close-btn').on('click', function () {
        $('#fTalkPostPopup').removeClass('show');
      });

      //프리톡 게시하기 취소 
      $('#fTalkPostCelPopup .ftalk-close-btn').on('click', function () {
        $('#fTalkPostCelPopup').removeClass('show');
      });

      //프리톡 수정하기 취소 / 화면 ID : TC-P-6203P
      $('#fTalkEditCelPopup .ftalk-close-btn').on('click', function () {
        $('#fTalkEditCelPopup').removeClass('show');
      });

      //프리톡 수정하기 - 수정하기 취소
      $('#fTalkEditPostPopup .ftalk-close-btn').on('click', function () {
        $('#fTalkEditPostPopup').removeClass('show');
      });

      //프리톡 주제 최대 8자 팝업
      $('#fTalkTitleLimitPopup .fl-close-btn').on('click', function () {
        $('#fTalkTitleLimitPopup').removeClass('show');
      });

      //프리톡  - 비디오
      $('#video5Popup .video-close-btn').on('click', function () {
        $('#video5Popup').removeClass('show');
      });

      //프리톡 - 이미지
      $('#photo5Popup .photo-close-btn').on('click', function () {
        $('#photo5Popup').removeClass('show');
      });

      //프리톡 - 문서
      $('#docu5Popup .this-close-btn').on('click', function () {
        $('#docu5Popup').removeClass('show');
      });

      //프리톡 - 오디오
      $('#audio5Popup .this-close-btn').on('click', function () {
        $('#audio5Popup').removeClass('show');
      });
      $('#recodCancelPopup .cancel').on('click', function () {
        $('#audio5Popup').removeClass('show')
      });

      $('#recodCancelPopup .this-close-btn').on('click', function () {
        $('#recodCancelPopup').removeClass('show')
      });

      $('#fileLimitPopup .this-close-btn').on('click', function () {
        $('#fileLimitPopup').removeClass('show')
      });

      //프리톡 - 비디오 첨부후 재클릭시
      $('#videoLimitPopup .this-close-btn').on('click', function () {
        $('#videoLimitPopup').removeClass('show');
      });

      //프리톡 - 이미지 첨부후 재클릭시
      $('#photoLimitPopup .this-close-btn').on('click', function () {
        $('#photoLimitPopup').removeClass('show');
      });

      //프리톡 - 오디오 첨부후 재클릭시
      $('#audioLimitPopup .this-close-btn').on('click', function () {
        $('#audioLimitPopup').removeClass('show');
      });

      //프리톡 - 내용 500자 제한
      $('.ftalk-bg .textarea').on('keyup', function () {
        if ($(this).val().length > 500) {
          $(this).val($(this).val().substring(0, 500));
        }
      });

      //프리톡 쓰기/수정 내용 최대500Byte 팝업
      $('#fTalkContLimitPopup .fc-close-btn').on('click', function () {
        $('#fTalkContLimitPopup').removeClass('show');
      });

      //비디오 플레이어 클릭시 팝업 화면ID : tc_p_2004
      var isVideo = $('.isvideo .video-play');
      var videoPlayer = $('.video-player');
      var videoPlayerDel = $('.video-player .del');

      $(isVideo).on('click', function () {
        $(videoPlayer).addClass('active');
      });

      $(videoPlayerDel).on('click', function () {
        $(videoPlayer).removeClass('active');
      });

      /*
      var parentvar1 = $('.parent-var .var-btn a');
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
      */

      //메세지 전달 대상 선택시 
      var gchkIn1A = $('.gnm-class1 a'); //학생
      var gchkIn2A = $('.gnm-class2 a'); //학부모

      gchkIn1A.on('click',function(){
        $(this).toggleClass('student') //학생선택시
      })

      gchkIn2A.on('click',function(){
        $(this).toggleClass('parent') //학부모선택시
      })

      //전체 선택
      var gchkBox1 = $('.form-wrap #gse1');
      var gchkBox2 = $('.form-wrap #gse2');
      var allChkAgree = $('.all-chk-box input[type=checkbox]');

      //모두선택   
      allChkAgree.click(function(){ 
        $('.tbox-item .tbox-top input[type=checkbox]').prop('checked' , false);
        gchkIn1A.removeClass('student');
        gchkIn2A.removeClass('parent');
        if($(this).is(':checked')){
          //alert('asfsd');
          $('.tbox-item .tbox-top input[type=checkbox]').prop('checked' , true);
          gchkIn1A.addClass('student');
          gchkIn2A.addClass('parent');
        }
      });

      // 학생선택일때(클래스네임 : .student)
      gchkBox1.click(function(){ 	
        gchkIn1A.removeClass('student');
        if($(this).is(':checked')){
          gchkIn1A.addClass('student');
        }
      });

      // 학부모선택일때(클래스네임 : .parent)
      gchkBox2.click(function(){ 	
        gchkIn2A.removeClass('parent');
        if($(this).is(':checked')){
          gchkIn2A.addClass('parent');
        }
      });

      //수업보드 가상체험 화면ID: tc_p-0002
      var workSheet = new Swiper('.board-swiper .swiper-container', {
        slidesPerView: '1',
        autoHeight: true,
        navigation: {
          nextEl: '.board-swiper .swiper-button-next',
          prevEl: '.board-swiper .swiper-button-prev',
        },
        pagination: {
          el: ".board-swiper .swiper-pagination",
        },
      });

      //수업보드 > 시간표보기 팝업
      var classCheckedArea = $('.time-view-layer .form-wrap.check');
      var MyClass = $('.time-view-layer #schTimeValue1');
      var classChecked = $('.time-view-layer #schTimeValue2');
      var classCheckedDesc = $('.time-view-layer .form-wrap.desc');
      var classCheckedCont = $('.time-view-layer .select-cont');

      $(classChecked).click(function(){ 
        if($(classChecked).prop('checked')) { 
          $(this).parents('.form-wrap').find('.select-cont').toggleClass('active');
          } 		
      });

      //목록 이외 클릭시 목록 닫힘
      $(document).on('mouseup',function (f){
        if(classCheckedArea.has(f.target).length === 0){
          classChecked.parents('.form-wrap').find('.select-cont').removeClass('active');
        }
      });
      //학급별 드롭다운 item클릭시
      $(classCheckedCont).on('click', function(){
        $(classCheckedDesc).addClass('active');
      });
      //내수업 클릭시 학급명 표기 숨김
      $(MyClass).on('click', function(){
        $(classCheckedDesc).removeClass('active');
      });

      
      //학급현황 > 상세보기 > 학급초대 sms발송 팝업 발송하기 클릭시 / 화면ID : TC-P-3102P
      $('#smsSendBeforePopup .this-close-btn').on('click', function () {
        $('#smsSendBeforePopup').removeClass('show');
        $('#smsSendPopup').addClass('show');
      });


      //시간표 관리 진행중 , 수업중 수업내 차시변경 클릭시 tab
      $('.ui-js-chk-tab li .ui-js-chk').click(function(){ 

        var ui_js_tab_id = $(this).parents('li').attr('data-tab');

        if($(this).prop('checked')) {  //만약에 체크박스가 클릭되어있으면,
          $('.ui-js-chk-tab li .ui-js-chk').prop('checked',false); //checkbox 전체를 checked 해제 후, 
          $(this).prop('checked',true); //click한 요소만 true 지정
          $(this).parents('.ui-js-chk-tab').addClass('current');
          $("#"+ui_js_tab_id).addClass('current').siblings().removeClass('current');
            } else { 
              $(this).parents('.ui-js-chk-tab').removeClass('current');
              $("#"+ui_js_tab_id).removeClass('current');
          } 		
      });

      //프리톡 팝업 스와이프 
      var freeTalkSwiper = new Swiper('.f-talk-swipe .swiper-container', {
        slidesPerView: '1',
        breakpointsBase: 'window',
        autoHeight: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
      });

      //프리톡 신고하기팝업 팝업닫힘
      $('#freeTalkWarning2Popup .this-close-btn').on('click', function () {
        $('#freeTalkWarning2Popup').removeClass('show');
      });
      $('#freeTalkWarning2Popup .next').on('click', function () {
        $('#freeTalkWarning2Popup').removeClass('show');
        $('#freeTalkNext2Popup').addClass('show');
      });

      //프리톡 신고하기 완료 팝업 팝업닫힘
      $('#freeTalkNext2Popup .this-close-btn').on('click', function () {
        $('#freeTalkNext2Popup').removeClass('show');
      });
    










    }
  });
});