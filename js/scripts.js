(function ($) {
    "use strict";
    // /////////////////////////////////////////// Page Layout
    // ///////////////////////////////////////////
    var line = "";
    var overlay = "";
    var i = 1;
    var c = 1;

    while (i < 4) {
        line += '<span class="line line-' + i + '"></span>';
        i++;
    }

    $('.lines').prepend(line);

    while (c < 5) {
        overlay += '<span class="overlay overlay-' + c + '"></span>';
        c++;
    }

    $('.overlays').prepend(overlay);

    if ($('.fullscreen-footer').length < 1) {

        $('.site-footer').prepend(
            '<span class="footer-ov"></span><span class="footer-ov"></span><span class="foo' +
            'ter-ov"></span><span class="footer-ov"></span>'
        )

    }

    if ($('.projects-nav').length > 0) {

        $('.projects-nav').prepend(
            '<span class="np-ov"></span><span class="np-ov"></span><span class="np-ov"></sp' +
            'an><span class="np-ov"></span>'
        )
    }

    var body = $('body');
    var pageSettings = $('.page-settings');

    var dataLayout = pageSettings.data('layout');

    if (dataLayout != null) {
        var siteLayout = 'layout-' + dataLayout;

        body.addClass(siteLayout)
    }

    var dataHeaderStyle = pageSettings.data('header-style');

    if (dataHeaderStyle != null) {
        var headerStyle = 'header-style-' + dataLayout;

        $('.site-header').addClass(dataHeaderStyle)
    }

    var dataMenuStyle = pageSettings.data('menu-style');

    if (dataMenuStyle != null) {
        var menuStyle = 'menu-style-' + dataMenuStyle;

        $('.site-navigation').addClass(dataMenuStyle)

    }

    var dataMenuLayout = pageSettings.data('menu-layout');

    if (dataMenuLayout != null) {
        var menuLayout = dataMenuLayout;

        $('.site-navigation').addClass(dataMenuLayout)

    }

    var dataBackground = pageSettings.data('background');

    if (dataBackground != null) {
        var bodyBg = dataBackground

        body.css('background', dataBackground);
        $('.np-ov').css('background', dataBackground);

    }

    if ($('.single-project').length > 0) {

        $('.site-footer').addClass('project-footer');

    }

    // /////////////////////////////////////////// Page Layout
    // ///////////////////////////////////////////
    // /////////////////////////////////////////// Site Navigation
    // ///////////////////////////////////////////

    $('.menu > li > a').each(function () {
        var dataHover = $(this).text();

        var attrHref = $(this).attr('href');

        if (attrHref === '#') {

            $(this).addClass('no-trans')
        }

        if ($('.site-navigation').hasClass('classic')) {

            $(this).wrapInner('<span data-hover="' + dataHover + '"></span>')

        } else {
            $(this).attr('data-hover', dataHover);
        }

    });

    $('.menu > li').on('mouseenter', function () {

        $('.menu > li').removeClass('menu-item-hover')
        $(this).addClass('menu-item-hover');

    });

    $('.menu > li').on('mouseleave', function () {

        $('.menu > li').removeClass('menu-item-hover')
        $('.menu > li.menu-item-active').addClass('menu-item-hover');

    });

    var scA = $('.scrolling-button a').marquee(
        {duplicated: true, delayBeforeStart: 0}
    );

    scA.marquee('pause');

    //// Menu Animations End

    /* Sub-Menus */

    if (!$('.site-navigation').hasClass('classic')) {

        $('.sub-menu > .menu-item.has-children').on('mouseenter', function () {

            $('.sub-menu .sub-menu').removeClass('sub-sub-in')

            var subsubmenu = $(this).children('.sub-menu')

            subsubmenu.addClass('sub-sub-in')

        });

        $('.menu > .menu-item.has-children > .sub-menu').on('mouseleave', function () {
            $('.sub-menu .sub-menu').removeClass('sub-sub-in');
        });

    }
    /* Sub-Menus */

    $('.site-navigation').prepend(
        '<span class="menu-ov menu-ov-1"></span><span class="menu-ov menu-ov-2"></span>' +
        '<span class="menu-ov menu-ov-3"></span><span class="menu-ov menu-ov-4"></span>'
    )

    /* Menu Toggle Hamburger */

    $('.menu-toggle').prepend(
        '<span class="toggle-line toggle-line-1"></span><span class="toggle-line toggle' +
        '-line-2"></span>'
    )

    $('.menu-toggle').on('click', function () {

        var clicks = $(this).data('clicks');
        if (clicks) {

            setTimeout(function () {
                $('.site-header').removeClass('dark-nav-active light-nav-active');
                $('.site-navigation').removeClass('nav-open')

            }, 380);

            $('.sub-toggle').removeClass('st-in')

            $('.sub-menu').removeClass('sub-menu-in');
            $('.sub-toggle').removeClass('st-active');
            $('.sub-menu .sub-menu').removeClass('sub-sub-in')

            $('.menu-wrapper').css('visibility', 'hidden');

            scA.marquee('pause');

            $(this).removeClass('is-active');

            $('.menu-ov').removeClass('menu-ov-in');

            $('.menu > li > a').each(function (i, element) {
                $(element)
                    .delay(i * 20)
                    .queue(function (next) {
                        $(this).removeClass('menu-item-comes');
                        next();
                    });
            });

            $('.mww-1, .mww-2').removeClass('mww-in');

            $('.widget-socials li').removeClass('so-li-in');

        } else {

            $('.site-navigation').addClass('nav-open')

            $('.menu-wrapper').css('visibility', 'visible');

            $(this).addClass('is-active');

            $('.menu-ov').addClass('menu-ov-in');

            scA.marquee('resume');

            if ($('.site-navigation').hasClass('light')) {
                setTimeout(function () {
                    $('.site-header').addClass('light-nav-active')
                }, 150);

            } else {

                setTimeout(function () {

                    $('.site-header').addClass('dark-nav-active')
                }, 150);

            }

            setTimeout(function () {

                $('.menu > li > a').each(function (i, element) {
                    $(element)
                        .delay(i * 30)
                        .queue(function (next) {
                            $(this).addClass('menu-item-comes');
                            next();
                        });
                });

            }, 200);

            setTimeout(function () {

                $('.mww-1, .mww-2').addClass('mww-in');

                $('.widget-socials li').each(function (i, element) {
                    $(element)
                        .delay(i * 40)
                        .queue(function (next) {
                            $(this).addClass('so-li-in');
                            next();
                        });
                });

            }, 300);

            setTimeout(function () {
                $('.sub-toggle').addClass('st-in')
            }, 500);

        }
        $(this).data("clicks", !clicks);

    });
    /* Menu Toggle Hamburger */

    $('.menu-item a')
        .not('.no-trans')
        .on('click', function () {

            $('.menu li').removeClass('menu-item-active');

            $(this)
                .parents('li')
                .addClass('menu-item-active')

            setTimeout(function () {
                $('.sub-menu').removeClass('sub-menu-in');
                //  $('.sub-menu .sub-menu').removeClass('sub-sub-in')
                $('.sub-toggle').removeClass('st-active');
                $('.sub-toggle').removeClass('st-in')
            }, 5);

            $('.menu-wrapper').css('visibility', 'hidden');

            scA.marquee('pause');

            $('.menu > li > a').each(function (i, element) {
                $(element)
                    .delay(i * 20)
                    .queue(function (next) {
                        $(this).removeClass('menu-item-comes');
                        next();
                    });
            });

            setTimeout(function () {
                $('.site-navigation').removeClass('nav-open')
            }, 300)

            $('.mww-1, .mww-2').removeClass('mww-in');

            $('.widget-socials li').removeClass('so-li-in');

            $('.menu-toggle').data('clicks', false);

        })

    if ($(window).outerWidth() < 850) {
        $('.site-navigation').removeClass('classic')
    }

    $('.site-navigation .menu > li.menu-item.has-children').each(function () {

        $(this).prepend('<i class="sub-toggle  icon-plus"><i>');

    })

    $('.sub-toggle').on('click', function () {

        $(this).toggleClass('st-active')

        var parentLi = $(this).parent('li');
        var openSub = parentLi.children('.sub-menu');

        openSub.toggleClass('sub-menu-in')

    });

    // /////////////////////////////////////////// Site Navigation
    // ///////////////////////////////////////////
    // /////////////////////////////////////////// Scroll Animations
    // ///////////////////////////////////////////
    if ($('.has-animation').length > 0) {
        $('.has-animation').each(function () {
            $(this).attr('data-scroll', 'true');

            var haDelay = $(this).data('delay') + 's'
            var haDuration = $(this).data('duration') + 's'

            $(this).css({transitionDelay: haDelay, transitionDuration: haDuration})
        });

        $('.lines-up, .lines-down, .lines-fade-up, .lines-fade-down').each(
            function () {

                $(this).splitLines(
                    {tag: '<div><span class="split-line"></div>', keepHtml: true}
                );

                var splitLines = $(this).find('.split-line');

                splitLines.each(function (i) {

                    var delay = i / 7.5;

                    var splitParent = $(this).parents('.has-animation');
                    var baseDelay = splitParent.data('delay');

                    if (baseDelay == null) {

                        var finalDelay = delay + 's'

                    } else {

                        var finalDelay = baseDelay + delay + 's'
                    };

                    $(this).css({transitionDelay: finalDelay})

                })

            }
        );

    };
    // /////////////////////////////////////////// Scroll Animations
    // ///////////////////////////////////////////
    // /////////////////////////////////////////// Site Scripts
    // ///////////////////////////////////////////
    $(window).on('load', function () {
        ////////// Page Loader ///////
        var loadingAn = anime({
            targets: '.line', height: '100%', duration: 3000, // 초기값 3000 이였음
            delay: 0,
            easing: 'easeInOutCubic',
            begin: function (anim) {
                $('.cygni-loader').addClass('in');
            },
            complete: function (anim) {
                $('.cygni-loader').addClass('out');

                setTimeout(function () {
                    $('#main').addClass('loaded');
                }, 100);

                setTimeout(function () {
                    var peScroll = new LocomotiveScroll(
                        {el: document.querySelector('#main'), smooth: false}
                    );
                    window.peScroll = peScroll;
                }, 250);

                if ($('.portfolio-showcase').length < 1) {
                    setTimeout(function () {

                        if ($('.site-navigation').hasClass('classic')) {
                            $('.site-navigation.classic .menu > li > a > span').each(
                                function (i, element) {
                                    $(element)
                                        .delay(i * 75)
                                        .queue(function (next) {
                                            $(this).addClass('span-in');
                                            next();
                                        });
                                }
                            );

                        } else {
                            $('.toggle-line').addClass('toggle-line-in');
                        }
                    }, 1500)

                    setTimeout(function () {
                        $('.portfolio-imgBox').addClass('plimg-in');
                    }, 1500);

                    setTimeout(function () {
                        $('.site-branding').addClass('logo-in');
                    }, 1900);

                    setTimeout(function () {
                        $('.page-nameBox').addClass('logo-in');
                        $('.pf-swiperWrap').addClass('grid-in');
                        $('.pl-informartion').addClass('plimg-in');
                    }, 2300);

                    setTimeout(function () {
                        $('.intro_topbg').addClass('fadeUp');
                    }, 2700);

                    setTimeout(function () {
                        $('.intro_topbg .page-title').addClass('fadeUp');
                    }, 2950);

                    setTimeout(function () {
                        $('.information-1 .nameBox .korea-name').addClass('fadeUp');
                    }, 3200);

                    setTimeout(function () {
                        $('.information-1 .nameBox .english-name').addClass('fadeUp');
                    }, 3300);

                    setTimeout(function () {
                        $('.information-1 .infoBox').addClass('fadeUp');
                    }, 3500);
                }

                setTimeout(function () {
                    $('.menu-item-active').addClass('menu-item-hover');
                }, 1000);
            }
        })

        window.loadingAn = loadingAn

        anime(
            {targets: '.cygni-loader', bottom: '100%', duration: 3000, delay: 0, easing: 'easeInOutCubic'}
        )

        anime({
            targets: '.cygni-loader .counter',
            innerHTML: [
                0, 100
            ],
            round: 1,
            duration: 3000,
            delay: 0,
            easing: 'easeInOutCubic',
            update: function (anim) {

                var number = $('.cygni-loader .counter').html();

                if (number < 10) {

                    $('.cygni-loader .counter').prepend('00')
                } else if ((number >= 10) && (number < 100)) {
                    $('.cygni-loader .counter').prepend('0')
                }

            }
        })

        ////////// Page Loader /////// /////////// Showcase Layouts ///////////

        /* Big Slider */
        if ($('.big-slider').length > 0) {

            $('body').css('overflow', 'hidden');

            $('.line').addClass('line-arange');

            $('.portfolio-showcase').addClass('loading')

            $('.big-slider-item .title, .big-slider-item .summary').each(function () {

                $(this).splitLines(
                    {tag: '<div><span class="span-line"></div>', keepHtml: true}
                );

            })

            $(
                '.big-slider-item .year, .big-slider-item .category, .big-slider-item .meta div'
            ).each(function () {
                $(this).wrapInner('<span></span>')

            })

            $('.big-slider-overlays').prepend(
                '<span class="bs-ov bs-ov-1"></span><span class="bs-ov bs-ov-2"></span><span cl' +
                'ass="bs-ov bs-ov-3"></span><span class="bs-ov bs-ov-4"></span>'
            )

            $('.bs-splitted').append(
                '<div class="big-images swiper-container"><div class="swiper-wrapper"></div></d' +
                'iv>'
            )

            $('.big-slider-item').each(function () {

                var bsi = $(this);

                if (bsi.find('video').length > 0) {

                    var bigVid = bsi.find('source');
                    var bigVidUrl = bigVid.attr('src');
                    $('.bs-splitted .swiper-wrapper').append(
                        '<div class="swiper-slide"><div class="big-image"><video playsinline autoplay m' +
                        'uted loop class="big-video-split"><source type="video/mp4" src="' +
                        bigVidUrl + '"></video></div></div>'
                    );

                    var bigVidSplit = $('.big-video-split');

                } else {
                    var bigImg = $(this).find('img');
                    var bigImgUrl = bigImg.attr('src');

                    $('.bs-splitted .swiper-wrapper').append(
                        '<div class="swiper-slide"><div class="big-image"><img src="' + bigImgUrl + '">' +
                        '</div></div>'
                    )

                }

            });

            $('.big-slide-button').wrapInner(
                '<a href="#" class="project-url" target="_blank"><p class="bsb-link"><p></a>'
            )
            $('.big-slide-button .project-url').prepend(
                '<span></span><span></span><span></span><span></span>'
            )

            $('.bsb-link').wrapInner('<wrap></wrap>');

            var bsURLFirst = $('.big-slider-item a:first-child').attr('href');

            $('.big-slide-button .project-url').attr('href', bsURLFirst);

            var bigSlider = new Swiper('.big-slider', {
                mousewheel: {
                    invert: false
                },
                slidesPerView: 1,

                navigation: {
                    nextEl: '.big-slide-next',
                    prevEl: '.big-slide-prev'
                },
                pagination: {
                    el: '.bs-bullets',
                    type: 'bullets',
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '">0' + (
                            index + 1
                        ) + '</span>';
                    }
                },
                loop: false,
                direction: 'vertical',
                virtualTranslate: true,
                watchSlidesProgress: true,
                containerModifierClass: 'big-slider-',
                slideClass: 'big-slider-item',
                containerClass: 'big-slider',
                wrapperClass: 'big-slider-wrapper',
                slideActiveClass: 'big-item-active',
                slideNextClass: 'big-item-next',
                slidePrevClass: 'big-item-prev'
            });

            var titleAnimNext = anime
                .timeline(
                    {autoplay: false, loop: false, targets: '.title .span-line'}
                )
                .add({
                    translateY: [
                        '0', '-110%'
                    ],
                    easing: "easeInExpo",
                    // //       delay: function (el, i) { //           return 150 + i * 50; //
                    // },

                    duration: 650,
                    complete: function (anim) {
                        titleAnimNext.pause();
                    }
                })
                .add({
                    translateY: [
                        '110%', '0'
                    ],
                    easing: "easeOutExpo",
                    //    delay: function (el, i) {        return i * 50;    },

                    duration: 650
                })

            var titleAnimPrev = anime
                .timeline({
                    //   delay: function (el, i, l) {       return (l - i) * 50;  },
                    duration: 700,
                    autoplay: false,
                    loop: false,
                    targets: '.title .span-line'
                })
                .add({
                    translateY: [
                        '0', '110%'
                    ],
                    easing: "easeInExpo",
                    complete: function (anim) {
                        titleAnimPrev.pause();
                    }
                })
                .add({
                    translateY: [
                        '-110%', '0'
                    ],
                    easing: "easeOutExpo"
                })

            window.titleAnimNext = titleAnimNext
            window.titleAnimPrev = titleAnimPrev

            $('.big-slider-item').addClass('bs-inactive');
            $('.big-slider-item.big-item-active').addClass('bs-active');

            $('.big-image').addClass('big-image-anim');

            var interleaveOffset = 0.45;
            var bigImages = new Swiper('.big-images', {
                navigation: {
                    nextEl: '.big-slide-next',
                    prevEl: '.big-slide-prev'
                },
                slidesPerView: 1,
                mousewheel: {
                    invert: false
                },
                pagination: {
                    el: '.bs-bullets',
                    type: 'bullets',
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '">0' + (
                            index + 1
                        ) + '</span>';
                    }
                },
                loop: false,
                autoplay: {
                    delay: 10000,
                    waitForTransition: false,
                    disableOnInteraction: false
                },
                speed: 1300,
                direction: 'vertical',
                parallax: true,
                watchSlidesProgress: true,
                on: {
                    progress: function () {
                        let swiper = this;
                        for (let i = 0; i < swiper.slides.length; i++) {
                            let slideProgress = swiper
                                    .slides[i]
                                    .progress,
                                innerOffset = swiper.width * interleaveOffset,
                                innerTranslate = slideProgress * innerOffset;
                        }
                    },
                    setTransition: function (speed) {
                        let swiper = this;
                        for (let i = 0; i < swiper.slides.length; i++) {
                            swiper
                                .slides[i]
                                .style
                                .transition = speed + "ms";
                            swiper
                                .slides[i]
                                .querySelector(".big-image")
                                .style
                                .transition = speed + "ms";
                        }
                    },

                    transitionStart: function () {
                        $('.big-slider .title .span-line').css({transition: 'auto'});

                        $('.bs-ov').addClass('trans-start');

                    },
                    transitionEnd: function () {
                        $('.big-slider-item').removeClass('bs-active');
                        $('.big-slider-item.big-item-active').addClass('bs-active');

                        $('.swiper-pagination-bullet-active').removeClass('progress-init')

                        setTimeout(function () {
                            $('.swiper-pagination-bullet-active').addClass('progress-init')

                        }, 1);

                        var bsURL = $('.big-slider-item.big-item-active a').attr('href');

                        $('.big-slide-button .project-url').attr('href', bsURL);

                    },
                    slideNextTransitionStart: function () {

                        var overlayAnimNext = anime
                            .timeline({
                                easing: 'easeInOutCubic',
                                duration: 600,
                                autoplay: false,
                                loop: false,
                                targets: '.bs-ov',
                                delay: function (el, i) {
                                    return i * 50;
                                }
                            })
                            .add({
                                translateY: [
                                    '100%', '0'
                                ],
                                complete: function (anim) {
                                    overlayAnimNext.pause();
                                }

                            })
                            .add({
                                translateY: ['0', '-100%']
                            });
                        window.overlayAnimNext = overlayAnimNext

                        overlayAnimNext.restart();
                        titleAnimNext.restart();
                    },

                    slideNextTransitionEnd: function () {
                        setTimeout(function () {
                            titleAnimNext.play();
                            overlayAnimNext.play();
                        }, 1);
                    },

                    slidePrevTransitionStart: function () {

                        var overlayAnimPrev = anime
                            .timeline({
                                easing: 'easeInOutCubic',
                                duration: 600,
                                autoplay: false,
                                loop: false,
                                targets: '.bs-ov',
                                delay: function (el, i) {
                                    return i * 30;
                                }
                            })
                            .add({
                                translateY: [
                                    '-100%', '0'
                                ],
                                complete: function (anim) {
                                    overlayAnimPrev.pause();
                                }

                            })
                            .add({
                                translateY: ['0', '100%']
                            });

                        window.overlayAnimPrev = overlayAnimPrev

                        titleAnimPrev.restart();
                        overlayAnimPrev.restart();
                    },

                    slidePrevTransitionEnd: function () {
                        setTimeout(function () {
                            titleAnimPrev.play();
                            overlayAnimPrev.play();
                        }, 1);

                    }
                }

            });

            $('.swiper-pagination-bullet-active').addClass('progress-init')
            bigImages.controller.control = bigSlider

            loadingAn
                .finished
                .then(function () {

                    /* Big Slider Opening */

                    $('.portfolio-showcase').removeClass('loading')

                    setTimeout(function () {}, 800)

                    setTimeout(function () {
                        $('.big-slide-pag i').addClass('anim-in');
                        $('.big-slide-pag img').addClass('anim-in');

                    }, 1500);

                    setTimeout(function () {

                        $('.bs-bullets .swiper-pagination-bullet').each(function (i, element) {
                            $(element)
                                .delay(i * 200)
                                .queue(function (next) {
                                    $(this).addClass('anim-in');
                                    next();
                                });
                        });

                    }, 1250);

                    setTimeout(function () {
                        $('.portfolio-imgBox').addClass('plimg-in');
                    }, 1100);

                    setTimeout(function () {
                        $('.site-branding ').addClass('logo-in');
                    }, 1500);

                    setTimeout(function () {
                        $('.pl-informartion').addClass('plimg-in');
                    }, 1900);

                    setTimeout(function () {
                        $('.page-nameBox').addClass('logo-in');
                        $('.pf-swiperWrap').addClass('grid-in');
                    }, 2000);

                    setTimeout(function () {
                        $('.toggle-line').addClass('toggle-line-in');
                    }, 2000);

                    /* Big Slider Opening */

                });

        }
        /* Big Slider */

        ///////////// Page Build Elements ///////////
    });
    // /////////////////////////////////////////// Site Scripts
    // ///////////////////////////////////////////
})(jQuery);
