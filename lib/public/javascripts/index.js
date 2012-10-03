/*
 searchtwitter
 Author: Jonathan Creamer
 License: Dual licensed MIT (http://www.opensource.org/licenses/mit-license) & GPL (http://www.opensource.org/licenses/gpl-license)
 Version 0.1.0
 */
(function( global ) {
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
    var channel = postal.channel( "search" );
    var vent = {
        on: function( topic, fn ) {
            channel.subscribe( topic, fn );
        },
        off: function() {
            channel.unsubscribe();
        },
        trigger: function( env ) {
            channel.publish( env );
        }
    };

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