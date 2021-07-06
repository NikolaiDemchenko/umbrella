window.addEventListener("DOMContentLoaded", () => {
   const gameBox = document.querySelector('.game-box'),
         numberOfFoundUmbrellas = document.querySelector('.number-of-found-umbrellas'),
         btn = document.querySelector('.btn');

   gameBox.addEventListener('click', (event) => {
      if (event.target.classList.contains('umbrella')) {
          numberOfFoundUmbrellas.innerText = +numberOfFoundUmbrellas.textContent + 1;
      }
      if (numberOfFoundUmbrellas.textContent === '3') {
          btn.classList.remove('hide');
          btn.classList.add('btn-animation');
      }
      if (event.target.classList.contains('btn')) {
          btn.classList.remove('btn-animation');
      }
   });
});