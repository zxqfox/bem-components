modules.require(['i-bem__dom'], function(BEMDOM) {
/**
 * Инпут типа input (текстовое поле ввода)
 * Подмешивается к блоку input
 */
BEMDOM.decl({

    block : 'form',
    elem : 'input',
    modName : 'type',
    modVal : 'input'

}, {}, {

    live : function() {

        this.__base();
        this.liveInitOnBlockEvent('change focus blur', 'input', function(e, data) {
            switch(e.type) {
                case 'change': this.onInputChange(e, data); break;
                case 'focus': this.onInputFocus(e, data); break;
                case 'blur': this.onInputBlur(e, data); break;
            }
        });

    }

});

});
