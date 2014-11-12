module.exports = function(bh) {
    bh.match('carousel__switches', function(ctx, json) {

        var items = ctx.tParam('items'),
            options = [];

        for(var i = 0; i < items.length; i++) {
            options.push({ val : i, checked : i < 1 });
        }

        return {
            block : 'radio-group',
            mods : { theme : 'normal', size : 'm', type : 'line' },
            mix : { block : json.block, elem : 'switches' },
            options : options
        };
    });
};
