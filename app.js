// Application State
let authMode = 'login'; // 'login' or 'signup'
let currentUser = null;

// Mock Database of Classes and Morphisms for Demonstration
const classBlueprints = {
    User: `class User {
    constructor(id, name, role) {
        this.id = id;
        this.name = name;
        this.role = role;
    }
}`,
    Product: `class Product {
    constructor(sku, title, price) {
        this.sku = sku;
        this.title = title;
        this.price = price;
    }
}`,
    Vector2D: `class Vector2D {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}`
};

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    updateClassInspector();
});

// Authentication Toggle Tabs
function switchAuthTab(mode) {
    authMode = mode;
    const title = document.getElementById('auth-title');
    const subtitle = document.getElementById('auth-subtitle');
    const submitBtn = document.getElementById('auth-submit-btn').querySelector('span');
    const nameGroup = document.getElementById('name-group');
    const tabLogin = document.getElementById('tab-login');
    const tabSignup = document.getElementById('tab-signup');

    if (mode === 'login') {
        title.innerText = 'Welcome Back';
        subtitle.innerText = 'Explore Category Theory & Programming Morphisms';
        submitBtn.innerText = 'Login';
        nameGroup.style.display = 'none';
        tabLogin.classList.add('active');
        tabSignup.classList.remove('active');
    } else {
        title.innerText = 'Create Account';
        subtitle.innerText = 'Join the interactive learning experience';
        submitBtn.innerText = 'Sign Up';
        nameGroup.style.display = 'block';
        tabSignup.classList.add('active');
        tabLogin.classList.remove('active');
    }
}

// Handle Login / Sign Up Submission
function handleAuth(event) {
    event.preventDefault();
    const email = document.getElementById('auth-email').value;
    const password = document.getElementById('auth-password').value;
    const name = document.getElementById('auth-name').value || email.split('@')[0];
    const msg = document.getElementById('auth-message');

    if (password.length < 4) {
        msg.style.color = 'var(--error)';
        msg.innerText = 'Password must be at least 4 characters long.';
        return;
    }

    // Simulate authentication success
    currentUser = { name, email };
    msg.style.color = 'var(--success)';
    msg.innerText = authMode === 'login' ? 'Login successful! Entering dashboard...' : 'Account created successfully!';

    setTimeout(() => {
        document.getElementById('auth-container').style.display = 'none';
        document.getElementById('app-container').style.display = 'flex';
        document.getElementById('user-display-name').innerText = currentUser.name;
        document.getElementById('user-avatar').innerText = currentUser.name.charAt(0).toUpperCase();
    }, 800);
}

// Handle Logout
function handleLogout() {
    currentUser = null;
    document.getElementById('app-container').style.display = 'none';
    document.getElementById('auth-container').style.display = 'flex';
    document.getElementById('auth-form').reset();
    document.getElementById('auth-message').innerText = '';
}

// Navigation Tabs in Dashboard
function switchSection(sectionId, event) {
    event.preventDefault();
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    event.currentTarget.classList.add('active');

    document.querySelectorAll('.content-section').forEach(el => el.classList.remove('active'));
    document.getElementById(`sec-${sectionId}`).classList.add('active');

    const titles = {
        dashboard: ['Overview', 'Understanding structures and structure-preserving transformations.'],
        classes: ['Classes', 'Blueprints that encapsulate data properties and states.'],
        morphisms: ['Morphisms', 'Functions mapping values from source objects to target objects.'],
        sandbox: ['Morphism Sandbox', 'Execute and chain live data transformations.']
    };

    document.getElementById('section-title').innerText = titles[sectionId][0];
}

// Dynamic Class Inspector
function updateClassInspector() {
    const selectedClass = document.getElementById('class-selector').value;
    document.getElementById('class-code-output').innerText = classBlueprints[selectedClass];
}

// Morphism Demo Runner
function runMorphismDemo(type) {
    const resultBox = document.getElementById('morphism-result');
    if (type === 'json') {
        const sourceObj = { id: 1, name: currentUser ? currentUser.name : 'Alice', role: 'Admin' };
        const serialized = JSON.stringify(sourceObj, null, 2);
        resultBox.innerHTML = `<strong>Morphism Applied (Object $\to$ JSON String):</strong><pre>${serialized}</pre>`;
    } else {
        const vector = { x: 12.4, y: -5.1 };
        const strResult = `Vector2D(x: ${vector.x}, y: ${vector.y}) Length: ${Math.sqrt(vector.x**2 + vector.y**2).toFixed(2)}`;
        resultBox.innerHTML = `<strong>Morphism Applied (Vector $\to$ String Representation):</strong><p>${strResult}</p>`;
    }
}

// Sandbox Pipeline Execution (Chaining Morphisms: g ∘ f)
function runSandboxPipeline() {
    const inputVal = document.getElementById('sandbox-input').value;
    const outputContainer = document.getElementById('sandbox-output');

    // Define Morphisms (Pure functions)
    const f = (str) => str.trim();                      // Trim whitespace
    const g = (str) => str.toUpperCase();               // Uppercase transformation
    const h = (str) => str.split('').reverse().join(''); // Reversal transformation

    const step1 = f(inputVal);
    const step2 = g(step1);
    const step3 = h(step2);

    outputContainer.innerHTML = `
        <div class="step-card"><span>Initial Object ($A$):</span> <code>"${inputVal}"</code></div>
        <div class="step-card"><span>Morphism $f$ (Trim):</span> <code>"${step1}"</code></div>
        <div class="step-card"><span>Morphism $g$ (Uppercase):</span> <code>"${step2}"</code></div>
        <div class="step-card" style="border-color: var(--primary);"><span>Final Target Object ($h \circ g \circ f$):</span> <code>"${step3}"</code></div>
    `;
}
