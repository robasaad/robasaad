// Get current year
function getYear() {
    now = new Date;
    theYear = now.getYear();
    if (theYear < 1900)
        theYear = theYear + 1900;
    document.write(theYear);
}

// Smooth scroll
$("#start").click(function() {
    $('html, body').animate({
        scrollTop: $("#intro").offset().top
    }, 400);
});