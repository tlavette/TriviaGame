

// start timer on click
$("#start").on("click", function() {
    //  Set alert for 30 seconds after the start button is clicked.
    delayButtonAlert = setTimeout(function() {
      alert("Game Over: How did you do?");
    }, 30000);
  });

