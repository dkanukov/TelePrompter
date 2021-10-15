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
    let defSpeed = 50;
    let clicked = 0;
    let move = 0;

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
        if (clicked === 0){
            var timeId = setInterval(scroll, defSpeed);
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
           let currentSpeed = defSpeed * btnSpeed.value;
           timeId = setInterval(scroll, currentSpeed);
        });

    });


    btnFont.addEventListener('change', function (){
        promptContainer.style.fontSize = btnFont.value.toString() + 'em';
        console.log('lol');
    });

    fontColorBtn.addEventListener('change', function (){
        promptContainer.style.color = fontColorBtn.value;
    });

    bgColorBtn.addEventListener('change', function (){
        modal.style.backgroundColor = bgColorBtn.value;
    });


//
//     btnSession.addEventListener('click', function (){
//         if (contentInput.value){
//             modal.classList.add('modal-show')
//             promptContainer.innerHTML = contentInput.value.replace(/\n/g, '<br/>');
//         }
//         else{
//             alert("вы ничего не читаете :(");
//         }
//
//     });
//
//     btnStart.addEventListener('click', function (){
//             let timeId = setInterval(scroll, defSpeed);
//             btnSpeed.addEventListener('change', function (){
//                 defSpeed = 100 - btnSpeed.value;
//                 clearInterval(timeId);
//                 timeId = setInterval(scroll, defSpeed);
//             });
//             btnStop.addEventListener('click', function (){
//                clearInterval(timeId);
//             });
//             function scroll() {
//                 promptContainer.style.transform = 'translateY(' + move + 'px)';
//                 move--;
//             }
//     });
//
//     btnFont.addEventListener('change', function (){
//         console.log(size);
//         size = size + btnFont.value;
//         promptContainer.setAttribute('style', 'font-size:' + size + 'px');
//     });
//
//     btnExit.addEventListener('click', function (){
//         modal.classList.remove('modal-show');
//     });
//
})();
