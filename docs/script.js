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

    // Initialize all functions
    function init() {
        animateHeaderText();
        setupRepoButton();
        addHoverEffectsToSocialButtons();
        // Uncomment the line below to dynamically load a font
        // loadFont('Ubuntu', 'resources/fonts/Ubuntu-Bold.ttf');
    }

    // Run the initialization function on DOM content loaded
    init();
});