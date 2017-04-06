$(document).ready(function() {
    var countDownDate = new Date("Jan 5, 2019 11:37:25").getTime();

    var updateClock = setInterval(function() {
        var currentTime = new Date().getTime();
        var distance = countDownDate - currentTime;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $('#days').text(days);
        $('#hours').text(hours);
        $('#minutes').text(minutes);
        $('#seconds').text(seconds);

    }, 1000);
});