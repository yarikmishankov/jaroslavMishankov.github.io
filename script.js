const imageThumbsEl = document.getElementById('image-thumbs');
const currentImageEl = document.getElementById('current-image');
const currentImageDescriptionEl = document.getElementById(
  'current-image-description'
);
const images = [
  {
    src: 'image1.jpg',
    alt: 'Image 1',
    description: 'Dark knight',
  },
  { src: 'image2.jpg', alt: 'Image 2', description: 'Avengers' },
  {
    src: 'image3.jpg',
    alt: 'Image 3',
    description: 'Harry Potter',
  },
  {
    src: 'image4.jpg',
    alt: 'Image 4',
    description: 'Justice Legue',
  },
  {
    src: 'image5.jpg',
    alt: 'Image 5',
    description: 'Last Samurai',
  },
];
let currentImageIndex = 0;

const onLoad = () => {
  images.forEach((image, i) => {
    var thumb = document.createElement('img');
    thumb.src = `images/${image.src}`;
    thumb.alt = image.alt;
    thumb.classList.add('thumb');
    thumb['data-index'] = i;
    imageThumbsEl.appendChild(thumb);
    thumb.addEventListener('click', () => selectImage(i));
  });

  selectImage(currentImageIndex);
};

const selectImage = (index) => {
  currentImageIndex = index;
  currentImageEl.src = `images/${images[index].src}`;
  currentImageEl.alt = images[index].alt;
  currentImageDescriptionEl.innerText = images[index].description;

  imageThumbsEl.childNodes.forEach((image) => image.classList.remove('active'));
  imageThumbsEl.children[index].classList.add('active');
};

const onButtonClick = (direction) => {
  if (direction === 'next') {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
      currentImageIndex = 0;
    }
  } else {
    currentImageIndex--;
    if (currentImageIndex < 0) {
      currentImageIndex = images.length - 1;
    }
  }
  selectImage(currentImageIndex);
};

onLoad();
