
// LANGUAGE BUTTON FUNCTION: 

function languageClick() {

    var languageButton = document.getElementsByClassName("language-buttons");
    var english = document.getElementsByClassName("english");
    
    var buttonText = languageButton[0]["innerText"];
    languageButton[0]["innerText"] = "EN";

    var english = document.getElementsByClassName("english");
    english[0]["innerText"] = "Acerca de mí";
    english[1]["innerText"] = "¿Por qué FAC?";
    english[2]["innerText"] = "¿Por qué yo?";
    english[3]["innerText"] = "¡Hola!";
    english[4]["innerText"] = "Soy Rosie."
    english[5]["innerText"] = "Bienvenido a mi \n Solicitud.";
    english[6]["innerText"] = "acerca de mí";
    english[7]["innerText"] = "aquí estará la traducción";
    english[8]["innerText"] = "Haz click para más";
    english[9]["innerText"] = "Fotos";
    english[10]["innerText"] = "¿por qué programar? \n ¿por qué fac?";
    english[11]["innerText"] = "¡la tecnología es emocionante! Y con la velocidad en la que cambia el mundo, quiero ser una de las fuerzas motrices";
    english[12]["innerText"] = "La programación tiene el potencial de ser utilizada para tanto bien, y como el software de código bajo y sin código aumenta en popularidad, quiero estar por delante de la curva para que pueda trabajar en una codificación más compleja para crear sistemas y productos que mejoren la vida de las personas.";
    english[13]["innerText"] = "La perspectiva del aprendizaje permanente es también un gran atractivo para la carrera. Me encanta la creatividad de la codificación y los constantes desafíos que conlleva - me deshago de esa sensación después de horas codificando cuando mi cerebro está gimiendo y no puedo continuar: Lo único que quiero hacer es ir a la cama y despertar con la cabeza clara para continuar.";
    english[14]["innerText"] = "I also like the flexibility and opportunities that being a developer offers. There’s not a medium or industry I can think of that doesn’t require technology in some form, which offers developers a unique route to moving between industries whilst constantly developing your skills.";
    english[15]["innerText"] = "Con la programación, siempre hay más que construir y más que aprender. Y también hay precaución que tener. Es importante analizar críticamente la velocidad a la que la tecnología reforma las industrias y el impacto que esto tiene. A menudo me pregunto si suficientes personas que trabajan en tecnología son constructivamente críticas de sus propios poderes; creo que más gente debería ser. Me encantaría trabajar en tecnología porque me asombra y aterroriza igualmente.";
    english[16]["innerText"] = "¿qué llevaré a la cohorte?";
    english[17]["innerText"] = "Tengo experiencia en la enseñanza, que sé por mi viaje de codificación hasta ahora es una habilidad valiosa. Los nuevos estudiantes son los mejores profesores para otros nuevos estudiantes, y también tengo la paciencia requerida...";
    english[18]["innerText"] = "Solución de problemas: mi trabajo actual requiere que resuelva problemas sobre el terreno y trabaje con nuevos casos todos los días.";
    english[19]["innerText"] = "aquí estará la tercero asunto";
    english[20]["innerText"] = "Habilidades técnicas";
    english[21]["innerText"] = "Encuéntrame en"

    if (buttonText == "EN") {
        languageButton[0]["innerText"] = "ES";
        english[0]["innerText"] = "About Me";
        english[1]["innerText"] = "Why FAC?";
        english[2]["innerText"] = "Why Me?";
        english[3]["innerText"] = "Hey!";
        english[4]["innerText"] = "I'm Rosie."
        english[5]["innerText"] = "Welcome to my \n application.";
        english[6]["innerText"] = "about me";
        english[7]["innerText"] = "I'm a self-taught developer, and I'm applying to Founders and Coders to turn my dream of becoming a professional programmer into a reality! \n \n I love coding. In fact, I’d go so far to say I’m obsessed, which I think is a pretty cool way to start a career! \n \n Currently, I work as a caseworker for a homeless charity but I'm switching into a career that will get my brain buzzing more, challenge me in new ways and allow me to make the best contribution to society that I can. \n \n But a woman is more than her code, so before I tell you why I'd love to be part of your Spring 2021 cohort, I'd like to take a moment to tell you a little bit more about me and some others things I love...";
        english[8]["innerText"] = "Click for more";
        english[9]["innerText"] = "Snaps";
        english[10]["innerText"] = "why programming? \n why fac?";
        english[11]["innerText"] = "Technology is exciting! And with the speed its changing the world at, I want to be one of the driving forces.";
        english[12]["innerText"] = "Programming has the potential to be used for so much good, and as low-code and no-code software increases in popularity, I want to be ahead of the curve so that I can work on more complex coding to create systems and products that make people’s lives better.";
        english[13]["innerText"] = "The prospect of life-long learning is also a big draw to the career. I love the creativity of coding and the constant challenges it brings - I thrive off that feeling after hours coding when my brain is groggy and I can’t continue: the only thing I want to do is go to bed and wake up clear-headed to continue.";
        english[14]["innerText"] = "I also like the flexibility and opportunities that being a developer offers. There’s not a medium or industry I can think of that doesn’t require technology in some form, which offers developers a unique route to moving between industries whilst constantly developing your skills.";
        english[15]["innerText"] = "With programming, there is always more to build and more to learn. And there is also caution to be had. It’s important to look critically at the rate at which technology reshapes industries and the impact this has. I often wonder if enough people working in tech are constructively critical of its own powers; I think more people should be.  I would love to work in technology because it equally amazes and terrifies me.";
        english[16]["innerText"] = "what I'll bring to the cohort";
        english[17]["innerText"] = "I have teaching experience, which I know from my coding journey so far is a valuable skill. New learners are the best teachers for other new learners, and I also have the patience required...";
        english[18]["innerText"] = "Problem-solving: my current work requires me to problem solve on the spot, and work with new cases every day.";
        english[19]["innerText"] = "Here will be the third point";
        english[20]["innerText"] = "My technical skills";
        english[21]["innerText"] = "Find me on";
    };

    //this will translate the About Me texted if it is already open:
    var element = document.getElementById("about-me")
    if (element != null) {
        element["innerText"] = "¡Me encanta la comida! Mis dos chefs favoritos son Meera Sodha (echa un vistazo a su columna vegana aquí) y Nigella Lawson. Si eres fan de Nigella, quizás te hayas dado cuenta de que mi esquema de colores está inspirado en su nuevo libro, Cook, Eat, Repeat. Prueba estos garabatos de rubí... ¡no decepcionarán! Me encanta el agua. Mi orden de preferencia por los destinos de natación es";
    }

    if (element != null && buttonText == "EN") {
    element["innerText"] = "I 💕 food! My two favourite chefs are Meera Sodha and Nigella Lawson. If you’re a Nigella fan, you might have noticed that my colour scheme is inspired by her new book, 'Cook, Eat, Repeat'. Try her Ruby Noodles… you won't regret it! I 💕 the water. My order of preference for swimming destinations is: A calm sea > a clear lake > a river > a stream > a bath (alright, just for a soak). If I can’t have those I’ll settle for London Fields Lido (yes, even in the winter!). My friends are bored of hearing me say I think I was a dolphin in a previous life. I 💕 the outdoors. This year’s changed things a bit and I’ve swapped my goggles for pedals, to explore the city on wheels, although I’m still at the stage of ‘all the gear… no idea’. I 💕 dramatic sunsets and sunrises (click below to find some of the best I've seen). I 💕 languages. When I was 23, I moved to Spain to learn Spanish. I didn’t know much when I went, but now I’m fluent! Next on my list is French. I 💕 my girlfriend, Lois (perhaps not so important to my application, but very important to me).";

}
}

const lang = document.getElementById("language-button");
lang.addEventListener('click', languageClick);

//ABOUT ME FUNCTION:

function popUp(){
    var aboutMeTest = document.getElementById("about-me");
    console.log(aboutMeTest);
    const newDiv = document.createElement("div"); //tag type anchor
    const newContent = document.createTextNode("I 💕 food! My two favourite chefs are Meera Sodha and Nigella Lawson. If you’re a Nigella fan, you might have noticed that my colour scheme is inspired by her new book, 'Cook, Eat, Repeat'. You need to try her Ruby Noodles… you won't regret it! I 💕 the water. My friends are bored of hearing me say I think I was a dolphin in a previous life. My order of preference for swimming destinations is: A calm sea > a clear lake > a river > a stream > a bath (alright, just for a soak). If I can’t have those I’ll settle for London Fields Lido (yes, even in the winter!). I 💕 the outdoors. Walking, running, sunbathing, you name it, I'll enjoy it! This year’s changed things a bit and I’ve swapped my goggles for pedals too, although I’ll admit I'm still at the stage of ‘all the gear… no idea’. I 💕 dramatic sunsets and sunrises (click below to find some of the best I've seen). I 💕 languages. I had a dream to learn Spanish and at 23 I made it a reality when I moved to Spain! I didn’t know much when I went, but now I’m fluent! Learning Spanish definitely inspired me to start learning to code and next on my linguistic list is French. I 💕 travelling. I spent a year exploring Australia alone before I moved to Spain and I'm sold on warmer climates, although London has stolen my heart for now. I 💕 my girlfriend, Lois (perhaps not so important to my application, but very important to me).");
    const newContentSpanish = document.createTextNode("¡Me encanta la comida! Mis dos chefs favoritos son Meera Sodha (echa un vistazo a su columna vegana aquí) y Nigella Lawson. Si eres fan de Nigella, quizás te hayas dado cuenta de que mi esquema de colores está inspirado en su nuevo libro, Cook, Eat, Repeat. Prueba estos garabatos de rubí... ¡no decepcionarán! Me encanta el agua. Mi orden de preferencia por los destinos de natación es");
    // newDiv.appendChild(newContent);
    // Getting the translation button to work:
    const spanishTest = document.getElementById("about-me-intro");
    if (spanishTest["innerText"] == "aquí estará la traducción") {
        newDiv.appendChild(newContentSpanish);
    } else {
        newDiv.appendChild(newContent);
    }

    newDiv.id = "about-me";
    newDiv.className = "englishCreated";
    const currentDiv = document.getElementById("about-me-button");
    const insert = document.getElementById("me");
    
    if (aboutMeTest == null) {
    insert.insertBefore(newDiv, currentDiv); //(what I want, what I have: anchor) 
    spanishTest.style.display = "none";
    }
    else {
        var removeEl = document.getElementById("about-me");
        removeEl.remove();
        spanishTest.style.display = "block";
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
skills.addEventListener('click', popUp2);


function photoPopUp() {


    var photoTest = document.getElementById("Australia");
    const photo = document.createElement("img");
    photo.src = "bike.png";
    photo.id = "Australia";
    photo.className = "images";
    photo.alt = "Sunset over the sea in Fremantle, Australia";
    var photoInsert = document.getElementById("my-images-input");

    var photoTest2 = document.getElementById("Cadiz");
    const photo2 = document.createElement("img");
    photo2.src = "Cadiz.png";
    photo2.id = "Cadiz";
    photo2.className = "images";
    photo2.alt = "Sunset over the sea in Cadiz, Spain";
    
    var photoTest3 = document.getElementById("Noosa");
    const photo3 = document.createElement("img");
    photo3.src = "animals.png";
    photo3.id = "Noosa";
    photo3.className = "images";
    photo3.alt = "Sunset over the bay in Noosa, Australia";

    if (photoTest == null && photoTest2 == null && photoTest3 == null) {
        photoInsert.insertBefore(photo, null);
        photoInsert.insertBefore(photo2, null);
        photoInsert.insertBefore(photo3, null);
    }
    else {
        var removeElement = document.getElementById("Australia");
        removeElement.remove();
        var removeElement2 = document.getElementById("Cadiz");
        removeElement2.remove();
        var removeElement3 = document.getElementById("Noosa");
        removeElement3.remove();

    }
   
}

const photos = document.getElementById("photo-button");
photos.onclick = photoPopUp;

