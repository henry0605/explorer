//漢堡按鈕
$('.toggle-menu').click(function () {
    $(this).toggleClass('active');
    $('#menu').toggleClass('open');
});

//navbar點擊
$(document).ready(function () {
    // 當點擊導航欄的鏈接時
    $('.navbar a').click(function (event) {
        // 阻止默認的跳轉動作
        event.preventDefault();

        // 獲取 href 的目標位置
        var target = $(this).attr('href');

        // 使用 jQuery 的 animate 方法來滾動到對應區域
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000); // 1000 是滾動時間（單位是毫秒）
    });
});

//banner滾動視差
let montain = document.getElementById("montain");
let text = document.getElementById("title");
let text1 = document.getElementById("title1");

window.addEventListener('scroll', function () {
    // Stock valeur scrollY dans une variable à chaque fois qu'on scroll
    let value = window.scrollY;
    console.log(value);

    text.style.transform = `translateY(${value}px)`;
    text1.style.transform = `translateY(${value}px)`;

})

//shop區點擊照片
$(document).ready(function () {
    // 當點擊 .gearItem 下的 img 時觸發事件
    $('.gearItem img').click(function () {
        // 獲取 data-img 屬性中的圖片源
        var newSrc = $(this).data('img');

        // 更換 #shopPic 的 src
        $('#shopPic').attr('src', newSrc);
    });
});
