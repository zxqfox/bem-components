module.exports = function(bh) {
    bh.match('carousel', function(ctx, json) {
        var viewItems = json.viewItems,
            jsonItems = json.items,
            items = [],
            content = [];

        jsonItems.forEach(function(item){
            return items.push({
                elem : 'item',
                url : item.url
            });
        });

        content.push({
            elem : 'inner',
            content : items
        });

        ctx
            .js({ viewItems : viewItems })
            .content(content);
    });
};
