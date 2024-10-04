function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}

function cancel(){
    const navbar = document.querySelector(".cancel")
    navbar.style.transform = "translateY(-500px)"
}

// Typewriter effect 

const texts = [
    "DEVELOPER",
    "DESIGNER",
    "AIRDROPER"
]

let speed =100;
const textElements = document.querySelector(".typerwriter-text");
let textindex = 0;
let characterindex = 0;

function typerwriter(){
    if(characterindex){
        textElementsinnerHTML += [textsindex].ChartAt[characterindex]
    characterindex ++;
    setTimeout(typerwriter, speed);
    }
    else{
        setTimeout(eraseText, 1000)
    }
  }

function eraseText(){
    if(textElements.innerHTML.length >0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
    setTimeout(eraseText, 50)
    }
    else{
        textindex = (textindex + 1)% texts.lenght;
        characterindex = 0;
        setTimeout(typeWriter, 500)
    }
}

window.onload = typerwriter