// PASSWORD GATE
const PASSWORD = "wesele";

document.getElementById("gate-form").addEventListener("submit", function (e) {
    e.preventDefault(); // stops the form from reloading the page

    const guess = document.getElementById("gate-input").value.trim().toLowerCase();

    if (guess === PASSWORD) {
        document.documentElement.classList.add("unlocked");
        try {
            localStorage.setItem("unlocked", "yes"); // remember this guest
        } catch (e) {}
    } else {
        document.getElementById("gate-error").textContent = "Incorrect password, please try again.";
    }
});


// PASSWORD GATE END

// find first element w/ CSS selector "header"
const header = document.querySelector("header");

// find element with this id (#home)
const home = document.querySelector("#home");

// creates a watcher, to watch whether element overlaps visible screen
const observer = new IntersectionObserver(
    // if home out of view, header wears scrolled,
        // if in view, it doesn't
    ([entry]) => {
        header.classList.toggle("scrolled", !entry.isIntersecting);
    },
    {
        rootMargin: `-${header.offsetHeight}px 0px 0px 0px`
    }

);

observer.observe(home);

// -- countdown section --
const weddingDate = new Date("2027-07-10T13:00:00")

function updateCountdown(){
    const diff = weddingDate - new Date(); // getting difference between now and wedding ceremony

    if (diff <= 0) {
        clearInterval(timer); // stopping timer when 2pm 7-10-27 comes
        return;
    }

    const days = Math.floor(diff / 86400000);
    const hours = Math.floor(diff / 3600000) % 24;
    const minutes = Math.floor(diff / 60000) % 60;
    const seconds = Math.floor(diff / 1000) % 60;

    // then updating each class, in header and section
    document.querySelectorAll(".days").forEach(el => el.textContent = days);
    document.querySelectorAll(".hours").forEach(el => el.textContent = hours);
    document.querySelectorAll(".minutes").forEach(el => el.textContent = minutes);
    document.querySelectorAll(".seconds").forEach(el => el.textContent = seconds);
}

updateCountdown(); // running once immediately
const timer = setInterval(updateCountdown, 1000); // THEN run EVERY second