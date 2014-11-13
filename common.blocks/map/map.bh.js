module.exports = function(bh) {
    bh.match('map', function(ctx, json) {
        var jsAttrs = json.js;

        ctx.attr('id', jsAttrs.id);
        ctx.js({placemarks : json.placemarks});
    });
};
