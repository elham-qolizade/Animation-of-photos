$(document).ready(function () {
    $(".tab-link").click(function () {
        let tab_id = $(this).attr("data-tab");
        $(".tab-content").removeClass("active");
        $(this).addClass("active");
        $("#" + tab_id).addClass("active");
        console.log(tab_id);

    })
})