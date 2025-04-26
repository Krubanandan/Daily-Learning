const form=document.getElementById("myForm");

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    alert("Form Submitted");

});

const name=document.getElementById('name');

name.addEventListener('change',(k)=>{
    const spanName=document.getElementById('nameCheck');
    if(k.target.value.length < 8){
        name.classList.remove("nameG");
        name.classList.add("nameR");
        
        spanName.innerHTML='Incorerect';

    }else{
        name.classList.remove("nameR");
        name.classList.add("nameG");
        spanName.innerHTML='';

    }
})

const age=document.getElementById('age');

age.addEventListener('input',(k)=>{
    
    if(k.target.value < 18){
        age.classList.remove("numG");
        age.classList.add("numR");

    }else{
        age.classList.remove("numR");
        age.classList.add("numG");

    }
})