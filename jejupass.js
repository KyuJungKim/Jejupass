
$(function () {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            700: {
                slidesPerView: 2,
                spaceBetween: 30,
            },

            1001: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });
    $('.ham').click(function () {
        $('.hamgnb').slideToggle()
    });

    $('.sec1_list>li').click(function () {
        $('.sec1_list>li').removeClass('on')
        $(this).addClass('on')

        let idx = $(this).index()
        $('.sec1list').removeClass('on')
        $('.sec1list').eq(idx).addClass('on')
    })
})

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.gnb,.navr').css({
                display: 'none'
            })
            $('.hd2').css({
                display: 'flex'
            })
        } else {
            $('.hd2').css({
                display: 'none'
            })
            $('.gnb,.navr').css({
                display: 'flex'
            })
        }
    })
})