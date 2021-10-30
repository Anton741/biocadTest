var burger = document.querySelector('.burger__menu');
var menu = document.querySelector('.menu__list');

menu.addEventListener('click', () => {
  if (!!burger.classList.contains('burger__menu--active')) {
    document.body.classList.remove('body-lock');
    burger.classList.remove('burger__menu--active');
    menu.classList.remove('active');
  }
});

burger.addEventListener('click', () => {
  document.body.classList.toggle('body-lock');
  burger.classList.toggle('burger__menu--active');
  menu.classList.toggle('active');
});

const skillLine = document.querySelectorAll('.progress');
skillLine.forEach((line, index) => {
  line.setAttribute('id', `line__${index + 1}`);
  document.querySelector(`#line__${index + 1}`).style.width = `${25 * (index + 1)}%`;
});

function addImgToGallery(sourseImage) {
  const galleryItem = document.createElement('div');
  galleryItem.className = 'gallery__item';
  const imgContainer = document.createElement(`div`);
  imgContainer.className = 'item__gallery';
  const imgActive = document.createElement(`div`);
  imgActive.className = 'item__gallery--active';
  const img = document.createElement('img');
  img.src = sourseImage;
  imgContainer.append(imgActive, img);
  galleryItem.append(imgContainer);
  return galleryItem;
}

function makeGallery(countImage) {
  const gallery = document.querySelector('.gallery__content');
  while (countImage > 0) {
    if (countImage % 2 === 0) {
      gallery.append(addImgToGallery('img/Rectangle 7.5.png'));
    } else {
      gallery.append(addImgToGallery('img/Rectangle 7.png'));
    }
    countImage -= 1;
  }
}

// makeGallery(8);

function zoomImage() {
  const images = document.querySelectorAll('.work__img--active');
  images.forEach((element) =>
    element.addEventListener('click', () => {
      element = event.target.parentElement.parentElement;
      const imgSrc = event.target.nextSibling.src;
      openModal(imgSrc, element);
    })
  );
}

zoomImage();

function openModal(imgSrc, element) {
  const modal = document.querySelector('.modal__img ');
  const close = document.querySelector('.modal__close');
  image = modal.querySelector('.img-modal__container');
  nextIMG = element.nextSibling;
  previousIMG = element.previousElementSibling;
  modal.classList.add('modal__img--active');
  image.innerHTML = `<img src="${imgSrc}">`;
  close.addEventListener('click', () => {
    modal.classList.remove('modal__img--active');
  });
  const arrows = document.querySelector('.modal__arrows');
  arrows.addEventListener('click', () => {
    if (event.target.className === 'arrow__right') {
      nextImg(nextIMG, element);
    }
    if (event.target.className === 'arrow__left') {
      previousImg(previousIMG, element);
    }
  });
}

function nextImg(next, element) {
  if (next) {
    image.innerHTML = `<img src="${next.querySelector('img').src}">`;
    nextIMG = nextIMG.nextSibling;
  } else {
    nextIMG = element.parentElement.firstElementChild;
    image.innerHTML = `<img src="${nextIMG.querySelector('img').src}">`;
  }
}

function previousImg(previous, element) {
  if (previous) {
    image.innerHTML = `<img src="${previous.querySelector('img').src}">`;
    previousIMG = previousIMG.previousElementSibling;
  } else {
    previousIMG = element.parentElement.lastElementChild;
    image.innerHTML = `<img src="${previousIMG.querySelector('img').src}">`;
  }
}
