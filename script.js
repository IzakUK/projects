document.querySelectorAll('.filter-btn').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    button.classList.add('active');
    
    const filterValue = button.getAttribute('data-filter');
    document.querySelectorAll('.project-card').forEach(card => {
      if (filterValue === 'all') {
        card.style.display = 'flex';
      } else {
        if (card.getAttribute('data-type') === filterValue) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      }
    });

    document.querySelectorAll('.project-card').forEach(card => {
      if (card.style.display !== 'none') {
        card.style.animation = 'none';
        setTimeout(() => {
          card.style.animation = '';
        }, 10);
      }
    });
  });
});
