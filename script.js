var images = ['img/trk_1.jpg', 'img/trk_2.jpg', 'img/trk_3.jpg', 'img/trk_4.jpg', 'img/trk_5.jpg','img/trk_6.jpg','img/trk_7.jpg'];

var x = 0;

var imgs = document.getElementById('img');

setInterval(slider, 2000);


function slider() {

  if (x < images.length) {
    x = x + 1;
  } else {
    x = 1;
  }


  imgs.innerHTML = "<img src=" + images[x - 1] + ">";


}
