/**
 * @module carousel
 */

modules.define('carousel', function(provide, Carousel) {

/**
 * @exports
 * @class carousel
 * @bem
 */
provide(Carousel.decl({ modName : 'switches', modVal : true }, /** @lends carousel.prototype */{
    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);

                var _this = this,
                    radioGroup = this.findBlockInside('radio-group'),
                    itemWidth = this.params.itemWidth;

                radioGroup.on('change', function() {
                    var leftPos = -(itemWidth * radioGroup.getVal());

                    _this._setLeftPosition(leftPos);
                });

                this.on('slide', function() {
                    var itemIndex = -(this._leftPos / itemWidth);
                    radioGroup.setVal(itemIndex);
                });
            }
        }
    }
}));
});
