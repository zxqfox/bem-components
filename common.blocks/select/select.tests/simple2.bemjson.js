({
    block : 'page',
    title : 'bem-components: select',
    mods : { theme : 'normal' },
    head : [
        { elem : 'css', url : '_simple2.css' },
        { elem : 'js', url : '_simple2.js' }
    ],
    content : {
        block : 'select',
        mods : { mode : 'radio-check', theme : 'normal', size : 'm' },
        name : 'select2',
        text : '—',
        options : [
            { val : 1, text : 'first' },
            { val : 2, text : 'second' },
            { val : 3, text : 'third' }
        ]
    }
});
