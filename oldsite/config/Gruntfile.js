module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      // watch for changes to the static web files
      files: "../var/www/html/*",
    },
    nodestatic: {
        server: {
          options: {
            port: 8080,
            base: '../var/www/html'
          }
        }
      }
  });

  // load tasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-nodestatic');

  // compile less, run a server, and watch for less changes by default
  grunt.registerTask('default', ['nodestatic', 'watch']);
};
