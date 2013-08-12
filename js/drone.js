/**
 * @author Peng Zhang
 * 2012
 */
(function() {
	var pic_me = $("#pic");
	//pic_me.draggable();
	console.log(pic_me);
	console.log(pic_me.draggable());
	var translator = $("#translate");
	translator.toggle(
		function() {
			$("#aboutme").flip({
				direction:'rl',
				color: '#f5f5f5',
				content: '<div>Hello, My name is Peng Zhang, I am a Java front-end developer working in El Dorado Hills, California. I spend 60% of my    time design custom JSF component. When I am not working I    can be found writing open source projects or playing video  games.'
			});
			translator.html("Back to nerdy world.");
		},
		function() {
			$("#aboutme").revertFlip();
			translator.html("English");
		}
	);
	
} ());