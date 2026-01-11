# Quick Start Guide

Follow these steps to personalize your website and get it live!

## Step 1: Update Personal Information (5 minutes)

Search and replace these placeholders across all HTML files:

- `[Your Name]` → Your full name
- `[University Name]` → Your university
- `your.email@university.edu` → Your actual email
- `https://linkedin.com/in/yourprofile` → Your LinkedIn URL
- `https://github.com/yourprofile` → Your GitHub URL
- `[Month Year]` → Actual dates (graduation, work experience, etc.)
- `[Your GPA]` → Your actual GPA (or remove this line)

### Quick Find & Replace

Use your text editor's find and replace feature:
1. Open all `.html` files
2. Find: `[Your Name]` → Replace with your name
3. Find: `your.email@university.edu` → Replace with your email
4. Continue for other placeholders

## Step 2: Customize Content (15-30 minutes)

### Priority Pages to Update:

1. **[index.html](index.html)** - Home page
   - Lines 32-37: Update your introduction and interests
   - Lines 44-66: Customize the three focus area cards

2. **[about.html](about.html)** - About page
   - Lines 36-48: Your academic journey
   - Lines 52-66: What motivates you
   - Lines 70-86: Your long-term goals

3. **[cv.html](cv.html)** - CV page
   - Lines 40-50: Education details
   - Lines 54-96: Add your actual experience
   - Lines 100-116: Skills and achievements

4. **[contact.html](contact.html)** - Contact page
   - Lines 53-73: Update contact information

## Step 3: Add Your CV PDF (2 minutes)

1. Export your CV as a PDF
2. Name it exactly: `cv.pdf`
3. Place it in the `assets/` folder
4. Path should be: `/Users/tergelkhuyag/Tergel_website/assets/cv.pdf`

## Step 4: Test Locally (5 minutes)

### Option A: Open in Browser
Simply double-click `index.html` to open it in your default browser.

### Option B: Use a Local Server (Recommended)

```bash
# Navigate to your website folder
cd /Users/tergelkhuyag/Tergel_website

# Start a local server (choose one):

# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js
npx http-server
```

Then visit: `http://localhost:8000`

### What to Test:
- ✅ All navigation links work
- ✅ Mobile menu works (resize browser window)
- ✅ Contact form validates inputs
- ✅ CV download link works (after adding cv.pdf)
- ✅ All content is readable
- ✅ No placeholder text remains

## Step 5: Deploy Your Website (10 minutes)

### Recommended: GitHub Pages (Free)

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Personal academic website"

# Create a repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main

# Enable GitHub Pages:
# Go to repo Settings → Pages → Source: main branch → Save
```

Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO`

### Alternative: Netlify (Free, Easier)

1. Go to [netlify.com](https://www.netlify.com/)
2. Sign up with GitHub
3. Click "Add new site" → "Import from Git"
4. Select your repository (or drag & drop the folder)
5. Click "Deploy"

Your site will be live at: `https://random-name-12345.netlify.app` (customizable)

## Step 6: Set Up Contact Form (Optional, 10 minutes)

The form currently opens email client. For a better solution:

### FormSpree (Recommended)

1. Sign up at [formspree.io](https://formspree.io) (free tier: 50 submissions/month)
2. Create a new form
3. Copy your form endpoint
4. Update [js/script.js](js/script.js) line 125-144:

```javascript
// Uncomment and update this code:
fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: name,
        email: email,
        subject: subject,
        message: message
    })
})
.then(response => {
    if (response.ok) {
        showSuccess();
        contactForm.reset();
    } else {
        showFormError();
    }
})
.catch(error => {
    showFormError();
});
```

## Customization Tips

### Change Colors

Edit [css/style.css](css/style.css) lines 14-23:

```css
:root {
    --primary-color: #2c3e50;      /* Main dark color */
    --accent-color: #3498db;        /* Accent/link color */
    --text-primary: #2c3e50;        /* Body text */
    --bg-primary: #ffffff;          /* Background */
    --bg-secondary: #f8f9fa;        /* Alt background */
}
```

### Add Google Analytics

Add before `</head>` in all HTML files:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_GA_ID');
</script>
```

### Add Custom Domain

**GitHub Pages:**
1. Add a file named `CNAME` in root directory
2. Content: `yourdomain.com`
3. Update DNS settings at your domain provider

**Netlify:**
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Follow DNS instructions

## Common Issues

### CV download not working?
- Make sure `cv.pdf` exists in `assets/` folder
- Check filename is exactly `cv.pdf` (lowercase)

### Mobile menu not working?
- Check if [js/script.js](js/script.js) is loaded
- Open browser console for errors (F12)

### Contact form not working?
- Currently opens email client by default
- Follow Step 6 above to use FormSpree

### Styles not loading?
- Check file paths are correct
- Make sure [css/style.css](css/style.css) exists

## Need Help?

1. Check the main [README.md](README.md) for detailed documentation
2. Review code comments in HTML/CSS/JS files
3. Ensure all file paths are correct
4. Test in browser developer console (F12)

## Checklist

Before going live:

- [ ] All `[Placeholder]` text replaced
- [ ] Email addresses updated
- [ ] Social media links updated
- [ ] CV PDF added to assets folder
- [ ] All pages reviewed and customized
- [ ] Tested on mobile (resize browser or use device)
- [ ] Contact form tested
- [ ] CV download tested
- [ ] Navigation menu tested
- [ ] Deployed to hosting platform

---

**Estimated Total Time: 45-60 minutes**

Good luck with your website! 🚀