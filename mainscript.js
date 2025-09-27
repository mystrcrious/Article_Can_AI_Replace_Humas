const burgerBtn = document.getElementById('burger-btn');
  const navList = document.querySelector('nav ul');

  burgerBtn.addEventListener('click', () => {
    navList.classList.toggle('show');
  });
  
