module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'public/assets/stylesheets/app.css': 'public/assets/scss/app.scss'
        }
      }
    },

    sync: {
      main: {
        files: [
        {
          expand: true,
          flatten: true,
          src: 'bower_components/foundation/js/foundation.min.js',
          dest: 'public/assets/javascripts'
        },
        ],
        verbose: true
      }
    },

    watch: {
      sass: {
        files: ['public/assets/scss/**/*.scss','bower_components/foundation/scss/**/*.scss'],
        tasks: ['sass']
      }
    }
  });

  require('load-grunt-tasks')(grunt, { scope: 'devDependencies' });
  require('time-grunt')(grunt);
  
  grunt.registerTask('default', ['sync','watch']);
  grunt.registerTask('build', ['sync','sass']);
}
