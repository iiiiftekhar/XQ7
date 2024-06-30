document.addEventListener('DOMContentLoaded', function () {
    // Function to animate the header text on page load
    function animateHeaderText() {
        const headerText = document.querySelector('.content h1');
        headerText.classList.add('fade-in');
    }

    // Function to add smooth scroll effect for repo source button
    function setupRepoButton() {
        const repoButton = document.querySelector('.repo-source-button');
        repoButton.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default behavior
            window.open(this.href, '_blank'); // Open the GitHub repository in a new tab
        });
    }

    // Function to add hover effects to social buttons
    function addHoverEffectsToSocialButtons() {
        const socialButtons = document.querySelectorAll('.social-button');
        socialButtons.forEach(button => {
            button.addEventListener('mouseover', () => {
                button.classList.add('hovered');
            });
            button.addEventListener('mouseout', () => {
                button.classList.remove('hovered');
            });
        });
    }

    // Function to dynamically load fonts (optional)
    function loadFont(fontName, fontUrl) {
        const newFont = new FontFace(fontName, `url(${fontUrl})`);
        newFont.load().then(function (loadedFont) {
            document.fonts.add(loadedFont);
            document.body.style.fontFamily = fontName;
        }).catch(function (error) {
            console.error('Font loading failed:', error);
        });
    }

    // Function to create an interactive effect on scroll
    function setupScrollEffect() {
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            header.style.opacity = 1 - window.scrollY / 500;
        });
    }

    // Display current time and date
    function displayDateTime() {
        const timeElement = document.getElementById('current-time');
        const dateElement = document.getElementById('current-date');
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const updateTime = () => {
            const now = new Date();
            timeElement.textContent = now.toLocaleTimeString();
            dateElement.textContent = now.toLocaleDateString(undefined, options);
        };
        updateTime(); // Initial call
        setInterval(updateTime, 1000); // Update every second
    }

    // Initialize all functions
    animateHeaderText();
    setupRepoButton();
    addHoverEffectsToSocialButtons();
    setupScrollEffect();
    displayDateTime();
    // Uncomment the line below to dynamically load the font (optional)
    // loadFont('Ubuntu', 'resources/fonts/Ubuntu-Bold.ttf');
});
