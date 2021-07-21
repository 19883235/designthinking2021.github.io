$(document).ready(function() {
    $('#nav-intro').click(function() {
        $('html,body').animate({ scrollTop: $("#intro").offset().top}, 200)
    });
    $('#nav-team').click(function() {
        $('html,body').animate({ scrollTop: $("#team").offset().top}, 200)
    });
});
