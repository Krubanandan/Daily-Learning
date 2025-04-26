const questions = [
    { question: "Qualification", options: ["XII", "X", "B.E"] },
    { question: "Thermodynamics", options: ["Conduction", "Radiation", "Convection"] },
    { question: "Mechanical", options: ["Manufacturing", "Designing", "Fluid"] }
  ];
  

const data=['kruba','nandan','anu'];
const quiz=document.getElementById('quiz-container');

for(let i=0;i<questions.length;i++){
    let divs=document.createElement('div');
    divs.classList.add('questions');
    let ques=document.createElement('p');
    ques.innerText=questions[i].question;
    divs.appendChild(ques);
    for(let j=0;j<questions[i].options.length;j++){
        let radiobutton=document.createElement('input');
        radiobutton.type='radio';
        radiobutton.name=questions[i].question;
        let label=document.createElement('label');
        label.innerText=questions[i].options[j];
        let w = document.createElement("BR");
        divs.appendChild(radiobutton);
        divs.appendChild(label);
        divs.appendChild(w);
    }
    
    quiz.appendChild(divs);
}


// const next=document.getElementById('next');
// let q=1;
// const prev=document.getElementById('prev');
// const submit=document.getElementById('submit');
// next.addEventListener('click',(e)=>{
//     e.preventDefault();
//     const ques=document.getElementById('q'+q);
//     ques.classList.add('hidden');
//     const qnext=document.getElementById('q'+(q+1));
//     qnext.classList.remove('hidden');
//     q+=1;
//     prev.classList.remove('hidden');
//     if(q===3){
//         next.classList.add('hidden');
//         submit.classList.remove('hidden');

//     }
// })
// prev.addEventListener('click',(e)=>{
//     e.preventDefault();
//     const ques=document.getElementById('q'+q);
//     ques.classList.add('hidden');
//     const qnext=document.getElementById('q'+(q-1));
//     qnext.classList.remove('hidden');
//     q-=1;
//     if(q===1){
//         prev.classList.add('hidden');
//     }
//     if(q<3){
//         submit.classList.add('hidden');
//         next.classList.remove('hidden');

//     }

// })
