document.addEventListener('DOMContentLoaded', function () {
    // Menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('cross');
    });

    // Typewriter effect
    const rawText = "Embed Live Chat,<br>Comments to your Websites , <br>Apps for FREE"; // <-- space after &
    const target = document.querySelector(".hero-title");
    let index = 0;

    function typeLetter() {
        if (index < rawText.length) {
            if (rawText.substring(index, index + 4) === "<br>") {
                target.innerHTML += "<br>";
                index += 4;
            } else {
                target.innerHTML += rawText[index];
                index++;
            }
            setTimeout(typeLetter, 50);
        }
    }

    target.innerHTML = "";
    typeLetter();
});
