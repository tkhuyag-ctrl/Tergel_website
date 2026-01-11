// ===================================
// Admin Panel JavaScript
// ===================================

// Default admin password (CHANGE THIS!)
const DEFAULT_PASSWORD = 'admin123';

// Initialize admin password if not set
if (!localStorage.getItem('adminPassword')) {
    localStorage.setItem('adminPassword', DEFAULT_PASSWORD);
}

// Check if user is logged in
let isLoggedIn = sessionStorage.getItem('isAdminLoggedIn') === 'true';

// DOM Elements
const loginSection = document.getElementById('loginSection');
const adminDashboard = document.getElementById('adminDashboard');
const loginForm = document.getElementById('loginForm');
const logoutBtn = document.getElementById('logoutBtn');
const cvFileInput = document.getElementById('cvFileInput');
const selectFileBtn = document.getElementById('selectFileBtn');
const uploadBtn = document.getElementById('uploadBtn');
const deleteBtn = document.getElementById('deleteBtn');
const fileInfo = document.getElementById('fileInfo');
const uploadSuccess = document.getElementById('uploadSuccess');
const uploadError = document.getElementById('uploadError');
const changePasswordForm = document.getElementById('changePasswordForm');

let selectedFile = null;

// ===================================
// Login/Logout Functions
// ===================================

function showDashboard() {
    loginSection.style.display = 'none';
    adminDashboard.style.display = 'block';
    updateCVStatus();
}

function showLogin() {
    loginSection.style.display = 'block';
    adminDashboard.style.display = 'none';
}

function login(password) {
    const storedPassword = localStorage.getItem('adminPassword');
    if (password === storedPassword) {
        sessionStorage.setItem('isAdminLoggedIn', 'true');
        isLoggedIn = true;
        showDashboard();
        return true;
    }
    return false;
}

function logout() {
    sessionStorage.removeItem('isAdminLoggedIn');
    isLoggedIn = false;
    showLogin();
}

// ===================================
// CV Management Functions
// ===================================

function updateCVStatus() {
    const cvData = localStorage.getItem('uploadedCV');
    const cvDate = localStorage.getItem('cvUploadDate');
    const cvStatusText = document.getElementById('cvStatusText');
    const cvUploadDate = document.getElementById('cvUploadDate');
    const cvDateText = document.getElementById('cvDateText');

    if (cvData) {
        cvStatusText.textContent = 'CV uploaded and available for download';
        cvStatusText.style.color = 'green';
        if (cvDate) {
            cvUploadDate.style.display = 'block';
            cvDateText.textContent = new Date(cvDate).toLocaleString();
        }
        deleteBtn.style.display = 'inline-block';
    } else {
        cvStatusText.textContent = 'No CV uploaded (fallback to assets/cv.pdf if available)';
        cvStatusText.style.color = '#7f8c8d';
        cvUploadDate.style.display = 'none';
        deleteBtn.style.display = 'none';
    }
}

function selectFile() {
    cvFileInput.click();
}

function handleFileSelect(event) {
    const file = event.target.files[0];
    uploadSuccess.style.display = 'none';
    uploadError.style.display = 'none';

    if (!file) {
        return;
    }

    // Validate file type
    if (file.type !== 'application/pdf') {
        uploadError.textContent = 'Please select a PDF file.';
        uploadError.style.display = 'block';
        return;
    }

    // Validate file size (5MB limit)
    const maxSize = 5 * 1024 * 1024; // 5MB in bytes
    if (file.size > maxSize) {
        uploadError.textContent = 'File size must be less than 5MB.';
        uploadError.style.display = 'block';
        return;
    }

    selectedFile = file;

    // Show file info
    document.getElementById('fileName').textContent = file.name;
    document.getElementById('fileSize').textContent = formatFileSize(file.size);
    fileInfo.style.display = 'block';
    uploadBtn.style.display = 'inline-block';
}

function uploadCV() {
    if (!selectedFile) {
        uploadError.textContent = 'Please select a file first.';
        uploadError.style.display = 'block';
        return;
    }

    const reader = new FileReader();

    reader.onload = function(e) {
        try {
            // Store the CV as base64 in localStorage
            localStorage.setItem('uploadedCV', e.target.result);
            localStorage.setItem('cvUploadDate', new Date().toISOString());
            localStorage.setItem('cvFileName', selectedFile.name);

            uploadSuccess.style.display = 'block';
            uploadError.style.display = 'none';
            fileInfo.style.display = 'none';
            uploadBtn.style.display = 'none';
            selectedFile = null;
            cvFileInput.value = '';

            updateCVStatus();

            // Scroll to success message
            uploadSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } catch (error) {
            uploadError.textContent = 'Error uploading CV. File may be too large for browser storage.';
            uploadError.style.display = 'block';
            uploadSuccess.style.display = 'none';
        }
    };

    reader.onerror = function() {
        uploadError.textContent = 'Error reading file. Please try again.';
        uploadError.style.display = 'block';
        uploadSuccess.style.display = 'none';
    };

    reader.readAsDataURL(selectedFile);
}

function deleteCV() {
    if (confirm('Are you sure you want to delete the uploaded CV? This cannot be undone.')) {
        localStorage.removeItem('uploadedCV');
        localStorage.removeItem('cvUploadDate');
        localStorage.removeItem('cvFileName');
        updateCVStatus();
        uploadSuccess.style.display = 'none';
        uploadError.style.display = 'none';
    }
}

function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

// ===================================
// Password Change Functions
// ===================================

function changePassword(currentPassword, newPassword, confirmPassword) {
    const storedPassword = localStorage.getItem('adminPassword');
    const passwordSuccess = document.getElementById('passwordSuccess');
    const passwordError2 = document.getElementById('passwordError2');

    passwordSuccess.style.display = 'none';
    passwordError2.style.display = 'none';

    if (currentPassword !== storedPassword) {
        passwordError2.textContent = 'Current password is incorrect.';
        passwordError2.style.display = 'block';
        return false;
    }

    if (newPassword.length < 8) {
        passwordError2.textContent = 'New password must be at least 8 characters.';
        passwordError2.style.display = 'block';
        return false;
    }

    if (newPassword !== confirmPassword) {
        passwordError2.textContent = 'New passwords do not match.';
        passwordError2.style.display = 'block';
        return false;
    }

    localStorage.setItem('adminPassword', newPassword);
    passwordSuccess.style.display = 'block';
    changePasswordForm.reset();

    setTimeout(() => {
        passwordSuccess.style.display = 'none';
    }, 5000);

    return true;
}

// ===================================
// Event Listeners
// ===================================

if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const password = document.getElementById('password').value;
        const passwordError = document.getElementById('passwordError');

        if (login(password)) {
            loginForm.reset();
        } else {
            passwordError.textContent = 'Incorrect password';
            passwordError.classList.add('show');
        }
    });
}

if (logoutBtn) {
    logoutBtn.addEventListener('click', logout);
}

if (selectFileBtn) {
    selectFileBtn.addEventListener('click', selectFile);
}

if (cvFileInput) {
    cvFileInput.addEventListener('change', handleFileSelect);
}

if (uploadBtn) {
    uploadBtn.addEventListener('click', uploadCV);
}

if (deleteBtn) {
    deleteBtn.addEventListener('click', deleteCV);
}

if (changePasswordForm) {
    changePasswordForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const currentPassword = document.getElementById('currentPassword').value;
        const newPassword = document.getElementById('newPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        changePassword(currentPassword, newPassword, confirmPassword);
    });
}

// ===================================
// Initialize
// ===================================

if (isLoggedIn) {
    showDashboard();
} else {
    showLogin();
}
