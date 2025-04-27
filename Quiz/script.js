const questions = [
    { question: "Qualification", options: ["XII", "X", "B.E"] },
    { question: "Thermodynamics", options: ["Conduction", "Radiation", "Convection"] },
    { question: "Mechanical", options: ["Manufacturing", "Designing", "Fluid"] }
  ];

const quiz=document.getElementById('quiz-container');


function createQues(obj,index){
    let divs=document.createElement('div');
    divs.classList.add('questions');
    divs.id='q'+index;
    if(index!=0){
        divs.classList.add('hidden');
    }
    let ques=document.createElement('p');
    ques.innerText=obj.question;
    divs.appendChild(ques);
    for(let j=0;j<obj.options.length;j++){
        let radiobutton=document.createElement('input');
        radiobutton.type='radio';
        radiobutton.name=obj.question;
        let label=document.createElement('label');
        label.innerText=obj.options[j];
        let w = document.createElement("BR");
        divs.appendChild(radiobutton);
        divs.appendChild(label);
        divs.appendChild(w);
    }
    
    quiz.appendChild(divs);

}

function loadQues(){
    questions.forEach((obj,index)=>{
        createQues(obj,index);
    })
}

// for(let i=0;i<questions.length;i++){
//     let divs=document.createElement('div');
//     divs.classList.add('questions');
//     divs.id='q'+i;
//     if(i!=0){
//         divs.classList.add('hidden');
//     }
//     let ques=document.createElement('p');
//     ques.innerText=questions[i].question;
//     divs.appendChild(ques);
//     for(let j=0;j<questions[i].options.length;j++){
//         let radiobutton=document.createElement('input');
//         radiobutton.type='radio';
//         radiobutton.name=questions[i].question;
//         let label=document.createElement('label');
//         label.innerText=questions[i].options[j];
//         let w = document.createElement("BR");
//         divs.appendChild(radiobutton);
//         divs.appendChild(label);
//         divs.appendChild(w);
//     }
    
//     quiz.appendChild(divs);
// }


const next=document.getElementById('next');
let q=0;
const prev=document.getElementById('prev');
const submit=document.getElementById('submit');
next.addEventListener('click',(e)=>{
    e.preventDefault();
    const ques=document.getElementById('q'+q);
    ques.classList.add('hidden');
    const qnext=document.getElementById('q'+(q+1));
    qnext.classList.remove('hidden');
    q+=1;
    prev.classList.remove('hidden');
    console.log(questions.length);
    console.log(q);
    if(q==questions.length-1){
        next.classList.add('hidden');
        submit.classList.remove('hidden');

    }
})
prev.addEventListener('click',(e)=>{
    e.preventDefault();
    const ques=document.getElementById('q'+q);
    ques.classList.add('hidden');
    const qnext=document.getElementById('q'+(q-1));
    qnext.classList.remove('hidden');
    q-=1;
    if(q===0){
        prev.classList.add('hidden');
    }
    if(q<questions.length){
        submit.classList.add('hidden');
        next.classList.remove('hidden');

    }

})

const add=document.getElementById('add');
const addqBtn=document.getElementById('addQBtn');


add.addEventListener('click',()=>{
    const addques=document.getElementById('addques');
    addques.classList.remove('hidden');
})

addqBtn.addEventListener('click',()=>{
    const qN=document.getElementById('qName');
    const o1=document.getElementById('oN1');
    const o2=document.getElementById('oN2');
    const o3=document.getElementById('oN3');
    // console.log(qN.value);
    const obj={question:qN.value,options:[o1.value,o2.value,o3.value]};
    // console.log(obj);
    questions.push(obj);

    createQues(obj,questions.length-1);

    const addques=document.getElementById('addques');
    addques.classList.add('hidden');
    console.log(questions);

})

loadQues();