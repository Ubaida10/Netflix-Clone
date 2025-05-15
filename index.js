// Select all elements with the class 'faq-toggle' (each FAQ question)
document.querySelectorAll(".faq-toggle").forEach((item) => {
  // Add a click event listener to each FAQ question
  item.addEventListener("click", () => {
    
    // Collapse all other open FAQs except the one just clicked
    document.querySelectorAll(".faq-toggle").forEach((faq) => {
      if (faq !== item) {
        // Remove the 'active' class to revert icon to '+'
        faq.classList.remove("active");

        // Update aria-expanded attribute for accessibility
        faq.setAttribute("aria-expanded", "false");

        // Collapse the associated answer section
        faq.nextElementSibling.style.maxHeight = null;
      }
    });

    // Check if the clicked item is currently active (open)
    const isActive = item.classList.contains("active");

    // Toggle the 'active' class to switch between '+' and '×'
    item.classList.toggle("active");

    // Update aria-expanded attribute to reflect new state
    item.setAttribute("aria-expanded", String(!isActive));

    // Get the corresponding answer element (next sibling)
    const answer = item.nextElementSibling;

    if (!isActive) {
      // Expand the answer section by setting its max-height
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      // Collapse the answer section
      answer.style.maxHeight = null;
    }
  });
});
