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

//shop區點擊icon
$(document).ready(function () {
    // 當點擊 .gearItem 下的 img 時觸發事件
    $('.gearItem img').click(function () {
        // 獲取 data-img 屬性中的圖片源
        var newSrc = $(this).data('img');

        // 更換 #shopPic 的 src
        // 淡出圖片，然後更換 src，再淡入
        $('#shopPic').fadeOut(300, function () {
            $(this).attr('src', newSrc).fadeIn(300);
        });
    });
});

//news區點擊換照片
const carouselData = [
    {
        artTitle: "富士山 - 迎來旅遊高峰",
        article: "隨著日本旅遊業的恢復，富士山再次成為國內外遊客的熱點。每年7月至9月的登山季，吸引了成千上萬的登山者和觀光客前來。當局提醒登山者做好充分準備，攜帶合適裝備以應對...",
        imgSrc: "./image/carousel-1.jpg"
    },
    {
        artTitle: "嘉明湖 - 天使的眼淚",
        article: "位於台灣中部，被譽為“天使的眼淚”，因其如翡翠般碧綠的湖水和壯麗山景而聞名。每年吸引大量遊客和攝影愛好者前來欣賞。湖泊四周環繞著豐富的生態系統，是登山健行者的天堂...",
        imgSrc: "./image/carousel-2.jpg"
    },
    {
        artTitle: "台北大縱走 - 都市的冒險",
        article: "台北大縱走活動成功吸引了大量登山愛好者。這條全長約30公里的路線從陽明山延伸至台北市郊，途經多個風景名勝。參加者在挑戰自我的同時，享受了台北獨特的山城景觀...",
        imgSrc: "./image/carousel-3.jpg"
    },
    {
        artTitle: "玉山 - 台灣的巔峰之旅",
        article: "近期吸引了大量登山者挑戰其壯麗的山巔，海拔3,952公尺的玉山提供了壯觀的山景和豐富的生態體驗。每年春夏季節，數以千計的登山愛好者攀登玉山，享受清新空氣和壯麗日出...",
        imgSrc: "./image/carousel-4.jpg"
    },
    {
        artTitle: "山頂星空 - 銀河之美",
        article: "在本週末，山頂觀星活動吸引了眾多天文愛好者前來。清澈的空氣和無光害的環境使觀賞銀河成為一場視覺盛宴。參與者在專家指導下，通過望遠鏡觀察到了壯麗的星系和星雲...",
        imgSrc: "./image/carousel-5.jpg"
    }
];

$(document).ready(function () {
    let currentIndex = 0; // 當前顯示的索引

    // 更新 carousel 的內容
    function updateCarousel(index) {
        $('#artTitle').text(carouselData[index].artTitle);
        $('#article').text(carouselData[index].article);
        $('#news-image').attr('src', carouselData[index].imgSrc);
    }

    // 點擊左箭頭事件
    $('.prev-arrow').click(function () {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselData.length - 1;
        updateCarousel(currentIndex);
    });

    // 點擊右箭頭事件
    $('.next-arrow').click(function () {
        currentIndex = (currentIndex < carouselData.length - 1) ? currentIndex + 1 : 0;
        updateCarousel(currentIndex);
    });
});
