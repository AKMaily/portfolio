function scrollSkills() {
    skillSection = document.getElementsByClassName('skill-wrapper')[0];
    const items = [...skillSection.children];

    items.forEach(item => {
        console.log("item was appended");
        const itemCloned = item.cloneNode(item);
        skillSection.appendChild(itemCloned);
    });
}

scrollSkills(); 