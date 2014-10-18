module.exports = function(grunt) {

  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-compass");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  //grunt.loadNpmTasks("matchdep");


  grunt.initConfig({
    
    uglify: {
      myTarget: {
        files: {
          '_/js/script.js': ['_/components/js/*.js']
        }
      }
    },
    
    compass: {
      dev: {
        options: {
          config: 'config.rb'
        }
      }
    },

    watch: {
      options: {
        livereload: true
      },
      
      sass: {
        files: ['_/components/sass/*.scss'],
        tasks: ['compass:dev'] 
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
