import $ from 'jquery';

if ($(window).width()<=700){
    $(".footer-links-wrapper").addClass("someClass");
}
else {$(".footer-links-wrapper").removeClass("someClass")};

$(window).on("resize",function(event){
    if ($(window).width()<=700){
        $(".footer-links-wrapper").addClass("someClass");
    }
    else {$(".footer-links-wrapper").removeClass("someClass")
    $(".footer-links-wrapper ul").show()};
    
})


$(document).on("click",".someClass h3",function(){
    $(this).next("ul").slideToggle()
    $(this).toggleClass("expanded")
})

// $(".footer-links-wrapper h3").on("click",function(){
//     if($(window).width()<=768){
//            $(this).next("ul").slideToggle();
//      $(this).toggleClass("expanded")
//     }
// })
