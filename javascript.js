// LANGUAGE BUTTON FUNCTION: 

function languageClick() {

    var languageButton = document.getElementsByTagName("button");
    var english = document.getElementsByClassName("english");
   
    var buttonText = languageButton[0]["innerText"];
    languageButton[0]["innerText"] = "EN";

    var english = document.getElementsByClassName("english");
    english[0]["innerText"] = "BIENVENIDA";
    
    if (buttonText == "EN") {
        languageButton[0]["innerText"] = "ES";
        english[0]["innerText"] = "WELCOME";
    };
}

//ABOUT ME FUNCTION:

function popUp(){
    const newDiv = document.createElement("div"); //tag type anchor
    const newContent = document.createTextNode("This section is going to tell you all about me and why I am applying for this course.");
    newDiv.appendChild(newContent);
    newDiv.id = "about-me-box-2";
    const currentDiv = document.getElementById("about-me-box-1");
    const insert = document.getElementById("quarter-two");
    insert.insertBefore(newDiv, currentDiv); //(what I want, what I have: anchor)
    
}

//this bit below isn't working, but works in separate folder

//document.body.onload = addElement;

