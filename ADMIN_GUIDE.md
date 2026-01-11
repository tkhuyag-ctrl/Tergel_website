# Admin Guide - Website Management

This guide explains how to manage your website content, including uploading your profile photo, CV, and managing projects.

## Table of Contents

1. [Admin Panel Access](#admin-panel-access)
2. [Profile Photo Management](#profile-photo-management)
3. [CV Management](#cv-management)
4. [Projects Section](#projects-section)
5. [Contact Form](#contact-form)
6. [Security Notes](#security-notes)

---

## Admin Panel Access

### Accessing the Admin Panel

1. Navigate to: `https://your-website.com/admin.html`
2. Default login credentials:
   - **Password:** `admin123`

### IMPORTANT: Change Default Password

**You MUST change the default password immediately after first login!**

1. Log in to the admin panel
2. Scroll to the "Change Admin Password" section
3. Enter the current password: `admin123`
4. Enter your new password (minimum 8 characters)
5. Confirm your new password
6. Click "Change Password"

---

## Profile Photo Management

### Option 1: File Upload (Recommended)

1. Take or choose a professional headshot photo
2. Save it as `profile-photo.jpg` (or `.png`, `.jpeg`)
3. Place it in the `assets/` folder of your website
4. The photo will automatically display on the home page

**Photo Requirements:**
- Format: JPG, PNG, or JPEG
- Recommended size: At least 400x400 pixels
- Square format works best
- File size: Under 1MB for best performance

### Option 2: Already Set Up

If you already have a photo, simply replace `assets/profile-photo.jpg` with your photo. The website will automatically detect and display it.

---

## CV Management

### Two Ways to Add Your CV

#### Method 1: Admin Panel Upload (Dynamic)

This method allows you to update your CV without accessing the server files.

1. Go to `https://your-website.com/admin.html`
2. Log in with your admin password
3. In the "CV Management" section, click "Select PDF File"
4. Choose your CV PDF file (max 5MB)
5. Click "Upload CV"
6. Your CV is now available for download on your website

**Advantages:**
- Update CV anytime from any browser
- No need to access server files
- Instant updates

**Limitations:**
- Stored in browser localStorage (cleared if browser data is cleared)
- 5MB file size limit
- Works best for frequently updated CVs

#### Method 2: Direct File Upload (Static)

This is the traditional method and works as a fallback.

1. Export your CV as a PDF
2. Name it exactly `cv.pdf`
3. Place it in the `assets/` folder
4. The download buttons will automatically find it

**Advantages:**
- Permanent storage (not affected by browser data)
- Works even if admin panel is not accessible
- No file size limit (within reason)

**Fallback System:**
The website checks for uploaded CV first (admin panel), then falls back to `assets/cv.pdf` if not found.

### Deleting Uploaded CV

1. Log in to admin panel
2. In the "CV Management" section, click "Delete CV"
3. Confirm the deletion
4. Website will now use `assets/cv.pdf` as fallback

---

## Projects Section

### Adding or Editing Projects

1. Open `projects.html` in a text editor
2. Find the project card template:

```html
<div class="project-card">
    <div class="project-header">
        <h3>Project Title</h3>
        <span class="project-date">Month Year</span>
    </div>
    <p class="project-description">
        Brief description of your project...
    </p>
    <div class="project-tags">
        <span class="skill-tag">Python</span>
        <span class="skill-tag">Data Analysis</span>
    </div>
    <div class="project-links">
        <a href="#" class="text-link">View Project →</a>
        <a href="#" class="text-link">GitHub →</a>
    </div>
</div>
```

3. Duplicate this template for each project
4. Update the content:
   - **Project Title:** Your project name
   - **Date:** When you completed it
   - **Description:** Brief overview (2-3 sentences)
   - **Tags:** Technologies/methods used
   - **Links:** Links to project page, GitHub, paper, etc.

5. Save the file

### Example Project Entry

```html
<div class="project-card">
    <div class="project-header">
        <h3>Economic Impact Analysis of COVID-19</h3>
        <span class="project-date">December 2023</span>
    </div>
    <p class="project-description">
        Analyzed the economic impact of COVID-19 on small businesses using panel data
        regression methods. Identified key factors affecting business resilience and
        recovery patterns across different sectors.
    </p>
    <div class="project-tags">
        <span class="skill-tag">R</span>
        <span class="skill-tag">Econometrics</span>
        <span class="skill-tag">Panel Data</span>
        <span class="skill-tag">Data Visualization</span>
    </div>
    <div class="project-links">
        <a href="project-covid-impact.pdf" class="text-link">View Paper →</a>
        <a href="https://github.com/yourusername/covid-analysis" class="text-link">GitHub →</a>
    </div>
</div>
```

---

## Contact Form

### How It Works

The contact form is already configured to send emails only to: **tkhuyag@haverford.edu**

- Users fill out the form with their information
- Clicking "Send Message" opens their email client
- The email is pre-addressed to **tkhuyag@haverford.edu**
- Users cannot change the recipient email address

### Email Address

The recipient email is hardcoded in `js/script.js` at line 159. To change it:

1. Open `js/script.js`
2. Find line 159:
   ```javascript
   const mailtoLink = `mailto:tkhuyag@haverford.edu?subject=...`;
   ```
3. Replace `tkhuyag@haverford.edu` with your new email
4. Save the file

---

## Security Notes

### Admin Panel Security

**IMPORTANT:** The admin panel uses browser localStorage for authentication. This is suitable for a personal website but has limitations:

1. **Change the default password immediately!**
2. Don't use the same password as important accounts
3. Log out when finished, especially on shared computers
4. The password is stored in browser localStorage (client-side)
5. This is NOT enterprise-grade security - it's for personal website management

### Recommendations

For a personal academic website, this security level is adequate. However:

- Don't store sensitive information in the admin panel
- Use unique passwords
- Be aware that localStorage can be cleared by browser settings
- Consider using the static CV method (`assets/cv.pdf`) as primary backup

### Backup Your CV

Since the admin panel stores CV in localStorage:

1. Always keep a backup copy of your CV on your computer
2. Consider also placing `cv.pdf` in the `assets/` folder as a fallback
3. Re-upload after clearing browser data

---

## Quick Start Checklist

- [ ] Change default admin password
- [ ] Upload profile photo to `assets/profile-photo.jpg`
- [ ] Upload CV via admin panel OR place `cv.pdf` in `assets/` folder
- [ ] Edit `projects.html` to add your projects
- [ ] Test CV download functionality
- [ ] Test contact form
- [ ] Update LinkedIn and GitHub links in footer (all pages)

---

## Troubleshooting

### Profile photo not showing
- Check file name: must be `profile-photo.jpg` (or .png, .jpeg)
- Check file location: must be in `assets/` folder
- Clear browser cache and refresh

### CV download not working
- Check if CV is uploaded via admin panel
- Check if `assets/cv.pdf` exists as fallback
- Check browser console for errors (F12 → Console tab)

### Can't log in to admin panel
- Verify you're using the correct password
- If password is lost, edit `js/admin.js` to reset:
  - Change `DEFAULT_PASSWORD` variable
  - Clear browser localStorage
  - Refresh page

### Contact form not working
- This opens the user's email client (requires email app installed)
- Users must have an email client configured
- Alternative: provide direct email link

---

## Support

For issues or questions:
- Check the main README.md
- Review QUICK_START.md
- Check browser console for errors (F12 → Console)

---

**Last Updated:** January 2026
