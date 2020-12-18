// LANGUAGE BUTTON FUNCTION: 

function languageClick() {

    var languageButton = document.getElementsByTagName("button");
    var english = document.getElementsByClassName("english");
    
   
    var buttonText = languageButton[0]["innerText"];
    languageButton[0]["innerText"] = "EN";

    var english = document.getElementsByClassName("english");
    english[0]["innerText"] = "ROSIE O'DONNELL";
    english[1]["innerText"] = "Acerca de mí";
    english[2]["innerText"] = "Aquí estara la traduccion";

    if (buttonText == "EN") {
        languageButton[0]["innerText"] = "ES";
        english[0]["innerText"] = "ROSIE O'DONNELL";
        english[1]["innerText"] = "About Me";
        english[2]["innerText"] = "This section is going to tell you all about me and why I am applying for this course.";
    
    };
}

//ABOUT ME FUNCTION:

function popUp(){
    var aboutMeTest = document.getElementById("about-me");
    console.log(aboutMeTest);
    const newDiv = document.createElement("div"); //tag type anchor
    const newContent = document.createTextNode("This section is going to tell you all about me and why I am applying for this course.");
    newDiv.appendChild(newContent);
    newDiv.id = "about-me";
    newDiv.className = "english-div";
    const currentDiv = document.getElementById("about-me-heading");
    const insert = document.getElementById("me");
    if (aboutMeTest == null) {
    insert.insertBefore(newDiv, currentDiv); //(what I want, what I have: anchor)
    }
    else {
        var removeEl = document.getElementById("about-me");
        removeEl.remove();
        //insert.removeChild(newDiv);


        //I THINK I NEED TO ADD ANOTHER IF STATEMENT THAT SAYS = IF "ABOUT ME"[INNER-TEXT] = "ACERCA DE MI", THEN CREATE ELEMENT IN SPANSIH, ELSE JUST DO THIS FUNCTION
    }
    
}


//document.body.onload = addElement;

function practice() {
    const hiddenText = document.getElementsByClassName("practice");
    if (hiddenText.style.display == "none") {
        hiddenText.style.display = "block";
    } else {
        hiddenText.style.display = "none";
    }
}
