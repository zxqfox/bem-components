modules.define('ymaps', ['loader_type_js'], function(provide, loader) {

loader('http://api-maps.yandex.ru/2.1/?lang=ru_RU', function() {
    provide(window.ymaps);
    delete window.ymaps;
});

});
