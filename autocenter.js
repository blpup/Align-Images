jQuery.fn.extend({
    AutoCenter: function () {
        var obj = $(this)
        var children = obj.children();
        var images = obj.find($('img'));
        if (images.length <= -1) 
            return;
        for (var i = 0; i < images.length; i++) {
            var currentItem = images.eq(i)
            var currWidth = currentItem.width();
            var currHeight = currentItem.height();
            if (images.eq(i).parent().css('position') == 'static') {
                images.eq(i).parent().css('position', 'relative');
            };
            images.eq(i).css({
                'position': 'absolute',
                'top': '50%',
                'left': '50%',
                'margin-left':-currWidth/2,
                'margin-top':-currHeight/2
            });
            
        };
        
      return obj
    }
});