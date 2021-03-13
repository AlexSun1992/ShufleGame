'use strict';

        let over = document.querySelector('.GAMEOVER');

        let ready = document.querySelector('.form__submit');

        let start = document.querySelector('.playground-btn--start');

        let finish = document.querySelector('.playground-btn--finish');

        let words = [

            'машина', 'квартира', 'дача', 'программист', 'инженер', 'архитектор','собака',

        'ипотека','прокурор','следователь','лягушка','болото', 'суд','конфета','слон','бегемот','хобот',

            'пьеса', 'монография','поэзия','композитор', 'дирижер','комедия','трагедия'

        ];

        let gameOver = 'GameOver'

        let use = document.querySelector('.setting__use')

        let gameResult = document.querySelector('.game-result');

        let timer = document.querySelector('.playground-timer');

        let form = document.querySelector('.form');

        let answer = document.querySelector('.form__answer');

        let position = document.querySelector('.position');

        let answerSubmit = document.querySelector('.form__submit');

        let counter = 0;

        let mistakes = 0;

        let rights = document.querySelector('.playground-rights');

        let wrongs = document.querySelector('.playground-mistakes');

        let currentTime = parseFloat(timer.textContent);

        let targetArray = [];

        let setSubmit = document.querySelector('.setting__submit');

        let Amount = document.querySelector('.Amount');

        let TimeRound = document.querySelector('.TimeRound');

        let GameOver = 'GAME OVER';

        let again = document.querySelector('.playground-btn--again');

        let playgroundSet = document.querySelector('.playground__set');

        let playGroundTimePass = document.querySelector('.playground__time');

        let playGroundAttempt = document.querySelector('.playground__attempt');

        let playgroundPossible = document.querySelector('.playground-possible__number');

        let possibleMistake = 3;

        let playgroundTime = document.querySelector('.playground-roundTime__time');

        let timeRound = 10;

        playgroundSet.addEventListener('click',function(e){

            e.preventDefault();

            timeRound = playGroundTimePass.value * 1;

            playgroundTime.textContent = timeRound;

            possibleMistake = playGroundAttempt.value * 1

            playgroundPossible.textContent = possibleMistake;

        })

        playgroundTime.textContent = timeRound;

        playgroundPossible.textContent = possibleMistake;

        start.addEventListener('click',function(e){

            start.setAttribute('disabled',true)

            GameStart()

        })


        again.addEventListener('click',function(){

            window.location.reload()

        })

            function GameStart() {

            Begin()

            let interval = setInterval(function () {

            if (currentTime >= 0) {

            timer.textContent = ++currentTime;

            }

             if (currentTime > timeRound) {

            clearInterval(interval)

            currentTime = 0;

            timer.textContent = currentTime

             Remove();

            RenderResult();

                 Finish(gameOver);

                 finish.setAttribute('disabled',true);

                 again.removeAttribute('disabled');

                 ready.setAttribute('disabled',true);
            }

            }, 1000);

            finish.addEventListener('click',function(){

            ready.setAttribute('disabled',true)

            console.log(ready);

            clearInterval(interval)

            currentTime = 0;

            timer.textContent = currentTime;

            targetArray.length = 0;

            answer.value = ''

            Remove()

            finish.setAttribute('disabled',true)

            again.removeAttribute('disabled')

             RenderResult()

                Finish(gameOver);

            });

            answerSubmit.addEventListener('click',function(e){

            e.preventDefault()

            if(answer.value === targetArray[0]){

                currentTime = 0;

                timer.content = currentTime

                Remove()

                 targetArray.length = 0;

                Begin()

                rights.textContent = ++counter;

                answer.value = '';

                console.log('Right')
            }

            else{

                currentTime = 0;

                timer.content = currentTime

                Remove()

                targetArray.length = 0;

                Begin()

                let amountMistakes = ++mistakes;

                wrongs.textContent = amountMistakes;

                answer.value = '';


                if(mistakes > possibleMistake){

                    clearInterval(interval)

                    Remove()

                    RenderResult()

                    Finish(gameOver);

                    ready.setAttribute('disabled',true);

                    finish.setAttribute('disabled',true);

                    again.removeAttribute('disabled')

                }

            }

        })
    }


        function Remove(){

        let group = document.querySelectorAll('.position__item');

        for(let i = 0; i < group.length; i++){

        group[i].remove()

         }

        }


        function Begin(){

        Word()

        Rand()

        Insert()

        }


            function Word() {

            let word = Math.floor(Math.random() * words.length);

            targetArray.push(words[word])

            return words[word]

        }


                function Rand(){

                let targetWord = targetArray[0];

                let shuffleWorld = targetWord.split('').sort(function(){return 0.5 - Math.random()});

                targetArray.push(shuffleWorld);

                }



                function Insert(){

                let result = targetArray[1];

                result.forEach( (i) => {

                let item = document.createElement('li');

                item.innerHTML = i;

                item.classList.add('position__item')

                position.insertAdjacentElement('afterbegin',item)

                })

                }


                function Finish(word){

                     let finishWord = word.split('');

                     let html = finishWord.map(function(item){

                         return '<li class="position__item">' + item  + '</li>';

                     })
                    position.insertAdjacentHTML('afterbegin',html.join(' '));
                }


            function RenderResult(){

            let gameResult = document.querySelector('.playground-result');

            let $el = document.createElement('div');

            $el.classList.add('playground-result__inner');

            let rights = document.createElement('h3');

            let wrongs = document.createElement('h3');

            rights.textContent = `Количество верных ответов:${counter}`;

            wrongs.textContent = `Количество ошибок: ${mistakes}`;

            gameResult.insertAdjacentElement('afterbegin',$el);

            $el.insertAdjacentElement('afterbegin',rights);

            $el.insertAdjacentElement('afterbegin',wrongs);

            let title = document.createElement('h2');

            title.textContent = 'Результаты игры:';

            $el.insertAdjacentElement('afterbegin',title);

        }






