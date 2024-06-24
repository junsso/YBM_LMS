/** modal Class */
class setModal{
    
    constructor(id, body='', header=''){
        this.id = id;
        if(body) this.setBody(body);
        if(header) this.setHeader(header);
    }
    setBody(body){
        this.body = body;
    }
    setHeader(header){
        this.header = header;
    }
    setFooter(footer){
        this.footer = footer;
    }

    open(){
        setTimeout(() => {
            
            if(this.header){
                $('#'+this.id).find('.popup-header h2').html(this.header);
                $('#'+this.id).find('.popup-header').show();
            }
            else if($('#'+this.id).find('.popup-header h2').html() == ''){
                $('#'+this.id).find('.popup-header').hide();
            }
            if(this.body){
                if($('#'+this.id).hasClass('toast-alert-box') && $('#'+this.id).hasClass('show')){
                    $('#'+this.id).find('.toast-item:eq(0)').clone().prependTo($('#'+this.id)).find('.popup-body').html(this.body);
                }
                else{
                    $('#'+this.id).find('.popup-body').html(this.body);
                    $('#'+this.id).find('.popup-body').show();
                }
            }
            else if($('#'+this.id).find('.popup-body').html() == ''){
                $('#'+this.id).find('.popup-body').hide();
            }
            if(this.footer){
                $('#'+this.id).find('.popup-footer .btn-set').html(this.footer);
                $('#'+this.id).find('.popup-footer').show();
            }
            else if($('#'+this.id).find('.popup-footer .btn-set').html() == ''){
                $('#'+this.id).find('.popup-footer').hide();
            }
    
            $('body').removeClass('active-modal').addClass('active-modal');
            
            if($('#'+this.id).hasClass('toast-alert-box')){
                if($('.overlay').css('display') != 'block'){
                    $('.overlay').css('background-color','rgba(0,0,0,0)');
                }
            }
            else{
                $('.overlay').css('background-color','rgba(0,0,0,0.65)');
            }
            $('.overlay').fadeIn();
            $('#'+this.id).removeClass('show').addClass('show');
            $('#'+this.id).show();
        }, 100);
    }
    close(){
        if($('#'+this.id).find('.toast-item').length > 1){
            $('#'+this.id).find('.toast-item:last-child').fadeOut(function(){
                $(this).remove();
            });
        }
        else if($('#'+this.id).hasClass('toast-alert-box') && $('.layerpop.show').length > 0){
            $('#'+this.id).fadeOut().removeClass('show');
        }
        else{
            $('body').removeClass('active-modal');
            $('.layerpop, .overlay, .toast-alert-box').fadeOut();
            $('.toast-alert-box.show').removeClass('show');
            $('.layerpop.show').removeClass('show');
        }
    }
}

function malert(body){
    let modal = new setModal('alertPopup',body);
    modal.open();
}

// mconfirm('메시지내용', sampleCallBack);
function mconfirm(body,callback){
    let modal = new setModal('confirmPopup',body);
    modal.open();
    $(document).on('click', '#confirmPopup .close, .call-ok', function(e){
        e.preventDefault();
        $('#confirmPopup button').unbind("click");
        callback($(this).hasClass('call-ok'));
        modal.close();
    });
}

function sampleCallBack(callok){
    if(callok){
        console.log('확인 클릭');
    }
    else{
        console.log('취소 클릭');
    }
}

// 팝업 닫기
$(document).on('click', '.overlay, .close, .close-btn', function (e) {
    e.preventDefault();
    // forever 클래스가 있는 경우 overlay를 클릭해도 팝업을 닫지 않음
    if ( $(e.target).hasClass('overlay') && $(e.target).hasClass('forever') ) {
        return false;
    } else {
        $('.overlay').removeClass('forever');
    }
    if($('.toast-alert-box.show').length > 0 && $('.layerpop.show').length > 0){
        $('.toast-alert-box.show').fadeOut().removeClass('show');
    }
    else{
        $('body').removeClass('active-modal');
        $('.layerpop, .overlay, .toast-alert-box').fadeOut();
        $('.toast-alert-box.show').removeClass('show');
        $('.layerpop.show').removeClass('show');

    }
    return false;
});

$(document).on('click', '[data-popup]',function(e){
    e.preventDefault();
    let this_id = $(this).data('popup');
    let modal = new setModal(this_id);
    modal.open();
});