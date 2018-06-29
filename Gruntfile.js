module.exports = function(grunt){
  grunt.initConfig({
    copy: {
      main: {
        files: [
          // includes files within path
          {expand: true, cwd: 'src/',src: '**', dest: 'dist/'},
        ],
      },
    },
    babel: {
      options: {
        sourceMap: true,
        presets: ['es2015'],
        plugins: [
          "transform-runtime",
        ]
      },
      tests: {
        files: [
          {
            "expand": true,
            "cwd": "src/",
            "src": ["**/*.js"],
            "dest": "dist/",
            "ext": ".js"
          }
        ]
      },
    },
    pug: {
      compile: {
        options: {
          data: {
            debug: true
          }
        },
        files: {
          'dist/index.html': ['src/app.pug']
        }
      }
    },
    browserify: {
      dist:{
        files: {
          './dist/js/bundle.js': ['dist/index.js'],
        },
        options: {
          transform: [
            ['babelify',{
                "presets": ["es2015" ],
                "plugins":[
                  "transform-runtime",
                ]
              }
            ],
            'vueify'
          ],
        },
      },
    },
    uglify: {
      compile: {
        files: {
          './dist/js/bundle.min.js': ['./dist/js/bundle.js']
        }
      }
    },
    watch: {
      scripts: {
        files: ['src/**/*.vue'],
        tasks: ['copy','babel','pug','browserify']
      },
      logical: {
        files: ['src/**/*.js'],
        tasks: ['copy','babel','pug','browserify']
      },
    }
  });
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-pug');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default',['copy','babel','pug','browserify']);
};
