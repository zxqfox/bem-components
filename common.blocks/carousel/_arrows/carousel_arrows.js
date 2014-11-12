/**
 * @module carousel
 */

modules.define('carousel', ['jquery'], function(provide, $, Carousel) {

/**
 * @exports
 * @class carousel
 * @bem
 */
provide(Carousel.decl({ modName : 'arrows', modVal : true }, /** @lends carousel.prototype */{
    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);

                var _this = this,
                    arrows = this.elem('arrow');

                arrows.on('pointerclick', function() {

                    var arrow = $(this),
                        direction = _this.getMod(arrow, 'direction');

                    _this._changeSlide(direction);
                });
            }
        }
    },

    _changeSlide : function(direction) {

        var params = this.params,
            itemWidth = params.itemWidth,
            maxRightPos = -(params.innerWidth - itemWidth * params.viewItems),
            directionOffset = direction === 'next'? 1 : -1,
            leftPos = this._leftPos - itemWidth * directionOffset;

        if((leftPos > 0 ) || (leftPos < maxRightPos)) return;

        this._setLeftPosition(leftPos);
        this.emit('slide');
    }
}));
});
