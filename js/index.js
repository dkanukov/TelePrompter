(function (){
    let modal = document.getElementById('modal');
    let btnSession = document.getElementById('btn-start');
    let contentInput = document.getElementById('content-input');
    let promptContainer = document.getElementById('prompter-container');
    let btnExit = document.getElementById('exit');
    let btnStart = document.getElementById('start');
    let btnSpeed = document.getElementById('speed')
    let btnStop = document.getElementById('stop');
    let play = true;

    btnSession.addEventListener('click', function (){
        if (contentInput.value){
            modal.classList.add('modal-show')
            promptContainer.innerHTML = contentInput.value.replace(/\n/g, '<br/>');

            btnExit.addEventListener('click', function (){
               modal.classList.remove('modal-show');
            });

            btnStart.addEventListener('click', function (){
                let move = 0;
                function scroll() {
                    promptContainer.style.transform = 'translateY(' + move + 'px)';
                    move--;
                }
                setInterval(scroll, 50);

            });




        }
        else{
            alert("вы ничего не читаете :(");
        }

    });
})();
