

//start timer on click.
$("#start").on("click", function() {
document.getElementById("#quizQuestions").innerHTML = (quizQuestions.questions.choices);

    //  Set the button alert's timeout to run thirty seconds after pressed.
    delayButtonAlert = setTimeout(function() {
      alert("Time is up!  How did you do?");
    }, 30000);
  });





