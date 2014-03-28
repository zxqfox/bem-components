modules.define('i-bem__dom', ['next-tick'], function(provide, nextTick, BEMDOM) {
/**
 * Форма
 */
BEMDOM.decl('form', {

    onSetMod : {

        /**
         * Модификатор, переводящий форму в неактивное состояние
         * @param {String} modName имя модификатора ('disabled')
         * @param {String} modVal значение модификатора (true|false)
         */
        'disabled' : function(modName, modVal) {
            this.elemInstances('control').forEach(function(control) {
                control.setMod(modName, modVal);
            });
        }

    },

    /**
     * Сериализует форму
     * @returns {*}
     */
    getVal : function() {
        return this.elemInstances('control').reduce(function(res, control) {
            res[control.getName()] = control.getVal();
        }, {});
    },

    /**
     * Заполняет форму данными
     * На время заполнения форма блокируется от лишних операций обновления с помощью установки модификатора _locked
     * @param {Object} val данные (если не передан - берется из параметра fillData)
     */
    setVal : function(val) {
        this
            .elemInstances('control')
            .forEach(function(control) {
                control.setVal(val[control.getName()]);
            });

        this.emit('change', val); // TODO сделать один change
    }

}, {

    live : true

});

provide(BEMDOM);

});
