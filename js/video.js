// sélectionnez les éléments de la page HTML
const videoContainer = document.querySelector('.video-container');
const videos = Array.from(videoContainer.querySelectorAll('.video'));
const previousButton = document.querySelector('.previous-button');
const nextButton = document.querySelector('.next-button');

// initialisez le compteur de la vidéo en cours
let currentVideo = 0;

// ajoutez des écouteurs d'événements aux boutons précédents et suivants
previousButton.addEventListener('click', () => {
  // décrémentez le compteur de la vidéo en cours
  currentVideo--;

  // si le compteur est inférieur à 0, revenez à la dernière vidéo
  if (currentVideo < 0) {
    currentVideo = videos.length - 1;
  }

  // affichez la vidéo en cours en masquant les autres vidéos
  videos.forEach((video, index) => {
    if (index === currentVideo) {
      video.classList.add('active');
    } else {
      video.classList.remove('active');
    }
  });
});

nextButton.addEventListener('click', () => {
  // incrémentez le compteur de la vidéo en cours
  currentVideo++;

  // si le compteur dépasse le nombre de vidéos, revenez à la première vidéo
  if (currentVideo > videos.length - 1) {
    currentVideo = 0;
  }

  // affichez la vidéo en cours en masquant les autres vidéos
  videos.forEach((video, index) => {
    if (index === currentVideo) {
      video.classList.add('active');
    } else {
      video.classList.remove('active');
    }
  });
});
