// LANGUAGE BUTTON FUNCTION: 

function languageClick() {

    var languageButton = document.getElementsByTagName("button");
    var english = document.getElementsByClassName("english");
    
   
    var buttonText = languageButton[0]["innerText"];
    languageButton[0]["innerText"] = "EN";

    var english = document.getElementsByClassName("english");
    english[0]["innerText"] = "HOLA! \n SOY ROSIE! \n BIENVENIDA A MI APLICACION!";
    english[1]["innerText"] = "Acerca de mí";
    english[2]["innerText"] = "Hazme click";
    //english[2]["innerText"] = "Aquí estara la traduccion";

    //var element = document.getElementsById("about-me")
    // if (element == null) {
    //     element["innerText"] = "Aquí estara la traduccion";

    // }

    if (buttonText == "EN") {
        languageButton[0]["innerText"] = "ES";
        english[0]["innerText"] = "HEY! \n I'M ROSIE! \n WELCOME TO MY APPLICATION!";
        english[1]["innerText"] = "About Me";
        english[2]["innerText"] = "Click me";
        //english[2]["innerText"] = "This section is going to tell you all about me and why I am applying for this course.";
    
    };
   
}

// add in this function, if AboutMeTest == null - add in translation or don't - THIS IS NECESSARY - DO THIS!

//ABOUT ME FUNCTION:

function popUp(){
    var aboutMeTest = document.getElementById("about-me");
    console.log(aboutMeTest);
    const newDiv = document.createElement("div"); //tag type anchor
    const newContent = document.createTextNode(" I 💕 food!  My two favourite chefs are Meera Sodha (check out her vegan column here) and Nigella Lawson. If you’re a Nigella fan, you might have noticed that my colour scheme is inspired by her new book, Cook, Eat, Repeat. Try these Ruby Noodles… they won’t disappoint! \n I love water. My order of preference for swimming destinations are: \n The sea > a big lake > a river > a stream > a bath (alright, just for a soak) \n  If I can’t have those I’ll settle for London Fields Lido (yes, even in the winter)  \n  … not this Winter though! This year’s changed things a bit and I’ve ditched my goggles for pedals. I’m still at stage ‘all the gear, no idea’. \n I love languages - When I was 23, I moved to Spain to learn Spanish. I didn’t know much when I went, but now I’m fluent! \n   I’m passionate about homelessness. I currently work as a caseworker for a homeless charity, and have been volunteering within the sector for the last 7 years. Now, I want to harness my ability to my a broader social impact. ");
    const newContentSpanish = document.createTextNode("aqui estara la traduccion");

    // Getting the translation button to work:
    const spanishTest = document.getElementById("about-me-heading");
    if (spanishTest["innerText"] == "HERE WILL BE AN A NICE PIC") {
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
//THERE IS AN ISSUE UP HERE THAT ONCE IT HAS TRANSLATED TO SPANISH IT DOESN'T GO BACK. I THINK I NEED TO FIX THIS IN THE TRANSLATION FUNCTION

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
