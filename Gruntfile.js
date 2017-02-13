module.exports = function(grunt) {

  grunt.initConfig({             
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
          build: {
            src: 'css/style.css',
            dest: 'css/style.css'
          }
        },

        imagemin: {
          dynamic: {
            files: [{
              expand: true,
              cwd: 'views/images/',
              src: ['**/*.{png,jpg}'],
              dest: 'views/images/prod'
            }]
          }
        }
  });

  // grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.registerTask('default', ['imagemin']);
  // grunt.loadNpmTasks('grunt-responsive-images');
  // grunt.registerTask('default', ['responsive_images']);
  // grunt.loadNpmTasks('grunt-contrib-clean');
  // grunt.loadNpmTasks('grunt-contrib-copy');
  // grunt.loadNpmTasks('grunt-mkdir');
  // grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images']);

};
