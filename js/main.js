/* 
	Helper Functions
*/

// shamelessly copied from http://stackoverflow.com/questions/10073699/pad-a-number-with-leading-zeros-in-javascript
function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

var countdownElem = document.getElementById('countdown'); 

var endTime = moment("20140919", "YYYYMMDD");

var timeLeft = countdown(null, endTime, countdown.HOURS | countdown.MINUTES | countdown.SECONDS);

var timeString = pad(timeLeft.hours,2) + ":" + pad(timeLeft.minutes,2) + ":" + pad(timeLeft.seconds,2);

// song vars
var breath, ifYouListen, respect, showingSkin, theNightAir, wordsWithWeight;

// document ready
document.addEventListener("DOMContentLoaded", function(event) {
	// console.log("sup");

	// countdown timer
	countdownElem.innerHTML = timeString;

	window.setInterval(function(){
		timeLeft = countdown(null, endTime, countdown.HOURS | countdown.MINUTES | countdown.SECONDS);
		timeString = pad(timeLeft.hours,2) + ":" + pad(timeLeft.minutes,2) + ":" + pad(timeLeft.seconds,2);
		countdownElem.innerHTML = timeString;
	}, 1000);
	// end countdown timer

	// sound manager
	soundManager.setup({
		url: '/swf/',
  		flashVersion: 9, // optional: shiny features (default = 8)
  		// optional: ignore Flash where possible, use 100% HTML5 mode
		preferFlash: false,
  		onready: function() {
			breath = soundManager.createSound({
				id: 'DJ Whitney Fierce - Breath',
				url: '/../music/breath.mp3',
				autoLoad: false,
				autoPlay: false,
				onload: function() {
					// alert('The sound '+this.id+' loaded!');
				},
				volume: 50
			});
			ifYouListen = soundManager.createSound({
				id: 'DJ Whitney Fierce - If You Listen',
				url: '/../music/if_you_listen.mp3',
				autoLoad: false,
				autoPlay: false,
				onload: function() {
					// alert('The sound '+this.id+' loaded!');
				},
				volume: 50
			});
			respect = soundManager.createSound({
				id: 'DJ Whitney Fierce - Respect',
				url: '/../music/respect_v7.mp3',
				autoLoad: false,
				autoPlay: false,
				onload: function() {
					// alert('The sound '+this.id+' loaded!');
				},
				volume: 50
			});
			showingSkin = soundManager.createSound({
				id: 'DJ Whitney Fierce - Showing Skin',
				url: '/../music/showing_skin_2.mp3',
				autoLoad: false,
				autoPlay: false,
				onload: function() {
					// alert('The sound '+this.id+' loaded!');
				},
				volume: 50
			});
			theNightAir = soundManager.createSound({
				id: 'DJ Whitney Fierce - The Night Air',
				url: '/../music/the_night_air_v3.mp3',
				autoLoad: false,
				autoPlay: false,
				onload: function() {
					// alert('The sound '+this.id+' loaded!');
				},
				volume: 50
			});
			wordsWithWeight = soundManager.createSound({
				id: 'DJ Whitney Fierce - Words With Weight',
				url: '/../music/words_with_weight.mp3',
				autoLoad: false,
				autoPlay: false,
				onload: function() {
					// alert('The sound '+this.id+' loaded!');
				},
				volume: 50
			});
  		},
  		ontimeout: function() {
    		// SM2 could not start. Flash blocked, missing or security error? Complain, etc.?
    		alert('u don fucked up sen');
		}
	});
	// end sound manager
});

