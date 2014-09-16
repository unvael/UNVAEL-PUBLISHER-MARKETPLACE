document.addEventListener("DOMContentLoaded", function(event) {
	// console.log("sup");

	var timeLeft = countdown(null, moment("20140916", "YYYYMMDD"), countdown.HOURS | countdown.MINUTES | countdown.SECONDS);
		document.getElementById('countdown').innerHTML = timeLeft.toHTML("");

	window.setInterval(function(){
		var timeLeft = countdown(null, moment("20140916", "YYYYMMDD"), countdown.HOURS | countdown.MINUTES | countdown.SECONDS);
		document.getElementById('countdown').innerHTML = timeLeft.toHTML("");
	}, 1000);

});

// document.addEventListener("touchmove", function(event){
//     event.preventDefault();
// });

// var scrollingDiv = document.getElementById('songs');
// scrollingDiv.addEventListener('touchmove', function(event){
//     event.stopPropagation();
// });