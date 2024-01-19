const Querstion = [
  {
    que: "Who is the first president of india ?",
    a: "Rajender prasad",
    b: "Jawhal lal nehru",
    c: "Gandi",
    d: "None",
    correct: "a",
  },

  {
    que: "Who is the first prime minister of india ?",
    a: "Rajender prasad",
    b: "Jawahal lal nehru",
    c: "indra ",
    d: "None",
    correct: "b",
  },

  {
    que: "How many state in India ?",
    a: "28",
    b: "32",
    c: "26",
    d: "34",
    correct: "a",
  },

  {
    que: "What does WHO stand for ?",
    a: "World healt organigation",
    b: "world wide web",
    c: "world trading orginigation ",
    d: "None",
    correct: "a",
  },

  {
    que: "How many union Territories in India ?",
    a: "15",
    b: "6",
    c: "8",
    d: "9",
    correct: "c",
  },

 {
    que: "Who is the current prime minister of india ?",
    a: "Rajender prasad",
    b: "Nerender Modi",
    c: "ndra Gandi",
    d: "Jawhal lal nehru",
    correct: "b",
  },

{
    que: "Who is the current president of india ?",
    a: "Rajender prasad",
    b: "Jawhal lal nehru",
    c: "Droupadi Murmu",
    d: "Ram Nath Kovind",
    correct: "c",
  },

  {
    que: "2023 ODI world cup wining team ?",
    a: "India",
    b: "England",
    c: "pakistan",
    d: "Austalia",
    correct: "d",
  },

  {
    que: "how many Country in world ?",
    a: "195",
    b: "250",
    c: "175",
    d: "320",
    correct: "a",
  },

  {
    que: " Date of seound world war is started ?",
    a: "1934",
    b: "1932",
    c: "1939",
    d: "1976",
    correct: "c",
  },
];

let index = 0;
const total = Querstion.length;
let right = 0,
  wrong = 0;
const optioninput = document.getElementsByClassName("options");
const Quebox = document.getElementById("Quebox");
const loadQuestion = () => {
  if(index<10){
    const data = Querstion[index];
  Quebox.innerText = `${index + 1})${data.que}`;
  optioninput[0].nextElementSibling.innerHTML = data.a;
  optioninput[1].nextElementSibling.innerHTML = data.b;
  optioninput[2].nextElementSibling.innerHTML = data.c;
  optioninput[3].nextElementSibling.innerHTML = data.d;
  }else{
    document.getElementById('box').innerHTML=
    `<h2>Thank you for planing Quiz</h2> 
    ${right} / ${total}`
  }
};

document.getElementById("btn").addEventListener("click", () => {
  const data = Querstion[index];
  const ans = getAnswer();
  if (ans === data.correct) {
    right++;
  } else {
    wrong++;
  }
  index=index+1;
  loadQuestion();
});

const getAnswer = () => {
  for (let i = 0; i < 4; i++) {
    if (optioninput[i].checked) {
        return optioninput[i].value;
    }
  }
};
loadQuestion();
