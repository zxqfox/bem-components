({
    block : 'page',
    title : 'bem-components: select',
    mods : { theme : 'normal' },
    head : [
        { elem : 'css', url : '_simple6.css' },
        { elem : 'js', url : '_simple6.js' }
    ],
    content : {
        block : 'select',
        mods : { mode : 'check', theme : 'normal', size : 'm' },
        text : 'empty',
        options : [
            {
                group : [
                    { val : 1, text : 'first' },
                    { val : 2, text : 'second', checked : true },
                    { val : 3, text : 'third' }
                ],
                title : 'title of group 1'
            },
            {
                group : [
                    { val : 4, text : 'fourth' },
                    { val : 5, text : 'fifth', checked : true },
                    { val : 6, text : 'sixth', disabled : true }
                ]
            }
        ]
    }
});
