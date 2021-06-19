$(document).ready(function()
{
    $(window).scroll(function()
    {
        if(this.scrollY > 20)
        {
            $('.navbar').addClass("sticky");
            $('.nbtn').addClass("sticky");
            $('.navbar:menu:li:a').addClass("stickiness");
            $('.navbar:logo:a').addClass("sticky");

        }
        else
        {
            $('.nbtn').removeClass("sticky");
            $('.navbar').removeClass("sticky");
        }
    });

    // toggle menu/nav
    $('.nbtn').click(function()
    {
        $('.navbar .menu').toggleClass("active");
        $('.nbtn i').toggleClass("active");
        $('.abtn').toggleClass("active");
        $('.AboutPage').toggleClass("active");
    });
});