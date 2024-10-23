// transport functions

function go1(){
    window.location.href =("ybtask.html");
}

let condition0 = false; //   the important condition  in all steps


// youtube functions

let condition1 = false;

function wordsnumber(){
    const inputVal = document.getElementById("words");
    if(inputVal.value<5){
        alert("Input is wrong !")
        condition1 = false;
        let btn1 = document.getElementById("checkWord");
        btn1.style.background ="linear-gradient(#BF0D32,#F22745,#fff)";
        btn1.style.border ="1px solid #BF0D32";
    } else if(inputVal.value>6){
        alert("Input is wrong !")
        condition1 = false;
         let btn1 = document.getElementById("checkWord");
        btn1.style.background ="linear-gradient(#BF0D32,#F22745,#fff)";
        btn1.style.border ="1px solid #BF0D32";
    }else{
        alert("Then verify successfully")
        condition1 = true;
        let btn1 = document.getElementById("checkWord");
        btn1.style.background ="green";
        btn1.style.border ="1px solid green";
    }
}



let condition2 = false;

function verfUrl(){
    const inputVal2 = document.getElementById("urlvd");
    if(inputVal2.value ==="https://youtu.be/tEu_uuWXNdo?si=hFPq15FG6PhDp3Qq"){
        alert("Then verify successfully");
        condition2= true;
        let btn2 = document.getElementById("checkurl");
        btn2.style.background ="green";
        btn2.style.border ="1px solid green";
    } else if(inputVal2.value !=="https://youtu.be/tEu_uuWXNdo?si=hFPq15FG6PhDp3Qq"){
        alert("Input is wrong");
        condition2= false;
        let btn2 = document.getElementById("checkurl");
        btn2.style.background ="linear-gradient(#BF0D32,#F22745,#fff)";
        btn2.style.border ="1px solid #BF0D32";
    }
}



let condition3 =false;

function vrai1(){
    if(condition1==true && condition2==true){
        let generalbtn1 = document.getElementById("btnNext");
        generalbtn1.style.background ="green";
        condition3 = true;
    }else{
        condition3 =false;
    }
}

function go2(){
     if(condition3==true){
        window.location.href =("adstask.html");
     }else{
        alert("Inputs are wrong");
     }
}




// Ads functions


let condition4 = false;
let condition5 = false;
let condition6 = false;
let condition7 = false;

let timeLeft = 60;
const timerElement = document.getElementById("timer");

const countdown = setInterval(() => {
    timeLeft--;
    timerElement.textContent = timeLeft;

    if (timeLeft <= 0) {
        clearInterval(countdown);
        timerElement.textContent = "Time's up!";
        condition7 = true;
    }
}, 1000);

function click1(){
    console.log("clicked");
    condition4=true;
}

function click2(){
    console.log("clicked");
    condition5 =true;
}

function changecolor(){
    if(condition4==true && condition5==true && condition7==true){
        let btn3 =document.getElementById("btnNext2");
        btn3.style.background="green";
        condition6 =true;
    }else{
        condition6 =false;
    }
}

function go3(){
    if(condition6==true ){
        window.location.href =("shortask.html");
    }else{
        alert("Wait for the timer to finish and then click the buttons.");
    }
}





// short link functions


let condition8 = false;

function checkShort(){
    let inputVal3 = document.getElementById("shortInp");
    let btn4 = document.getElementById("btn4");
    let btn5 = document.getElementById("finalButton");
    if(inputVal3.value=="https://ziopast.blogspot.com/2024/10/link-was-shorted.html"){
        alert("Then verify successfully");
        condition8 = true;
        btn4.style.background="green";
        btn5.style.background="green";
    }else{
        alert("Input is wrong");
        condition8 = false;
    }
}


// all the tasks

function validerall(){
   if(condition8 == true){
      window.location.href=("codecheck.html");
   }else{
    alert("input is wrong !");
   }
    
}






// random generator 


function generateRandomCode(length = 14) {
    const letters = 'HB';
    const characters = letters + '0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let randomCode = '';
    
    // Ensure the first two characters are always letters
    randomCode += letters[Math.floor(Math.random() * letters.length)];
    randomCode += letters[Math.floor(Math.random() * letters.length)];
    
    // Generate the remaining characters
    for (let i = 2; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomCode += characters[randomIndex];
    }

    return randomCode;
}

function showRandomCode() {
    // Generate the random code
    const code = generateRandomCode(14);
    
    // Display the code in the input box
    document.getElementById("inptLast").value = code;
}

function copy(){
    let inpott=document.getElementById("inptLast");
    inpott.select();
    document.execCommand("copy");
}