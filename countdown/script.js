function Countdown(){
    let secondsRemaining;
    let input;
    let audio;
    let intervalHandler;
    let title = document.getElementById('js-title');

    function createInput(){
        let input = document.createElement('input');
        input.setAttribute('id', 'js-input');
        input.classList.add('counter-input');
        input.setAttribute('type', 'number');
        return input;
    }

    function createButton(){
        let button = document.createElement('button');
        button.innerHTML = 'set time';
        button.classList.add('button');
        return button;
    }

    function getSeconds(data){
        return data;
    }

    function resetPage(){
        document.getElementById('js-input-area').style.opacity = '1';
        title.classList.remove('scale');
        input.value = '';
    }

    function startAudio(){
        audio = document.createElement('audio');
        audio.innerHTML = '<audio autoplay><source src="audio/tick.wav"></audio>';
        document.body.appendChild(audio);
    }

    function tick(){
        let minutes = Math.floor(secondsRemaining / 60);
        let seconds = secondsRemaining - (minutes * 60);

        if (seconds < 10) {
            seconds = '0' + seconds;
        }

        if (minutes < 10) {
            minutes = '0' + minutes;
        }


        title.innerHTML = minutes + ':' + seconds;

        if (secondsRemaining === 0) {
            clearInterval(intervalHandler);

            setTimeout(resetPage, 2000);

            document.body.removeChild(audio);
        }

        secondsRemaining--;
    }

    let startCountDown = function(){
        let inputData = input.value;

        if (inputData === '') {
            return;
        }

        secondsRemaining = getSeconds(inputData);

        intervalHandler = setInterval(tick, 1000);

        document.getElementById('js-input-area').style.opacity = '0';

        startAudio();
    };

    this.init = function(){
        input = createInput();
        let button = createButton();
        let inputArea = document.querySelector('#js-input-area');

        inputArea.appendChild(input);
        inputArea.appendChild(button);

        button.addEventListener('click', function(){
            startCountDown();
        });
    };

    this.init();
}

new Countdown();

