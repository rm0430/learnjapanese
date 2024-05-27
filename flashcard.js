document.addEventListener('DOMContentLoaded', () => {
    const words = [
        { word: 'まじ', romaji: 'maji', meaning: '  meaning: really' },
        { word: 'やばい', romaji: 'yabai', meaning: 'meaning: incredible' },
        { word: 'えぐい', romaji: 'egui', meaning: 'meaning: harsh' },
        { word: 'ださい', romaji: 'dasai', meaning: 'meaning: uncool' },
        { word: 'がち', romaji: 'gachi', meaning: 'meaning: serious' },
        { word: 'えもい', romaji: 'emoi', meaning: 'meaning: moved' },
        { word: 'むかつく', romaji: 'mukatsuku', meaning: 'meaning: annoying' },
        { word: 'もてる', romaji: 'moteru', meaning: 'meaning: popular' },
        { word: 'きもい', romaji: 'kimoi', meaning: 'meaning: gross' },
        { word: 'きれる', romaji: 'kireru', meaning: 'meaning: get angry' },
        { word: 'うざい', romaji: 'uzai', meaning: 'meaning: irritating' },
        { word: 'ちょう', romaji: 'cho', meaning: 'meaning: super' },
        { word: 'うける', romaji: 'ukeru', meaning: 'meaning: make to laugh' },
        { word: 'くさ', romaji: 'kusa', meaning: 'meaning: funny' },
        { word: 'ぴえん', romaji: 'pien', meaning: 'meaning: sad' },
    ];

    const flashcardsContainer = document.getElementById('flashcards-container');

    words.forEach(word => {
        const flashcard = document.createElement('div');
        flashcard.classList.add('flashcard');

        flashcard.innerHTML = `
            <div class="flashcard-inner">
                <div class="flashcard-front">
                    <h2>${word.word}</h2>
                </div>
                <div class="flashcard-back">
                    <h3>${word.romaji}</h3>
                    <p>&nbsp;${word.meaning}</p>
                </div>
            </div>
        `;

        flashcard.addEventListener('click', () => {
            flashcard.classList.toggle('flip');
        });

        flashcardsContainer.appendChild(flashcard);
    });
});
