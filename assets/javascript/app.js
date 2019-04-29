

//start timer on click.
$("#start").on("click", function() {
    //  Set the button alert's timeout to run three seconds after the function's called.
    delayButtonAlert = setTimeout(function() {
      alert("Time is up!  How did you do?");
    }, 40000);
  });





