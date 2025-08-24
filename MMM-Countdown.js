Module.register("MMM-Countdown",{
	// Default module config.
	defaults: {
		event: "New Millenium:",
		date: "3000-01-01",
		showHours: true,
		showMinutes: true,
		showSeconds: true,
		customInterval: 1000,
		daysLabel: 'd',
		hoursLabel: 'h',
		minutesLabel: 'm',
		secondsLabel: 's',
	},

	// set update interval
	start: function() {
		var self = this;
		setInterval(function() {
			self.updateDom(); // no speed defined, so it updates instantly.
		}, this.config.customInterval); 
	},

	// Update function
	getDom: function() {
		var wrapper = document.createElement("div");

		var timeWrapper = document.createElement("div");
		var textWrapper = document.createElement("div");

		textWrapper.className = "align-left week dimmed medium";
		timeWrapper.className = "time bright medium light";
		textWrapper.innerHTML=this.config.event;

		var today = new Date(Date.now());
		var target = new Date(this.config.date);

		var timeDiff = target - today;

		// Set days, hours, minutes and seconds
		var diffDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
		var diffHours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var diffMinutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
		var diffSeconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

		var timeDisplay = '';

		if (diffDays >= 1) {
			// More than 24 hours left: show days only
			timeDisplay = diffDays + this.config.daysLabel;
		} else {
			// Less than 24 hours: show hours and minutes only
			timeDisplay = diffHours + this.config.hoursLabel + diffMinutes + this.config.minutesLabel;
		}

		timeWrapper.innerHTML = timeDisplay;

		wrapper.appendChild(textWrapper);
		wrapper.appendChild(timeWrapper);

		return wrapper;
	}
});
