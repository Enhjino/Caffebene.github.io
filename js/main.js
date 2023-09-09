document.addEventListener('DOMContentLoaded', () => {
      const yearDivs = document.querySelectorAll('.year');
      const historySections = document.querySelectorAll('.history-section');

      yearDivs.forEach(yearDiv => {
        yearDiv.addEventListener('click', () => {
          const year = parseInt(yearDiv.textContent);
          
          historySections.forEach(section => {
            section.classList.remove('active');
            
            if (parseInt(section.getAttribute('data-year')) === year) {
              section.classList.add('active');
            }
          });
        });
      });
    });