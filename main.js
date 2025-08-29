function scrollSkills() {
    skillSection = document.getElementsByClassName('skill-wrapper')[0];
    const items = [...skillSection.children];

    items.forEach(item => {
        console.log("item was appended");
        const itemCloned = item.cloneNode(item);
        skillSection.appendChild(itemCloned);
    });
}

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function disortHeader() {
    const title = document.querySelector("h1");
    title.style.color = "var(--primary-color)";
    if (title) {
        gsap.to(".distort feDisplacementMap", 1, {
            attr: {
                scale: 0
            },
            ease: "circ.out 0.5s"
        }, 1);
        gsap.to(".distort feTurbulence", 1, {
            attr: {
                baseFrequency: '2.01 .01'
            },
            ease: "circ.out 0.5s"
        }, 1);
    }
}

async function loadingAnim() {
    const name = document.getElementById('name-text');
    const cursor = document.getElementsByClassName('blinking-cursor')[0];
    const text = "Hi, I'm Anna";
    const speed = 100;

    await sleep(800);

    for (const char of text) {
        name.textContent += char;
        await sleep(speed);
    }
    cursor.innerHTML = ' ';
    disortHeader();

}
const title = document.querySelector("h1");
if (title) {
    title.addEventListener("mouseenter", () => {
        gsap.to(".distort feDisplacementMap", 1, {
            attr: {
                scale: 100
            },
            ease: "circ.out"
        });
        gsap.to(".distort feTurbulence", 1, {
            attr: {
                baseFrequency: '2.08 .08'
            },
            ease: "circ.out"
        }, 1);
    });
    title.addEventListener("mouseleave", () => {
        gsap.to(".distort feDisplacementMap", 1, {
            attr: {
                scale: 0
            },
            ease: "circ.out"
        }, 1);
        gsap.to(".distort feTurbulence", 1, {
            attr: {
                baseFrequency: '2.01 .01'
            },
            ease: "circ.out"
        }, 1);
    });
}

window.addEventListener('load', loadingAnim);