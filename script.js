window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.transition = "0.8s";

        setTimeout(() => {
            loader.style.display = "none";
        }, 800);

    }, 2500);

});

const launchButton =
document.getElementById("launchButton");

const countdown =
document.querySelector(".countdown");

const rocket =
document.querySelector(".rocket");

const fuel =
document.getElementById("fuel");

const velocity =
document.getElementById("velocity");

const status =
document.getElementById("status");

let launching = false;

launchButton.addEventListener("click", () => {

    if (launching) return;

    launching = true;

    startLaunch();

});

function startLaunch() {

    let count = 10;

    countdown.innerHTML = "T-" + count;

    const timer = setInterval(() => {

        count--;

        countdown.innerHTML = "T-" + count;

        if (count <= 0) {

            clearInterval(timer);

            liftoff();

        }

    }, 1000);

}

function liftoff() {

    countdown.innerHTML = "LIFTOFF";

    status.innerHTML = "Launching";

    rocket.animate(
        [
            {
                transform: "translateX(0px)"
            },
            {
                transform: "translateX(300px) translateY(-80px)"
            }
        ],
        {
            duration: 4000,
            fill: "forwards",
            easing: "ease-in-out"
        }
    );

    animateValue(
        fuel,
        98,
        "%"
    );

    animateValue(
        velocity,
        16.4,
        " km/s"
    );

    setTimeout(() => {

        status.innerHTML = "Mission Active";

        countdown.innerHTML = "MISSION SUCCESS";

    }, 4000);

}

function animateValue(
    element,
    target,
    suffix
) {

    let value = 0;

    const increment =
    target / 80;

    const animation =
    setInterval(() => {

        value += increment;

        if (value >= target) {

            value = target;

            clearInterval(animation);

        }

        element.innerHTML =
        value.toFixed(1) + suffix;

    }, 20);

}

const cards =
document.querySelectorAll(".mission-card");

const observer =
new IntersectionObserver(
(entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity = "1";

entry.target.style.transform =
"translateY(0px)";

}

});

},
{
threshold:0.2
}
);

cards.forEach(card => {

card.style.opacity = "0";

card.style.transform =
"translateY(40px)";

card.style.transition =
"0.8s";

observer.observe(card);

});
