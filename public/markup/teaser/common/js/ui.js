$(document).ready(function(){
    // 탭 - 마우스 오버
    $('.tab .tabmenu').on('mouseenter',function(){
        var tab_id = $(this).attr('data-tab');

        $('.tab .tabmenu').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })

    
    // 체크박스 전체 선택
    $(".checkbox_group").on("click", "#check_all", function () {
        var checked = $(this).is(":checked");    
        if(checked){
            $(this).parents(".checkbox_group").find('input').prop("checked", true);
        } else {
            $(this).parents(".checkbox_group").find('input').prop("checked", false);
        }
    });
    // 체크박스 전체 선택(마케팅 세부항목)
    $(".checkbox_group .agree-group-b").on("click", "#checkSel_all_t, #checkSel_all", function () {
        var checked = $(this).is(":checked");    
        if(checked){
            $('.agree-child-group').find('input').prop("checked", true);
        } else {
            $('.agree-child-group').find('input').prop("checked", false);
        }
    });
    // 체크박스 개별 선택
    $(".checkbox_group").on("click", ".normal", function() {
        var is_checked = true;        
        $(".checkbox_group .normal").each(function(){
            is_checked = is_checked && $(this).is(":checked");
        });        
        $("#check_all").prop("checked", is_checked);
    });
    // 체크박스 개별 선택(마케팅 동의 세부항목)
    $(".checkbox_group .agree-group-b").on("click", ".normal", function() {
        var is_checked = true;        
        $(".checkbox_group .normal").each(function(){
            is_checked = is_checked && $(this).is(":checked");
        });        
        $("#checkSel_all").prop("checked", is_checked);
    });
    
})