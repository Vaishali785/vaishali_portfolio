function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 500) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll',scrollUp);

function hamClick(){
    const hamButton = document.getElementById("ham-button");
    const hamLogo = document.getElementsByClassName("ham-logo");
    const navList = document.getElementById("nav");
    const navoption = document.getElementsByClassName("nav-option")[0];
    const header = document.getElementsByClassName("logo")[0];
    
    if(hamButton.checked){
        hamLogo[0].classList.add("check");
        navList.classList.add('navigation-list');
        navList.classList.remove('navigation');
        header.classList.add("no-logo");
    }
    
    else{  //if(hamLogo[0].classList.contains('check')){
        hamLogo[0].classList.remove("check");
        navList.classList.remove('navigation-list');
        navList.classList.add('navigation');
        header.classList.remove("no-logo");
    }
}


function Fun(){
    document.getElementsByClassName('ham-logo')[0].classList.remove('check');    
    document.getElementById('nav').classList.remove('navigation-list');    
    document.getElementById('nav').classList.add('navigation'); 
    document.getElementById("ham-button").checked= false;
    document.getElementsByClassName("logo")[0].classList.remove("no-logo");
}


/*   *******************************typing animation**********************************   */


// function settime(y){
//     return new Promise(resolve=> {
//         setTimeout(()=>{
//             resolve(y);
//         },500);
//     });
// }

// async function callLetter(){
//     let word=`Frontend Developer`;
//     document.getElementsByClassName("intro-word")[0].innerText='';
//     for (let i=0; i<word.length;i++){
//         let result= await settime(word.charAt(i));
//         console.log(result);
//         document.getElementsByClassName("intro-word")[0].innerHTML+=result;
//     }
// }


// function repeatFunction(){
//     setInterval(function(){callLetter()},11500);
// }

// window.addEventListener("load",callLetter);
// repeatFunction();


/* ---------------------dark mode ----------------------------*/

function toggle(e){
    const toggle = document.getElementById("toggle");
    const toggleSwitch = document.getElementsByClassName("toggle-switch");
    const toggleSwitchList = document.getElementsByClassName("toggle-switch")[0];

    if(toggle.checked){
        toggleSwitch[0].classList.add("on");
        toggleSwitch[0].classList.remove("off");
        changeTheme();
    }
    else if(toggleSwitchList.classList.contains('on')){
        toggleSwitch[0].classList.remove("on");
        toggleSwitch[0].classList.add("off");
        changeTheme();
    }
}

function changeTheme(){
    const toggle = document.getElementById("toggle");
    if(toggle.checked){
        document.body.setAttribute('theme','dark');
        localStorage.setItem("theme","dark");
        console.log(localStorage.getItem("theme"));
    }else if(toggle.checked===false){
        localStorage.setItem("theme",'');
        console.log(localStorage.getItem("theme"));
        document.body.setAttribute('theme',localStorage.getItem("theme"));
    }
}