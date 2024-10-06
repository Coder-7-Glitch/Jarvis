let btn = document.querySelector('.talk');
let content = document.querySelector('.content');

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function greet() {
    let date = new Date;
    let hour = date.getHours();

    if (hour >= 0 && hour < 12) {
        speak("Good Morning sir")
    } else if (hour > 12 && hour < 17) {
        speak("Good Afternoon sir")
    } else {
        speak("Good Evening sir")
    }
}

window.addEventListener('load', () => {
    speak('Initializing Jarvis');
    greet();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    hello(transcript.toLowerCase());
}

btn.addEventListener('click', () => {
    content.textContent = "Listening...."
    recognition.start();
})

function hello(message) {
    if (message.includes('hey') || message.includes('hello')) {
        speak('Hello Sir, How May I Help You?');
    }
    else if (message.includes('open google')) {
        window.open('https://www.google.com', '_blank');
        speak('Opening Google...');
    }
    else if (message.includes('open youtube')) {
        window.open('https://www.youtube.com', '_blank');
        speak('Opening Youtube...');
    }
    else if (message.includes('who is') || message.includes('what is')) {
        window.open(`https://www.google.com/search?q=${message.replace()}`, '_blank');
        speak('this is what I found relates to ' + message);
    }
    else if (message.includes('open facebook')) {
        window.open('https://www.facebook.com/', "_blank")
        speak('Opening Facebook...');
    } else if (message.includes('time')) {
        let time = new Date;
        let mins = time.getMinutes()
        let hrs = time.getHours()
        speak('the time is ' + hrs + mins);
    } else if (message.includes('Who created you')) {
        speak('I am made by AI');
    } else if (message.includes('date')) {
        let date = new Date;
        let dates = date.getDate()
        let months = date.getMonth()
        speak('the date is ' + dates);
    } else if (message.includes('month')) {
        let month = new Date;
        let months = month.getMonth()
        speak('the month is ' + months);
    } else if (message.includes('day')) {
        let day = new Date;
        let days = day.getDay()
        speak('the day today is ' + days);
    } else if (message.includes('year')) {
        let year = new Date;
        let years = year.getFullYear()
        speak('the day today is ' + years);
    } else if (message.includes('open intagram')) {
        window.open('https://www.instagram.com/', '_blank');
        speak('opening instagram');
    } else if (message.includes('open calculator')) {
        window.open('calculator://', '_blank');
    } else {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia")}`, '_blank')
        speak('this is what I found some infromation relates to ' + message);
    }
};