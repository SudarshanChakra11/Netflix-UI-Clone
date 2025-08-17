let currentPosition = 0;
const cardWidth = 200 + 10; 
const visibleCards = 5;
const totalCards = 10; 
const track = document.getElementById('carousel-track');


function moveLeft() {
    if (currentPosition > 0) {
        currentPosition--;
        track.style.transform = `translateX(-${currentPosition * cardWidth}px)`;
    }
}


function moveRight() {
    if (currentPosition < totalCards - visibleCards) {
        currentPosition++;
        track.style.perform = `translateX(-${currentPosition * cardWidth}px)`;
    }
}


const faqEntries = document.querySelectorAll('.faq-entry');

faqEntries.forEach(faqEntry => {
    
    faqEntry.addEventListener('click', () => {
        
        faqEntry.classList.toggle('active');

       
        const toggleIcon = faqEntry.querySelector('.toggle-icon');
        toggleIcon.textContent = faqEntry.classList.contains('active') ? '-' : '+';
    });
});