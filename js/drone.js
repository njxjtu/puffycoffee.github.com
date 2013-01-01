/**
 * @author Peng Zhang
 * 2012
 */
(function() {
	var hero_info = $("#hero_info");

	hero_info.popover({
		animation: true,
		placement: "bottom",
		html: true,
		selector: true,
		trigger: "hover",
		title: "Pasha Liman",
		content: "<small>Pasha Liman is an Albanian navy base South Albania.</small>"
	});
	// hero_info.click(function(event) {
	// 	console.log(event);
	// });
} ());