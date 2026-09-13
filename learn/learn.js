const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
      header.addEventListener('click', () => {
        const item = header.parentElement;
        item.classList.toggle('active');
      });
    });