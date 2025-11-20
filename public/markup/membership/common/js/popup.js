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

        // 탭 - 클릭
        $('.tab-b .tabmenu').on('click',function(){
          var tab_id = $(this).attr('data-tab');

          $('.tab-b .tabmenu').removeClass('current');
          $('.tab-content-b').removeClass('current');

          $(this).addClass('current');
          $("#"+tab_id).addClass('current');
        })

        //start: 학급/학생관리 학급현황 - 신규 학급 등록/학급 정보 수정 - 검색한 학교가 없을 경우  / 화면ID : TC-P-3102-P
        $('#schSearchPopup .next02').on('click', function(){
          lyClose();
          $('#schNonePopup').addClass('show');
        });

        //start: 학급/학생관리 학급현황 - 신규 학급 등록/학급 정보 수정 - 검색한 학교가 없을 경우 - 전체~고등 버튼 클릭시  / 화면ID : TC-P-3102-P
        var schbtnTarget = $('.form-wrap.sort .btn');
        
        $(schbtnTarget).click(function(){ 
          $(this).toggleClass('on');
          $(this).siblings().removeClass('on');
        });
        
        //start: 학원찾기 - 검색한 학원이없을 경우  / 화면ID : TC-P-8213-2
        $('#schAcdmPopup .next02').on('click', function(){
          lyClose();
          $('#acdmNonePopup').addClass('show');
        });

        // 강사 회원가입 > 학원 유형 기타 선택 시 직접 입력 필드 활성화
        $('select[name=actype]').bind('change', function() {
          var val = $(this).val();   
          if (val === 'etc') {   
              $('.input-chr').attr("readonly", false);   
              $('.input-chr').removeClass('disabled');
          } else {  
              $('.input-chr').attr("readonly", true);
              $('.input-chr').addClass('disabled');
          }   
        });


        function lyClose(){
          $('.layerpop').removeClass('show');
        }

        //payment
        $('.etc-case button').on('click',function(){
          $(this).addClass('selected')
          $(this).siblings().removeClass('selected')
        })



      }
  });		
});