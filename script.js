/**
 * @file script.js
 * @brief Handles interactive tab functionality for the AAAS page.
 * @author Manush Patel
 * @date 2025-10-27
 *
 * This script now controls two levels of tabs:
 * 1. openSpec(): For the main Specializations (AL, ML, Global)
 * 2. openLang(): For the nested Language tabs (CHI, JPN, KOR)
 */

/**
 * Handles the click event for the MAIN SPECIALIZATION tabs.
 * @param {Event} evt - The browser's event object.
 * @param {string} specName - The ID of the main tab content to display (e.g., 'SpecAL').
 */
function openSpec(evt, specName) {
    let i, tabcontent, tablinks;

    // 1. Hide all MAIN tab content panels
    tabcontent = document.getElementsByClassName("spec-tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // 2. Deactivate all MAIN tab links
    tablinks = document.getElementsByClassName("spec-tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // 3. Show the current MAIN tab and set its button to active
    document.getElementById(specName).style.display = "block";
    evt.currentTarget.className += " active";
}

/**
 * Handles the click event for the NESTED LANGUAGE tabs.
 * @param {Event} evt - The browser's event object.
 * @param {string} langName - The ID of the nested tab content to display (e.g., 'Chinese').
 */
function openLang(evt, langName) {
    let i, tabcontent, tablinks;

    // 1. Hide all NESTED language tab content panels
    tabcontent = document.getElementsByClassName("lang-tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // 2. Deactivate all NESTED language tab links
    tablinks = document.getElementsByClassName("lang-tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // 3. Show the current NESTED tab and set its button to active
    document.getElementById(langName).style.display = "block";
    evt.currentTarget.className += " active";
}

// === NEW: SET DEFAULT TABS ON LOAD ===
// We now need to click the default main tab AND the default nested tab.
document.addEventListener("DOMContentLoaded", function() {
    
    // Click the default main specialization tab
    const defaultSpecTab = document.getElementById("defaultSpecOpen");
    if (defaultSpecTab) {
        defaultSpecTab.click();
    }
    
    // Click the default nested language tab
    const defaultLangTab = document.getElementById("defaultLangOpen");
    if (defaultLangTab) {
        defaultLangTab.click();
    }
});