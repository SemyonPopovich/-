function changeStars(starsId, num) {
    var starsContainer = document.getElementById(starsId);
    var stars = starsContainer.querySelectorAll('.star');
    for (var i = 0; i < stars.length; i++) {
        if (i < num) {
            stars[i].innerHTML = '★'; // звезда
        } else {
            stars[i].innerHTML = '☆'; // пустая звезда
        }
    }
}