// COUNTDOWN.JS
// Original script (C) w3schools - https://www.w3schools.com/howto/howto_js_countdown.asp

function printCountdown(downtodate, target) {
  // Set the date we're counting down to
  // Format: "shortmonthname dayofmonth, year hour:minute:second" (e.g. "Dec 24, 2018 19:00:00")
  var countDownDate = new Date(downtodate).getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {

      // Get today's date and time
      var now = new Date().getTime();
    
      // Find the distance between now and the countdown date
      var distance = countDownDate - now;
    
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
      // Output the result in an element with id specified in "target"
      document.getElementById(target).innerHTML = days + " d " + hours + " h " + minutes + " m " + seconds + " s ";
    
      // If the count down is over, write some text 
      if (distance < 0) {
          clearInterval(x);
          document.getElementById(target).innerHTML = "The countdown's over!";
      }
  }, 1000);
}