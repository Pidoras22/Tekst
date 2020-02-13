$(document).ready(function() {
    var $element = $('#bubble');
    var phrases = [
        'Здравствуйте дорогой пидорас!',
        'Да,текст анимированный',
        'Сам с себя ору',
        'Да не судите сайт на js ...',
        'Ты пидорасина,',
        'Кек, LLLL',
    ];
    var index = -1;
    (function loopAnimation() {
        index = (index + 1) % phrases.length;
        bubbleText({
            element: $element,
            newText: phrases[index],
            letterSpeed: 70,
            callback: function() {
                setTimeout(loopAnimation, 1000);
            },
        });
    })();
});