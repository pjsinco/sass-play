module.exports = function(grunt) {

  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-compass");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("matchdep");


  grunt.initConfig({
    
    uglify: {
      myTarget: {
        files: {
          '_/js/script.js': ['_/components/js/*.js']
        }
      }
    },

    watch: {
      options: {
        livereload: true
      },

      scripts: {
        files: ['_/components/js/*.js'],
        tasks: ['uglify']
      },
      
      html: {
        files: ['*.html']
      }
    }

  

  });
  
  grunt.registerTask('default', ['watch']);


}; // exports
