$(function() {
	// Load the classic theme
	Galleria.loadTheme('js/galleria.classic.js');
	// Initialize Galleria
	Galleria.run('#galleria',{
		height : 1
	});
	Galleria.configure({
		transition: 'slide',
		fullscreenTransition: true,
		swipe: 'enforced',
	});
});
    
Galleria.ready(function() {
	var gallery = this; // galleria is ready and the gallery is assigned
	$('#fullscreen').click(function() {
		gallery.toggleFullscreen(); // toggles the fullscreen
	});
	this.addElement('exit').appendChild('container','exit');
	var btn = this.$('exit').hide().text('').click(function(e) {
		gallery.exitFullscreen();
	});
	this.bind('fullscreen_enter', function() {
		btn.show();
	});
	this.bind('fullscreen_exit', function() {
		btn.hide();
	});
});