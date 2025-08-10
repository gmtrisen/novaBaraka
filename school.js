    function showSection(sectionId) {
      document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
      });
      document.getElementById(sectionId).classList.add('active');
      const goBackButton = document.querySelector('.go-back');
      goBackButton.style.display = sectionId === 'home' ? 'none' : 'block';
    }