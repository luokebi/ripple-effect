(function($) {
    var defaultOption = {
        backgroundColor: "#B8E0E0"
    };

    $.fn.rippleEffect = function(opt) {

        return this.each(function() {
            var $this = $(this);
            var option = $.extend({}, defaultOption, opt || {});
            console.log(option)
            
            $this.on('click', function(e) {
                var ink = $this.find('.ink');

                if (ink.length === 0) {
                    // for round button
                    var inkWarpper = $('<div class="ink-wrapper"></div>');
                    ink = $('<span class="ink"></span>');
                    inkWarpper.prepend(ink);
                    $this.prepend(inkWarpper);
                }
                
                //incase of quick double clicks stop the previous animation
                ink.removeClass("ink-animate").css('background-color', option.backgroundColor);

                if (!ink.height() && !ink.width()) {
                    var d = Math.max($this.outerWidth(), $this.outerHeight());
                    ink.css({height: d, width:d});
                }

                var x = e.pageX - $this.offset().left - ink.width()/2,
                    y = e.pageY - $this.offset().top - ink.height()/2;

                ink.css({top: y + 'px', left: x + 'px'}).addClass("ink-animate");
            });
 
        });
 
    }
 
})(jQuery);