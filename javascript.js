
// LANGUAGE BUTTON FUNCTION: 

function languageClick() {

    var languageButton = document.getElementsByTagName("button");
    var english = document.getElementsByClassName("english");
    
    var buttonText = languageButton[0]["innerText"];
    languageButton[0]["innerText"] = "EN";

    var english = document.getElementsByClassName("english");
    english[0]["innerText"] = "HOLA! \n SOY ROSIE. \n BIENVENIDO A MI SOLICITUD.";
    english[1]["innerText"] = "Acerca de mí";
    english[2]["innerText"] = "Hazme click";

    if (buttonText == "EN") {
        languageButton[0]["innerText"] = "ES";
        english[0]["innerText"] = "HEY! \n I'M ROSIE. \n WELCOME TO MY APPLICATION.";
        english[1]["innerText"] = "I'm a self-taught developer, applying to Founders and Coders Spring 2021 cohort to turn my dream of being a professional programmer into a reality! I've been coding for around 9 months and I love it! In fact, I’d go so far to say I’m obsessed, which I think is a pretty cool way to start a career.<br> But before I tell you why I'm applying for FAC I'd like to tell you a little bit about my non-computing side...";
        english[2]["innerText"] = "Click me";

    };

    //this will translate the About Me texted if it is already open:
    var element = document.getElementById("about-me")
    if (element != null) {
        element["innerText"] = "¡Me encanta la comida! Mis dos chefs favoritos son Meera Sodha (echa un vistazo a su columna vegana aquí) y Nigella Lawson. Si eres fan de Nigella, quizás te hayas dado cuenta de que mi esquema de colores está inspirado en su nuevo libro, Cook, Eat, Repeat. Prueba estos garabatos de rubí... ¡no decepcionarán! Me encanta el agua. Mi orden de preferencia por los destinos de natación es";
    }

    if (element != null && buttonText == "EN") {
    element["innerText"] = "I 💕 food!  My two favourite chefs are Meera Sodha (check out her vegan column here) and Nigella Lawson. If you’re a Nigella fan, you might have noticed that my colour scheme is inspired by her new book, Cook, Eat, Repeat. Try these Ruby Noodles… they won’t disappoint! \n I love water. My order of preference for swimming destinations are: \n A calm sea > a clear lake > a river > a stream > a bath (alright, just for a soak) \n  If I can’t have those I’ll settle for London Fields Lido (yes, even in the winter)  \n  … not this Winter though! This year’s changed things a bit and I’ve ditched my goggles for pedals. I’m still at stage ‘all the gear, no idea’. \n I love dramatic sunsets and sunrises (you'll find some of the best I've seen at the bottom of this page).\n I love languages - When I was 23, I moved to Spain to learn Spanish. I didn’t know much when I went, but now I’m fluent! \n   I’m passionate about ending homelessness. I currently work as a caseworker for a homeless charity, and have been volunteering within the sector for the last 7 years. Now, I want to harness my capability to make a broader social impact.";

}
}

const lang = document.getElementById("language-button");
lang.addEventListener('click', languageClick);

//ABOUT ME FUNCTION:

function popUp(){
    var aboutMeTest = document.getElementById("about-me");
    console.log(aboutMeTest);
    const newDiv = document.createElement("div"); //tag type anchor
    const newContent = document.createTextNode("I 💕 food!  My two favourite chefs are Meera Sodha (check out her vegan column here) and Nigella Lawson. If you’re a Nigella fan, you might have noticed that my colour scheme is inspired by her new book, Cook, Eat, Repeat. Try these Ruby Noodles… they won’t disappoint! \n I love water. My order of preference for swimming destinations are: \n A calm sea > a clear lake > a river > a stream > a bath (alright, just for a soak) \n  If I can’t have those I’ll settle for London Fields Lido (yes, even in the winter)  \n  … not this Winter though! This year’s changed things a bit and I’ve ditched my goggles for pedals. I’m still at stage ‘all the gear, no idea’. \n I love dramatic sunsets and sunrises (you'll find some of the best I've seen at the bottom of this page).\n I love languages - When I was 23, I moved to Spain to learn Spanish. I didn’t know much when I went, but now I’m fluent! \n   I’m passionate about ending homelessness. I currently work as a caseworker for a homeless charity, and have been volunteering within the sector for the last 7 years. Now, I want to harness my capability to make a broader social impact. ");
    const newContentSpanish = document.createTextNode("¡Me encanta la comida! Mis dos chefs favoritos son Meera Sodha (echa un vistazo a su columna vegana aquí) y Nigella Lawson. Si eres fan de Nigella, quizás te hayas dado cuenta de que mi esquema de colores está inspirado en su nuevo libro, Cook, Eat, Repeat. Prueba estos garabatos de rubí... ¡no decepcionarán! Me encanta el agua. Mi orden de preferencia por los destinos de natación es");
    // newDiv.appendChild(newContent);
    // Getting the translation button to work:
    const spanishTest = document.getElementById("about-me-heading");
    if (spanishTest["innerText"] == "Acerca de mí") {
        newDiv.appendChild(newContentSpanish);
    } else {
        newDiv.appendChild(newContent);
    }

    newDiv.id = "about-me";
    newDiv.className = "englishCreated";
    const currentDiv = document.getElementById("about-me-heading");
    const insert = document.getElementById("me");
    if (aboutMeTest == null) {
    insert.insertBefore(newDiv, null); //(what I want, what I have: anchor) //change this back to currentDiv
    }
    else {
        var removeEl = document.getElementById("about-me");
        removeEl.remove();
    }
}

const me = document.getElementById("about-me-button");
me.addEventListener('click', popUp);

//MY SKILLS FUNCTION:

function popUp2() {
    var iconTest = document.getElementById("icon-1");
    const img = document.createElement("img");
    img.src = "css3.png"; 
    img.id = "icon-1";
    img.alt = "CSS 3";
    var insert2 = document.getElementById("my-skills-input");


    var iconTest2 = document.getElementById("icon-2")
    var img2 = document.createElement("img");
    img2.src = "javascript.png";
    img2.id = "icon-2";
    img2.alt = "Javascript";
    

    var iconTest3 = document.getElementById("icon-3")
    var img3 = document.createElement("img");
    img3.src = "html5.png";
    img3.id = "icon-3";
    img3.alt = "HTML 5";
   

    var iconTest4 = document.getElementById("icon-4")
    var img4 = document.createElement("img");
    img4.src = "VS-Code.png";
    img4.id = "icon-4";
    img4.alt = "Visual Studio Code";
   

    // add in the other elements here


if (iconTest == null && iconTest2 == null && iconTest3 == null && iconTest4 == null) {
    insert2.insertBefore(img, null); 
    insert2.insertBefore(img2, null); 
    insert2.insertBefore(img3, null); 
    insert2.insertBefore(img4, null)
    
    }
    else {
        var removeEl = document.getElementById("icon-1");
        removeEl.remove();
        var removeEl2 = document.getElementById("icon-2");
        removeEl2.remove();
        var removeEl3 = document.getElementById("icon-3");
        removeEl3.remove();
        var removeEl4 = document.getElementById("icon-4");
        removeEl4.remove();
    }

}
const skills = document.getElementById("skills-button");
skills.onclick = popUp2;


function photoPopUp() {


    var photoTest = document.getElementById("Australia");
    const photo = document.createElement("img");
    photo.src = "Australia.png";
    photo.id = "Australia";
    photo.className = "images";
    photo.alt = "Sunset over sea in Australia";
    var photoInsert = document.getElementById("my-images-input");

    if (photoTest == null) {
        photoInsert.insertBefore(photo, null);
    }
    else {
        var removeElement = document.getElementById("Australia");
        removeElement.remove();
    }
   
}

const photos = document.getElementById("photo-button");
photos.onclick = photoPopUp;

