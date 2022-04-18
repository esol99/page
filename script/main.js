$(function(){

  //사용자가 마우스로 헤더 영역에 오버하면 .on, .h_on을 적욕하고 마우스를 아웃하면 .on, .h_on을 제거한다.

  $('header').hover(function(){//오버시 동작
    $(this).find('i.fas').addClass('on');
    $(this).find('.gnb a').addClass('on');
    //검정색 로고
    $(this).find('h1 img').attr('src','./images/black.png');
    $(this).addClass('h_on')

  },function(){//아웃시 동작
    $('header i.fas').removeClass('on');
    $('.gnb a').removeClass('on');
    //흰색 로고
    $('h1 img').attr('src','./images/white.png');
    $(this).removeClass('h_on')
  });

  //스크롤 이벤트를 사용하여 일정영역 이상으로 내려가면 위서식을 적용한다.
  $(window).scroll(function(){
    let sPos = $(this).scrollTop();
    console.log(sPos);//스크롤 값 체크

    if(sPos >=940){//영상콘텐츠가 모두 올라가면
      //만약에 사용자가 헤더에 마우스를 오버하면 서식이 지워지지 않는다. 
      $('header').find('i.fas').addClass('on');
      $('header').find('.gnb a').addClass('on');
      //검정색 로고
      $('header').find('h1 img').attr('src','./images/black.png');
      $('header').addClass('h_on')

      $('header').mouseleave(function(){
        $(this).find('i.fas').addClass('on');
        $(this).find('.gnb a').addClass('on');
        //검정색 로고
        $(this).find('h1 img').attr('src','./images/black.png');
        $(this).addClass('h_on')
      });
    }else{
      $('header i.fas').removeClass('on');
      $('.gnb a').removeClass('on');
      //흰색 로고
      $('h1 img').attr('src','./images/white.png');
      $('header').removeClass('h_on')
      
      $('header').mouseleave(function(){
        $(this).find('i.fas').removeClass('on');
        $(this).find('.gnb a').removeClass('on');
        //검정색 로고
        $(this).find('h1 img').attr('src','./images/black.png');
        $(this).removeClass('h_on')
      });
    }
  });
  
});