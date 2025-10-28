/**
 * @file script.js
 * @brief Handles interactive tab functionality for the AL Specialization page.
 * @author Manush Patel
 * @date 2025-10-27
 *
 * This script provides the functionality for a tabbed interface. It is designed 
 * to be maintainable and scalable, allowing content editors in a CMS 
 * (like Omni CMS) to add, remove, or modify tabs in the HTML without 
 * needing to update this script.
 */

/**
 * Handles the click event on a tab-link button to show the corresponding
 * tab-content panel.
 *
 * This function is designed to be called via an `onclick` event in the HTML.
 * It works by:
 * 1. Hiding all elements with the class "tab-content".
 * 2. Removing the "active" class from all "tab-link" buttons.
 * 3. Displaying the specific "tab-content" element whose ID matches the `langName` parameter.
 * 4. Adding the "active" class to the specific button that was clicked (`evt.currentTarget`).
 *
 * @param {Event} evt - The browser's event object, passed from the `onclick` attribute.
 * @param {string} langName - The ID of the tab-content element to display (e.g., 'Chinese', 'Japanese').
 */
function openLang(evt, langName) {
    // ---
    // 1. DECLARE VARIABLES
    // ---
    let i, tabcontent, tablinks;

    // ---
    // 2. HIDE ALL TAB CONTENT PANELS
    // ---
    // Get a collection of all elements with the class "tab-content".
    // This makes the script scalable. Even if a 4th language is added in the CMS,
    // this code will find it and hide it without any changes.
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // ---
    // 3. DEACTIVATE ALL TAB LINKS
    // ---
    // Get a collection of all elements with the class "tab-link".
    // Loop through them and remove the "active" class. This ensures only
    // the clicked tab will have the active styling.
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // ---
    // 4. SHOW THE CURRENT TAB AND SET THE BUTTON TO ACTIVE
    // ---
    
    // 4a. Show the specific tab panel passed into the function.
    // This is the line that was incomplete in the original file.
    document.getElementById(langName).style.display = "block";

    // 4b. Add the "active" class to the button that was clicked.
    // `evt.currentTarget` refers to the specific <button> element that
    // triggered this function call.
    evt.currentTarget.className += " active";
}

// ---
// OMNI CMS & FUTURE IMPROVEMENT NOTES
// ---
//
// 1. DYNAMIC CONTENT:
//    In a CMS environment like Omni, the course and faculty lists (<ul>)
//    inside each tab panel would ideally be managed as "Snippets" or "Assets".
//    This would allow a department admin to update a faculty list in one
//    place, and it would automatically populate on this page and any other
//    page using that asset. The current HTML/CSS/JS structure fully
//    supports this, as it only styles the content provided.
//
// 2. ACCESSIBILITY (A11Y):
//    For a production-level university site, accessibility is crucial.
//    To improve this tabbed interface, we would:
//      - Add `role="tab"` to the buttons and `role="tabpanel"` to the content divs.
//      - Use `aria-controls` on the button to link it to its panel ID.
//      - Use `aria-selected="true/false"` on the buttons to indicate state.
//      - Use `aria-labelledby` on the panel to link it back to its button.
//      - Add keyboard navigation (left/right arrows) to switch tabs.
//
// 3. MODERN JAVASCRIPT (UNOBTRUSIVE):
//    While the `onclick=""` attribute in the HTML works perfectly, a more
//    modern approach (called "unobtrusive JavaScript") would be to remove
//    the `onclick` attributes from the HTML and add event listeners here
//    in the JS file. This improves "Separation of Concerns" and is
//    a common best practice.
//
//    Example (for future reference):
//    document.addEventListener('DOMContentLoaded', () => {
//        const tabLinks = document.querySelectorAll('.tab-link');
//        tabLinks.forEach(button => {
//            button.addEventListener('click', (event) => {
//                const langName = button.getAttribute('data-lang'); // e.g., <button data-lang="Chinese">
//                openLang(event, langName);
//            });
//        });
//    });
//