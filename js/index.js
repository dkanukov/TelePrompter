(function (){
    let modal = document.getElementById('modal');
    let btnSession = document.getElementById('btn-start');
    let contentInput = document.getElementById('content-input');
    let promptContainer = document.getElementById('prompter-container');
    let btnExit = document.getElementById('exit');
    let btnStart = document.getElementById('start');
    let btnSpeed = document.getElementById('speed')
    let btnStop = document.getElementById('stop');
    let btnFont = document.getElementById('font');
    let fontColorBtn = document.getElementById('font-color');
    let bgColorBtn = document.getElementById('bg-color');
    let restartBtn = document.getElementById('restart');
    let defSpeed = 50;
    let clicked = 0;
    let speedChange = 0;
    let move = 100;

    btnSession.addEventListener('click', function (){
       if (contentInput.value){
           modal.classList.add('modal-show');
           promptContainer.innerHTML = contentInput.value.replace(/\n/g, '<br/>');
       }
       else
           alert('Нет текста!');
    });

    function scroll() {
        promptContainer.style.transform = 'translateY(' + move + 'px)';
        move -= 1;
    }

    function stopScroll(timeId) {
        clearInterval(timeId);
        clicked = 0;
    }

    btnStart.addEventListener('click', function (){
        if (clicked === 0 && speedChange == 0){
            var timeId = setInterval(scroll, defSpeed);
            clicked++;
        }
        else{
            var timeId = setInterval(scroll, defSpeed * btnSpeed.value);
            clicked++;
        }

        btnStop.addEventListener('click', function (){
            stopScroll(timeId);
        });

        btnExit.addEventListener('click', function (){
           stopScroll(timeId);
           modal.classList.remove('modal-show');
        });

        btnSpeed.addEventListener('change', function (){
           clearInterval(timeId);
           var currentSpeed = defSpeed * btnSpeed.value;
           timeId = setInterval(scroll, currentSpeed);
           speedChange++;
        });

    });


    btnFont.addEventListener('change', function (){
        promptContainer.style.fontSize = btnFont.value.toString() + 'em';
    });

    fontColorBtn.addEventListener('change', function (){
        promptContainer.style.color = fontColorBtn.value;
        promptContainer.style.transform = 'translateY(' + move + 'px)';
    });

    bgColorBtn.addEventListener('change', function (){
        modal.style.backgroundColor = bgColorBtn.value;
    });

    restartBtn.addEventListener('click', function (){
        move = 100;
        promptContainer.style.transform = 'translateY(' + move + 'px)';


    });

})();
