//Code to scroll to particular section
const navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
for (let i = 1; i < navMenuAnchorTags.length; i++) {
    navMenuAnchorTags[i].addEventListener('click', function (event) {
        event.preventDefault();
        const targetSectionID = this.textContent.trim().toLowerCase();
        const targetSection = document.getElementById(targetSectionID);
        console.log(targetSection);
        console.log(targetSection);
        const interval = setInterval(function () {
            const targetSectionCoordinates = targetSection.getBoundingClientRect();
            console.log(targetSectionCoordinates.top);
            if (targetSectionCoordinates.top <= 0) {
                console.log('I am here');
                clearInterval(interval);
                return;
            }
            window.scrollBy(0, 50);
        }, 20);
    });
}

//code to animate skillbar auto fill
let progressBars = document.querySelectorAll('.skill-progress > div');

function initialiseBar(bar) {
    bar.style.width = 0 + '%';
}

for (let bar of progressBars) {
    initialiseBar(bar);
}

window.addEventListener('scroll', checkScroll);
let animationDone = [];
for (let i = 0; i < progressBars.length; i++) {
    animationDone[i] = false;
}

function checkScroll() {
    let i = 0;
    for (let bar of progressBars) {
        let coordinates = bar.getBoundingClientRect();
        if (!animationDone[i] && coordinates.top <= window.innerHeight) {
            fillBar(bar);
            animationDone[i] = true;
        } else if (coordinates.top > window.innerHeight) {
            initialiseBar(bar);
            animationDone[i] = false;
        }
        i++;
    }
}

function fillBar(bar) {
    let targetWidth = bar.getAttribute('data-bar-width');
    let currentWidth = 0;
    let interval = setInterval(function () {
        if (currentWidth > targetWidth) {
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth + '%';
    }, 3);
    return true;
}
