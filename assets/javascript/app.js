//start timer on click.
$("#start").on("click", function() {


    //  Set the button alert's timeout to run thirty seconds after pressed.
    delayButtonAlert = setTimeout(function() {
      alert("Time is up!  How did you do?");
    }, 30000);
  });



  function Question (props) {
    return (
      `<h2>${props.question}</h2>
       <div class="btn-group btn-group-toggle" data-toggle="buttons>

         <div class="form-group">
          <label>${props.a}</label> 
         <input type="radio" name1="options" id="option1" value="${props.a}" />
       </div>
       <div class="form-group">
         <label>${props.b}</label> 
         <input type="radio" name2="options" id="option2" value="${props.b}" />
       </div>
       <div class="form-group">
         <label>${props.c}</label> 
         <input type="radio" name3="options" id="option3" value="${props.c}" />
       </div>
        <div class="form-group">
         <label>${props.d}</label> 
         <input type="radio" name4="options" id="option4" value="${props.d}" />
       </div>`

       );

       
    }

    function QRow (question) {
        return (
          `<div class="row">
                <div class="col">
                  ${Question(question)}
                </div>
            </div>`
        );
    }
    
    //Will need questions to render when start button is hit.
    function renderQuestions () {
      let questionsHtml = "";
      for (let i = 0; i < quizQuestions.length; i++) {
        questionsHtml += QRow(quizQuestions[i]);
      }
      return questionsHtml;
    }
    
    function QuestionsContainer () {
      return `<div class="container">
        ${renderQuestions()}
      </div>`;
    }

    
    
    const newRow = $("#root").html( QuestionsContainer() );



