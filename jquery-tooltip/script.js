(function(){
    let settings = {
        duration: '300'
    };

    //let self = this;

    function createElement(parent){
        let elem = $('<div></div>').addClass('tooltip');
        let parentPosition = $(parent).data('position');

        switch (parentPosition){
            case 'top':
                elem.css({
                    left: '50%',
                    transform: 'translateX(-50%)'
                });
                break;

            case 'bottom':
                elem.css({
                    left: '50%',
                    transform: 'translateX(-50%)'
                });
                break;

            case 'left':
                elem.css({
                    top: '50%',
                    transform: 'translateY(-50%)'
                });
                break;

            case 'right':
                elem.css({
                    top: '50%',
                    transform: 'translateY(-50%)'
                });
                break;
        }

        return elem.css(parentPosition, 0).text($(parent).data('message'));
    }

    function show(){
        $(this).children().addClass('active');
    }

    function hide(){
        console.log(settings['duration']);
        let self = this;
        setTimeout(function(){
            $(self).children().removeClass('active');
        });
    }

    $.fn.jqueryTooltip = function(options){
        settings = $.extend(settings, options);

        return this.each(function(){
            $(this).css('position', 'relative').append(createElement(this));
            $(this).on('mouseover', show).on('mouseout', hide);
        });
    };

})(jQuery);
