var introEl= document.querySelector("#intro")
var qaViewEl= document.querySelector("#qa-view")
var timerEl= document.querySelector("#timer")
var titleEl= document.querySelector("#title")
var answer1El= document.querySelector("#answer1")
var answer2El= document.querySelector("#answer2")
var answer3El= document.querySelector("#answer3")
var answer4El= document.querySelector("#answer4")
var startQuizBtn= document.querySelector("#start-quiz")
/*
step 1. display start page- title and papragraph
and start button


Step 2. display question page and hides start page - timer 
will start when the start button
is clicked from start page, display question and show 
4 answer buttons, start page is hidden only show
question page. when you click one of the answers, 
show correct or wrong. eaqch question should have 15 seconsds,
since you have 5 questions. total remaining is 75 for 5 questions.
when you get a wrong answer your time gets deducted by 15 sec off the clock 
if you get it right no penalty.

step 3. once you answer all the questions,you will be 
presented with the score and input your inital and submit button.
The timer should stop and time left becomes your score

step 4. show a dashboard of all the high scores


*/

var timeRemaining=75 //for each 5 questions
var clockid

var question=[{
    title:"new question 1",
    answers:["answer1,answer2,answer3,answer4"],
    solution: "answer2"
},{
    title:"new question 2",
    answers:["answer1,answer2,answer3,answer4"],
    solution: "answer2"

}]
function countDown(){
    timerEl.textContent=timeRemaining
    timeRemaining--
}
function startGame(){
    qaViewEl.classList.remove("hide")
    introEl.classList.add("hide")
    clockid=setInterval(countDown,1000)
}
function displayQuestions(){
    titleEl.textContent=question[index].title
    answer1El.textContent=question[index].answers[0]
    answer2El.textContent=question[index].answers[1]
    answer3El.textContent=question[index].answers[2]
    answer4El.textContent=question[index].answers[3]
}

function nextQuestion(){
    index++
    displayQuestions()
}
answer1El.addEventListener("click",nextQuestion)
answer2El.addEventListener("click",nextQuestion)
answer3El.addEventListener("click",nextQuestion)
answer4El.addEventListener("click",nextQuestion)
startQuizBtn.addEventListener("click",startGame)
