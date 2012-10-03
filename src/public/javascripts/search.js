var search = function( query ) {
    var url = "http://search.twitter.com/search.json?q=:q";

    $.ajax({
        url: url.replace( ":q", query ),
        dataType: "jsonp",
        success: function( data ) {
            app.vent.trigger({
                topic: "search.done",
                data: data.results
            });
        }
    });
};