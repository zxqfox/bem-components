module.exports = function(bh) {
    bh.match('carousel_arrows', function(ctx) {
        ctx.applyBase();

        var arrows = ['prev', 'next'].map(function(direction){
            return {
                elem : 'arrow',
                mods : { direction : direction }
            };
        });

        ctx.content([
            ctx.content(),
            arrows
        ], true);
    });
};
