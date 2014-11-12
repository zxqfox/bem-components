module.exports = function(bh) {
    bh.match('carousel_switches', function(ctx, json) {
        ctx
            .applyBase()
            .tParam('items', json.items)
            .content([
                ctx.content(),
                { elem : 'switches' }
            ], true);
    });
};
