document.addEventListener('DOMContentLoaded', function () {
    var options = {
        strings: ["ROWEN!", "GANIBO.", "Enjoy your stay!"],
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 1000,
        startDelay: 500,
        loop: true
    };

    var typed = new Typed("#typed-output", options);
});