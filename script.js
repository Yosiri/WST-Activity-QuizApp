const quizBox = document.getElementById('quizBox');
const openBtn = document.getElementById('OpenQuestion');
const closeBtn = document.getElementById('CloseQuestion');
const submitBtn = document.getElementById('SubmitQuiz');

openBtn.addEventListener('click', function () {
    quizBox.classList.add('show');
});

closeBtn.addEventListener('click', function () {
    quizBox.classList.remove('show');
});

submitBtn.addEventListener('click', function () {
    const answers = {
        q1: 'A',
        q2: 'A',
        q3: 'A',
        q4: 'A',
        q5: 'A'
    };

    let score = 0;

    for (let key in answers) {
        const selected = document.querySelector('input[name="' + key + '"]:checked');
        if (selected && selected.value === answers[key]) {
            score += 1;
        }
    }

    alert('You got ' + score + ' out of 5 correct!');
});
