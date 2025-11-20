let quizPrevID = null
class setQuiz{
    
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
            if(quizPrevID) this.close();
            if(this.header){
                $('#'+this.id).find('.quiz-header h2').html(this.header);
                $('#'+this.id).find('.quiz-header').show();
            }
            else if($('#'+this.id).find('.quiz-header h2').html() == ''){
                $('#'+this.id).find('.quiz-header').hide();
            }
            if(this.body){
                $('#'+this.id).find('.quiz-body').html(this.body);
                $('#'+this.id).find('.quiz-body').show();
            }
            else if($('#'+this.id).find('.quiz-body').html() == ''){
                $('#'+this.id).find('.quiz-body').hide();
            }
            if(this.footer){
                $('#'+this.id).find('.quiz-footer .btn-set').html(this.footer);
                $('#'+this.id).find('.quiz-footer').show();
            }
            else if($('#'+this.id).find('.quiz-footer .btn-set').html() == ''){
                $('#'+this.id).find('.quiz-footer').hide();
            }
            $('body').removeClass('active-quiz').addClass('active-quiz');
            $('.quiz-overlay').fadeIn();
            $('#'+this.id).removeClass('show').addClass('show');
            $('#'+this.id).show();
            quizPrevID = this.id;
        }, 100);
    }
    close(){
        $('body').removeClass('active-quiz');
        $('.quiz-pop, .quiz-overlay').fadeOut();
        $('.quiz-pop.show').removeClass('show');
        quizPrevID = null;
    }
}

// 퀴즈관련 파일 로드 - 퍼블 include대용으로 작성된 코드로 개발시엔 각언어에 맞게 로드해주세요.
$.ajax({
    url: './ajax_quiz.html',
    type: 'GET',
    dataType: false,
    data: false,
    success: function(data) {
        $('body').append(data);
    }
});