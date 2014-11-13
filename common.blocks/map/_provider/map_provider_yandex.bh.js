module.exports = function(bh) {
    bh.match('map_provider_yandex', function(ctx, json) {
        var apiScript = { tag : 'script', attrs : {} };

        apiScript.attrs.src = 'http://api-maps.yandex.ru/2.1/?lang=ru_RU';

        return [
            json,
            apiScript
        ];
    });
};
