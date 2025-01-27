// js.main.js
window.addEventListener('load', function() {
    // Main title typing animation
    let titleText = "Hi, I'm Ethan Hsu";
    let titleIndex = 0;
    const titleElement = document.getElementById('main-title');

    function typeTitle() {
        if (titleIndex < titleText.length) {
            titleElement.textContent += titleText.charAt(titleIndex);
            titleIndex++;
            setTimeout(typeTitle, 100);
        }
    }

    // Start title animation after a brief delay
    setTimeout(typeTitle, 500);

    // Rotating text animation
    new Typed('#typed', {
        strings: [
            'Software Developer',
            'Problem Solver',
            'Tech Enthusiast',
            'Baseball Pitcher'
        ],
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 2000,
        loop: true
    });

    // Lightspeed effect
    const aboutButton = document.querySelector('.button:nth-child(2)');
    const lightspeedContainer = document.querySelector('.lightspeed-container');
    
    // Generate random positions for stars
    const root = document.documentElement;
    function updateStarPositions() {
        for (let i = 1; i <= 5; i++) {
            root.style.setProperty(`--x${i}`, Math.random() * 100 + '%');
            root.style.setProperty(`--y${i}`, Math.random() * 100 + '%');
        }
    }
    
    setInterval(updateStarPositions, 1000);
    
    // Streak creation and removal functions
    function createStreaks() {
        const streakCount = 10;
        for (let i = 0; i < streakCount; i++) {
            const streak = document.createElement('div');
            streak.classList.add('streak');
            streak.style.top = `${Math.random() * 100}%`;
            streak.style.animationDuration = `${Math.random() * 0.5 + 0.5}s`;
            document.body.appendChild(streak);
        }
    }

    function removeStreaks() {
        const streaks = document.querySelectorAll('.streak');
        streaks.forEach(streak => streak.remove());
    }

    aboutButton.addEventListener('click', function(e) {
        e.preventDefault();
        lightspeedContainer.style.display = 'block';
        
        // Hide other elements
        document.querySelector('.stars').style.opacity = '0';
        document.querySelector('.earth-container').style.opacity = '0';
        document.querySelector('.container').style.opacity = '0';
        
        // Create streaks
        createStreaks();
        
        // Navigate to about page after animation
        setTimeout(() => {
            removeStreaks();
            window.location.href = 'about.html';
        }, 1000);
    });
});