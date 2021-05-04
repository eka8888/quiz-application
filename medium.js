function store(){ // localStorage 
  var name = document.getElementById('name').value;
  var surname = document.getElementById('surname').value;
  var key = document.getElementById('key').value;

  const user = {
      name: name,
      surname: surname,
      key:key,
  }

  window.localStorage.setItem(key,JSON.stringify(user)); 
}

window.onload =function(){ 
  document.getElementById("myForm").onsubmit = store
}

//
let Questions = [
  {
    question:
      "როგორ  ვახდენთ HTML-ში ჯავასკრიპტის გაწერას ?",
    choices: [
      "javascript",
      "script",
      "js",
      "scripting",
    ],      
    correctAnswer: 1,
  },
  {
    question: "რომელია სწორი ადგილი ჯავასკრიპტის შემოსატანად?",
    choices: [
      "head",
      "body",
      "ორივე",
      "არცერთი",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "რომელია სწორი სინტაქსი?",
    choices: [
      "script href='xxx.js'",
      "script name='xxx.js'",
      "script src='xxx.js'",
      "არცერთი",
    ],
    correctAnswer: 2,
  },
  {
      question:
        "როგორ შეგვიძლია დავწეროთ 'hello world' alert?",
      choices: [
        "alertBox('hello world')",
        "msg('hello world')",
        "alert('hello world')",
        "msgBox('hello world')",
      ],
      correctAnswer: 2,
    },
    {
      question:
        "როგორ ვწერთ ფუნქციას?",
      choices: [
        "function=myFunction()",
        "function:myFunction()",
        "function myFunction()",
        "function;myFunction()",
      ],
      correctAnswer: 2,
    },
    {
      question:
        "როგორ ვიძახებთ  ფუნქციას?",
      choices: [
        "call myFunction()",
        "myFunction()",
        "call function myFunction()",
        "function;myFunction()",
      ],
      correctAnswer: 1,
    },
    {
      question:
        "როგორ ვწერთ if statement-ს ჯავასკრიპტში?",
      choices: [
        "if(i==5)",
        "if i=5 then",
        "if i==5 then",
        "if i=5",
      ],
      correctAnswer: 0,
    },
    {
      question:
        "როგორ ვწერთ if statement-ში თუ i არ უდრის 5-ს?",
      choices: [
        "if i<>5",
        "if (i<>5)",
        "if i=!5 then",
        "if (i !=5)",
      ],
      correctAnswer: 3,
    },
];

let index = 0;
let questionText = document.querySelector("#questionText");
let choice1 = document.querySelector("#firstAnswer");
let choice2 = document.querySelector("#secondAnswer");
let choice3 = document.querySelector("#thirdAnswer");
let choice4 = document.querySelector("#fourthAnswer");


questionText.innerText = Questions[index].question;
choice1.innerHTML = Questions[index]["choices"][0]; 
choice2.innerHTML = Questions[index]["choices"][1];
choice3.innerHTML = Questions[index]["choices"][2];
choice4.innerHTML = Questions[index]["choices"][3];




let progressBar = document.querySelector(".progress");
let total=document.querySelector(".total");
let time=document.querySelector(".time");



let correctChoice = 0;
let wrongChoice = 0;
let currentQuestion = 1; 
let choicesArr = [choice1, choice2, choice3, choice4];

//timer

var i = document.getElementById('countdown');

function startCount() { 
if (parseInt(i.innerHTML)>0) {

   i.innerHTML = parseInt(i.innerHTML)-1;  
}else {
  i.innerHTML = 45;
  if (currentQuestion == 8) {  
    document.querySelector(".quizContainer").hidden = true;
    return showResult(correctChoice);
  } else if (currentQuestion == 7) {
    nextBtn.innerHTML = "დასრულება";
  }
  currentQuestion += 1;
  
  index += 1;

  progressBar.value += 12.5;
  document.getElementById('total').innerHTML =currentQuestion+
     " out of " + "8";


  questionText.innerHTML = Questions[index]["question"]; // 
  for (let i = 0; i < choicesArr.length; i++) {//
    choicesArr[i].innerHTML = Questions[index]["choices"][i];
  }

}
}
var timerId = setInterval(startCount,1000);




let nextBtn = document.querySelector("#nextBtn");
nextBtn.addEventListener("click", function () { 
let chosenAnswer = document.quiz.answer.value;

console.log(chosenAnswer);   

if (chosenAnswer == Questions[index]["correctAnswer"]) { 
  i.innerHTML = 45;
  correctChoice += 2;
} else{
  i.innerHTML = 45;
  wrongChoice += 0;
}


if (currentQuestion == 8) {  
  document.querySelector(".quizContainer").hidden = true;
  return showResult(correctChoice);
} else if (currentQuestion == 7) {
  nextBtn.innerHTML = "დასრულება";
}
currentQuestion += 1;


index += 1;

progressBar.value += 12.5;
document.getElementById('total').innerHTML =currentQuestion+
   " out of " + "8";


questionText.innerHTML = Questions[index]["question"]; 
for (let i = 0; i < choicesArr.length; i++) {
  choicesArr[i].innerHTML = Questions[index]["choices"][i];
}

});



//ლიდერბორდი
function userInput(){
  let i;
  
  for (i = 0; i < localStorage.length; i++)   { 
  } 
}
  var inp=localStorage.getItem(localStorage.key(i));
  console.log(inp);
  var inp1=JSON.parse(inp);
  console.log(inp1);
 

function showResult(result) {
  document.getElementById("resultArea").hidden = false;
 
  document.getElementById("userName1").innerText= inp1.name+" "+inp1.surname;

  document.getElementById("groupCode").innerText=inp1.key;


  document.getElementById('quizLevel').innerHTML =  
     "Medium";
  
  document.getElementById('totalScore').innerHTML =
     result +"/16";

 
}


