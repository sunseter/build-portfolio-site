module.exports = function(grunt){
	grunt.initConfig({
		responsive_images: {
			dwv: {
				options: {
					engine: 'im',
					sizes: [{
						width: 400,
						quality: 90
					}]
				},
				files: [{
					expand: true,
					src: ['*.{gif,jpg,PNG}'],
					cwd: 'img/',
					dest: 'images/'
				}]
			}
		},
	});
	grunt.loadNpmTasks('grunt-responsive-images');
	grunt.registerTask('default', ['responsive_images']);

};

const gm = require('gm').subClass({imageMagick: true});