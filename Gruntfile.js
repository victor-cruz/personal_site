module.exports = function (grunt) {
  var modRewrite = require('connect-modrewrite');

  // Project configuration.
  grunt.initConfig({
    //  pkg: grunt.file.readJSON('package.json'),
    //  uglify: {
    //    options: {
    //      banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    //    },
    //    build: {
    //      src: 'src/<%= pkg.name %>.js',
    //      dest: 'build/<%= pkg.name %>.min.js'
    //    }
    //  }
    connect: {
      server: {
        options: {
          port: 3000,
          //hostname: '*',
          keepalive: true,
          middleware: function(connect, options, middlewares) {
            var middlewares = [];

            middlewares.push(modRewrite(['^[^\\.]*$ /index.html [L]'])); //Matches everything that does not contain a '.' (period)
            options.base.forEach(function(base) {
              middlewares.push(connect.static(base));
            });

            return middlewares;
          },
          //middleware: function (connect, options) {
          //  return [
          //    // Rewrite requests to root so they may be handled by router
          //    pushState(),
          //
          //    // Serve static files
          //    connect.static(options.base)
          //  ];
          //}
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');

  //// Default task(s).
  //grunt.registerTask('default', ['uglify']);

};