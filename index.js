// Отримання всіх елементів, які мають з'явитися при прокручуванні
var elements = document.querySelectorAll('.element');

// Додаємо прослуховувач подій для прокрутки
window.addEventListener('scroll', function() {
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var position = element.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;
        
        // Якщо елемент майже видимий на екрані
        if (position < windowHeight * 0.75) {
            element.classList.add('visible');
        }
    }
});