document.addEventListener("DOMContentLoaded", () => {
    const hamburgerIcon = document.querySelector(".hamburger-icon");
    const pageContent = document.querySelector(".page-content");
    const hamburgerNavLinks = document.querySelector("#hamburger-nav-links");

    const aboutLink = document.querySelector("#hamburger-about-link");
    const projectsLink = document.querySelector("#hamburger-projects-link");

    hamburgerIcon.addEventListener('click', handleHamburgerIcon);
    hamburgerIcon.addEventListener('touchend', handleHamburgerIcon);

    aboutLink.addEventListener('click', handleAboutLink);
    aboutLink.addEventListener('touchend', handleAboutLink);

    projectsLink.addEventListener('click', handleProjectsLink);
    projectsLink.addEventListener('touchend', handleProjectsLink);


    function handleHamburgerIcon(event) {
        event.preventDefault();
        hamburgerIcon.classList.toggle("active");
        pageContent.classList.toggle("active");
        hamburgerNavLinks.classList.toggle("active");
    };
    
    function handleAboutLink(event) {
        event.preventDefault();
        hamburgerNavLinks.innerHTML = `
        <div id="hamburger-back" style="margin-bottom:30px;"><li>< Back</li></div>
        <li><a href="/bio.html">Bio</a></li>
        <li><a href="/resume.html">Resume</a></li>
        `
        const backButton = document.querySelector("#hamburger-back");
        backButton.addEventListener('click', handleBackButton);
        backButton.addEventListener('touchend', handleBackButton);
    };

    function handleProjectsLink(event) {
        event.preventDefault();
        hamburgerNavLinks.innerHTML = `
            <div id="hamburger-back" style="margin-bottom:30px;"><li>< Back</li></div>
            <li><a href="/draping.html">Draping and Costumes</a></li>
            <li><a href="/craftwork.html">Craftwork and Puppetry</a></li>
            <li><a href="/custom.html">Custom Design</a></li>
            <li><a href="/theatrical.html">Theatrical Design</a></li>
            <li><a href="/knitting.html">Knitting</a></li>
        `
        const backButton = document.querySelector("#hamburger-back");
        backButton.addEventListener('click', handleBackButton);
        backButton.addEventListener('touchend', handleBackButton);
    };
    
    function handleBackButton(event) {
        event.preventDefault();
        hamburgerNavLinks.innerHTML = `
        <div id="hamburger-about-link"><li>About ></li></div>
        <li><a href="/">Home</a></li>
        <div id="hamburger-projects-link"><li>Projects ></li></div>
        <li>
            <a href="/contact.html" id="contact-button">Contact</a>
        </li>
        `
        
        const aboutLink = document.querySelector("#hamburger-about-link");
        const projectsLink = document.querySelector("#hamburger-projects-link");
        
        aboutLink.addEventListener('click', handleAboutLink);
        aboutLink.addEventListener('touchend', handleAboutLink);
    
        projectsLink.addEventListener('click', handleProjectsLink);
        projectsLink.addEventListener('touchend', handleProjectsLink);
    };
});


