let links = document.querySelectorAll('.nav-link');

function updateActiveLink() {
    manageActiveLink(links);
}

function manageActiveLink(navLinks) {
    navLinks.forEach((link) => {
        let currentSection = document.querySelector(link.hash);
        let sectionSize = currentSection.offsetTop + currentSection.offsetHeight;
        let dividerSize = 200;
        if (currentSection.offsetTop <= window.scrollY + dividerSize && sectionSize > window.scrollY) {
            link.parentNode.classList.add('nav-active');
        } else {
            link.parentNode.classList.remove('nav-active');
        }
    });
}

window.addEventListener('scroll', updateActiveLink);
