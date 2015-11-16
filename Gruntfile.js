module.exports = function(grunt) {
    require('jit-grunt')(grunt);

    grunt.initConfig({
       less: {
           development: {
               options: {
                    paths: ["css/less/"],
                    compress: false,
                    yuicompress: false,
                    cleancss: true
               },
               files: {"css/rob.css": "css/less/rob.less"}
           }
       },
       watch: {
          styles: {
            files: ['css/less/*.less'],
            tasks: ['less'],
            options: {
              nospawn: true,
          }
      }
    }
});
   grunt.loadNpmTasks('grunt-contrib-less');
   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.registerTask('default', ['watch', 'less']);
};