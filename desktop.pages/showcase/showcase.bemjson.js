({
    block : 'page',
    title : 'Showcase',
    mods : { theme : 'islands' },
    head : [
        { elem : 'css', url : '_showcase.css' },
        { elem : 'js', url : '_showcase.js' }
    ],
    content : [
    {
        block : 'table',
        content : [
            {
                elem : 'row',
                content : [
                    {
                        elem : 'cell',
                        content : {
                            block : 'button',
                            mods : { theme : 'islands', size : 's' },
                            text : 'size S'
                        }
                    },
                    {
                        elem : 'cell',
                        content : {
                            block : 'checkbox-group',
                            name : 'islands',
                            mods : { theme : 'islands', size : 'l' },
                            options : [
                                { val : 1, text : 'Маленькие' },
                                { val : 2, text : 'Средние', checked : true },
                                { val : 3, text : 'Большие', disabled : true }
                            ]
                        }
                    },
                    {
                        elem : 'cell',
                        content : [
                            {
                                block : 'input',
                                mods : { theme : 'islands', 'has-clear' : true, size : 'l' },
                                val : 'Искать картинки',
                                placeholder : 'placeholder'
                            },
                            {
                                block : 'menu',
                                mods : { mode : 'radio', theme : 'islands', size : 'l', custom : true },
                                content : [
                                    {
                                        block : 'menu-item',
                                        val : 1,
                                        content : 'Показать на сайте'
                                    },
                                    {
                                        block : 'menu-item',
                                        val : 2,
                                        content : 'Сохраненная версия'
                                    },
                                    {
                                        block : 'menu-item',
                                        val : 3,
                                        content : 'Поискать в кармане'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        elem : 'cell',
                        content : {
                            block : 'select',
                            mods : { mode : 'check', theme : 'islands', size : 'l' },
                            name : 'select',
                            text : 'Язык',
                            options : [
                                { val : 1, text : 'Русский' },
                                { val : 2, text : 'Английский' },
                                { val : 3, text : 'Немейцкий' },
                                { val : 4, text : 'Португальский' },
                                { val : 5, text : 'Китайский' }
                            ]
                        }
                    }
                ]
            },
            {
                elem : 'row',
                content : [
                    {
                        elem : 'cell',
                        content : {
                            block : 'button',
                            mods : { theme : 'islands', size : 'm', view : 'action' },
                            text : 'size M'
                        }
                    },
                    {
                        elem : 'cell',
                        content : {
                            block : 'radio-group',
                            name : 'islands-button',
                            mods : { theme : 'islands', size : 'l' },
                            options : [
                                { val : 1, text : 'Радио 1' },
                                { val : 2, text : 'Радио 2', checked : true }
                            ]
                        }
                    },
                    {
                        elem : 'cell',
                        content : {
                            block : 'radio-group',
                            name : 'islands-button',
                            mods : { theme : 'islands', size : 'l', type : 'button' },
                            options : [
                                { val : 1, text : 'Черно-белые' },
                                { val : 2, text : 'Цветные', checked : true },
                                { val : 3, text : 'Любые' }
                            ]
                        }
                    },
                    {
                        elem : 'cell',
                        content : {
                            block : 'select',
                            mods : { mode : 'radio-check', theme : 'islands', size : 'l' },
                            name : 'select-radio',
                            text : 'Настроение',
                            options : [
                                { val : 1, text : 'Не очень' },
                                { val : 2, text : 'Нормальное' },
                                { val : 3, text : 'Отличное!' }
                            ]
                        }
                    }
                ]
            },
            {
                elem : 'row',
                content : [
                    {
                        elem : 'cell',
                        content : {
                            block : 'button',
                            mods : { theme : 'islands', size : 'l', spin : true },
                            icon : { block : 'spin', mods : { theme : 'islands', size : 's', visible : true } },
                            text : 'Loading...'
                        }

                    },
                    {
                        elem : 'cell',
                        content : [
                            {
                                block : 'attach',
                                mods : { theme : 'simple' },
                                button : {
                                    block : 'button',
                                    mods : { theme : 'islands', size : 'm' },
                                    icon : { block : 'icon', mods : { action : 'download' } },
                                    text : 'Загрузить'
                                },
                                noFileText : 'файл не выбран'
                            }
                        ]
                    },
                    {
                        elem : 'cell',
                        content : {
                            block : 'textarea',
                            mods : { theme : 'islands', size : 'l' },
                            val : 'Пожаловаться на картинку',
                            placeholder : 'Жалоб нет'
                        }
                    },
                    {
                        elem : 'cell',
                        content : {

                        }
                    }
                ]
            }
        ]
    }
    ]
})
