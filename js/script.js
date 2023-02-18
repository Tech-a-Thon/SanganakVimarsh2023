let titleEle = document.querySelector('#event-title');
let titleEngEle = document.querySelector('#event-title-eng');
let i = false;
setInterval(() => {
  if (i) {
    titleEngEle.style.display = 'none';
    titleEle.style.display = 'inline-block';
  }
  else {
    titleEle.style.display = 'none';
    titleEngEle.style.display = 'inline-block';
  }
  i = !i;
}, 1e4);

// Fade in & Fade out
var fadeElements = document.getElementsByClassName('scrollFade');

function scrollFade() {
  var viewportBottom = window.scrollY + window.innerHeight;

  for (var index = 0; index < fadeElements.length; index++) {
    var element = fadeElements[index];
    var rect = element.getBoundingClientRect();

    var elementFourth = rect.height / 4;
    var fadeInPoint = window.innerHeight - elementFourth;
    var fadeOutPoint = -(rect.height / 4);

    if (rect.top <= fadeInPoint) {
      element.classList.add('scrollFade--visible');
      element.classList.add('scrollFade--animate');
      element.classList.remove('scrollFade--hidden');
    } else {
      element.classList.remove('scrollFade--visible');
      element.classList.add('scrollFade--hidden');
    }

    if (rect.top <= fadeOutPoint) {
      element.classList.remove('scrollFade--visible');
      element.classList.add('scrollFade--hidden');
    }
  }
}

document.addEventListener('scroll', scrollFade);
window.addEventListener('resize', scrollFade);
document.addEventListener('DOMContentLoaded', function () {
  scrollFade();
});

const btnScrollToTop = document.querySelector('#btn-back-to-top');

btnScrollToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  })
});

window.onscroll = function()
{
    var pageOffset = document.documentElement.scrollTop || document.body.scrollTop;
    if(pageOffset >= 1000)
    {
        document.getElementById('btn-back-to-top').style.visibility="visible"
    }else
    {
        document.getElementById('btn-back-to-top').style.visibility="hidden";
    }
};