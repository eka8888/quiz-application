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
      "რომელი while loop-ის სწორი სინტაქსი?",
    choices: [
        "while(i<=10)", 
        "while i=1 to 10", 
        "while(i<=10;i++)",
        "სამივე პასუხი სწორია",
      ],      
    correctAnswer: 0,
  },
  {
    question: "რომელი for loop-ის სწორი სინტაქსი?",
    choices: [
      "for i=1 to 5",
      "for(i=0;i<=5;i++)",
      "for(i=0;i<=5;)",
      "for(i<=5;i++)",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "როგორ შეგვიძლია კომენტარის გაკეთება ჯავასკრიპტში?",
    choices: [
      "///",
      "//",
      "||",
      "/*",
    ],
    correctAnswer: 1,
  },
  {
      question:
        "როგორ შეგვიძლია რამოდენიმე ხაზიანი კომენტარის გაკეთება ჯავასკრიპტში?",
      choices: [
        "///",
        "//",
        "||",
        "/* */",
      ],
      correctAnswer: 3,
    },
    {
      question:
        "რომელია მასივის ჩაწერის სწორი ფორმა?",
      choices: [
        "let color=['red','green'];",
        "let color='red','green';",
        "let color=('red','green');",
        "let color={'red','green'};",
      ],
      correctAnswer: 0,
    },
    {
      question:
        "როგორ შეგვიძლია უმაღლესი რიცხვის პოვნა?",
      choices: [
        "top(x,y)",
        "Math.max(x,y)",
        "Math.ceil(x,y)",
        "ceil(x,y)",
      ],
      correctAnswer: 1,
    },
    {
      question:
        "როგორ შემოგვაქვს ცვლადი ჯავასკრიპტში?",
      choices: [
        "v color;",
        "var color",
        "variable color;",
        "არცერთი პასუხი არ არის სწორი",
      ],
      correctAnswer: 1,
    },
    {
      question:
        "რომელ ოპერატორს ვიყენებთ ცვლადის შემოტანისას?",
      choices: [
        "=",
        "-",
        "*",
        "x",
      ],
      correctAnswer: 0,
    },
    {
      question:
        "რას დაგვიბრუნებს ჩანაწერი:Boolean(10>9)?",
      choices: [
        "Nan",
        "true",
        "false",
        "არცერთი პასუხი არ არის სწორი",
      ],
      correctAnswer: 1,
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


// timer 
var i = document.getElementById('countdown');


function startCount() { 
if (parseInt(i.innerHTML)>0) {

   i.innerHTML = parseInt(i.innerHTML)-1;  
}else {
  i.innerHTML = 30;
  if (currentQuestion == 5) {  
    document.querySelector(".quizContainer").hidden = true;
    return showResult(correctChoice);
  } else if (currentQuestion == 4) {
    nextBtn.innerHTML = "დასრულება";
  }
  currentQuestion += 1;
  

  index += 1;

  progressBar.value += 10;
  document.getElementById('total').innerHTML =currentQuestion+
     " out of " + "10";


  questionText.innerHTML = Questions[index]["question"]; 
  for (let i = 0; i < choicesArr.length; i++) {
    choicesArr[i].innerHTML = Questions[index]["choices"][i];
  }

}
}
var timerId = setInterval(startCount,1000);

//შემდეგ კითხვაზე გადასვლა


let nextBtn = document.querySelector("#nextBtn");
nextBtn.addEventListener("click", function () { 
let chosenAnswer = document.quiz.answer.value;

console.log(chosenAnswer);   

if (chosenAnswer == Questions[index]["correctAnswer"]) { 
  i.innerHTML = 30;
  correctChoice += 3;
} else{
  i.innerHTML = 30;
  wrongChoice -= 1;
}


if (currentQuestion == 10) {  
  document.querySelector(".quizContainer").hidden = true;
  return showResult(correctChoice);
} else if (currentQuestion == 9) {
  nextBtn.innerHTML = "დასრულება";
}
currentQuestion += 1;


index += 1;

progressBar.value += 20;
document.getElementById('total').innerHTML =currentQuestion+
   " out of " + "10";


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
     "Hard";
  
  document.getElementById('totalScore').innerHTML =
     result +"/30";
}


