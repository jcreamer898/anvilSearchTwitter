var pluginFactory = function( _, anvil ) {
    return anvil.plugin( {
        // Name your plugin
        name: "anvil.replacemin",
        // Activity list: "identify", "pull", "combine", "pre-process","compile", "post-process", "push", "test"
        activity: "post-process",
        // Command all the things [ "-s, --somecommand", "Run this plugin for awesomesauce" ]
        commander: [],
        // Configure all the things...
        configure: function( config, command, done ) {
            done();
        },
        // Run all the things...
        run: function( done ) {
            var file = _.filter( anvil.project.files, function( f ) {
                return f.name === "index.html";
            });
            //console.log( file );
            
            done();
        }
    } );
};

module.exports = pluginFactory;
