({
    block : 'page',
    title : 'bem-components: select',
    mods : { theme : 'normal' },
    head : [
        { elem : 'css', url : '_simple1.css' },
        { elem : 'js', url : '_simple1.js' }
    ],
    content : {
        block : 'select',
        mods : { mode : 'radio', theme : 'normal', size : 'm', focused : true },
        name : 'select1',
        textMaxWidth : 100,
        optionsMaxHeight : 100,
        options : [
            { val : 1, text : 'first' },
            { val : 2, text : 'second', checked : true },
            { val : 3, text : 'third' },
            { val : 4, text : '4' },
            { val : 5, text : '5' },
            { val : 6, text : '6' },
            { val : 7, text : '7' },
            { val : 8, text : '8' },
            { val : 9, text : '9' },
            { val : 10, text : '10' },
            { val : 11, text : '11' },
            { val : 12, text : '12' },
            { val : 13, text : '13' },
            { val : 14, text : '14' }
        ]
    }
});
