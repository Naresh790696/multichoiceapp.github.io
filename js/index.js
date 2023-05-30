const question_ref = document.querySelector(".question");
const opt1_ref = document.getElementById("opt1");
const opt2_ref = document.getElementById("opt2");
const opt3_ref = document.getElementById("opt3");
const opt_ref = document.querySelectorAll(".answer");
const btn_ref = document.getElementById("submmit");
const scorebox_ref = document.querySelector(".scorebox");
const reset_ref = document.getElementById("refresh");
const showans_ref = document.getElementById("showans");
const ans_ref = document.querySelector(".answerbox");
let question_count =0;
let score =0;




const update_questions =()=>{
    question_ref.innerHTML = questions[question_count].Question;
    opt1_ref.innerHTML = questions[question_count].opt1;
    opt2_ref.innerHTML = questions[question_count].opt2;
    opt3_ref.innerHTML = questions[question_count].opt3;

}
update_questions();

const Get_checkedId = ()=>{
    let i;
    opt_ref.forEach(element => {
        if(element.checked){
            i = element.id;
        }
    });
    return i;
};

const refresh = ()=>{
    opt_ref.forEach((element)=>{
        element.checked = false;
    })
};

btn_ref.addEventListener("click",function Conductor(){
    let Matching_ele = Get_checkedId();
    if(Matching_ele === questions[question_count].ans){
        score++;
    }
    question_count++;
    refresh();

    if(question_count<questions.length){
        update_questions();
    }
    else{
        scorebox_ref.innerHTML = `Your score ${score} / Outof ${questions.length}`

    }

});


// showans_ref.addEventListener("click",()=>{
//    

// }
showans_ref.addEventListener("click",()=>{
  let anss =  questions[question_count].ans;
  ans_ref.innerHTML = `Answer is ${anss}`


})
  

reset_ref.addEventListener("click",()=>{
    window.location.reload("true")

});




// const question_ref = document.querySelector(".questions");
// const opt1_ref = document.getElementById("option1");
// const opt2_ref = document.getElementById("option2");
// const opt3_ref = document.getElementById("option3");
// const opt4_ref = document.getElementById("option4");
// const opt_ref = document.querySelectorAll(".answer");
// const btnn_ref = document.getElementById("submit");
// const Scorebox = document.querySelector(".scorebox");
// let question_count = 0;
// let score = 0;

// const update_questions = () => {
//     question_ref.innerHTML = Data[question_count].question;
//     opt1_ref.innerHTML = Data[question_count].opt1;
//     opt2_ref.innerHTML = Data[question_count].opt2;
//     opt3_ref.innerHTML = Data[question_count].opt3;
//     opt4_ref.innerHTML = Data[question_count].opt4;

// }
// update_questions();

// const Get_checkedId = (i) => {
//     // let i;
//     opt_ref.forEach((element) => {
//         if (element.checked) {
//             i = element.id;
//         }

//     })
//     return i;
// }

// const refresh = () => {
//     opt_ref.forEach((element) => {
//         element.checked = false;
//     })
// };

// btnn_ref.addEventListener("click", function Conductor() {
//     let Matching_ele = Get_checkedId(question_count);
//     if (Matching_ele === Data[question_count].ans) {
//         score++;
//     }
//     question_count++;

//     refresh();

//     if (question_count < Data.length) {
//         update_questions();
//     }
//     else {
//         Scorebox.innerHTML = `Your Score ${score}/${Data.length}`;
//     }


// })



