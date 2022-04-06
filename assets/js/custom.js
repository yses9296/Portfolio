//paraNav
$(".paraNav ul li").click(function(e){
    e.preventDefault();
    let target = $(this);
    let index = target.index();
    
    let section = $(".content_item").eq(index);
    let offset = section.offset().top;
    $("html, body").animate({scrollTop:offset}, 600);
});

//Up to Top
$(".paraLeft a").click(function(e){
    e.preventDefault();
    $('body, html').animate({scrollTop:0}, 'smooth');

});

//scroll
$(window).scroll(function(){
    let scrollTop = $(window).scrollTop();
    
    //logo
    if( scrollTop >= $("#myProfile").offset().top-70){
        $(".paraLeft").addClass("active");
    }
    else{
        $(".paraLeft").removeClass("active");
    }
    
    //paraNav
    $(".content_item").each(function(index){
        if( scrollTop >= $(".content_item").eq(index).offset().top ){
            $(".paraNav ul li").eq(index).addClass("active").siblings().removeClass("active");
        };
    });
    
    //skill_graph
     $(".reveal").each(function(){
        if(scrollTop >= $("#mySkill").offset().top-50){
            $(this).addClass("show");
        }
    });
});
