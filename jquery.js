/* JQuery */

$(".openn").on("click",function(){
    $(".openn").css({
        display:'none'

    }),
    $(".close").css({display:'block'})
    $(".sidebar").css({
        width:'250px',
        transition:'all 0.5s'
    }),
    $("#mm").css({
        width:'21%',
        transition:'all 0.5s',
       
        
    }),
    $(".mmm").css({
        marginLeft:'82%'
    }),
    $(".lll").css({
        marginLeft:'80%',
        marginTop:'80%'

    })
    $(".slide").addClass("animate__animated animate__backInUp")



})

$(".close").on("click",function(){
    $(".openn").css({
        display:'block'

    }),
    $(".close").css({display:'none'})
    $(".sidebar").css({
        width:'0px',
        transition:'all 0.5s'
    }),
    $("#mm").css({
        width:'4.5%',
        transition:'all 0.5s',
       
        
    }),
    $(".mmm").css({
        marginLeft:'10%'
    }),
    $(".lll").css({
        marginLeft:'10%',
        marginTop:'380%'

    })
    $(".slide").removeClass("animate__animated animate__backInUp")

    $(".slide").addClass("animate__animated animate__backInDown")



})


$(window).ready(function () {
    $("#loading").slideUp(3000,function(){
        $('body').css({'overflow-y':'scroll'})


    })});

