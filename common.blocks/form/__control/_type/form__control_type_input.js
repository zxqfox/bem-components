modules.define('form', ['i-bem__dom'], function(provide, BEMDOM) {
/**
 * Контрол типа input (текстовое поле ввода)
 * Подмешивается к блоку input
 */
provide(BEMDOM.decl({

    block : 'form',
    elem : 'control',
    modName : 'type',
    modVal : 'input'

}, {}, {

    live : function() {
        this.__base();
        this.liveInitOnBlockEvent('change focus blur', 'input', function(e, data) {
            switch(e.type) {
                case 'change': this.onControlChange(e, data); break;
                case 'focus': this.onControlFocus(e, data); break;
                case 'blur': this.onControlBlur(e, data); break;
            }
        });
    }

}));

});
