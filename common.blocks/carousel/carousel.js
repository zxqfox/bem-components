/**
 * @module carousel
 */

modules.define('carousel', ['i-bem__dom', 'jquery', 'objects'], function(provide, BEMDOM, $, objects) {

/**
 * @exports
 * @class carousel
 * @bem
 */
provide(BEMDOM.decl({ block : this.name }, /** @lends carousel.prototype */{
    onSetMod : {
        'js' : {
            'inited' : function() {
                this._setDefaults();
            }
        }
    },

    _setDefaults : function(){
        var items = this.elem('item'),
            itemsLength = items.length,
            viewItems = this.params.viewItems,
            itemWidth = this.domElem.width() / viewItems,
            innerWidth = itemWidth * itemsLength,
            maxRightPos = -(innerWidth - itemWidth * viewItems);

        this._leftPos = 0;

        this.elem('inner').css({
            width : innerWidth,
            left : 0
        });

        for(var i = 0; i <= itemsLength; i++) {
            $(items[i]).width(itemWidth);
        }

        objects.extend(this.params, {
            innerWidth : innerWidth,
            itemWidth : itemWidth,
            maxRightPos : maxRightPos
        });
    },

    _setLeftPosition : function(pos) {
        this.elem('inner').css('left', pos);
        this._leftPos = pos;
    }
}));

});
