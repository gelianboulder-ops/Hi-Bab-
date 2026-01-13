function startEverything() {
    const music = document.getElementById("bgmusic");
    const btn = document.getElementById("mainButton");
    const secretLetter = document.getElementById("secret-letter");
    const introText = document.getElementById("intro");

    if (music) {
        music.volume = 0.5; 
        music.play().then(() => {
            console.log("Music is now playing!");
        }).catch((error) => {
            console.log("Music play failed:", error);
        });
    }

    btn.style.display = "none";
    if (introText) introText.style.display = "none";
 
    secretLetter.style.display = "block";
    const mensahe = "I just want you to know...\n\nYou are my favorite person in the whole world. Like the song says, I'll be your universe. 💖";
    
    let index = 0;
    function typeWriter() {
        if (index < mensahe.length) {
            secretLetter.innerHTML += mensahe.charAt(index);
            index++;
            setTimeout(typeWriter,  70); 
        }
    }
    typeWriter();

    setInterval(createHeart, 300);
}

function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "💗";
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}