module.exports = function(grunt) {

  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-compass");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-jade");
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

    jade: {
      compile: {
        options: {
          pretty: true,
        },
        files: {
          'index.html': ['_/components/jade/index.jade']
        }
//        files: [{
//          expand: true,
//          cwd: '_/components/jade/*.jade',
//          src: '**/*.jade',
//          dest: '*',
//          ext: '.html'
//        }]
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
      
      compileHtml: {
        files: ['_/components/jade/*.jade'],
        tasks: ['jade']
      },

      html: {
        files: ['*.html']
      }
    }

  

  });
  
  grunt.registerTask('default', ['watch']);


}; // exports
