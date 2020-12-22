// LANGUAGE BUTTON FUNCTION: 

function languageClick() {

    var languageButton = document.getElementsByTagName("button");
    var english = document.getElementsByClassName("english");
    
   
    var buttonText = languageButton[0]["innerText"];
    languageButton[0]["innerText"] = "EN";

    var english = document.getElementsByClassName("english");
    english[0]["innerText"] = "ROSIE O'DONNELL";
    english[1]["innerText"] = "Acerca de mí";
    english[2]["innerText"] = "Hazme click";
    //english[2]["innerText"] = "Aquí estara la traduccion";

    //var element = document.getElementsById("about-me")
    // if (element == null) {
    //     element["innerText"] = "Aquí estara la traduccion";

    // }

    if (buttonText == "EN") {
        languageButton[0]["innerText"] = "ES";
        english[0]["innerText"] = "ROSIE O'DONNELL";
        english[1]["innerText"] = "About Me";
        english[2]["innerText"] = "Click me";
        //english[2]["innerText"] = "This section is going to tell you all about me and why I am applying for this course.";
    
    };
   
}

// add in this function, if AboutMeTest == null - add in translation or don't

//ABOUT ME FUNCTION:

function popUp(){
    var aboutMeTest = document.getElementById("about-me");
    console.log(aboutMeTest);
    const newDiv = document.createElement("div"); //tag type anchor
    const newContent = document.createTextNode("This section is going to tell you all about me and why I am applying for this course.");
    const newContentSpanish = document.createTextNode("aqui estara la traduccion");

    // Getting the translation button to work:
    const spanishTest = document.getElementById("about-me-heading");
    if (spanishTest["innerText"] == "About Me") {
    newDiv.appendChild(newContent);
    } else {
        newDiv.appendChild(newContentSpanish);
    }

    newDiv.id = "about-me";
    newDiv.className = "english";
    const currentDiv = document.getElementById("about-me-heading");
    const insert = document.getElementById("me");
    if (aboutMeTest == null) {
    insert.insertBefore(newDiv, null); //(what I want, what I have: anchor) //change this back to currentDiv
    }
    else {
        var removeEl = document.getElementById("about-me");
        removeEl.remove();
        //insert.removeChild(newDiv);
    }
}


//MY SKILLS FUNCTION:

function popUp2() {
    var iconTest = document.getElementById("icon-1");
    const img = document.createElement("img");
    img.src = "javascript.png";
    img.id = "icon-1";
    var currentDiv2 = document.getElementById("test");
    var insert2 = document.getElementById("my-skills");


    var iconTest2 = document.getElementById("icon-2")
    var img2 = document.createElement("img");
    img2.src = "css3.png";
    img2.id = "icon-2";
    

    var iconTest3 = document.getElementById("icon-3")
    var img3 = document.createElement("img");
    img3.src = "html5.png";
    img3.id = "icon-3";
   
    // add in the other elements here


if (iconTest == null && iconTest2 == null && iconTest3 == null) {
    insert2.insertBefore(img, null); 
    insert2.insertBefore(img2, null); 
    insert2.insertBefore(img3, null); 
    
    }
    else {
        var removeEl = document.getElementById("icon-1");
        removeEl.remove();
        var removeEl2 = document.getElementById("icon-2");
        removeEl2.remove();
        var removeEl3 = document.getElementById("icon-3");
        removeEl3.remove();
    }
   
    // create the div (containing divs, then make it a grid in CSS)
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
