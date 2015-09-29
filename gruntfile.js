module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                'assets/css/landing.min.css' : 'assets/sass/**/*.sass'
            }
        }
    },

    watch: {
      styles: {
        files: 'assets/sass/**/*.sass',
        tasks: ['sass']
      }
    },

    'http-server': {
      dev: {
        port: 9000,
        host: '0.0.0.0',
        showDir : true,
        autoIndex: true,
        ext: 'html',
        runInBackground: true
      }
    }

  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-http-server');

  grunt.registerTask('default', [
    'sass'
  ]);

  grunt.registerTask('start', [
    'http-server',
    'watch'
  ]);

};