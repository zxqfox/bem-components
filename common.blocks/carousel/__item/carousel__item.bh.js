module.exports = function(bh) {
    bh.match('carousel__item', function(ctx, json) {
        ctx.content({
            block : 'image',
            url : json.url
        });
    });
};
