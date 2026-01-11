# Personal Academic Website

A clean, modern personal website for a university student majoring in Economics and Applied Mathematics with strong interests in development economics and quantitative research.

## Features

- **Minimalist Design** - Clean, academic aesthetic with neutral color palette
- **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- **Six Main Pages**:
  - Home - Academic introduction and core interests
  - About - Academic journey and long-term goals
  - Research & Interests - Development economics focus areas
  - Coursework & Skills - Academic background and technical competencies
  - CV - Downloadable resume section
  - Contact - Professional contact form

## Project Structure

```
Tergel_website/
├── index.html              # Home page
├── about.html              # About page
├── research.html           # Research & Interests page
├── coursework.html         # Coursework & Skills page
├── cv.html                 # CV page
├── contact.html            # Contact page
├── css/
│   └── style.css          # Main stylesheet
├── js/
│   └── script.js          # JavaScript for navigation and forms
├── assets/
│   └── cv.pdf             # Your CV (add this file)
└── README.md              # This file
```

## Customization Guide

### 1. Personal Information

Replace all placeholder text with your information:

- `[Your Name]` - Your full name
- `[University Name]` - Your university
- `your.email@university.edu` - Your email address
- LinkedIn and GitHub URLs
- Year information (graduation date, experience dates)

### 2. Content Updates

**Home Page ([index.html](index.html)):**
- Update the hero introduction text
- Modify the three core focus area cards
- Adjust the value proposition section

**About Page ([about.html](about.html)):**
- Replace placeholder text with your academic journey
- Add your personal motivation and story
- Update long-term goals section

**Research Page ([research.html](research.html)):**
- Customize research interests
- Add specific topics you're interested in
- Add research projects as you complete them

**Coursework Page ([coursework.html](coursework.html)):**
- Update with actual courses you've taken
- Modify skill tags to reflect your abilities
- Add or remove skills as needed

**CV Page ([cv.html](cv.html)):**
- Fill in education details
- Add research experience
- Include professional experience
- List honors and awards
- Update skills section

**Contact Page ([contact.html](contact.html)):**
- Update contact information
- Modify the response time note
- Customize the form if needed

### 3. Adding Your CV PDF

1. Create or export your CV as a PDF
2. Name it `cv.pdf`
3. Place it in the `assets/` directory
4. The download links will automatically work

### 4. Color Customization

To change the color scheme, edit the CSS variables in [css/style.css](css/style.css):

```css
:root {
    --primary-color: #2c3e50;      /* Dark blue-gray */
    --accent-color: #3498db;        /* Blue accent */
    --text-primary: #2c3e50;        /* Main text color */
    --bg-primary: #ffffff;          /* White background */
    --bg-secondary: #f8f9fa;        /* Light gray background */
}
```

### 5. Contact Form Setup

The contact form currently uses a `mailto:` link. For a production website, consider:

**Option A: FormSpree (Recommended)**
1. Sign up at [formspree.io](https://formspree.io)
2. Create a form and get your endpoint
3. Update the `handleFormSubmission` function in [js/script.js](js/script.js)

**Option B: Netlify Forms**
1. Add `netlify` attribute to the form in [contact.html](contact.html)
2. Deploy to Netlify
3. Forms will automatically work

**Option C: EmailJS**
1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Follow their integration guide
3. Update the JavaScript accordingly

## Local Development

To view the website locally:

1. Open `index.html` in a web browser
2. Or use a local server:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (with http-server)
npx http-server
```

Then visit `http://localhost:8000` in your browser.

## Deployment Options

### GitHub Pages (Free)

1. Create a GitHub repository
2. Push your code to the repository
3. Go to Settings → Pages
4. Select the main branch as source
5. Your site will be live at `username.github.io/repo-name`

### Netlify (Free)

1. Sign up at [netlify.com](https://www.netlify.com/)
2. Connect your GitHub repository or drag and drop the folder
3. Your site will be deployed automatically

### Vercel (Free)

1. Sign up at [vercel.com](https://vercel.com/)
2. Import your GitHub repository
3. Deploy with one click

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Typography

The website uses:
- **Inter** - Primary sans-serif font for body text and UI elements
- **Merriweather** - Serif font for elegant headings (loaded from Google Fonts)

## Accessibility

- Semantic HTML structure
- ARIA labels for navigation
- Keyboard navigation support
- Sufficient color contrast ratios
- Mobile-friendly touch targets

## Performance

- Minimal external dependencies (only Google Fonts)
- Optimized CSS with CSS variables
- Lightweight JavaScript
- Fast loading times

## Future Enhancements

Consider adding:
- Blog section for research updates
- Project gallery with images
- Publication list with citations
- Dark mode toggle
- Analytics (Google Analytics or similar)
- SEO optimization (meta tags, sitemap)
- Social media integration

## License

This is a personal website template. Feel free to use and modify it for your own purposes.

## Questions or Issues?

If you need help customizing this website, feel free to:
1. Review the comments in the code
2. Check the HTML structure
3. Refer to the CSS for styling details

## Next Steps

1. ✅ Replace all `[Your Name]` placeholders
2. ✅ Update email and social media links
3. ✅ Add your CV PDF to the assets folder
4. ✅ Customize content for each page
5. ✅ Test the website locally
6. ✅ Deploy to your preferred hosting platform
7. ✅ Share your website URL!

---

Built with HTML, CSS, and JavaScript. No frameworks required.