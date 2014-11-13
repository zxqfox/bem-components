({
    block : 'page',
    title : 'bem-components: map',
    head : [
        { elem : 'css', url : '_simple.css' },
        { elem : 'js', url : '_simple.js' }
    ],
    content : [
        {
            block : 'map',
            js : {
                id : 'mapId',
                center : [55.76, 37.64],
                zoom : 10
            },
            mods : { theme : 'normal', provider : 'yandex' },
            placemarks : [
                {
                    coords : [55.687086, 37.529789],
                    balloonContent : 'Я метка 1'
                },
                {
                    coords : [55.642063, 37.656123],
                    balloonContent : 'Я метка 2'
                }
            ]
        },
        {
            block : 'map',
            js : {
                id : 'mapId2',
                center : [44.94682395, 34.10920650],
                zoom : 10
            },
            mods : { theme : 'normal', provider : 'yandex' },
            placemarks : [
                {
                    coords : [44.926823, 34.129206],
                    balloonContent : 'Я метка 2'
                },
                {
                    coords : [44.966823, 34.129206],
                    balloonContent : 'Я метка 2'
                }
            ]
        }
    ]
});
