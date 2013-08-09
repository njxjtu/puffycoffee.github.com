/**
 * @author Peng Zhang
 * 2012
 */
(function() {
	var translator = $("#translate");
	translator.click(function() {
		$("#aboutme").flip({
			direction:'rl',
			color: '#f5f5f5',
			content: '<div>Hello, My name is Peng Zhang, I am a Java front-end developer working in El Dorado Hills, California. I spend 60% of my    time design custom JSF component. When I am not working I    can be found writing open source projects or playing video  games.'
		});
		$("#translate").html("Back to nerdy world.");
	});
	
} ());