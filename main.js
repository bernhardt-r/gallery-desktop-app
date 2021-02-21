let currentPhoto = 0;
let imagesData = [
  {
    photo: 'images/tigris1.jpg',
    title: 'Eyes',
    description: 'Donec nec nisl ac lorem condimentum pulvinar. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
  },
  {
    photo: 'images/tigris2.jpg',
    title: 'Cub',
    description: 'Donec nec nisl ac lorem condimentum pulvinar. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
  },
  {
    photo: 'images/tigris3.jpg',
    title: 'Water',
    description: 'Donec nec nisl ac lorem condimentum pulvinar. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
  },
  {
    photo: 'images/tigris4.jpg',
    title: 'Seeds',
    description: 'Donec nec nisl ac lorem condimentum pulvinar. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
  },
  {
    photo: 'images/tigris5.jpg',
    title: 'Cat Love',
    description: 'Donec nec nisl ac lorem condimentum pulvinar. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
  },
  {
    photo: 'images/tigris6.jpg',
    title: 'King',
    description: 'Donec nec nisl ac lorem condimentum pulvinar. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
  },
];

let loadPhoto = (photoNumber) => {
  $('#photo').attr('src', imagesData[photoNumber].photo);
  $('#photo-title').text(imagesData[photoNumber].title);
  $('#photo-description').text(imagesData[photoNumber].description);
  
  $('.thumb').children('img').removeClass('active_thumb');
  $('.thumb').children('img[data-index="' + photoNumber + '"]').addClass('active_thumb');
};

$('#right-arrow').click(() => {
  if (currentPhoto<5) {
    currentPhoto++;
  } else {currentPhoto = 0}
  loadPhoto(currentPhoto);
});

$('#left-arrow').click(() => {
  if (currentPhoto>0) {
    currentPhoto--;
  } else {currentPhoto = 5}
  loadPhoto(currentPhoto);
});

imagesData.forEach((imagesThumb, index) => {
  $('.container_thumb').append(`<div class="thumb">` + '<img class="thumb_img" src="' + imagesThumb.photo + '"' + ` data-index="${index}">` + `<div class="thumb_title">${imagesThumb.title}</div>`) + '</div>';

  $('.thumb').click((event) => {
    let indexClicked = $(event.target).attr("data-index");
    let numberIndex = parseInt(indexClicked);
    /*
    $('#photo').attr('src', imagesData[numberIndex].photo);
    $('#photo-title').text(imagesData[numberIndex].title);
    $('#photo-description').text(imagesData[numberIndex].description);

    $('.thumb').children('img').removeClass('active_thumb');

    $('.thumb').children('img[data-index="' + numberIndex + '"]').addClass('active_thumb');
    */  
    loadPhoto(numberIndex);
    currentPhoto = numberIndex;
  });
  
});

loadPhoto(currentPhoto);