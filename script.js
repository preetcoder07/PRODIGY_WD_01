function scrolltoclick(event, target) {
    event.preventDefault();
    if (target === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        var scrollToElement = document.getElementById(target);
        scrollToElement.scrollIntoView({ behavior: "smooth" });
    }
}


window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var windowHeight = window.innerHeight;
    var scrollPosition = window.scrollY;
    var scrollPercentage = (scrollPosition / (document.body.scrollHeight - windowHeight)) * 100;

    if (scrollPercentage <= 25) {
        navbar.style.backgroundColor = '#e1ab07';
    } else if (scrollPercentage > 40 && scrollPercentage <= 100) {
        navbar.style.backgroundColor = 'grey';
    } 
});
