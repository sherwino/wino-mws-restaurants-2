'user strict';

module.exports = function (grunt) {
    grunt.initConfig({
        responsive_images: {
          myTask: {
            options: {
              sizes: [
                {
                    name: "large",
                    width: 1024,
                    suffix: "-large",
                    quality: 80
                  }              
              {
                name: "medium",
                width: 800,
                suffix: "-medium",
                quality: 80
              }
              {
                name: "small",
                width: 320,
                suffix: "-small",
                quality: 60
              }
            ]
            },
            files: [{
              expand: true,
              src: ['./src/img/**.{jpg,gif,png}'],
              cwd: './test/',
              dest: './dist/img/'
            }]
          }
        },
      })

    grunt.loadNpmTasks('grunt-cwebp');
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.registerTask('default', ['responsive_images','cwebp']);
  
  };
  