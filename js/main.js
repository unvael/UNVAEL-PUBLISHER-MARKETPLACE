// shamelessly copied from http://stackoverflow.com/questions/10073699/pad-a-number-with-leading-zeros-in-javascript
function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

var countdownElem = document.getElementById('countdown'); 

var endTime = moment("20140917", "YYYYMMDD");

var timeLeft = countdown(null, endTime, countdown.HOURS | countdown.MINUTES | countdown.SECONDS);

var timeString = pad(timeLeft.hours,2) + ":" + pad(timeLeft.minutes,2) + ":" + pad(timeLeft.seconds,2);

document.addEventListener("DOMContentLoaded", function(event) {
	// console.log("sup");

	countdownElem.innerHTML = timeString;

	window.setInterval(function(){
		timeLeft = countdown(null, endTime, countdown.HOURS | countdown.MINUTES | countdown.SECONDS);
		timeString = pad(timeLeft.hours,2) + ":" + pad(timeLeft.minutes,2) + ":" + pad(timeLeft.seconds,2);
		countdownElem.innerHTML = timeString;
	}, 1000);

});