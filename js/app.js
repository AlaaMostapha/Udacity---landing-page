/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const navbar__list = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");
/**
 * End Global Variables
 * Start Helper Functions
 *
 */
const isInViewport = (item) => {
  const bounding = item.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.right <= window.innerWidth &&
    bounding.bottom <= window.innerHeight
  );
};
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
const buildNav = () => {
  //create fragment
  const fragment = document.createDocumentFragment();
  //create nav list
  sections.forEach((item, i) => {
    const listItem = document.createElement("li");
    const listLink = document.createElement("a");
    listLink.textContent = item.dataset.nav;
    listLink.classList.add("menu__item");
    listLink.href = `#${item.id}`;
    listItem.appendChild(listLink);
    fragment.appendChild(listItem);
  });
  navbar__list.appendChild(fragment);
};
//array to
// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click
const scrollToSection = () => {
  //prevent multiple event listeners (too many events)
  navbar__list.addEventListener("click", function (e) {
    e.preventDefault();
    //get clicked li
    const target = e.target.getAttribute("href");
    //detect section
    const element = document.querySelector(target);
    element.scrollIntoView({ behavior: "smooth" });
  });
};
// Set sections as active
const setSectionAndLinkToActive = () => {
  const menuLinks = document.querySelectorAll("a.menu__item");
  sections.forEach((item, i) => {
    window.addEventListener("scroll", function (e) {
      //check if item in viewport to add/remove active class from section and link
      if (isInViewport(item)) {
        item.classList.add("your-active-class");
        menuLinks.forEach((link, i) => {
          if (link.textContent == item.dataset.nav) {
            link.classList.add("your-active-link");
          } else {
            link.classList.remove("your-active-link");
          }
        });
      } else {
        item.classList.remove("your-active-class");
      }
    });
  });
};
/// call functions
buildNav();
scrollToSection();
setSectionAndLinkToActive();
