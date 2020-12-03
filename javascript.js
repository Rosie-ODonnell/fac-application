var languageButton = document.getElementsByTagName("button");
console.log(languageButton);

var english = document.getElementsByClassName("english");
console.log(english)
    // var englishDisplay = english.style.display;
    // console.log(englishDisplay)


function languageClick() {

    // var english = document.getElementsById("active");
    // var englishDisplay = english.style.display;
    // console.log(englishDisplay)
    // englishDisplay = "none";

    // var spanish = document.getElementById("nonActive");
    // var spanishDisplay = spanish.style.display;
    // spanishDisplay = "block";
    
    var buttonText = languageButton[0]["innerText"];
    languageButton[0]["innerText"] = "EN";

    var english = document.getElementsByClassName("english");
    english[0]["innerText"] = "BIENVENIDA";

    if (buttonText == "EN") {
        languageButton[0]["innerText"] = "ES";
        english[0]["innerText"] = "WELCOME";
        // englishDisplay = "block";
        // spanishDisplay = "none";
    };
}

// I could use the ID thing, but I could also just replace all of the text I want in this button = I can do that if it is too hard!

// function languageClick2 {
//     var textChange = englishVersion.style.dislay;
//     englishVersion.style.display = "none";

// }

// use the getElementsByClass - this will allow me to change all text with that class

//you could add another class "active" - whcih the one displayed
// you can then toggle classes