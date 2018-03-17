$(document).ready(function(){
    $('.masthead .one').bind('click', function(event) {
      /* Act on the event */
      $('.masthead .nav-title').removeClass('active');
      $('.masthead .page-header').removeClass('active');
      $('.masthead .one').addClass('active');
    });
    $('.masthead .two').bind('click', function(event) {
      /* Act on the event */
      $('.masthead .nav-title').removeClass('active');
      $('.masthead .page-header').removeClass('active');
      $('.masthead .two').addClass('active');
    });
    $('.masthead .three').bind('click', function(event) {
      /* Act on the event */
      $('.masthead .nav-title').removeClass('active');
      $('.masthead .page-header').removeClass('active');
      $('.masthead .three').addClass('active');
    });
    $('.masthead .four').bind('click', function(event) {
      /* Act on the event */
      $('.masthead .nav-title').removeClass('active');
      $('.masthead .page-header').removeClass('active');
      $('.masthead .four').addClass('active');
    });
    var list=$('.list-group');
    var title=$('.list-group .nav-title');
    var count=$('.list-group .page-header');
    count.slideUp();
    title.removeClass('active');
    title.each(function(index, obj) {
      $(obj).click(function(event) {
        //点击后内容的展开和收起
        count.slideUp();
        var status=count.eq(index).is(':hidden');
        if(!status){
          title.removeClass('active');
          count.eq(index).slideUp(200);
          $('h6').css('display', 'block');
          // $(this).find('h6').css('display', 'block');
          $(this).find('.job_open').css('display', 'none');
          $(this).find('.job_close').css('display', 'block');
          count.eq(index).stop(false, true);
        }
        else{
          count.hide();
          count.eq(index).slideDown(200);
          title.removeClass('active');
          $('h6').css('display', 'block');
          $('.job_open').css('display', 'none');
          $('.job_close').css('display', 'block');
          $(this).addClass('active');
          $(this).find('h6').css('display', 'none');
          $(this).find('.job_open').css('display', 'block');
          $(this).find('.job_close').css('display', 'none');
        }
      });
    });
    //导航下标滑动
    $('.job_intro li').mouseover(function(event) {
      /* Act on the event */
      var width=$('.job_intro li a').width();
      var width_left=$('.job_intro li').width();
      var index=$(this).index();
      $('.underline').css('transition', '0.4s cubic-bezier(0.42, 0.6, 0.29, 0.62)');
      $('.underline').css('width', width+30);
      $('.underline').css('left', (index-1)*width_left+30);
    });

    $('.job_intro li').mouseleave(function(event) {
      /* Act on the event */
      var active_index=$('.job_intro').find('.active').index();
      var width_left=$('.job_intro li').width();
      $('.underline').css('width', 0);
      $('.underline').css('left',(active_index-1)*width_left+45);
    });
});
