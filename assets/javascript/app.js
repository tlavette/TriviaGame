

//start timer on click.
$("#start").on("click", function() {
// document.getElementById("#quizQuestions").innerHTML = (quizQuestions.questions.choices);

    //  Set the button alert's timeout to run thirty seconds after pressed.
    delayButtonAlert = setTimeout(function() {
      alert("Time is up!  How did you do?");
    }, 30000);
  });

  function Question (props) {
    return (
      `<h2>${props.question}</h2>
       <div class="form-group">
         <label>${props.a}</label> 
         <input type="radio" value="${props.a}" />
       </div>
       <div class="form-group">
         <label>${props.b}</label> 
         <input type="radio" value="${props.b}" />
       </div>
       <div class="form-group">
         <label>${props.c}</label> 
         <input type="radio" value="${props.c}" />
       </div>
        <div class="form-group">
         <label>${props.d}</label> 
         <input type="radio" value="${props.d}" />
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
    
    
    















// 
// Create a test FormData object
// var formData = new FormData();
// formData.append('c', 'What is the capital of Georgia?');
// formData.append('d', 'How many syllables is in the word investigate?');

// // Display the values
// for (var value of formData.values()) {
//    console.log(value); 


// }

// // Function to render questions on the screen()
// function renderQuestion() {

    
//     document.querySelector("#quizQuestions").innerHTML
// }
// // 