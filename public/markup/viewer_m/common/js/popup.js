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
$(document).on('click','[data-popup]',function(){

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
        $(document).on('click','.overlay, .close-btn, .this-close-btn, .ui-js-close',function(){
          $('body').removeClass('active-popup');
          $('.layerpop').removeClass('show');
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
      }
  });		
});