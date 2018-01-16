function Modal(options){
    let modal = document.createElement('div');

    function createTitle(text){
        let h2 = document.createElement('h2');
        h2.innerHTML = text;

        return h2;
    }

    function createP(text){
        let p = document.createElement('p');
        p.innerHTML = text;
        return p;
    }

    function createButtonShow(textShow){
        let buttonShow = document.createElement('button');
        buttonShow.classList.add('btn');
        buttonShow.innerHTML = textShow;

        return buttonShow;
    }

    function createButtonHide(textHide){
        let buttonHide = document.createElement('button');
        buttonHide.classList.add('btn');
        buttonHide.innerHTML = textHide;

        return buttonHide;
    }

    function showModal(){
        modal.classList.add('active');
    }

    function hideModal(){
        modal.classList.remove('active');
    }

    this.init = function(){
        modal.classList.add('modal');

        let title = createTitle('Modal Window');
        let p = createP(options.text);
        let buttonShow = createButtonShow(options.buttonShow);
        let buttonHide = createButtonHide(options.buttonHide);

        modal.appendChild(title);
        modal.appendChild(p);
        modal.appendChild(buttonHide);

        options.target.appendChild(modal);
        options.target.appendChild(buttonShow);

        buttonShow.addEventListener('click', showModal);
        buttonHide.addEventListener('click', hideModal);
    };

    this.init();

}

let modal = new Modal({
    target: document.querySelector('.target'),
    text: 'some text for modal',
    buttonShow: 'show modal',
    buttonHide: 'close modal'
});
