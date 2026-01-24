// Toggle experience details
document.addEventListener('DOMContentLoaded', function() {
  // Get all experience buttons
  const experienceButtons = document.querySelectorAll('.experience-button');
  
  experienceButtons.forEach(button => {
    button.addEventListener('click', function() {
      const company = this.getAttribute('data-company');
      const details = document.querySelector(`.experience-details[data-company="${company}"]`);
      const companyName = this.querySelector('.company-name');
      
      // Toggle the open class
      if (details.classList.contains('open')) {
        details.classList.remove('open');
        companyName.classList.remove('active');
      } else {
        details.classList.add('open');
        companyName.classList.add('active');
      }
    });
  });
});
