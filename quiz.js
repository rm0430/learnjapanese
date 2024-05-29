/*container を ccontainer に変える*/
document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startbutton');
    const nextButton = document.getElementById('nextbutton');
    const questionContainerElement = document.getElementById('question-container');
    const questionElement = document.getElementById('question');
    const answerButtonElement = document.getElementById('answer-buttons');

    let shuffledQuestions, currentQuestionIndex;

    startButton.addEventListener('click', startGame);
    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        setNextQuestion();
    });

    function startGame() {
        console.log('Game started');
        startButton.classList.add('hide');
        shuffledQuestions = questions.sort(() => Math.random() - 0.5);
        currentQuestionIndex = 0;
        questionContainerElement.classList.remove('hide');
        setNextQuestion();
    }

    function setNextQuestion() {
        resetState();
        showQuestions(shuffledQuestions[currentQuestionIndex]);
    }

    function showQuestions(question) {
        console.log('Showing question:', question);
        questionElement.innerText = question.question;
        question.answers.forEach(answer => {
            const button = document.createElement('button');
            button.innerText = answer.text;
            button.classList.add('btn');
            if (answer.correct) {
                button.dataset.correct = answer.correct;
            }
            button.addEventListener('click', selectAnswer);
            answerButtonElement.appendChild(button);
        });
    }

    function resetState() {
        nextButton.classList.add('hide');
        while (answerButtonElement.firstChild) {
            answerButtonElement.removeChild(answerButtonElement.firstChild);
        }
    }

    function selectAnswer(e) {
        const selectedButton = e.target;
        const correct = selectedButton.dataset.correct === 'true';
        setStatusClass(document.body, correct);
        Array.from(answerButtonElement.children).forEach(button => {
            setStatusClass(button, button.dataset.correct === 'true');
        });
        if (shuffledQuestions.length > currentQuestionIndex + 1) {
            nextButton.classList.remove('hide');
        } else {
            startButton.innerText = 'Restart';
            startButton.classList.remove('hide');
        }
    }

    function setStatusClass(element, correct) {
        clearStatusClass(element);
        if (correct) {
            element.classList.add('correct');
        } else {
            element.classList.add('wrong');
        }
    }

    function clearStatusClass(element) {
        element.classList.remove('correct');
        element.classList.remove('wrong');
    }

    const questions = [
        {
            /*hiragana*/
            question: 'What is the sound of え?',
            answers: [
                { text: 'e', correct: false },
                { text: 'u', correct: false },
                { text: 'a', correct: true },
                { text: 'i', correct: false }
            ]
        },
        {
            question: 'What is the sound of を?',
            answers: [
                { text: 'ha', correct: false },
                { text: 'ni', correct: false },
                { text: 'su', correct: false },
                { text: 'wo', correct: true }
            ]
        },
        {
            question: 'What is the sound of ひ?',
            answers: [
                { text: 'hi', correct: true },
                { text: 'ka', correct: false },
                { text: 'n', correct: false },
                { text: 'te', correct: false }
            ]
        },
        {
            question: 'What is the sound of ね?',
            answers: [
                { text: 'si', correct: false },
                { text: 'wa', correct: false },
                { text: 'ne', correct: true },
                { text: 'ku', correct: false }
            ]
        },
        {
            question: 'What is the sound of け?',
            answers: [
                { text: 'ku', correct: true },
                { text: 'ke', correct: false },
                { text: 'so', correct: false },
                { text: 'ni', correct: false }
            ]
        },
         /*katakana*/
         {
         question: 'What is the sound of ノ?',
         answers: [
             { text: 'no', correct: true },
             { text: 'ru', correct: false },
             { text: 'si', correct: false },
             { text: 'ha', correct: false }
         ]
        },
        {
         question: 'What is the sound of ン?',
         answers: [
             { text: 'i', correct: false },
             { text: 'o', correct: false },
             { text: 'n', correct: true },
             { text: 'so', correct: false }
         ]
        },
        {
         question: 'What is the sound of フ?',
         answers: [
             { text: 'nu', correct: false },
             { text: 'wo', correct: false },
             { text: 'ka', correct: false },
             { text: 'fu', correct: true }
         ]
        },
        {
         question: 'What is the sound of ヨ?',
         answers: [
             { text: 'su', correct: false },
             { text: 'ni', correct: false },
             { text: 'yo', correct: true },
             { text: 'ta', correct: false }
         ]
        },
        {
         question: 'What is the sound of ソ?',
         answers: [
             { text: 'chi', correct: false },
             { text: 'so', correct: true },
             { text: 'n', correct: false },
             { text: 'wa', correct: false }
         ]
        },
        {
         /*words*/
         question: 'What does 同級生(どうきゅうせい) mean?',
         answers: [
             { text: 'family', correct: false },
             { text: 'female', correct: false },
             { text: 'adult', correct: false },
             { text: 'classmate', correct: true }
         ]
        },
        {
         question: 'What does 牛乳(ぎゅうにゅう) mean?',
         answers: [
             { text: 'milk', correct: true },
             { text: 'water', correct: false },
             { text: 'bread', correct: false },
             { text: 'rice', correct: false }
         ]
        },
        {
         question: 'What 今年(ことし) does mean?',
         answers: [
             { text: 'today', correct: false },
             { text: 'this year', correct: true },
             { text: 'Friday', correct: false },
             { text: 'tomorrow', correct: false }
         ]
        },
        {
         question: 'What does 警察署(keisatsusho) mean?',
         answers: [
             { text: 'post office', correct: false },
             { text: 'reception', correct: false },
             { text: 'police office', correct: true },
             { text: 'hospital', correct: false }
         ]
        },
        {
         question: 'What does 紫(murasaki) mean?',
         answers: [
             { text: 'yellow', correct: false },
             { text: 'red', correct: false },
             { text: 'green', correct: false },
             { text: 'purple', correct: true }
         ]
        },
        {
         question: 'What is younger sister in Japanese?',
         answers: [
             { text: '妹(immouto)', correct: true },
             { text: '彼女(kanojo)', correct: false },
             { text: '大人(otona)', correct: false },
             { text: '弟(otouto)', correct: false }
         ]
        },
        {
         question: 'What is cheese in Japanese??',
         answers: [
             { text: 'コーヒー(ko0hi)', correct: false },
             { text: 'チーズ(cheezu)', correct: true },
             { text: '卵(tamago)', correct: false },
             { text: 'ご飯(gohan)', correct: false }
         ]
        },
        {
         question: 'what is tomorrow in Japanese?',
         answers: [
             { text: '先週(senshu)', correct: false },
             { text: '来年(rainen)', correct: false },
             { text: '明日(ashita)', correct: true },
             { text: '九月(kugatsu)', correct: false }
         ]
        },
        {
         question: 'What is airport in Japanese?',
         answers: [
             { text: '空港(kouku)', correct: true },
             { text: 'ホテル(hoteru)', correct: false },
             { text: '駅(eki)', correct: false },
             { text: '店(mise)', correct: false }
         ]
        },
        {
         question: 'What is brown in Japanese?',
         answers: [
             { text: '赤(aka)', correct: false },
             { text: '茶色(chairo)', correct: true },
             { text: 'ピンク(pinku)', correct: false },
             { text: '紫(murasaki)', correct: false }
         ]
        },
        /*verb*/
        {
            question: 'What does 起きる(okiru) mean?',
            answers: [
                { text: 'to wake up', correct: true },
                { text: 'to stand up', correct: false },
                { text: 'to play', correct: false },
                { text: 'to read', correct: false }
            ]
        },
        {
            question: 'What does 撮る(toru) mean?',
            answers: [
                { text: 'to wait', correct: false },
                { text: 'to sit down', correct: false },
                { text: 'to take a picture', correct: true },
                { text: 'to listen', correct: false }
            ]
        },

        {
            question: 'What does 食べる(taberu) mean?',
            answers: [
                { text: 'to drink', correct: false },
                { text: 'to see', correct:false  },
                { text: 'to eat', correct: true },
                { text: 'to return', correct: false }
            ]
        },

        {
            question: 'What is to play in Japanese?',
            answers: [
                { text: '立つ(tatsu)', correct: false },
                { text: '待つ(matsu)', correct: false },
                { text: '飲む(nomu)', correct: false },
                { text: '遊ぶ(asobu)', correct: true }
            ]
        },

        {
            question: 'What is to meet in Japanese?',
            answers: [
                { text: '行く(iku)', correct: false },
                { text: '会う(au)', correct: true },
                { text: '話す(hanasu)', correct: false },
                { text: '泳ぐ(oyogu)', correct: false }
            ]
        },

        {
            question: 'What is to write in Japanese?',
            answers: [
                { text: '書く(kaku)', correct: true },
                { text: '聞く(kiku)', correct: false },
                { text: '食べる(taberu)', correct: false },
                { text: '寝る(neru)', correct: false }
            ]
        },

        


        {
         /*phrase*/
         question: 'What does こんにちは mean?',
         answers: [
             { text: 'Thank you', correct: false },
             { text: 'Good morning', correct: false },
             { text: 'Hello', correct: true },
             { text: 'Sorry', correct: false }
         ]
        },
        {
         question: 'What does 〜から来ました mean?',
         answers: [
             { text: 'What is your name?', correct: false },
             { text: 'My name is〜', correct: false },
             { text: 'I am〜', correct: false },
             { text: 'I came from〜', correct: true }
         ]
        },
        {
         question: 'What does すみません mean?',
         answers: [
             { text: 'Excuse me/Sorry', correct: true },
             { text: 'I don’t understand', correct: false },
             { text: 'Hello', correct: false },
             { text: 'Good evening', correct: false }
         ]
        },
        {
         question: 'What does 今何時ですか(ima nanji desuka) mean?',
         answers: [
             { text: 'What is this?', correct: false },
             { text: 'What time is it?', correct: true },
             { text: 'How much is it?', correct: false },
             { text: 'Can I order?', correct: false }
         ]
        },
        {
         question: 'How to say "Where is the bathroom?" in Japanese?',
         answers: [
             { text: '駅はどこですか?(eki wa doko desuka)', correct: false },
             { text: 'わかりません(wakari masen)', correct: false },
             { text: 'これはなんですか?(kore wa nandesuka)', correct: false },
             { text: 'トイレはどこですか?(toire wa doko desuka)', correct: true }
         ]
        },
        {
         question: 'How to say "Please" in Japanese?',
         answers: [
             { text: 'ありがとうございます(arigato gozaimasu)', correct: false },
             { text: 'お願いします(onegai shimasu)', correct: true },
             { text: 'わかりません(wakarimasen)', correct: false },
             { text: 'おはようございます(ohayo gozaimasu)', correct: true }
         ]
        },
        {
         question: 'How to say "I don’t understand" in Japanese?',
         answers: [
             { text: 'すみません(sumimasen)', correct: false },
             { text: 'これください(kore kudasai)', correct: false },
             { text: 'わかりません(wakarimasen)', correct: true },
             { text: 'ここはどこですか?(koko wa doko desuka)', correct: false }
         ]
        },
        {
         question: 'How to say "Can I get this?" in Japanese?',
         answers: [
             { text: 'これください(kore kudasai)', correct: true },
             { text: 'お会計お願いします(okaikei onegai shimasu)', correct: false },
             { text: '今何時ですか?(ima nanji desuka)', correct: false },
             { text: 'こんばんは(konbanwa)', correct: false }
         ]
        },
        
        {
         /*Kanji*/
         question: 'What does 土 mean?',
         answers: [
             { text: 'soil', correct: true },
             { text: 'woods', correct: false },
             { text: 'river', correct: false },
             { text: 'fire', correct: false }
         ]
        },
        {
         question: 'What does 雨 mean?',
         answers: [
             { text: 'sky', correct: true },
             { text: 'moon', correct: false },
             { text: 'rain', correct: true },
             { text: 'stone', correct: false }
         ]
        },
        {
         question: 'What does 耳 mean?',
         answers: [
             { text: 'ear', correct: true },
             { text: 'female', correct: false },
             { text: 'gold', correct: false },
             { text: 'eye', correct: false }
         ]
        },
        {
         question: 'What does 車 mean?',
         answers: [
             { text: 'dog', correct: false },
             { text: 'car', correct: true },
             { text: 'small', correct: false },
             { text: 'exit', correct: false }
         ]
        },
        {
         question: 'What does 糸 mean?',
         answers: [
             { text: 'look', correct: false },
             { text: 'children', correct: false },
             { text: 'grass', correct: false },
             { text: 'string', correct: true }
         ]
        },
        {
         /*slang*/
         question: 'What does やばい mean?',
         answers: [
             { text: 'insane', correct: true },
             { text: 'annoying', correct: false },
             { text: 'serious', correct: false },
             { text: 'gross', correct: false }
         ]
        },
        {
         question: 'What does うける mean?',
         answers: [
             { text: 'popular', correct: false },
             { text: 'gross', correct: false },
             { text: 'make to laugh', correct: true },
             { text: 'insane', correct: false }
         ]
        },
        {
         question: 'What does くさ mean?',
         answers: [
             { text: 'annoying', correct: false },
             { text: 'funny', correct: true },
             { text: 'serious', correct: false },
             { text: 'sad', correct: false }
         ]
        },
        {
         question: 'What does ぴえん mean?',
         answers: [
             { text: 'sad', correct: true },
             { text: 'irritating', correct: false },
             { text: 'really', correct: false },
             { text: 'super', correct: false }
         ]
        },

        {
         question: 'What does えもい mean?',
         answers: [
             { text: 'get angry', correct: false },
             { text: 'harash', correct: false },
             { text: 'moved', correct: true },
             { text: 'uncool', correct: false }
         ]
        },
    ];
});