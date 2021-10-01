// ----- SETUP -----

// WOW.js
new WOW().init();

// -----------------

// ----- DATA -----

var data_1 = [
    { class: '.menu-user', ja: 'なおひろ', en: 'about' },
    { class: '.menu-works', ja: 'お仕事', en: 'works' },
    { class: '.menu-contact', ja: '依頼・質問', en: 'contact' }
]

var data_2 = [
    {class_active:'.hexa-2',class_passive:'.hexa-1 span'},
    {class_active:'.hexa-4',class_passive:'.hexa-3 span'},
    {class_active:'.hexa-6',class_passive:'.hexa-7 span'},
    {class_active:'.hexa-8',class_passive:'.hexa-9 span'}
]

// ---------------

// ロードディング
window.onload = function() {
    $('#loading').fadeOut(1250)
    // display : flex; で fadeIn させる
    $('#body').css("display", "flex").hide().delay(1250).fadeIn()
    $('#drawer-menu ul').hide()
};


// ドロワーメニュー
$('#aside > button').on('click',function(){
    // すべてtoggleClassで処理する displayとopacity
    $('#drawer-menu').toggleClass('active-drawer')
    $('#drawer-menu img').fadeToggle(800)
    $('#drawer-menu ul').fadeToggle(800)
    $('#drawer-menu p').fadeToggle(800)
    $('#aside button').fadeToggle(800)
});

$('.menu-user').on('click',function(){

    $('#section-user').fadeIn(2000)
    $('#top').fadeOut(2000)
    $('#section-works').fadeOut(2000)
    $('#section-policy').fadeOut(2000)
    $('#section-portfolio').fadeOut(2000)
    $('#section-process').fadeOut(2000)

    $('#drawer-menu').toggleClass('active-drawer')
    $('#drawer-menu img').fadeToggle(800)
    $('#drawer-menu ul').fadeToggle(800)
    $('#drawer-menu p').fadeToggle(800)
    $('#aside button').fadeToggle(800)
});
$('.menu-user').one('click',function(){
    var swiper = new Swiper('.swiper-container', {
        grabCursor: true,
        // effect: 'cube',
        // cubeEffect: {
        //     shadow: true,
        //     slideShadows: true,
        //     shadowOffset: 20,
        //     shadowScale: 0.94,
        // },
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
        },
        direction: 'vertical',
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        speed: 800,
    });
});

$('.menu-works').on('click',function(){

    $('#section-works').fadeIn(2000)
    $('#top').fadeOut(2000)
    $('#section-user').fadeOut(2000)
    $('#section-policy').fadeOut(2000)
    $('#section-portfolio').fadeOut(2000)
    $('#section-process').fadeOut(2000)
    
    $('#drawer-menu').toggleClass('active-drawer')
    $('#drawer-menu img').fadeToggle(800)
    $('#drawer-menu ul').fadeToggle(800)
    $('#drawer-menu p').fadeToggle(800)
    $('#aside button').fadeToggle(800)

    // ページ変遷時のアニメーション
    // スマホの要素数の変更
    if (window.matchMedia('(max-width:480px)').matches) {
        // SPの処理
        $('.hexa-2').addClass('hexa-fix-1')
        $('.hexa-8').addClass('hexa-fix-2')
    } else if (window.matchMedia('(max-width:768px)').matches) {
        // TABの処理
    } else {
        // PCの処理
        $.each(data_2,
            function(index, val) {
                var css = [
                    {'opacity':'0'},
                    {'opacity':'1'}
                ]
                $(val.class_active).hover(function(){
                    $(val.class_passive).css(css[1])
                },function(){
                    $(val.class_passive).css(css[0])
                });
            }
        );
    }
    // 背景の変更
    for (var i = 1;i < 11;i++) {
        var select = '.hexa-' + i.toString() + ',.hexa-' + i.toString() + ':before,.hexa-' + i.toString() + ':after'
        if (i % 2 === 1 ) {
            var content_1 = '<style>' + select + '{background: linear-gradient(to bottom right,#4A4F55,#151A1F)!important;cursor:default;}</style>'
            $('head').append(content_1)
        } else {
            // if (i === 10) {
                continue
            // }
            // var content_2 = '<style>' + select + '{animation: light-up 1.6s ease-in-out 2s;}</style>'
            // $('head').append(content_2)
        }
    };
});

$('.hexa-2').on('click',function(){
    $('#section-process').fadeIn(1000)
    $('#section-works').fadeOut(1000)
});
$('.hexa-4').on('click',function(){
    $('#section-policy').fadeIn(1000)
    $('#section-works').fadeOut(1000)
});
$('.hexa-6').on('click',function(){
    $('#section-portfolio').fadeIn(1000)
    $('#section-works').fadeOut(1000)
});
$('.return-btn').on('click',function(){
    $('#section-works').fadeIn(1000)
    $('#section-portfolio').fadeOut(1000)
    $('#section-process').fadeOut(1000)
    $('#section-policy').fadeOut(1000)
});

// ホバーによるタイトルの翻訳(PC)

// $.each(data_1,
//     function(index, val) {
//         var css = [
//             {'font-size':'2.4rem' , 'font-weight':'bold', },
//             {'font-size':'3rem'   , 'font-weight':'normal' }
//         ]
//         $(val.class).hover(function(){
//             $(val.class).css(css[0]).attr('data-item', val.ja)
//         },function(){
//             $(val.class).css(css[1]).attr('data-item', val.en)
//         });
//     }
// );

