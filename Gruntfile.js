module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['Gruntfile.js', '!app/scripts/vendor', 'app/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },
    qunit: {
      all: {
      options: {
        urls: [
          'http://localhost:8000/app/indextest.html'
        ]
      }
    }
    },
    requirejs: {
      compile: {
        options: {
          baseUrl: "app/scripts",
          name: "main",
          out: "dist/optimized.js",
          preserveLicenseComments: false,
          paths: {
            'jquery': 'vendor/jquery/dist/jquery',
            'underscore': 'vendor/underscore-amd/underscore',
            'backbone': 'vendor/backbone-amd/backbone',
            'text': 'vendor/requirejs-text/text',
            'bootstrap': 'vendor/bootstrap/dist/js/bootstrap'
          },
          include: ['vendor/requirejs/require.js']
        }
      }
    },
    cssmin: {
      target: {
        files: [{
          'dist/css/bootstrap.css':'app/scripts/vendor/bootstrap/dist/css/bootstrap.css',
          'dist/css/bootstrap-theme.css':'app/scripts/vendor/bootstrap/dist/css/bootstrap-theme.css',
          'dist/css/main.css':'app/css/main.css'
        },
        {
          expand: true,
          cwd: 'app/css',
          src: ['*.css', '!*.min.css'],
          dest: 'dist/css',
          ext: '.min.css'
        }]
      }
    },
    clean: {
      js: ["dist/*", "!dist/index.html"]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('test', ['jshint', 'qunit']);
  grunt.registerTask('prod', ['jshint', 'qunit', 'requirejs', 'cssmin']);

};
