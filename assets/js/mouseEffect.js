//MouseEffect
const cursor = $(".cursor");
$(window).mousemove(function(e){
    gsap.to(cursor, {duration: 0.2, left: e.pageX-5, top: e.pageY-5});
});

//MouseEffect - Hover Action
$("article").hover(function(){
    cursor.addClass("active");
}, function(){
    cursor.removeClass("active");
});
$(".paraLeft").hover(function(){
    cursor.addClass("active_nav");
}, function(){
    cursor.removeClass("active_nav");
});
$(".paraNav ul li").hover(function(){
    cursor.addClass("active_nav");
}, function(){
    cursor.removeClass("active_nav");
});

//sns_hover
$(".github").hover(function(){
    cursor.addClass("active");
}, function(){
    cursor.removeClass("active");
});