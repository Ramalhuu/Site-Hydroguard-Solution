const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.btnSlide.prev');
  const nextBtn = document.querySelector('.btnSlide.next');
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('ativo', i === index);
    });
  }

  prevBtn.addEventListener('click', () => {
    current = (current === 0) ? slides.length - 1 : current - 1;
    showSlide(current);
  });

  nextBtn.addEventListener('click', () => {
    current = (current === slides.length - 1) ? 0 : current + 1;
    showSlide(current);
  });

  showSlide(current);