
//アコーディオン

$(function () {
  $(".jsAccordionTitle").click(function () {
    $(this).toggleClass("is-active");
    $(this).next().slideToggle();
  });
});

// ダブレット、スマホのみスライダー

$(function () {
  function sliderSetting() {
    var width = $(window).width();

    if (width <= 959) {
      $(".your-class").not(".slick-initialized").slick({
        dots: true,
        arrows: true,
        speed: 1000,
      });
    } else {
      $(".your-class.slick-initialized").slick("unslick");
    }
  }

  sliderSetting();

  $(window).resize(function () {
    sliderSetting();
  });
});


// スクロール

$(function () {
  $("a").click(function () {
    var target = $($(this).attr("href")).offset().top;
    target -= 50;
    $("html,body").animate({ scrollTop: target }, 500);
    return false;
  });
});


$(function () {
  var pagetop = $('#scroll');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      pagetop.addClass("is-fadein");
    } else {
      pagetop.removeClass("is-fadein");
    }
  });
  pagetop.on("click", function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});


$(function () {
  var pagetop2 = $('#first');
  pagetop2.on("click", function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});


