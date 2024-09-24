//漢堡按鈕
$('.toggle-menu').click(function () {
    $(this).toggleClass('active');
    $('#menu').toggleClass('open');

    // 切換禁止滾動的功能
    if ($('#menu').hasClass('open')) {
        $('body').addClass('no-scroll'); // 禁止滾動
    } else {
        $('body').removeClass('no-scroll'); // 恢復滾動
    }
});