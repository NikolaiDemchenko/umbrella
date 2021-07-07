window.addEventListener("DOMContentLoaded", () => {

   const gameBox = document.querySelector('.game-box'),
         numberOfFoundUmbrellas = document.querySelector('.number-of-found-umbrellas'),
         btn = document.querySelector('.btn'),
         audio = document.querySelector('.music'),
         umbrella = document.querySelectorAll('.umbrella'),
         startText = document.querySelector('.start-text');
   let timerId = 0;

   gameBox.addEventListener('click', (event) => {
      if (startText.classList.contains('hide') === false) {
          setTimeout(() => {
              startText.classList.add('hide');
          }, 900);
          startText.classList.add('text-hide-animation');
          umbrella.forEach(item => {
              item.style.cursor = 'pointer';
          });
      }
      else if (event.target.classList.contains('umbrella') && numberOfFoundUmbrellas.textContent !== '3' || event.target.classList.contains('umbrella') && btn.classList.contains('hide')) {
          numberOfFoundUmbrellas.innerText = +numberOfFoundUmbrellas.textContent + 1;
          event.target.style.cursor = 'default';
          setTimeout(() => {
              event.target.classList.toggle('hide');
          },900);
          event.target.classList.toggle('umbrella-hide-anim');
          audio.play();
      }

      if (numberOfFoundUmbrellas.textContent === '3' && event.target !== gameBox) {
          umbrella.forEach(item => {
             if (item.classList.contains('hide') === false) {
                 item.style.cursor = 'default';
             }
          });
          btn.classList.remove('hide');
          timerId = setTimeout(() => {
              btn.classList.add('btn-animation');
          }, 0);
      }

      if (event.target.classList.contains('btn')) {
          umbrella.forEach(item => {
              if (item.classList.contains('hide') === false) {
                  item.style.cursor = 'pointer';
              }
          });
          btn.classList.remove('btn-animation');
          setTimeout(() => {
              btn.classList.add('hide');
          },1001);
          clearTimeout(timerId);
      }
   });
});