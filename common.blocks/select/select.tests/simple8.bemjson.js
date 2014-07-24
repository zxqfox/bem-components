({
    block : 'page',
    title : 'bem-components: select',
    mods : { theme : 'normal' },
    head : [
        { elem : 'css', url : '_simple8.css' },
        { elem : 'js', url : '_simple8.js' }
    ],
    content : {
        tag : 'div', attrs : { style : 'width : 200px; display : inline-block;' },
        content : {
            block : 'select',
            mods : { mode : 'radio-check', theme : 'normal', size : 'm', width : 'available' },
            name : 'select444',
            text : '—',
            options : [
                { val : 1, text : 'first' },
                { val : 2, text : 'second second second second second second second second' },
                { val : 3, text : 'third' }
            ]
        }
    }
});
