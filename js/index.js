(function (){
    let modal = document.getElementById('modal');
    let btnSession = document.getElementById('btn-start');
    let contentInput = document.getElementById('content-input');
    let promptContainer = document.getElementById('prompter-container');
    let btnExit = document.getElementById('exit');
    let btnStart = document.getElementById('start');
    let btnSpeed = document.getElementById('speed')
    let btnStop = document.getElementById('stop');
    let play;
    let speed = 50;
    let move = 0;

    btnSession.addEventListener('click', function (){
        if (contentInput.value){
            modal.classList.add('modal-show')
            promptContainer.innerHTML = contentInput.value.replace(/\n/g, '<br/>');
        }
        else{
            alert("вы ничего не читаете :(");
        }

    });

    btnStart.addEventListener('click', function (){
            let timeId = setInterval(scroll, speed);
            btnSpeed.addEventListener('change', function (){
                speed = 100 - btnSpeed.value;
                clearInterval(timeId);
                timeId = setInterval(scroll, speed);
            });
            btnStop.addEventListener('click', function (){
               console.log('stop');
               clearInterval(timeId);
            });
            function scroll() {
                promptContainer.style.transform = 'translateY(' + move + 'px)';
                move--;
            }
    });

    btnExit.addEventListener('click', function (){
        modal.classList.remove('modal-show');
    });


})();
