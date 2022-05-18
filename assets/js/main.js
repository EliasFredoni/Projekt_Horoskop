let text = document.getElementById("text");
let ausgabe = document.getElementById("ausgabe");
let h2 = document.getElementById("h2");
let picture = document.getElementById("picture");

let button = () => {
    switch (text.value) {
        case "Mar":
            picture.setAttribute("src", "https://www.horoscopedates.com/img/icon_aries.png");
            h2.innerHTML = "Aries";
            ausgabe.innerHTML = "Today your patience might be tested when one or more of your projects gets put on hold by someone";
            break;
        case "Apr":
            picture.setAttribute("src", "https://www.horoscopedates.com/img/icon_taurus.png");
            h2.innerHTML = "Taurus";
            ausgabe.innerHTML = "Your intense energy makes you a great candidate for a leadership position right now, so if you are";
            break;
        case "Jun":
            picture.setAttribute("src", "https://www.horoscopedates.com/img/icon_gemini.png");
            h2.innerHTML = "Gemini"
            ausgabe.innerHTML = "If you aren't sure if you are ready to commit to a party, a date, a new job, or anything else that";
            break;
        case "Jun":
            picture.setAttribute("src", "https://www.horoscopedates.com/img/icon_cancer.png");
            h2.innerHTML = "Cancer";
            ausgabe.innerHTML = "Too many different elements in your life are overlapping with each other right now—and it's your";
            break;
        case "Jul":
            picture.setAttribute("src", "https://www.horoscopedates.com/img/icon_leo.png");
            h2.innerHTML = "Leo";
            ausgabe.innerHTML = "The issues you'll be dealing with today are very complicated ones—you will have to navigate your";
            break;
        case "Aug":
            picture.setAttribute("src", "https://www.horoscopedates.com/img/icon_virgo.png");
            h2.innerHTML = "Virgo";
            ausgabe.innerHTML = "You'll get along best with people who appeal to your more analytical side, today. Surprisingly, all";
            break;
        case "Sep":
            picture.setAttribute("src", "https://www.horoscopedates.com/img/icon_libra.png");
            h2.innerHTML = "Libra";
            ausgabe.innerHTML = "Pick a cultural event that's coming up and get some tickets for it today";
            break;
        case "Oct":
            picture.setAttribute("src", "https://www.horoscopedates.com/img/icon_scorpio.png");
            h2.innerHTML = "Scorpio";
            ausgabe.innerHTML = "Someone will challenge a belief that you've held for a very long time today—and they will say an";
            break;
        case "Nov":
            picture.setAttribute("src", "https://www.horoscopedates.com/img/icon_sagittarius.png");
            h2.innerHTML = "Sagittarius";
            ausgabe.innerHTML = "Someone in your life needs to step up and take on more responsibility—and you need to tell them to";
            break;
        case "Dez":
            picture.setAttribute("src", "https://www.horoscopedates.com/img/icon_capricorn.png");
            h2.innerHTML = "Carpricorn";
            ausgabe.innerHTML = "Breaking the rules is not always a bad thing—especially if the rules limit your creativity";
            break;
        case "Jan":
            picture.setAttribute("src", "https://www.horoscopedates.com/img/icon_aquarius.png");
            h2.innerHTML = "Aquarius";
            ausgabe.innerHTML = "Have you been feeling a bit bored with your life lately ? Well, good news! Today offers you a great";
            break;
        case "Feb":
            picture.setAttribute("src", "https://www.horoscopedates.com/img/icon_pisces.png");
            h2.innerHTML = "Pisces";
            ausgabe.innerHTML = "Communication is very important today—written, spoken, and even nonverbal body language will all";
            break;
        default: h2.innerHTML = "please give a month"
            ausgabe.innerHTML = "";
            picture.setAttribute("src", "");
    }
}




