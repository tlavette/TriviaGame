
//start timer on click.
$("#start").on("click", function () {


    //  Set the button alert's timeout to run thirty seconds after pressed.
    delayButtonAlert = setTimeout(function () {
        alert("Time is up!  How did you do?");
    }, 30000);
});


const quizQuestions = [
    {
        //properties are separated by commas
        question: "What is the capital of Georgia?",
        choices: ["Alabama", "Los Angeles", "Atlanta", "Toronto"],
        answer: 2

    },


    // question #2
    {
        question: "How many syllables is in the word investigate?",
        choices: [2, 1, 7, 4],
        answer: 3

    },


    // question #3
    {
        question: "Which sentence is the correct past tense of the verb (go)?",
        choices: ["Yesterday I went to the store to buy some clothes", "Yesterday I'm going to the store to buy some clothes", "Yesterday I will go to the store to buy some clothes", "Yesterday I should go to the store to buy some clothes"],
        answer: 0
    },

    //  question #4
    {
        question: "If the cost of bananas are $.49 per pound, how much does it cost for 4.5 pounds of bananas?",
        choices: ["$2.50", "$3.70", "$2.21", "$8.00"],
        answer: 2
    },

    // question #5
    {
        question: "What do the stars represent in the flag of the United States?",
        choices: ["The number of members in The Congress", "The number of States in the United States", "The number of US Presidents", "The year the US won it's independence from England"],
        answer: 1
    }

];


console.log(quizQuestions);

function Question(props) {
var container = $("<div>");
var header = $("<h2>");
header.text(props.question);
container.append(header);

    

   
//  { 

//     return (
//       `<h2>${props.question}</h2>
//        <div class="form-group">
//          <label>${props.question}</label> 
//          <input type="radio" value="${props.question}" />
//        </div>
//        <div class="form-group">
//          <label>${props.b}</label> 
//          <input type="radio" value="${props.question}" />
//        </div>
//        <div class="form-group">
//          <label>${props.c}</label> 
//          <input type="radio" value="${props.question}" />
//        </div>
//         <div class="form-group">
//          <label>${props.d}</label> 
//          <input type="radio" value="${props.question}" />
//        </div>`

//        );
// }

function QRow(question) {
    return (
        `<div class="row">
                <div class="col">
                  ${Question(question)}
                </div>
            </div>`
    );
}

//Will need questions to render when start button is hit.
function renderQuestions() {
    let questionsHtml = "";
    for (let i = 0; i < quizQuestions.length; i++) {
        questionsHtml += QRow(quizQuestions[i]);
    }
    return questionsHtml;
}

function QuestionsContainer() {
    return `<div class="container">
        ${renderQuestions()}
      </div>`;
}

const newRow = $("#root").html(QuestionsContainer());
    // const newScore = $("score").h

















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