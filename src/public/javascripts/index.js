(function( global ) {
    //import("search.js");
    //import("ui.js");
    //import("vent.js")

    global.app = {
        init: function(){
            app.vent.on( "search", this.search, this );
            
            this.ui.init();
        },
        search: search,
        ui: ui,
        vent: vent
    };

}( window ));

app.init();