const generateBtn = document.getElementById('generate-btn');
const numbersContainer = document.getElementById('numbers');
const themeToggle = document.getElementById('theme-toggle');

generateBtn.addEventListener('click', () => {
    const numbers = [];
    while (numbers.length < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }
    numbers.sort((a, b) => a - b);

    numbersContainer.innerHTML = '';

    const colors = ['number-1', 'number-2', 'number-3', 'number-4', 'number-5', 'number-6'];
    const shuffledColors = colors.sort(() => Math.random() - 0.5);

    numbers.forEach((number, index) => {
        const numberEl = document.createElement('div');
        numberEl.classList.add('number', shuffledColors[index]);
        numberEl.textContent = number;
        numbersContainer.appendChild(numberEl);
    });
});

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
