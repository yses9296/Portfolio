//paraNav
$(".paraNav ul li").click(function(e){
    e.preventDefault();
    let target = $(this);
    let index = target.index();
    
    let section = $(".content_item").eq(index);
    let offset = section.offset().top;
    $("html, body").animate({scrollTop:offset}, 600);
});

//scroll
$(window).scroll(function(){
    let scrollTop = $(window).scrollTop();
    console.log(scrollTop);
    
    $(".content_item").each(function(index){
        if( scrollTop >= $(".content_item").eq(index).offset().top ){
            $(".paraNav ul li").eq(index).addClass("active").siblings().removeClass("active");
        };
    });
});
