
function store(){ // localStorage შენახვა
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
console.log(localStorage);

//
 

let Questions = [
    {
      question:
        "რომელი სიმბოლო გამოიყენება ჯავასკრიპტში სპეციალური სიმბოლოების შემოსატანად?",
      choices: ["&", "%", "$", "/"],      
      correctAnswer: 3,
    },
    {
      question: "როგორ ინახავს ჯავასკრიპტი თარიღებს Date ობიექტში?",
      choices: [
        "განვლილი დღეების რაოდენობა 1900 წლის პირველი იანვრიდან",
        "განვლილი წამების რაოდენობა 1970 წლის პირველი იანვრიდან",
        "განვლილი მილიწამების რაოდენობა 1970 წლის პირველი იანვრიდან",
        "განვლილი წლების რაოდენობა 1970 წლიდან",
      ],
      correctAnswer: 2,
    },
    {
      question:
        "ობიექტის შექმნის შემდეგ შეგვიძლია თუ არა დავუმატოთ, მოვაშოროთ წავუშალოთ პარამეტრი?",
      choices: [
        "დიახ",
        "მხოლოდ გარკვეულ ობიექტებს",
        "მხოლოდ ახალი ინსტანსების შექმნის შემთხვევაში",
        "არა",
      ],
      correctAnswer: 0,
    },
    {
        question:
          "როგორ შეგვიძლია გამოვიძახოთ ფუნქცია სახელით myFunction?",
        choices: [
          "myFunction",
          "myFunction()",
          "function()",
          "არცერთი პასუხი არ არის სწორი",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "როგორ უნდა დავწეროთ if statement ჯავასკრიპტში?",
        choices: [
          "if(i==5)",
          "if{i==5}",
          "if[i==5]",
          "არცერთი პასუხი არ არის სწორი",
        ],
        correctAnswer: 0,
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
  

var i = document.getElementById('countdown');


function startCount() { 
  if (parseInt(i.innerHTML)>0) {

     i.innerHTML = parseInt(i.innerHTML)-1;  
  }else {
    i.innerHTML = 60;
    if (currentQuestion == 5) {  
      document.querySelector(".quizContainer").hidden = true;
      return showResult(correctChoice);
      
    } else if (currentQuestion == 4) {
      nextBtn.innerHTML = "დასრულება";
    }
    currentQuestion += 1;
    
  
    index += 1;
  
    progressBar.value += 20;
    document.getElementById('total').innerHTML =currentQuestion+
       " out of " + "5";
  
  
    questionText.innerHTML = Questions[index]["question"]; 
    for (let i = 0; i < choicesArr.length; i++) {
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
    i.innerHTML = 60;
    correctChoice += 1;
  } else{
    i.innerHTML = 60;
    wrongChoice += 0;
  }

  


  if (currentQuestion == 5) {  
    document.querySelector(".quizContainer").hidden = true;
    document.querySelector("#resultArea").hidden=false;
    return showResult(correctChoice);
  } else if (currentQuestion == 4) {
    nextBtn.innerHTML = "დასრულება";
  }
  currentQuestion += 1;
  

  index += 1;

  progressBar.value += 20;
  document.getElementById('total').innerHTML =currentQuestion+
     " out of " + "5";


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
     "Easy";
  
  document.getElementById('totalScore').innerHTML =
     result +"/5";

 
}


