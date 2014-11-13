/**
 * @module map
 */

modules.define('map', ['i-bem__dom'], function(provide, BEMDOM) {

/**
 * @exports
 * @class map
 * @bem
 */
provide(BEMDOM.decl({ block : this.name }, /** @lends map.prototype */{
    onSetMod : {
        'js' : {
            'inited' : function() {

                var _this = this;

                ymaps.ready(this._mapInit.bind(_this));
            }
        }
    },

    _mapInit : function() {

        var _this = this,
            params = this.params,
            mapId = params.id,
            placemarks = params.placemarks;

        this.ymap = new ymaps.Map(mapId, {
            center: params.center,
            zoom  : params.zoom
        });

        if(placemarks) {
            var placemark;

            placemarks.forEach(function(item) {
                placemark = new ymaps.Placemark(item.coords, {
                    balloonContent : item.balloonContent
                });
                _this.ymap.geoObjects.add(placemark);
            });
        }
    },

    destroy : function() {
        this.ymap.destroy();
    }
}));

});
