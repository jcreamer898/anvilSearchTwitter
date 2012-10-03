var ui = {
    init: function() {
        app.vent.on( "search.done", this.done );

        $( "#search" ).on( "click", function() {
            var val = $( "#search-text").val();
            
            val.length && app.vent.trigger({
                topic: "search",
                data: val
            });
        });
    },
    done: function( data ) {
        var $ul = $( "ul#tweets" ),
            str = [];
        
        $.each( data, function() {
            str.push( "<li>" + this.text + "</li>" );
        });

        $ul.empty().append( str.join("") );

        return this;
    }
};