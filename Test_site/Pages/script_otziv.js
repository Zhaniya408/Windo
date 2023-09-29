
document.addEventListener('DOMContentLoaded', function() {
    const reviewForm = document.getElementById('reviewForm');
    const nameInput = document.getElementById('name');
    const messageInput = document.getElementById('message');
    const reviewList = document.getElementById('reviewList');

    reviewForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Получить данные из формы
        const name = nameInput.value;
        const message = messageInput.value;
        // Создать новый элемент списка отзывов
        const reviewItem = document.createElement('li');
        reviewItem.innerHTML = `<i class="fa-solid fa-user"></i> <strong>${name}:</strong> ${message}`;
        // Добавить отзыв к списку
        reviewList.appendChild(reviewItem);
        // Очистить поля формы
        nameInput.value = '';
        messageInput.value = '';
    });
});
