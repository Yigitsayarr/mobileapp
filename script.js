const cardsContainer = document.getElementById('cards-container');

const words = [
    { english: 'Hello', turkish: 'Merhaba' },
    { english: 'Goodbye', turkish: 'Hoşçakal' },
    { english: 'Thank you', turkish: 'Teşekkür ederim' },
    { english: 'Sorry', turkish: 'Üzgünüm' },
    { english: 'Yes', turkish: 'Evet' },
    { english: 'No', turkish: 'Hayır' },
];

// Shuffle function
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Create cards
function createCards() {
    shuffle(words);
    words.forEach(word => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.textContent = word.english;
        card.addEventListener('click', () => flipCard(card, word.turkish));
        cardsContainer.appendChild(card);
    });
}

// Flip card
function flipCard(card, translation) {
    if (!card.classList.contains('flipped')) {
        card.textContent = translation;
        card.classList.add('flipped');
    } else {
        card.textContent = words.find(word => word.turkish === translation).english;
        card.classList.remove('flipped');
    }
}

// Initialize game
createCards();
