const circles = document.querySelectorAll('.circle');
const infoDisplay = document.getElementById('info-display');

circles.forEach(circle => {
    circle.addEventListener('mouseover', () => {
        const name = circle.getAttribute('data-name');
        infoDisplay.textContent = name;
    });

    circle.addEventListener('mouseout', () => {
        infoDisplay.textContent = 'Equipe ByteGenius';
    });
});