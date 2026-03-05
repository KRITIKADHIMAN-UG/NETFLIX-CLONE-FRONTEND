//main js file 

// Main JavaScript file
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    initApp();
    
    // Check login status
    checkLoginStatus();
    
    // Initialize UI components
    initUI();
});

function initApp() {
    // Application initialization code
    console.log('Netflix Clone initialized');
}

// Continue with other main application logic...

//auth.js

// Authentication logic
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('netflixLoggedIn');
    const rememberMe = localStorage.getItem('netflixRememberMe');
    
    if (isLoggedIn === 'true' && rememberMe === 'true') {
        showMainApp();
    } else {
        showLogin();
    }
}

function showLogin() {
    document.querySelector('.login-container').classList.add('active');
    document.querySelector('.main-app').classList.remove('active');
}

function showMainApp() {
    document.querySelector('.login-container').classList.remove('active');
    document.querySelector('.main-app').classList.add('active');
}

// Login form submission
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        handleLogin();
    });
}

function handleLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;
    
    // Simple validation
    if (!email || !password) {
        alert('Please enter both email and password');
        return;
    }
    
    // Save login state
    localStorage.setItem('netflixLoggedIn', 'true');
    localStorage.setItem('netflixEmail', email);
    localStorage.setItem('netflixRememberMe', rememberMe);
    
    // Show main app
    showMainApp();
}

// Logout function
function logout() {
    localStorage.removeItem('netflixLoggedIn');
    localStorage.removeItem('netflixEmail');
    showLogin();
}

//carasoul js file 

// Carousel functionality
class Carousel {
    constructor(container) {
        this.container = container;
        this.carousel = container.querySelector('.movie-carousel');
        this.prevBtn = container.querySelector('.carousel-btn.prev');
        this.nextBtn = container.querySelector('.carousel-btn.next');
        
        this.init();
    }
    
    init() {
        // Initialize carousel
        this.setupEventListeners();
        this.updateButtonStates();
    }
    
    setupEventListeners() {
        // Previous button click
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.scroll('prev'));
        }
        
        // Next button click
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.scroll('next'));
        }
        
        // Handle touch events for mobile
        this.carousel.addEventListener('touchstart', this.handleTouchStart.bind(this));
        this.carousel.addEventListener('touchmove', this.handleTouchMove.bind(this));
        
        // Update button states on scroll
        this.carousel.addEventListener('scroll', () => this.updateButtonStates());
    }
    
    // Continue with carousel methods...
}

// user interface js file 



