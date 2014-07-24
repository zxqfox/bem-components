({
    block : 'page',
    title : 'bem-components: select',
    mods : { theme : 'normal' },
    head : [
        { elem : 'css', url : '_simple3.css' },
        { elem : 'js', url : '_simple3.js' }
    ],
    content : {
        block : 'select',
        mods : { mode : 'check', theme : 'normal', size : 'm' },
        name : 'select3',
        text : '—',
        options : [
            { val : 1, text : 'first' },
            { val : 2, text : 'second', checked : true },
            { val : 3, text : 'third', checked : true }
        ]
    }
});
