(function (){
    let modal = document.getElementById('modal');
    let btnStart = document.getElementById('btn-start');
    let contentInput = document.getElementById('content-input');
    let promptContainer = document.getElementById('prompter-container');
    let btnExit = document.getElementById('exit');

    btnStart.addEventListener('click', function (){
        if (contentInput.value){
            modal.classList.add('modal-show')
            promptContainer.innerHTML = contentInput.value.replace(/\n/g, '<br/>');

            btnExit.addEventListener('click', function (){
               modal.classList.remove('modal-show');
            });


        }
        else{
            alert("вы ничего не читаете :(");
        }

    });
})();
