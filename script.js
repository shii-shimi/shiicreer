$(function () {
    const fade_bottom = 50; // 画面下からどの位置でフェードさせるか(px)
    const fade_move = 100; // どのぐらい要素を動かすか(px)
    const fade_time = 1000; // フェードの時間(ms)
    // フェード前のcssを定義
    $(".profile").css({
      opacity: 0,
      transform: "translateY(" + fade_move + "px)",
      transition: fade_time + "ms",
    });
    // スクロールまたはロードするたびに実行
    $(window).on("scroll load", function () {
      const scroll_top = $(this).scrollTop();
      const scroll_bottom = scroll_top + $(this).height();
      const fade_position = scroll_bottom - fade_bottom;
      $(".profile").each(function () {
        const this_position = $(this).offset().top;
        if (fade_position > this_position) {
          $(this).css({
            opacity: 1,
            transform: "translateY(0)",
          });
        }
      });
    });
  });

  $(function () {
    const fade_bottom = 50; // 画面下からどの位置でフェードさせるか(px)
    const fade_move = 100; // どのぐらい要素を動かすか(px)
    const fade_time = 1000; // フェードの時間(ms)
    // フェード前のcssを定義
    $(".img").css({
      opacity: 0,
      transform: "translateY(" + fade_move + "px)",
      transition: fade_time + "ms",
    });
    // スクロールまたはロードするたびに実行
    $(window).on("scroll load", function () {
      const scroll_top = $(this).scrollTop();
      const scroll_bottom = scroll_top + $(this).height();
      const fade_position = scroll_bottom - fade_bottom;
      $(".img").each(function () {
        const this_position = $(this).offset().top;
        if (fade_position > this_position) {
          $(this).css({
            opacity: 1,
            transform: "translateY(0)",
          });
        }
      });
    });
  });

  

  $(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
        $('.menuclose').on('click', function(event) {
          $('.hamburger').removeClass('active');
          $('.globalMenuSp').removeClass('active');
        });
    });
});


