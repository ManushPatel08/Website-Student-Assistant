# Stony Brook University - AAAS Page Replication

This is a static HTML/CSS replication of the "M.A. in Contemporary Asian & Asian American Studies" page from the Stony Brook University website.

This project was built to demonstrate front-end development skills (HTML5, CSS3) and, most importantly, a strong understanding of how a static design is implemented within a modern Content Management System (CMS) like **Omni CMS**.

## 📸 Final Project Screenshot

(To add your screenshot: In GitHub, edit this file and drag-and-drop your image file right here. It will automatically upload and create a link.)

![My final replicated page](path/to/your/screenshot.png)

## 🛠️ Technologies Used

* **HTML5:** Used for the core structure and semantics of the page.
* **CSS3:** Used for all custom styling, layout (Flexbox), and hover effects.
    * **No Bootstrap or other frameworks were used.** All styles are 100% custom-written to precisely match the original site's design, colors, and layout.
* **Google Fonts:** Imports the "Barlow" font family to match the official Stony Brook brand guidelines.

## 🏛️ Omni CMS Implementation Notes

This static page was built from the ground up to be "CMS-ready." The code is commented and structured to show how it would be broken apart and managed within a real Omni CMS environment.

### 1. Templates (Includes)
* The `<header class="site-header">` and `<footer class="site-footer">` sections are identical on every page.
* In Omni CMS, these would be **Template "Include" files** (e.g., `/_includes/header.pcf` and `/_includes/footer.pcf`).
* This means a content administrator can update the main navigation or footer in *one file*, and it will automatically update across the entire website.

### 2. Editable Content Regions
* The `<main class="page-content-wrapper">` element represents the primary **"Editable Region"**.
* This is the only section a standard content editor (like a professor or department admin) would be able to change using the WYSIWYG editor.

### 3. Snippets
Snippets are pre-styled, reusable blocks of code that an editor can insert without having to write HTML.
* **Button Group:** The `div class="button-group"` is a perfect example of a **"Snippet."** An editor would "Insert Snippet > Button Group" and simply fill in the text and links.
* **Contact Block:** The final "Contact" section would also be a snippet to ensure consistent formatting for all faculty contact info.

### 4. Assets
Assets are reusable pieces of content (like a faculty list) that can be managed in one central place and displayed on multiple pages.
* **Faculty List:** The `<h4>Faculty:</h4>` section is a prime candidate for an **"Asset."**
* **Links and Resources:** The list of links (Graduate School, Apply Now, etc.) would be another **"Asset."**
* This way, if a link or faculty member's name changes, an admin only has to update the Asset *once*, and it will automatically be correct on every page that uses it.

## 🚀 How to View

1.  Clone this repository: `git clone https://github.com/ManushPatel08/Website-Student-Assistant.git`
2.  Open the `index.html` file in any web browser.