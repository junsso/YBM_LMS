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
$('[data-popup]').on('click', function(){
  var popupName = $(this).data('popup');   
    
  $.ajax({
      type : "GET", //추후 POST로 변경
      url : "ajax_popup.html",
      dataType: "html",
      error : function(){
        alert("통신실패!!!!");
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
        $('[data-popup]').on('click', function () {
          var popupName = $(this).data('popup');
          $('body').addClass('active-popup');
          $('#' + popupName + 'Popup').addClass('show');
          return false;
        });

        // 라이브샷, 퀴즈나우 버튼 클릭 시 연결되는 화면 예시
        $('.view-ox').on('click', function(){
          $('#shotTypeOxPopup').addClass('show');
          $('#shotTypeOxPopup .overlay').hide();
        })
        $('.view-select').on('click', function(){
          $('#shotTypeSelPopup').addClass('show');
          $('#shotTypeSelPopup .overlay').hide();
        })
        $('.view-input').on('click', function(){
          $('#shotTypeInputPopup').addClass('show');
          $('#shotTypeInputPopup .overlay').hide();
        })
        $('#qzNowQuizPopup .go-next').on('click', function(){
          $('#qzNowQzViewPopup').addClass('show');
          $('#qzNowQzViewPopup .overlay').hide();
        })
        $('#qzNowQzViewPopup .go-result').on('click', function(){
          $('#qzNowQzResultPopup').addClass('show');
          $('#qzNowQzResultPopup .overlay').hide();
        })
        $('#qzNowQzResultPopup .a li').on('click', function(){
          $(this).siblings().removeClass('active');
          $(this).addClass('active');          
        })

        //라이브샷 미접속자 팝업
        var unConnected = $('.unconnected .btn');
        var miniBox = $('.mini-box');
        var miniClose = $('.mini-box .close');

        $(unConnected).on('click', function(){
          $(miniBox).show();
        });

        $(miniClose).on('click',function(){
          $(miniBox).hide();
        });

        //1:1메시지 이미지 클릭시 / 화면ID : GV-P-5005-1
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

        //1:1메시지 첨부파일 클릭시 / 화면ID : GV-P-5005-1
        var sortFile = $('.sort-file');
        var sortFileChild = $('.sort-file .f-sort-box');
        var sortFileParents = $('.chat-box .ch-txt-box .inn .ch-txt .txt');

        $(sortFile).on('click', function () {
          $(this).children(sortFileChild).addClass('on');
          $(this).parents('.txt').siblings('.txt').find('.sort-file .f-sort-box').removeClass('on');
        });
        //목록 이외 클릭시 목록 닫힘
        $(document).on('mouseup', function (e) {
          if (sortFileParents.has(e.target).length === 0) {
            sortFileChild.removeClass('on');
          }
        });

        //이모티콘 클릭시 / 화면ID : GV-P-5005-1
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
        $('#recodCancel4Popup .remove').on('click', function () {
          $('#recodCancel4Popup').removeClass('show');
          $('#audio4Popup').removeClass('show');
        });

        //1:1메시지에서 오디오 취소 팝업 취소 및 확인 클릭시 / 화면ID : TC-P-2004P
        $('#recodCancel5Popup .this-close-btn').on('click', function () {
          $('#recodCancel5Popup').removeClass('show');
        });

        //1:1메시지에서 오디오 팝업에서 취소 클릭시 / 화면ID : TC-P-2004P
        $('#volume4Popup .this-close-btn').on('click', function () {
          $('#volume4Popup').removeClass('show');
        });

        //1:1메시지에서 오디오 취소 팝업 취소 및 확인 클릭시 / 화면ID : TC-P-2004P
        $('.file-form-wrap a').on('mousedown', function () {
        });


      }
  });		
});