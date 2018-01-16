function Tooltip(options){
    let elem = document.createElement('div');

    let setPosition = function(position){
        switch (position) {
            case 'top':
                elem.style.top = '-30px';
                elem.style.left = '30%';
                break;

            case 'left':
                elem.style.left = '-70px';
                elem.style.top = '30%';
                break;

            case 'right':
                elem.style.right = '-70px';
                elem.style.top = '30%';
                break;

            case 'bottom':
                elem.style.bottom = '-30px';
                elem.style.left = '30%';
                break;
        }
    };

    function show(){
        elem.classList.toggle('active');
    }

    this.init = function(){
        options.target.style.position = 'relative';
        elem.classList.add('tooltip');
        elem.innerHTML = options.content;
        setPosition(options.position);

        options.target.appendChild(elem);

        options.target.addEventListener('click', show);
    };

    this.init();
}

let tooltip = new Tooltip({
    target: document.getElementsByClassName('text')[0],
    content: 'some text',
    position: 'left'
});
