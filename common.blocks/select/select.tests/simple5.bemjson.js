({
    block : 'page',
    title : 'bem-components: select',
    mods : { theme : 'normal' },
    head : [
        { elem : 'css', url : '_simple5.css' },
        { elem : 'js', url : '_simple5.js' }
    ],
    content : {
        block : 'select',
        mods : { mode : 'check', theme : 'normal', size : 'm' },
        name : 'select5',
        text : '—',
        options : [
            {
                val : { id : 1 },
                text : 'Twitter',
                checkedText : 'tw',
                icon : { block : 'icon', mods : { social : 'twitter' } }
            },
            {
                val : { id : 2 },
                text : 'VKontakte',
                checkedText : 'vk',
                icon : { block : 'icon', mods : { social : 'vk' } },
                checked : true
            }
        ]
    }
});
