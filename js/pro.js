$(document).ready(function () {
	var dial = Raphael('dial1', 280, 280).dialGauge({
	    div: document.getElementById('dial1'),
	    unit: 'speed',
	    min: 0,
	    max: 100,
	    skin: 'CRISP_WHITE',
	    thresholds: {
	        values: [60, 80, 100],
	        colors: ['#2fff2f', '#ffff63', '#ff3939']
	    },
	    alert: 90
	});	
	var input_value = $("#dial_input_value").value;
	$("#dial_set_confirm").click(function() {
		var dial_value = parseFloat($("#dial_set_value").val()),
			dial_theme = $("#dial_set_theme").val();
		if (dial_value >= 0 && dial_value <= 100 && typeof dial_value !== "undefined") {
			dial.instance.pointAt(parseFloat($("#dial_set_value").val()));	
			$("#dial_set_value").val("");
		} else {
			$("#dial_alert_box").css("display", "block");
			setTimeout(function() {
				$("#dial_alert_box").css("display", "none");
			}, 5000);
		}
		if (dial_theme !== "empty") {
			dial.instance.changeSkin(dial_theme);
		}
	});
});