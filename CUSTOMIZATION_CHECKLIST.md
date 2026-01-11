# Customization Checklist for Tergel Khuyag

## ✅ Already Updated

- [x] Name: Tergel Khuyag
- [x] University: Haverford College
- [x] Email: tkhuyag@haverford.edu

## 📝 Still Need to Customize

### 1. Social Media Links (All Pages - Footer)

Current placeholders that need updating:
```
LinkedIn: https://linkedin.com/in/yourprofile
GitHub: https://github.com/yourprofile
```

**Where to update:** Footer section in all HTML files (lines ~98-99)

### 2. Graduation Date & GPA

**File:** [cv.html](cv.html)
- Line ~44: `Expected Graduation: [Month Year]` - Add your expected graduation date
- Line ~47: `GPA: [Your GPA]/4.0` - Add your GPA or remove this line

### 3. CV Content to Fill In

**File:** [cv.html](cv.html)

Fill in these sections with your actual information:
- **Research Experience** (lines ~55-71) - Add your research positions
- **Professional Experience** (lines ~75-91) - Add internships, jobs
- **Honors & Awards** (lines ~107-118) - Add scholarships, awards, recognitions
- **Publications & Presentations** (line ~123) - Will be added as you develop them
- **Leadership & Activities** (lines ~130-140) - Add clubs, volunteer work

### 4. Coursework to Review

**File:** [coursework.html](coursework.html)

Review and update with courses you've actually taken:
- **Economics Coursework** (lines ~44-63)
- **Mathematics Coursework** (lines ~68-87)
- **Skills** (lines ~95-143) - Add/remove skills to match your abilities

### 5. Content to Personalize

**File:** [about.html](about.html)
- Lines 47-58: Your specific academic journey at Haverford
- Lines 52-66: What specifically motivates you
- Lines 70-86: Your unique long-term goals
- Lines 90-99: Your current focus

**File:** [index.html](index.html)
- Lines 41-45: Adjust the introduction if needed
- Lines 81-86: Personalize the "Why Economics & Mathematics" section

**File:** [research.html](research.html)
- Review research interests and modify as needed
- Add any specific professors or projects you're working with

### 6. Add Your CV PDF

1. Export your CV as PDF
2. Name it: `cv.pdf`
3. Place it in: `/Users/tergelkhuyag/Tergel_website/assets/cv.pdf`

The download links will automatically work once the file is in place.

### 7. Optional: Update Contact Page

**File:** [contact.html](contact.html)
- Line ~78: Response time note - adjust as needed
- Consider adding other contact methods if relevant

## 🎨 Optional Customizations

### Color Scheme
If you want to change colors, edit [css/style.css](css/style.css) lines 14-23

### Remove Placeholder Sections
If any sections don't apply to you (like research experience if you don't have any yet),
you can:
- Remove the entire section
- Or keep the placeholder and add content later

### Add More Content
- Add profile photo to home page
- Add research project descriptions as they develop
- Add blog posts or writing samples

## 🚀 Ready to Go Live?

Once you've customized the content:

1. **Test Locally:**
   ```bash
   cd /Users/tergelkhuyag/Tergel_website
   python3 -m http.server 8000
   # Visit http://localhost:8000
   ```

2. **Deploy:** Follow the deployment guide in [README.md](README.md)
   - GitHub Pages (recommended for students)
   - Netlify
   - Vercel

## Priority Tasks (Do These First)

1. [ ] Update LinkedIn and GitHub URLs in footer (all pages)
2. [ ] Add your CV PDF to assets folder
3. [ ] Fill in CV page with your actual education and experience
4. [ ] Review and personalize the About page with your story
5. [ ] Update coursework to reflect your actual classes
6. [ ] Test the website locally

## Questions?

Refer to:
- [README.md](README.md) - Full documentation
- [QUICK_START.md](QUICK_START.md) - Step-by-step guide

---

**Your website is 80% ready!** The core structure and your contact info are in place.
Just add your content and you're good to go! 🎓