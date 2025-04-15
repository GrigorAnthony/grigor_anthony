window.onscroll = function() {
    const button = document.getElementById('backToTop');
    if (!button) return; // Проверяем, существует ли кнопка
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = 'block'; // Показываем кнопку при прокрутке
    } else {
        button.style.display = 'none'; // Скрываем кнопку
    }
};

// Прокрутка к началу страницы при клике на кнопку
const button = document.getElementById('backToTop');
if (button) {
    button.onclick = function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
}

let currentIndex = 0;
const images = [
    'https://lh3.google.com/u/0/d/1UXrg3u1wy0CGC9ei1fldZLiKZxQcRzcr=w1920-h950-iv1', // Путь к первому изображению
    'https://lh3.google.com/u/0/d/1rinHEWwqR5fZL-6RGnuwCd6xRtcqtljm=w1920-h950-iv1'  // Путь ко второму изображению
];

const sliderImage = document.getElementById('sliderImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Функция обновления изображения
function updateImage() {
    if (sliderImage) {
        sliderImage.src = images[currentIndex];
    }
}

// Проверяем, существуют ли кнопки и изображение
if (sliderImage && prevBtn && nextBtn) {
    // Обработчики событий для кнопок
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length; // Переход к предыдущему изображению
        updateImage();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length; // Переход к следующему изображению
        updateImage();
    });

    // Инициализация изображения при загрузке
    updateImage();
}