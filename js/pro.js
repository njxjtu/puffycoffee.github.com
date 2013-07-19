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
			dial.instance.pointAt(dial_value);	
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
	var led1 = Raphael('led1', 450, 150).ledGauge({
	    div: document.getElementById('led1'),
	    min: 0,
	    max: 100,
	    title: 'CPU Usage',
	    unit: '%',
	    direction: 1,
	    margin: {
	        left: '20px',
	        right: '20px',
	        top: '55px',
	        bottom: '45px'
	    },
	    thresholds: {
	        values: [50, 80, 100],
	        colors: ['#00ff00', '#f0f000', '#ff0000']
	    }
	});
	led1.setTo(60);
	var led2 = Raphael('led2', 160, 200).ledGauge({
	    div: document.getElementById('led2'),
	    min: 0,
	    max: 100,
	    title: 'Memory',
	    unit: '%',
	    direction: 0,
	    margin: {
	        left: '60px',
	        right: '60px',
	        top: '45px',
	        bottom: '35px'
	    },
	    thresholds: {
	        values: [50, 80, 100],
	        colors: ['#00ff00', '#f0f000', '#ff0000']
	    }
	});
	led2.setTo(58);
	$("#led_set_confirm").click(function() {
		var led_value = parseFloat($("#led_set_value").val());
		if (led_value >= 0 && led_value <= 100 && typeof led_value !== "undefined") {
			led1.setTo(led_value);	
			led2.setTo(led_value);	
			$("#led_set_value").val("");
		} else {
			$("#led_alert_box").css("display", "block");
			setTimeout(function() {
				$("#led_alert_box").css("display", "none");
			}, 5000);
		}
	});
	Raphael('pie', 600, 400).pie({
	    values: [87, 134, 83, 23, 98],
	    colors: ["#00ff00", "#ff0011", "#faf600", "#0079fa", "#fa8500"],
	    tooltip: ["January - 87", "Feburary - 136", "March - 77", "April - 120","May - 34"],
	    doughnut: false,
	    radius: 100,
	    chartTitle: "Monthly Payment"
	});
	Raphael('doughnut', 600, 400).pie({
	    values: [87, 134, 83, 23, 98],
	    colors: ["#00ff00", "#ff0011", "#faf600", "#0079fa", "#fa8500"],
	    tooltip: ["January - 87", "Feburary - 136", "March - 77", "April - 120","May - 34"],
	    doughnut: true,
	    radius: 100,
	    chartTitle: "Monthly Payment"
	});
});












