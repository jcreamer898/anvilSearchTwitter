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