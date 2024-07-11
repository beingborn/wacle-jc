console.log("hello")

/**
 * 배경 이미지 변경 함수 
 * --------------------------
 * 1. 이미지 배열에 src값 담기
 * 2. index 순서 세는 count 정하기
 * 3. src 변경하는 함수 생성
 * 4. setTimeOut으로 3초마다 실행시키기
 * 
 */

const images = [
  '../img/main__image-0.jpg',
  '../img/main__image-1.jpg',
  '../img/main__image-2.jpg'
];


let currentIndex = 1;


$(document).ready(function(){
  function changeBackgroundImage() {
    $('.main__hero').css("background", `url(./img/main__image-${currentIndex}.jpg)`); 
    $('.main__hero').css("background-size", "cover"); 
    currentIndex = (currentIndex + 1) % images.length;

    if (currentIndex == 3) {
      currentIndex = 0
    }
  }

setInterval(changeBackgroundImage, 3000);

})

/**
 * tabmenu 
 * --------------------------
 * 1. mouseEnter시 header padding-bottom 늘려서 sub-menu 배경 흰색 생성
 * 2. transition 0.3초 후 submenu display block
 * 3. mouseLeave시 기존 padding 값으로 변경, 배경색 투명으로 변경 
 * 
 */



$(document).ready(function(){
  // $('.sub__menu').css({
  //   "display": "none",
  //   "opacity": 0
  // })

  $('.gnb__item').mouseenter(function() {
    $('.header__wrap').css({
      "padding-bottom": "360px",
      "background-color": "#fff"
    });
    $('.gnb__menu .gnb__item > a').css("color", "#000");

    // 높이 애니메이션이 끝난 후 서브메뉴를 보이게 함
    setTimeout(() => {
      $('.sub__menu').css({
        "display": "block",
        "opacity": 1
      });
    }, 300);

    $('.sub__menu li a').css("display", "block");
  });

  $('.header__wrap').mouseleave(function() {
    $('.header__wrap').css({
      "padding": "40px 0",
      "background-color": "transparent"
    });
    $('.gnb__menu .gnb__item > a').css("color", "#fff");

    $('.sub__menu').css({
      "display": "none",
      "opacity": 0
    });

    $('.sub__menu li a').css("display", "none");
  });
})

/**
 * 모바일 gnb 토글 
 * --------------------------
 * 1. 모바일 햄버거 버튼 클릭 시 mobile-gnb display block 처리
 * 2. body 태그의 overflow 또한 토글 처리하면서 스크롤 막기
 * 3. 모바일 기준 width 100%, height을 100vh로 설정해 전체 영역 감싸기
 *  
 * 
 */

// 현재 하고 싶은 것 : 첫번째 클릭 시 toggle 되면서 body 스크롤 막기, 두번째 클릭시 다시 visible 풀기

$(document).ready(function(){
  // $('.mobile__gnb').hide();
  $('.mobile--opener').click(function(){
    $('.mobile__gnb').toggle();


  })
})

/**
 *  모바일 gnb 아코디언
 *  ------------------------
 *  1. 모바일 gnb item 클릭 시 해당 index 값 저장
 *  2. 해당 index값의 mo__sub eq값 toggle
 */

let moBtnIndex;

  $('.mo__item > a').click(function(){
    moBtnIndex = $('.mo__item > a').index(this)

    // moBtnIndex = $(this).index();
    // console.log(moBtnIndex)
    $('.mobile__gnb .mo__sub').eq(moBtnIndex).toggle();
  })



  /**
   * con-box 마우스 호버 시 백그라운드 이미지 크기 확대
   * 
   */

  let box = $('.con__box');
  console.log(box)

  $(document).ready(function() {
    $('.con__box').hover(
      function() {

        conIndex = $('.con__box').index(this)
        $(this).css({'background-size' : '130% 130%'});
        // $(this).css('transform', 'scale(1.1)');
        $('.con__box').eq(conIndex).css("z-index", "333")
        $('.con__box').not($(this)).css({
          "z-index" : "332",
          "opacity" : "0.9",
          'width' : '30%'
        })
      },
      function() {
        $(this).css({'background-size' : '100% 100%'});
        // $(this).css('transform', 'scale(1)');
        $('.con__box').eq(conIndex).css("z-index", "333")
        $('.con__box').not($(this)).css({
          "opacity" : "1"
        })
      }
    );
  });