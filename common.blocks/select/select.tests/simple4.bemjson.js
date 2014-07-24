({
    block : 'page',
    title : 'bem-components: select',
    mods : { theme : 'normal' },
    head : [
        { elem : 'css', url : '_simple4.css' },
        { elem : 'js', url : '_simple4.js' }
    ],
    content : {
        block : 'select',
        mods : { mode : 'check', theme : 'normal', size : 'm' },
        name : 'select4',
        options : [
            { val : { id : 1 }, text : 'first', checkedText : '1' },
            { val : { id : 2 }, text : 'second', checkedText : '2', checked : true },
            { val : { id : 3 }, text : 'third', checkedText : '3', checked : true }
        ]
    }
});
