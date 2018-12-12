jQuery(document).ready(function ($) {
	dzsap_init("#player", {
		autoplay: "off"
		,init_each: "on"
		,disable_volume: "on"
		,skinwave_mode: 'normal'
		,settings_backup_type: 'light' // == light or full
		,skinwave_: 'light' // == light or full
		,skinwave_enableSpectrum: "off"
		,embed_code: 'light' // == light or full
		,skinwave_wave_mode_canvas_waves_number: "2"
		,skinwave_wave_mode_canvas_waves_padding: "1"
		,skinwave_wave_mode_canvas_reflection_size: '.15' // == light or full
		,design_color_bg: '999999' // --  light or full
		,design_wave_color_progress: 'ee4444,ff9999' // -- light or full
		,skinwave_comments_enable: 'off' // -- enable the comments, publisher.php must be in the same folder as this html, also if you want the comments to automatically be taken from the database remember to set skinwave_comments_retrievefromajax to ON
		,skinwave_comments_retrievefromajax: 'on'// --- retrieve the comment form ajax
		,failsafe_repair_media_element: 500 // == light or full
	});
});