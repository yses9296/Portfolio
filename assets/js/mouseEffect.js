//MouseEffect
const cursor = $(".cursor");
$(window).mousemove(function(e){
    cursor.css({left: e.pageX-15, top: e.pageY-15});
});

//MouseEffect - Hover Action
$("article").hover(function(){
    cursor.addClass("active");
}, function(){
    cursor.removeClass("active");
});
$(".paraNav ul li").hover(function(){
    cursor.addClass("active_nav");
}, function(){
    cursor.removeClass("active_nav");
});